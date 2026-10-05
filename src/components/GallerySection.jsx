import React, { useState } from 'react';
import { Maximize2, X, ZoomIn } from 'lucide-react';
import { gymConfig } from '../data/gymData';

export default function GallerySection() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeLightbox, setActiveLightbox] = useState(null);

  const filteredImages = gymConfig.galleryImages.filter((img) => {
    return activeCategory === 'All' || img.category === activeCategory;
  });

  return (
    <section id="gallery" className="py-20 sm:py-28 bg-[#0E0E11] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#E5FF3F] bg-[#E5FF3F]/10 px-3 py-1 rounded-full border border-[#E5FF3F]/20">
            Training Floor & Vibe
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white uppercase tracking-tight mt-4 mb-3">
            Inside Royal Gym & CrossFit
          </h2>
          <p className="text-sm sm:text-base text-zinc-400">
            High-grade barbell platforms, bumper plates, CrossFit turf, and functional rigs configured for peak performance.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-10">
          {gymConfig.galleryCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                activeCategory === cat
                  ? 'bg-[#E5FF3F] text-[#0B0B0D] shadow-[0_0_15px_rgba(229,255,63,0.3)]'
                  : 'bg-[#151519] text-zinc-400 hover:text-white hover:bg-white/5 border border-white/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Responsive Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredImages.map((img, idx) => (
            <div
              key={idx}
              onClick={() => setActiveLightbox(img)}
              className="group relative h-64 sm:h-72 rounded-2xl overflow-hidden cursor-pointer bg-[#151519] border border-white/10"
            >
              <img
                src={img.url}
                alt={img.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 brightness-90 group-hover:brightness-100"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity" />

              {/* Hover overlay details */}
              <div className="absolute bottom-0 left-0 right-0 p-5 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#E5FF3F] bg-[#0B0B0D]/80 px-2 py-0.5 rounded">
                  {img.category}
                </span>
                <h3 className="text-sm sm:text-base font-bold text-white mt-1">
                  {img.title}
                </h3>
              </div>

              {/* Quick zoom icon */}
              <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <ZoomIn className="w-4 h-4 text-[#E5FF3F]" />
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeLightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fade-in"
          onClick={() => setActiveLightbox(null)}
        >
          <div
            className="max-w-4xl w-full bg-[#151519] rounded-2xl overflow-hidden border border-white/20 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveLightbox(null)}
              aria-label="Close modal"
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/70 text-white hover:text-[#E5FF3F]"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="max-h-[75vh] overflow-hidden flex items-center justify-center bg-black">
              <img
                src={activeLightbox.url}
                alt={activeLightbox.title}
                className="max-h-[75vh] w-auto object-contain"
              />
            </div>
            <div className="p-4 sm:p-5 flex items-center justify-between bg-[#151519]">
              <div>
                <span className="text-xs font-bold text-[#E5FF3F] uppercase tracking-wider">
                  {activeLightbox.category}
                </span>
                <p className="text-base font-bold text-white mt-0.5">{activeLightbox.title}</p>
              </div>
              <span className="text-xs text-zinc-400">Royal Gym & CrossFit Facility</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
