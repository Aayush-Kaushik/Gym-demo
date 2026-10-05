import React from 'react';
import { Dumbbell, MapPin, Phone, MessageSquare, Mail, ShieldCheck, Heart } from 'lucide-react';
import { gymConfig, getWhatsAppLink } from '../data/gymData';

export default function Footer({ onOpenBooking }) {
  const scrollTo = (e, id) => {
    e.preventDefault();
    const el = document.querySelector(id);
    if (el) {
      const offsetTop = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#0B0B0D] border-t border-white/10 text-white pt-16 pb-28 md:pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Info (Cols 1-4) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#151519] border border-[#E5FF3F]/40 flex items-center justify-center text-[#E5FF3F]">
                <Dumbbell className="w-5 h-5 -rotate-45" />
              </div>
              <div>
                <span className="font-extrabold text-xl tracking-tight text-white block leading-none">
                  ROYAL <span className="text-[#E5FF3F]">GYM</span>
                </span>
                <span className="text-[10px] tracking-widest uppercase font-semibold text-zinc-400">
                  & CrossFit • Sector 12 Gurugram
                </span>
              </div>
            </div>

            <p className="text-xs text-zinc-400 leading-relaxed max-w-sm">
              Gurugram's dedicated destination for heavy strength training, certified functional movement, and daily high-intensity CrossFit workouts.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-9 h-9 rounded-lg bg-[#151519] border border-white/10 text-zinc-400 hover:text-[#E5FF3F] hover:border-[#E5FF3F]/30 flex items-center justify-center transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
              <a
                href={gymConfig.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Google Maps"
                className="w-9 h-9 rounded-lg bg-[#151519] border border-white/10 text-zinc-400 hover:text-[#E5FF3F] hover:border-[#E5FF3F]/30 flex items-center justify-center transition-colors"
              >
                <MapPin className="w-4 h-4" />
              </a>
              <a
                href={`tel:${gymConfig.phoneRaw}`}
                aria-label="Call Gym"
                className="w-9 h-9 rounded-lg bg-[#151519] border border-white/10 text-zinc-400 hover:text-[#E5FF3F] hover:border-[#E5FF3F]/30 flex items-center justify-center transition-colors"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links (Cols 5-7) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-[#E5FF3F]">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs text-zinc-400">
              <li>
                <a href="#about" onClick={(e) => scrollTo(e, '#about')} className="hover:text-white transition-colors">
                  Why Choose Us
                </a>
              </li>
              <li>
                <a href="#programs" onClick={(e) => scrollTo(e, '#programs')} className="hover:text-white transition-colors">
                  Training Programs
                </a>
              </li>
              <li>
                <a href="#trainers" onClick={(e) => scrollTo(e, '#trainers')} className="hover:text-white transition-colors">
                  Coaching Staff
                </a>
              </li>
              <li>
                <a href="#membership" onClick={(e) => scrollTo(e, '#membership')} className="hover:text-white transition-colors">
                  Membership Options
                </a>
              </li>
              <li>
                <a href="#schedule" onClick={(e) => scrollTo(e, '#schedule')} className="hover:text-white transition-colors">
                  Class Timetable
                </a>
              </li>
              <li>
                <a href="#gallery" onClick={(e) => scrollTo(e, '#gallery')} className="hover:text-white transition-colors">
                  Gym Facility Gallery
                </a>
              </li>
              <li>
                <a href="#location" onClick={(e) => scrollTo(e, '#location')} className="hover:text-white transition-colors">
                  Sector 12 Location & Map
                </a>
              </li>
            </ul>
          </div>

          {/* Working Hours (Cols 8-10) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-[#E5FF3F]">
              Operating Hours
            </h4>
            <div className="space-y-2 text-xs text-zinc-400">
              <div>
                <p className="text-zinc-200 font-semibold">Monday – Friday</p>
                <p>6:00 AM – 11:30 AM / 5:00 PM – 10:00 PM</p>
              </div>
              <div>
                <p className="text-zinc-200 font-semibold">Saturday</p>
                <p>6:00 AM – 11:30 AM / 5:00 PM – 9:30 PM</p>
              </div>
              <div>
                <p className="text-zinc-200 font-semibold">Sunday</p>
                <p>7:00 AM – 1:00 PM (Morning Only)</p>
              </div>
            </div>
          </div>

          {/* Direct CTA (Cols 11-12) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-[#E5FF3F]">
              Take Action
            </h4>
            <p className="text-xs text-zinc-400">
              Ready to test your limits? Book your zero-cost day pass right now.
            </p>
            <button
              onClick={() => onOpenBooking()}
              className="w-full py-2.5 px-3 bg-[#E5FF3F] text-[#0B0B0D] font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-[#D4EE2B] transition-colors"
            >
              Book Free Trial
            </button>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>© {new Date().getFullYear()} {gymConfig.businessName} • Concept Website Demo. Sector 12, Gurugram</p>
          <div className="flex items-center gap-6 text-xs text-zinc-400">
            <a href="#about" onClick={(e) => scrollTo(e, '#about')} className="hover:text-white transition-colors">
              About
            </a>
            <a href="#programs" onClick={(e) => scrollTo(e, '#programs')} className="hover:text-white transition-colors">
              Programs
            </a>
            <a href="#location" onClick={(e) => scrollTo(e, '#location')} className="hover:text-white transition-colors">
              Location
            </a>
            <a href="#home" onClick={(e) => scrollTo(e, '#home')} className="text-[#E5FF3F] hover:underline transition-colors">
              Back to Top ↑
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
