import { IconDisplay, type StackOptionLabel } from "~/icons";

interface StackIconProps {
  stackLabel: StackOptionLabel;
}

export default function StackTag({ stackLabel }: StackIconProps) {
  return (
    <>
      <p className="sr-only">{String(stackLabel)}</p>
      <IconDisplay stackLabel={stackLabel} />
    </>
  );
}
