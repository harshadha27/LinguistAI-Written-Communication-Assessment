
import React from 'react';
import { ComparisonFeedback } from '../types';

interface ComparisonModuleProps {
  comparison: ComparisonFeedback;
}

export const ComparisonModule: React.FC<ComparisonModuleProps> = ({ comparison }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
      <div className="bg-indigo-50 p-6 rounded-2xl border border-indigo-100">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-indigo-600 text-white p-2 rounded-lg">
            <i className="fa-solid fa-robot"></i>
          </div>
          <h3 className="text-xl font-bold text-indigo-900">Gen AI Feedback</h3>
        </div>
        <div className="prose prose-sm prose-indigo text-indigo-800 leading-relaxed">
          {comparison.aiExpertOpinion}
        </div>
      </div>

      <div className="bg-emerald-50 p-6 rounded-2xl border border-emerald-100">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-emerald-600 text-white p-2 rounded-lg">
            <i className="fa-solid fa-user-tie"></i>
          </div>
          <h3 className="text-xl font-bold text-emerald-900">Human Expert Feedback</h3>
        </div>
        <div className="prose prose-sm prose-emerald text-emerald-800 leading-relaxed">
          {comparison.humanExpertOpinion}
        </div>
      </div>
    </div>
  );
};
