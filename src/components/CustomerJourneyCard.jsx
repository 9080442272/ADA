import React from 'react';
import { GitCommit, Edit3, CheckCircle, Clock } from 'lucide-react';

export default function CustomerJourneyCard({ journey, onEditStage }) {
  const { currentStage, stages, description, lastUpdated } = journey;

  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-5 space-y-4 hover:shadow-md transition-shadow">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2.5">
          <div className="w-8 h-8 rounded-xl bg-purple-50 border border-purple-100 flex items-center justify-center text-purple-600 shadow-2xs">
            <GitCommit className="w-4 h-4" />
          </div>
          <div>
            <h2 className="text-sm font-bold text-slate-900 tracking-tight flex items-center space-x-2">
              <span>Customer Journey Milestone</span>
              <span className="px-2 py-0.5 text-[10px] font-bold bg-amber-100 text-amber-800 rounded-full border border-amber-300">
                {currentStage} Stage
              </span>
            </h2>
            <p className="text-xs text-slate-500">{description}</p>
          </div>
        </div>

        {/* Edit stage CTA */}
        <button 
          onClick={onEditStage}
          className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-lg flex items-center space-x-1.5 transition-colors"
        >
          <Edit3 className="w-3.5 h-3.5 text-slate-500" />
          <span>Edit stage</span>
        </button>
      </div>

      {/* Interactive Lifecycle Progress Stepper */}
      <div className="pt-2">
        <div className="grid grid-cols-4 gap-2 relative">
          {stages.map((stageName, idx) => {
            const isCompleted = stages.indexOf(currentStage) > idx;
            const isCurrent = currentStage === stageName;
            const isFuture = stages.indexOf(currentStage) < idx;

            return (
              <div key={stageName} className="flex flex-col items-center text-center relative z-10">
                {/* Node circle */}
                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs transition-all shadow-xs ${
                  isCurrent 
                    ? 'bg-amber-500 text-white ring-4 ring-amber-100 scale-110' 
                    : isCompleted 
                      ? 'bg-emerald-500 text-white' 
                      : 'bg-slate-100 text-slate-400 border border-slate-200'
                }`}>
                  {isCompleted ? <CheckCircle className="w-4 h-4" /> : idx + 1}
                </div>

                {/* Stage Label */}
                <span className={`text-xs mt-2 font-bold ${
                  isCurrent ? 'text-amber-800 font-extrabold' : isCompleted ? 'text-emerald-700 font-semibold' : 'text-slate-400'
                }`}>
                  {stageName}
                </span>

                {/* Subtext indicator */}
                <span className="text-[10px] text-slate-400 mt-0.5">
                  {isCurrent ? 'Active Now' : isCompleted ? 'Passed' : 'Pending'}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Footer Info */}
      <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
        <div className="flex items-center space-x-1">
          <Clock className="w-3.5 h-3.5 text-slate-400" />
          <span>Updated: {lastUpdated}</span>
        </div>
        <span className="text-indigo-600 font-medium">Auto-classified via Cross-Channel Velocity Model</span>
      </div>
    </div>
  );
}
