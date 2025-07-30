import Link from "next/link";

export function Contact() {
  return (
    <section id="contact" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-200 mb-6 sm:mb-8">
          <span className="text-emerald-400 font-mono text-lg sm:text-xl mr-2">
            04.
          </span>{" "}
          What&apos;s Next?
        </h2>
        <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-200 mb-6 sm:mb-8">
          Get In Touch
        </h3>
        <p className="text-slate-400 text-base sm:text-lg leading-relaxed mb-8 sm:mb-12">
          I&apos;m currently open to new opportunities and excited to explore roles
          where I can make meaningful impact. Feel free to reach out whether you
          have a position in mind, want to discuss potential partnerships, or
          simply want to connect. I&apos;d love to hear from you!
        </p>
        <Link
          href="mailto:richesogigi0@gmail.com"
          className="inline-block px-6 sm:px-8 py-3 sm:py-4 border border-emerald-400 text-emerald-400 rounded hover:bg-emerald-400/10 transition-colors font-mono"
        >
          Say Hello
        </Link>
      </div>
    </section>
  );
}
