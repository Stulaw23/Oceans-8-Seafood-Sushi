import React from 'react';
import { Star, MessageSquare, CheckCircle2 } from 'lucide-react';
import { REVIEWS, RESTAURANT_INFO } from '../data/restaurantData';

export const ReviewsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-20 bg-[#F8F9FA] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Google Rating stats */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mb-14">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B3B4A]/5 text-[#0B3B4A] text-xs font-bold uppercase tracking-widest mb-3">
              <MessageSquare className="w-3.5 h-3.5 text-[#E8A849]" />
              <span>Real Customer Feedback</span>
            </div>
            <h2 className="font-serif-heading text-3xl sm:text-4xl md:text-5xl font-bold text-[#0B3B4A] uppercase tracking-wide mb-3">
              What Customers Say
            </h2>
            <p className="text-gray-600 text-base max-w-xl">
              Hear why diners across Somerset West, Strand, and Cape Town return to Oceans 8 for fresh seafood and sushi.
            </p>
          </div>

          {/* Rating Summary Card */}
          <div className="bg-white p-4 sm:p-6 rounded-2xl border border-gray-200 shadow-sm flex flex-col sm:flex-row items-center gap-4 sm:gap-6 shrink-0 text-center sm:text-left w-full md:w-auto">
            <div className="sm:pr-6 sm:border-r border-gray-100 pb-3 sm:pb-0 border-b sm:border-b-0 w-full sm:w-auto">
              <div className="text-4xl sm:text-5xl font-extrabold text-[#0B3B4A] font-serif-heading">
                {RESTAURANT_INFO.rating}
              </div>
              <div className="flex items-center justify-center gap-0.5 text-[#E8A849] my-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#E8A849]" />
                ))}
              </div>
              <p className="text-[11px] font-semibold text-gray-500 uppercase tracking-wider">
                Google Rating
              </p>
            </div>

            <div>
              <p className="text-base sm:text-lg font-bold text-gray-900">
                {RESTAURANT_INFO.reviewCount}+ Reviews
              </p>
              <p className="text-xs text-gray-500 mt-0.5">
                Somerset West & Helderberg
              </p>
              <div className="flex flex-wrap justify-center sm:justify-start gap-1.5 mt-2.5">
                <span className="text-[10px] font-semibold bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded-md">
                  Juicy Prawns
                </span>
                <span className="text-[10px] font-semibold bg-amber-50 text-amber-700 px-2 py-0.5 rounded-md">
                  Fresh Kingklip
                </span>
                <span className="text-[10px] font-semibold bg-blue-50 text-blue-700 px-2 py-0.5 rounded-md">
                  Caviar Roses
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Reviews Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {REVIEWS.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-2xl p-6 border border-gray-100 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                {/* Rating stars */}
                <div className="flex items-center gap-1 text-[#E8A849] mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#E8A849]" />
                  ))}
                  <span className="text-xs font-semibold text-gray-400 ml-1">
                    {review.timeAgo}
                  </span>
                </div>

                {/* Dish highlight pill */}
                {review.dishHighlight && (
                  <div className="inline-block bg-[#0B3B4A]/5 text-[#0B3B4A] text-[11px] font-bold px-2.5 py-1 rounded-md mb-3">
                    Ordered: {review.dishHighlight}
                  </div>
                )}

                {/* Review body */}
                <p className="text-gray-700 text-sm leading-relaxed italic mb-4">
                  "{review.content}"
                </p>
              </div>

              {/* Author */}
              <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-[#0B3B4A] text-white flex items-center justify-center text-xs font-bold font-serif-heading">
                    {review.author.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-gray-900 leading-tight">
                      {review.author}
                    </h4>
                    <span className="text-[10px] text-gray-500">Google Reviewer</span>
                  </div>
                </div>

                <div className="flex items-center gap-1 text-emerald-600 text-[10px] font-medium">
                  <CheckCircle2 className="w-3 h-3" />
                  <span>Verified</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
