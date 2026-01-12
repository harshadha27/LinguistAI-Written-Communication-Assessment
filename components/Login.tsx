
import React, { useState } from 'react';
import { User } from '../types';

interface LoginProps {
  onLogin: (user: User) => void;
}

export const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [studentId, setStudentId] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!studentId.trim()) return;

    setIsLoading(true);
    // Simulate API call delay
    setTimeout(() => {
      onLogin({
        id: studentId,
        name: `Student ${studentId}`,
        email: `${studentId.toLowerCase()}@university.edu`,
      });
      setIsLoading(false);
    }, 800);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-950 via-slate-900 to-indigo-900 px-4">
      <div className="max-w-md w-full animate-in fade-in zoom-in duration-500">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-white/10">
          <div className="bg-indigo-600 p-8 text-center text-white">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-2xl mb-4 backdrop-blur-sm">
              <i className="fa-solid fa-feather-pointed text-3xl"></i>
            </div>
            <h1 className="text-3xl font-black tracking-tight">LinguistAI</h1>
            <p className="text-indigo-100 text-sm mt-1">Student Portal • Verification required</p>
          </div>
          
          <div className="p-8">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase mb-2 ml-1">Student Identification Number</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                    <i className="fa-solid fa-id-card"></i>
                  </span>
                  <input 
                    type="text"
                    required
                    value={studentId}
                    onChange={(e) => setStudentId(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 focus:outline-none transition-all placeholder:text-slate-300 font-medium"
                    placeholder="e.g., STU-99421"
                  />
                </div>
              </div>

              <button 
                type="submit"
                disabled={isLoading || !studentId}
                className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 disabled:bg-slate-300 text-white rounded-xl font-bold text-lg shadow-lg shadow-indigo-100 transition-all flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  <i className="fa-solid fa-circle-notch animate-spin"></i>
                ) : (
                  <>
                    <i className="fa-solid fa-right-to-bracket"></i>
                    Verify & Enter
                  </>
                )}
              </button>
            </form>

            <div className="mt-8 flex items-center gap-4">
              <div className="h-[1px] flex-1 bg-slate-100"></div>
              <span className="text-xs font-bold text-slate-300 uppercase">Or continue with</span>
              <div className="h-[1px] flex-1 bg-slate-100"></div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4">
              <button className="flex items-center justify-center gap-2 py-3 px-4 border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors font-semibold text-slate-600 text-sm">
                <i className="fa-brands fa-google text-rose-500"></i> Google
              </button>
              <button className="flex items-center justify-center gap-2 py-3 px-4 border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors font-semibold text-slate-600 text-sm">
                <i className="fa-brands fa-microsoft text-blue-500"></i> MS Office
              </button>
            </div>
          </div>

          <div className="bg-slate-50 p-4 text-center border-t border-slate-100">
            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Secure Academic Environment</p>
          </div>
        </div>
        
        <p className="mt-6 text-center text-slate-400 text-sm font-medium">
          New student? <a href="#" className="text-indigo-400 hover:underline">Contact your administrator</a>
        </p>
      </div>
    </div>
  );
};
