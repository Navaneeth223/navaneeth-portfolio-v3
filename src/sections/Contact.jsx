import { useState } from 'react'

const FORMSPREE = 'https://formspree.io/f/YOUR_FORMSPREE_ID' // <-- create free form at formspree.io, paste ID

export default function Contact() {
  const [status, setStatus] = useState('idle') // idle | sending | sent | error
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const submit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch(FORMSPREE, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) { setStatus('sent'); setForm({ name: '', email: '', message: '' }) }
      else setStatus('error')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center px-6 text-center relative">
      <div className="max-w-2xl w-full">
        <div className="text-6xl mb-8 animate-float">📡</div>
        <h2 className="font-display text-6xl font-black mb-6">LET'S<span className="text-neon-cyan"> BUILD</span></h2>
        <p className="text-white/60 mb-4">Open to remote full-stack roles & freelance builds.</p>
        <div className="inline-flex items-center gap-2 mb-10 px-4 py-2 rounded-full border border-neon-lime/40 bg-neon-lime/10">
          <span className="w-2.5 h-2.5 rounded-full bg-neon-lime animate-pulse" />
          <span className="text-sm text-neon-lime font-semibold tracking-wide">AVAILABLE FOR HIRE — worldwide remote</span>
        </div>

        <form onSubmit={submit} className="text-left space-y-4 max-w-md mx-auto">
          <input name="name" value={form.name} onChange={onChange} required placeholder="Your name"
            className="w-full bg-space-900/70 border border-white/10 px-4 py-3 text-white placeholder-white/30 outline-none focus:border-neon-cyan" />
          <input name="email" type="email" value={form.email} onChange={onChange} required placeholder="Your email"
            className="w-full bg-space-900/70 border border-white/10 px-4 py-3 text-white placeholder-white/30 outline-none focus:border-neon-cyan" />
          <textarea name="message" value={form.message} onChange={onChange} required rows={4} placeholder="How can I help?"
            className="w-full bg-space-900/70 border border-white/10 px-4 py-3 text-white placeholder-white/30 outline-none focus:border-neon-cyan resize-none" />
          <button type="submit" disabled={status === 'sending'}
            className="w-full px-10 py-4 bg-neon-cyan text-black font-bold text-lg hover:bg-white transition-colors disabled:opacity-60">
            {status === 'sending' ? 'Sending…' : '🚀 Send message'}
          </button>
          {status === 'sent' && <p className="text-neon-lime text-sm text-center">Thanks! I'll reply within a day. ✅</p>}
          {status === 'error' && (
            <p className="text-sm text-center">Form hiccup — email me directly: <a className="text-neon-cyan" href="mailto:navaneethkv1002@gmail.com">navaneethkv1002@gmail.com</a></p>
          )}
        </form>

        <a href="mailto:navaneethkv1002@gmail.com"
          className="inline-block mt-8 px-10 py-4 border border-neon-cyan text-neon-cyan font-bold hover:bg-neon-cyan hover:text-black transition-colors">
          📧 navaneethkv1002@gmail.com
        </a>
        <div className="mt-14 flex gap-6 justify-center text-sm">
          <a href="https://github.com/Navaneeth223" target="_blank" rel="noopener" className="text-white/50 hover:text-neon-cyan">GitHub</a>
          <a href="https://linkedin.com/in/navaneeth-kv-270386214" target="_blank" rel="noopener" className="text-white/50 hover:text-neon-cyan">LinkedIn</a>
          <a href="https://navaneeth223.github.io/navaneeth-portfolio-v3-pages/cv.pdf" target="_blank" rel="noopener" className="text-white/50 hover:text-neon-cyan">CV ↓</a>
        </div>
      </div>
    </section>
  )
}
