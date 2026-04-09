import React from "react";
import { FaRankingStar } from "react-icons/fa6";
import { MdSolarPower } from "react-icons/md";
import { LuGraduationCap } from "react-icons/lu";
import simImg from "@/public/flaresim.png";
import telemImg from "@/public/telem-app.png";
import nasaImg from "@/public/adc-moon.png";
import obamaImg from "@/public/obama.png";
import wikiImg from "@/public/wikirace.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Promoted to Solar Gators Strategy Lead",
    location: "Gainesville, FL",
    description:
      "After just one year as a team member, I was promoted to team lead and have developed multiple web applications for the solar car team.",
    icon: React.createElement(FaRankingStar),
    date: "Aug. 2025",
  },
  {
    title: "Joined Solar Gators Team",
    location: "Gainesville, FL",
    description:
      "As a team member, I refactored and deployed a new telemetry dashboard, improving the team's results at FSGP.",
    icon: React.createElement(MdSolarPower),
    date: "Sept. 2024",
  },
  {
    title: "Accepted to University of Florida",
    location: "Gainesville, FL",
    description: "",
    icon: React.createElement(LuGraduationCap),
    date: "July 2024",
  },
] as const;

export const projectsData = [
  {
    title: "FlareSim 2",
    description:
      "Physics-based, iterative simulation to predict lap speeds, acceleration, and distance, to optimize solar car performance at FSGP. Features OpenMeteo weather forecasting to predict energy changes.",
    tags: ["React", "JavaScript", "Golang"],
    imageUrl: simImg,
  },
  {
    title: "Flare Telemetry Dash",
    description:
      "Real-time dashboard featuring streamed data from the Solar Gators car, Flare. Live GPS monitoring and historic data visualization pages, with full OAuth integration.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Neon", "OAuth"],
    imageUrl: telemImg,
  },
  {
    title: "NASA App Development Challenge",
    description:
      "A real-world, first-person perspective simulation of the moon's surface with simulated communication and real-time azimuth calculations.",
    tags: ["Unity", "C#", "Blender"],
    imageUrl: nasaImg,
  },
  {
    title: "ObamaBot V2",
    description:
      "Feature-rich JDA-based Discord bot built with Maven, featuring modular slash commands, Mojang account validation, and scalable utility automation for responsive server management.",
    tags: ["Java", "JDA", "Maven", "REST APIs", "Discord", "JSON"],
    imageUrl: obamaImg,
  },
  {
    title: "WikiRace",
    description:
      "High-performance SFML and C++ pathfinding tool that solves Wikipedia races across a graph of 7 million nodes using tree-based search, optimized traversal, and interactive visualization.",
    tags: ["C++", "SFML", "Pathfinding", "Graphs", "Algorithms"],
    imageUrl: wikiImg,
  },
] as const;

export const skillsData = [
  "Java",
  "Maven",
  "Gradle",
  "C++",
  "C",
  "C#",
  "Rust",
  "Golang",
  "Unity",
  "Flask",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "GraphQL",
  "PostgreSQL",
  "Python",
] as const;
