import { useState } from 'react'

// Shows /tamta.jpg once it exists in /public; falls back to a stylized
// placeholder until then. `fallback` is rendered when the image is missing.
export default function Portrait({
  src = '/tamta.jpg',
  alt,
  position = 'object-center',
  fallback,
}) {
  const [ok, setOk] = useState(true)

  if (!ok) return fallback

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setOk(false)}
      className={`h-full w-full object-cover ${position}`}
    />
  )
}
