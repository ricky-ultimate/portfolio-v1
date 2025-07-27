import { ProjectCard } from "./ProjectCard";

export function Projects() {
  const projectsData = [
    {
      title: "Convo",
      description:
        "A secure, real-time chat application with advanced chat room functionality and WebSocket integration. Built with NestJS backend, PostgreSQL for data persistence, and Redis for session management and real-time messaging.",
      technologies: ["NestJS", "PostgreSQL", "Redis", "WebSocket", "NextJS"],
      githubLink: "https://github.com/ricky-ultimate/convo-frontend",
      liveLink: "https://convo-frontend-seven.vercel.app/",
      imageSrc: "/images/convo-project.png", // Add your image path here
      imageAlt: "Convo Real-time Chat Application",
      featured: true,
      reverse: true,
    },
    {
      title: "CourseFlow Backend",
      description:
        "Enterprise-grade university course management system API with comprehensive academic administration capabilities. Features JWT authentication, role-based access control, and advanced functionality like CSV operations and health monitoring.",
      technologies: ["NestJS", "TypeScript", "PostgreSQL", "Prisma ORM", "JWT"],
      githubLink: "#",
      imageSrc: "/images/courseflow-project.jpg", // Add your image path here
      imageAlt: "CourseFlow Course Management System",
      featured: true,
      reverse: false,
    },
  ];

  return (
    <section id="projects" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-200 mb-8 sm:mb-12">
          <span className="text-emerald-400 font-mono text-lg sm:text-xl mr-2">
            03.
          </span>{" "}
          Some Things I&apos;ve Built
        </h2>

        <div className="space-y-12 sm:space-y-16">
          {projectsData.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              githubLink={project.githubLink}
              liveLink={project.liveLink}
              imageSrc={project.imageSrc}
              imageAlt={project.imageAlt}
              featured={project.featured}
              reverse={project.reverse}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
