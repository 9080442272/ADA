import React from 'react';
import { X, Sparkles, CheckCircle2, TrendingUp, Cpu, Database, Activity, ArrowRight } from 'lucide-react';

export default function InsightDetailDrawer({ insight, isOpen, onClose, onExecuteRelatedAction }) {
  if (!isOpen || !insight) return null;

  const details = insight.details || {
    predictiveModel: "Automotive Purchase Intent V4.2",
    dataPoints: 18,
    timeframe: "Last 48 Hours",
    impactScore: "High (92% conversion likelihood)"
  };

  return (
    <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-xs z-50 flex justify-end">
      <div className="bg-white w-full max-w-md h-full shadow-2xl border-l border-slate-200 flex flex-col animate-in slide-in-from-right duration-200">
        
        {/* Drawer Header */}
        <div className="h-16 px-6 bg-slate-900 text-white flex items-center justify-between border-b border-slate-800 shrink-0">
          <div className="flex items-center space-x-2.5">
            <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white">Predictive Insight Deep Dive</h3>
              <p className="text-[11px] text-slate-400">{insight.title}</p>
            </div>
          </div>
          <button onClick={onClose} className="text-slate-400 hover:text-white p-1 rounded-lg">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Body */}
        <div className="p-6 overflow-y-auto space-y-5 text-xs text-slate-700 flex-1">
          
          {/* Hero Banner */}
          <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-900">{insight.title}</span>
              <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold border ${insight.badgeColor || 'bg-indigo-50 text-indigo-700 border-indigo-200'}`}>
                {insight.confidence}% Confidence
              </span>
            </div>
            <p className="text-xs font-semibold text-slate-800 bg-white p-3 rounded-xl border border-slate-200 leading-relaxed shadow-2xs">
              "{insight.headline || insight.explanation || 'High purchase intent detected.'}"
            </p>
          </div>

          {/* Machine Learning Specs */}
          <div className="space-y-2">
            <h4 className="font-bold text-slate-900 uppercase tracking-wider text-[11px] flex items-center space-x-1.5">
              <Cpu className="w-3.5 h-3.5 text-indigo-600" />
              <span>Predictive Model Specifications</span>
            </h4>
            
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 space-y-2 font-mono text-[11px]">
              <div className="flex justify-between border-b border-slate-200/60 pb-1.5">
                <span className="text-slate-500">Model Name:</span>
                <span className="font-bold text-slate-800">{details.predictiveModel}</span>
              </div>
              <div className="flex justify-between border-b border-slate-200/60 pb-1.5">
                <span className="text-slate-500">Evaluated Data Points:</span>
                <span className="font-bold text-slate-800">{details.dataPoints} Events</span>
              </div>
              <div className="flex justify-between border-b border-slate-200/60 pb-1.5">
                <span className="text-slate-500">Observation Window:</span>
                <span className="font-bold text-slate-800">{details.timeframe}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Business Impact:</span>
                <span className="font-bold text-emerald-600">{details.impactScore}</span>
              </div>
            </div>
          </div>

          {/* Supporting Evidence Stream */}
          <div className="space-y-2">
            <h4 className="font-bold text-slate-900 uppercase tracking-wider text-[11px] flex items-center space-x-1.5">
              <Activity className="w-3.5 h-3.5 text-indigo-600" />
              <span>Supporting Customer Evidence</span>
            </h4>
            <div className="p-3 bg-indigo-50/60 border border-indigo-100 rounded-xl text-xs text-indigo-950 leading-relaxed font-medium">
              {insight.behavior || "Viewed pricing page 4x in 48 hours and used EMI calculator."}
            </div>
          </div>

          {/* Recommended Activation */}
          <div className="p-4 bg-slate-900 text-white rounded-2xl space-y-2">
            <div className="text-[11px] font-bold text-indigo-300 uppercase tracking-wider">
              Connected Recommended Action
            </div>
            <div className="text-xs text-slate-200">
              Activating this insight triggers immediate omnichannel personalization on WhatsApp & Web.
            </div>
            <button 
              onClick={() => {
                onClose();
                onExecuteRelatedAction && onExecuteRelatedAction(insight.id);
              }}
              className="w-full mt-2 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs rounded-xl shadow-md flex items-center justify-center space-x-2 transition-colors"
            >
              <span>Take Recommended Action Now</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* Drawer Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex justify-end shrink-0">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-slate-600 bg-white border border-slate-300 rounded-xl"
          >
            Close Deep Dive
          </button>
        </div>

      </div>
    </div>
  );
}
