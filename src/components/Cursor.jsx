import { useEffect, useRef } from 'react'

export default function Cursor() {
  const dot = useRef(null)
  const trail = useRef(null)
  useEffect(() => {
    const d = dot.current, t = trail.current
    if (!d || !t) return
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    let tx = 0, ty = 0, x = 0, y = 0
    const move = (e) => {
      x = e.clientX; y = e.clientY
      d.style.transform = `translate(${x}px, ${y}px) translate(-50%,-50%)`
      const el = document.elementFromPoint(x, y)
      d.classList.toggle('hover', !!(el && el.closest('a,button,[role="button"]')))
    }
    const loop = () => {
      tx += (x - tx) * 0.18; ty += (y - ty) * 0.18
      t.style.transform = `translate(${tx}px, ${ty}px) translate(-50%,-50%)`
      requestAnimationFrame(loop)
    }
    window.addEventListener('mousemove', move)
    loop()
    return () => window.removeEventListener('mousemove', move)
  }, [])
  return (<><div id="cursor" ref={dot} /><div id="trail" ref={trail} /></>)
}
