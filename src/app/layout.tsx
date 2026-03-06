'use client';

import { ThemeProvider as NextThemesProvider } from 'next-themes';
import ParticleMesh from '../components/ParticleMesh';

import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className="text-white relative min-h-screen"
        style={{ background: '#080b10' }}
      >
        {/* Particle mesh animated background */}
        <ParticleMesh />

        <NextThemesProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <div className="relative z-10">
            <Navbar />
            {children}
            <Footer />
          </div>
        </NextThemesProvider>

        {/* Hire Me floating button */}
        <div className="fixed bottom-6 right-6 z-50">
          <a
            href="mailto:sunilravulapati028@gmail.com"
            className="flex items-center gap-2 px-5 py-3 rounded-full font-semibold text-sm text-black shadow-lg hover:scale-105 transition-all duration-200"
            style={{
              background: 'linear-gradient(135deg, #3ef2d1, #4a90e2)',
              boxShadow: '0 4px 24px rgba(62,242,209,0.25)',
            }}
            title="Hire Sunil Ravulapati"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Hire Me
          </a>
        </div>
      </body>
    </html>
  );
}