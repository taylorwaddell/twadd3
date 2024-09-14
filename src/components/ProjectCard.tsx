import CTA from "./CTA";
import Link from "next/link";
import type { StackOptionLabel } from "~/icons";
import StackTag from "./StackTag";

interface ProjectCardProps {
  title: string;
  description: string;
  linkProp: LinkProps;
  stackLabels: StackOptionLabel[];
}

export default function ProjectCard({
  title,
  description,
  linkProp,
  stackLabels,
}: ProjectCardProps) {
  const stackIcons = stackLabels.map((stackLabel, i) => (
    <StackTag stackLabel={stackLabel} key={i} />
  ));

  return (
    <div className="card delay-show">
      <div className="flex justify-content-between align-center">
        <h3>{title}</h3>
        <div className="flex align-center gap-1">
          <Link
            className="button button-icon button-small flex justify-center align-center"
            data-tooltip="Figma File"
            aria-label="Figma File"
            href="https://www.figma.com/file/BJ9e0q7IItXt5P0uPIzhoF/twadd.dev-2.0?type=design&node-id=0%3A1&mode=design&t=jAMtdG4WF2jfh0pE-1"
            target="_blank"
          >
            <svg
              aria-hidden="true"
              className="social-icon button-small"
              id="figma-icon"
              viewBox="0 0 12 18"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0 3.375C0 1.51088 1.46509 0 3.27273 0H8.72727C10.5349 0 12 1.51088 12 3.375C12 4.54837 11.4185 5.58337 10.5371 6.1875C11.4185 6.79163 12 7.82663 12 9C12 10.8641 10.5349 12.375 8.72727 12.375C7.88945 12.375 7.12364 12.0499 6.54545 11.5155V14.625C6.54545 16.4891 5.08036 18 3.27273 18C1.46509 18 0 16.4891 0 14.625C0 13.4505 0.581454 12.4177 1.46291 11.8125C0.581454 11.2073 0 10.1745 0 9C0 7.82663 0.581454 6.79163 1.46291 6.1875C0.581454 5.58337 0 4.54837 0 3.375ZM3.27273 5.625C2.06727 5.625 1.09091 4.61813 1.09091 3.375C1.09091 2.13187 2.06727 1.125 3.27273 1.125H5.45455V5.625H3.27273ZM5.45455 6.75H3.27273C2.06727 6.75 1.09091 7.75687 1.09091 9C1.09091 10.2431 2.06727 11.25 3.27273 11.25H5.45455V6.75ZM5.45455 12.375H3.27273C2.06727 12.375 1.09091 13.3819 1.09091 14.625C1.09091 15.8681 2.06727 16.875 3.27273 16.875C4.47818 16.875 5.45455 15.8681 5.45455 14.625V12.375ZM8.72727 6.75C7.52182 6.75 6.54545 7.75687 6.54545 9C6.54545 10.2431 7.52182 11.25 8.72727 11.25C9.93273 11.25 10.9091 10.2431 10.9091 9C10.9091 7.75687 9.93273 6.75 8.72727 6.75ZM8.72727 5.625C9.93273 5.625 10.9091 4.61813 10.9091 3.375C10.9091 2.13187 9.93273 1.125 8.72727 1.125H6.54545V5.625H8.72727Z"
              />
            </svg>
          </Link>
          <Link
            className="button button-icon button-small flex justify-center align-center"
            data-tooltip="Github Repo"
            aria-label="Github Repo"
            href="https://github.com/taylorwaddell/twadd-dev-2.0"
            target="_blank"
          >
            <svg
              aria-hidden="true"
              className="social-icon button-small"
              id="github-icon-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 496 512"
            >
              <path
                fill="currentColor"
                d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
              />
            </svg>
          </Link>
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
