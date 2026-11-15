"use client";

import { useState } from 'react';
import AetherFlowPreview from './aether-flow-hero';
import ParticleDriftPreview from './particle-drift';
import BlackHolePreview from './optimized-black-hole';
import type { Study } from './visual-study-canvas';

export function VisualStudies() {
  const [active, setActive] = useState<Study>("aether-flow");
  const studies = [
    { id: "aether-flow" as const, name: "Aether Flow", note: "Pointer-aware particle field", component: AetherFlowPreview },
    { id: "particle-drift" as const, name: "Particle Drift", note: "Slow, connected signal field", component: ParticleDriftPreview },
    { id: "black-hole" as const, name: "Optimized Black Hole", note: "Accretion-inspired light study", component: BlackHolePreview },
  ];
  const current = studies.find((item) => item.id === active)!;
  const Preview = current.component;
  return (
    <section aria-labelledby="visual-studies-title" className="mx-auto max-w-[1320px] px-5 py-20 sm:px-9 lg:px-14 lg:py-28">
      <div className="mb-8 flex flex-wrap items-end justify-between gap-5">
        <div><p className="mb-3 font-mono text-[9px] uppercase tracking-[.22em] text-acid">Interactive studies</p><h2 id="visual-studies-title" className="text-4xl tracking-[-.06em] sm:text-5xl">A few visual systems<span className="text-acid">.</span></h2></div>
        <p className="max-w-md text-sm leading-6 text-white/[.45]">Adapted from the Aether Flow, Particle Drift, and optimized black-hole templates you provided. Choose one to preview.</p>
      </div>
      <div className="grid gap-3 sm:grid-cols-3" role="group" aria-label="Choose an interactive visual">
        {studies.map((item) => <button key={item.id} type="button" aria-pressed={active === item.id} onClick={() => setActive(item.id)} className={`rounded-xl border p-4 text-left transition ${active === item.id ? "border-acid/50 bg-acid/[.07]" : "border-white/[.09] bg-white/[.02] hover:border-white/[.2]"}`}><span className="block text-sm text-white">{item.name}</span><span className="mt-1 block font-mono text-[9px] uppercase tracking-[.1em] text-white/[.4]">{item.note}</span></button>)}
      </div>
      <div className="relative mt-4 h-[300px] overflow-hidden rounded-2xl border border-white/[.1] bg-[#070910] sm:h-[380px]" aria-label={current.name}><Preview /></div>
    </section>
  );
}

