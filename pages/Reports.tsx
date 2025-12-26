
import React from 'react';
import Sidebar from '../components/Sidebar';
import { PageId } from '../types';

const Reports: React.FC = () => {
  return (
    <div className="flex h-screen w-full overflow-hidden bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100">
      <Sidebar activePage={PageId.Reports} />
      <main className="flex-1 flex flex-col md:ml-64 h-full overflow-hidden relative">
        <div className="flex-1 overflow-y-auto p-4 md:p-8">
          <div className="max-w-7xl mx-auto flex flex-col gap-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
              <div className="flex flex-col gap-2">
                <h1 className="text-[#0d141b] dark:text-white text-3xl md:text-4xl font-black leading-tight tracking-[-0.033em]">프로젝트 성과 보고서</h1>
                <p className="text-[#4c739a] dark:text-slate-400 text-base font-normal leading-normal">주요 지표 및 프로젝트 진행 현황을 확인하세요.</p>
              </div>
              <button className="flex items-center justify-center gap-2 bg-primary hover:bg-blue-600 text-white font-bold py-2.5 px-4 rounded-lg text-sm transition-colors shadow-sm h-10 w-full md:w-auto">
                <span className="material-symbols-outlined text-[20px]">download</span><span>보고서 내보내기</span>
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { label: "전체 프로젝트", val: "12", icon: "folder_open", color: "blue", trend: "16%" },
                { label: "평균 진행률", val: "68%", icon: "trending_up", color: "blue", trend: "4%" },
                { label: "이슈 발생", val: "3", icon: "warning", color: "orange", trend: "변동 없음" },
                { label: "교육 수료율", val: "85%", icon: "school", color: "blue", trend: "5%" }
              ].map((k, i) => (
                <div key={i} className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col gap-3">
                  <div className="flex justify-between items-start">
                    <p className="text-[#4c739a] text-sm font-medium">{k.label}</p>
                    <span className={`bg-${k.color}-50 text-${k.color}-500 rounded-full p-1.5`}><span className="material-symbols-outlined text-[20px]">{k.icon}</span></span>
                  </div>
                  <div className="flex items-end gap-2">
                    <h3 className="text-[#0d141b] dark:text-white text-3xl font-bold">{k.val}</h3>
                    <span className="bg-green-50 text-green-700 px-1.5 py-0.5 rounded text-xs font-bold mb-1">{k.trend}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="col-span-1 lg:col-span-2 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-6 shadow-sm">
                <h3 className="text-[#0d141b] dark:text-white text-lg font-bold mb-6">월별 프로젝트 진행 추이</h3>
                <div className="h-64 flex items-end justify-between gap-4 px-2">
                  {[40, 55, 45, 70, 60, 85].map((h, i) => (
                    <div key={i} className="flex flex-col items-center gap-2 w-full h-full justify-end group">
                      <div className={`w-full rounded-t-sm relative transition-all ${i === 5 ? 'bg-primary' : 'bg-blue-100 dark:bg-blue-900'}`} style={{ height: `${h}%` }}></div>
                      <span className="text-xs text-slate-500 font-medium">{i + 7}월</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="col-span-1 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-6 shadow-sm flex flex-col items-center">
                <h3 className="text-[#0d141b] dark:text-white text-lg font-bold mb-6 self-start">프로젝트 상태 분포</h3>
                <div className="relative w-48 h-48 rounded-full" style={{ background: 'conic-gradient(#137fec 0% 65%, #fbbf24 65% 85%, #ef4444 85% 100%)' }}>
                  <div className="absolute inset-4 bg-white dark:bg-slate-800 rounded-full flex flex-col items-center justify-center">
                    <span className="text-3xl font-bold text-slate-800 dark:text-white">12</span>
                    <span className="text-xs text-slate-500">Total</span>
                  </div>
                </div>
                <div className="mt-6 flex flex-col gap-2 w-full">
                  <div className="flex justify-between items-center text-sm"><span className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-primary"></span>진행중</span><span>65%</span></div>
                  <div className="flex justify-between items-center text-sm"><span className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-amber-400"></span>대기</span><span>20%</span></div>
                  <div className="flex justify-between items-center text-sm"><span className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-red-500"></span>지연</span><span>15%</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Reports;
