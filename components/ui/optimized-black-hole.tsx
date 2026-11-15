"use client";

import { StudyCanvas } from "./visual-study-canvas";

/** Lightweight 2D canvas interpretation of the supplied black-hole visual template. */
export default function OptimizedBlackHolePreview() {
  return <div className="relative h-full w-full overflow-hidden bg-[#070910]"><StudyCanvas study="black-hole" /><div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#070910] via-[#070910]/75 to-transparent p-5 sm:p-7"><p className="font-mono text-[9px] uppercase tracking-[.17em] text-acid">Optimized Black Hole</p><p className="mt-1 text-xs text-white/[.55]">Accretion-inspired light study · pauses offscreen</p></div></div>;
}
