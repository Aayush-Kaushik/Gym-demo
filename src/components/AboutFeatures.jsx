import React from 'react';
import { Dumbbell, Flame, ShieldCheck, Sparkles, Users, Target, ArrowRight } from 'lucide-react';
import { gymConfig } from '../data/gymData';

const iconMap = {
  Dumbbell: Dumbbell,
  Flame: Flame,
  ShieldCheck: ShieldCheck,
  Sparkles: Sparkles,
  Users: Users,
  Target: Target,
};

export default function AboutFeatures({ onOpenBooking }) {
  return (
    <section id="about" className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      {/* Background Subtle Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#E5FF3F]/5 rounded-full blur-3xl pointer-events-none" />

      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-xs font-extrabold uppercase tracking-widest text-[#E5FF3F] bg-[#E5FF3F]/10 px-3 py-1 rounded-full border border-[#E5FF3F]/20">
          Why Royal Gym & CrossFit
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white uppercase tracking-tight mt-4 mb-4">
          Built For Lifters.<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-400">
            Engineered For Results.
          </span>
        </h2>
        <p className="text-sm sm:text-base text-zinc-400">
          We combine serious heavy iron with modern functional movement. No crowded machine line-ups or gimmicks — just real coaching, progressive resistance, and an encouraging local lifting environment.
        </p>
      </div>

      {/* 6 Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {gymConfig.features.map((feature) => {
          const IconComponent = iconMap[feature.icon] || Dumbbell;
          return (
            <div
              key={feature.id}
              className="glass-card glass-card-hover rounded-2xl p-6 sm:p-7 relative flex flex-col justify-between group overflow-hidden"
            >
              {/* Corner accent glow on hover */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#E5FF3F]/0 group-hover:bg-[#E5FF3F]/10 rounded-bl-full transition-all duration-500 pointer-events-none" />

              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-[#0B0B0D] border border-white/10 group-hover:border-[#E5FF3F]/40 flex items-center justify-center text-[#E5FF3F] transition-colors">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-400 bg-white/5 px-2.5 py-1 rounded-lg">
                    {feature.tag}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2.5 group-hover:text-[#E5FF3F] transition-colors">
                  {feature.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  {feature.desc}
                </p>
              </div>

              <div className="pt-6 mt-4 border-t border-white/5 flex items-center justify-between text-xs font-semibold text-zinc-400 group-hover:text-white transition-colors">
                <span>Included in membership</span>
                <span className="text-[#E5FF3F] opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                  Explore <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Micro-CTA Band below features */}
      <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#151519] via-[#1D1D23] to-[#151519] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <h4 className="text-base sm:text-lg font-bold text-white">Experience the facility yourself with a zero-cost trial</h4>
          <p className="text-xs sm:text-sm text-zinc-400 mt-1">Visit Sector 12, tour the gym floor, and complete a guided workout session.</p>
        </div>
        <button
          onClick={() => onOpenBooking()}
          className="whitespace-nowrap px-6 py-3 bg-[#E5FF3F] text-[#0B0B0D] font-bold text-xs sm:text-sm uppercase tracking-wider rounded-xl hover:bg-[#D4EE2B] transition-all hover:shadow-[0_0_20px_rgba(229,255,63,0.3)] shrink-0"
        >
          Claim Free Trial
        </button>
      </div>
    </section>
  );
}
