import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { About } from "@/components/sections/About";
import { Capabilities } from "@/components/sections/Capabilities";
import { Contact } from "@/components/sections/Contact";
import { Experience } from "@/components/sections/Experience";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";

const personStructuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Mayank Padhi",
  jobTitle: "Frontend-Focused Full-Stack Web Developer",
  description:
    "Frontend-focused full-stack developer with 3+ years of experience building fast, secure, and scalable web applications.",
  url: "https://mayank-padhi.vercel.app/",
  sameAs: ["https://github.com/Mpadhi2000", "https://www.linkedin.com/in/mayank-padhi"],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personStructuredData),
        }}
      />

      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Capabilities />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
