import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, ShieldCheck, Lock } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Solutions', href: '#solutions' },
    { name: 'Pricing', href: '#plans' },
    { name: 'Security', href: '#features' },
    { name: 'Support', href: '#support' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const id = href.substring(1);
      const element = document.getElementById(id);
      if (element) {
        const offset = 80;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      }
      setIsMobileMenuOpen(false);
    }
  };

  const logoUrl = "https://i.ibb.co/zVx4yt6p/logo.png";

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'py-4 bg-white/80 backdrop-blur-xl border-b border-slate-100 shadow-sm' : 'py-6 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center gap-3 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="relative w-12 h-12">
            <div className="absolute inset-0 bg-yellow-500/10 blur-lg rounded-full group-hover:bg-yellow-500/20 transition-all duration-500" />
            <div className="relative w-full h-full rounded-full p-[1px] bg-slate-200 group-hover:bg-yellow-500 transition-all duration-500 overflow-hidden shadow-sm">
              <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden">
                <img 
                  src={logoUrl} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  alt="Astre Logo"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-black tracking-tighter leading-none text-slate-900">
              ASTRE
            </span>
            <span className="text-[9px] font-bold tracking-[0.3em] text-slate-400 uppercase mt-1">
              ELITE LIQUIDITY
            </span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {/* Security Badge */}
          <div className="flex items-center gap-2 px-3 py-1.5 bg-emerald-50 rounded-lg border border-emerald-100 mr-4">
            <Lock className="w-3 h-3 text-emerald-500" />
            <span className="text-[9px] font-black text-emerald-600 uppercase tracking-widest">Secure Session</span>
          </div>

          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-xs font-bold text-slate-500 hover:text-slate-900 transition-colors uppercase tracking-widest"
            >
              {link.name}
            </a>
          ))}
          
          <div className="flex items-center gap-4 border-l border-slate-100 pl-8">
            <a 
              href="#plans"
              className="px-6 py-2.5 bg-slate-900 text-white rounded-lg text-[10px] font-black uppercase tracking-widest flex items-center gap-2 hover:bg-yellow-500 hover:text-black transition-all shadow-lg shadow-slate-200"
            >
              Get Flash
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden text-slate-900 p-2 hover:bg-slate-100 rounded-lg transition-colors" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-b border-slate-100 overflow-hidden shadow-2xl"
          >
            <div className="flex flex-col gap-6 p-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-2xl font-black text-slate-400 hover:text-slate-900 transition-colors uppercase tracking-tighter"
                >
                  {link.name}
                </a>
              ))}
              <div className="h-px bg-slate-100" />
              <a 
                href="#plans"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-between bg-slate-900 text-white px-6 py-4 rounded-xl text-sm font-black uppercase tracking-widest"
              >
                Access Liquidity
                <ArrowUpRight className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;