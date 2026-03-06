'use client';

import { useEffect, useRef } from 'react';

interface Star {
  x: number;
  y: number;
  baseRadius: number;
  radius: number;
  baseAlpha: number;
  alpha: number;
  twinkleSpeed: number;
  twinkleOffset: number;
  // for shooting stars / parallax depth
  depth: number;
  // scroll brightness pulse target
  brightTarget: number;
  brightCurrent: number;
}

const STAR_COUNT = 280;
const SHOOTING_INTERVAL = 3200; // ms between shooting stars

export default function StarField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let shootingStars: {
      x: number; y: number;
      vx: number; vy: number;
      length: number;
      alpha: number;
      life: number;
      maxLife: number;
    }[] = [];

    // ── Resize ──────────────────────────────────────────────────────────────
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // ── Seed stars ───────────────────────────────────────────────────────────
    const stars: Star[] = Array.from({ length: STAR_COUNT }, () => {
      const depth = Math.random(); // 0 = far, 1 = close
      const baseRadius = 0.3 + depth * 1.4;
      const baseAlpha = 0.15 + depth * 0.55;
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        baseRadius,
        radius: baseRadius,
        baseAlpha,
        alpha: baseAlpha,
        twinkleSpeed: 0.003 + Math.random() * 0.012,
        twinkleOffset: Math.random() * Math.PI * 2,
        depth,
        brightTarget: 0,
        brightCurrent: 0,
      };
    });

    // ── Scroll tracking ──────────────────────────────────────────────────────
    let scrollProgress = 0; // 0–1 across full page height
    let lastScrollY = 0;
    let scrollVelocity = 0;

    const onScroll = () => {
      const doc = document.documentElement;
      const maxScroll = doc.scrollHeight - doc.clientHeight;
      scrollProgress = maxScroll > 0 ? window.scrollY / maxScroll : 0;

      scrollVelocity = Math.abs(window.scrollY - lastScrollY);
      lastScrollY = window.scrollY;

      // Each scroll burst — randomly pick ~15% of stars to light up
      const burst = Math.min(scrollVelocity / 40, 1); // normalise velocity
      stars.forEach((s) => {
        if (Math.random() < 0.15 * burst + scrollProgress * 0.3) {
          s.brightTarget = 0.6 + Math.random() * 0.4;
        }
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });

    // ── Shooting star spawner ────────────────────────────────────────────────
    const spawnShootingStar = () => {
      const angle = (Math.PI / 6) + Math.random() * (Math.PI / 6); // diagonal range
      const speed = 8 + Math.random() * 6;
      shootingStars.push({
        x: Math.random() * canvas.width * 0.7,
        y: Math.random() * canvas.height * 0.4,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        length: 80 + Math.random() * 120,
        alpha: 1,
        life: 0,
        maxLife: 55 + Math.random() * 30,
      });
    };

    const shootInterval = setInterval(spawnShootingStar, SHOOTING_INTERVAL);

    // ── Nebula gradient (static, drawn once per frame as cheap BG) ───────────
    const drawNebula = () => {
      // Very subtle deep-blue glow in top-left corner, teal hint bottom-right
      const g1 = ctx.createRadialGradient(
        canvas.width * 0.15, canvas.height * 0.2, 0,
        canvas.width * 0.15, canvas.height * 0.2, canvas.width * 0.45
      );
      g1.addColorStop(0, `rgba(30, 40, 80, ${0.18 + scrollProgress * 0.12})`);
      g1.addColorStop(1, 'rgba(0,0,0,0)');

      const g2 = ctx.createRadialGradient(
        canvas.width * 0.85, canvas.height * 0.75, 0,
        canvas.width * 0.85, canvas.height * 0.75, canvas.width * 0.4
      );
      g2.addColorStop(0, `rgba(10, 60, 50, ${0.12 + scrollProgress * 0.1})`);
      g2.addColorStop(1, 'rgba(0,0,0,0)');

      ctx.fillStyle = g1;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = g2;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    };

    // ── Main animation loop ──────────────────────────────────────────────────
    let t = 0;
    const draw = () => {
      animId = requestAnimationFrame(draw);
      t++;

      // Clear
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = '#080b10';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      drawNebula();

      // Stars
      stars.forEach((s) => {
        // Twinkle
        const twinkle = Math.sin(t * s.twinkleSpeed + s.twinkleOffset) * 0.5 + 0.5;

        // Brightness lerp toward target
        s.brightCurrent += (s.brightTarget - s.brightCurrent) * 0.04;
        s.brightTarget *= 0.97; // decay

        const scrollBoost = scrollProgress * 0.5; // base glow from scroll position
        const totalAlpha = Math.min(
          s.baseAlpha + twinkle * 0.25 + s.brightCurrent + scrollBoost,
          1
        );
        const totalRadius = s.baseRadius + twinkle * 0.4 + s.brightCurrent * 1.8;

        // Glow for bright stars
        if (totalAlpha > 0.55 || s.brightCurrent > 0.2) {
          const glow = ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, totalRadius * 5);
          // Colour tint based on depth — far stars cool blue, close stars warm white
          const hue = s.depth > 0.7 ? '200,230,255' : '220,240,255';
          glow.addColorStop(0, `rgba(${hue}, ${totalAlpha * 0.5})`);
          glow.addColorStop(1, 'rgba(0,0,0,0)');
          ctx.beginPath();
          ctx.arc(s.x, s.y, totalRadius * 5, 0, Math.PI * 2);
          ctx.fillStyle = glow;
          ctx.fill();
        }

        // Core dot
        ctx.beginPath();
        ctx.arc(s.x, s.y, totalRadius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(220,240,255,${totalAlpha})`;
        ctx.fill();
      });

      // Shooting stars
      shootingStars = shootingStars.filter((ss) => ss.life < ss.maxLife);
      shootingStars.forEach((ss) => {
        ss.life++;
        ss.x += ss.vx;
        ss.y += ss.vy;
        ss.alpha = 1 - ss.life / ss.maxLife;

        const tailX = ss.x - Math.cos(Math.atan2(ss.vy, ss.vx)) * ss.length * ss.alpha;
        const tailY = ss.y - Math.sin(Math.atan2(ss.vy, ss.vx)) * ss.length * ss.alpha;

        const grad = ctx.createLinearGradient(tailX, tailY, ss.x, ss.y);
        grad.addColorStop(0, `rgba(62,242,209,0)`);
        grad.addColorStop(0.6, `rgba(200,240,255,${ss.alpha * 0.5})`);
        grad.addColorStop(1, `rgba(255,255,255,${ss.alpha})`);

        ctx.beginPath();
        ctx.moveTo(tailX, tailY);
        ctx.lineTo(ss.x, ss.y);
        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.5;
        ctx.stroke();
      });
    };

    draw();

    return () => {
      cancelAnimationFrame(animId);
      clearInterval(shootInterval);
      window.removeEventListener('resize', resize);
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