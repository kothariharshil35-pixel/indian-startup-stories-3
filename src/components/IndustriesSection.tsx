import React from 'react';
import { ArrowRight, Layers } from 'lucide-react';
import { INDUSTRIES } from '../data/industries';

interface IndustriesSectionProps {
  onSelectIndustry: (industryId: string) => void;
  selectedIndustry?: string | null;
}

export const IndustriesSection: React.FC<IndustriesSectionProps> = ({
  onSelectIndustry,
  selectedIndustry,
}) => {
  return (
    <section className="py-14 border-b border-[#E4DFD5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <div className="flex items-center gap-2 text-xs font-black tracking-widest text-[#FF7A00] uppercase mb-1">
              <Layers className="w-4 h-4 text-[#FF7A00]" />
              <span>Ecosystem Sectors</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1F3A] tracking-tight">
              Explore Industries
            </h2>
          </div>
          <p className="text-sm text-[#171717]/70 max-w-md">
            Eight foundational sectors redefining Indian commerce, logistics, financial access, and education.
          </p>
        </div>

        {/* 8 Visual Category Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {INDUSTRIES.map((ind) => {
            const isSelected = selectedIndustry === ind.id;
            return (
              <div
                key={ind.id}
                onClick={() => onSelectIndustry(ind.id)}
                className={`p-6 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between group ${
                  isSelected
                    ? 'bg-[#0B1F3A] text-white border-[#0B1F3A] shadow-md'
                    : 'bg-white hover:bg-[#FFF4EB]/40 border-[#E4DFD5] hover:border-[#FF7A00] shadow-xs hover:shadow-sm'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl p-2.5 rounded-xl bg-[#F7F5F0] border border-[#E4DFD5]/60 group-hover:scale-110 transition-transform inline-block">
                      {ind.icon}
                    </span>
                    <span className={`text-[11px] font-bold tracking-wider uppercase ${
                      isSelected ? 'text-[#FF7A00]' : 'text-[#171717]/50'
                    }`}>
                      {ind.startups.length} Startups
                    </span>
                  </div>

                  <h3 className={`text-xl font-extrabold mb-2 tracking-tight ${
                    isSelected ? 'text-white' : 'text-[#0B1F3A] group-hover:text-[#FF7A00]'
                  }`}>
                    {ind.name}
                  </h3>

                  <p className={`text-xs leading-relaxed mb-4 line-clamp-2 ${
                    isSelected ? 'text-white/80' : 'text-[#171717]/70'
                  }`}>
                    {ind.description}
                  </p>
                </div>

                <div>
                  {/* Key Startups Tags (Unboxed text with separators - Anti-slop) */}
                  <div className={`pt-3 border-t text-xs font-semibold ${
                    isSelected ? 'border-white/20 text-white/90' : 'border-[#E4DFD5] text-[#0B1F3A]'
                  }`}>
                    <div className="text-[10px] uppercase font-bold tracking-wider opacity-60 mb-1">
                      Key Companies:
                    </div>
                    <div className="flex flex-wrap items-center gap-1.5">
                      {ind.startups.slice(0, 3).map((s, idx) => (
                        <React.Fragment key={s}>
                          <span>{s}</span>
                          {idx < Math.min(ind.startups.length, 3) - 1 && (
                            <span className="opacity-40">·</span>
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>

                  <div className={`mt-4 flex items-center gap-1 text-xs font-bold ${
                    isSelected ? 'text-[#FF7A00]' : 'text-[#0B1F3A] group-hover:text-[#FF7A00]'
                  }`}>
                    <span>View Stories &amp; Data</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
