import CTA from "./CTA";

interface WritingCardProps {
  title: string;
  link: string;
}

export default function WritingCard({ title, link }: WritingCardProps) {
  return (
    <div className="card delay-show reading">
      <h3>{title}</h3>
      <CTA label="Read" href={link} />
    </div>
  );
}
