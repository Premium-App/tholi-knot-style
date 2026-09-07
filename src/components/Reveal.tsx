import { useEffect, useRef, useState, type ReactNode } from "react";

export function useInView<T extends HTMLElement>(once = true) {
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            if (once) observer.disconnect();
          } else if (!once) {
            setVisible(false);
          }
        }
      },
      { threshold: 0.15 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [once]);

  return { ref, visible };
}

export function Reveal({
  children,
  className = "",
  as: Tag = "div",
  id,
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "section";
  id?: string;
}) {
  const { ref, visible } = useInView<HTMLDivElement>();
  return (
    <Tag ref={ref} id={id} data-visible={visible} className={`reveal ${className}`}>
      {children}
    </Tag>
  );
}

export function Confetti({ count = 26 }: { count?: number }) {
  const colors = ["bg-brand", "bg-coral", "bg-gold", "bg-brand/70"];
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {Array.from({ length: count }).map((_, i) => (
        <span
          key={i}
          className={`confetti-bit absolute top-0 h-2 w-2 rounded-sm ${colors[i % colors.length]}`}
          style={{ left: `${(i * 97) % 100}%`, animationDelay: `${(i % 8) * 0.12}s` }}
        />
      ))}
    </div>
  );
}
