const ORBS = [
  { t: 'React', d: 'Components, hooks, concurrent rendering.', c: '#22d3ee' },
  { t: 'Node / Express', d: 'REST APIs, auth, middleware.', c: '#a3e635' },
  { t: 'MongoDB', d: 'Schemas, aggregation, Atlas.', c: '#a855f7' },
  { t: 'Three.js / R3F', d: 'Immersive 3D on the web.', c: '#ec4899' },
  { t: 'Tailwind', d: 'Rapid, consistent UI systems.', c: '#22d3ee' },
  { t: 'GSAP', d: 'Cinematic scroll choreography.', c: '#a855f7' }
]

export default function About() {
  return (
    <section id="about" className="relative">
      <div className="h-screen flex items-center">
        <div className="px-8 max-w-xl">
          <h2 className="font-display text-5xl font-black mb-6">ABOUT<span className="text-neon-cyan">.</span></h2>
          <p className="text-white/70 text-lg leading-relaxed">
            I'm Navaneeth (Navi) — a MERN full-stack developer from Kerala, India,
            based in Muscat, Oman. I ship real products: loan platforms, AI knowledge tools,
            PDF forges, and 3D web experiences. I use AI coding tools daily to move fast.
          </p>
        </div>
      </div>
      {/* horizontal scroll orbs */}
      <div id="about" className="overflow-hidden">
        <div id="about-track" className="h-scroll px-8 py-20 items-center">
          {ORBS.map((o, i) => (
            <div key={i} className="shrink-0 w-[340px] h-[340px] rounded-full border flex flex-col items-center justify-center text-center px-8"
              style={{ borderColor: o.c, boxShadow: `0 0 40px ${o.c}55` }}>
              <div className="w-16 h-16 rounded-full mb-6" style={{ background: o.c, boxShadow: `0 0 30px ${o.c}` }} />
              <h3 className="text-2xl font-bold" style={{ color: o.c }}>{o.t}</h3>
              <p className="text-white/60 mt-3 text-sm">{o.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
