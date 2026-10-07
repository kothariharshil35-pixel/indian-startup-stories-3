import React, { useState } from 'react';
import { Search, ShieldAlert, ArrowRight } from 'lucide-react';
import { FUNDING_RECORDS } from '../data/funding';

interface FundingViewProps {
  onSelectStory: (slug: string) => void;
}

export const FundingView: React.FC<FundingViewProps> = ({ onSelectStory }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [stageFilter, setStageFilter] = useState('all');

  const stages = ['all', 'Bootstrapped', 'Public', 'Private Unicorn'];

  const filteredRecords = FUNDING_RECORDS.filter((rec) => {
    const matchesSearch =
      rec.startup.toLowerCase().includes(searchQuery.toLowerCase()) ||
      rec.industry.toLowerCase().includes(searchQuery.toLowerCase()) ||
      rec.headquarters.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesStage =
      stageFilter === 'all' ? true : rec.fundingStage.toLowerCase().includes(stageFilter.toLowerCase());

    return matchesSearch && matchesStage;
  });

  return (
    <div className="py-12 max-w-7xl mx-auto px-4 sm:px-8">
      
      {/* Header */}
      <div className="max-w-3xl mb-10">
        <div className="flex items-center gap-2 text-xs font-black tracking-widest text-[#FF7A00] uppercase mb-2">
          <span>Capital Structure &amp; Valuation Registry</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-[#0B1F3A] tracking-tight mb-4">
          Startup Funding Tracker
        </h1>
        <p className="text-base sm:text-lg text-[#171717]/80 leading-relaxed font-normal">
          Verified institutional capital trajectories across India&apos;s leading tech enterprises. Grounded in audited financial filings and regulatory disclosures.
        </p>
      </div>

      {/* Editorial Disclaimer Box (Crucial Section 16 Requirement) */}
      <div className="p-4 sm:p-5 rounded-2xl bg-amber-50/80 border border-amber-200 mb-8 flex items-start gap-3">
        <ShieldAlert className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
        <div className="text-xs sm:text-sm text-amber-950 leading-relaxed">
          <strong className="font-bold">Editorial Verification Standard: </strong>
          In accordance with our editorial policy, funding rounds, valuations, and capitalization details are only displayed when verified against statutory regulatory documents (MCA/SEBI filings) or dated official company disclosures. Unverified rumors or speculative blog numbers are strictly excluded.
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white p-4 rounded-2xl border border-[#E4DFD5] shadow-xs mb-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        
        {/* Search */}
        <div className="relative w-full sm:w-80">
          <Search className="w-4 h-4 text-[#171717]/40 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search startup or industry..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 text-xs sm:text-sm rounded-lg border border-[#E4DFD5] focus:outline-none focus:border-[#0B1F3A] bg-[#F7F5F0]"
          />
        </div>

        {/* Stage Filter Buttons */}
        <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto">
          {stages.map((stage) => {
            const isActive = stageFilter === stage;
            return (
              <button
                key={stage}
                onClick={() => setStageFilter(stage)}
                className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                  isActive
                    ? 'bg-[#0B1F3A] text-white shadow-xs'
                    : 'bg-[#F7F5F0] text-[#171717]/70 hover:bg-[#EFECE6]'
                }`}
              >
                {stage === 'all' ? 'All Stages' : stage}
              </button>
            );
          })}
        </div>

      </div>

      {/* Structured Funding Table */}
      <div className="bg-white rounded-2xl border border-[#E4DFD5] shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-[#0B1F3A] text-white text-[11px] uppercase tracking-wider font-extrabold">
              <tr>
                <th className="py-4 px-6">Startup</th>
                <th className="py-4 px-6">Industry</th>
                <th className="py-4 px-6">Funding Stage</th>
                <th className="py-4 px-6">Founded</th>
                <th className="py-4 px-6">Headquarters</th>
                <th className="py-4 px-6">Verified Notes &amp; Date</th>
                <th className="py-4 px-6 text-right">Story</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E4DFD5] font-medium text-[#171717]">
              {filteredRecords.length === 0 ? (
                <tr>
                  <td colSpan={7} className="py-12 text-center text-[#171717]/60">
                    No matching startups found. Try adjusting your search query.
                  </td>
                </tr>
              ) : (
                filteredRecords.map((rec) => (
                  <tr key={rec.startup} className="hover:bg-[#F7F5F0]/60 transition-colors">
                    
                    {/* Startup Name */}
                    <td className="py-4 px-6 font-extrabold text-[#0B1F3A]">
                      <div className="text-sm">{rec.startup}</div>
                    </td>

                    {/* Industry */}
                    <td className="py-4 px-6">
                      <span className="font-semibold text-[#FF7A00]">
                        {rec.industry}
                      </span>
                    </td>

                    {/* Funding Stage */}
                    <td className="py-4 px-6 font-semibold">
                      <span className={
                        rec.fundingStage === 'Bootstrapped'
                          ? 'text-[#138A4B]'
                          : rec.fundingStage === 'Public'
                          ? 'text-[#0B1F3A]'
                          : 'text-[#171717]'
                      }>
                        {rec.fundingStage}
                      </span>
                    </td>

                    {/* Founded Year */}
                    <td className="py-4 px-6 font-mono text-[#171717]/80">
                      {rec.founded}
                    </td>

                    {/* Headquarters */}
                    <td className="py-4 px-6 text-xs text-[#171717]/70">
                      {rec.headquarters}
                    </td>

                    {/* Verified Notes */}
                    <td className="py-4 px-6 text-xs text-[#171717]/80 max-w-sm">
                      <p className="line-clamp-2 leading-relaxed">{rec.verifiedNotes}</p>
                      <span className="inline-block mt-1 text-[10px] text-[#171717]/50 font-mono">
                        As of: {rec.asOfDate}
                      </span>
                    </td>

                    {/* Story Link */}
                    <td className="py-4 px-6 text-right">
                      {rec.storySlug && (
                        <button
                          onClick={() => onSelectStory(rec.storySlug!)}
                          className="inline-flex items-center gap-1 text-xs font-bold text-[#FF7A00] hover:text-[#E66E00] cursor-pointer"
                        >
                          <span>Case Study</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      )}
                    </td>

                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
};
