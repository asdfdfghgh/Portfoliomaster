import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, FileText } from "lucide-react";
import { Card } from "@/components/ui/card";
import { projects } from "@/lib/projects";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  return project ? { title: `${project.title} | Subhra Jyoti Mishra`, description: project.summary } : {};
}

function Illustration({ slug }: { slug: string }) {
  if (slug === "wildfire-remote-sensing") {
    return <div className="relative flex aspect-[16/7] items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-[#0a1017] p-6">
      <div className="absolute inset-0 opacity-50 [background-image:linear-gradient(rgba(110,160,210,.12)_1px,transparent_1px),linear-gradient(90deg,rgba(110,160,210,.12)_1px,transparent_1px)] [background-size:44px_44px]" />
      <div className="absolute inset-[13%] rounded-[45%] border border-teal-200/25" /><div className="absolute inset-[21%] rotate-12 rounded-[43%] border border-sky-200/30" /><div className="absolute inset-[29%] -rotate-6 rounded-[46%] border border-orange-300/35" />
      <div className="relative grid h-16 w-16 place-items-center rounded-full border border-orange-300/45 bg-orange-400/10 text-orange-200 shadow-[0_0_60px_rgba(251,146,60,.18)]"><span className="h-3 w-3 rounded-full bg-orange-300" /></div>
      <span className="absolute bottom-4 right-5 font-mono text-[8px] uppercase tracking-[.16em] text-white/40">Schematic · no observed data shown</span>
    </div>;
  }
  return <div className="relative flex aspect-[16/7] items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-[radial-gradient(ellipse_at_center,rgba(83,71,176,.28),transparent_58%),linear-gradient(135deg,#101626,#080a10)] p-6">
    <div className="absolute h-36 w-36 rounded-full border border-violet-200/25" /><div className="absolute h-44 w-72 -rotate-[16deg] rounded-[50%] border border-sky-200/25" /><div className="absolute h-24 w-52 rotate-[20deg] rounded-[50%] border border-fuchsia-200/20" />
    <span className="relative rounded-full border border-violet-200/40 bg-violet-300/10 px-4 py-2 font-mono text-[9px] uppercase tracking-[.14em] text-white/70">Multispectral concept</span>
    <span className="absolute bottom-4 right-5 font-mono text-[8px] uppercase tracking-[.16em] text-white/40">Concept illustration · not a prototype</span>
  </div>;
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();
  return <main className="min-h-screen bg-[#090a0e] text-[#f4f2ee]">
    <header className="mx-auto flex max-w-[1120px] items-center justify-between px-5 py-6 sm:px-9"><Link href="/#top" className="font-mono text-xs tracking-[.18em] text-white/70">SJM<span className="text-acid">.</span></Link><Link href="/#projects" className="inline-flex items-center gap-2 font-mono text-[9px] uppercase tracking-[.12em] text-white/55 transition hover:text-acid"><ArrowLeft size={14} /> All projects</Link></header>
    <article className="mx-auto max-w-[1120px] px-5 pb-24 pt-7 sm:px-9 sm:pt-12">
      <p className="font-mono text-[9px] uppercase tracking-[.2em] text-acid">{project.category}</p>
      <h1 className="mt-5 max-w-4xl text-4xl leading-[1.02] tracking-[-.065em] sm:text-6xl lg:text-7xl">{project.title}<span className="text-acid">.</span></h1>
      <p className="mt-6 max-w-3xl text-lg leading-8 text-white/60">{project.summary}</p>
      <div className="mt-9 flex flex-wrap gap-2">{project.tags.map((tag) => <span key={tag} className="rounded-full border border-white/10 px-3 py-2 font-mono text-[8px] uppercase tracking-[.1em] text-white/55">{tag}</span>)}</div>

      {project.materialsTitle && <section aria-label="Thesis and supporting PDFs" className="mt-10 rounded-2xl border border-acid/30 bg-[linear-gradient(120deg,rgba(210,255,76,.11),rgba(255,255,255,.025)_55%,rgba(123,112,220,.09))] p-5 sm:p-7"><div className="flex flex-wrap items-end justify-between gap-4"><div><p className="font-mono text-[9px] uppercase tracking-[.2em] text-acid">Read the research</p><h2 className="mt-2 text-2xl tracking-[-.04em] text-white sm:text-3xl">Thesis & supporting PDFs</h2><p className="mt-2 max-w-xl text-sm leading-6 text-white/55">Open the full thesis or supporting project documents.</p></div><FileText className="text-acid" size={25} /></div><div className="mt-5 grid gap-3 sm:grid-cols-3">{project.materials.map((material, index) => <a key={material.href} href={material.href} target="_blank" rel="noreferrer" className={`group rounded-xl border p-4 transition hover:-translate-y-0.5 hover:border-acid/50 ${index === 0 ? "border-acid/35 bg-acid/[.09]" : "border-white/10 bg-black/20"}`}><span className="flex items-center justify-between gap-2 text-sm font-medium leading-5 text-white group-hover:text-acid">{material.label}<ArrowUpRight size={14} className="shrink-0" /></span>{material.detail && <span className="mt-2 block text-xs leading-5 text-white/45">{material.detail}</span>}<span className="mt-4 block font-mono text-[8px] uppercase tracking-[.16em] text-acid">Open PDF</span></a>)}</div></section>}

      {!project.storySections && <figure className="mt-12 overflow-hidden rounded-2xl border border-white/10 bg-[#0b0d13]"><div className="relative aspect-[16/8] bg-[#080a10] sm:aspect-[16/6]"><Image src={project.cover} alt={project.coverAlt} fill priority sizes="(max-width: 768px) 100vw, 1120px" className="object-cover" /></div><figcaption className="border-t border-white/[.08] px-4 py-3 text-xs leading-5 text-white/45 sm:px-6">Generated visual for display. Project-specific figures and source materials appear below.</figcaption></figure>}

      {!project.storySections && <section aria-label="Project visuals" className="mt-12 grid gap-4">{project.visuals.length ? project.visuals.map((visual) => <figure key={visual.src} className="overflow-hidden rounded-2xl border border-white/10 bg-[#0b0d13]"><div className="relative min-h-[220px] bg-[#080a10] sm:aspect-[16/7]"> <Image src={visual.src} alt={visual.alt} fill sizes="(max-width: 768px) 100vw, 1120px" className="object-contain p-3 sm:p-6" /></div><figcaption className="border-t border-white/[.08] px-4 py-3 text-xs leading-5 text-white/45 sm:px-6">{visual.caption}</figcaption></figure>) : <Illustration slug={project.slug} />}</section>}

      <div className="mt-14 grid gap-12 md:grid-cols-[1fr_320px]">
        <div className="space-y-12">
          <section><p className="mb-4 font-mono text-[9px] uppercase tracking-[.2em] text-acid">Overview</p><div className="space-y-4">{project.overview.map((text) => <p key={text} className="max-w-3xl text-base leading-8 text-white/65">{text}</p>)}</div></section>
          <section><p className="mb-4 font-mono text-[9px] uppercase tracking-[.2em] text-acid">Approach</p><ul className="space-y-3">{project.approach.map((text) => <li key={text} className="flex gap-3 text-sm leading-7 text-white/60"><span className="mt-[11px] h-1.5 w-1.5 shrink-0 rounded-full bg-acid" />{text}</li>)}</ul></section>
          <section><p className="mb-4 font-mono text-[9px] uppercase tracking-[.2em] text-acid">Outcomes & status</p><ul className="space-y-3">{project.outcomes.map((text) => <li key={text} className="flex gap-3 text-sm leading-7 text-white/60"><span className="mt-[11px] h-1.5 w-1.5 shrink-0 rounded-full bg-sky-300" />{text}</li>)}</ul></section>
        </div>
        <aside className="space-y-5">
          {!project.materialsTitle && <Card className="rounded-2xl border-white/10 bg-white/[.025] p-5"><p className="font-mono text-[9px] uppercase tracking-[.18em] text-acid">Related materials</p><div className="mt-4 space-y-4">{project.materials.map((material) => <div key={`${material.href}-${material.label}`}><a href={material.href} target={material.href.startsWith("http") ? "_blank" : undefined} rel={material.href.startsWith("http") ? "noreferrer" : undefined} className="inline-flex items-center gap-2 text-sm leading-5 text-white/85 transition hover:text-acid">{material.label}{material.href.endsWith(".pdf") || material.href.endsWith(".pptx") ? <FileText size={14} /> : <ArrowUpRight size={14} />}</a>{material.detail && <p className="mt-1 text-xs leading-5 text-white/40">{material.detail}</p>}</div>)}</div></Card>}
          {project.caveat && <Card className="rounded-2xl border-amber-200/15 bg-amber-100/[.035] p-5"><p className="font-mono text-[9px] uppercase tracking-[.18em] text-amber-100/80">Context</p><p className="mt-3 text-xs leading-6 text-white/55">{project.caveat}</p></Card>}
        </aside>
      </div>
      {project.storySections && <section aria-label="Research presentation" className="mt-12 space-y-4">{project.storySections.map((section, index) => <article key={section.heading} className="grid overflow-hidden rounded-2xl border border-white/10 bg-[#0b0d13] md:grid-cols-[.78fr_1.22fr]"><div className="flex flex-col justify-center p-5 sm:p-7"><p className="font-mono text-[8px] uppercase tracking-[.2em] text-acid">{String(index + 1).padStart(2, "0")} / {project.storySections?.length}</p><h2 className="mt-3 text-xl leading-tight tracking-[-.035em] text-white sm:text-2xl">{section.heading}</h2><p className="mt-3 max-w-lg text-sm leading-6 text-white/60">{section.text}</p></div>{section.visual && <figure className="border-t border-white/10 bg-[#080a10] md:border-l md:border-t-0"><div className="relative aspect-[16/9] max-h-[360px]"><Image src={section.visual.src} alt={section.visual.alt} fill sizes="(max-width: 768px) 100vw, 62vw" className="object-contain p-3 sm:p-5" /></div><figcaption className="border-t border-white/[.08] px-4 py-2.5 text-xs leading-5 text-white/45 sm:px-5">{section.visual.caption}</figcaption></figure>}</article>)}</section>}
      <div className="mt-16 border-t border-white/10 pt-6"><Link href="/#projects" className="inline-flex items-center gap-2 text-sm text-white/55 transition hover:text-acid"><ArrowLeft size={15} /> Back to selected work</Link></div>
    </article>
  </main>;
}
