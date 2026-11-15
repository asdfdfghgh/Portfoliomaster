"use client";

import { Suspense, lazy, useState } from "react";

const Spline = lazy(() => import("@splinetool/react-spline"));

type SplineSceneProps = { scene: string; className?: string };

function RobotFallback() {
  return <svg aria-hidden="true" viewBox="0 0 360 340" fill="none" className="h-full w-full overflow-visible">
    <defs>
      <linearGradient id="robot-shell" x1="98" y1="37" x2="248" y2="308" gradientUnits="userSpaceOnUse"><stop stopColor="#F5F7FA"/><stop offset=".22" stopColor="#747D8B"/><stop offset=".48" stopColor="#171C25"/><stop offset=".72" stopColor="#929AA5"/><stop offset="1" stopColor="#262B34"/></linearGradient>
      <linearGradient id="robot-face" x1="126" y1="59" x2="218" y2="137" gradientUnits="userSpaceOnUse"><stop stopColor="#151B25"/><stop offset=".52" stopColor="#05070C"/><stop offset="1" stopColor="#343B46"/></linearGradient>
      <linearGradient id="robot-limb" x1="68" y1="132" x2="115" y2="264" gradientUnits="userSpaceOnUse"><stop stopColor="#DDE1E7"/><stop offset=".35" stopColor="#606A77"/><stop offset=".7" stopColor="#171C24"/><stop offset="1" stopColor="#A3ABB5"/></linearGradient>
      <radialGradient id="robot-aura"><stop stopColor="#7B79FF" stopOpacity=".24"/><stop offset="1" stopColor="#7B79FF" stopOpacity="0"/></radialGradient>
      <filter id="robot-glow" x="100" y="58" width="140" height="80" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse"><feGaussianBlur stdDeviation="5"/></filter>
    </defs>
    <ellipse cx="182" cy="177" rx="165" ry="150" fill="url(#robot-aura)"/>
    <ellipse cx="184" cy="315" rx="92" ry="11" fill="#7886FF" fillOpacity=".12"/>
    <g stroke="#C9D1DD" strokeOpacity=".18"><path d="M51 104c-14 30-14 72 0 101M306 96c17 37 17 79-1 113"/><circle cx="43" cy="154" r="3" fill="#D5FF4F" stroke="none"/><circle cx="317" cy="130" r="2" fill="#91C9FF" stroke="none"/></g>
    <g>
      <path d="m130 177-29 12-23 49 9 8 35-35 28-7" fill="url(#robot-limb)" stroke="#BAC2CE" strokeOpacity=".45" strokeWidth="2"/>
      <path d="m89 233-24 28 10 12 35-17 14-25" fill="url(#robot-limb)" stroke="#BAC2CE" strokeOpacity=".45" strokeWidth="2"/>
      <circle cx="102" cy="190" r="13" fill="#222833" stroke="#B7C0CB" strokeOpacity=".55" strokeWidth="3"/><circle cx="88" cy="242" r="12" fill="#202631" stroke="#AAB4C1" strokeOpacity=".65" strokeWidth="3"/>
      <path d="m227 173 31 8 35 36-7 11-40-22-26 3" fill="url(#robot-limb)" stroke="#BBC3CE" strokeOpacity=".5" strokeWidth="2"/>
      <path d="m284 217 22 25-10 13-31-13-15-23" fill="url(#robot-limb)" stroke="#BBC3CE" strokeOpacity=".48" strokeWidth="2"/>
      <circle cx="258" cy="183" r="13" fill="#202630" stroke="#B7C0CB" strokeOpacity=".55" strokeWidth="3"/><circle cx="294" cy="229" r="12" fill="#202630" stroke="#AAB4C1" strokeOpacity=".6" strokeWidth="3"/>
      <path d="m143 158-29 27 19 74c4 15 16 25 31 25h44c15 0 27-10 31-25l17-74-28-28-85 1Z" fill="url(#robot-shell)" stroke="#D9DEE5" strokeOpacity=".46" strokeWidth="2"/>
      <path d="m145 168 35 15 39-16 20 23-13 63c-3 12-12 19-24 19h-38c-12 0-21-7-24-19l-14-63 19-22Z" fill="#111722" fillOpacity=".76" stroke="#AEB7C3" strokeOpacity=".35"/>
      <path d="m176 187 4 50m8-50-4 50" stroke="#A9B3C0" strokeOpacity=".22" strokeWidth="2"/>
      <circle cx="183" cy="211" r="5" fill="#D5FF4F" fillOpacity=".95"/><circle cx="183" cy="211" r="14" fill="#D5FF4F" fillOpacity=".28" filter="url(#robot-glow)"/>
      <path d="M158 128h48v31c0 10-8 18-18 18h-12c-10 0-18-8-18-18v-31Z" fill="url(#robot-shell)" stroke="#C7CED8" strokeOpacity=".45" strokeWidth="2"/>
      <path d="M124 79c0-25 21-45 47-45h31c25 0 45 20 45 45v40c0 29-24 52-53 52h-22c-27 0-48-22-48-49V79Z" fill="url(#robot-shell)" stroke="#E0E5EC" strokeOpacity=".57" strokeWidth="2"/>
      <path d="M133 85c0-18 15-33 34-33h37c19 0 34 15 34 33v26c0 21-17 38-38 38h-28c-21 0-39-17-39-38V85Z" fill="url(#robot-face)" stroke="#DCE2EB" strokeOpacity=".36" strokeWidth="2"/>
      <path d="M157 99c6-7 15-7 21-1m18 0c6-6 15-6 21 1" stroke="#A9C9FF" strokeOpacity=".45" strokeWidth="11" filter="url(#robot-glow)"/>
      <path d="M157 99c6-7 15-7 21-1m18 0c6-6 15-6 21 1" stroke="#C5E6FF" strokeWidth="3" strokeLinecap="round"/>
      <path d="M167 125c8 5 17 5 25 0" stroke="#F1F4F8" strokeOpacity=".6" strokeWidth="2" strokeLinecap="round"/>
      <path d="M121 90h-8c-9 0-16 7-16 16v15c0 9 7 16 16 16h11m132-47h8c9 0 16 7 16 16v15c0 9-7 16-16 16h-11" fill="url(#robot-shell)" stroke="#CBD2DC" strokeOpacity=".6" strokeWidth="2"/>
      <path d="m144 66 11-14m65 16-10-15" stroke="#FFF" strokeOpacity=".25" strokeWidth="3" strokeLinecap="round"/>
    </g>
  </svg>;
}

export function SplineScene({ scene, className }: SplineSceneProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  return (
    <div className={`relative ${className ?? ""}`}>
      <div className={`pointer-events-none absolute inset-0 transition-opacity duration-700 ${isLoaded ? "opacity-0" : "opacity-100"}`}><RobotFallback /></div>
      <Suspense fallback={null}>
        <Spline scene={scene} className="absolute inset-0 h-full w-full" onLoad={() => setIsLoaded(true)} />
      </Suspense>
    </div>
  );
}
