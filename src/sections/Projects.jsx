const PROJECTS = [
  { n: 'Job Portal', u: 'https://jobportal-candidate.vercel.app/', t: 'Candidate job board — search, apply, track.' },
  { n: 'MindVault', u: 'https://mindvault-pearl.vercel.app/', t: 'AI second-brain: notes + retrieval.' },
  { n: 'PDFforge', u: 'https://pd-fforge.vercel.app/', t: 'Merge / split / edit PDFs fast.' },
  { n: 'OmniCut', u: 'https://omnicut-web.vercel.app/', t: 'Browser video cutter with AI trims.' },
  { n: 'APEX Athletics', u: 'https://apex-athletics-muscat.vercel.app/', t: 'Muscat gym booking + coaching.' },
  { n: 'Interior Design', u: 'https://interior-design-studio-wine.vercel.app/', t: 'Studio portfolio + quote engine.' },
  { n: 'Auto Garage', u: 'https://auto-garage-neon.vercel.app/', t: 'Garage service booking system.' },
  { n: 'Barbershop', u: 'https://barbershop-sable-nu.vercel.app/', t: 'Chair booking + queue view.' },
  { n: '3D Room', u: 'https://3d-room-zeta.vercel.app/', t: 'Browser 3D room designer.' },
  { n: 'Game Portfolio', u: 'https://game-portfolio-pi-six.vercel.app/', t: 'Game-style interactive CV.' },
  { n: 'Creative Agency', u: 'https://creative-agency-style.vercel.app/', t: 'Agency site with motion.' }
]

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-6 relative">
      <h2 className="font-display text-5xl font-black mb-4 reveal">PROJECTS<span className="text-neon-cyan">.</span></h2>
      <p className="text-white/50 mb-14 max-w-xl reveal">Eleven live products. Click to launch.</p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROJECTS.map((p, i) => (
          <a key={i} href={p.u} target="_blank" rel="noopener"
            className="group reveal block border border-white/10 bg-space-900/60 p-8 rounded-none hover:border-neon-cyan hover:-translate-y-2 transition-all duration-300"
            style={{ transformStyle: 'preserve-3d' }}>
            <div className="text-5xl mb-5 group-hover:rotate-12 transition-transform">🛰️</div>
            <h3 className="text-2xl font-bold group-hover:text-neon-cyan transition-colors">{p.n}</h3>
            <p className="text-white/60 mt-3 text-sm">{p.t}</p>
            <span className="mt-5 inline-block text-neon-cyan text-sm font-semibold">Launch →</span>
          </a>
        ))}
      </div>
    </section>
  )
}
