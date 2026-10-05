import React from 'react';
import { Award, ShieldAlert, CheckCircle, ChevronRight, User } from 'lucide-react';
import { gymConfig } from '../data/gymData';

export default function TrainersSection({ onOpenBooking }) {
  return (
    <section id="trainers" className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="max-w-3xl mx-auto text-center mb-16">
        <span className="text-xs font-extrabold uppercase tracking-widest text-[#E5FF3F] bg-[#E5FF3F]/10 px-3 py-1 rounded-full border border-[#E5FF3F]/20">
          Expert Supervision
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white uppercase tracking-tight mt-4 mb-3">
          Coaches Who Value Technique & Progress
        </h2>
        <p className="text-sm sm:text-base text-zinc-400">
          Our coaches emphasize biomechanics, safety, and steady progressive overload. Every new lifter is given hands-on orientation so you train with total confidence.
        </p>
      </div>

      {/* Trainers Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {gymConfig.trainers.map((trainer) => (
          <div
            key={trainer.id}
            className="bg-[#151519] border border-white/10 rounded-2xl overflow-hidden group hover:border-[#E5FF3F]/40 hover:shadow-card-dark transition-all duration-300 flex flex-col justify-between"
          >
            {/* Trainer Image */}
            <div className="relative h-72 overflow-hidden bg-[#0B0B0D]">
              <img
                src={trainer.image}
                alt={trainer.name}
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 filter grayscale group-hover:grayscale-0"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#151519] via-transparent to-black/30" />
              
              {/* Badge overlay */}
              <div className="absolute top-3 left-3">
                <span className="px-2.5 py-0.5 rounded-md bg-[#0B0B0D]/80 backdrop-blur-md text-[10px] font-bold text-[#E5FF3F] border border-[#E5FF3F]/30 uppercase tracking-wider">
                  {trainer.badge}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-5 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold text-white group-hover:text-[#E5FF3F] transition-colors">
                  {trainer.name}
                </h3>
                <p className="text-xs font-semibold text-[#E5FF3F] mb-2">
                  {trainer.role}
                </p>

                <div className="p-2.5 rounded-lg bg-[#0B0B0D]/60 border border-white/5 mb-3 text-[11px] text-zinc-300">
                  <span className="text-zinc-500 block text-[9px] uppercase font-bold tracking-wider mb-0.5">Specialty</span>
                  {trainer.specialty}
                </div>

                <p className="text-xs text-zinc-400 leading-relaxed mb-4">
                  {trainer.bio}
                </p>
              </div>

              <div className="pt-3 border-t border-white/5 flex items-center justify-between">
                <span className="text-[11px] text-zinc-500 font-medium">
                  {trainer.experience}
                </span>
                <button
                  onClick={() => onOpenBooking(`Consultation with ${trainer.name}`)}
                  className="text-xs font-bold text-[#E5FF3F] hover:underline flex items-center gap-1"
                >
                  <span>Train</span>
                  <ChevronRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
