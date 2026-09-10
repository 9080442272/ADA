import React from 'react';
import { X, HelpCircle, Brain, CheckCircle, ShieldCheck, Zap, ArrowRight, MessageSquare, Globe, Smartphone } from 'lucide-react';

export default function WhyTheseModal({ isOpen, onClose, customer }) {
  if (!isOpen) return null;

  const { primaryInsight, primaryAction, supportingEvidence } = customer;

  return (
    <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-xl w-full shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in zoom-in-95 duration-150 flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="h-16 px-6 bg-slate-900 text-white flex items-center justify-between border-b border-slate-800 shrink-0">
          <div className="flex items-center space-x-2.5">
            <div className="w-8 h-8 rounded-lg ada-gradient-bg flex items-center justify-center text-white">
              <HelpCircle className="w-4.5 h-4.5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white">Why ADA Recommends This Action</h3>
              <p className="text-[11px] text-slate-400">Explainable recommendation for {customer?.name || "TechGear Europe"}</p>
            </div>
          </div>
          <button onClick={onClose} className="text-slate-400 hover:text-white p-1 rounded-lg">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 overflow-y-auto space-y-5 text-xs text-slate-700">
          
          {/* STEP 1: RECOMMENDATION */}
          <div className="p-4 bg-indigo-900 text-white rounded-2xl space-y-1.5 shadow-md">
            <div className="text-[10px] font-bold text-indigo-300 uppercase tracking-wider">
              Recommended Action ({primaryAction.confidence}% Match)
            </div>
            <div className="text-base font-extrabold text-white">{primaryAction.title}</div>
            <div className="text-xs text-indigo-200">
              Target Channel: {primaryAction.payload.channel} • {primaryAction.payload.benefit}
            </div>
          </div>

          {/* STEP 2: AI REASONING */}
          <div className="p-4 bg-indigo-50 border border-indigo-100 rounded-2xl space-y-1.5">
            <div className="text-[10px] font-bold text-indigo-800 uppercase tracking-wider flex items-center space-x-1">
              <Brain className="w-3.5 h-3.5 text-indigo-600" />
              <span>ADA AI Reasoning</span>
            </div>
            <p className="text-xs font-semibold text-indigo-950 leading-relaxed">
              "{primaryAction.whyThisAction}"
            </p>
          </div>

          {/* STEP 3: SUPPORTING CUSTOMER SIGNALS */}
          <div className="space-y-2">
            <h4 className="font-bold text-slate-900 uppercase tracking-wider text-[11px]">
              Supporting Customer Signals:
            </h4>
            <div className="space-y-1.5">
              {primaryInsight.whyAdaThinksThis.map((sig, idx) => (
                <div key={idx} className="p-2.5 bg-slate-50 border border-slate-200 rounded-xl flex items-center space-x-2">
                  <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-[11px] shrink-0">
                    ✓
                  </span>
                  <span className="font-semibold text-slate-800">{sig}</span>
                </div>
              ))}
            </div>
          </div>

          {/* STEP 4: COMPLIANCE & SAFETY */}
          <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-[11px] text-emerald-800 flex items-center space-x-2">
            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>DPDP 2023 verified. Frequency capping rule enforced (max 1 WhatsApp promo per 72h).</span>
          </div>

        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex justify-end shrink-0">
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 rounded-xl transition-colors"
          >
            Got it, thanks
          </button>
        </div>

      </div>
    </div>
  );
}
