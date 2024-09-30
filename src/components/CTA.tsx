import { CTAArrow, CTAArrowLeft } from "~/icons";

import Link from "next/link";

interface CTAProps {
  label: string;
  href: string;
  leftArrow?: boolean;
}

export default function CTA({ label, href, leftArrow = false }: CTAProps) {
  return (
    <Link className="cta flex gap-1 align-center" href={href}>
      {leftArrow && <CTAArrowLeft />}
      {label}
      {!leftArrow && <CTAArrow />}
    </Link>
  );
}
