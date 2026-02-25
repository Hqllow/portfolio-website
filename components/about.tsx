"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I am currently a second-year{" "}
        <span className="font-medium">Computer Science</span> student at the{" "}
        <span className="font-medium">University of Florida</span>. I have
        several years of experience as a{" "}
        <span className="font-medium">full-stack developer</span>, and have led
        the <span className="font-medium">Solar Gators Strategy Team</span> for
        the last year. I am incredibly experienced with
        <span className="font-medium"> Golang</span>,{" "}
        <span className="font-medium">Java</span>,{" "}
        <span className="font-medium">C#</span>,{" "}
        <span className="font-medium">C++</span>,{" "}
        <span className="font-medium">C</span>,{" "}
        <span className="font-medium">Python</span>,{" "}
        <span className="font-medium">Rust</span>, and both{" "}
        <span className="font-medium">Javascript</span> and{" "}
        <span className="font-medium">Typescript</span>. I am confident that I
        would make an excellent addition to your{" "}
        <span className="font-medium">Software Engineering</span> team.
      </p>
    </motion.section>
  );
}
