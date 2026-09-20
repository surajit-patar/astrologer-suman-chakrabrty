const paths: Record<string, JSX.Element> = {
  kundli: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 3v18M3 12h18M6 6l12 12M18 6L6 18" />
    </>
  ),
  marriage: (
    <>
      <circle cx="8" cy="9" r="4" />
      <circle cx="16" cy="9" r="4" />
      <path d="M4 20c0-3 2-5 4-5s4 2 4 5M12 20c0-3 2-5 4-5s4 2 4 5" />
    </>
  ),
  career: (
    <>
      <rect x="3" y="8" width="18" height="12" rx="2" />
      <path d="M8 8V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 13h18" />
    </>
  ),
  gems: (
    <>
      <path d="M6 3h12l3 6-9 12L3 9Z" />
      <path d="M3 9h18M9 3l3 6 3-6M12 9v12" />
    </>
  ),
  vastu: (
    <>
      <path d="M3 11 12 3l9 8" />
      <path d="M5 10v10h14V10" />
      <path d="M10 20v-6h4v6" />
    </>
  ),
  remedy: (
    <>
      <path d="M12 2v4M12 18v4M4.9 4.9l2.8 2.8M16.3 16.3l2.8 2.8M2 12h4M18 12h4M4.9 19.1l2.8-2.8M16.3 7.7l2.8-2.8" />
      <circle cx="12" cy="12" r="4" />
    </>
  ),
  muhurat: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.5 2" />
    </>
  ),
  child: (
    <>
      <circle cx="12" cy="7" r="3" />
      <path d="M6 21c0-4 3-7 6-7s6 3 6 7" />
      <path d="M9 4c0-1 1-2 3-2s3 1 3 2" />
    </>
  ),
};

export default function ServiceIcon({ name }: { name: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="26"
      height="26"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name] ?? paths.kundli}
    </svg>
  );
}
