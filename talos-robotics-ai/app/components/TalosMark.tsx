export default function TalosMark({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 100 79"
      role="img"
      aria-label="Talos"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="tm-base" x1="0.95" y1="0.05" x2="0.15" y2="0.95">
          <stop offset="0" stopColor="#FBB667" />
          <stop offset="0.18" stopColor="#F0842A" />
          <stop offset="0.45" stopColor="#E2610F" />
          <stop offset="0.72" stopColor="#C8480B" />
          <stop offset="1" stopColor="#A03509" />
        </linearGradient>

        {/* burnt shadow pooling in the lower-left lobe */}
        <radialGradient id="tm-shade" cx="0.14" cy="0.66" r="0.34">
          <stop offset="0" stopColor="#2A0D04" stopOpacity="0.9" />
          <stop offset="0.5" stopColor="#642208" stopOpacity="0.45" />
          <stop offset="1" stopColor="#8A2F08" stopOpacity="0" />
        </radialGradient>

        {/* warm highlight on the upper-right shoulder */}
        <radialGradient id="tm-glow" cx="0.78" cy="0.14" r="0.44">
          <stop offset="0" stopColor="#FFE0AE" stopOpacity="0.72" />
          <stop offset="1" stopColor="#FFE0AE" stopOpacity="0" />
        </radialGradient>

        <mask
          id="tm-cut"
          maskUnits="userSpaceOnUse"
          x="-20"
          y="-20"
          width="140"
          height="119"
        >
          <rect width="100" height="79" rx="26" fill="#fff" />
          {/* notches biting in from the top and bottom edges */}
          <rect x="39.3" y="-12" width="21.4" height="31" rx="10.7" fill="#000" />
          <rect x="39.3" y="60" width="21.4" height="31" rx="10.7" fill="#000" />
          {/* the two counters */}
          <rect x="16.3" y="17" width="20.8" height="45.7" rx="10.4" fill="#000" />
          <rect x="62.9" y="17" width="20.8" height="45.7" rx="10.4" fill="#000" />
        </mask>
      </defs>

      <g mask="url(#tm-cut)">
        <rect width="100" height="79" fill="url(#tm-base)" />
        <rect width="100" height="79" fill="url(#tm-shade)" />
        <rect width="100" height="79" fill="url(#tm-glow)" />
      </g>
    </svg>
  );
}
