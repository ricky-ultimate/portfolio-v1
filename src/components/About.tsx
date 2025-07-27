export function About() {
  return (
    <section id="about" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-200 mb-8 sm:mb-12">
          <span className="text-emerald-400 font-mono text-lg sm:text-xl mr-2">
            01.
          </span>{" "}
          About Me
        </h2>
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          <div className="md:col-span-2">
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                Hi, I'm Riches Ogigi, a Full Stack Software Engineer currently
                pursuing Computer Science and Mathematics at Mountain Top
                University. I specialize in building scalable backend systems
                and have developed projects like a real-time chat application
                with WebSocket integration and a university course management
                system that handles scheduling conflicts and role-based access
                control.
              </p>
              <p>
                My core strengths are API development, database architecture,
                and system optimization. What sets me apart is my ability to
                think architecturally - I build solutions that are not just
                functional, but maintainable and scalable from day one.
              </p>
              <p>
                I bring value by creating robust applications that can handle
                growth and complexity while maintaining performance, making your
                development process smoother and more efficient. I'd love to
                schedule a brief conversation to discuss how my technical skills
                align with your current projects and team needs.
              </p>
              <p>
                Together, we can build software solutions that drive real
                business impact.
              </p>
              <p>
                Here are a few technologies I've been working with recently:
              </p>
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
          <div className="flex justify-center md:justify-end">
            <div className="relative group">
              <div className="w-64 h-64 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-lg"></div>
              <div className="absolute top-4 left-4 w-64 h-64 border-2 border-emerald-400 rounded-lg group-hover:top-2 group-hover:left-2 transition-all duration-300"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
