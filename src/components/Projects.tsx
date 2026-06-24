import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

type Category = 'All' | 'Frontend' | 'Full Stack' | 'UI/UX';

const projects = [
  {
    id: 1,
    title: 'E-Commerce Dashboard',
    longDesc: 'Full-featured e-commerce analytics dashboard with real-time data visualization, inventory management, and sales tracking to help store owners make data-driven decisions.',
    category: 'Full Stack' as Category,
    tech: ['React', 'TypeScript', 'Node.js', 'MongoDB', 'Tailwind'],
    image: '/ansam.png',
    color: '#3B82F6',
    link: 'https://mohamedalaarashwan2.github.io/elhanm/',
  },
  {
    id: 2,
    title: 'SaaS Landing Page',
    longDesc: 'Conversion-focused landing page with smooth scroll animations, interactive pricing toggles, and a fully responsive layout. Achieved 40% improvement in page load speed.',
    category: 'Frontend' as Category,
    tech: ['Next.js', 'Framer Motion', 'Tailwind CSS', 'Vercel'],
    image: '/coco.png',
    color: '#8B5CF6',
    link: 'https://www.cocostore.info/',
  },
  {
    id: 3,
    title: 'Task Management App',
    longDesc: 'Kanban-style task manager with drag-and-drop, real-time collaboration via WebSockets, team workspaces, task assignment, and progress tracking.',
    category: 'Full Stack' as Category,
    tech: ['React', 'Node.js', 'Socket.io', 'PostgreSQL', 'Docker'],
    image: 'bussn.png',
    color: '#06B6D4',
    link: 'https://www.businessguide1.com/',
  },
  {
    id: 4,
    title: 'Portfolio Generator',
    longDesc: 'AI-powered portfolio generator that analyzes a developer\'s GitHub profile and creates a personalized portfolio with automatic project showcase and skill visualization.',
    category: 'Frontend' as Category,
    tech: ['React', 'OpenAI API', 'Tailwind CSS', 'GitHub API'],
    image: 'utopia.jpg',
    color: '#3B82F6',
    link: 'https://www.utopiaagency.cc/',
  },
  {
    id: 5,
    title: 'Restaurant Booking',
    longDesc: 'Sophisticated restaurant booking system with table management, menu browsing, customer reviews, and an admin panel for reservations and staff schedules.',
    category: 'Full Stack' as Category,
    tech: ['Next.js', 'Prisma', 'PostgreSQL', 'Stripe', 'Tailwind'],
    image: '/ansam.jpg',
    color: '#8B5CF6',
    link: 'https://www.ansam-hotel.com/',
  },
  {
    id: 6,
    title: 'Design System',
    longDesc: 'Scalable design system with 50+ reusable components, design tokens, and documentation used by multiple product teams to ensure consistency and accelerate development.',
    category: 'UI/UX' as Category,
    tech: ['React', 'Storybook', 'TypeScript', 'Figma', 'CSS Modules'],
    image: 'https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&w=800',
    color: '#06B6D4',
    link: 'https://example.com/design-system',
  },
];

const categories: Category[] = ['All', 'Frontend', 'Full Stack', 'UI/UX'];

export default function Projects() {
  const [active, setActive] = useState<Category>('All');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const filtered = active === 'All' ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="section-padding relative" style={{ background: '#0a0a0f' }}>
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(59,130,246,0.3), transparent)' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(59,130,246,0.05) 0%, transparent 70%)', filter: 'blur(60px)' }} />

      <div className="container-custom relative z-10" ref={ref}>
        <div className="text-center mb-14">
          <motion.p initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ duration: 0.5 }} className="section-label">Portfolio</motion.p>
          <motion.h2 initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.1 }} className="section-heading">
            Featured <span className="text-gradient-blue">Projects</span>
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-base max-w-xl mx-auto" style={{ color: 'rgba(100,116,139,0.9)' }}>
            Projects that showcase my skills in design, development, and problem-solving.
          </motion.p>
        </div>

        {/* Filters */}
        <motion.div initial={{ opacity: 0, y: 16 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-2 mb-14">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className="px-5 py-2 rounded-xl text-sm font-medium transition-all duration-200"
              style={active === cat ? {
                background: 'linear-gradient(135deg, rgba(59,130,246,0.25), rgba(139,92,246,0.2))',
                border: '1px solid rgba(59,130,246,0.4)',
                color: '#fff',
                boxShadow: '0 0 16px rgba(59,130,246,0.2)',
              } : {
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
                color: 'rgba(148,163,184,0.8)',
              }}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                whileHover={{ y: -8 }}
                className="group relative rounded-2xl overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  boxShadow: '0 1px 1px rgba(0,0,0,0.5), 0 4px 24px rgba(0,0,0,0.3)',
                  backdropFilter: 'blur(20px)',
                  transition: 'all 0.35s cubic-bezier(0.16,1,0.3,1)',
                }}
              >
                {/* Hover glow border */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{ boxShadow: `inset 0 0 0 1px ${project.color}40, 0 0 30px ${project.color}20` }} />

                {/* Image */}
                <div className="relative aspect-[16/9] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(10,10,15,0.95) 0%, rgba(10,10,15,0.4) 50%, rgba(10,10,15,0.1) 100%)' }} />

                  {/* Category badge */}
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold"
                      style={{
                        background: `${project.color}20`,
                        border: `1px solid ${project.color}40`,
                        color: project.color,
                        backdropFilter: 'blur(8px)',
                      }}>
                      {project.category}
                    </span>
                  </div>

                  {/* Colored accent */}
                  <div className="absolute top-0 left-0 w-full h-1 opacity-80"
                    style={{ background: `linear-gradient(90deg, ${project.color}, transparent)` }} />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-display font-bold text-lg text-white mb-2 group-hover:text-gradient-blue transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm leading-relaxed mb-5 line-clamp-2" style={{ color: 'rgba(100,116,139,0.9)' }}>
                    {project.longDesc}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((t) => (
                      <span key={t} className="px-2.5 py-1 rounded-lg text-xs font-medium"
                        style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)', color: 'rgba(148,163,184,0.8)' }}>
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <a href={project.link} target="_blank" rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 flex-1 py-2.5 rounded-xl text-sm font-semibold text-white transition-all duration-200"
                      style={{ background: `linear-gradient(135deg, ${project.color}, ${project.color}bb)`, boxShadow: `0 0 0 0 ${project.color}00` }}
                      onMouseEnter={(e) => (e.currentTarget.style.boxShadow = `0 0 20px ${project.color}50`)}
                      onMouseLeave={(e) => (e.currentTarget.style.boxShadow = `0 0 0 0 ${project.color}00`)}
                    >
                      <ExternalLink size={15} />
                      Live Demo
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200"
                      style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', color: 'rgba(148,163,184,0.9)' }}
                    >
                      <Github size={15} />
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(139,92,246,0.3), transparent)' }} />
    </section>
  );
}
