import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Briefcase, GraduationCap, Star } from 'lucide-react';

const experiences = [
  {
    icon: Briefcase,
    title: 'Freelance Frontend Developer',
    company: 'Self-Employed',
    period: '2022 – Present',
    desc: 'Delivered 20+ projects for clients worldwide, ranging from landing pages to complex web applications. Managed full project lifecycle from requirements to deployment.',
    highlights: ['20+ Projects', 'Global Clients', '5-Star Rating'],
    color: '#3B82F6',
  },
  {
    icon: Briefcase,
    title: 'Frontend Developer Intern',
    company: 'Tech Startup',
    period: '2021 – 2022',
    desc: 'Collaborated with design and backend teams to build responsive UI components. Gained hands-on experience with React, TypeScript, and modern CI/CD workflows.',
    highlights: ['React & TS', 'Agile Workflow', 'Team Collaboration'],
    color: '#8B5CF6',
  },
  {
    icon: GraduationCap,
    title: 'Full Stack Development Course',
    company: 'Online Bootcamp',
    period: '2021',
    desc: 'Intensive program covering modern web development from frontend to backend. Built multiple full-stack projects using MERN stack and deployed to cloud platforms.',
    highlights: ['MERN Stack', 'Cloud Deploy', 'Portfolio Projects'],
    color: '#06B6D4',
  },
  {
    icon: Star,
    title: 'Started Coding Journey',
    company: 'Self-Taught',
    period: '2020',
    desc: 'Began learning web development through online resources, documentation, and building personal projects. Developed a strong foundation in HTML, CSS, and JavaScript.',
    highlights: ['HTML/CSS/JS', 'Problem Solving', 'Self-Driven'],
    color: '#3B82F6',
  },
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="experience" className="section-padding relative" style={{ background: '#0a0a0f' }}>
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(6,182,212,0.3), transparent)' }} />
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[350px] h-[500px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(59,130,246,0.06) 0%, transparent 70%)', filter: 'blur(60px)' }} />

      <div className="container-custom relative z-10" ref={ref}>
        <div className="text-center mb-20">
          <motion.p initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ duration: 0.5 }} className="section-label">Experience</motion.p>
          <motion.h2 initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.1 }} className="section-heading">
            My <span className="text-gradient-blue">Journey</span>
          </motion.h2>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Timeline line */}
          <div className="relative">
            <div className="absolute left-5 top-0 bottom-0 w-px"
              style={{ background: 'linear-gradient(180deg, rgba(59,130,246,0.5) 0%, rgba(139,92,246,0.4) 50%, transparent 100%)' }} />

            <div className="space-y-8">
              {experiences.map((exp, i) => (
                <motion.div
                  key={exp.title}
                  initial={{ opacity: 0, x: -24 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.7, delay: 0.3 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                  className="relative flex gap-8"
                >
                  {/* Timeline dot */}
                  <div className="relative flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center z-10 mt-1"
                    style={{
                      background: `linear-gradient(135deg, ${exp.color}25, ${exp.color}15)`,
                      border: `1px solid ${exp.color}45`,
                      boxShadow: `0 0 20px ${exp.color}25`,
                    }}>
                    <exp.icon size={18} style={{ color: exp.color }} />
                  </div>

                  {/* Card */}
                  <div className="flex-1 rounded-2xl p-6 group"
                    style={{
                      background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
                      border: '1px solid rgba(255,255,255,0.07)',
                      backdropFilter: 'blur(20px)',
                      transition: 'border-color 0.3s',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.borderColor = `${exp.color}35`)}
                    onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)')}
                  >
                    <div className="flex items-start justify-between flex-wrap gap-2 mb-1">
                      <h3 className="font-display font-semibold text-white">{exp.title}</h3>
                      <span className="text-xs font-mono font-medium px-3 py-1 rounded-full"
                        style={{ background: `${exp.color}15`, color: exp.color, border: `1px solid ${exp.color}30` }}>
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-sm mb-3" style={{ color: exp.color + 'cc' }}>{exp.company}</p>
                    <p className="text-sm leading-relaxed mb-4" style={{ color: 'rgba(100,116,139,0.9)' }}>{exp.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.highlights.map((h) => (
                        <span key={h} className="px-3 py-1 rounded-lg text-xs font-medium"
                          style={{ background: `${exp.color}12`, border: `1px solid ${exp.color}25`, color: exp.color }}>
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(139,92,246,0.3), transparent)' }} />
    </section>
  );
}
