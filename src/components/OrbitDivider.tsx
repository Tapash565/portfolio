export function OrbitDivider() {
  return (
    <div className="hidden light:block my-8">
      <svg viewBox="0 0 1200 80" className="w-full" preserveAspectRatio="none">
        <defs>
          <linearGradient id="orbitGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(59,130,246,0.2)" />
            <stop offset="50%" stopColor="rgba(59,130,246,0.4)" />
            <stop offset="100%" stopColor="rgba(59,130,246,0.2)" />
          </linearGradient>
          <linearGradient id="orbitGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(251,113,133,0.15)" />
            <stop offset="50%" stopColor="rgba(251,113,133,0.35)" />
            <stop offset="100%" stopColor="rgba(251,113,133,0.15)" />
          </linearGradient>
        </defs>
        <path
          d="M0,40 C150,10 350,70 600,40 C850,10 1050,70 1200,40"
          fill="none"
          stroke="url(#orbitGradient1)"
          strokeWidth="2"
        />
        <path
          d="M0,55 C200,25 400,85 600,55 C800,25 1000,85 1200,55"
          fill="none"
          stroke="url(#orbitGradient2)"
          strokeWidth="1.5"
          opacity="0.7"
        />
      </svg>
    </div>
  )
}
