import React from 'react';
import { ArrowRight, Quote, GraduationCap } from 'lucide-react';
import { FOUNDERS } from '../data/founders';

interface FoundersSectionProps {
  onSelectStory: (slug: string) => void;
  isFullPage?: boolean;
}

export const FoundersSection: React.FC<FoundersSectionProps> = ({
  onSelectStory,
  isFullPage = false,
}) => {
  const displayedFounders = isFullPage ? FOUNDERS : FOUNDERS.slice(0, 6);

  return (
    <section className="py-14 border-b border-[#E4DFD5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <div className="flex items-center gap-2 text-xs font-black tracking-widest text-[#FF7A00] uppercase mb-1">
              <span className="w-2.5 h-2.5 bg-[#FF7A00] rounded-xs" />
              <span>Leadership Profiles</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0B1F3A] tracking-tight">
              Meet the Founders
            </h2>
            <p className="text-sm text-[#171717]/70 mt-1 max-w-xl">
              From college dropouts to seasoned 50-year-old corporate leaders, explore the philosophies and formative decisions behind India&apos;s iconic builders.
            </p>
          </div>

          {!isFullPage && (
            <div className="text-xs text-[#0B1F3A] font-bold">
              Showing 6 of {FOUNDERS.length} founders
            </div>
          )}
        </div>

        {/* Founders Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedFounders.map((founder) => (
            <div
              key={founder.id}
              className="bg-white rounded-2xl border border-[#E4DFD5] shadow-xs hover:shadow-md transition-all overflow-hidden flex flex-col justify-between group"
            >
              <div>
                {/* Real Founder Portrait */}
                <div className="relative h-64 w-full bg-[#0B1F3A] overflow-hidden">
                  <img
                    src={founder.image}
                    alt={founder.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A] via-black/20 to-transparent" />
                  
                  {/* Overlay Name & Company */}
                  <div className="absolute bottom-3 left-4 right-4 text-white">
                    <h3 className="text-xl font-black tracking-tight text-white leading-tight">
                      {founder.name}
                    </h3>
                    <div className="text-xs font-semibold text-[#FF7A00] flex items-center gap-1.5 mt-0.5">
                      <span>{founder.company}</span>
                      <span className="text-white/40">·</span>
                      <span className="text-white/80">{founder.role}</span>
                    </div>
                  </div>

                  {/* Image Credit */}
                  <div className="absolute top-2 right-2 text-[9px] text-white/60 bg-black/60 px-2 py-0.5 rounded">
                    Photo: {founder.imageCredit}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  {/* Education info */}
                  <div className="flex items-start gap-2 text-xs text-[#171717]/70">
                    <GraduationCap className="w-4 h-4 text-[#FF7A00] shrink-0 mt-0.5" />
                    <span className="font-medium">{founder.education}</span>
                  </div>

                  {/* Bio */}
                  <p className="text-xs text-[#171717]/80 leading-relaxed">
                    {founder.bio}
                  </p>

                  {/* Founder Quote */}
                  <div className="p-3.5 rounded-xl bg-[#F7F5F0] border border-[#E4DFD5] relative">
                    <Quote className="w-4 h-4 text-[#FF7A00]/40 absolute top-2 right-2" />
                    <p className="text-xs italic text-[#0B1F3A] font-medium leading-relaxed pr-3">
                      &ldquo;{founder.quote}&rdquo;
                    </p>
                  </div>

                  {/* Key Philosophy */}
                  <div className="text-[11px] text-[#171717]/70">
                    <strong className="text-[#0B1F3A] block mb-0.5">Core Philosophy:</strong>
                    {founder.keyPhilosophy}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-6 pt-0">
                <button
                  onClick={() => onSelectStory(founder.storySlug)}
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-[#0B1F3A] hover:bg-[#061324] text-white font-bold text-xs tracking-wider uppercase transition-colors cursor-pointer group/btn"
                >
                  <span>View Founder Story</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#FF7A00] group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
