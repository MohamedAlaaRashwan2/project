import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Monitor, Smartphone, Palette, Rocket, Gauge, Code2 } from 'lucide-react';

const services = [
  {
    icon: Monitor,
    title: 'Frontend Development',
    desc: 'Modern, interactive web applications with React, Next.js, and TypeScript. Clean architecture and reusable components.',
    features: ['React & Next.js', 'TypeScript', 'State Mgmt', 'Components'],
    color: '#3B82F6',
  },
  {
    icon: Smartphone,
    title: 'Responsive Web Design',
    desc: 'Fluid layouts that look and function beautifully across all devices — from mobile to ultra-wide monitors.',
    features: ['Mobile-First', 'Fluid Grids', 'Touch-Friendly', 'Cross-Browser'],
    color: '#8B5CF6',
  },
  {
    icon: Palette,
    title: 'UI/UX Implementation',
    desc: 'Translating Figma mockups into pixel-perfect, accessible interfaces with smooth interactions.',
    features: ['Figma to Code', 'Accessibility', 'Animations', 'Design Systems'],
    color: '#06B6D4',
  },
  {
    icon: Rocket,
    title: 'Landing Page Creation',
    desc: 'High-converting landing pages optimized for speed, SEO, and user engagement.',
    features: ['SEO Optimized', 'Fast Loading', 'A/B Ready', 'Analytics'],
    color: '#3B82F6',
  },
  {
    icon: Gauge,
    title: 'Performance Optimization',
    desc: 'Auditing and optimizing apps for faster load times, better Core Web Vitals, and improved UX.',
    features: ['Core Web Vitals', 'Lazy Loading', 'Code Splitting', 'Caching'],
    color: '#8B5CF6',
  },
  {
    icon: Code2,
    title: 'Code Review & Refactor',
    desc: 'Improving code quality, removing technical debt, and modernizing legacy codebases.',
    features: ['Clean Code', 'Testing', 'Documentation', 'Best Practices'],
    color: '#06B6D4',
  },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="services" className="section-padding relative" style={{ background: '#0f0f1a' }}>
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(139,92,246,0.35), rgba(59,130,246,0.35), transparent)' }} />
      <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[700px] h-[300px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(139,92,246,0.06) 0%, transparent 70%)', filter: 'blur(60px)' }} />

      <div className="container-custom relative z-10" ref={ref}>
        <div className="text-center mb-20">
          <motion.p initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ duration: 0.5 }} className="section-label">Services</motion.p>
          <motion.h2 initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.1 }} className="section-heading">
            What I Can <span className="text-gradient-blue">Do For You</span>
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ delay: 0.2 }}
            className="mt-4 text-base max-w-xl mx-auto" style={{ color: 'rgba(100,116,139,0.9)' }}>
            End-to-end frontend solutions tailored to your business needs and user expectations.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((svc, i) => (
            <motion.div
              key={svc.title}
              initial={{ opacity: 0, y: 28 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -5 }}
              className="group relative p-7 rounded-2xl overflow-hidden cursor-default"
              style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
                border: '1px solid rgba(255,255,255,0.07)',
                backdropFilter: 'blur(20px)',
                transition: 'all 0.3s cubic-bezier(0.16,1,0.3,1)',
              }}
            >
              {/* Top accent on hover */}
              <div className="absolute top-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: `linear-gradient(90deg, transparent, ${svc.color}, transparent)` }} />

              {/* Glow on hover */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{ boxShadow: `inset 0 0 0 1px ${svc.color}25` }} />

              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                style={{ background: `${svc.color}15`, border: `1px solid ${svc.color}30` }}>
                <svc.icon size={24} style={{ color: svc.color }} />
              </div>

              <h3 className="font-display font-semibold text-lg text-white mb-3">{svc.title}</h3>
              <p className="text-sm leading-relaxed mb-5" style={{ color: 'rgba(100,116,139,0.9)' }}>{svc.desc}</p>

              <div className="flex flex-wrap gap-2">
                {svc.features.map((f) => (
                  <span key={f} className="px-2.5 py-1 rounded-lg text-xs font-medium"
                    style={{ background: `${svc.color}12`, border: `1px solid ${svc.color}25`, color: svc.color }}>
                    {f}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(6,182,212,0.3), transparent)' }} />
    </section>
  );
}
