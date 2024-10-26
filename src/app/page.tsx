import { Github, ReadCV, Shaka, X } from "~/icons";

import Link from "next/link";
import ProjectCard from "~/components/ProjectCard";
import { Projects } from "~/data/Projects";
import WritingCard from "~/components/WritingCard";
import fs from "node:fs";
import matter from "gray-matter";
import path from "node:path";

const contentSource = "src/app/writing/content";

function getWritings() {
  const targets = fs.readdirSync(path.join(process.cwd(), contentSource), {
    recursive: true,
  });

  const files = [];

  for (const target of targets) {
    if (
      fs
        .lstatSync(path.join(process.cwd(), contentSource, target.toString()))
        .isDirectory()
    ) {
      continue;
    }

    files.push(target);
  }

  const writings = files.map((file) => {
    const content = fs.readFileSync(
      path.join(process.cwd(), contentSource, file.toString()),
      "utf8"
    );
    const { data } = matter(content);

    const base = file.toString().replace(".mdx", "");
    return { title: base.replace(/-/g, " "), slug: base, data: data };
  });

  return writings.sort((a, b) => b.data.date - a.data.date);
}

export default function Home() {
  const writings = getWritings().map((w, i) => (
    <WritingCard
      key={i}
      title={w.title}
      link={"/writing/" + w.slug}
      className="show"
    />
  ));
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
      <main className="grid-container">
        <div>
          <article className="grid-item">
            <h1>About</h1>
            <p className="cushy delay-show">
              I&apos;m <strong className="italics">Taylor Waddell</strong>, a{" "}
              <strong className="italics">UX Developer</strong> at{" "}
              <a href="https://verisglobal.com/" target="_blank">
                Veris Global
              </a>
              , where I <span className="underline-best">create</span>{" "}
              easy-to-use components,{" "}
              <span className="underline-best">lead</span> projects to enhance
              user experience, and{" "}
              <span className="underline-best">develop</span> design systems.
            </p>
          </article>
          <section>
            <h2>Writing</h2>
            {writings}
          </section>
        </div>
        <section>
          <h2>Projects</h2>
          {projects}
        </section>
      </main>
    </>
  );
}
