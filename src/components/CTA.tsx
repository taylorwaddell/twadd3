import { CTAArrow } from "~/icons";
import Link from "next/link";

interface CTAProps {
  label: string;
  href: string;
}

export default function CTA({ label, href }: CTAProps) {
  return (
    <Link className="cta" href={href}>
      {label}
      <CTAArrow />
    </Link>
  );
}
