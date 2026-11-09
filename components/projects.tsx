"use client";

import React from "react";
import { useState } from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? projectsData : projectsData.slice(0, 3);

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>My projects</SectionHeading>
      <div>
        {visibleProjects.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
      <button
        type="button"
        onClick={() => setShowAll((visible) => !visible)}
        className="mx-auto mt-8 block rounded-full border border-black/10 bg-white px-5 py-2 text-sm font-medium text-gray-700 transition hover:border-black/20 hover:bg-gray-100 dark:border-white/10 dark:bg-white/10 dark:text-white/80 dark:hover:bg-white/15"
      >
        {showAll ? "Show selected work" : "View all projects"}
      </button>
    </section>
  );
}
