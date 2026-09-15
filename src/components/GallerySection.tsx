import React, { useState } from 'react';
import { GALLERY_PHOTOS } from '../data/restaurantData';
import { GalleryPhoto } from '../types';
import { X, ZoomIn, Eye, Sparkles } from 'lucide-react';

export const GallerySection: React.FC = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryPhoto | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const categories = ['All', 'Sushi', 'Seafood', 'Ambiance'];

  const filteredPhotos =
    activeFilter === 'All'
      ? GALLERY_PHOTOS
      : GALLERY_PHOTOS.filter((p) => p.category.toLowerCase() === activeFilter.toLowerCase());

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B3B4A]/5 text-[#0B3B4A] text-xs font-bold uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#E8A849]" />
            <span>Visual Showcase</span>
          </div>
          <h2 className="font-serif-heading text-3xl sm:text-4xl md:text-5xl font-bold text-[#0B3B4A] mb-4">
            A Feast for the Senses
          </h2>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            Take a visual tour of our signature sushi boats, freshly grilled catch, and inviting dining ambiance in Somerset West.
          </p>

          {/* Category Filter Pills */}
          <div className="flex justify-center gap-2 mt-6">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  activeFilter === cat
                    ? 'bg-[#E8A849] text-[#0B3B4A] shadow-sm'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid (preserving the asymmetric high-visual impact layout) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredPhotos.map((photo, index) => {
            const isLarge = index === 0;
            return (
              <div
                key={photo.id}
                onClick={() => setSelectedPhoto(photo)}
                className={`group relative overflow-hidden rounded-2xl cursor-pointer bg-gray-900 shadow-md hover:shadow-xl transition-all duration-300 ${
                  isLarge ? 'sm:col-span-2 lg:col-span-2 sm:row-span-2 h-[350px] sm:h-[480px]' : 'h-[230px]'
                }`}
              >
                <img
                  src={photo.url}
                  alt={photo.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                {/* Hover zoom indicator */}
                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <ZoomIn className="w-4 h-4" />
                </div>

                {/* Photo Details */}
                <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                  <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-[#E8A849] mb-1">
                    {photo.category}
                  </span>
                  <h3 className="font-serif-heading text-lg sm:text-xl font-bold leading-snug">
                    {photo.title}
                  </h3>
                  <p className="text-white/80 text-xs sm:text-sm mt-1 line-clamp-2">
                    {photo.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setSelectedPhoto(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-[#061F28] rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-white/20 transition-colors"
              aria-label="Close image modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Image */}
            <div className="max-h-[70vh] overflow-hidden bg-black flex items-center justify-center">
              <img
                src={selectedPhoto.url}
                alt={selectedPhoto.title}
                className="max-h-[70vh] w-auto max-w-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Modal Caption */}
            <div className="p-6 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs uppercase font-bold tracking-wider text-[#E8A849]">
                  {selectedPhoto.category}
                </span>
                <h3 className="font-serif-heading text-xl sm:text-2xl font-bold mt-0.5">
                  {selectedPhoto.title}
                </h3>
                <p className="text-white/70 text-sm mt-1">
                  {selectedPhoto.description}
                </p>
              </div>

              <a
                href="#menu"
                onClick={() => setSelectedPhoto(null)}
                className="shrink-0 px-5 py-2.5 rounded-full bg-[#E8A849] hover:bg-[#d59536] text-[#0B3B4A] font-bold text-xs uppercase tracking-wider transition-colors"
              >
                View on Menu
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
