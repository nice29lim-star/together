
import React from 'react';
import { Link } from 'react-router-dom';

const UserManagement: React.FC = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark text-text-main font-display antialiased min-h-screen flex flex-col">
      <header className="sticky top-0 z-50 w-full bg-surface-light dark:bg-surface-dark border-b border-border-color shadow-sm">
        <div className="max-w-[1440px] mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link to="/" className="w-8 h-8 flex items-center justify-center bg-primary rounded-lg text-white">
              <span className="material-symbols-outlined icon-filled">grid_view</span>
            </Link>
            <h1 className="text-text-main dark:text-white text-lg font-bold tracking-tight">프로젝트 관리자</h1>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-text-secondary hover:text-primary transition-colors text-sm font-medium">대시보드</Link>
            <Link to="/projects" className="text-text-secondary hover:text-primary transition-colors text-sm font-medium">프로젝트</Link>
            <Link to="/users" className="text-primary text-sm font-bold">사용자 관리</Link>
          </nav>
          <div className="flex items-center gap-4">
            <div className="text-right hidden sm:block">
              <p className="text-sm font-bold text-text-main dark:text-white leading-none">김관리</p>
              <p className="text-xs text-text-secondary mt-1 leading-none">시스템 관리자</p>
            </div>
          </div>
        </div>
      </header>
      <main className="flex-1 w-full max-w-[1200px] mx-auto px-4 md:px-6 py-8">
        <div className="flex items-center gap-2 text-sm text-text-secondary mb-6">
          <Link to="/" className="hover:text-primary hover:underline">홈</Link>
          <span className="material-symbols-outlined text-[16px]">chevron_right</span>
          <span className="font-medium text-text-main dark:text-white">사용자 관리</span>
        </div>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <h2 className="text-3xl font-bold text-text-main dark:text-white tracking-tight mb-2">사용자 관리</h2>
            <p className="text-text-secondary">시스템 접근 권한 및 역할을 관리하고 사용자를 모니터링합니다.</p>
          </div>
          <div className="flex gap-3">
            <button className="flex items-center justify-center gap-2 h-10 px-4 rounded-lg border border-border-color bg-surface-light text-text-main font-medium hover:bg-gray-50 transition-colors">
              <span className="material-symbols-outlined">download</span><span>내보내기</span>
            </button>
            <button className="flex items-center justify-center gap-2 h-10 px-4 rounded-lg bg-primary text-white font-bold hover:bg-primary-dark transition-colors shadow-sm shadow-blue-200">
              <span className="material-symbols-outlined">add</span><span>사용자 추가</span>
            </button>
          </div>
        </div>
        <div className="bg-surface-light dark:bg-surface-dark rounded-xl border border-border-color shadow-sm mb-6">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50/50 border-b border-border-color text-xs uppercase text-text-secondary font-semibold">
                  <th className="p-4">사용자 정보</th><th className="p-4">역할</th><th className="p-4">소속</th><th className="p-4">상태</th><th className="p-4 text-right">관리</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border-color">
                <tr className="hover:bg-gray-50/50 transition-colors group">
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-primary font-bold text-sm">KC</div>
                      <div>
                        <p className="font-bold text-text-main text-sm">김철수</p>
                        <p className="text-xs text-text-secondary">chulsoo.kim@example.com</p>
                      </div>
                    </div>
                  </td>
                  <td className="p-4"><span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">최고 관리자</span></td>
                  <td className="p-4 text-sm text-text-main">운영팀</td>
                  <td className="p-4"><span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-700"><span className="w-1.5 h-1.5 rounded-full bg-green-500"></span> 활성</span></td>
                  <td className="p-4 text-right"><button className="p-1.5 rounded hover:bg-gray-100 text-text-secondary hover:text-primary transition-colors"><span className="material-symbols-outlined text-[20px]">edit</span></button></td>
                </tr>
                <tr className="hover:bg-gray-50/50 transition-colors group">
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 font-bold text-sm">PJ</div>
                      <div>
                        <p className="font-bold text-text-main text-sm">박지성</p>
                        <p className="text-xs text-text-secondary">js.park@example.com</p>
                      </div>
                    </div>
                  </td>
                  <td className="p-4"><span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">일반 사용자</span></td>
                  <td className="p-4 text-sm text-text-main">개발팀</td>
                  <td className="p-4"><span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-600"><span className="w-1.5 h-1.5 rounded-full bg-gray-400"></span> 비활성</span></td>
                  <td className="p-4 text-right"><button className="p-1.5 rounded hover:bg-gray-100 text-text-secondary hover:text-primary transition-colors"><span className="material-symbols-outlined text-[20px]">edit</span></button></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
};

export default UserManagement;
