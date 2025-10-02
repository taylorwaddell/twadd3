import type { ProjectCardProps } from "~/components/ProjectCard";

export const Projects: ProjectCardProps[] = [
  {
    title: "Remembrall",
    description:
      "AI-powered personal knowledge base for capturing and organizing thoughts with intelligent tagging and full-text search.",
    linkProp: {
      label: "Check it out",
      href: "https://www.remembrall.space",
    },
    githubRepo: "https://github.com/taylorwaddell/remembrall",
    stackLabels: ["Next", "TypeScript"],
  },
  {
    title: "twadd.dev",
    description:
      "My little piece of the internet. Built with the basics for optimal speed and a fun challenge.",
    linkProp: {
      label: "View on GitHub",
      href: "https://github.com/taylorwaddell/twadd-dev-2.0",
    },
    figmaFile:
      "https://www.figma.com/file/BJ9e0q7IItXt5P0uPIzhoF/twadd.dev-2.0?type=design&node-id=0%3A1&mode=design&t=jAMtdG4WF2jfh0pE-1",
    githubRepo: "https://github.com/taylorwaddell/twadd3",
    stackLabels: ["Next", "TypeScript", "CSS"],
  },
  {
    title: "X Specialties",
    description:
      "Designed and developed a the visual identity, including logo, slogan, color scheme, and website for a construction supplies company using Figma, Adobe Illustrator, and Webflow.",
    linkProp: {
      label: "Check it out",
      href: "https://www.xspecialties.com/",
    },
  },
  // {
  //   title: "Dynamic Island",
  //   description:
  //     "Got my hands dirty with framer motion attempting to recreate the iconic dynamic island. Inspired by @thomasauros.",
  //   linkProp: {
  //     label: "Check it out",
  //     href: "https://dynamic-island-gules.vercel.app/",
  //   },
  //   githubRepo: "https://github.com/taylorwaddell/dynamic-island",
  //   stackLabels: ["TypeScript", "Next", "FramerMotion"],
  // },
];
