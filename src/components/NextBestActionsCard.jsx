import React from 'react';
import { Zap, HelpCircle, ArrowRight, Check, Send, UserPlus, Play, UserCheck } from 'lucide-react';

export default function NextBestActionsCard({ 
  actions, 
  onExecuteAction, 
  onWhyTheseClick, 
  executedActionIds = [],
  activeTraceInsightId 
}) {
  
  const getActionIcon = (type) => {
    switch (type) {
      case 'send_offer': return Send;
      case 'add_campaign': return UserPlus;
      case 'trigger_journey': return Play;
      case 'assign_agent': return UserCheck;
      default: return Zap;
    }
  };

  return (
    <div className="bg-white rounded-2xl border border-indigo-200/90 shadow-sm p-4 space-y-3 relative overflow-hidden">
      {/* Top Banner accent */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-500" />

      {/* Header with Title + "Why these?" Link */}
      <div className="flex items-center justify-between border-b border-slate-100 pb-2.5">
        <div className="flex items-center space-x-2">
          <div className="w-7 h-7 rounded-lg ada-gradient-bg flex items-center justify-center text-white shadow-xs">
            <Zap className="w-3.5 h-3.5 text-white" />
          </div>
          <div>
            <div className="flex items-center space-x-1.5">
              <h2 className="text-sm font-extrabold text-slate-900 tracking-tight">
                Next Best Actions
              </h2>
              <span className="px-1.5 py-0.2 text-[10px] font-bold bg-emerald-100 text-emerald-800 rounded-full border border-emerald-300">
                4 Direct CTAs
              </span>
            </div>
            <p className="text-[11px] text-slate-500">Autonomous CX activation paired to AI insights</p>
          </div>
        </div>

        {/* Why these? Link */}
        <button 
          onClick={onWhyTheseClick}
          className="text-[11px] font-bold text-indigo-600 hover:text-indigo-800 flex items-center space-x-1 px-2 py-0.5 bg-indigo-50 border border-indigo-200 rounded-lg transition-colors"
        >
          <HelpCircle className="w-3 h-3" />
          <span>Why these?</span>
        </button>
      </div>

      {/* Action Items List */}
      <div className="space-y-2.5 pt-0.5">
        {actions.map((act) => {
          const Icon = getActionIcon(act.actionType);
          const isExecuted = executedActionIds.includes(act.id);
          const isMatchedToTrace = activeTraceInsightId && act.insightId === activeTraceInsightId;

          return (
            <div 
              key={act.id}
              className={`p-3 rounded-xl border transition-all flex items-center justify-between gap-3 ${
                isExecuted 
                  ? 'bg-emerald-50/60 border-emerald-200' 
                  : isMatchedToTrace
                    ? 'bg-indigo-50 border-indigo-400 ring-2 ring-indigo-500/20 shadow-sm'
                    : 'bg-white hover:bg-slate-50/80 border-slate-200/90 shadow-2xs hover:border-indigo-300'
              }`}
            >
              {/* Left Action details */}
              <div className="flex items-start space-x-2.5 flex-1 min-w-0">
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5 ${
                  isExecuted 
                    ? 'bg-emerald-500 text-white' 
                    : isMatchedToTrace 
                      ? 'bg-indigo-600 text-white' 
                      : 'bg-indigo-50 border border-indigo-100 text-indigo-600'
                }`}>
                  {isExecuted ? <Check className="w-4 h-4" /> : <Icon className="w-3.5 h-3.5" />}
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex items-center space-x-2 flex-wrap">
                    <h3 className={`text-xs font-bold ${isExecuted ? 'text-emerald-900 line-through' : 'text-slate-900'}`}>
                      {act.title}
                    </h3>
                    <span className="text-[10px] font-semibold px-1.5 py-0.2 bg-slate-100 text-slate-700 rounded border border-slate-200">
                      {act.confidence}% match
                    </span>
                  </div>

                  <p className="text-xs text-slate-600 mt-0.5 truncate">
                    <span className="font-semibold text-slate-700">WHY:</span> {act.reason}
                  </p>
                </div>
              </div>

              {/* Right Execution CTA button */}
              <div className="shrink-0">
                {isExecuted ? (
                  <span className="px-2.5 py-1 bg-emerald-100 text-emerald-800 rounded-lg text-[11px] font-bold flex items-center space-x-1">
                    <Check className="w-3 h-3 mr-0.5" />
                    <span>Activated</span>
                  </span>
                ) : (
                  <button
                    onClick={() => onExecuteAction(act)}
                    className="px-3 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-xs font-bold flex items-center space-x-1 shadow-xs hover:shadow transition-all group"
                  >
                    <span>{act.ctaText}</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
