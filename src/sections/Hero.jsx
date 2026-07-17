import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 text-center relative">
      <motion.div
        initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 1 }}
        className="max-w-4xl"
      >
        <p className="text-neon-cyan font-semibold uppercase tracking-[0.4em] text-xs mb-8">Full Stack Developer</p>
        <h1 className="font-display font-extrabold text-6xl sm:text-8xl leading-[0.95] tracking-tight text-white">
          NAVANEETH<span className="text-neon-cyan">.</span>KV
        </h1>
        <p className="mt-8 text-lg sm:text-2xl text-white/70 max-w-2xl mx-auto">
          I build production MERN apps — job portals, AI tools, and 3D experiences.
          <span className="text-white font-medium">200+ repositories</span>, 4+ years, remote-ready from Muscat.
        </p>
        <div className="mt-12 flex gap-8 justify-center text-center">
          <div><div className="text-4xl font-black text-neon-cyan">200+</div><div className="text-[10px] uppercase tracking-widest text-white/50">Repos</div></div>
          <div><div className="text-4xl font-black">4+</div><div className="text-[10px] uppercase tracking-widest text-white/50">Years</div></div>
          <div><div className="text-4xl font-black">MERN</div><div className="text-[10px] uppercase tracking-widest text-white/50">Stack</div></div>
        </div>
        <a href="#projects" className="inline-block mt-14 px-8 py-4 bg-neon-cyan text-black font-bold rounded-none hover:bg-white transition-colors">
          Enter the galaxy ↓
        </a>
      </motion.div>
    </section>
  )
}
