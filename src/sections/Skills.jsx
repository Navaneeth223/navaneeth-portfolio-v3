const SKILLS = [
  'React','Node','Express','MongoDB','Tailwind','Three.js','R3F','GSAP','Framer','Vite',
  'Git','Figma','DigitalOcean','REST','Auth','WebSockets','AI Tools','Claude Code','Cursor','TypeScript'
]

export default function Skills() {
  return (
    <section id="skills" className="py-32 px-6 relative">
      <h2 className="font-display text-5xl font-black mb-4 reveal">SKILLS<span className="text-neon-cyan">.</span></h2>
      <p className="text-white/50 mb-14 max-w-xl reveal">A galaxy of capabilities. Hover a star.</p>
      <div className="flex flex-wrap gap-4 justify-center max-w-5xl mx-auto">
        {SKILLS.map((s, i) => {
          const c = ['#22d3ee', '#a855f7', '#ec4899', '#a3e635'][i % 4]
          return (
            <button key={i} title={s}
              className="reveal px-6 py-3 rounded-full border text-sm font-semibold hover:scale-110 transition-transform duration-200"
              style={{ borderColor: c, color: c, boxShadow: `0 0 18px ${c}44`, background: `${c}11` }}>
              {s}
            </button>
          )
        })}
      </div>
    </section>
  )
}
