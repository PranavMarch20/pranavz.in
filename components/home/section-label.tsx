import type { ReactNode } from "react";

type SectionLabelProps = {
  children: ReactNode;
  id?: string;
};

export function SectionLabel({ children, id }: SectionLabelProps) {
  return (
    <h2
      id={id}
      className="font-mono text-xs font-normal uppercase leading-4 tracking-[0.08em] text-section-label"
    >
      {children}
    </h2>
  );
}
