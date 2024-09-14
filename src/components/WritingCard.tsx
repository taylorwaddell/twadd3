import CTA from "./CTA";

interface WritingCardProps {
  title: string;
  link: string;
  className?: string;
}

export default function WritingCard({
  title,
  link,
  className,
}: WritingCardProps) {
  return (
    <div className={"card delay-show reading " + className}>
      <h3>{title}</h3>
      <CTA label="Read" href={link} />
    </div>
  );
}
