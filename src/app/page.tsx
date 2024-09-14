import { Github, ReadCV, Shaka, X } from "~/icons";

import Link from "next/link";
import ProjectCard from "~/components/ProjectCard";
import { Projects } from "~/data/Projects";
import WritingCard from "~/components/WritingCard";

export default function Home() {
  const projects = Projects.map((project, i) => (
    <ProjectCard
      key={i}
      title={project.title}
      description={project.description}
      linkProp={project.linkProp}
      figmaFile={project.figmaFile}
      githubRepo={project.githubRepo}
      stackLabels={project.stackLabels}
    />
  ));
  return (
    <>
      <header className="flex justify-content-between align-center">
        <div id="shakaCircle" aria-hidden="true">
          <Shaka />
        </div>
        <div className="flex gap-1">
          <Link
            className="button button-icon flex justify-center align-center"
            data-tooltip="Read.cv"
            aria-label="Read.cv"
            href="https://read.cv/twadd"
            target="_blank"
          >
            <ReadCV />
          </Link>
          <Link
            className="button button-icon flex justify-center align-center"
            data-tooltip="Github"
            aria-label="Github"
            href="https://github.com/taylorwaddell"
            target="_blank"
          >
            <Github />
          </Link>
          <Link
            className="button button-icon flex justify-center align-center"
            data-tooltip="X"
            aria-label="X"
            href="https://x.com/t__wadd"
            target="_blank"
          >
            <X />
          </Link>
        </div>
      </header>
      <main>
        <h1>About</h1>
        <p className="cushy delay-show">
          I&apos;m <strong>Taylor Waddell</strong>, a{" "}
          <strong>UX Developer</strong> at{" "}
          <a href="https://verisglobal.com/" target="_blank">
            Veris Global
          </a>
          , where I <span className="underline-best">create</span> easy-to-use
          components, <span className="underline-best">lead</span> projects to
          enhance user experience, and{" "}
          <span className="underline-best">develop</span> design systems.
        </p>
        <h2>Writing</h2>
        <WritingCard title="Dev Notes - 01" link="https://read.cv/twadd" />
        <h2>Projects</h2>
        {projects}
      </main>
    </>
  );
}
