import { cn } from "@/lib/utils";

export function AreaNLogo({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <svg
        aria-hidden="true"
        className="h-11 w-11 shrink-0"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="1" y="1" width="62" height="62" rx="13" fill="url(#mark)" />
        <rect
          x="1"
          y="1"
          width="62"
          height="62"
          rx="13"
          stroke="white"
          strokeOpacity="0.08"
        />
        <path
          d="M17 45H23.5C26.4 45 28.8 42.6 28.8 39.7V18.2L47 44.4V27C47 21.9 51.1 17.8 56.2 17.8H58"
          stroke="white"
          strokeWidth="8.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <defs>
          <linearGradient
            id="mark"
            x1="6"
            y1="5"
            x2="58"
            y2="61"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#0D8457" />
            <stop offset="0.48" stopColor="#076C4A" />
            <stop offset="1" stopColor="#054832" />
          </linearGradient>
        </defs>
      </svg>
      <div className="leading-none">
        <span className="block text-xl font-semibold tracking-[0.02em] text-white">
          Area N
        </span>
        <span className="mt-1 block text-xs font-medium uppercase tracking-[0.18em] text-emerald-100/70">
          Domotica residencial
        </span>
      </div>
    </div>
  );
}
