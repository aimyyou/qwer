import React from 'react';
import { Scroll, Shield, ArrowDown, Sparkles, AlertCircle } from 'lucide-react';
import { WORLD_OVERVIEW } from '../data/loreData';

interface HeroSectionProps {
  onExploreWorld: () => void;
  onViewCharacters: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onExploreWorld, onViewCharacters }) => {
  return (
    <section id="hero" className="relative pt-10 pb-20 md:pt-14 md:pb-28 overflow-hidden bg-[#0a0c13]">
      {/* Background ambient lighting & magic particles */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[700px] pointer-events-none opacity-40">
        <div className="absolute -top-32 left-1/4 w-[480px] h-[480px] bg-amber-500/10 rounded-full blur-[100px]" />
        <div className="absolute top-20 right-1/4 w-[420px] h-[420px] bg-purple-600/15 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Editorial Genre Kicker */}
        <div className="flex flex-wrap items-center gap-2 text-xs md:text-sm font-medium text-cyan-300/90 mb-4 tracking-wider">
          <span>마법 판타지</span>
          <span aria-hidden="true" className="text-slate-600">·</span>
          <span>성장 RPG</span>
          <span aria-hidden="true" className="text-slate-600">·</span>
          <span>파티 모험</span>
          <span aria-hidden="true" className="text-slate-600">·</span>
          <span>블랙 코미디</span>
          <span aria-hidden="true" className="text-slate-600">·</span>
          <span>다크 판타지 &amp; 로맨스</span>
        </div>

        {/* Main 2-Column Split: Headline & Royal Parchment Dispatch Notice */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          {/* Left Column: Core Headline & Lore Synopsis */}
          <div className="lg:col-span-6 flex flex-col justify-between py-2">
            <div>
              {/* Subtle Arcane Badge */}
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-indigo-950/70 border border-indigo-500/30 text-indigo-200 text-xs font-mono mb-4 tracking-wider shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_#38bdf8]" />
                <span className="text-[11px] sm:text-xs">FANTASY ADVENTURE CHRONICLE</span>
                <span className="text-indigo-400">✦</span>
                <span className="text-cyan-300 font-semibold">왕국 토벌록</span>
              </div>

              {/* Redesigned High-Impact Fantasy Title */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.15] mb-6 font-fantasy-title text-balance">
                <span className="block text-slate-100 drop-shadow-[0_4px_16px_rgba(0,0,0,0.8)]">
                  30살 동정 낙제생이
                </span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-200 to-indigo-300 drop-shadow-[0_0_35px_rgba(56,189,248,0.45)] mt-1 font-black">
                  최강?!
                </span>
              </h1>

              {/* Subtitle Quote Card (Clean obsidian-sapphire glass plate) */}
              <div className="p-4 rounded-xl bg-slate-900/80 border border-cyan-500/30 shadow-lg shadow-cyan-950/20 mb-6 relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-cyan-400 to-indigo-500" />
                <p className="text-base sm:text-lg text-slate-200 font-medium leading-relaxed font-fantasy-title pl-2">
                  “어제까진 연금술 상점 알바생이었는데... <br className="hidden sm:inline" />
                  자고 일어났더니 수도 결계가 내 마력에 박살 났다?!”
                </p>
              </div>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6 font-normal">
                마법학교 시절 최하위권 성적으로 유급 끝에 중퇴하고, 
                수도 뒷골목 연금술 상점에서 플라스크를 닦으며 살아가던 서른 살 청년. 
                서른 번째 생일 밤, 몸속 깊은 곳에 봉인되어 있던 잠재 마력이 유례없는 대폭발을 일으킵니다.
              </p>

              <p className="text-sm text-slate-400 leading-relaxed mb-8">
                왕국 공인 마력 측정구를 산산조각 내며 마왕 토벌대에 전격 합류하게 된 당신. 
                과거 자신을 차갑게 무시했던 전교 수석 세레나와 개성 넘치는 동창들, 
                그리고 어둠 속에서 은밀한 계략을 꾸미는 밤의 여왕 아르마와의 장대한 모험이 시작됩니다.
              </p>
            </div>

            {/* Simple navigation buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onViewCharacters}
                className="flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 active:from-indigo-700 active:to-cyan-600 rounded-lg transition-all shadow-lg shadow-indigo-950/50 hover:shadow-cyan-500/20 cursor-pointer whitespace-nowrap shrink-0"
              >
                <span>토벌대 4인 &amp; 밤의 여왕 보기</span>
                <ArrowDown className="w-4 h-4" />
              </button>

              <button
                onClick={onExploreWorld}
                className="flex items-center gap-2 px-5 py-3.5 text-sm font-medium text-slate-200 bg-slate-900/90 hover:bg-slate-800/90 border border-slate-700/80 hover:border-cyan-400/50 rounded-lg transition-colors cursor-pointer whitespace-nowrap shrink-0"
              >
                <span>세계관 &amp; 마법 체계</span>
              </button>
            </div>
          </div>

          {/* Right Column: Hero Visual + Atmospheric View */}
          <div className="lg:col-span-6 relative flex flex-col">
            <div className="relative rounded-2xl overflow-hidden border border-amber-900/40 bg-slate-900 shadow-2xl h-full min-h-[380px] lg:min-h-[460px] group">
              <img
                src="/src/assets/images/hero_fantasy_world_1792235918101.jpg"
                alt="수도 린델과 마왕군 거성의 황혼 풍경"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0c13] via-[#0a0c13]/40 to-transparent" />

              <div className="absolute bottom-0 inset-x-0 p-6">
                <div className="flex items-center gap-2 text-xs text-amber-400 font-medium mb-1.5 font-cinzel">
                  <span>왕국 수도 린델 &amp; 심연의 거성</span>
                </div>
                <p className="text-sm text-slate-200 font-cinzel font-semibold leading-relaxed">
                  “마법학교 중퇴생에서 대륙 최강의 마력 보유자로. 상식을 뒤엎는 판타지 모험이 펼쳐집니다.”
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Item 11: Real Royal Notice Parchment Section (마왕 토벌대 모집 공고) */}
        <div id="notice" className="mt-16 pt-10 border-t border-amber-900/40">
          <div className="relative max-w-4xl mx-auto p-8 sm:p-12 rounded-2xl bg-gradient-to-b from-[#251e14] via-[#1b150d] to-[#140f08] border-2 border-amber-600/60 shadow-[0_0_35px_rgba(245,158,11,0.15)] text-[#f4ecd8] font-serif overflow-hidden">
            {/* Parchment background filigree accents */}
            <div className="absolute top-0 left-0 w-32 h-32 border-t-2 border-l-2 border-amber-500/50 m-3 pointer-events-none" />
            <div className="absolute top-0 right-0 w-32 h-32 border-t-2 border-r-2 border-amber-500/50 m-3 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-32 h-32 border-b-2 border-l-2 border-amber-500/50 m-3 pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-32 h-32 border-b-2 border-r-2 border-amber-500/50 m-3 pointer-events-none" />

            {/* Wax Seal Insignia at top right */}
            <div className="absolute top-6 right-6 hidden sm:flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-red-700 via-rose-800 to-red-950 border-2 border-red-500/80 shadow-lg flex items-center justify-center text-amber-200 font-cinzel font-extrabold text-xs rotate-[-12deg]">
                <div className="text-center leading-tight">
                  <div className="text-[9px] text-amber-300">ROYAL</div>
                  <div className="text-[13px] tracking-wider text-white">SEAL</div>
                  <div className="text-[8px] text-amber-300">국왕령</div>
                </div>
              </div>
            </div>

            {/* Header of Notice */}
            <div className="text-center mb-8 pb-6 border-b border-amber-700/40">
              <div className="text-xs sm:text-sm tracking-[0.3em] text-amber-400 font-mono mb-2">
                [ 왕실 최고 마도 평의회 긴급 칙령 제408호 ]
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-amber-200 font-cinzel tracking-wide mb-3">
                마왕 토벌대 긴급 용사 모집 공고
              </h2>
              <p className="text-xs sm:text-sm text-amber-200/80 max-w-xl mx-auto italic">
                “심연의 어둠이 대륙을 뒤덮기 전, 왕국의 평화를 수호할 진정한 마도 전사를 소집하노라.”
              </p>
            </div>

            {/* Notice Body Text */}
            <div className="space-y-4 text-xs sm:text-sm text-[#e8ded0] leading-relaxed mb-8">
              <div className="p-3.5 rounded-lg bg-black/40 border border-amber-700/30">
                <span className="text-amber-400 font-bold block mb-1">【 임무 개요 】</span>
                대륙 최남단 심연의 거성에 웅거하는 고대 마족의 수장 ‘밤의 여왕 아르마’의 군세를 격파하고 왕국의 안위를 수호할 특무 토벌대원을 긴급 편성함.
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-3.5 rounded-lg bg-black/40 border border-amber-700/30">
                  <span className="text-amber-400 font-bold block mb-1">【 지원 및 선발 자격 】</span>
                  <ul className="list-disc list-inside space-y-1 text-slate-300">
                    <li>성인(만 20세 이상)의 결격사유 없는 마법사 및 전사</li>
                    <li>고위급 실전 마법 또는 특수 전술 마도 운용 가능자</li>
                    <li><strong className="text-amber-300">특례:</strong> 마력 측정소 장비를 파손시킬 수준의 비정상 대마력 보유자 즉시 특별 선발</li>
                  </ul>
                </div>

                <div className="p-3.5 rounded-lg bg-black/40 border border-amber-700/30">
                  <span className="text-amber-400 font-bold block mb-1">【 토벌 성공 포상 및 예우 】</span>
                  <ul className="list-disc list-inside space-y-1 text-slate-300">
                    <li>국왕 직속 명예 기사 및 궁정 대마법사 칭호 하사</li>
                    <li>왕실 보물고 1급 비전 마도서 및 성유물 열람권</li>
                    <li>토벌대원 전원 평생 왕실 연금 및 영지 수여</li>
                  </ul>
                </div>
              </div>

              <div className="p-3.5 rounded-lg bg-black/40 border border-amber-700/30">
                <span className="text-amber-400 font-bold block mb-1">【 현재 편성 완료된 토벌대 핵심 진용 】</span>
                <p className="text-slate-300">
                  왕립 마법학교 전교 수석 <strong className="text-white">세레나 아르벨</strong>, 
                  공간술사 <strong className="text-white">루카스 베른</strong>, 
                  수호방벽 <strong className="text-white">가렌 로웬</strong>, 
                  성령 치유사 <strong className="text-white">엘리시아 벨</strong>, 
                  그리고 연금술 상점에서 긴급 징집된 <strong className="text-amber-300">의문의 신규 각성자</strong>.
                </p>
              </div>
            </div>

            {/* Official Signature line */}
            <div className="pt-6 border-t border-amber-700/40 flex flex-col sm:flex-row items-center justify-between text-xs text-amber-300/80 gap-3">
              <div>
                발행처: 왕국 수도 린델 마도 국방 참모부 &amp; 모험가 길드 연합
              </div>
              <div className="font-cinzel tracking-wider text-amber-400 font-bold">
                SEALED BY ROYAL DECREE
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
