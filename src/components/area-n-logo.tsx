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
        <rect x="1" y="1" width="62" height="62" rx="14" fill="url(#mark)" />
        <rect
          x="1"
          y="1"
          width="62"
          height="62"
          rx="14"
          stroke="#7EE7C5"
          strokeOpacity="0.28"
        />
        <path
          d="M18 43.5V20.5C18 17.5 20.5 15 23.5 15H26.5C28.4 15 30.2 15.9 31.3 17.5L46 38.7V20.5C46 17.5 48.5 15 51.5 15H53"
          stroke="white"
          strokeWidth="7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M18 43.5H15.5"
          stroke="white"
          strokeWidth="7"
          strokeLinecap="round"
        />
        <circle cx="49" cy="45" r="3" fill="#6EE7F9" />
        <path
          d="M50.8 42.6L55 37.8"
          stroke="#6EE7F9"
          strokeWidth="1.6"
          strokeLinecap="round"
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
            <stop stopColor="#0E7D55" />
            <stop offset="0.45" stopColor="#075B43" />
            <stop offset="1" stopColor="#042E2C" />
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
