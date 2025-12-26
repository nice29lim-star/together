
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import { PageId, ProjectData } from '../types';
import { submitToGas } from '../services/gasService';

const NewProject: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<ProjectData>({
    schoolName: '',
    projectName: '',
    expectedRevenue: 0
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'expectedRevenue' ? Number(value) : value
    }));
  };

  const handleSave = async () => {
    if (!formData.schoolName || !formData.projectName) {
      alert('필수 정보를 입력해주세요.');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    const success = await submitToGas(formData);
    
    setIsSubmitting(false);
    if (success) {
      setSubmitStatus('success');
      alert('기록되었습니다!');
      // Optional: navigate back after success
      // navigate('/projects');
    } else {
      setSubmitStatus('error');
      alert('저장 중 오류가 발생했습니다.');
    }
  };

  return (
    <div className="flex h-screen w-full overflow-hidden bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100">
      <Sidebar activePage={PageId.Projects} />
      <main className="flex-1 flex flex-col md:ml-64 h-full overflow-hidden relative">
        <header className="flex-shrink-0 px-8 py-6 bg-white dark:bg-[#1a2632] border-b border-slate-200 dark:border-slate-800">
          <div className="max-w-5xl mx-auto w-full">
            <div className="flex items-center gap-2 mb-4 text-sm">
              <Link to="/projects" className="text-slate-500 hover:text-primary transition-colors font-medium">프로젝트 관리</Link>
              <span className="text-slate-400 text-xs material-symbols-outlined">chevron_right</span>
              <span className="text-slate-900 dark:text-white font-medium">새 프로젝트</span>
            </div>
            <div className="flex justify-between items-end">
              <div className="flex flex-col gap-1">
                <h1 className="text-slate-900 dark:text-white text-3xl font-bold tracking-tight">새 프로젝트 생성</h1>
                <p className="text-slate-500 dark:text-slate-400 text-base">새로운 교육 프로젝트의 정보를 입력하고 관리합니다.</p>
              </div>
              <div className="flex gap-3">
                <button 
                  onClick={() => navigate(-1)} 
                  className="px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 font-medium text-sm bg-white dark:bg-transparent hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                >
                  취소
                </button>
                <button 
                  onClick={handleSave}
                  disabled={isSubmitting}
                  className={`px-6 py-2 rounded-lg bg-primary text-white font-medium text-sm shadow-sm hover:bg-blue-600 transition-colors flex items-center gap-2 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  <span className="material-symbols-outlined text-[18px]">
                    {isSubmitting ? 'sync' : 'save'}
                  </span> 
                  {isSubmitting ? '저장 중...' : '저장하기'}
                </button>
              </div>
            </div>
          </div>
        </header>
        <div className="flex-1 overflow-y-auto p-8 scroll-smooth">
          <div className="max-w-5xl mx-auto flex flex-col gap-8 pb-20">
            <section className="bg-white dark:bg-[#1a2632] rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden">
              <div className="px-6 py-4 border-b border-slate-100 dark:border-slate-800 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">info</span>
                <h3 className="text-slate-900 dark:text-white text-lg font-bold">기본 정보</h3>
              </div>
              <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                <label className="flex flex-col gap-2">
                  <span className="text-slate-700 dark:text-slate-300 text-sm font-medium">학교명 <span className="text-red-500">*</span></span>
                  <input 
                    name="schoolName"
                    value={formData.schoolName}
                    onChange={handleInputChange}
                    className="w-full pl-4 pr-4 py-2.5 bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all" 
                    placeholder="학교 이름을 입력하세요" 
                    type="text"
                  />
                </label>
                <label className="flex flex-col gap-2">
                  <span className="text-slate-700 dark:text-slate-300 text-sm font-medium">프로그램명 <span className="text-red-500">*</span></span>
                  <input 
                    name="projectName"
                    value={formData.projectName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all" 
                    placeholder="프로그램 이름을 입력하세요" 
                    type="text"
                  />
                </label>
              </div>
            </section>
            <section className="bg-white dark:bg-[#1a2632] rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden">
              <div className="px-6 py-4 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2"><span className="material-symbols-outlined text-primary">attach_money</span><h3 className="text-slate-900 dark:text-white text-lg font-bold">재무 정보</h3></div>
              </div>
              <div className="p-6">
                <div className="flex flex-col lg:flex-row gap-8">
                  <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <label className="flex flex-col gap-2 sm:col-span-2">
                      <span className="text-slate-700 dark:text-slate-300 text-sm font-medium">예상 총 수익 (KRW)</span>
                      <input 
                        name="expectedRevenue"
                        value={formData.expectedRevenue}
                        onChange={handleInputChange}
                        className="w-full pl-4 pr-4 py-2.5 bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary text-right font-mono" 
                        type="number" 
                      />
                    </label>
                  </div>
                  <div className="w-full lg:w-72 flex-shrink-0 bg-slate-50 dark:bg-slate-800 rounded-xl p-5 border border-slate-200 dark:border-slate-700 flex flex-col justify-center gap-4">
                    <div className="flex flex-col gap-1">
                      <span className="text-slate-500 dark:text-slate-400 text-xs font-semibold uppercase tracking-wider">예상 수익</span>
                      <div className="text-2xl font-black text-primary font-mono tracking-tight">
                        ₩ {formData.expectedRevenue.toLocaleString()}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default NewProject;
