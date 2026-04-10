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
            className="card-shell flex flex-col gap-4 rounded-2xl border border-white/10 bg-[rgba(20,20,20,0.7)] shadow-lg overflow-hidden h-full hover:shadow-2xl transition-shadow group"
          >
            <div className="relative h-48 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              {project.featured && (
                <span className="absolute top-4 right-4 bg-primary text-primary-foreground px-2 py-0.5 rounded-md text-xs font-medium shadow">Featured</span>
              )}
            </div>
            <div className="flex flex-col flex-1">
              <h3 className="text-lg md:text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-3 line-clamp-2 flex-1">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-3">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="tag-bg text-secondary-foreground px-2 py-0.5 rounded-md text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-2 pt-2 mt-auto">
                {project.links.code && (
                  <a
                    href={project.links.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary flex-1"
                  >
                    Code
                  </a>
                )}
                {project.links.live && (
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary flex-1"
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
