import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart, ArrowUp, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative py-12" style={{ background: '#0a0a0f', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(59,130,246,0.4), rgba(139,92,246,0.4), transparent)' }} />

      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl flex items-center justify-center"
              style={{ background: 'linear-gradient(135deg, #3B82F6, #8B5CF6)' }}>
              <span className="font-display font-bold text-white text-xs">MA</span>
            </div>
            <span className="font-display font-semibold text-white text-sm">Mohamed Alaa</span>
            <span className="text-xs" style={{ color: 'rgba(100,116,139,0.7)' }}>— Frontend Developer</span>
          </div>

          {/* Socials */}
          <div className="flex items-center gap-2">
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
                whileHover={{ scale: 1.15, y: -2 }}
                whileTap={{ scale: 0.9 }}
                aria-label={s.label}
                className="p-2.5 rounded-xl transition-all duration-200"
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  color: 'rgba(100,116,139,0.8)',
                }}
              >
                <s.icon size={18} />
              </motion.a>
            ))}
          </div>

          {/* Back to top */}
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Scroll to top"
            className="p-2.5 rounded-xl transition-all duration-200"
            style={{
              background: 'rgba(59,130,246,0.1)',
              border: '1px solid rgba(59,130,246,0.25)',
              color: '#60a5fa',
            }}
          >
            <ArrowUp size={18} />
          </motion.button>
        </div>

        <div className="mt-8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2"
          style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <p className="text-sm flex items-center gap-1.5" style={{ color: 'rgba(100,116,139,0.7)' }}>
            Built with <Heart size={13} className="fill-red-500 text-red-500" /> by Mohamed Alaa
          </p>
          <p className="text-xs" style={{ color: 'rgba(100,116,139,0.5)' }}>
            {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
