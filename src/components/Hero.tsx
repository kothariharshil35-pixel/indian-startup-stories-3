import React from 'react';
import { ArrowRight, Users, Sparkles, ShieldCheck } from 'lucide-react';

interface HeroProps {
  onExploreStories: () => void;
  onMeetFounders: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreStories, onMeetFounders }) => {
  return (
    <section className="relative overflow-hidden pt-8 pb-14 border-b border-[#E4DFD5]">
      {/* Editorial Decorative Grid Accent */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#0B1F3A_1px,transparent_1px)] [background-size:16px_16px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Editorial Headline & Copy */}
          <div className="lg:col-span-7 space-y-6">
            {/* Editorial Kicker */}
            <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-[#FF7A00] uppercase">
              <span className="w-6 h-[2px] bg-[#FF7A00]" />
              <span>India\'s Premier Startup Editorial</span>
              <span className="text-[#171717]/40">·</span>
              <span className="text-[#138A4B] font-semibold flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5" /> 100% Verified Sources
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#0B1F3A] tracking-tight leading-[1.08]">
              The Stories Behind India&apos;s Boldest Startups
            </h1>

            {/* Subheading */}
            <p className="text-lg sm:text-xl text-[#171717]/80 leading-relaxed font-normal max-w-2xl">
              Discover the founders, ideas, challenges and strategies behind the companies shaping India&apos;s startup ecosystem.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={onExploreStories}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-[#0B1F3A] hover:bg-[#061324] text-white font-bold text-sm tracking-wide transition-all shadow-sm hover:shadow-md cursor-pointer group"
              >
                <span>Explore Stories</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[#FF7A00]" />
              </button>

              <button
                onClick={onMeetFounders}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-white hover:bg-[#FFF4EB] border border-[#E4DFD5] hover:border-[#FF7A00] text-[#0B1F3A] font-bold text-sm tracking-wide transition-all cursor-pointer"
              >
                <Users className="w-4 h-4 text-[#FF7A00]" />
                <span>Meet the Founders</span>
              </button>
            </div>

            {/* Credibility Micro-copy */}
            <div className="pt-4 border-t border-[#E4DFD5]/80 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-[#171717]/70">
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#138A4B]" />
                <span>Primary Regulatory Filings</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF7A00]" />
                <span>Zero Rumors or Unverified Hype</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0B1F3A]" />
                <span>Curated for Students & Founders</span>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Hero Visual Collage */}
          <div className="lg:col-span-5">
            <div className="relative">
              {/* Outer Editorial Frame */}
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#E4DFD5] bg-white p-2">
                <div className="relative h-80 sm:h-96 rounded-xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
                    alt="Indian entrepreneurs and engineers collaborating in a modern tech workspace"
                    className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A]/90 via-[#0B1F3A]/30 to-transparent" />
                  
                  {/* Floating Caption inside Image */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#FF7A00] block mb-1">
                      Startup Nation Spotlight
                    </span>
                    <p className="text-sm font-semibold text-white/95 leading-snug">
                      Bengaluru, Mumbai, Delhi NCR & Tier 2/3 innovation hubs powering India&apos;s digital transformation.
                    </p>
                    <p className="text-[10px] text-white/60 mt-1">
                      Image credit: Editorial Startup Photography Archive / Curated
                    </p>
                  </div>
                </div>

                {/* Overlaid Editorial Accent Card */}
                <div className="absolute -top-3 -right-3 bg-white border border-[#E4DFD5] shadow-lg rounded-xl p-3 max-w-[210px] hidden sm:block">
                  <div className="flex items-center gap-2 mb-1">
                    <Sparkles className="w-4 h-4 text-[#FF7A00]" />
                    <span className="text-[11px] font-bold text-[#0B1F3A]">10 In-Depth Case Studies</span>
                  </div>
                  <p className="text-[10px] text-[#171717]/70 leading-tight">
                    Business models, marketing lessons &amp; unit economics demystified.
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
