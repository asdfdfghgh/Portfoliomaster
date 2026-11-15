"use client";

import { StudyCanvas } from "./visual-study-canvas";

export default function ParticleDriftPreview() {
  return <div className="relative h-full w-full overflow-hidden bg-[#070910]"><StudyCanvas study="particle-drift" /><div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#070910] via-[#070910]/75 to-transparent p-5 sm:p-7"><p className="font-mono text-[9px] uppercase tracking-[.17em] text-acid">Particle Drift</p><p className="mt-1 text-xs text-white/[.55]">A slow, connected signal field · pauses offscreen</p></div></div>;
}
