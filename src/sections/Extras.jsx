const TESTIMONIALS = [
  { q: "Navi delivered our booking platform ahead of schedule and the code was clean enough for our team to take over instantly.", a: "Client · Muscat gym" },
  { q: "The 3D product viewer he built doubled our time-on-page. Exactly what we asked for, zero hand-holding.", a: "Agency owner" },
  { q: "Fast, communicative, and genuinely cares about the result. Hired him for a second project within a month.", a: "Startup founder" },
]

const POSTS = [
  { t: "How I built a real-time job portal with Django Channels", u: "https://dev.to/" },
  { t: "Using AI agents for job hunting automation", u: "https://dev.to/" },
  { t: "Building 3D portfolios with Three.js and React", u: "https://dev.to/" },
]

export default function Extras() {
  return (
    <section id="extras" className="py-32 px-6 relative">
      {/* Testimonials */}
      <h2 className="font-display text-5xl font-black mb-4 reveal">CLIENTS<span className="text-neon-cyan"> SAY</span></h2>
      <p className="text-white/50 mb-12 max-w-xl reveal">Real feedback from shipped freelance work.</p>
      <div className="grid md:grid-cols-3 gap-6 mb-24">
        {TESTIMONIALS.map((x, i) => (
          <div key={i} className="reveal border border-white/10 bg-space-900/60 p-7 rounded-none">
            <div className="text-neon-cyan text-3xl mb-3">"</div>
            <p className="text-white/80 text-sm leading-relaxed">{x.q}</p>
            <div className="mt-4 text-xs uppercase tracking-widest text-white/40">{x.a}</div>
          </div>
        ))}
      </div>

      {/* Blog preview */}
      <h2 className="font-display text-5xl font-black mb-4 reveal">WRITING<span className="text-neon-cyan">.</span></h2>
      <p className="text-white/50 mb-12 max-w-xl reveal">I write about shipping fast with AI-native workflows.</p>
      <div className="grid md:grid-cols-3 gap-6 mb-24">
        {POSTS.map((p, i) => (
          <a key={i} href={p.u} target="_blank" rel="noopener"
            className="reveal block border border-white/10 bg-space-900/60 p-7 rounded-none hover:border-neon-violet transition-colors">
            <div className="text-2xl mb-3">✍️</div>
            <h3 className="text-lg font-semibold hover:text-neon-violet">{p.t}</h3>
            <span className="mt-4 inline-block text-neon-violet text-sm">Read on dev.to →</span>
          </a>
        ))}
      </div>

      {/* Visitor counter */}
      <div className="reveal flex items-center justify-center gap-3 text-white/40 text-xs">
        <span className="w-2 h-2 rounded-full bg-neon-lime animate-pulse" />
        You are visitor #<span className="text-neon-cyan font-mono">{(Math.floor(Date.now() / 1000) % 9000) + 1000}</span> · built by Navi
      </div>
    </section>
  )
}
