import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Ahmed Hassan',
    role: 'Founder, TechStart',
    content: 'Mohamed delivered our landing page ahead of schedule and exceeded every expectation. The attention to detail, animation quality, and performance were outstanding. Our conversion rate increased by 35% after the redesign.',
    rating: 5,
    color: '#3B82F6',
  },
  {
    id: 2,
    name: 'Sarah Mitchell',
    role: 'Product Manager, SaaSify',
    content: 'Working with Mohamed was a game-changer for our product. He took our Figma designs and transformed them into a pixel-perfect, responsive application. His communication and problem-solving skills are top-tier.',
    rating: 5,
    color: '#8B5CF6',
  },
  {
    id: 3,
    name: 'Omar Khalil',
    role: 'Senior Developer, CodeBase',
    content: 'I collaborated with Mohamed on a complex dashboard project. His code quality, component architecture, and commitment to best practices made the entire development process smooth. Highly recommend for any frontend work.',
    rating: 5,
    color: '#06B6D4',
  },
  {
    id: 4,
    name: 'Lina Farouk',
    role: 'UX Designer, Creative Studio',
    content: 'As a designer, I am picky about implementation. Mohamed consistently delivered designs that matched my vision exactly. He even suggested micro-interactions that elevated the overall experience.',
    rating: 5,
    color: '#3B82F6',
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [cur, setCur] = useState(0);

  const next = () => setCur((p) => (p + 1) % testimonials.length);
  const prev = () => setCur((p) => (p - 1 + testimonials.length) % testimonials.length);
  const t = testimonials[cur];

  return (
    <section id="testimonials" className="section-padding relative" style={{ background: '#0f0f1a' }}>
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(139,92,246,0.35), transparent)' }} />
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.07) 0%, transparent 70%)', filter: 'blur(60px)' }} />

      <div className="container-custom relative z-10" ref={ref}>
        <div className="text-center mb-20">
          <motion.p initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ duration: 0.5 }} className="section-label">Testimonials</motion.p>
          <motion.h2 initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.1 }} className="section-heading">
            What People <span className="text-gradient-blue">Say</span>
          </motion.h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.25 }}
          >
            <div className="relative rounded-3xl p-8 lg:p-12"
              style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%)',
                border: '1px solid rgba(255,255,255,0.08)',
                backdropFilter: 'blur(24px)',
              }}>
              {/* Glow */}
              <div className="absolute inset-0 rounded-3xl pointer-events-none"
                style={{ boxShadow: `0 0 60px ${t.color}12, inset 0 1px 0 rgba(255,255,255,0.07)` }} />

              {/* Quote icon */}
              <div className="absolute top-8 right-8 opacity-15">
                <Quote size={60} style={{ color: t.color }} />
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={cur}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.35 }}
                >
                  {/* Stars */}
                  <div className="flex gap-1 mb-6">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} size={18} className="fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  <p className="text-lg lg:text-xl leading-[1.8] mb-10" style={{ color: 'rgba(203,213,225,0.9)' }}>
                    "{t.content}"
                  </p>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center font-display font-bold text-white"
                      style={{ background: `linear-gradient(135deg, ${t.color}, ${t.color}88)`, boxShadow: `0 0 20px ${t.color}40` }}>
                      {t.name.split(' ').map((n) => n[0]).join('')}
                    </div>
                    <div>
                      <div className="font-display font-semibold text-white">{t.name}</div>
                      <div className="text-sm" style={{ color: 'rgba(100,116,139,0.9)' }}>{t.role}</div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Controls */}
            <div className="flex items-center justify-between mt-8">
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button key={i} onClick={() => setCur(i)}
                    className="rounded-full transition-all duration-300"
                    style={{
                      width: i === cur ? '32px' : '8px',
                      height: '8px',
                      background: i === cur ? `linear-gradient(90deg, #3B82F6, #8B5CF6)` : 'rgba(255,255,255,0.2)',
                    }} />
                ))}
              </div>

              <div className="flex gap-2">
                <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={prev}
                  className="p-3 rounded-xl transition-all duration-200"
                  style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.09)', color: 'rgba(148,163,184,0.8)' }}>
                  <ChevronLeft size={18} />
                </motion.button>
                <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={next}
                  className="p-3 rounded-xl transition-all duration-200"
                  style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.09)', color: 'rgba(148,163,184,0.8)' }}>
                  <ChevronRight size={18} />
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(59,130,246,0.3), transparent)' }} />
    </section>
  );
}
