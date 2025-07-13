import Reveal from './Reveal';

export default function About() {
  return (
    <section
      id="about"
      className="py-20 px-6 max-w-4xl mx-auto text-center relative"
    >
      {/* Background Overlay for Readability */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm rounded-xl z-0" />

      <Reveal>
        <div className="relative z-10 space-y-6 text-white">
          <h2 className="text-4xl font-bold mb-6">About Me</h2>

          <p className="text-lg leading-relaxed">
            Hello! I'm <span className="font-semibold text-cyan-400">Sunil Ravulapati</span>, a dedicated{' '}
            <span className="font-semibold">Front-End Engineer</span> specializing in{' '}
            <span className="font-semibold">React</span> and{' '}
            <span className="font-semibold">TypeScript</span>. I craft clean,{' '}
            <span className="font-semibold">efficient</span>, and{' '}
            <span className="font-semibold">performant</span> web interfaces focused on building{' '}
            <span className="font-semibold">scalable</span> and{' '}
            <span className="font-semibold">optimized</span> user experiences.
          </p>

          <p className="text-lg leading-relaxed">
            I'm passionate about <span className="font-semibold text-pink-400">problem-solving</span> and have a strong
            foundation in <span className="font-semibold">Data Structures and Algorithms</span>. I've solved{' '}
            <span className="font-bold text-green-400">260+ problems on LeetCode</span> and ranked in the{' '}
            <span className="font-bold">top 450k globally</span>.
          </p>

          <p className="text-lg leading-relaxed">
            I thrive in <span className="font-semibold">collaborative environments</span>, constantly learning and applying
            new tech trends and design patterns. I'm deeply interested in emerging fields like{' '}
            <span className="text-yellow-300 font-semibold">Artificial Intelligence</span>,{' '}
            <span className="text-orange-300 font-semibold">Cybersecurity</span>, and{' '}
            <span className="text-purple-300 font-semibold">Data Science</span>, and I enjoy exploring how they intersect with modern web development.
          </p>

          <p className="text-lg leading-relaxed">
            Let's connect and build something impactful!
          </p>
        </div>
      </Reveal>
    </section>
  );
}
