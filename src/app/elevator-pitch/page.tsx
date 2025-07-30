import Link from "next/link";

export default function ElevatorPitch() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-300">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-md shadow-lg border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="text-emerald-400 font-mono text-lg font-bold cursor-pointer hover:text-emerald-300 transition-colors"
            >
              RO
            </Link>
            <Link
              href="/"
              className="px-4 py-2 border border-emerald-400 text-emerald-400 rounded hover:bg-emerald-400/10 transition-colors font-mono text-sm"
            >
              Back to Portfolio
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-200 mb-6">
              My Elevator Pitch
            </h1>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
              Get to know me in 60 seconds - my background, passion for software engineering,
              and what I can bring to your team.
            </p>
          </div>

          {/* Video Section */}
          <div className="mb-12">
            <div className="relative bg-slate-800/50 rounded-xl border-2 border-slate-700 overflow-hidden">
              <video
                className="w-full aspect-video bg-gradient-to-br from-slate-800 to-slate-900"
                controls
                poster="/images/elevator-pitch-thumbnail.jpg" // Replace with your thumbnail
                preload="metadata"
              >
                <source src="/videos/elevator-pitch.mp4" type="video/mp4" />
                <source src="/videos/elevator-pitch.webm" type="video/webm" />

                {/* Fallback content for browsers that don't support video */}
                <div className="aspect-video flex items-center justify-center bg-gradient-to-br from-slate-800 to-slate-900">
                  <div className="text-center space-y-6">
                    {/* Play Button Icon */}
                    <div className="w-20 h-20 bg-emerald-400/20 rounded-full flex items-center justify-center mx-auto group hover:bg-emerald-400/30 transition-colors cursor-pointer">
                      <div className="w-0 h-0 border-l-8 border-l-emerald-400 border-t-6 border-t-transparent border-b-6 border-b-transparent ml-1"></div>
                    </div>

                    {/* Placeholder Text */}
                    <div className="space-y-3">
                      <h3 className="text-xl font-semibold text-slate-200">
                        Video Coming Soon
                      </h3>
                      <p className="text-slate-400 max-w-md mx-auto">
                        Your browser doesn't support video playback. The elevator pitch video will be available soon!
                      </p>
                    </div>

                    {/* Tech Stack Preview */}
                    <div className="flex flex-wrap justify-center gap-3 pt-4">
                      {["TypeScript", "NestJS", "PostgreSQL", "React", "NextJS"].map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-slate-700/50 text-emerald-400 rounded-full text-sm font-mono border border-emerald-400/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </video>

              {/* Video Info */}
              <div className="bg-slate-800 px-6 py-4 border-t border-slate-700">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="text-sm text-slate-400 font-mono">
                      Duration: ~60 seconds | My Professional Introduction
                    </div>
                  </div>
                  <div className="text-xs text-slate-500 font-mono">
                    HD Quality Available
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Key Points Section */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-slate-200 mb-4">
                What You'll Learn About Me
              </h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <span className="text-emerald-400 mt-1">▹</span>
                  <div>
                    <h3 className="font-semibold text-slate-200">My Background</h3>
                    <p className="text-slate-400 text-sm">
                      Computer Science student at Mountain Top University with hands-on experience
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-emerald-400 mt-1">▹</span>
                  <div>
                    <h3 className="font-semibold text-slate-200">Technical Expertise</h3>
                    <p className="text-slate-400 text-sm">
                      Full-stack development with focus on scalable backend systems
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-emerald-400 mt-1">▹</span>
                  <div>
                    <h3 className="font-semibold text-slate-200">Passion & Vision</h3>
                    <p className="text-slate-400 text-sm">
                      Why I love building software that makes a real impact
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-slate-200 mb-4">
                Featured Projects
              </h2>
              <div className="space-y-4">
                <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700">
                  <h3 className="font-semibold text-slate-200 mb-2">Convo</h3>
                  <p className="text-slate-400 text-sm mb-2">
                    Real-time chat application with WebSocket integration
                  </p>
                  <div className="flex gap-2">
                    <span className="text-xs font-mono text-emerald-400">NestJS</span>
                    <span className="text-xs font-mono text-emerald-400">PostgreSQL</span>
                    <span className="text-xs font-mono text-emerald-400">Redis</span>
                  </div>
                </div>
                <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700">
                  <h3 className="font-semibold text-slate-200 mb-2">CourseFlow</h3>
                  <p className="text-slate-400 text-sm mb-2">
                    University course management system with advanced features
                  </p>
                  <div className="flex gap-2">
                    <span className="text-xs font-mono text-emerald-400">NestJS</span>
                    <span className="text-xs font-mono text-emerald-400">Prisma</span>
                    <span className="text-xs font-mono text-emerald-400">JWT</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center bg-slate-800/30 rounded-xl p-8 border border-slate-700">
            <h2 className="text-2xl font-bold text-slate-200 mb-4">
              Let's Connect
            </h2>
            <p className="text-slate-400 mb-6 max-w-2xl mx-auto">
              Interested in learning more about my experience and how I can contribute to your team?
              I'd love to have a conversation about potential opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="mailto:richesogigi0@gmail.com"
                className="px-6 py-3 bg-emerald-400 text-slate-900 rounded hover:bg-emerald-300 transition-colors font-mono font-semibold"
              >
                Get In Touch
              </Link>
              <Link
                href="/"
                className="px-6 py-3 border border-emerald-400 text-emerald-400 rounded hover:bg-emerald-400/10 transition-colors font-mono"
              >
                View Full Portfolio
              </Link>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-16 py-8 px-4 sm:px-6 lg:px-8 text-center border-t border-slate-800">
        <p className="text-slate-400 font-mono text-sm">
          Built by Riches Ogigi
        </p>
      </footer>
    </div>
  );
}
