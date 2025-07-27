export function Experience() {
  return (
    <section id="experience" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-200 mb-8 sm:mb-12">
          <span className="text-emerald-400 font-mono text-lg sm:text-xl mr-2">
            02.
          </span>{" "}
          Where I&apos;ve Worked & Studied
        </h2>
        <div className="space-y-8">
          <div className="border-l-2 border-slate-700 pl-6 sm:pl-8 relative">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
              <h3 className="text-xl font-semibold text-slate-200 mb-2 lg:mb-0">
                Software Development Lead{" "}
                <span className="text-emerald-400">@ MTU STEM Community</span>
              </h3>
              <p className="font-mono text-sm text-slate-400">2022 - Present</p>
            </div>
            <ul className="space-y-2 text-slate-400">
              <li className="flex items-start">
                <span className="text-emerald-400 mr-2 mt-1 flex-shrink-0">
                  ▹
                </span>
                <span>
                  Lead technical initiatives and mentor fellow students in
                  software development practices
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-400 mr-2 mt-1 flex-shrink-0">
                  ▹
                </span>
                <span>
                  Organize workshops and coding sessions for the university STEM
                  community
                </span>
              </li>
            </ul>
          </div>

          <div className="border-l-2 border-slate-700 pl-6 sm:pl-8 relative">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
              <h3 className="text-xl font-semibold text-slate-200 mb-2 lg:mb-0">
                B.Sc. Computer Science and Mathematics{" "}
                <span className="text-emerald-400">
                  @ Mountain Top University
                </span>
              </h3>
              <p className="font-mono text-sm text-slate-400">
                Sep 2022 - Jul 2026
              </p>
            </div>
            <ul className="space-y-2 text-slate-400">
              <li className="flex items-start">
                <span className="text-emerald-400 mr-2 mt-1 flex-shrink-0">
                  ▹
                </span>
                <span>
                  Coursework: Machine Learning, Databases, Computer Networking &
                  Communication
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-400 mr-2 mt-1 flex-shrink-0">
                  ▹
                </span>
                <span>
                  Discrete Math, Data Structures & Algorithms, Computer
                  Architecture & Organisation
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
