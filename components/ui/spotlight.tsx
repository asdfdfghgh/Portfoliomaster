"use client";

import { motion, useSpring, useTransform, type SpringOptions } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type SpotlightProps = {
  className?: string;
  size?: number;
  springOptions?: SpringOptions;
};

export function Spotlight({ className, size = 260, springOptions = { bounce: 0, stiffness: 120, damping: 24 } }: SpotlightProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);
  const x = useSpring(-size, springOptions);
  const y = useSpring(-size, springOptions);
  const left = useTransform(x, (value) => `${value - size / 2}px`);
  const top = useTransform(y, (value) => `${value - size / 2}px`);

  useEffect(() => {
    const parent = ref.current?.parentElement;
    if (!parent) return;
    const move = (event: MouseEvent) => {
      const rect = parent.getBoundingClientRect();
      x.set(event.clientX - rect.left);
      y.set(event.clientY - rect.top);
    };
    const enter = () => setHovered(true);
    const leave = () => setHovered(false);
    parent.addEventListener("mousemove", move, { passive: true });
    parent.addEventListener("mouseenter", enter);
    parent.addEventListener("mouseleave", leave);
    return () => {
      parent.removeEventListener("mousemove", move);
      parent.removeEventListener("mouseenter", enter);
      parent.removeEventListener("mouseleave", leave);
    };
  }, [x, y]);

  return (
    <motion.div
      ref={ref}
      aria-hidden="true"
      className={cn("pointer-events-none absolute rounded-full bg-[radial-gradient(circle_at_center,rgba(213,255,79,.15),transparent_68%)] blur-2xl transition-opacity duration-300", hovered ? "opacity-100" : "opacity-0", className)}
      style={{ width: size, height: size, left, top }}
    />
  );
}
