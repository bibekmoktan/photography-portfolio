const SERIF_FONT = "'Playfair Display', Georgia, 'Times New Roman', serif";

/** The "P◇KR" wordmark — a serif monogram with a hexagonal aperture accent. Inherits color via currentColor. */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 250 64"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <text
        x="0"
        y="48"
        fontFamily={SERIF_FONT}
        fontSize="48"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="0.6"
      >
        P
      </text>

      <g
        transform="translate(97, 32)"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      >
        <polygon points="0,-17 14.7,-8.5 14.7,8.5 0,17 -14.7,8.5 -14.7,-8.5" fill="none" />
        <path d="M0,-17 L4,-3 M14.7,-8.5 L2,-1 M14.7,8.5 L1,4 M0,17 L-2,3 M-14.7,8.5 L-3,1 M-14.7,-8.5 L-1,-4" />
      </g>

      <text
        x="122"
        y="48"
        fontFamily={SERIF_FONT}
        fontSize="48"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="0.6"
      >
        KR
      </text>
    </svg>
  );
}
