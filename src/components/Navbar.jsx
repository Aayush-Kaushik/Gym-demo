import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageSquare, Dumbbell, ChevronRight } from 'lucide-react';
import { gymConfig, getWhatsAppLink } from '../data/gymData';

export default function Navbar({ onOpenBooking }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Programs', href: '#programs' },
    { label: 'Trainers', href: '#trainers' },
    { label: 'Membership', href: '#membership' },
    { label: 'Schedule', href: '#schedule' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Location', href: '#location' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0B0B0D]/95 backdrop-blur-md border-b border-white/10 py-3 shadow-xl'
          : 'bg-[#0B0B0D]/80 backdrop-blur-sm border-b border-white/5 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#home" className="flex items-center gap-3 group focus:outline-none">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#151519] to-[#272730] border border-[#E5FF3F]/40 flex items-center justify-center text-[#E5FF3F] group-hover:border-[#E5FF3F] group-hover:shadow-[0_0_15px_rgba(229,255,63,0.3)] transition-all">
            <Dumbbell className="w-5 h-5 -rotate-45" />
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-lg sm:text-xl tracking-tight text-white flex items-center gap-1.5 leading-none">
              ROYAL <span className="text-[#E5FF3F]">GYM</span>
            </span>
            <span className="text-[10px] tracking-widest uppercase font-semibold text-zinc-400 mt-1">
              & CrossFit • Sector 12
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-xs xl:text-sm font-medium text-zinc-300 hover:text-white px-2.5 py-1.5 rounded-lg hover:bg-white/5 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-zinc-300 hover:text-[#E5FF3F] hover:bg-white/5 rounded-xl border border-white/10 transition-all flex items-center gap-1.5 text-xs font-medium"
            title="Chat on WhatsApp"
          >
            <MessageSquare className="w-4 h-4 text-[#E5FF3F]" />
            <span className="hidden xl:inline">WhatsApp</span>
          </a>

          <button
            onClick={() => onOpenBooking()}
            className="px-4 py-2 text-xs font-bold uppercase tracking-wider bg-[#E5FF3F] text-[#0B0B0D] rounded-xl hover:bg-[#D4EE2B] hover:shadow-[0_0_20px_rgba(229,255,63,0.4)] transition-all flex items-center gap-1.5 active:scale-95"
          >
            <span>Book Free Trial</span>
            <ChevronRight className="w-3.5 h-3.5 stroke-[3]" />
          </button>
        </div>

        {/* Mobile Hamburger & Quick CTA */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={() => onOpenBooking()}
            className="px-3 py-1.5 text-xs font-bold uppercase tracking-wide bg-[#E5FF3F] text-[#0B0B0D] rounded-lg hover:bg-[#D4EE2B] transition-colors"
          >
            Free Trial
          </button>
          
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="p-2 text-zinc-300 hover:text-white rounded-lg bg-white/5 border border-white/10 focus:outline-none"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0B0B0D] border-b border-white/10 px-4 pt-3 pb-6 animate-fade-in shadow-2xl">
          <div className="flex flex-col space-y-1 mb-5">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm font-medium text-zinc-300 hover:text-[#E5FF3F] py-2.5 px-3 rounded-lg hover:bg-white/5 transition-colors flex items-center justify-between border-b border-white/5 last:border-0"
              >
                <span>{link.label}</span>
                <ChevronRight className="w-4 h-4 text-zinc-500" />
              </a>
            ))}
          </div>

          <div className="space-y-2 pt-2 border-t border-white/10">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3 text-center text-sm font-bold uppercase tracking-wider bg-[#E5FF3F] text-[#0B0B0D] rounded-xl hover:bg-[#D4EE2B] transition-all flex items-center justify-center gap-2"
            >
              <span>Book Free Trial Session</span>
              <ChevronRight className="w-4 h-4 stroke-[3]" />
            </button>

            <div className="grid grid-cols-2 gap-2 pt-1">
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2.5 px-3 text-xs font-semibold bg-[#151519] border border-[#E5FF3F]/30 text-[#E5FF3F] rounded-xl flex items-center justify-center gap-2 hover:bg-white/5 transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                WhatsApp
              </a>
              <a
                href={`tel:${gymConfig.phoneRaw}`}
                className="py-2.5 px-3 text-xs font-semibold bg-[#151519] border border-white/10 text-white rounded-xl flex items-center justify-center gap-2 hover:bg-white/5 transition-colors"
              >
                <Phone className="w-4 h-4 text-zinc-400" />
                Call Gym
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
