import React, { useState } from 'react';
import { AlertTriangle, BookOpen, ExternalLink, HelpCircle } from 'lucide-react';
import { FAILURE_STORIES } from '../data/failures';

export const FailuresView: React.FC = () => {
  const [selectedFailureId, setSelectedFailureId] = useState<string>(FAILURE_STORIES[0].id);
  const activeCase = FAILURE_STORIES.find((f) => f.id === selectedFailureId) || FAILURE_STORIES[0];

  return (
    <div className="py-12 max-w-7xl mx-auto px-4 sm:px-8">
      
      {/* Header */}
      <div className="max-w-3xl mb-10">
        <div className="flex items-center gap-2 text-xs font-black tracking-widest text-[#FF7A00] uppercase mb-2">
          <AlertTriangle className="w-4 h-4 text-[#FF7A00]" />
          <span>Factual Post-Mortems &amp; Business Anatomy</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-[#0B1F3A] tracking-tight mb-4">
          Startup Lessons From Failure
        </h1>
        <p className="text-base sm:text-lg text-[#171717]/80 leading-relaxed font-normal">
          Entrepreneurship involves high-stakes experimentation. Rather than celebrating only unicorn valuation headlines, this editorial section provides respectful, source-backed post-mortems of what happens when unit economics, scaling timelines, or market timing go wrong.
        </p>
      </div>

      {/* Editorial Tone Note */}
      <div className="p-4 rounded-xl bg-[#F7F5F0] border border-[#E4DFD5] mb-8 text-xs text-[#171717]/80 flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-[#138A4B]" />
        <span>
          <strong>Editorial Tone Commitment: </strong>
          All failure analyses are conducted with factual rigor, professional respect for the founders and teams who took daring risks, and zero sensationalism.
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: List of failure cases */}
        <div className="lg:col-span-5 space-y-3">
          <div className="text-xs font-black uppercase tracking-wider text-[#0B1F3A]/70 mb-2">
            Select Case Study:
          </div>
          {FAILURE_STORIES.map((item) => {
            const isSelected = item.id === selectedFailureId;
            return (
              <div
                key={item.id}
                onClick={() => setSelectedFailureId(item.id)}
                className={`p-5 rounded-2xl border transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-[#0B1F3A] text-white border-[#0B1F3A] shadow-md'
                    : 'bg-white hover:bg-[#FFF4EB]/50 border-[#E4DFD5] text-[#171717] hover:border-[#FF7A00]'
                }`}
              >
                <div className="flex items-center justify-between text-xs font-bold mb-1.5">
                  <span className={isSelected ? 'text-[#FF7A00]' : 'text-[#FF7A00]'}>
                    {item.companyName}
                  </span>
                  <span className={isSelected ? 'text-white/60' : 'text-[#171717]/50'}>
                    {item.foundedYear} – {item.shutDownYear}
                  </span>
                </div>
                <h3 className={`text-base font-extrabold tracking-tight ${isSelected ? 'text-white' : 'text-[#0B1F3A]'}`}>
                  {item.industry}
                </h3>
                <p className={`text-xs mt-1 line-clamp-2 ${isSelected ? 'text-white/80' : 'text-[#171717]/70'}`}>
                  {item.corePremise}
                </p>
              </div>
            );
          })}
        </div>

        {/* Right Column: Detailed Post-Mortem View */}
        <div className="lg:col-span-7 bg-white rounded-2xl border border-[#E4DFD5] p-6 sm:p-10 shadow-sm space-y-8">
          
          {/* Header */}
          <div className="border-b border-[#E4DFD5] pb-6">
            <div className="flex flex-wrap items-center gap-2 text-xs font-bold text-[#FF7A00] uppercase tracking-wider mb-2">
              <span>{activeCase.companyName}</span>
              <span className="text-[#171717]/40">·</span>
              <span className="text-[#171717]/70 font-normal">Active: {activeCase.foundedYear} to {activeCase.shutDownYear}</span>
              <span className="text-[#171717]/40">·</span>
              <span className="text-[#138A4B]">{activeCase.industry}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F3A] tracking-tight">
              Anatomy of {activeCase.companyName}
            </h2>
            <p className="text-xs text-[#171717]/70 mt-1">
              Capital Peak: <strong>{activeCase.peakValuationOrFunding}</strong>
            </p>
          </div>

          {/* The Original Premise */}
          <div>
            <h3 className="text-xs font-black uppercase tracking-wider text-[#0B1F3A] mb-2">
              The Original Vision &amp; Problem Solved:
            </h3>
            <p className="text-sm text-[#171717]/85 leading-relaxed bg-[#F7F5F0] p-4 rounded-xl border border-[#E4DFD5]">
              {activeCase.corePremise}
            </p>
          </div>

          {/* What Went Wrong / Friction Factors */}
          <div>
            <h3 className="text-xs font-black uppercase tracking-wider text-[#0B1F3A] mb-3 flex items-center gap-1.5">
              <HelpCircle className="w-4 h-4 text-[#FF7A00]" />
              <span>Key Frictions &amp; Root Challenges:</span>
            </h3>
            <ul className="space-y-3">
              {activeCase.whatWentWrong.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-[#171717]/85 leading-relaxed">
                  <span className="w-2 h-2 rounded-full bg-[#FF7A00] shrink-0 mt-2" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Strategic Lessons for Aspiring Founders */}
          <div className="p-6 rounded-xl bg-[#0B1F3A] text-white space-y-4">
            <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#FF7A00]">
              <BookOpen className="w-4 h-4 text-[#FF7A00]" />
              <span>Strategic Lessons for Aspiring Entrepreneurs:</span>
            </div>
            <div className="space-y-3">
              {activeCase.strategicLessons.map((lesson, idx) => (
                <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-white/90 leading-relaxed">
                  <span className="text-[#FF7A00] font-black font-mono">{idx + 1}.</span>
                  <span>{lesson}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Cited References */}
          <div className="pt-4 border-t border-[#E4DFD5] text-xs text-[#171717]/70">
            <div className="font-bold uppercase tracking-wider text-[#0B1F3A] mb-1.5">
              Verified Post-Mortem Sources:
            </div>
            <ul className="space-y-1">
              {activeCase.sources.map((src, idx) => (
                <li key={idx} className="flex items-center gap-1.5">
                  <ExternalLink className="w-3 h-3 text-[#138A4B]" />
                  <span>{src}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

      </div>

    </div>
  );
};
