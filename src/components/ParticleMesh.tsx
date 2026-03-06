'use client';

import { useEffect, useRef } from 'react';

interface Particle {
  x: number; y: number;
  vx: number; vy: number;
  radius: number;
  colorBase: string;
  alpha: number;
  pulseOffset: number;
  pulseSpeed: number;
}

const COLORS = ['rgba(62,242,209,', 'rgba(74,144,226,', 'rgba(167,139,250,'];
const COUNT = 90;
const MAX_DIST = 140;
const MOUSE_RADIUS = 190;
const BASE_SPEED = 0.28;

export default function ParticleMesh() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let W = 0, H = 0;
    let scrollProgress = 0;
    const mouse = { x: -999, y: -999 };
    let particles: Particle[] = [];
    let t = 0;

    // ── Resize ──────────────────────────────────────────────────────────────
    const resize = () => {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    };

    // ── Seed ────────────────────────────────────────────────────────────────
    const seed = () => {
      particles = Array.from({ length: COUNT }, () => ({
        x: Math.random() * W,
        y: Math.random() * H,
        vx: (Math.random() - 0.5) * BASE_SPEED * 2,
        vy: (Math.random() - 0.5) * BASE_SPEED * 2,
        radius: 0.9 + Math.random() * 1.6,
        colorBase: COLORS[Math.floor(Math.random() * COLORS.length)],
        alpha: 0.2 + Math.random() * 0.45,
        pulseOffset: Math.random() * Math.PI * 2,
        pulseSpeed: 0.007 + Math.random() * 0.014,
      }));
    };

    resize();
    seed();

    const onResize = () => { resize(); seed(); };
    window.addEventListener('resize', onResize);

    // ── Mouse ────────────────────────────────────────────────────────────────
    const onMouseMove = (e: MouseEvent) => { mouse.x = e.clientX; mouse.y = e.clientY; };
    const onMouseLeave = () => { mouse.x = -999; mouse.y = -999; };
    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);

    // ── Scroll ───────────────────────────────────────────────────────────────
    const onScroll = () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight;
      scrollProgress = max > 0 ? window.scrollY / max : 0;
    };
    window.addEventListener('scroll', onScroll, { passive: true });

    // ── Draw loop ─────────────────────────────────────────────────────────────
    const draw = () => {
      animId = requestAnimationFrame(draw);
      t++;

      // Background brightens subtly with scroll
      const b = Math.floor(scrollProgress * 10);
      ctx.fillStyle = `rgb(${5 + b},${7 + b},${13 + b})`;
      ctx.fillRect(0, 0, W, H);

      particles.forEach((p, i) => {
        // Mouse repel/attract
        const dx = mouse.x - p.x, dy = mouse.y - p.y;
        const d = Math.sqrt(dx * dx + dy * dy);
        if (d < MOUSE_RADIUS && d > 0) {
          const force = (1 - d / MOUSE_RADIUS) * 0.008;
          p.vx += dx * force * 0.06;
          p.vy += dy * force * 0.06;
        }

        // Speed cap
        const spd = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
        const maxSpd = BASE_SPEED * (1 + scrollProgress * 1.4);
        if (spd > maxSpd) { p.vx = (p.vx / spd) * maxSpd; p.vy = (p.vy / spd) * maxSpd; }

        p.x += p.vx;
        p.y += p.vy;

        // Edge wrap
        if (p.x < -20) p.x = W + 20;
        else if (p.x > W + 20) p.x = -20;
        if (p.y < -20) p.y = H + 20;
        else if (p.y > H + 20) p.y = -20;

        // Pulse + scroll brightness
        const pulse = Math.sin(t * p.pulseSpeed + p.pulseOffset) * 0.15 + 0.85;
        const finalAlpha = Math.min((p.alpha + scrollProgress * 0.5) * pulse, 1);

        // Glow halo
        if (finalAlpha > 0.5) {
          const glow = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius * 5);
          glow.addColorStop(0, p.colorBase + (finalAlpha * 0.28) + ')');
          glow.addColorStop(1, p.colorBase + '0)');
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius * 5, 0, Math.PI * 2);
          ctx.fillStyle = glow;
          ctx.fill();
        }

        // Core dot
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.colorBase + finalAlpha + ')';
        ctx.fill();

        // Connections
        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j];
          const ex = p.x - q.x, ey = p.y - q.y;
          const dist = Math.sqrt(ex * ex + ey * ey);
          if (dist < MAX_DIST) {
            const lineA = (1 - dist / MAX_DIST) * 0.15 * (1 + scrollProgress * 0.9);
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.strokeStyle = `rgba(100,185,225,${lineA})`;
            ctx.lineWidth = 0.55;
            ctx.stroke();
          }
        }
      });
    };

    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0"
      style={{ pointerEvents: 'none', display: 'block' }}
      aria-hidden="true"
    />
  );
}