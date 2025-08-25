import { Github, Shaka, X } from "~/icons";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";

import Link from "next/link";

export default function Nav() {
  return (
    <header className="flex justify-content-between align-center">
      <div id="shakaCircle" aria-hidden="true">
        <Shaka />
      </div>
      <div className="flex gap-1">
        <Tooltip>
          <TooltipTrigger asChild>
            <Link
              className="button button-icon flex justify-center align-center"
              data-tooltip="Github"
              aria-label="Github"
              href="https://github.com/taylorwaddell"
              target="_blank"
            >
              <Github />
            </Link>
          </TooltipTrigger>
          <TooltipContent className="tooltip">Github</TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Link
              className="button button-icon flex justify-center align-center"
              data-tooltip="X"
              aria-label="X"
              href="https://x.com/t__wadd"
              target="_blank"
            >
              <X />
            </Link>
          </TooltipTrigger>
          <TooltipContent className="tooltip">X</TooltipContent>
        </Tooltip>
      </div>
    </header>
  );
}
