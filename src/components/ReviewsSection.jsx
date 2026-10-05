import React from 'react';
import { Star, CheckCircle, ExternalLink, MessageCircle, Quote } from 'lucide-react';
import { gymConfig } from '../data/gymData';

export default function ReviewsSection() {
  return (
    <section id="reviews" className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="max-w-3xl mx-auto text-center mb-16">
        <span className="text-xs font-extrabold uppercase tracking-widest text-[#E5FF3F] bg-[#E5FF3F]/10 px-3 py-1 rounded-full border border-[#E5FF3F]/20">
          Member Social Proof
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white uppercase tracking-tight mt-4 mb-3">
          Local Gurugram Lifters & Members
        </h2>
        <p className="text-sm sm:text-base text-zinc-400">
          Real feedback from fitness enthusiasts training in Sector 12. Rated {gymConfig.rating} out of 5 across {gymConfig.reviewCount} public Google reviews.
        </p>
        <div className="mt-4 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E5FF3F]/10 border border-[#E5FF3F]/20 text-[11px] font-medium text-white">
          <CheckCircle className="w-3.5 h-3.5 text-[#E5FF3F]" />
          <span>{gymConfig.reviewsNote}</span>
        </div>
      </div>

      {/* Review Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {gymConfig.reviews.map((rev) => (
          <div
            key={rev.id}
            className="bg-[#151519] border border-white/10 rounded-2xl p-6 sm:p-7 flex flex-col justify-between hover:border-[#E5FF3F]/30 transition-all shadow-card-dark relative group"
          >
            <div>
              {/* Header: Stars + Source */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-1 text-[#E5FF3F]">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#E5FF3F]" />
                  ))}
                </div>
                <span className="text-[10px] font-semibold text-zinc-400 flex items-center gap-1 bg-white/5 px-2 py-0.5 rounded">
                  <span className="text-blue-400 font-bold">G</span> {rev.source}
                </span>
              </div>

              {/* Review Text */}
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-6 italic">
                "{rev.text}"
              </p>
            </div>

            {/* Author Info */}
            <div className="pt-4 border-t border-white/5 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#1D1D23] to-[#272730] border border-[#E5FF3F]/30 flex items-center justify-center font-bold text-xs text-[#E5FF3F]">
                {rev.author.charAt(0)}
              </div>
              <div>
                <p className="text-sm font-bold text-white flex items-center gap-1">
                  {rev.author}
                  <CheckCircle className="w-3.5 h-3.5 text-[#E5FF3F]" />
                </p>
                <p className="text-[11px] text-zinc-400">{rev.badge}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Direct Google Reviews Trust Bar */}
      <div className="mt-12 text-center">
        <a
          href={gymConfig.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold text-zinc-300 hover:text-white transition-colors"
        >
          <span className="text-blue-400 font-bold">Google</span>
          <span>View Verified Listing on Google Maps</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>
    </section>
  );
}
