import ProjectCard from "~/components/ProjectCard";
import { Projects as projectData } from "~/data/Projects";

export default function Projects() {
  return projectData.map((project, i) => (
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
}
