'use client';

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 px-6 max-w-3xl mx-auto text-center"
    >
      <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
      <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
        Interested in working together or have a project idea? I'd love to hear from you!
      </p>

      <a
        href="mailto:sunilravulapati028@gmail.com"
        className="inline-block bg-gradient-to-r from-blue-500 to-blue-700 text-white px-6 py-3 rounded-full font-semibold text-lg shadow-lg hover:scale-105 hover:shadow-blue-500/40 transition-all duration-200"
      >
        Email Me
      </a>
    </section>
  );
}
