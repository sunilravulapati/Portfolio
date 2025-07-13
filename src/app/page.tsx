import Hero from '../components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';     // Assuming you have a Skills component
import Projects from '@/components/Projects'; // Assuming you have a Projects component
import Contact from '@/components/Contact';   // Assuming you have a Contact component

export default function Home() {
  return (
    <main className="relative z-10"> {/* Still need this to ensure Home page content is above Vanta.js */}
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}