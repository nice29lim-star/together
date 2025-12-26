
import React from 'react';
import Sidebar from '../components/Sidebar';
import { PageId } from '../types';

const ProjectList: React.FC = () => {
  return (
    <div className="relative flex min-h-screen w-full flex-row overflow-hidden bg-background-light dark:bg-background-dark">
      <Sidebar activePage={PageId.Projects} />
      <main className="flex flex-1 flex-col md:ml-64 w-full h-full overflow-y-auto min-h-screen">
        <div className="flex-1 px-4 py-8 md:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <div className="mb-8">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">프로젝트 목록</h2>
              <p className="mt-2 text-slate-500 dark:text-slate-400">전체 프로젝트 현황을 관리합니다.</p>
            </div>
            <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-slate-200 dark:divide-slate-800">
                  <thead className="bg-slate-50 dark:bg-slate-800/50">
                    <tr>
                      {["학교명", "프로그램명", "상태", "단계", "수익", "비용", "순이익", "이윤율", ""].map((h, i) => (
                        <th key={i} className={`px-6 py-4 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 ${i > 3 ? 'text-right' : 'text-left'}`}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white dark:divide-slate-800 dark:bg-slate-900">
                    <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                      <td className="whitespace-nowrap px-6 py-4">
                        <div className="flex items-center">
                          <div className="h-10 w-10 flex-shrink-0 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold dark:bg-green-900/30 dark:text-green-400">연</div>
                          <div className="ml-4">
                            <div className="font-medium text-slate-900 dark:text-white">연세대학교</div>
                            <div className="text-xs text-slate-500 dark:text-slate-400">서대문구</div>
                          </div>
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        <div className="text-sm text-slate-900 dark:text-white">글로벌 리더십 캠프</div>
                        <div className="text-xs text-slate-500 dark:text-slate-400">2023 여름방학</div>
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20 dark:bg-green-900/30 dark:text-green-400 dark:ring-green-500/30">완료</span>
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        <div className="flex flex-col gap-1 w-24">
                          <div className="flex justify-between text-xs text-slate-500 dark:text-slate-400"><span>정산</span><span>100%</span></div>
                          <div className="h-1.5 w-full rounded-full bg-slate-100 dark:bg-slate-700 overflow-hidden"><div className="h-full rounded-full bg-green-500" style={{width: '100%'}}></div></div>
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-right text-sm text-slate-600 dark:text-slate-300">₩32,000,000</td>
                      <td className="whitespace-nowrap px-6 py-4 text-right text-sm text-slate-600 dark:text-slate-300">₩18,000,000</td>
                      <td className="whitespace-nowrap px-6 py-4 text-right text-sm font-medium text-slate-900 dark:text-white">₩14,000,000</td>
                      <td className="whitespace-nowrap px-6 py-4 text-right"><span className="inline-flex items-center text-sm font-medium text-green-600 dark:text-green-400">43.7%</span></td>
                      <td className="whitespace-nowrap px-6 py-4 text-right text-sm font-medium"><button className="text-slate-400 hover:text-primary"><span className="material-symbols-outlined">more_vert</span></button></td>
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

export default ProjectList;
