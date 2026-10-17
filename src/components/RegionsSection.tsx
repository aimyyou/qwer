import React, { useState } from 'react';
import { MapPin, Compass, HelpCircle, Shield, AlertTriangle } from 'lucide-react';
import { REGIONS, Region } from '../data/loreData';

export const RegionsSection: React.FC = () => {
  const [selectedRegion, setSelectedRegion] = useState<Region>(REGIONS[0]);

  return (
    <section id="regions" className="py-20 md:py-28 bg-[#0a0c12] border-t border-amber-900/30">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-mono text-amber-400 tracking-wider mb-2 font-medium">
            03. WORLD MAP &amp; EXPLORATION
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-cinzel text-balance mb-4">
            대륙 탐험 지도
          </h2>
          <p className="text-base text-slate-400 leading-relaxed">
            토벌대가 앞으로 나아갈 미지의 대륙 지도입니다. 
            왕국 수도를 제외한 다른 지역들은 아직 인간의 발길이 닿지 않은 미답파 구역으로 베일에 싸여 있습니다.
          </p>
        </div>

        {/* 2-Column Layout: Continent Map + Region Dossier */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Vintage Map with Pins */}
          <div className="lg:col-span-7 bg-slate-900 rounded-2xl overflow-hidden border border-amber-900/40 shadow-2xl relative">
            <div className="relative aspect-[16/9] w-full">
              <img
                src="/src/assets/images/world_map_continent_1792235918764.jpg"
                alt="대륙 탐험 지도"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />

              {/* Pins on the Map */}
              {REGIONS.map((region) => {
                const isSelected = selectedRegion.id === region.id;
                const isExplored = region.isExplored;

                return (
                  <button
                    key={region.id}
                    onClick={() => setSelectedRegion(region)}
                    style={{ left: `${region.coordinates.x}%`, top: `${region.coordinates.y}%` }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 group z-20 cursor-pointer"
                    title={region.name}
                  >
                    <div className="relative flex items-center justify-center">
                      {isSelected && (
                        <div className="absolute w-8 h-8 rounded-full bg-amber-400/40 animate-ping" />
                      )}
                      
                      <div className={`p-2 rounded-full border shadow-lg transition-transform ${
                        isSelected 
                          ? 'bg-amber-400 text-slate-950 border-white scale-125 z-30' 
                          : isExplored
                          ? 'bg-emerald-950/90 text-emerald-300 border-emerald-500/80 hover:scale-110'
                          : 'bg-slate-900/90 text-amber-400/90 border-slate-700 hover:scale-110'
                      }`}>
                        {isExplored ? <MapPin className="w-4 h-4" /> : <HelpCircle className="w-4 h-4" />}
                      </div>

                      {/* Tooltip Label */}
                      <div className="absolute top-8 left-1/2 -translate-x-1/2 whitespace-nowrap bg-slate-950/90 backdrop-blur-sm text-slate-200 text-xs font-cinzel px-2.5 py-0.5 rounded border border-slate-700 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
                        {region.name}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Map Legend Bar */}
            <div className="p-4 bg-slate-950/90 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <Compass className="w-4 h-4 text-amber-400" />
                <span>지도의 마커를 클릭하여 해당 지역의 현황을 확인하세요.</span>
              </div>
              <div className="flex items-center gap-4 text-[11px]">
                <span className="text-emerald-400">왕국수도 &amp; 마법 학교 (확인 완료)</span>
                <span>·</span>
                <span className="text-slate-500">??? (미탐험 지역)</span>
              </div>
            </div>
          </div>

          {/* Right Column: Selected Region Dossier */}
          <div className="lg:col-span-5 bg-slate-900/60 border border-amber-900/40 rounded-2xl p-6 sm:p-7 flex flex-col justify-between">
            <div>
              {/* Status Header */}
              <div className="flex items-center justify-between text-xs text-slate-400 mb-3">
                <span className={`font-semibold ${selectedRegion.isExplored ? 'text-emerald-400' : 'text-amber-400/80 font-mono'}`}>
                  {selectedRegion.isExplored ? '탐험 완료 지역' : '미탐험 미지 지역'}
                </span>
                <span className="font-mono text-slate-400">
                  위험도: {selectedRegion.dangerLevel}
                </span>
              </div>

              {/* Title (Simplified to: 왕국수도, 마법 학교, 던전, 깊은 숲, 고대 유적, 마왕성) */}
              <h3 className="text-2xl sm:text-3xl font-bold text-white font-cinzel mb-1">
                {selectedRegion.name}
              </h3>
              <p className="text-xs text-slate-400 mb-6 font-mono">
                {selectedRegion.subtitle}
              </p>

              {/* Description */}
              <div className={`p-4 rounded-xl border mb-6 ${
                selectedRegion.isExplored 
                  ? 'bg-slate-950/80 border-slate-800 text-slate-300' 
                  : 'bg-amber-950/10 border-amber-900/30 text-amber-200/90'
              }`}>
                <p className="text-xs sm:text-sm leading-relaxed">
                  {selectedRegion.description}
                </p>
              </div>

              {/* Details if Explored vs Hidden if Unexplored */}
              {selectedRegion.isExplored ? (
                <div className="space-y-4 text-xs text-slate-300">
                  <div>
                    <strong className="text-white block mb-1.5 font-medium">
                      확인된 주요 시설 및 거점:
                    </strong>
                    <ul className="space-y-1 text-slate-400">
                      {selectedRegion.keyLocations.map((loc, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <span className="text-amber-400">✦</span>
                          <span>{loc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <strong className="text-white block mb-1.5 font-medium">
                      접촉 가능한 세력:
                    </strong>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedRegion.encounters.map((enc, idx) => (
                        <span key={idx} className="text-[11px] text-slate-300 bg-slate-950 px-2 py-0.5 rounded border border-slate-800">
                          {enc}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="space-y-3 p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 text-xs text-slate-400">
                  <div className="flex items-center gap-2 text-amber-400/90 font-medium">
                    <AlertTriangle className="w-4 h-4" />
                    <span>정보 미확인 (Locked)</span>
                  </div>
                  <p className="leading-relaxed">
                    토벌대가 해당 지역으로 진출하여 정찰을 완료하기 전까지는 내부 지형, 마물 분포, 고대 마법 결계의 종류를 파악할 수 없습니다.
                  </p>
                </div>
              )}
            </div>

            {/* Bottom Note */}
            <div className="mt-6 pt-4 border-t border-slate-800/80 text-xs text-slate-500">
              {selectedRegion.isExplored ? (
                <span>비고: {selectedRegion.loreNote}</span>
              ) : (
                <span className="font-mono text-amber-400/80">STATUS: UNCHARTED REGION</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
