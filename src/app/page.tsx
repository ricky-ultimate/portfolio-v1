"use client"
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-300">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg' : 'bg-slate-900/80 backdrop-blur-sm'
      } border-b border-slate-800`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-emerald-400 font-mono text-lg font-bold cursor-pointer hover:text-emerald-300 transition-colors">
              RO
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection('about')}
                className="hover:text-emerald-400 transition-colors font-mono text-sm"
              >
                01. About
              </button>
              <button
                onClick={() => scrollToSection('experience')}
                className="hover:text-emerald-400 transition-colors font-mono text-sm"
              >
                02. Experience
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="hover:text-emerald-400 transition-colors font-mono text-sm"
              >
                03. Projects
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="hover:text-emerald-400 transition-colors font-mono text-sm"
              >
                04. Contact
              </button>
              <Link
                href="/resume.pdf"
                target="_blank"
                className="ml-4 px-4 py-2 border border-emerald-400 text-emerald-400 rounded hover:bg-emerald-400/10 transition-colors font-mono text-sm"
              >
                Resume
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden z-50 relative w-8 h-8 flex flex-col justify-center items-center"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className={`w-6 h-0.5 bg-emerald-400 transition-all duration-300 ${
                isMenuOpen ? 'rotate-45 translate-y-0' : '-translate-y-1.5'
              }`}></div>
              <div className={`w-6 h-0.5 bg-emerald-400 transition-all duration-300 ${
                isMenuOpen ? 'opacity-0' : 'opacity-100'
              }`}></div>
              <div className={`w-6 h-0.5 bg-emerald-400 transition-all duration-300 ${
                isMenuOpen ? '-rotate-45 -translate-y-1.5' : 'translate-y-1.5'
              }`}></div>
            </button>

            {/* Mobile Menu */}
            <div className={`md:hidden fixed inset-0 bg-slate-900/95 backdrop-blur-md transition-opacity duration-300 ${
              isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
            }`}>
              <div className="flex flex-col items-center justify-center h-full space-y-8">
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-slate-200 hover:text-emerald-400 transition-colors font-mono text-lg"
                >
                  01. About
                </button>
                <button
                  onClick={() => scrollToSection('experience')}
                  className="text-slate-200 hover:text-emerald-400 transition-colors font-mono text-lg"
                >
                  02. Experience
                </button>
                <button
                  onClick={() => scrollToSection('projects')}
                  className="text-slate-200 hover:text-emerald-400 transition-colors font-mono text-lg"
                >
                  03. Projects
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-slate-200 hover:text-emerald-400 transition-colors font-mono text-lg"
                >
                  04. Contact
                </button>
                <Link
                  href="/resume.pdf"
                  target="_blank"
                  className="px-6 py-3 border border-emerald-400 text-emerald-400 rounded hover:bg-emerald-400/10 transition-colors font-mono"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Resume
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <p className="text-emerald-400 font-mono text-base mb-4">
              Hi, my name is
            </p>
            <h1 className="text-5xl md:text-7xl font-bold text-slate-200 mb-4">
              Riches Ogigi.
            </h1>
            <h2 className="text-4xl md:text-6xl font-bold text-slate-400 mb-8">
              I build things for the web.
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mb-12 leading-relaxed">
              I'm a Full Stack Software Engineer with strong backend expertise, specializing in building
              scalable web applications. Currently studying Computer Science and Mathematics at Mountain Top University,
              with a passion for creating innovative, efficient solutions.
            </p>
            <div>
              <button
                onClick={() => scrollToSection('projects')}
                className="px-8 py-4 border border-emerald-400 text-emerald-400 rounded hover:bg-emerald-400/10 transition-all duration-300 font-mono hover:transform hover:-translate-y-1"
              >
                Check out my work!
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-200 mb-12">
            <span className="text-emerald-400 font-mono text-xl mr-2">01.</span> About Me
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2">
              <div className="space-y-4 text-slate-400 leading-relaxed">
                <p>
                  Hello! I'm Riches, and I enjoy creating things that live on the internet.
                  My interest in web development started back when I began my journey at Mountain Top University,
                  where I'm currently pursuing a degree in Computer Science and Mathematics.
                </p>
                <p>
                  Fast-forward to today, and I've had the privilege of building software that powers
                  real-time communication systems, enterprise-grade management platforms, and scalable web applications.
                  My main focus these days is building accessible, inclusive products and digital experiences.
                </p>
                <p>
                  I also serve as the Software Development Lead for the MTU STEM Community, where I mentor
                  fellow students and lead technical initiatives.
                </p>
                <p>Here are a few technologies I've been working with recently:</p>
                <div className="grid grid-cols-2 gap-2 mt-4">
                  <div className="flex items-center">
                    <span className="text-emerald-400 mr-2">▹</span>
                    <span className="font-mono text-sm">TypeScript</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-emerald-400 mr-2">▹</span>
                    <span className="font-mono text-sm">NestJS</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-emerald-400 mr-2">▹</span>
                    <span className="font-mono text-sm">PostgreSQL</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-emerald-400 mr-2">▹</span>
                    <span className="font-mono text-sm">NextJS/React</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-emerald-400 mr-2">▹</span>
                    <span className="font-mono text-sm">Golang</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-emerald-400 mr-2">▹</span>
                    <span className="font-mono text-sm">Redis</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative group">
                <div className="w-64 h-64 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-lg"></div>
                <div className="absolute top-4 left-4 w-64 h-64 border-2 border-emerald-400 rounded-lg group-hover:top-2 group-hover:left-2 transition-all duration-300"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-200 mb-12">
            <span className="text-emerald-400 font-mono text-xl mr-2">02.</span> Where I've Worked & Studied
          </h2>
          <div className="space-y-8">
            <div className="border-l-2 border-slate-700 pl-8 relative">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h3 className="text-xl font-semibold text-slate-200">
                  Software Development Lead{" "}
                  <span className="text-emerald-400">@ MTU STEM Community</span>
                </h3>
                <p className="font-mono text-sm text-slate-400">2022 - Present</p>
              </div>
              <ul className="space-y-2 text-slate-400">
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-2 mt-1 flex-shrink-0">▹</span>
                  <span>Lead technical initiatives and mentor fellow students in software development practices</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-2 mt-1 flex-shrink-0">▹</span>
                  <span>Organize workshops and coding sessions for the university STEM community</span>
                </li>
              </ul>
            </div>

            <div className="border-l-2 border-slate-700 pl-8 relative">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h3 className="text-xl font-semibold text-slate-200">
                  B.Sc. Computer Science and Mathematics{" "}
                  <span className="text-emerald-400">@ Mountain Top University</span>
                </h3>
                <p className="font-mono text-sm text-slate-400">Sep 2022 - Jul 2026</p>
              </div>
              <ul className="space-y-2 text-slate-400">
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-2 mt-1 flex-shrink-0">▹</span>
                  <span>Coursework: Machine Learning, Databases, Computer Networking & Communication</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-2 mt-1 flex-shrink-0">▹</span>
                  <span>Discrete Math, Data Structures & Algorithms, Computer Architecture & Organisation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-200 mb-12">
            <span className="text-emerald-400 font-mono text-xl mr-2">03.</span> Some Things I've Built
          </h2>

          <div className="space-y-16">
            {/* Project 1 - Convo */}
            <div className="grid md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-7">
                <div className="relative group">
                  <div className="bg-slate-800 rounded-lg p-8 h-64 flex items-center justify-center border border-slate-700">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-emerald-400/20 rounded-lg mx-auto mb-4 flex items-center justify-center">
                        <span className="text-emerald-400 text-2xl">💬</span>
                      </div>
                      <p className="text-slate-400 font-mono">Real-time Chat Application</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:col-span-5">
                <div className="md:text-right">
                  <p className="text-emerald-400 font-mono text-sm mb-2">Featured Project</p>
                  <h3 className="text-2xl font-bold text-slate-200 mb-4">Convo</h3>
                  <div className="bg-slate-800 p-6 rounded-lg mb-4 border border-slate-700">
                    <p className="text-slate-400 leading-relaxed">
                      A secure, real-time chat application with advanced chat room functionality and WebSocket integration.
                      Built with NestJS backend, PostgreSQL for data persistence, and Redis for session management and real-time messaging.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4 md:justify-end">
                    <span className="text-slate-400 font-mono text-sm">NestJS</span>
                    <span className="text-slate-400 font-mono text-sm">PostgreSQL</span>
                    <span className="text-slate-400 font-mono text-sm">Redis</span>
                    <span className="text-slate-400 font-mono text-sm">WebSocket</span>
                    <span className="text-slate-400 font-mono text-sm">NextJS</span>
                  </div>
                  <div className="flex gap-4 md:justify-end">
                    <Link
                      href="https://github.com/ricky-ultimate"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-emerald-400 transition-colors hover:transform hover:-translate-y-1 duration-200"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </Link>
                    <button className="text-slate-400 hover:text-emerald-400 transition-colors hover:transform hover:-translate-y-1 duration-200">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Project 2 - CourseFlow */}
            <div className="grid md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-5">
                <div>
                  <p className="text-emerald-400 font-mono text-sm mb-2">Featured Project</p>
                  <h3 className="text-2xl font-bold text-slate-200 mb-4">CourseFlow Backend</h3>
                  <div className="bg-slate-800 p-6 rounded-lg mb-4 border border-slate-700">
                    <p className="text-slate-400 leading-relaxed">
                      Enterprise-grade university course management system API with comprehensive academic administration capabilities.
                      Features JWT authentication, role-based access control, and advanced functionality like CSV operations and health monitoring.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="text-slate-400 font-mono text-sm">NestJS</span>
                    <span className="text-slate-400 font-mono text-sm">TypeScript</span>
                    <span className="text-slate-400 font-mono text-sm">PostgreSQL</span>
                    <span className="text-slate-400 font-mono text-sm">Prisma ORM</span>
                    <span className="text-slate-400 font-mono text-sm">JWT</span>
                  </div>
                  <div className="flex gap-4">
                    <Link href="#" className="text-slate-400 hover:text-emerald-400 transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="md:col-span-7">
                <div className="relative group">
                  <div className="bg-slate-800 rounded-lg p-8 h-64 flex items-center justify-center border border-slate-700">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-emerald-400/20 rounded-lg mx-auto mb-4 flex items-center justify-center">
                        <span className="text-emerald-400 text-2xl">🎓</span>
                      </div>
                      <p className="text-slate-400 font-mono">Course Management System</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-slate-200 mb-8">
            <span className="text-emerald-400 font-mono text-xl mr-2">04.</span> What's Next?
          </h2>
          <h3 className="text-5xl font-bold text-slate-200 mb-8">Get In Touch</h3>
          <p className="text-slate-400 text-lg leading-relaxed mb-12">
            Although I'm not currently looking for any new opportunities, my inbox is always open.
            Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          <Link
            href="mailto:richesogigi0@gmail.com"
            className="inline-block px-8 py-4 border border-emerald-400 text-emerald-400 rounded hover:bg-emerald-400/10 transition-colors font-mono"
          >
            Say Hello
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 text-center border-t border-slate-800">
        <div className="flex justify-center space-x-6 mb-8">
          <Link
            href="https://github.com/ricky-ultimate"
            target="_blank"
            className="text-slate-400 hover:text-emerald-400 transition-colors"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </Link>
          <Link
            href="https://linkedin.com/in/richesogigi"
            target="_blank"
            className="text-slate-400 hover:text-emerald-400 transition-colors"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </Link>
          <Link
            href="mailto:richesogigi0@gmail.com"
            className="text-slate-400 hover:text-emerald-400 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 7.89a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </Link>
        </div>
        <p className="text-slate-400 font-mono text-sm">
          Built by Riches Ogigi
        </p>
      </footer>
    </div>
  );
}
