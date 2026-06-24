import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Send, Github, Linkedin, Mail, MapPin, Phone, CheckCircle, Instagram } from 'lucide-react';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [status, setStatus] = useState<'idle' | 'success'>('idle');
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setStatus('success');
    setTimeout(() => {
      setStatus('idle');
      setForm({ name: '', email: '', message: '' });
    }, 3500);
  };

  const info = [
    { icon: Mail, label: 'Email', value: 'mohaalaa092@gmail.com', href: 'mailto:mohaalaa092@gmail.com' },
    { icon: MapPin, label: 'Location', value: 'Remote / Worldwide', href: null },
    { icon: Phone, label: 'Availability', value: 'Open to freelance & full-time', href: null },
  ];

  const socials = [
    { icon: Github, href: 'https://github.com/MohamedAlaaRashwan2', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/mohammed-rashwan-8103a6245/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:mohaalaa092@gmail.com', label: 'Email' },
    { icon: Instagram, href: 'https://www.instagram.com/mohamedd_rashwan/', label: 'Instagram' },
  ];

  return (
    <section id="contact" className="section-padding relative" style={{ background: '#0a0a0f' }}>
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(59,130,246,0.35), transparent)' }} />
      <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[600px] h-[300px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(59,130,246,0.08) 0%, transparent 70%)', filter: 'blur(60px)' }} />

      <div className="container-custom relative z-10" ref={ref}>
        <div className="text-center mb-20">
          <motion.p initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ duration: 0.5 }} className="section-label">Contact</motion.p>
          <motion.h2 initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.1 }} className="section-heading">
            Let's Build Something{' '}
            <span className="text-gradient-blue">Amazing</span>
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ delay: 0.2 }}
            className="mt-4 text-base max-w-xl mx-auto" style={{ color: 'rgba(100,116,139,0.9)' }}>
            Have a project in mind or want to collaborate? I'd love to hear from you.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-14 max-w-6xl mx-auto">

          {/* Info panel */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-2 space-y-6"
          >
            <div>
              <h3 className="font-display font-semibold text-xl text-white mb-3">Get In Touch</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'rgba(100,116,139,0.9)' }}>
                Whether you have a question, a project proposal, or just want to say hello — my inbox is always open. I typically respond within 24 hours.
              </p>
            </div>

            <div className="space-y-3">
              {info.map((item) => (
                <div key={item.label} className="flex items-center gap-4 p-4 rounded-2xl"
                  style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}>
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: 'rgba(59,130,246,0.15)', border: '1px solid rgba(59,130,246,0.25)' }}>
                    <item.icon size={18} style={{ color: '#60a5fa' }} />
                  </div>
                  <div>
                    <div className="text-xs font-medium mb-0.5" style={{ color: 'rgba(100,116,139,0.9)' }}>{item.label}</div>
                    {item.href ? (
                      <a href={item.href} className="text-sm text-white hover:text-blue-400 transition-colors">{item.value}</a>
                    ) : (
                      <span className="text-sm text-white">{item.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div>
              <p className="text-xs font-semibold tracking-wider uppercase mb-4" style={{ color: 'rgba(100,116,139,0.7)' }}>Follow Me</p>
              <div className="flex gap-3">
                {socials.map((s) => (
                  <motion.a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.12, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={s.label}
                    className="p-3 rounded-xl transition-all duration-200"
                    style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)', color: 'rgba(148,163,184,0.8)' }}
                  >
                    <s.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit}
              className="rounded-3xl p-7 lg:p-9"
              style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%)',
                border: '1px solid rgba(255,255,255,0.08)',
                backdropFilter: 'blur(24px)',
              }}>

              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-3 p-4 mb-6 rounded-2xl"
                  style={{ background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.25)', color: '#34d399' }}
                >
                  <CheckCircle size={20} />
                  <span className="text-sm font-medium">Message sent! I'll get back to you soon.</span>
                </motion.div>
              )}

              <div className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2" style={{ color: 'rgba(148,163,184,0.9)' }}>Full Name</label>
                  <input
                    id="name" type="text" required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="John Doe"
                    className="input-field"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2" style={{ color: 'rgba(148,163,184,0.9)' }}>Email Address</label>
                  <input
                    id="email" type="email" required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="john@example.com"
                    className="input-field"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2" style={{ color: 'rgba(148,163,184,0.9)' }}>Message</label>
                  <textarea
                    id="message" rows={5} required
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell me about your project..."
                    className="input-field resize-none"
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={status === 'success'}
                  className="btn-primary w-full py-4 text-base disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send size={18} />
                  Send Message
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
