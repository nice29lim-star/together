
import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import { PageId } from '../types';

const Dashboard: React.FC = () => {
  return (
    <div className="relative flex min-h-screen w-full flex-row overflow-hidden bg-background-light dark:bg-background-dark">
      <Sidebar activePage={PageId.Dashboard} />
      <main className="flex flex-1 flex-col md:ml-64 w-full h-full overflow-y-auto min-h-screen">
        <div className="flex-1 px-4 py-8 md:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl">
            {/* Breadcrumbs */}
            <div className="mb-6 flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
              <span className="hover:text-primary transition-colors cursor-pointer">홈</span>
              <span className="material-symbols-outlined text-[16px]">chevron_right</span>
              <span className="font-medium text-slate-900 dark:text-white">대시보드</span>
            </div>
            {/* Page Heading */}
            <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">프로젝트 대시보드</h2>
                <p className="mt-2 text-slate-500 dark:text-slate-400">주요 지표 및 진행 중인 프로젝트의 재무 현황을 한눈에 확인하세요.</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-slate-500 dark:text-slate-400">최근 업데이트: 2023.10.27 14:00</span>
                <button className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700">
                  <span className="material-symbols-outlined text-[20px]">refresh</span>
                </button>
              </div>
            </div>
            {/* Stats Cards */}
            <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { title: "총 수익", value: "₩120,000,000", change: "12%", icon: "attach_money", color: "text-primary", bg: "bg-blue-50", trend: "text-green-600" },
                { title: "총 비용", value: "₩75,000,000", change: "5%", icon: "account_balance_wallet", color: "text-orange-500", bg: "bg-orange-50", trend: "text-red-600" },
                { title: "순이익", value: "₩45,000,000", change: "15%", icon: "savings", color: "text-green-500", bg: "bg-green-50", trend: "text-green-600" },
                { title: "평균 이윤율", value: "37.5%", change: "2.1%", icon: "pie_chart", color: "text-purple-500", bg: "bg-purple-50", trend: "text-green-600" },
              ].map((stat, idx) => (
                <div key={idx} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-slate-500 dark:text-slate-400">{stat.title}</p>
                    <span className={`material-symbols-outlined ${stat.color} ${stat.bg} dark:bg-slate-800 p-1 rounded`}>{stat.icon}</span>
                  </div>
                  <p className="mt-4 text-2xl font-bold text-slate-900 dark:text-white">{stat.value}</p>
                  <div className={`mt-2 flex items-center gap-1 text-sm ${stat.trend}`}>
                    <span className="material-symbols-outlined text-[16px]">trending_up</span>
                    <span className="font-medium">{stat.change}</span>
                    <span className="text-slate-400 dark:text-slate-500 ml-1">vs 지난달</span>
                  </div>
                </div>
              ))}
            </div>
            {/* Filters and Actions */}
            <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
              <div className="relative w-full max-w-md">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <span className="material-symbols-outlined text-slate-400">search</span>
                </div>
                <input className="block w-full rounded-lg border-0 bg-white py-2.5 pl-10 pr-4 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-primary dark:bg-slate-900 dark:ring-slate-700 dark:text-white sm:text-sm sm:leading-6" placeholder="학교명, 프로그램명으로 검색..." type="text"/>
              </div>
              <Link to="/projects/new" className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-600 transition-colors">
                <span className="material-symbols-outlined text-[20px]">add</span>
                새 프로젝트
              </Link>
            </div>
            {/* Data Table */}
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
                          <div className="h-10 w-10 flex-shrink-0 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold dark:bg-indigo-900/30 dark:text-indigo-400">서</div>
                          <div className="ml-4">
                            <Link to="/projects/1" className="font-medium text-slate-900 dark:text-white hover:underline">서울대학교</Link>
                            <div className="text-xs text-slate-500 dark:text-slate-400">관악구</div>
                          </div>
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        <div className="text-sm text-slate-900 dark:text-white">AI 미래인재 양성과정</div>
                        <div className="text-xs text-slate-500 dark:text-slate-400">2023 가을학기</div>
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10 dark:bg-blue-900/30 dark:text-blue-400 dark:ring-blue-400/30">진행중</span>
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        <div className="flex flex-col gap-1 w-24">
                          <div className="flex justify-between text-xs text-slate-500 dark:text-slate-400"><span>운영</span><span>60%</span></div>
                          <div className="h-1.5 w-full rounded-full bg-slate-100 dark:bg-slate-700 overflow-hidden"><div className="h-full rounded-full bg-primary" style={{width: '60%'}}></div></div>
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-right text-sm text-slate-600 dark:text-slate-300">₩45,000,000</td>
                      <td className="whitespace-nowrap px-6 py-4 text-right text-sm text-slate-600 dark:text-slate-300">₩25,000,000</td>
                      <td className="whitespace-nowrap px-6 py-4 text-right text-sm font-medium text-slate-900 dark:text-white">₩20,000,000</td>
                      <td className="whitespace-nowrap px-6 py-4 text-right"><span className="inline-flex items-center text-sm font-medium text-green-600 dark:text-green-400">44.4%</span></td>
                      <td className="whitespace-nowrap px-6 py-4 text-right text-sm font-medium">
                        <button className="text-slate-400 hover:text-primary dark:text-slate-500 dark:hover:text-white transition-colors"><span className="material-symbols-outlined">more_vert</span></button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <footer className="mt-8 text-center text-sm text-slate-400 dark:text-slate-500">© 2023 EduTrack Systems Inc. All rights reserved.</footer>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
