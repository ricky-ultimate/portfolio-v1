import Image from "next/image";

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
                I'm Riches Ogigi, a Full Stack Software Engineer and Computer
                Science Mathematics student at Mountain Top University who
                approaches development with both analytical precision and
                intuitive design thinking.
              </p>
              <p>
                Rather than just solving immediate problems, I architect systems
                that grow with their users. My holistic perspective connects
                user experience, system performance, and business objectives
                into solutions designed for long-term success. This mindset has
                led me to specialize in building applications that handle
                increasing complexity without sacrificing performance or
                maintainability.
              </p>
              <p>
                With expertise in API development, database architecture, and
                system optimization, I excel at translating abstract
                requirements into robust technical foundations. I thrive in
                collaborative environments where strategic thinking meets
                hands-on implementation.
              </p>
              <p>
                With expertise in API development, database architecture, and
                system optimization, I excel at translating abstract
                requirements into robust technical foundations. I thrive in
                collaborative environments where strategic thinking meets
                hands-on implementation.
              </p>
              <p>
                Currently seeking opportunities with teams that value both
                technical excellence and meaningful impact, I&apos;m passionate about
                creating software that doesn&apos;t just serve users, it empowers them
                to achieve more.
              </p>
              <p>
                Here are a few technologies I&apos;ve been working with
                recently:
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
              {/* Background gradient square - made larger */}
              <div className="w-72 h-72 sm:w-80 sm:h-80 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-lg"></div>

              {/* Image container */}
              <div className="absolute top-4 left-4 w-72 h-72 sm:w-80 sm:h-80 rounded-lg overflow-hidden group-hover:top-2 group-hover:left-2 transition-all duration-300">
                <Image
                  src="/images/profile-photo.jpg" // Replace with your actual image path
                  alt="Riches Ogigi - Full Stack Software Engineer"
                  width={320}
                  height={320}
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
                  priority
                />
              </div>

              {/* Border frame */}
              <div className="absolute top-4 left-4 w-72 h-72 sm:w-80 sm:h-80 border-2 border-emerald-400 rounded-lg group-hover:top-2 group-hover:left-2 transition-all duration-300 pointer-events-none"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
