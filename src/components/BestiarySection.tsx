import React, { useState } from 'react';
import { Skull, ShieldAlert, Zap, Search } from 'lucide-react';
import { MONSTERS } from '../data/loreData';

export const BestiarySection: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');
  const [search, setSearch] = useState<string>('');

  const filteredMonsters = MONSTERS.filter((m) => {
    const matchesFilter = filter === 'all' || m.category === filter;
    const matchesSearch = 
      m.name.toLowerCase().includes(search.toLowerCase()) ||
      m.description.toLowerCase().includes(search.toLowerCase()) ||
      m.traits.some(t => t.toLowerCase().includes(search.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  return (
    <section id="bestiary" className="py-20 md:py-28 bg-[#0c0e14] border-t border-amber-900/30">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-mono text-amber-400 tracking-wider mb-2 font-medium">
            04. BESTIARY &amp; ADVERSARIES
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-cinzel text-balance mb-4">
            던전 마물 도감 및 토벌 전술
          </h2>
          <p className="text-base text-slate-400 leading-relaxed">
            토벌대가 던전과 미답파 지대에서 조우할 주요 적대 생물들입니다. 
            단순한 힘겨루기뿐 아니라 지형과 환경, 기습과 매복을 구사하는 마물들의 특성을 분석하여 대비하세요.
          </p>
        </div>

        {/* Filter and Search Bar */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-8">
          {/* Segmented Filter Buttons */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-900 rounded-lg border border-amber-900/40 overflow-x-auto">
            <button
              onClick={() => setFilter('all')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer whitespace-nowrap ${
                filter === 'all' ? 'bg-amber-400 text-slate-950 font-semibold' : 'text-slate-400 hover:text-white'
              }`}
            >
              전체 보기
            </button>
            <button
              onClick={() => setFilter('초반형')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer whitespace-nowrap ${
                filter === '초반형' ? 'bg-amber-400 text-slate-950 font-semibold' : 'text-slate-400 hover:text-white'
              }`}
            >
              초반형 마물
            </button>
            <button
              onClick={() => setFilter('중반형')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer whitespace-nowrap ${
                filter === '중반형' ? 'bg-amber-400 text-slate-950 font-semibold' : 'text-slate-400 hover:text-white'
              }`}
            >
              중반형 마수
            </button>
            <button
              onClick={() => setFilter('심층형')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer whitespace-nowrap ${
                filter === '심층형' ? 'bg-amber-400 text-slate-950 font-semibold' : 'text-slate-400 hover:text-white'
              }`}
            >
              심층 사령/미믹
            </button>
            <button
              onClick={() => setFilter('정예형')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer whitespace-nowrap ${
                filter === '정예형' ? 'bg-amber-400 text-slate-950 font-semibold' : 'text-slate-400 hover:text-white'
              }`}
            >
              마왕군 정예
            </button>
          </div>

          {/* Search Input */}
          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="마물 이름, 특성 검색..."
              className="w-full bg-slate-900 border border-slate-800 rounded-lg pl-9 pr-4 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 transition-colors"
            />
          </div>
        </div>

        {/* Monsters Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMonsters.map((monster) => (
            <div
              key={monster.id}
              className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-amber-400/50 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                  <span className="text-amber-400 font-semibold">{monster.category}</span>
                  <span className="font-mono text-rose-400 font-semibold">{monster.danger}</span>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 font-cinzel group-hover:text-amber-300 transition-colors">
                  {monster.name}
                </h3>

                {/* Traits */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {monster.traits.map((trait, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[11px] text-slate-300 bg-slate-950 px-2 py-0.5 rounded border border-slate-800"
                    >
                      {trait}
                    </span>
                  ))}
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                  {monster.description}
                </p>
              </div>

              {/* Tactics Advice Box */}
              <div className="pt-4 border-t border-slate-800/80 text-xs text-slate-400">
                <span className="text-amber-400/90 font-medium block mb-1">토벌대 전술 권고사항:</span>
                <p className="leading-relaxed">{monster.tactics}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
