
import React from 'react';
import Sidebar from '../components/Sidebar';
import { PageId } from '../types';

const Logs: React.FC = () => {
  return (
    <div className="flex h-screen w-full overflow-hidden bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100">
      <Sidebar activePage={PageId.Logs} />
      <main className="flex-1 flex flex-col md:ml-64 h-full overflow-hidden relative">
        <div className="flex-1 overflow-y-auto p-4 md:p-8">
          <div className="max-w-[1200px] mx-auto flex flex-col gap-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div className="flex flex-col gap-2">
                <h1 className="text-slate-900 dark:text-white text-3xl md:text-4xl font-black tracking-tight">로그 기록</h1>
                <p className="text-slate-500 dark:text-slate-400 text-base">프로젝트 및 교육 프로그램의 모든 활동 내역을 추적하고 감사합니다.</p>
              </div>
              <button className="flex items-center justify-center gap-2 rounded-lg h-10 px-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-sm font-bold shadow-sm transition-all whitespace-nowrap">
                <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>download</span>
                <span>엑셀로 내보내기</span>
              </button>
            </div>
            <div className="bg-white dark:bg-[#15202b] border border-slate-200 dark:border-slate-800 rounded-xl shadow-sm overflow-hidden flex flex-col flex-1 min-h-[500px]">
              <div className="overflow-x-auto flex-1">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-[#1a2633]">
                      {["로그 ID", "프로젝트", "단계", "작업", "사용자", "메모", "일시"].map((h, i) => (
                        <th key={i} className="py-4 px-6 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 whitespace-nowrap">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                    <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors group">
                      <td className="py-4 px-6 text-sm font-mono text-slate-500 dark:text-slate-400">#L-9382</td>
                      <td className="py-4 px-6 text-sm font-medium text-slate-900 dark:text-white">AI 교육 2024</td>
                      <td className="py-4 px-6 text-sm text-slate-600 dark:text-slate-300">커리큘럼 설계</td>
                      <td className="py-4 px-6"><span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border border-blue-100 dark:border-blue-800"><span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> 생성</span></td>
                      <td className="py-4 px-6 text-sm text-slate-600 dark:text-slate-300">kim@company.com</td>
                      <td className="py-4 px-6 text-sm text-slate-600 dark:text-slate-300 truncate max-w-xs">초기 커리큘럼 초안 작성</td>
                      <td className="py-4 px-6 text-sm font-mono text-slate-500 dark:text-slate-400 text-right">2023-10-27 14:30</td>
                    </tr>
                    <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors group">
                      <td className="py-4 px-6 text-sm font-mono text-slate-500 dark:text-slate-400">#L-9381</td>
                      <td className="py-4 px-6 text-sm font-medium text-slate-900 dark:text-white">웹 부트캠프 3기</td>
                      <td className="py-4 px-6 text-sm text-slate-600 dark:text-slate-300">학생 모집</td>
                      <td className="py-4 px-6"><span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-amber-50 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 border border-amber-100 dark:border-amber-800"><span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span> 수정</span></td>
                      <td className="py-4 px-6 text-sm text-slate-600 dark:text-slate-300">lee@company.com</td>
                      <td className="py-4 px-6 text-sm text-slate-600 dark:text-slate-300 truncate max-w-xs">모집 마감일 변경</td>
                      <td className="py-4 px-6 text-sm font-mono text-slate-500 dark:text-slate-400 text-right">2023-10-27 13:15</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Logs;
