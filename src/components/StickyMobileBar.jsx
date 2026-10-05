import React from 'react';
import { ChevronRight, MessageSquare, Phone } from 'lucide-react';
import { gymConfig, getWhatsAppLink } from '../data/gymData';

export default function StickyMobileBar({ onOpenBooking }) {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#0B0B0D]/95 backdrop-blur-lg border-t border-white/10 px-3 py-2.5 pb-[max(0.625rem,env(safe-area-inset-bottom))] shadow-2xl">
      <div className="flex items-center gap-2 max-w-md mx-auto">
        {/* WhatsApp Quick Action */}
        <a
          href={getWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          className="p-2.5 rounded-xl bg-[#151519] border border-white/10 text-[#E5FF3F] flex items-center justify-center shrink-0 active:scale-95"
        >
          <MessageSquare className="w-5 h-5" />
        </a>

        {/* Call Quick Action */}
        <a
          href={`tel:${gymConfig.phoneRaw}`}
          aria-label="Call Gym"
          className="p-2.5 rounded-xl bg-[#151519] border border-white/10 text-white flex items-center justify-center shrink-0 active:scale-95"
        >
          <Phone className="w-5 h-5 text-zinc-300" />
        </a>

        {/* Primary Lead Action */}
        <button
          onClick={() => onOpenBooking()}
          className="flex-1 py-3 px-4 rounded-xl bg-[#E5FF3F] text-[#0B0B0D] font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-[0_0_20px_rgba(229,255,63,0.3)] active:scale-95"
        >
          <span>Book Free Trial</span>
          <ChevronRight className="w-4 h-4 stroke-[3]" />
        </button>
      </div>
    </div>
  );
}
