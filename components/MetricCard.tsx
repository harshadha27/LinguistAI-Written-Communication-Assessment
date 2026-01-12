
import React from 'react';
import { ScoreMetric } from '../types';

interface MetricCardProps {
  metric: ScoreMetric;
  icon?: string;
}

export const MetricCard: React.FC<MetricCardProps> = ({ metric, icon }) => {
  const getScoreColor = (score: number) => {
    if (score >= 80) return 'bg-emerald-500';
    if (score >= 60) return 'bg-amber-500';
    return 'bg-rose-500';
  };

  return (
    <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-2">
        <div className="flex items-center gap-2">
          {icon && <i className={`${icon} text-slate-400`}></i>}
          <h4 className="text-sm font-semibold text-slate-600 uppercase tracking-tight">{metric.label}</h4>
        </div>
        <span className="text-lg font-bold text-slate-800">{metric.score}%</span>
      </div>
      <div className="w-full bg-slate-100 h-2 rounded-full mb-3 overflow-hidden">
        <div 
          className={`h-full rounded-full transition-all duration-1000 ${getScoreColor(metric.score)}`} 
          style={{ width: `${metric.score}%` }}
        ></div>
      </div>
      <p className="text-xs text-slate-500 leading-relaxed italic">
        {metric.feedback}
      </p>
    </div>
  );
};
