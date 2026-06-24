import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const cats = [
  {
    name: 'Frontend',
    color: '#3B82F6',
    skills: [
      { name: 'HTML5', level: 95 },
      { name: 'CSS3 / Sass', level: 90 },
      { name: 'JavaScript (ES6+)', level: 92 },
      { name: 'TypeScript', level: 85 },
      { name: 'React', level: 90 },
      { name: 'Next.js', level: 82 },
    ],
  },
  {
    name: 'Backend',
    color: '#8B5CF6',
    skills: [
      { name: 'Node.js', level: 75 },
      { name: 'Express', level: 70 },
      { name: 'PHP', level: 65 },
      { name: 'REST APIs', level: 80 },
    ],
  },
  {
    name: 'Tools & Others',
    color: '#06B6D4',
    skills: [
      { name: 'Git & GitHub', level: 88 },
      { name: 'Tailwind CSS', level: 92 },
      { name: 'Figma', level: 75 },
      { name: 'Webpack / Vite', level: 78 },
      { name: 'Jest / Testing', level: 70 },
    ],
  },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="skills" className="section-padding relative" style={{ background: '#0f0f1a' }}>
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(59,130,246,0.3), rgba(139,92,246,0.3), transparent)' }} />
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.08) 0%, transparent 70%)', filter: 'blur(60px)' }} />

      <div className="container-custom relative z-10" ref={ref}>
        <div className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ duration: 0.5 }}
            className="section-label">Skills</motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.1 }}
            className="section-heading">
            Technologies I{' '}
            <span className="text-gradient-blue">Work With</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-base max-w-xl mx-auto leading-relaxed"
            style={{ color: 'rgba(100,116,139,0.9)' }}>
            A constantly evolving toolkit focused on modern web development and best practices.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {cats.map((cat, ci) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 28 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3 + ci * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-2xl p-7 border-gradient"
              style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
                backdropFilter: 'blur(20px)',
              }}
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-7">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center"
                  style={{ background: `${cat.color}20`, border: `1px solid ${cat.color}35` }}>
                  <span className="w-2 h-2 rounded-full" style={{ background: cat.color }} />
                </div>
                <h3 className="font-display font-semibold text-white">{cat.name}</h3>
              </div>

              <div className="space-y-5">
                {cat.skills.map((skill, si) => (
                  <div key={skill.name}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium" style={{ color: 'rgba(203,213,225,0.9)' }}>{skill.name}</span>
                      <span className="text-xs font-mono font-medium" style={{ color: cat.color }}>{skill.level}%</span>
                    </div>
                    <div className="h-1.5 rounded-full overflow-hidden"
                      style={{ background: 'rgba(255,255,255,0.07)' }}>
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1.3, delay: 0.5 + ci * 0.12 + si * 0.06, ease: [0.16, 1, 0.3, 1] }}
                        className="h-full rounded-full"
                        style={{ background: `linear-gradient(90deg, ${cat.color}, ${cat.color}99)` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(6,182,212,0.3), rgba(139,92,246,0.3), transparent)' }} />
    </section>
  );
}
