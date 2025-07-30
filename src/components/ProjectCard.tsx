import Link from "next/link";
import Image from "next/image";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  githubLink?: string;
  liveLink?: string;
  imageSrc?: string;
  imageAlt?: string;
  featured?: boolean;
  reverse?: boolean;
}

export function ProjectCard({
  title,
  description,
  technologies,
  githubLink,
  liveLink,
  imageSrc,
  imageAlt,
  featured = false,
  reverse = false,
}: ProjectCardProps) {
  return (
    <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 items-center">
      <div
        className={`lg:col-span-7 ${
          reverse ? "order-2 lg:order-1" : "order-2 lg:order-2"
        }`}
      >
        <div className="relative group">
          <div className="bg-slate-800 rounded-lg overflow-hidden border border-slate-700">
            {imageSrc ? (
              <div className="relative aspect-video w-full">
                <Image
                  src={imageSrc}
                  alt={imageAlt || title}
                  fill
                  className="object-contain bg-slate-900"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 50vw"
                />
              </div>
            ) : (
              <div className="aspect-video flex items-center justify-center bg-slate-700">
                <div className="text-center">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-emerald-400/20 rounded-lg mx-auto mb-4 flex items-center justify-center">
                    <span className="text-emerald-400 text-xl sm:text-2xl">
                      🖼️
                    </span>
                  </div>
                  <p className="text-slate-400 font-mono text-sm sm:text-base">
                    Project Image Placeholder
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div
        className={`lg:col-span-5 ${
          reverse ? "order-1 lg:order-2" : "order-1 lg:order-1"
        }`}
      >
        <div className={`space-y-4 ${reverse ? "lg:text-right" : ""}`}>
          {featured && (
            <p className="text-emerald-400 font-mono text-sm">
              Featured Project
            </p>
          )}
          <h3 className="text-xl sm:text-2xl font-bold text-slate-200">
            {title}
          </h3>
          <div className="bg-slate-800 p-4 sm:p-6 rounded-lg border border-slate-700">
            <p className="text-slate-400 leading-relaxed text-sm sm:text-base">
              {description}
            </p>
          </div>
          <div
            className={`flex flex-wrap gap-2 ${
              reverse ? "lg:justify-end" : ""
            }`}
          >
            {technologies.map((tech) => (
              <span
                key={tech}
                className="text-slate-400 font-mono text-xs sm:text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className={`flex gap-4 ${reverse ? "lg:justify-end" : ""}`}>
            {githubLink && (
              <Link
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-emerald-400 transition-colors hover:transform hover:-translate-y-1 duration-200"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </Link>
            )}
            {liveLink && (
              <Link
                href={liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-emerald-400 transition-colors hover:transform hover:-translate-y-1 duration-200"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
