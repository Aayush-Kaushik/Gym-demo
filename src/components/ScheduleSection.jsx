import React, { useState } from 'react';
import { Calendar, Clock, User, Flame, Dumbbell, Activity, Filter, Info, ChevronRight } from 'lucide-react';
import { gymConfig } from '../data/gymData';

export default function ScheduleSection({ onOpenBooking }) {
  const [selectedDay, setSelectedDay] = useState('Monday');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'CrossFit', 'Strength', 'Functional', 'HIIT'];

  // Filter schedule based on selected day and category
  const filteredClasses = gymConfig.scheduleData.filter((item) => {
    const dayMatches = item.days.includes(selectedDay);
    const catMatches = selectedCategory === 'All' || item.category === selectedCategory;
    return dayMatches && catMatches;
  });

  return (
    <section id="schedule" className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="max-w-3xl mx-auto text-center mb-12">
        <span className="text-xs font-extrabold uppercase tracking-widest text-[#E5FF3F] bg-[#E5FF3F]/10 px-3 py-1 rounded-full border border-[#E5FF3F]/20">
          Timetable & Sessions
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white uppercase tracking-tight mt-4 mb-3">
          Weekly Workout Schedule
        </h2>
        <p className="text-sm sm:text-base text-zinc-400">
          Join our high-energy morning or evening slots. Floor trainers are always available for guidance throughout open hours.
        </p>

        <div className="mt-4 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-[11px] text-zinc-400">
          <Clock className="w-3.5 h-3.5 text-[#E5FF3F]" />
          <span>Demo Schedule — Please confirm current timings with gym front desk</span>
        </div>
      </div>

      {/* Day Selector Pills */}
      <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-6 no-scrollbar">
        {gymConfig.scheduleDays.map((day) => (
          <button
            key={day}
            onClick={() => setSelectedDay(day)}
            className={`px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap ${
              selectedDay === day
                ? 'bg-[#E5FF3F] text-[#0B0B0D] shadow-[0_0_15px_rgba(229,255,63,0.3)] scale-105'
                : 'bg-[#151519] text-zinc-400 hover:text-white hover:bg-white/5 border border-white/5'
            }`}
          >
            {day}
          </button>
        ))}
      </div>

      {/* Category Filter Chips */}
      <div className="flex items-center justify-start sm:justify-center gap-2 mb-10 overflow-x-auto pb-2">
        <span className="text-xs text-zinc-500 font-semibold flex items-center gap-1 mr-1">
          <Filter className="w-3 h-3" /> Filter:
        </span>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-3 py-1 rounded-lg text-xs font-medium transition-colors ${
              selectedCategory === cat
                ? 'bg-white/20 text-white font-bold'
                : 'bg-white/5 text-zinc-400 hover:text-white'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Schedule Items Grid / Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredClasses.length > 0 ? (
          filteredClasses.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#151519] border border-white/10 rounded-2xl p-5 hover:border-[#E5FF3F]/40 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-extrabold uppercase tracking-widest px-2.5 py-0.5 rounded-md bg-[#E5FF3F]/10 text-[#E5FF3F] border border-[#E5FF3F]/20">
                    {item.category}
                  </span>
                  <span className="text-[11px] font-semibold text-zinc-400">
                    {item.spots}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white mb-2 group-hover:text-[#E5FF3F] transition-colors">
                  {item.name}
                </h3>

                <div className="space-y-1.5 text-xs text-zinc-300 mb-4">
                  <div className="flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
                    <span>{item.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <User className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
                    <span>{item.trainer}</span>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-white/5 flex items-center justify-between">
                <span className="text-[11px] text-zinc-400">
                  Intensity: <strong className="text-white">{item.intensity}</strong>
                </span>
                <button
                  onClick={() => onOpenBooking(`Class Trial: ${item.name} (${selectedDay})`)}
                  className="px-3 py-1.5 rounded-lg bg-[#E5FF3F] text-[#0B0B0D] text-[11px] font-bold uppercase tracking-wider hover:bg-[#D4EE2B] transition-colors flex items-center gap-1"
                >
                  <span>Book Slot</span>
                  <ChevronRight className="w-3 h-3 stroke-[3]" />
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full py-12 text-center text-zinc-400 bg-[#151519]/50 rounded-2xl border border-white/5">
            <p className="text-sm">No specialized classes under this filter on {selectedDay}.</p>
            <p className="text-xs text-zinc-500 mt-1">Open gym floor with trainer guidance is available 6:00 AM – 10:00 PM.</p>
          </div>
        )}
      </div>

      {/* Open Floor Reminder */}
      <div className="mt-8 text-center text-xs text-zinc-400">
        💡 Prefer solo training? The general gym floor and barbell racks are open continuously without booking required.
      </div>
    </section>
  );
}
