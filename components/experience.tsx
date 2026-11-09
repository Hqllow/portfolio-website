"use client";

import SectionHeading from "./section-heading";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";

export default function Experience() {
  const { ref } = useSectionInView("Experience");

  return (
    <section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>My experience</SectionHeading>
      <ol className="relative max-w-2xl before:absolute before:left-4 before:top-2 before:h-[calc(100%-0.5rem)] before:w-px before:bg-gray-300 dark:before:bg-white/20">
        {experiencesData.map((item, index) => (
          <li className="relative pl-12" key={index}>
            <span className="absolute left-0 top-1 flex h-9 w-9 items-center justify-center rounded-full border border-black/10 bg-white text-lg shadow-sm dark:border-white/10 dark:bg-gray-800">
              {item.icon}
            </span>
            <article className="mb-8 rounded-xl border border-black/5 bg-gray-100 p-5 text-left dark:border-white/10 dark:bg-white/5">
              <p className="text-sm font-medium text-gray-500 dark:text-white/50">
                {item.date}
              </p>
              <h3 className="mt-1 font-semibold capitalize">{item.title}</h3>
              <p className="font-normal">{item.location}</p>
              <p className="mt-2 font-normal text-gray-700 dark:text-white/75">
                {item.description}
              </p>
            </article>
          </li>
        ))}
      </ol>
    </section>
  );
}
