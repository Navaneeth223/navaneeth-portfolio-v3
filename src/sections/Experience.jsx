const EXP = [
  { y: '2022', t: 'Freelance Full-Stack', d: 'Started shipping web apps; 200+ repos since.' },
  { y: '2023', t: 'Druv360 (Remote)', d: 'Built client platforms; logistics & transport systems.' },
  { y: '2024', t: 'AI Tools Era', d: 'Adopted Claude Code, Cursor, Gemini CLI daily.' },
  { y: '2025', t: 'Product Studio', d: 'Launched 11 Vercel products (job, AI, 3D).' },
  { y: '2026', t: 'Now', d: 'Seeking remote full-stack roles + freelance builds.' }
]

export default function Experience() {
  return (
    <section id="experience" className="py-32 px-6 relative">
      <h2 className="font-display text-5xl font-black mb-14 reveal">EXPERIENCE<span className="text-neon-cyan">.</span></h2>
      <div className="relative max-w-3xl mx-auto">
        {/* rocket travels down the timeline */}
        <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-neon-cyan to-neon-violet" />
        <div className="text-3xl absolute left-2 -top-2">🚀</div>
        <div className="space-y-12 pl-20">
          {EXP.map((e, i) => (
            <div key={i} className="reveal relative">
              <div className="absolute -left-[34px] top-1 w-4 h-4 rounded-full bg-neon-cyan shadow-[0_0_20px_#22d3ee]" />
              <div className="text-neon-cyan font-mono text-sm">{e.y}</div>
              <h3 className="text-2xl font-bold mt-1">{e.t}</h3>
              <p className="text-white/60 mt-2">{e.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
