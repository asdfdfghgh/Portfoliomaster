"use client";

import { useEffect, useRef } from 'react';

export type Study = "aether-flow" | "particle-drift" | "black-hole";

export function StudyCanvas({ study }: { study: Study }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d", { alpha: true });
    if (!canvas || !context) return;
    const ctx = context;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let width = 0;
    let height = 0;
    let frame = 0;
    let active = true;
    let tick = 0;
    const pointer = { x: -1000, y: -1000 };
    const particles: { x: number; y: number; vx: number; vy: number; r: number }[] = [];

    const resize = () => {
      const bounds = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      width = bounds.width;
      height = bounds.height;
      canvas.width = Math.max(1, Math.round(width * dpr));
      canvas.height = Math.max(1, Math.round(height * dpr));
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      particles.length = 0;
      const count = Math.min(72, Math.max(20, Math.round((width * height) / 10000)));
      for (let i = 0; i < count; i++) {
        particles.push({ x: Math.random() * width, y: Math.random() * height, vx: (Math.random() - .5) * .28, vy: (Math.random() - .5) * .28, r: Math.random() * 1.3 + .5 });
      }
      draw(false);
    };

    const draw = (animate: boolean) => {
      if (!active) return;
      tick += animate && !reducedMotion ? 0.006 : 0;
      ctx.clearRect(0, 0, width, height);

      if (study === "black-hole") {
        const cx = width * .55;
        const cy = height * .52;
        const radius = Math.min(width, height) * .17;
        const halo = ctx.createRadialGradient(cx, cy, radius * .36, cx, cy, radius * 3.5);
        halo.addColorStop(0, "rgba(4,6,15,1)");
        halo.addColorStop(.2, "rgba(91,76,255,.38)");
        halo.addColorStop(.4, "rgba(29,175,255,.18)");
        halo.addColorStop(1, "rgba(7,9,16,0)");
        ctx.fillStyle = halo;
        ctx.fillRect(0, 0, width, height);
        ctx.save();
        ctx.translate(cx, cy);
        ctx.rotate(-.16);
        for (let ring = 0; ring < 7; ring++) {
          const rx = radius * (1.05 + ring * .17);
          const ry = rx * .28;
          ctx.beginPath();
          ctx.ellipse(0, 0, rx, ry, 0, Math.PI * .06, Math.PI * .94);
          ctx.strokeStyle = `rgba(${ring < 3 ? "146,130,255" : "47,181,255"},${.46 - ring * .045})`;
          ctx.lineWidth = ring === 0 ? 2.3 : 1;
          ctx.shadowColor = ring < 3 ? "#988aff" : "#35baff";
          ctx.shadowBlur = 14;
          ctx.stroke();
        }
        ctx.restore();
        const core = ctx.createRadialGradient(cx - radius * .18, cy - radius * .18, 1, cx, cy, radius * .72);
        core.addColorStop(0, "#090b13");
        core.addColorStop(.72, "#020307");
        core.addColorStop(1, "rgba(2,3,7,0)");
        ctx.fillStyle = core;
        ctx.beginPath();
        ctx.arc(cx, cy, radius * .78, 0, Math.PI * 2);
        ctx.fill();
        particles.forEach((p, i) => {
          const a = tick * (i % 2 ? 1 : -1) + i * 2.37;
          const orbit = radius * (1.15 + (i % 7) * .22);
          ctx.fillStyle = "rgba(185,178,255,.7)";
          ctx.fillRect(cx + Math.cos(a) * orbit * 1.4, cy + Math.sin(a) * orbit * .31, 1.5, 1.5);
        });
      } else {
        particles.forEach((p, i) => {
          if (animate && !reducedMotion) {
            p.x += p.vx;
            p.y += p.vy + (study === "particle-drift" ? .12 : 0);
            if (p.x < -5 || p.x > width + 5) p.vx *= -1;
            if (p.y < -5) p.y = height + 5;
            if (p.y > height + 5) p.y = -5;
            const dx = p.x - pointer.x;
            const dy = p.y - pointer.y;
            if (dx * dx + dy * dy < 15000 && study === "aether-flow") {
              p.x += dx * .003;
              p.y += dy * .003;
            }
          }
          for (let j = i + 1; j < particles.length; j++) {
            const other = particles[j];
            const dx = other.x - p.x;
            const dy = other.y - p.y;
            const distance = Math.hypot(dx, dy);
            if (distance < 105) {
              ctx.strokeStyle = `rgba(${study === "aether-flow" ? "168,119,255" : "94,166,255"},${(1 - distance / 105) * .21})`;
              ctx.lineWidth = .7;
              ctx.beginPath();
              ctx.moveTo(p.x, p.y);
              ctx.lineTo(other.x, other.y);
              ctx.stroke();
            }
          }
          ctx.fillStyle = study === "aether-flow" ? "rgba(203,172,255,.78)" : "rgba(120,179,255,.72)";
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
          ctx.fill();
        });
      }
      if (animate && !reducedMotion) frame = requestAnimationFrame(() => draw(true));
    };

    const observer = new IntersectionObserver(([entry]) => {
      active = entry.isIntersecting;
      cancelAnimationFrame(frame);
      if (active) draw(true);
    }, { threshold: .02 });
    observer.observe(canvas);
    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(canvas);
    const move = (event: PointerEvent) => {
      const box = canvas.getBoundingClientRect();
      pointer.x = event.clientX - box.left;
      pointer.y = event.clientY - box.top;
    };
    canvas.addEventListener("pointermove", move, { passive: true });
    resize();
    return () => {
      active = false;
      cancelAnimationFrame(frame);
      observer.disconnect();
      resizeObserver.disconnect();
      canvas.removeEventListener("pointermove", move);
    };
  }, [study]);

  return <canvas ref={canvasRef} aria-hidden="true" className="absolute inset-0 h-full w-full" />;
}

