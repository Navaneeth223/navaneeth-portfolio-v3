import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 text-center relative">
      <motion.div
        initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 1 }}
        className="max-w-4xl"
      >
        {/* Available-for-work badge — HR signal #1 */}
        <div className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full border border-neon-lime/40 bg-neon-lime/10">
          <span className="w-2.5 h-2.5 rounded-full bg-neon-lime animate-pulse" />
          <span className="text-neon-lime text-xs font-semibold uppercase tracking-[0.25em]">Available for remote work</span>
        </div>

        <p className="text-neon-cyan font-semibold uppercase tracking-[0.4em] text-xs mb-6">Full Stack Developer · MERN</p>
        <h1 className="font-display font-extrabold text-6xl sm:text-8xl leading-[0.95] tracking-tight text-white">
          NAVANEETH<span className="text-neon-cyan">.</span>KV
        </h1>

        {/* Recruiter TL;DR — one glance tells HR everything */}
        <p className="mt-8 text-lg sm:text-2xl text-white/80 max-w-2xl mx-auto leading-relaxed">
          MERN full-stack developer — <span className="text-white font-bold">4+ years</span>,
          <span className="text-white font-bold"> 200+ repositories</span>, shipped 11 live products.
          Remote-ready from Muscat, Oman.
        </p>

        <div className="mt-12 flex gap-8 justify-center text-center">
          <div><div className="text-4xl font-black text-neon-cyan">200+</div><div className="text-[10px] uppercase tracking-widest text-white/50">Repos</div></div>
          <div><div className="text-4xl font-black">4+</div><div className="text-[10px] uppercase tracking-widest text-white/50">Years</div></div>
          <div><div className="text-4xl font-black">11</div><div className="text-[10px] uppercase tracking-widest text-white/50">Live Apps</div></div>
          <div><div className="text-4xl font-black text-neon-violet">MERN</div><div className="text-[10px] uppercase tracking-widest text-white/50">Stack</div></div>
        </div>

        {/* HR action row */}
        <div className="mt-14 flex flex-wrap gap-4 justify-center">
          <a href="/cv.pdf" download
            className="px-8 py-4 bg-neon-cyan text-black font-bold rounded-none hover:bg-white transition-colors">
            ⬇ Download CV
          </a>
          <a href="mailto:navaneethkv1002@gmail.com"
            className="px-8 py-4 border border-white/30 text-white font-bold rounded-none hover:border-neon-cyan hover:text-neon-cyan transition-colors">
            ✉ navaneethkv1002@gmail.com
          </a>
          <a href="https://github.com/Navaneeth223" target="_blank" rel="noopener"
            className="px-8 py-4 border border-white/30 text-white font-bold rounded-none hover:border-neon-violet hover:text-neon-violet transition-colors">
            GitHub
          </a>
        </div>
      </motion.div>
    </section>
  )
}
