
import React from 'react';
import { DetectionResult } from '../types';

interface DetectionModuleProps {
  detection: DetectionResult;
}

export const DetectionModule: React.FC<DetectionModuleProps> = ({ detection }) => {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 mt-8">
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <div className="flex-1 text-center md:text-left">
          <h3 className="text-2xl font-bold text-slate-800 mb-2">AI vs Human Detection</h3>
          <p className="text-slate-500 mb-6">{detection.reasoning}</p>
          
          <div className="flex items-center gap-4 max-w-md">
            <div className="flex-1">
              <div className="flex justify-between text-xs font-bold text-slate-400 uppercase mb-1">
                <span>Human</span>
                <span>{detection.humanProbability}%</span>
              </div>
              <div className="w-full h-4 bg-slate-100 rounded-full overflow-hidden flex">
                <div 
                  className="bg-emerald-400 h-full" 
                  style={{ width: `${detection.humanProbability}%` }}
                ></div>
                <div 
                  className="bg-rose-400 h-full" 
                  style={{ width: `${detection.aiProbability}%` }}
                ></div>
              </div>
              <div className="flex justify-between text-xs font-bold text-slate-400 uppercase mt-1">
                <span>AI</span>
                <span>{detection.aiProbability}%</span>
              </div>
            </div>
          </div>
        </div>

        <div className="w-48 h-48 flex items-center justify-center relative">
          <svg className="w-full h-full transform -rotate-90">
            <circle
              cx="96"
              cy="96"
              r="80"
              stroke="currentColor"
              strokeWidth="12"
              fill="transparent"
              className="text-slate-100"
            />
            <circle
              cx="96"
              cy="96"
              r="80"
              stroke="currentColor"
              strokeWidth="12"
              fill="transparent"
              strokeDasharray={502.4}
              strokeDashoffset={502.4 - (502.4 * detection.humanProbability) / 100}
              className={`${detection.humanProbability > 70 ? 'text-emerald-500' : 'text-amber-500'}`}
              strokeLinecap="round"
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-3xl font-black text-slate-800">{detection.humanProbability}%</span>
            <span className="text-[10px] font-bold text-slate-400 uppercase">Human Likelihood</span>
          </div>
        </div>
      </div>
    </div>
  );
};
