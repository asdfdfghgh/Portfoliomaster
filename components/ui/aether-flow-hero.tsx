"use client";

import { StudyCanvas } from "./visual-study-canvas";

export default function AetherFlowHeroPreview() {
  return <div className="relative h-full w-full overflow-hidden bg-[#070910]"><StudyCanvas study="aether-flow" /><div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#070910] via-[#070910]/75 to-transparent p-5 sm:p-7"><p className="font-mono text-[9px] uppercase tracking-[.17em] text-acid">Aether Flow</p><p className="mt-1 text-xs text-white/[.55]">Pointer-aware particles · pauses offscreen</p></div></div>;
}
