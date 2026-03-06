import Link from 'next/link';

const socials = [
  {
    name: 'GitHub',
    href: 'https://github.com/sunilravulapati',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844a9.59 9.59 0 012.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/in/sunil-ravulapati-9b328a314/',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    name: 'LeetCode',
    href: 'https://leetcode.com/u/sunilravulapati/',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
      </svg>
    ),
  },
  {
    name: 'CodeChef',
    href: 'https://codechef.com/users/sunilravulapati',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M11.257 0C5.035 0 0 5.035 0 11.257c0 6.221 5.035 11.257 11.257 11.257 6.221 0 11.257-5.036 11.257-11.257C22.514 5.035 17.478 0 11.257 0zm0 1.388c5.447 0 9.869 4.422 9.869 9.869s-4.422 9.869-9.869 9.869-9.869-4.422-9.869-9.869 4.422-9.869 9.869-9.869zm-.48 3.498c-1.001.012-2.01.285-2.87.826-.949.592-1.672 1.473-2.103 2.478a6.222 6.222 0 0 0-.463 2.45c.012.86.208 1.72.57 2.5.374.804.936 1.524 1.652 2.065.693.524 1.52.857 2.37.98.413.06.833.072 1.25.036.512-.048 1.02-.18 1.487-.396.476-.22.912-.52 1.285-.884.375-.366.688-.796.924-1.264.26-.511.42-1.07.464-1.638l-1.51-.004c-.072.457-.236.9-.48 1.294-.236.384-.547.718-.907.98-.364.264-.775.454-1.205.556-.43.1-.878.108-1.31.02a3.862 3.862 0 0 1-1.59-.69 3.85 3.85 0 0 1-1.1-1.37 4.33 4.33 0 0 1-.39-1.69 4.33 4.33 0 0 1 .32-1.706 3.856 3.856 0 0 1 1.04-1.412 3.862 3.862 0 0 1 1.564-.748c.428-.1.872-.116 1.306-.044.434.072.853.232 1.23.466.368.228.69.527.946.876.25.34.433.727.542 1.132h1.51a5.75 5.75 0 0 0-.51-1.672 5.176 5.176 0 0 0-.99-1.397 5.176 5.176 0 0 0-1.362-.984 5.19 5.19 0 0 0-1.672-.476 5.75 5.75 0 0 0-.79-.025z" />
      </svg>
    ),
  },
];

const quickLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export default function Footer() {
  return (
    <footer
      className="relative mt-20 border-t"
      style={{ borderColor: 'rgba(255,255,255,0.07)' }}
    >
      {/* Top glow line */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-64"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(62,242,209,0.4), transparent)' }}
      />

      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-10 mb-10">

          {/* Brand column */}
          <div className="space-y-3">
            <div
              className="text-xl font-bold tracking-tight text-white"
              style={{ fontFamily: 'SF Mono, Fira Code, monospace' }}
            >
              SR<span style={{ color: '#3ef2d1' }}>.</span>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.4)' }}>
              Full-Stack Developer & AI Enthusiast. Building intelligent, scalable solutions with clean UIs.
            </p>
            <p className="text-xs" style={{ color: 'rgba(255,255,255,0.25)' }}>
              Hyderabad, India
            </p>
          </div>

          {/* Quick links */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold tracking-[0.2em] uppercase" style={{ color: 'rgba(255,255,255,0.3)' }}>
              Navigate
            </h4>
            <div className="flex flex-col gap-2">
              {quickLinks.map(({ name, href }) => (
                <a
                  key={name}
                  href={href}
                  className="text-sm transition-colors duration-150 w-fit"
                  style={{ color: 'rgba(255,255,255,0.45)' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#3ef2d1')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.45)')}
                >
                  {name}
                </a>
              ))}
            </div>
          </div>

          {/* Socials */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold tracking-[0.2em] uppercase" style={{ color: 'rgba(255,255,255,0.3)' }}>
              Connect
            </h4>
            <div className="flex flex-col gap-2">
              {socials.map(({ name, href, icon }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-sm transition-all duration-150 w-fit group"
                  style={{ color: 'rgba(255,255,255,0.45)' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#3ef2d1')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.45)')}
                >
                  <span className="opacity-70 group-hover:opacity-100 transition-opacity">{icon}</span>
                  {name}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 border-t text-xs"
          style={{ borderColor: 'rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.2)' }}
        >
          <span>© {new Date().getFullYear()} Sunil Ravulapati. All rights reserved.</span>
          <span>Built with Next.js & Tailwind CSS</span>
        </div>
      </div>
    </footer>
  );
}