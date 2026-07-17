import { useState } from 'react'

export default function Contact() {
  const [sent, setSent] = useState(false)
  return (
    <section id="contact" className="min-h-screen flex items-center justify-center px-6 text-center relative">
      <div className="max-w-2xl">
        <div className="text-6xl mb-8 animate-float">📡</div>
        <h2 className="font-display text-6xl font-black mb-6">LET'S<span className="text-neon-cyan"> BUILD</span></h2>
        <p className="text-white/60 mb-12">Open to remote full-stack roles & freelance builds.</p>
        <a href="mailto:navaneethkv1002@gmail.com"
          className="inline-block px-10 py-5 bg-neon-cyan text-black font-bold text-lg rounded-none hover:bg-white transition-colors hover:-translate-y-1">
          🚀 navaneethkv1002@gmail.com
        </a>
        <div className="mt-14 flex gap-6 justify-center text-sm">
          <a href="https://github.com/Navaneeth223" target="_blank" rel="noopener" className="text-white/60 hover:text-neon-cyan">GitHub</a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener" className="text-white/60 hover:text-neon-cyan">LinkedIn</a>
        </div>
        <p className="mt-16 text-[10px] uppercase tracking-widest text-white/30">Transmission complete · Available for remote work</p>
      </div>
    </section>
  )
}
