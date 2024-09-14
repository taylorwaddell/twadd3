import { Github, ReadCV, Shaka, X } from "~/icons";

import Link from "next/link";
import ProjectCard from "~/components/ProjectCard";
import WritingCard from "~/components/WritingCard";

export default function Home() {
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
        <ProjectCard
          title="twadd.dev"
          description="My little piece of the internet. Built with the basics for optimal speed and a fun challenge."
          linkProp={{
            label: "View on Figma",
            href: "https://www.figma.com/file/BJ9e0q7IItXt5P0uPIzhoF/twadd.dev-2.0?type=design&node-id=0%3A1&mode=design&t=jAMtdG4WF2jfh0pE-1",
          }}
          stackLabels={["Next", "TypeScript", "CSS"]}
        />
      </main>
    </>
  );
}
