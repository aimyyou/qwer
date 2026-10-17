import React, { useState } from 'react';
import { 
  Sparkles, 
  Flame, 
  Zap, 
  Shield, 
  HeartHandshake, 
  Compass, 
  Moon, 
  Users,
  Award,
  Crown
} from 'lucide-react';
import { MAGIC_TIERS } from '../data/loreData';

export const LoreSection: React.FC = () => {
  const [selectedTier, setSelectedTier] = useState<number>(3); // Default to 상급

  return (
    <section id="lore" className="py-20 md:py-28 bg-[#0a0c12] border-t border-amber-900/30">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-mono text-amber-400 tracking-wider mb-2 font-medium">
            01. MAGIC RANK &amp; SYSTEM
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-cinzel text-balance mb-4">
            체계적 학문으로서의 마법 6단계 위계
          </h2>
          <p className="text-base text-slate-400 leading-relaxed">
            왕립 마법학교와 왕실 마도 평의회가 엄격히 공인하는 마법사의 위계 체계입니다. 
            기초 입문인 초급부터 전설로 회자되는 신화급 초월까지, 
            각 단계마다 도달 가능한 마력의 한계와 실전 영향력이 극명하게 갈립니다.
          </p>
        </div>

        {/* 6 Magic Tiers with Visual Emblems / Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {MAGIC_TIERS.map((tier, idx) => {
            const isSelected = selectedTier === idx;
            const isTranscendent = idx === 5;
            const isMaster = idx === 3;

            return (
              <div
                key={idx}
                onClick={() => setSelectedTier(idx)}
                className={`p-6 rounded-2xl border transition-all cursor-pointer relative overflow-hidden flex flex-col justify-between group ${
                  isSelected
                    ? 'bg-slate-900 border-amber-400 shadow-xl shadow-amber-950/20'
                    : 'bg-slate-900/40 border-slate-800 hover:border-slate-700'
                }`}
              >
                {/* Visual Ambient Glow for Top Tiers */}
                {isTranscendent && (
                  <div className="absolute -top-12 -right-12 w-32 h-32 bg-pink-500/10 rounded-full blur-2xl pointer-events-none" />
                )}
                {isMaster && (
                  <div className="absolute -top-12 -right-12 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />
                )}

                <div>
                  {/* Top Line: Stage Level & Rarity */}
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-4">
                    <span className="font-mono text-amber-400 font-semibold">{tier.level}</span>
                    <span className="text-slate-400">{tier.rarity}</span>
                  </div>

                  {/* Illustrated Tier Emblem & Title Header */}
                  <div className="flex items-center gap-4 mb-4">
                    {/* Visual Emblem Icon Box */}
                    <div 
                      className="w-14 h-14 rounded-xl flex items-center justify-center font-bold text-2xl shadow-inner border shrink-0 transition-transform group-hover:scale-105"
                      style={{ 
                        backgroundColor: `${tier.color}15`, 
                        borderColor: `${tier.color}50`,
                        color: tier.color 
                      }}
                    >
                      {tier.sigil}
                    </div>

                    <div>
                      <h3 className="text-lg font-bold text-white font-cinzel group-hover:text-amber-300 transition-colors">
                        {tier.name}
                      </h3>
                      <div className="text-xs text-slate-400 font-medium">
                        {idx === 3 ? '세레나 아르벨의 경지' : idx === 5 ? '신화적 미지' : `Tier 0${idx + 1}`}
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                    {tier.description}
                  </p>
                </div>

                {/* Example Spells line */}
                <div className="pt-3 border-t border-slate-800/80 text-xs text-slate-400">
                  <span className="text-amber-400/90 font-medium block mb-1">대표 술식:</span>
                  <span className="text-slate-300">{tier.examples}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Tier Spotlight Box */}
        <div className="p-8 rounded-2xl bg-gradient-to-r from-slate-900 via-[#111624] to-slate-900 border border-amber-900/40 relative overflow-hidden">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 text-xs font-mono text-amber-400 mb-2">
              <span>ACTIVE TIER INSPECTION</span>
              <span>✦</span>
              <span>{MAGIC_TIERS[selectedTier].level}</span>
            </div>
            <h3 className="text-2xl font-bold text-white font-cinzel mb-2">
              {MAGIC_TIERS[selectedTier].name} — {MAGIC_TIERS[selectedTier].rarity}
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed mb-4">
              {MAGIC_TIERS[selectedTier].description}
            </p>
            <div className="flex flex-wrap items-center gap-2 text-xs">
              <span className="text-slate-400">구사 가능한 주요 계열:</span>
              <span className="text-amber-300 bg-amber-950/40 border border-amber-800/40 px-2.5 py-1 rounded">
                {MAGIC_TIERS[selectedTier].examples}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
