import React, { useState } from 'react';
import { ArrowRight, Megaphone, Lightbulb, CheckCircle2, BookOpen } from 'lucide-react';
import { MARKETING_CASES } from '../data/marketing';

interface MarketingViewProps {
  onSelectStory: (slug: string) => void;
}

export const MarketingView: React.FC<MarketingViewProps> = ({ onSelectStory }) => {
  const [selectedCaseId, setSelectedCaseId] = useState<string>(MARKETING_CASES[0].id);
  const activeCase = MARKETING_CASES.find((c) => c.id === selectedCaseId) || MARKETING_CASES[0];

  return (
    <div className="py-12 max-w-7xl mx-auto px-4 sm:px-8">
      
      {/* Header */}
      <div className="max-w-3xl mb-12">
        <div className="flex items-center gap-2 text-xs font-black tracking-widest text-[#FF7A00] uppercase mb-2">
          <Megaphone className="w-4 h-4 text-[#FF7A00]" />
          <span>Curated for Digital Business &amp; Marketing Students</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-[#0B1F3A] tracking-tight mb-4">
          Startup Marketing Tear-Downs
        </h1>
        <p className="text-base sm:text-lg text-[#171717]/80 leading-relaxed font-normal">
          How India&apos;s most recognized startups engineered virality, brand recall, and compounding customer acquisition without burning money on generic ads.
        </p>
      </div>

      {/* Interactive Tabs / Selector */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left List of Marketing Cases */}
        <div className="lg:col-span-5 space-y-3">
          <div className="text-xs font-black uppercase tracking-wider text-[#0B1F3A]/70 mb-2">
            Select Marketing Case Study:
          </div>
          {MARKETING_CASES.map((item) => {
            const isSelected = item.id === selectedCaseId;
            return (
              <div
                key={item.id}
                onClick={() => setSelectedCaseId(item.id)}
                className={`p-5 rounded-2xl border transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-[#0B1F3A] text-white border-[#0B1F3A] shadow-md'
                    : 'bg-white hover:bg-[#FFF4EB]/50 border-[#E4DFD5] text-[#171717] hover:border-[#FF7A00]'
                }`}
              >
                <div className="flex items-center justify-between text-xs font-bold mb-1.5">
                  <span className={isSelected ? 'text-[#FF7A00]' : 'text-[#FF7A00]'}>
                    {item.startup}
                  </span>
                  <span className={isSelected ? 'text-white/60' : 'text-[#171717]/50'}>
                    {item.readTime}
                  </span>
                </div>
                <h3 className={`text-base font-extrabold tracking-tight ${isSelected ? 'text-white' : 'text-[#0B1F3A]'}`}>
                  {item.title}
                </h3>
                <p className={`text-xs mt-2 line-clamp-2 ${isSelected ? 'text-white/80' : 'text-[#171717]/70'}`}>
                  {item.summary}
                </p>
              </div>
            );
          })}
        </div>

        {/* Right Active Deep Dive Detail Card */}
        <div className="lg:col-span-7 bg-white rounded-2xl border border-[#E4DFD5] p-6 sm:p-10 shadow-sm space-y-8 sticky top-28">
          
          {/* Active Header */}
          <div className="border-b border-[#E4DFD5] pb-6 space-y-2">
            <div className="flex items-center gap-2 text-xs font-bold text-[#FF7A00] uppercase tracking-wider">
              <span>{activeCase.startup} Case Study</span>
              <span className="text-[#171717]/30">·</span>
              <span className="text-[#138A4B]">{activeCase.category}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F3A] tracking-tight leading-snug">
              {activeCase.title}
            </h2>
            <p className="text-sm text-[#171717]/80 leading-relaxed">
              {activeCase.summary}
            </p>
          </div>

          {/* Core Strategic Pillar */}
          <div className="p-4 rounded-xl bg-[#FFF4EB] border border-[#FF7A00]/30 space-y-1">
            <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#FF7A00]">
              <Lightbulb className="w-4 h-4 text-[#FF7A00]" />
              <span>Core Strategic Principle</span>
            </div>
            <p className="text-sm font-bold text-[#0B1F3A]">
              {activeCase.coreStrategy}
            </p>
          </div>

          {/* Key Tactics Analyzed */}
          <div>
            <h3 className="text-xs font-black uppercase tracking-wider text-[#0B1F3A] mb-3">
              Execution Playbook &amp; Key Tactics:
            </h3>
            <ul className="space-y-3">
              {activeCase.keyTactics.map((tactic, idx) => (
                <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-[#171717]/85 leading-relaxed">
                  <CheckCircle2 className="w-4 h-4 text-[#138A4B] shrink-0 mt-0.5" />
                  <span>{tactic}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Takeaway for BBA/MBA Students */}
          <div className="p-5 rounded-xl bg-[#F7F5F0] border border-[#E4DFD5] space-y-2">
            <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#0B1F3A]">
              <BookOpen className="w-4 h-4 text-[#FF7A00]" />
              <span>Academic &amp; Practitioner Lesson (For Students):</span>
            </div>
            <p className="text-xs sm:text-sm text-[#171717]/90 leading-relaxed font-medium">
              {activeCase.takeawayForStudents}
            </p>
          </div>

          {/* Button to view full company story */}
          <div className="pt-4 border-t border-[#E4DFD5] flex items-center justify-between">
            <span className="text-xs text-[#171717]/60 font-medium">
              Want the full company breakdown?
            </span>
            <button
              onClick={() => onSelectStory(activeCase.storySlug)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#0B1F3A] hover:bg-[#061324] text-white font-bold text-xs tracking-wider uppercase transition-colors cursor-pointer group"
            >
              <span>Read Full {activeCase.startup} Story</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#FF7A00] group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

        </div>

      </div>

    </div>
  );
};
