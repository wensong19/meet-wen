import type { ReactNode } from "react";

type SectionShellProps = {
  id?: string;
  eyebrow?: string;
  title?: string;
  children: ReactNode;
  className?: string;
};

export function SectionShell({ id, eyebrow, title, children, className = "" }: SectionShellProps) {
  return (
    <section id={id} className={`px-5 py-16 sm:px-8 lg:px-12 lg:py-24 ${className}`}>
      <div className="mx-auto max-w-7xl">
        {(eyebrow || title) && (
          <div className="mb-10 max-w-3xl">
            {eyebrow && (
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.28em] text-cinnabar">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="font-serif text-4xl font-semibold leading-tight text-current sm:text-5xl">
                {title}
              </h2>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
