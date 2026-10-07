import React from 'react';
import { ArrowRight, Bookmark, CheckCircle2 } from 'lucide-react';
import { StartupStory } from '../types';

interface FeaturedStoryProps {
  story: StartupStory;
  onReadStory: (slug: string) => void;
  isBookmarked: boolean;
  onToggleBookmark: (slug: string) => void;
}

export const FeaturedStory: React.FC<FeaturedStoryProps> = ({
  story,
  onReadStory,
  isBookmarked,
  onToggleBookmark,
}) => {
  return (
    <section className="py-12 border-b border-[#E4DFD5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 bg-[#FF7A00] rounded-xs" />
            <h2 className="text-xs font-black tracking-widest text-[#0B1F3A] uppercase">
              Featured Case Study
            </h2>
          </div>
          <span className="text-xs text-[#171717]/60 font-medium">
            Lead Editorial Selection
          </span>
        </div>

        {/* Featured Card */}
        <div className="bg-white rounded-2xl border border-[#E4DFD5] shadow-sm hover:shadow-md transition-shadow overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between">
              <div className="space-y-4">
                {/* Clean unboxed metadata with separators (Anti-slop compliance) */}
                <div className="flex items-center gap-2 text-xs font-semibold text-[#171717]/70">
                  <span className="text-[#FF7A00] font-bold uppercase tracking-wider">
                    {story.category}
                  </span>
                  <span aria-hidden="true" className="text-[#171717]/40">·</span>
                  <span>{story.readTime}</span>
                  <span aria-hidden="true" className="text-[#171717]/40">·</span>
                  <span className="text-[#138A4B] font-semibold flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Bootstrapped Giant
                  </span>
                </div>

                {/* Company Name */}
                <h3 className="text-sm font-extrabold uppercase tracking-widest text-[#0B1F3A]/70">
                  {story.companyName}
                </h3>

                {/* Main Headline */}
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B1F3A] tracking-tight leading-tight">
                  {story.title}
                </h2>

                {/* Description */}
                <p className="text-base sm:text-lg text-[#171717]/80 leading-relaxed font-normal">
                  {story.summary}
                </p>

                {/* Quick Excerpt Highlights */}
                <div className="p-4 rounded-xl bg-[#F7F5F0] border border-[#E4DFD5] space-y-2">
                  <div className="text-xs font-bold text-[#0B1F3A] uppercase tracking-wider">
                    Core Business Thesis:
                  </div>
                  <p className="text-xs text-[#171717]/80 leading-relaxed">
                    Zero brokerage on equity delivery + ₹20 flat fee on intraday/F&O. Replaced percentage-based commissions with radical simplicity, acquiring 10M+ clients without advertising spend.
                  </p>
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="pt-6 mt-6 border-t border-[#E4DFD5] flex items-center justify-between">
                <button
                  onClick={() => onReadStory(story.slug)}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#FF7A00] hover:bg-[#E66E00] text-white font-bold text-sm tracking-wide transition-colors cursor-pointer group shadow-xs"
                >
                  <span>Read Full Story</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => onToggleBookmark(story.slug)}
                    className="p-2.5 rounded-lg border border-[#E4DFD5] hover:border-[#0B1F3A] text-[#0B1F3A] hover:bg-[#FFF4EB] transition-colors cursor-pointer"
                    title={isBookmarked ? 'Remove from Saved' : 'Save for Later'}
                    aria-label="Bookmark this story"
                  >
                    <Bookmark
                      className={`w-4 h-4 ${isBookmarked ? 'fill-[#FF7A00] text-[#FF7A00]' : 'text-[#0B1F3A]'}`}
                    />
                  </button>
                  <span className="text-xs text-[#171717]/60 hidden sm:inline">
                    Updated {story.updatedDate}
                  </span>
                </div>
              </div>

            </div>

            {/* Right Visual Image Column */}
            <div className="lg:col-span-5 bg-[#0B1F3A] relative flex flex-col justify-between">
              <div className="relative h-64 sm:h-80 lg:h-full min-h-[300px]">
                <img
                  src={story.images.hero.url}
                  alt={story.title}
                  className="w-full h-full object-cover object-center opacity-90 hover:opacity-100 transition-opacity"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A] via-transparent to-transparent opacity-80" />
                
                {/* Image Credit and Caption Box */}
                <div className="absolute bottom-4 left-4 right-4 bg-[#0B1F3A]/85 backdrop-blur-xs p-3 rounded-lg border border-white/10 text-white">
                  <p className="text-xs font-medium leading-snug">
                    {story.images.hero.caption}
                  </p>
                  <p className="text-[10px] text-white/60 mt-1">
                    Image credit: {story.images.hero.credit}
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
