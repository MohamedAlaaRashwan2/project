import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Code2, Lightbulb, Zap, Target } from 'lucide-react';

const strengths = [
  { icon: Code2, title: 'Problem Solving', desc: 'Breaking down complex challenges into elegant, efficient solutions.' },
  { icon: Lightbulb, title: 'UI/UX Thinking', desc: 'Designing interfaces that are intuitive, accessible, and delightful.' },
  { icon: Zap, title: 'Performance', desc: 'Optimizing for speed, scalability, and smooth user experiences.' },
  { icon: Target, title: 'Attention to Detail', desc: 'Pixel-perfect implementations with clean, maintainable code.' },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.7, delay, ease: 'easeOut' as const },
});

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="about" className="section-padding relative" style={{ background: '#0a0a0f' }}>
      {/* Section divider top */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(59,130,246,0.3), rgba(139,92,246,0.3), transparent)' }} />

      {/* Ambient glow */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.07) 0%, transparent 70%)', filter: 'blur(60px)' }} />

      <div className="container-custom relative z-10" ref={ref}>

        {/* Header */}
        <div className="text-center mb-20">
          <motion.p {...fadeUp(0)} className="section-label">About Me</motion.p>
          <motion.h2 {...fadeUp(0.1)} className="section-heading">
            The Story Behind the{' '}
            <span className="text-gradient-blue">Code</span>
          </motion.h2>
        </div>

        {/* Bio + Card */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">

          <motion.div {...fadeUp(0.2)} className="space-y-6">
            {[
              'I am Mohamed Alaa, a passionate Frontend Developer with a strong eye for design and a deep love for crafting exceptional digital experiences. My journey started with curiosity about how websites work, and quickly evolved into an obsession with building them.',
              'Over the years, I have honed my skills in modern JavaScript frameworks, responsive design, and performance optimization. I believe great software is not just about functionality — it is about how it makes people feel.',
              'Currently expanding into backend technologies with Node.js and databases, working toward becoming a Full Stack Developer who can take ideas from concept to production.',
            ].map((text, i) => (
              <p key={i} className="text-base leading-[1.85]" style={{ color: 'rgba(148,163,184,0.85)' }}>{text}</p>
            ))}

            <div className="flex flex-wrap gap-2.5 pt-2">
              {['React', 'TypeScript', 'Next.js', 'Node.js', 'Tailwind CSS'].map((tech) => (
                <span key={tech} className="px-3.5 py-1.5 rounded-lg text-sm font-medium"
                  style={{
                    background: 'rgba(59,130,246,0.08)',
                    border: '1px solid rgba(59,130,246,0.2)',
                    color: '#93c5fd',
                  }}>
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div {...fadeUp(0.3)} className="relative">
            {/* Glow behind card */}
            <div className="absolute inset-0 rounded-3xl" style={{ background: 'linear-gradient(135deg, rgba(59,130,246,0.15), rgba(139,92,246,0.15))', filter: 'blur(40px)', transform: 'scale(0.9)' }} />

            <div className="relative rounded-3xl p-8 text-center border-gradient"
              style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%)',
                backdropFilter: 'blur(20px)',
              }}>

              {/* Avatar */}
              <div className="w-28 h-28 rounded-2xl mx-auto mb-6 flex items-center justify-center animate-float"
                style={{ background: 'linear-gradient(135deg, #3B82F6 0%, #8B5CF6 100%)', boxShadow: '0 0 40px rgba(59,130,246,0.35)' }}>
               <  img src="/me.png" alt="Avatar" className="w-24 h-24 rounded-xl object-cover" />
              </div>

              <h3 className="font-display font-bold text-xl text-white mb-1">Mohamed Rashwan</h3>
              <p className="text-sm mb-8" style={{ color: 'rgba(139,92,246,0.9)' }}>Frontend Developer</p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-3">
                {[['3+', 'Years Exp.'], ['20+', 'Projects'], ['50+', 'Clients']].map(([val, label]) => (
                  <div key={label} className="rounded-2xl py-4"
                    style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}>
                    <div className="font-display font-bold text-2xl text-gradient-blue leading-none mb-1">{val}</div>
                    <div className="text-xs" style={{ color: 'rgba(100,116,139,0.9)' }}>{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Strength cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {strengths.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6 }}
              className="group p-6 rounded-2xl cursor-default glass-card-hover"
            >
              <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 transition-all duration-300"
                style={{ background: 'rgba(59,130,246,0.12)', border: '1px solid rgba(59,130,246,0.2)' }}>
                <s.icon size={22} style={{ color: '#60a5fa' }} />
              </div>
              <h3 className="font-display font-semibold text-base text-white mb-2">{s.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'rgba(100,116,139,0.9)' }}>{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Section divider bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(139,92,246,0.3), rgba(59,130,246,0.3), transparent)' }} />
    </section>
  );
}
