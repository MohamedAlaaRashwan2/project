import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail, ArrowRight, Instagram } from 'lucide-react';

function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    let raf: number;

    type P = { x: number; y: number; vx: number; vy: number; r: number; opacity: number; color: string };
    let pts: P[] = [];

    const colors = ['59,130,246', '139,92,246', '6,182,212'];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const init = () => {
      pts = [];
      const n = Math.min(Math.floor(window.innerWidth / 12), 80);
      for (let i = 0; i < n; i++) {
        pts.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.25,
          vy: (Math.random() - 0.5) * 0.25,
          r: Math.random() * 1.8 + 0.5,
          opacity: Math.random() * 0.4 + 0.1,
          color: colors[Math.floor(Math.random() * colors.length)],
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      pts.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.color},${p.opacity})`;
        ctx.fill();
      });

      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const dx = pts[i].x - pts[j].x;
          const dy = pts[i].y - pts[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 130) {
            ctx.beginPath();
            ctx.moveTo(pts[i].x, pts[i].y);
            ctx.lineTo(pts[j].x, pts[j].y);
            ctx.strokeStyle = `rgba(59,130,246,${0.08 * (1 - d / 130)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      raf = requestAnimationFrame(draw);
    };

    resize();
    init();
    draw();
    window.addEventListener('resize', () => { resize(); init(); });
    return () => { cancelAnimationFrame(raf); };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.7 }} />;
}

const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: '#0a0a0f' }}>

      {/* Mesh gradient background */}
      <div className="absolute inset-0 bg-hero-mesh" />

      {/* Noise texture */}
      <div className="absolute inset-0 opacity-[0.03]  "
        style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")" }}
      />

      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.12) 0%, transparent 70%)', filter: 'blur(40px)' }} />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 70%)', filter: 'blur(40px)' }} />

      <ParticleCanvas />

      <div className="container-custom mt-20 relative z-10">
        <div className="max-w-5xl mx-auto text-center">

          {/* Availability badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={"mb-4"}
          >
            <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium"
              style={{
                background: 'rgba(16,185,129,0.1)',
                border: '1px solid rgba(16,185,129,0.25)',
                color: '#34d399',
              }}>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Available for new projects
            </span>
          </motion.div>

          {/* Name heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-black leading-[0.9] tracking-tight mb-6"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', color: '#fff' }}
          >
            Mohamed{' '}
            <br className="sm:hidden" />
            <span className="text-gradient-blue">Rashwan</span>
          </motion.h1>

          {/* Role */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="text-xl sm:text-2xl font-light mb-5"
            style={{ color: 'rgba(148,163,184,0.9)' }}
          >
            Frontend Developer
            <span style={{ color: 'rgba(59,130,246,0.6)' }}> / </span>
            <span style={{ color: 'rgba(139,92,246,0.9)' }}>Aspiring Full Stack</span>
          </motion.p>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-12"
            style={{ color: 'rgba(100,116,139,0.95)' }}
          >
            I build fast, scalable, and modern web experiences that delight users and drive results.
            Passionate about clean code, pixel-perfect design, and performance.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14"
          >
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => scrollTo('projects')}
              className="btn-primary w-full sm:w-auto text-base px-8 py-4"
            >
              View My Work
              <ArrowRight size={18} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => scrollTo('contact')}
              className="btn-ghost w-full sm:w-auto text-base px-8 py-4"
            >
              Hire Me
            </motion.button>
          </motion.div>

          {/* Socials */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex items-center justify-center gap-3 mb-16"
          >
            {[
              { icon: Github, href: 'https://github.com/MohamedAlaaRashwan2', label: 'GitHub' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/mohammed-rashwan-8103a6245/', label: 'LinkedIn' },
              { icon: Mail, href: 'mailto:mohaalaa092@gmail.com', label: 'Email' },
              { icon: Instagram, href: 'https://www.instagram.com/mohamedd_rashwan/', label: 'Instagram' },
            ].map((s) => (
              <motion.a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15, y: -3 }}
                whileTap={{ scale: 0.9 }}
                aria-label={s.label}
                className="p-3 rounded-xl transition-all duration-200"
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.09)',
                  color: 'rgba(148,163,184,0.8)',
                }}
              >
                <s.icon size={20} />
              </motion.a>
            ))}
          </motion.div>

          {/* Stats strip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.75 }}
            className="inline-flex items-center divide-x rounded-2xl overflow-hidden"
            style={{
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.08)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
            }}
          >
            {[
              { val: '3+', label: 'Years Exp.' },
              { val: '20+', label: 'Projects' },
              { val: '50+', label: 'Clients' },
            ].map((stat, i) => (
              <div key={i} className="px-7 py-4 text-center" style={{ borderRight: i < 2 ? '1px solid rgba(255,255,255,0.08)' : 'none' }}>
                <div className="font-display font-bold text-2xl text-gradient-blue leading-none mb-1">{stat.val}</div>
                <div className="text-xs font-medium" style={{ color: 'rgba(100,116,139,0.9)' }}>{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          style={{ color: 'rgba(100,116,139,0.6)' }}
        >
          <ArrowDown size={22} />
        </motion.div>
      </motion.div>
    </section>
  );
}
