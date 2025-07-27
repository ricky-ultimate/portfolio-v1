"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

interface NavigationProps {
  scrollToSection: (sectionId: string) => void;
}

export default function Navigation({ scrollToSection }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollToSection = (sectionId: string) => {
    scrollToSection(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-900/95 backdrop-blur-md shadow-lg"
          : "bg-slate-900/80 backdrop-blur-sm"
      } border-b border-slate-800`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="text-emerald-400 font-mono text-lg font-bold cursor-pointer hover:text-emerald-300 transition-colors">
            RO
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => handleScrollToSection("about")}
              className="hover:text-emerald-400 transition-colors font-mono text-sm"
            >
              01. About
            </button>
            <button
              onClick={() => handleScrollToSection("experience")}
              className="hover:text-emerald-400 transition-colors font-mono text-sm"
            >
              02. Experience
            </button>
            <button
              onClick={() => handleScrollToSection("projects")}
              className="hover:text-emerald-400 transition-colors font-mono text-sm"
            >
              03. Projects
            </button>
            <button
              onClick={() => handleScrollToSection("contact")}
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
            <div
              className={`w-6 h-0.5 bg-emerald-400 transition-all duration-300 ${
                isMenuOpen ? "rotate-45 translate-y-0" : "-translate-y-1.5"
              }`}
            ></div>
            <div
              className={`w-6 h-0.5 bg-emerald-400 transition-all duration-300 ${
                isMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            ></div>
            <div
              className={`w-6 h-0.5 bg-emerald-400 transition-all duration-300 ${
                isMenuOpen ? "-rotate-45 -translate-y-1.5" : "translate-y-1.5"
              }`}
            ></div>
          </button>

          {/* Mobile Menu */}
          <div
            className={`md:hidden fixed inset-0 bg-slate-900/95 backdrop-blur-md transition-opacity duration-300 ${
              isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
            }`}
          >
            <div className="flex flex-col items-center justify-center h-full space-y-8">
              <button
                onClick={() => handleScrollToSection("about")}
                className="text-slate-200 hover:text-emerald-400 transition-colors font-mono text-lg"
              >
                01. About
              </button>
              <button
                onClick={() => handleScrollToSection("experience")}
                className="text-slate-200 hover:text-emerald-400 transition-colors font-mono text-lg"
              >
                02. Experience
              </button>
              <button
                onClick={() => handleScrollToSection("projects")}
                className="text-slate-200 hover:text-emerald-400 transition-colors font-mono text-lg"
              >
                03. Projects
              </button>
              <button
                onClick={() => handleScrollToSection("contact")}
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
  );
}
