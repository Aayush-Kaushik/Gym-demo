import React from 'react';
import { ArrowRight, Star, ShieldCheck, MapPin, Dumbbell, Flame, UserCheck } from 'lucide-react';
import { gymConfig, getWhatsAppLink } from '../data/gymData';

export default function Hero({ onOpenBooking }) {
  const scrollToPrograms = (e) => {
    e.preventDefault();
    const element = document.querySelector('#programs');
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-[92vh] flex items-center justify-center overflow-hidden pt-6 pb-16">
      {/* Background Cinematic Image with Multi-layer Gradients */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2000&auto=format&fit=crop"
          alt="Royal Gym & CrossFit interior weights area"
          className="w-full h-full object-cover object-center scale-105 filter brightness-[0.38] contrast-[1.15]"
          loading="eager"
        />
        {/* Dark theme gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0D] via-[#0B0B0D]/70 to-[#0B0B0D]/50" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0D] via-[#0B0B0D]/60 to-transparent" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#0B0B0D]/40 to-[#0B0B0D]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 lg:py-20">
        <div className="max-w-3xl">
          {/* Location & Facility Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#151519]/90 border border-white/10 text-xs font-semibold text-zinc-300 mb-6 backdrop-blur-md">
            <span className="flex h-2 w-2 rounded-full bg-[#E5FF3F] animate-pulse" />
            <MapPin className="w-3.5 h-3.5 text-[#E5FF3F]" />
            <span>Sector 12, Gurugram • Royal Gym & CrossFit</span>
          </div>

          {/* Primary High-Impact Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white uppercase leading-[1.05] mb-6">
            Train Hard.<br />
            Get Stronger.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E5FF3F] via-[#F4FF80] to-white">
              Become Unstoppable.
            </span>
          </h1>

          {/* Supporting Text */}
          <p className="text-base sm:text-xl text-zinc-300 font-normal leading-relaxed mb-8 max-w-2xl">
            {gymConfig.subheadline}
          </p>

          {/* Call to Actions */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-12">
            <button
              onClick={() => onOpenBooking()}
              className="px-8 py-4 bg-[#E5FF3F] text-[#0B0B0D] font-extrabold text-sm sm:text-base uppercase tracking-wider rounded-xl hover:bg-[#D4EE2B] hover:shadow-[0_0_30px_rgba(229,255,63,0.45)] transition-all flex items-center justify-center gap-2 active:scale-95 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E5FF3F]"
            >
              <span>Book a Free Trial</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform stroke-[2.5]" />
            </button>

            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-4 bg-[#151519]/90 hover:bg-[#1D1D23] text-white hover:text-[#E5FF3F] border border-white/20 hover:border-[#E5FF3F]/40 font-bold text-sm sm:text-base uppercase tracking-wider rounded-xl transition-all flex items-center justify-center gap-2 backdrop-blur-md active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E5FF3F]"
            >
              <Flame className="w-4 h-4 text-[#E5FF3F]" />
              <span>WhatsApp Us</span>
            </a>
          </div>

          {/* Subtle Pillars Beneath (No fabricated numerical claims) */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-6 border-t border-white/10 max-w-2xl">
            <div className="flex items-center gap-3 p-2.5 rounded-lg bg-white/[0.03]">
              <div className="p-2 rounded-lg bg-[#E5FF3F]/10 text-[#E5FF3F]">
                <Dumbbell className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs font-bold text-white uppercase tracking-wider">Strength Training</p>
                <p className="text-[11px] text-zinc-400">Barbells & Cages</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-2.5 rounded-lg bg-white/[0.03]">
              <div className="p-2 rounded-lg bg-[#E5FF3F]/10 text-[#E5FF3F]">
                <Flame className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs font-bold text-white uppercase tracking-wider">CrossFit Box</p>
                <p className="text-[11px] text-zinc-400">Turf & Daily WODs</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-2.5 rounded-lg bg-white/[0.03]">
              <div className="p-2 rounded-lg bg-[#E5FF3F]/10 text-[#E5FF3F]">
                <UserCheck className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs font-bold text-white uppercase tracking-wider">Personal Training</p>
                <p className="text-[11px] text-zinc-400">1-on-1 Transformation</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
