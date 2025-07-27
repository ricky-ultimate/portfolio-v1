interface HeroProps {
  scrollToSection: (sectionId: string) => void;
}

export function Hero({ scrollToSection }: HeroProps) {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
      <div className="max-w-4xl mx-auto w-full">
        <div className="space-y-6">
          <p className="text-emerald-400 font-mono text-base">Hi, my name is</p>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-slate-200">
            Riches Ogigi.
          </h1>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-400">
            I build things for the web.
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl leading-relaxed">
            I'm a Full Stack Software Engineer with strong backend expertise,
            specializing in building scalable web applications. Currently
            studying Computer Science and Mathematics at Mountain Top
            University, with a passion for creating innovative, efficient
            solutions.
          </p>
          <div className="pt-6">
            <button
              onClick={() => scrollToSection("projects")}
              className="px-8 py-4 border border-emerald-400 text-emerald-400 rounded hover:bg-emerald-400/10 transition-all duration-300 font-mono hover:transform hover:-translate-y-1"
            >
              Check out my work!
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
