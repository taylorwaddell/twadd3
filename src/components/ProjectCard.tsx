import CTA from "./CTA";
import Link from "next/link";
import { FigmaIcon, Github, type StackOptionLabel } from "~/icons";
import StackTag from "./StackTag";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";

export interface ProjectCardProps {
  title: string;
  description: string;
  linkProp: LinkProps;
  githubRepo?: string;
  figmaFile?: string;
  stackLabels?: StackOptionLabel[];
}

export default function ProjectCard({
  title,
  description,
  linkProp,
  githubRepo,
  figmaFile,
  stackLabels,
}: ProjectCardProps) {
  const stackIcons = stackLabels?.map((stackLabel, i) => (
    <StackTag stackLabel={stackLabel} key={i} />
  ));

  return (
    <div className="card delay-show show">
      <div className="flex justify-content-between align-center">
        <h3>{title}</h3>
        <div className="flex align-center gap-1">
          {figmaFile && (
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  className="button button-icon button-small flex justify-center align-center"
                  data-tooltip="Figma File"
                  aria-label="Figma File"
                  href={figmaFile}
                  target="_blank"
                >
                  <FigmaIcon />
                </Link>
              </TooltipTrigger>
              <TooltipContent className="tooltip">Figma</TooltipContent>
            </Tooltip>
          )}
          {githubRepo && (
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  className="button button-icon button-small flex justify-center align-center"
                  data-tooltip="Github Repo"
                  aria-label="Github Repo"
                  href="https://github.com/taylorwaddell/twadd-dev-2.0"
                  target="_blank"
                >
                  <Github />
                </Link>
              </TooltipTrigger>
              <TooltipContent className="tooltip">Github</TooltipContent>
            </Tooltip>
          )}
        </div>
      </div>
      <p>{description}</p>
      <div className="flex justify-content-between align-center">
        <div className="flex gap-.5">{stackIcons}</div>
        <CTA label={linkProp.label} href={linkProp.href} />
      </div>
    </div>
  );
}

type LinkProps = {
  label: string;
  href: string;
};
