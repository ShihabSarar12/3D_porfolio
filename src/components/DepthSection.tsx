import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, type ReactNode } from "react";

interface DepthSectionProps {
  children: ReactNode;
  depth: number;
  id?: string;
}

export function DepthSection({ children, depth, id }: DepthSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [1, 1]);

  const y = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <motion.section
      id={id}
      ref={ref}
      style={{ opacity, y }}
      className="relative min-h-screen"
    >
      <div className="absolute top-6 left-4 sm:left-8 opacity-20 pointer-events-none">
        <span className="text-xs text-white/60 backdrop-blur-sm bg-black/20 px-3 py-1.5 rounded-full border border-white/10">
          {depth}m
        </span>
      </div>

      <div className="relative z-10">{children}</div>
    </motion.section>
  );
}
