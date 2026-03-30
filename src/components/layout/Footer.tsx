import { contact } from "@/data/portfolio";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#070a0f] py-12">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-5 md:px-8 md:flex-row md:items-end md:justify-between">
        <div className="space-y-3">
          <p className="font-heading text-sm tracking-[0.14em] text-primary">MAYANK</p>
          <p className="max-w-md text-sm text-secondary">
            Frontend-focused full-stack developer building reliable, scalable, and performance-driven web products.
          </p>
        </div>

        <div className="flex flex-col items-start gap-4 md:items-end md:text-right text-sm text-secondary">
          <div className="flex items-center gap-5">
            <a href={`mailto:${contact.email}`} className="text-secondary transition-colors hover:text-accent" aria-label="Email">
              <FaEnvelope className="h-5 w-5" />
            </a>
            <a href={contact.linkedin} target="_blank" rel="noreferrer" className="text-secondary transition-colors hover:text-accent" aria-label="LinkedIn">
              <FaLinkedin className="h-5 w-5" />
            </a>
            <a href={contact.github} target="_blank" rel="noreferrer" className="text-secondary transition-colors hover:text-accent" aria-label="GitHub">
              <FaGithub className="h-5 w-5" />
            </a>
          </div>
          <p>© {new Date().getFullYear()} Mayank. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
