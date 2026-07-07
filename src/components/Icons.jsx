const base = {
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

export const Icon = {
  shield: (p) => (
    <svg {...base} {...p}><path d="M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" /><path d="M9 12l2 2 4-4" /></svg>
  ),
  gavel: (p) => (
    <svg {...base} {...p}><path d="M14 4l6 6" /><path d="M9 9l6 6" /><path d="M4 20l6-6" /><path d="M13 5l2-2 4 4-2 2" /><path d="M3 21h7" /></svg>
  ),
  pills: (p) => (
    <svg {...base} {...p}><rect x="3" y="9" width="10" height="6" rx="3" transform="rotate(-45 8 12)" /><path d="M8 8l4 4" /><circle cx="16.5" cy="16.5" r="4.5" /></svg>
  ),
  briefcase: (p) => (
    <svg {...base} {...p}><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" /><path d="M3 12h18" /></svg>
  ),
  fist: (p) => (
    <svg {...base} {...p}><path d="M6 11V8a2 2 0 0 1 4 0v3" /><path d="M10 11V7a2 2 0 0 1 4 0v4" /><path d="M14 11V8a2 2 0 0 1 4 0v6a6 6 0 0 1-6 6h-1a6 6 0 0 1-5-2.7L3 15a1.6 1.6 0 0 1 2.6-1.8L7 15" /></svg>
  ),
  scale: (p) => (
    <svg {...base} {...p}><path d="M12 3v18" /><path d="M6 7h12" /><path d="M6 7l-3 6a3 3 0 0 0 6 0L6 7z" /><path d="M18 7l-3 6a3 3 0 0 0 6 0l-3-6z" /><path d="M8 21h8" /></svg>
  ),
  phone: (p) => (
    <svg {...base} {...p}><path d="M4 4h4l2 5-2 1a12 12 0 0 0 6 6l1-2 5 2v4a2 2 0 0 1-2 2A17 17 0 0 1 2 6a2 2 0 0 1 2-2z" /></svg>
  ),
  mail: (p) => (
    <svg {...base} {...p}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></svg>
  ),
  pin: (p) => (
    <svg {...base} {...p}><path d="M12 21s-6-5.3-6-10a6 6 0 1 1 12 0c0 4.7-6 10-6 10z" /><circle cx="12" cy="11" r="2.2" /></svg>
  ),
  check: (p) => (
    <svg {...base} {...p}><path d="M20 6L9 17l-5-5" /></svg>
  ),
  arrow: (p) => (
    <svg {...base} {...p}><path d="M5 12h14" /><path d="M13 6l6 6-6 6" /></svg>
  ),
  quote: (p) => (
    <svg {...base} {...p} strokeWidth="0" fill="currentColor"><path d="M7 7h4v6H8c0 2 .8 3 2.5 3.3L10 19c-3-.6-4-2.5-4-6V7zm8 0h4v6h-3c0 2 .8 3 2.5 3.3L18 19c-3-.6-4-2.5-4-6V7z" /></svg>
  ),
  menu: (p) => (
    <svg {...base} {...p}><path d="M4 7h16" /><path d="M4 12h16" /><path d="M4 17h16" /></svg>
  ),
  close: (p) => (
    <svg {...base} {...p}><path d="M6 6l12 12" /><path d="M18 6L6 18" /></svg>
  ),
  star: (p) => (
    <svg {...base} {...p} strokeWidth="0" fill="currentColor"><path d="M12 3l2.5 5.3 5.8.8-4.2 4 1 5.7L12 16.9 6.9 19.8l1-5.7L3.7 9l5.8-.8L12 3z" /></svg>
  ),
  facebook: (p) => (
    <svg {...base} {...p} strokeWidth="0" fill="currentColor"><path d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.2c-1.2 0-1.6.8-1.6 1.5V12h2.7l-.4 2.9h-2.3v7A10 10 0 0 0 22 12z" /></svg>
  ),
}
