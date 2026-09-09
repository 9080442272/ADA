import React from 'react';
import { Sparkles, ArrowRight, CheckCircle2, TrendingUp, Search, Eye } from 'lucide-react';

export default function AIInsightsCard({ insights, onViewDetails, activeTraceInsightId, onTraceInsight }) {
  return (
    <div className="bg-white rounded-2xl border border-indigo-200/90 shadow-sm p-4 space-y-3 relative overflow-hidden">
      {/* Decorative top accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 ada-gradient-bg" />

      {/* Card Header */}
      <div className="flex items-center justify-between border-b border-slate-100 pb-2.5">
        <div className="flex items-center space-x-2">
          <div className="w-7 h-7 rounded-lg bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
          </div>
          <div>
            <h2 className="text-sm font-extrabold text-slate-900 tracking-tight flex items-center gap-2">
              <span>AI Predictive Insights</span>
              <span className="px-2 py-0.2 text-[10px] font-bold bg-indigo-100 text-indigo-800 rounded-full border border-indigo-200">
                ADA Copilot ML 4.2
              </span>
            </h2>
            <p className="text-[11px] text-slate-500">Synthesized real-time from 84 cross-channel customer behavioral signals</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-1 text-[11px] text-indigo-700 font-semibold bg-indigo-50 px-2.5 py-1 rounded-lg border border-indigo-100">
          <TrendingUp className="w-3 h-3 text-indigo-600 mr-0.5" />
          <span>Real-time Attribution</span>
        </div>
      </div>

      {/* Insights Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
        {insights.map((insight) => {
          const isTraced = activeTraceInsightId === insight.id;

          return (
            <div 
              key={insight.id}
              className={`p-3.5 rounded-xl border transition-all flex flex-col justify-between space-y-2.5 ${
                isTraced 
                  ? 'bg-indigo-50/90 border-indigo-400 ring-2 ring-indigo-500/20 shadow-md' 
                  : 'bg-slate-50/70 hover:bg-slate-50 border-slate-200/90 hover:border-indigo-300'
              }`}
            >
              {/* Top row: Title + Confidence % */}
              <div className="space-y-1.5">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-xs font-bold text-slate-900 flex items-center space-x-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
                    <span>{insight.title}</span>
                  </h3>
                  
                  {/* Confidence Pill */}
                  <div className={`px-2 py-0.2 rounded-full text-[11px] font-extrabold border shrink-0 ${insight.badgeColor}`}>
                    <span>{insight.confidence}% confidence</span>
                  </div>
                </div>

                {/* Progress bar */}
                <div className="w-full h-1.5 bg-slate-200 rounded-full overflow-hidden">
                  <div 
                    className={`h-full rounded-full ${insight.progressColor} transition-all duration-500`}
                    style={{ width: `${insight.confidence}%` }}
                  />
                </div>

                {/* Short explanation quote box */}
                <p className="text-xs font-medium text-slate-800 bg-white p-2 rounded-lg border border-slate-200 shadow-2xs leading-snug">
                  "{insight.explanation}"
                </p>
              </div>

              {/* Supporting Behaviour + Action Footer */}
              <div className="pt-1.5 border-t border-slate-200/60 flex items-center justify-between text-[11px]">
                <div className="text-slate-600 truncate max-w-[170px]" title={insight.behavior}>
                  <span className="font-semibold text-slate-700">Evidence:</span> {insight.behavior}
                </div>

                <div className="flex items-center space-x-2 shrink-0">
                  {/* Evidence Trace Toggle */}
                  <button 
                    onClick={() => onTraceInsight && onTraceInsight(isTraced ? null : insight.id)}
                    className={`px-2 py-0.5 rounded text-[10px] font-bold border transition-colors flex items-center space-x-1 ${
                      isTraced 
                        ? 'bg-indigo-600 text-white border-indigo-600' 
                        : 'bg-white text-indigo-700 border-indigo-200 hover:bg-indigo-50'
                    }`}
                  >
                    <Search className="w-2.5 h-2.5" />
                    <span>{isTraced ? 'Tracing Evidence...' : 'Trace Lineage'}</span>
                  </button>

                  {/* View Details */}
                  <button 
                    onClick={() => onViewDetails(insight)}
                    className="text-slate-600 font-bold hover:text-indigo-600 flex items-center space-x-0.5 transition-colors"
                  >
                    <span>View details</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>

            </div>
          );
        })}
      </div>
    </div>
  );
}
