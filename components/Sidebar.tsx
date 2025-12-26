
import React from 'react';
import { Link } from 'react-router-dom';
import { PageId } from '../types';

interface SidebarProps {
  activePage: PageId;
}

const Sidebar: React.FC<SidebarProps> = ({ activePage }) => {
  const menuItems = [
    { id: PageId.Dashboard, label: '대시보드', icon: 'dashboard', path: '/' },
    { id: PageId.Projects, label: '프로젝트 목록', icon: 'format_list_bulleted', path: '/projects' },
    { id: PageId.Reports, label: '성과 보고서', icon: 'bar_chart', path: '/reports' },
    { id: PageId.Logs, label: '로그 기록', icon: 'receipt_long', path: '/logs' },
    { id: PageId.Users, label: '사용자 관리', icon: 'group', path: '/users' },
  ];

  return (
    <aside className="hidden w-64 flex-col border-r border-slate-200 bg-white px-4 py-6 dark:border-slate-800 dark:bg-slate-900 md:flex fixed h-full z-10">
      <div className="mb-8 flex flex-col px-2">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-white">
            <span className="material-symbols-outlined">school</span>
          </div>
          <h1 className="text-lg font-bold text-slate-900 dark:text-white">EduTrack</h1>
        </div>
        <p className="mt-1 text-xs font-medium text-slate-500 dark:text-slate-400">Admin Console</p>
      </div>
      <nav className="flex flex-1 flex-col gap-2">
        {menuItems.map(item => (
          <Link 
            key={item.id}
            to={item.path}
            className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-colors ${
              activePage === item.id 
                ? 'bg-primary/10 text-primary' 
                : 'text-slate-600 hover:bg-slate-50 dark:text-slate-300 dark:hover:bg-slate-800'
            }`}
          >
            <span className={`material-symbols-outlined ${activePage === item.id ? 'fill' : ''}`}>{item.icon}</span>
            <span className={`text-sm font-medium ${activePage === item.id ? 'font-bold' : ''}`}>{item.label}</span>
          </Link>
        ))}
      </nav>
      <div className="mt-auto flex flex-col gap-2 border-t border-slate-200 pt-4 dark:border-slate-800">
        <div className="flex items-center gap-3 px-3 py-2">
          <img src="https://picsum.photos/32/32" className="w-8 h-8 rounded-full border border-slate-200" alt="Admin" />
          <div className="flex flex-col">
            <span className="text-xs font-bold text-slate-900 dark:text-white">Admin User</span>
            <span className="text-[10px] text-slate-500">System Admin</span>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
