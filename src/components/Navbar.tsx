import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useActiveSection } from '../hooks/useActiveSection';

const navLinks = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'services', label: 'Services' },
  { id: 'experience', label: 'Experience' },
  { id: 'testimonials', label: 'Testimonials' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  // const { theme, toggleTheme, mounted } = useTheme();
  const activeSection = useActiveSection(navLinks.map((l) => l.id));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-50"
      >
        <div
          className="mx-auto mt-0"
          style={{
            background: scrolled
              ? 'rgba(10,10,15,0.85)'
              : 'transparent',
            backdropFilter: scrolled ? 'blur(24px)' : 'none',
            WebkitBackdropFilter: scrolled ? 'blur(24px)' : 'none',
            borderBottom: scrolled ? '1px solid rgba(255,255,255,0.07)' : '1px solid transparent',
            transition: 'all 0.4s cubic-bezier(0.16,1,0.3,1)',
          }}
        >
          <div className="container-custom">
            <div className="flex items-center justify-between h-16 lg:h-20">

              {/* Logo */}
              <motion.button
                onClick={() => scrollTo('hero')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 group"
              >
                <div className="w-9 h-9 rounded-xl flex items-center justify-center"
                  style={{ background: 'linear-gradient(135deg, #3B82F6 0%, #8B5CF6 100%)' }}>
                 < img src="/logome.png" alt="logome2.png" className="w-9 h-9 object-cover" />
                </div>
                <span className="hidden sm:block font-display font-semibold text-white text-sm tracking-tight">
                  <span className="text-gradient-blue"> Rashwan</span>
                </span>
              </motion.button>

              {/* Desktop nav */}
              <div className="hidden lg:flex items-center gap-1 px-3 py-2 rounded-2xl"
                style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}>
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => scrollTo(link.id)}
                    className="relative px-4 py-2 text-sm font-medium rounded-xl transition-all duration-200"
                    style={{ color: activeSection === link.id ? '#fff' : 'rgba(148,163,184,0.9)' }}
                  >
                    {activeSection === link.id && (
                      <motion.div
                        layoutId="navPill"
                        className="absolute inset-0 rounded-xl"
                        style={{ background: 'rgba(59,130,246,0.2)', border: '1px solid rgba(59,130,246,0.25)' }}
                        transition={{ type: 'spring', bounce: 0.2, duration: 0.5 }}
                      />
                    )}
                    <span className="relative z-10">{link.label}</span>
                  </button>
                ))}
              </div>

              {/* Right actions */}
              <div className="flex items-center gap-2">
                {/* {mounted && (
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={toggleTheme}
                    className="p-2.5 rounded-xl transition-all duration-200"
                    style={{
                      background: 'rgba(255,255,255,0.05)',
                      border: '1px solid rgba(255,255,255,0.09)',
                      color: 'rgba(148,163,184,0.9)',
                    }}
                    aria-label="Toggle theme"
                  >
                    <AnimatePresence mode="wait">
                      {theme === 'dark' ? (
                        <motion.div key="sun" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                          <Sun size={18} />
                        </motion.div>
                      ) : (
                        <motion.div key="moon" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                          <Moon size={18} />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.button>
                )} */}

                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => scrollTo('contact')}
                  className="hidden sm:flex btn-primary text-sm px-5 py-2.5"
                >
                  Hire Me
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setMobileOpen(!mobileOpen)}
                  className="lg:hidden p-2.5 rounded-xl transition-colors"
                  style={{
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.09)',
                    color: 'rgba(148,163,184,0.9)',
                  }}
                  aria-label="Toggle menu"
                >
                  {mobileOpen ? <X size={20} /> : <Menu size={20} />}
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div className="absolute inset-0" style={{ background: 'rgba(10,10,15,0.97)', backdropFilter: 'blur(24px)' }}
              onClick={() => setMobileOpen(false)} />
            <div className="relative pt-24 px-6">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => scrollTo(link.id)}
                  className="w-full text-left px-5 py-4 mb-1 rounded-2xl text-base font-medium transition-all duration-200"
                  style={{
                    background: activeSection === link.id ? 'rgba(59,130,246,0.15)' : 'transparent',
                    color: activeSection === link.id ? '#fff' : 'rgba(148,163,184,0.8)',
                    border: activeSection === link.id ? '1px solid rgba(59,130,246,0.25)' : '1px solid transparent',
                  }}
                >
                  {link.label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
