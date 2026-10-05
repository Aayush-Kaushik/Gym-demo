import React, { useState } from 'react';
import { ArrowRight, Clock, Activity, Check, ChevronRight, X } from 'lucide-react';
import { gymConfig } from '../data/gymData';

export default function ProgramsSection({ onOpenBooking }) {
  const [selectedProgram, setSelectedProgram] = useState(null);

  const handleProgramBooking = (programTitle) => {
    setSelectedProgram(null);
    onOpenBooking(`Program: ${programTitle}`);
  };

  return (
    <section id="programs" className="py-20 sm:py-28 bg-[#0E0E11] border-y border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#E5FF3F] bg-[#E5FF3F]/10 px-3 py-1 rounded-full border border-[#E5FF3F]/20">
              Targeted Training
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white uppercase tracking-tight mt-4">
              Programs Built for Every Goal
            </h2>
            <p className="text-sm sm:text-base text-zinc-400 mt-2">
              Whether you want to hit your first heavy deadlift, master CrossFit gymnastics, or transform your body composition sustainably.
            </p>
          </div>

          <button
            onClick={() => onOpenBooking()}
            className="self-start md:self-auto px-5 py-2.5 rounded-xl border border-white/15 hover:border-[#E5FF3F] text-xs font-bold uppercase tracking-wider text-white hover:text-[#E5FF3F] transition-all flex items-center gap-2 group"
          >
            <span>Book Assessment</span>
            <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>

        {/* 6 Program Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {gymConfig.programs.map((program) => (
            <div
              key={program.id}
              className="bg-[#151519] border border-white/10 rounded-2xl overflow-hidden flex flex-col justify-between group hover:border-[#E5FF3F]/40 hover:shadow-card-dark transition-all duration-300"
            >
              {/* Image with Tag Overlay */}
              <div className="relative h-52 sm:h-56 overflow-hidden">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 brightness-90 group-hover:brightness-100"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#151519] via-transparent to-black/30" />
                
                {/* Duration & Intensity badge */}
                <div className="absolute top-3 left-3 flex items-center gap-2">
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-[#0B0B0D]/80 backdrop-blur-md text-[11px] font-semibold text-zinc-300 border border-white/10">
                    <Clock className="w-3 h-3 text-[#E5FF3F]" />
                    {program.duration}
                  </span>
                </div>

                <div className="absolute top-3 right-3">
                  <span className="px-2 py-0.5 rounded-md bg-[#E5FF3F]/15 text-[#E5FF3F] border border-[#E5FF3F]/30 text-[10px] font-bold uppercase tracking-wide backdrop-blur-md">
                    {program.intensity} Intensity
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white mb-1.5 group-hover:text-[#E5FF3F] transition-colors">
                    {program.title}
                  </h3>
                  <p className="text-xs font-semibold text-[#E5FF3F]/90 mb-3">
                    {program.tagline}
                  </p>
                  <p className="text-xs text-zinc-400 line-clamp-3 leading-relaxed mb-4">
                    {program.description}
                  </p>

                  {/* Bullet points */}
                  <div className="space-y-1.5 mb-6">
                    {program.focus.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-[11px] text-zinc-300">
                        <Check className="w-3.5 h-3.5 text-[#E5FF3F] shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action */}
                <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedProgram(program)}
                    className="text-xs font-bold text-zinc-300 hover:text-white flex items-center gap-1.5 transition-colors"
                  >
                    <span>View Details</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#E5FF3F]" />
                  </button>
                  <button
                    onClick={() => handleProgramBooking(program.title)}
                    className="px-3 py-1.5 rounded-lg bg-[#E5FF3F]/10 hover:bg-[#E5FF3F] text-[#E5FF3F] hover:text-[#0B0B0D] text-[11px] font-bold uppercase tracking-wide transition-all"
                  >
                    Try Free
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Program Detail Modal */}
      {selectedProgram && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
          <div className="bg-[#151519] border border-white/15 rounded-2xl max-w-lg w-full overflow-hidden text-white relative shadow-2xl animate-scale-up">
            
            <div className="relative h-48 sm:h-56">
              <img
                src={selectedProgram.image}
                alt={selectedProgram.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#151519] via-transparent to-black/40" />
              <button
                onClick={() => setSelectedProgram(null)}
                aria-label="Close dialog"
                className="absolute top-4 right-4 p-1.5 rounded-full bg-black/60 text-zinc-300 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="absolute bottom-4 left-6">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#E5FF3F] bg-[#0B0B0D]/80 px-2 py-1 rounded">
                  Program Overview
                </span>
                <h3 className="text-2xl font-black uppercase tracking-tight text-white mt-1">
                  {selectedProgram.title}
                </h3>
              </div>
            </div>

            <div className="p-6 space-y-4 text-xs sm:text-sm text-zinc-300">
              <p className="leading-relaxed">{selectedProgram.description}</p>
              
              <div className="p-3 rounded-xl bg-[#0B0B0D] border border-white/5 space-y-2">
                <div>
                  <strong className="text-white block mb-0.5">Who this is for:</strong>
                  <p className="text-zinc-400 text-xs">{selectedProgram.suitableFor}</p>
                </div>
                <div className="grid grid-cols-2 gap-2 pt-2 border-t border-white/5 text-xs">
                  <div>
                    <span className="text-zinc-500 block text-[10px] uppercase font-bold">Duration</span>
                    <span className="text-white font-semibold">{selectedProgram.duration}</span>
                  </div>
                  <div>
                    <span className="text-zinc-500 block text-[10px] uppercase font-bold">Intensity</span>
                    <span className="text-[#E5FF3F] font-semibold">{selectedProgram.intensity}</span>
                  </div>
                </div>
              </div>

              <div>
                <strong className="text-white block mb-2 text-xs uppercase tracking-wider">Core Training Elements:</strong>
                <ul className="space-y-1.5">
                  {selectedProgram.focus.map((f, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs">
                      <Check className="w-3.5 h-3.5 text-[#E5FF3F]" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 flex items-center justify-end gap-3 border-t border-white/10">
                <button
                  onClick={() => setSelectedProgram(null)}
                  className="px-4 py-2 text-xs font-semibold text-zinc-400 hover:text-white"
                >
                  Close
                </button>
                <button
                  onClick={() => handleProgramBooking(selectedProgram.title)}
                  className="px-5 py-2.5 bg-[#E5FF3F] text-[#0B0B0D] font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-[#D4EE2B] transition-colors"
                >
                  Book Free Trial in this Program
                </button>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
