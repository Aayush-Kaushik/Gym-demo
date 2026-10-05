import React from 'react';
import { MapPin, Phone, MessageSquare, Clock, Navigation, CheckCircle2, ExternalLink } from 'lucide-react';
import { gymConfig, getWhatsAppLink } from '../data/gymData';

export default function LocationSection({ onOpenBooking }) {
  return (
    <section id="location" className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="max-w-3xl mx-auto text-center mb-16">
        <span className="text-xs font-extrabold uppercase tracking-widest text-[#E5FF3F] bg-[#E5FF3F]/10 px-3 py-1 rounded-full border border-[#E5FF3F]/20">
          Visit In Person
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white uppercase tracking-tight mt-4 mb-3">
          Find Us In Sector 12, Gurugram
        </h2>
        <p className="text-sm sm:text-base text-zinc-400">
          Centrally situated in Sector 12 with convenient road connectivity, ample parking space, and easy access from Old Railway Road.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Info Column (Left 5 Cols) */}
        <div className="lg:col-span-5 space-y-6">
          {/* Address Card */}
          <div className="bg-[#151519] border border-white/10 rounded-2xl p-6 sm:p-7 shadow-card-dark">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-[#0B0B0D] border border-[#E5FF3F]/40 flex items-center justify-center text-[#E5FF3F] shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#E5FF3F]">Location Address</span>
                <h3 className="text-lg font-bold text-white mt-0.5">{gymConfig.businessName}</h3>
                <p className="text-sm text-zinc-300 mt-1 leading-relaxed">
                  {gymConfig.address}
                </p>
                <p className="text-xs text-zinc-500 mt-1 flex items-center gap-1">
                  <span>Landmark:</span> {gymConfig.landmark}
                </p>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-2 gap-3 pt-4 border-t border-white/10">
              <a
                href={gymConfig.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-3 rounded-xl bg-[#E5FF3F] text-[#0B0B0D] text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 hover:bg-[#D4EE2B] transition-colors"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Get Directions</span>
              </a>

              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5 text-[#E5FF3F]" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Operating Hours Card */}
          <div className="bg-[#151519] border border-white/10 rounded-2xl p-6 shadow-card-dark">
            <div className="flex items-center gap-3 mb-4">
              <Clock className="w-5 h-5 text-[#E5FF3F]" />
              <h4 className="text-base font-bold text-white">Opening & Training Hours</h4>
            </div>

            <div className="space-y-3 text-xs divide-y divide-white/5">
              {gymConfig.hours.map((h, i) => (
                <div key={i} className={`pt-2.5 first:pt-0 flex flex-col sm:flex-row sm:items-center justify-between gap-1`}>
                  <span className="font-semibold text-zinc-300">{h.days}</span>
                  <div className="text-zinc-400 text-right sm:text-right">
                    <div>{h.morning}</div>
                    <div className="text-[11px] text-zinc-500">{h.evening}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 pt-3 border-t border-white/5 flex items-center gap-2 text-[11px] text-zinc-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Free visitor parking available on premises</span>
            </div>
          </div>
        </div>

        {/* Interactive Map Column (Right 7 Cols) */}
        <div className="lg:col-span-7 bg-[#151519] border border-white/10 rounded-2xl overflow-hidden shadow-card-dark relative h-[420px] lg:h-[460px] flex flex-col">
          <div className="absolute top-4 left-4 z-10 bg-[#0B0B0D]/90 backdrop-blur-md border border-white/10 px-4 py-2 rounded-xl flex items-center gap-2 shadow-lg">
            <span className="w-2 h-2 rounded-full bg-[#E5FF3F]" />
            <span className="text-xs font-bold text-white">Sector 12, Gurugram</span>
          </div>

          {/* Google Maps iFrame styled to fit dark theme */}
          <iframe
            title="Royal Gym Sector 12 Gurugram Location"
            src="https://maps.google.com/maps?q=Sector%2012%20Gurugram%20Haryana&t=&z=15&ie=UTF8&iwloc=&output=embed"
            className="w-full flex-1 border-0 filter grayscale invert contrast-125 opacity-85 hover:opacity-100 transition-opacity"
            loading="lazy"
            allowFullScreen
          />

          {/* Bottom Bar on Map */}
          <div className="p-4 bg-[#151519] border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
            <span className="text-zinc-400">
              Near Old Railway Road & Block A, Sector 12
            </span>
            <a
              href={gymConfig.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#E5FF3F] font-bold hover:underline flex items-center gap-1"
            >
              <span>Open in Google Maps App</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
