import React from 'react';
import { Scroll, Sparkles } from 'lucide-react';

interface FooterProps {
  onNavigate: (id: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-[#080a0f] border-t border-amber-900/30 py-12 text-slate-400">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-slate-800/80">
          <div>
            <span className="text-lg font-bold text-white font-cinzel block mb-1">
              30살 동정 낙제생이 최강?!
            </span>
            <p className="text-xs text-slate-500 max-w-md">
              연금술 상점 알바생에서 시작되는 마왕 토벌 판타지. 
              수도 린델과 정예 토벌대 4인, 그리고 밤의 여왕 아르마의 대서사 공식 소개 웹사이트입니다.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs font-medium text-slate-400">
            <button
              onClick={() => onNavigate('hero')}
              className="hover:text-amber-400 transition-colors cursor-pointer"
            >
              맨 위로
            </button>
            <button
              onClick={() => onNavigate('notice')}
              className="hover:text-amber-400 transition-colors cursor-pointer"
            >
              토벌대 모집 공고
            </button>
            <button
              onClick={() => onNavigate('lore')}
              className="hover:text-amber-400 transition-colors cursor-pointer"
            >
              마법 체계
            </button>
            <button
              onClick={() => onNavigate('characters')}
              className="hover:text-amber-400 transition-colors cursor-pointer"
            >
              토벌대 &amp; 밤의 여왕
            </button>
            <button
              onClick={() => onNavigate('regions')}
              className="hover:text-amber-400 transition-colors cursor-pointer"
            >
              대륙 탐험 지도
            </button>
            <button
              onClick={() => onNavigate('bestiary')}
              className="hover:text-amber-400 transition-colors cursor-pointer"
            >
              마물 도감
            </button>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © 2026 30살 동정 낙제생이 최강?! All Rights Reserved.
          </div>
          <div className="flex items-center gap-2 text-xs text-amber-500/80 font-mono">
            <span>ROYAL KINGDOM ARCHIVE</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
