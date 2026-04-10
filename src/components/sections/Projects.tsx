"use client";


import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Tag } from "@/components/ui/Tag";
import { projects } from "@/data/projects";
import { useState } from "react";
import "../styles/index.css"


const TABS = [
  "All",
  "Full-Stack",
  "Divi",
  "WPBakery",
  "Elementor",
  "Custom",
  "Cornerstone",
  "Headless"
];

export function Projects() {
  const [activeTab, setActiveTab] = useState("All");
  const filteredProjects =
    activeTab === "All"
      ? projects
      : projects.filter((p) => p.category === activeTab);

  return (
    <Section
      id="projects"
      eyebrow="Case Studies"
      title="Featured Projects"
      subtitle="Problem, solution, and impact presented in a recruiter-friendly format."
    >
      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {TABS.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] rounded-full px-4 py-2 h-9 border shadow-xs ${
              activeTab === tab
                ? "bg-primary text-primary-foreground border-transparent"
                : "bg-background border bg-background hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <Reveal
              key={project.title}
              delay={index * 70}
              className="card-shell flex flex-col h-full group rounded-2xl shadow-lg hover:shadow-xl transition-shadow bg-card"
            >
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl mb-5">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                {project.featured && (
                  <span className="absolute top-3 right-3 bg-primary text-primary-foreground px-2 py-0.5 rounded-md text-xs font-medium shadow">Featured</span>
                )}
              </div>
              <div className="flex flex-col flex-1">
                <h3 className="text-xl font-heading font-bold mb-1 group-hover:text-primary transition-colors leading-tight">
                  {project.title}
                </h3>
                <p className="text-secondary text-sm mb-4 line-clamp-2" style={{fontFamily: 'var(--font-body)'}}>{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-secondary/20 text-secondary-foreground px-2 py-0.5 rounded-full text-xs font-medium border border-white/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2 mt-auto pt-2">
                  {project.links.code && (
                    <a
                      href={project.links.code}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary flex-1 min-w-[100px]"
                    >
                      Code
                    </a>
                  )}
                  {project.links.live && (
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary flex-1 min-w-[100px]"
                    >
                      Live Site
                    </a>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
      </div>
    </Section>
  );
}
