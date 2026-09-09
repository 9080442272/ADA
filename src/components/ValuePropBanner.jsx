import React from 'react';
import { Database, Brain, Zap, ArrowRight, Megaphone, FileCheck } from 'lucide-react';

export default function ValuePropBanner() {
  return (
    <div className="mt-8 bg-slate-900 text-white rounded-2xl p-6 border border-slate-800 shadow-xl overflow-hidden relative">
      {/* Subtle background glow effect */}
      <div className="absolute -right-12 -bottom-12 w-64 h-64 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -left-12 -top-12 w-64 h-64 bg-purple-600/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
        
        {/* Left tagline */}
        <div className="space-y-1">
          <div className="flex items-center space-x-2">
            <span className="px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 rounded-full">
              Boostmyshop B2B Marketing Paradigm
            </span>
          </div>
          <h3 className="text-xl font-bold tracking-tight text-white">
            From Account Signals to Growth, Faster.
          </h3>
          <p className="text-xs text-slate-400">
            ADA helps marketers understand what the account is likely to do next — and gives them the next marketing action immediately.
          </p>
        </div>

        {/* Dynamic Workflow Process Stepper */}
        <div className="flex items-center space-x-2 text-xs font-semibold overflow-x-auto py-1">
          
          {/* Step 1: ACCOUNT DATA */}
          <div className="flex items-center space-x-2 px-3 py-2 bg-slate-800/90 border border-slate-700/80 rounded-xl shadow-xs">
            <Database className="w-4 h-4 text-indigo-400" />
            <span className="text-slate-200">Account Data</span>
          </div>

          <ArrowRight className="w-4 h-4 text-indigo-400 shrink-0" />

          {/* Step 2: INSIGHT */}
          <div className="flex items-center space-x-2 px-3 py-2 bg-indigo-950/90 border border-indigo-700/80 rounded-xl shadow-xs">
            <Brain className="w-4 h-4 text-indigo-300" />
            <span className="text-indigo-200">AI Insight</span>
          </div>

          <ArrowRight className="w-4 h-4 text-purple-400 shrink-0" />

          {/* Step 3: EVIDENCE */}
          <div className="flex items-center space-x-2 px-3 py-2 bg-purple-950/90 border border-purple-700/80 rounded-xl shadow-xs">
            <FileCheck className="w-4 h-4 text-purple-300" />
            <span className="text-purple-200">Evidence</span>
          </div>

          <ArrowRight className="w-4 h-4 text-emerald-400 shrink-0" />

          {/* Step 4: CAMPAIGN ACTIVATION */}
          <div className="flex items-center space-x-2 px-3.5 py-2 bg-emerald-950/90 border border-emerald-700/80 rounded-xl shadow-xs text-emerald-200">
            <Megaphone className="w-4 h-4 text-emerald-400" />
            <span>Campaign Activation</span>
          </div>

        </div>

      </div>
    </div>
  );
}
