import React from 'react';
import { Star, ShieldCheck, MapPin, Check, Award, Clock } from 'lucide-react';
import { gymConfig } from '../data/gymData';

export default function TrustProof() {
  return (
    <section className="relative z-20 -mt-6 sm:-mt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-[#151519]/95 backdrop-blur-xl border border-white/10 rounded-2xl p-4 sm:p-6 shadow-card-dark">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          
          {/* Rating Block */}
          <div className="md:col-span-4 flex items-center gap-4 sm:border-r border-white/10 pr-4">
            <div className="w-14 h-14 rounded-2xl bg-[#0B0B0D] border border-[#E5FF3F]/30 flex flex-col items-center justify-center shrink-0 shadow-inner">
              <span className="text-xl font-extrabold text-[#E5FF3F] leading-none">{gymConfig.rating}</span>
              <span className="text-[9px] uppercase tracking-wider text-zinc-400 font-bold mt-0.5">/ 5.0</span>
            </div>
            <div>
              <div className="flex items-center gap-1 text-[#E5FF3F] mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#E5FF3F]" />
                ))}
              </div>
              <p className="text-sm font-bold text-white leading-tight">
                {gymConfig.ratingQuote}
              </p>
              <p className="text-xs text-zinc-400 mt-0.5">
                {gymConfig.reviewCount} Public Reviews • {gymConfig.city}
              </p>
            </div>
          </div>

          {/* Key Assurance Highlights */}
          <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
            <div className="flex items-center gap-2 p-2 rounded-xl bg-[#0B0B0D]/50 border border-white/5">
              <div className="p-1.5 rounded-lg bg-[#E5FF3F]/10 text-[#E5FF3F]">
                <ShieldCheck className="w-3.5 h-3.5" />
              </div>
              <div>
                <p className="font-semibold text-white">Form & Safety</p>
                <p className="text-[10px] text-zinc-400">Supervised coaching</p>
              </div>
            </div>

            <div className="flex items-center gap-2 p-2 rounded-xl bg-[#0B0B0D]/50 border border-white/5">
              <div className="p-1.5 rounded-lg bg-[#E5FF3F]/10 text-[#E5FF3F]">
                <MapPin className="w-3.5 h-3.5" />
              </div>
              <div>
                <p className="font-semibold text-white">Sector 12 Location</p>
                <p className="text-[10px] text-zinc-400">Convenient parking</p>
              </div>
            </div>

            <div className="col-span-2 sm:col-span-1 flex items-center gap-2 p-2 rounded-xl bg-[#0B0B0D]/50 border border-white/5">
              <div className="p-1.5 rounded-lg bg-[#E5FF3F]/10 text-[#E5FF3F]">
                <Clock className="w-3.5 h-3.5" />
              </div>
              <div>
                <p className="font-semibold text-white">Flexible Hours</p>
                <p className="text-[10px] text-zinc-400">6:00 AM – 10:00 PM</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
