"use client";

import { useEffect, useRef } from "react";

type RevealProps = {
  as?: keyof React.JSX.IntrinsicElements;
  className?: string;
  children: React.ReactNode;
};

export default function Reveal({
  as: Tag = "div",
  className = "",
  children,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const Component = Tag as React.ElementType;
  return (
    <Component ref={ref} className={`reveal ${className}`.trim()}>
      {children}
    </Component>
  );
}
