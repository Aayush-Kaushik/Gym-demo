import React, { useState } from 'react';
import { MessageSquare, X } from 'lucide-react';
import { gymConfig, getWhatsAppLink } from '../data/gymData';

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-20 md:bottom-6 right-4 sm:right-6 z-40 flex items-end flex-col gap-2">
      {/* Tooltip prompt */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#151519] border border-[#E5FF3F]/30 text-white text-xs shadow-xl animate-bounce-subtle">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>Chat with Royal Gym Coach</span>
          <button
            onClick={() => setShowTooltip(false)}
            aria-label="Dismiss chat tooltip"
            className="text-zinc-500 hover:text-white p-0.5 ml-1"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      {/* Floating Button */}
      <a
        href={getWhatsAppLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Royal Gym on WhatsApp"
        className="w-13 h-13 p-3.5 rounded-2xl bg-[#25D366] text-white shadow-[0_4px_25px_rgba(37,211,102,0.4)] hover:shadow-[0_6px_35px_rgba(37,211,102,0.6)] hover:scale-105 active:scale-95 transition-all flex items-center justify-center group"
      >
        <MessageSquare className="w-6 h-6 fill-current group-hover:rotate-12 transition-transform" />
      </a>
    </div>
  );
}
