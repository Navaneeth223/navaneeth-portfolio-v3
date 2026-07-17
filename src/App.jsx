import { useEffect, useRef, useState, lazy, Suspense } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SpaceScene from './three/SpaceScene.jsx'
import Loader from './components/Loader.jsx'
import Cursor from './components/Cursor.jsx'
import Hero from './sections/Hero.jsx'
import About from './sections/About.jsx'
import Projects from './sections/Projects.jsx'
import Experience from './sections/Experience.jsx'
import Skills from './sections/Skills.jsx'
import Contact from './sections/Contact.jsx'

gsap.registerPlugin(ScrollTrigger)

export default function App() {
  const [loaded, setLoaded] = useState(false)
  const [sound, setSound] = useState(false)
  const root = useRef(null)
  const bgRef = useRef(null)

  // GSAP scroll: parallax bg + section reveals
  useEffect(() => {
    if (!loaded) return
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.reveal').forEach((el) => {
        gsap.from(el, {
          scrollTrigger: { trigger: el, start: 'top 85%' },
          y: 60, opacity: 0, duration: 1, ease: 'power3.out'
        })
      })
      // parallax space bg
      gsap.to(bgRef.current, {
        scrollTrigger: { scrub: true },
        yPercent: 25, ease: 'none'
      })
      // horizontal scroll for ABOUT
      const track = root.current.querySelector('#about-track')
      if (track) {
        gsap.to(track, {
          scrollTrigger: { trigger: '#about', start: 'top top', end: '+=120%', scrub: 1, pin: true },
          x: () => -(track.scrollWidth - window.innerWidth + 80)
        })
      }
    }, root)
    return () => ctx.revert()
  }, [loaded])

  // sound toggle (WebAudio drone) — optional, off by default
  useEffect(() => {
    if (!sound) return
    const Ctx = window.AudioContext || window.webkitAudioContext
    const ac = new Ctx()
    const osc = ac.createOscillator(); const gain = ac.createGain()
    osc.type = 'sine'; osc.frequency.value = 55; gain.gain.value = 0.04
    osc.connect(gain); gain.connect(ac.destination); osc.start()
    return () => { osc.stop(); ac.close() }
  }, [sound])

  return (
    <div ref={root} className="relative">
      <Cursor />
      <AnimatePresence>{!loaded && <Loader onDone={() => setLoaded(true)} />}</AnimatePresence>

      {/* fixed parallax space bg */}
      <div ref={bgRef} className="fixed inset-0 -z-10">
        <SpaceScene />
      </div>
      <div className="stars" />

      {/* sound toggle */}
      <button
        onClick={() => setSound(s => !s)}
        className="fixed top-5 right-5 z-50 px-4 py-2 text-xs uppercase tracking-widest border border-white/20 hover:border-neon rounded-none text-white/70 hover:text-neon transition-colors"
        aria-label="Toggle sound"
      >
        {sound ? '◼ sound on' : '◻ sound off'}
      </button>

      {loaded && (
        <main className="relative z-10">
          <Hero />
          <About />
          <Projects />
          <Experience />
          <Skills />
          <Contact />
        </main>
      )}
    </div>
  )
}
