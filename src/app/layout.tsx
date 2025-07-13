'use client';

import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import RINGS from 'vanta/dist/vanta.halo.min'; // Using HALO

import { ThemeProvider as NextThemesProvider } from 'next-themes';

import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [vantaEffect, setVantaEffect] = useState<any>(null);
  const vantaRef = useRef(null);

  useEffect(() => {
    let currentVantaEffect: any = null;

    if (vantaRef.current && !vantaEffect) {
      currentVantaEffect = RINGS({
        el: vantaRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        backgroundColor: 0x1a202c,
        color: 0x4a90e2,
        maxDistance: 20.0,
        spacing: 15.0,
        THREE: THREE,
      });
      setVantaEffect(currentVantaEffect);
    }

    const handleResize = () => {
      (currentVantaEffect || vantaEffect)?.resize();
    };

    window.addEventListener('resize', handleResize);

    if (currentVantaEffect) {
      setTimeout(() => currentVantaEffect.resize(), 100);
    }

    return () => {
      window.removeEventListener('resize', handleResize);
      currentVantaEffect?.destroy();
      vantaEffect?.destroy();
    };
  }, []);

  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className="bg-white dark:bg-black text-black dark:text-white relative min-h-screen">
        {/* Vanta Background */}
        <div ref={vantaRef} className="fixed inset-0 z-0" style={{ pointerEvents: 'none' }} />

        <NextThemesProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="relative z-10">
            <Navbar />
            {children}
            <Footer />
          </div>
        </NextThemesProvider>

        {/* Floating Buttons: View Resume & Hire Me */}
        <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
          {/* Hire Me */}
          <a
            href="mailto:sunilravulapati028@gmail.com"
            className="flex items-center gap-2 bg-gradient-to-r from-green-500 to-green-700 text-white px-6 py-3 rounded-full shadow-lg hover:scale-105 hover:shadow-green-500/40 transition-all duration-200 font-semibold text-lg"
            title="Contact Sunil Ravulapati"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12H8m8 0a8 8 0 11-16 0 8 8 0 0116 0z" />
            </svg>
            Hire Me
          </a>
        </div>
      </body>
    </html>
  );
}
