import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

// 3D-ish loading screen: particle explosion + logo reveal (5-10s)
export default function Loader({ onDone }) {
  const [pct, setPct] = useState(0)
  const [done, setDone] = useState(false)
  const canvas = useRef(null)

  useEffect(() => {
    // progress 0->100 over ~6s
    const t = setInterval(() => {
      setPct(p => { const n = Math.min(100, p + Math.random() * 4 + 1); return n })
    }, 120)
    return () => clearInterval(t)
  }, [])

  useEffect(() => {
    if (pct >= 100 && !done) {
      setDone(true)
      const t = setTimeout(() => onDone && onDone(), 900)
      return () => clearTimeout(t)
    }
  }, [pct, done, onDone])

  // canvas particle explosion
  useEffect(() => {
    const cv = canvas.current; if (!cv) return
    const ctx = cv.getContext('2d'); const W = cv.width = 400, H = cv.height = 400
    const parts = Array.from({ length: 140 }, () => ({
      a: Math.random() * Math.PI * 2, s: Math.random() * 3 + 1, r: 0,
      c: ['#22d3ee', '#a855f7', '#ec4899', '#a3e635'][Math.floor(Math.random() * 4)]
    }))
    let raf, frame = 0
    const draw = () => {
      ctx.clearRect(0, 0, W, H); frame++
      parts.forEach(p => {
        p.r = Math.min(180, frame * (p.s * 0.8))
        const x = W / 2 + Math.cos(p.a) * p.r, y = H / 2 + Math.sin(p.a) * p.r
        ctx.globalAlpha = Math.max(0, 1 - p.r / 190)
        ctx.fillStyle = p.c; ctx.beginPath(); ctx.arc(x, y, 2.2, 0, 7); ctx.fill()
      })
      if (frame < 130) raf = requestAnimationFrame(draw)
    }
    draw()
    return () => cancelAnimationFrame(raf)
  }, [])

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-space-950"
      initial={{ opacity: 1 }} animate={{ opacity: done ? 0 : 1 }} transition={{ duration: 0.6 }}
    >
      <canvas ref={canvas} className="mb-8" />
      <motion.h1
        initial={{ scale: 0.6, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.3, type: 'spring', stiffness: 120 }}
        className="text-5xl font-extrabold tracking-tight text-white font-display"
      >
        NAVI<span className="text-neon-cyan">.</span>
      </motion.h1>
      <p className="mt-4 text-xs uppercase tracking-[0.4em] text-white/50">Traveling through space</p>
      <div className="mt-8 w-56 h-[3px] bg-white/10 overflow-hidden">
        <div className="h-full bg-neon-cyan transition-[width] duration-100" style={{ width: `${pct}%` }} />
      </div>
      <span className="mt-2 text-sm text-neon-cyan font-mono">{Math.floor(pct)}%</span>
    </motion.div>
  )
}
