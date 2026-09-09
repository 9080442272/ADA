import React, { useState } from 'react';
import { 
  Layers, 
  Plus, 
  Search, 
  Filter, 
  Users, 
  Zap, 
  Download, 
  Bot, 
  Megaphone, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight,
  Sliders,
  Activity
} from 'lucide-react';

export default function SegmentsView({ customer, onShowToast }) {
  const [segmentName, setSegmentName] = useState("High Intent — myPricing Prospects");

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      
      {/* Page Header */}
      <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-5 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl font-extrabold text-slate-900 tracking-tight flex items-center space-x-2">
            <Layers className="w-5 h-5 text-indigo-600" />
            <span>Audience Segmentation Builder</span>
            <span className="px-2.5 py-0.5 text-xs font-extrabold bg-emerald-100 text-emerald-800 rounded-full border border-emerald-300">
              Live CDP Targeter
            </span>
          </h1>
          <p className="text-xs text-slate-500 mt-0.5">
            Build dynamic audience rules combining account attributes and behavioral event triggers
          </p>
        </div>

        <div className="flex items-center space-x-2">
          <button 
            onClick={() => onShowToast && onShowToast("Saved segment 'High Intent — myPricing Prospects' to CDP!")}
            className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold text-xs rounded-xl shadow-xs flex items-center space-x-1.5 cursor-pointer"
          >
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Save Segment</span>
          </button>
        </div>
      </div>

      {/* Rule Builder Block */}
      <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-5 space-y-4">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <h2 className="text-xs font-extrabold text-slate-900 uppercase tracking-wider flex items-center space-x-2">
            <Sliders className="w-4 h-4 text-indigo-600" />
            <span>Segment Definition & Boolean Rule Matrix</span>
          </h2>
          <span className="text-xs font-mono font-bold text-indigo-600 bg-indigo-50 px-2.5 py-0.5 rounded-md border border-indigo-200">
            Rule #SEG-9912
          </span>
        </div>

        <div className="space-y-3 bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs">
          {/* Condition 1 */}
          <div className="flex items-center space-x-3 bg-white p-3 rounded-lg border border-slate-200 shadow-2xs">
            <span className="px-2 py-0.5 bg-slate-900 text-white text-[10px] font-extrabold rounded">WHERE</span>
            <span className="font-bold text-slate-700">Attribute:</span>
            <span className="font-mono text-indigo-600 font-bold">Company Size</span>
            <span className="text-slate-400 font-bold">=</span>
            <span className="px-2.5 py-1 bg-slate-100 font-bold text-slate-900 rounded-md border border-slate-200">50–200 employees</span>
          </div>

          {/* Operator */}
          <div className="pl-4">
            <span className="px-2.5 py-0.5 bg-indigo-600 text-white text-[10px] font-extrabold rounded">AND</span>
          </div>

          {/* Condition 2 */}
          <div className="flex items-center space-x-3 bg-white p-3 rounded-lg border border-slate-200 shadow-2xs">
            <span className="px-2 py-0.5 bg-slate-900 text-white text-[10px] font-extrabold rounded">WHERE</span>
            <span className="font-bold text-slate-700">Attribute:</span>
            <span className="font-mono text-indigo-600 font-bold">myPricing Interest</span>
            <span className="text-slate-400 font-bold">=</span>
            <span className="px-2.5 py-1 bg-emerald-100 text-emerald-800 font-bold rounded-md border border-emerald-300">High Intent</span>
          </div>

          {/* Operator */}
          <div className="pl-4">
            <span className="px-2.5 py-0.5 bg-indigo-600 text-white text-[10px] font-extrabold rounded">AND</span>
          </div>

          {/* Condition 3 */}
          <div className="flex items-center space-x-3 bg-white p-3 rounded-lg border border-slate-200 shadow-2xs">
            <span className="px-2 py-0.5 bg-slate-900 text-white text-[10px] font-extrabold rounded">EVENT</span>
            <span className="font-bold text-slate-700">Behaviour:</span>
            <span className="font-mono text-indigo-600 font-bold">Viewed myPricing Page</span>
            <span className="text-slate-400 font-bold">≥</span>
            <span className="px-2.5 py-1 bg-slate-100 font-bold text-slate-900 rounded-md border border-slate-200">3 times in 7 days</span>
          </div>
        </div>
      </div>

      {/* Audience Preview & Activation Bar */}
      <div className="bg-slate-900 text-white rounded-2xl p-5 shadow-xl border border-slate-800 space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-3">
          <div>
            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Estimated Targeted Audience</div>
            <div className="text-2xl font-extrabold text-white mt-0.5 flex items-center space-x-2">
              <Users className="w-6 h-6 text-emerald-400" />
              <span>1,240 Matching Accounts</span>
              <span className="text-xs font-semibold text-emerald-400 bg-emerald-950 px-2 py-0.5 rounded border border-emerald-800">
                Includes TechGear Europe (ACC-89420-EU)
              </span>
            </div>
          </div>

          {/* Activation Actions */}
          <div className="flex items-center flex-wrap gap-2">
            <button 
              onClick={() => onShowToast && onShowToast("Triggered Omnichannel Campaign for 1,240 accounts!")}
              className="px-3.5 py-2 bg-indigo-600 hover:bg-indigo-500 text-white font-extrabold text-xs rounded-xl shadow-md flex items-center space-x-1.5 cursor-pointer"
            >
              <Megaphone className="w-3.5 h-3.5" />
              <span>Activate Campaign</span>
            </button>

            <button 
              onClick={() => onShowToast && onShowToast("Pushed segment rules to ADA AI Bot Assistant!")}
              className="px-3.5 py-2 bg-slate-800 hover:bg-slate-700 text-indigo-300 font-bold text-xs rounded-xl border border-slate-700 flex items-center space-x-1.5 cursor-pointer"
            >
              <Bot className="w-3.5 h-3.5 text-indigo-400" />
              <span>Send to Bot</span>
            </button>

            <button 
              onClick={() => onShowToast && onShowToast("Exported 1,240 accounts CSV file!")}
              className="px-3.5 py-2 bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs rounded-xl border border-slate-700 flex items-center space-x-1.5 cursor-pointer"
            >
              <Download className="w-3.5 h-3.5 text-slate-400" />
              <span>Export CSV</span>
            </button>
          </div>
        </div>

        {/* Audience Sample Table */}
        <div className="space-y-2">
          <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Preview Matching Accounts Sample</div>
          <div className="bg-slate-800/80 rounded-xl overflow-hidden border border-slate-700/80">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="bg-slate-900 border-b border-slate-700 text-[10px] text-slate-400 uppercase font-bold">
                  <th className="py-2 px-3">Account Name</th>
                  <th className="py-2 px-3">Location</th>
                  <th className="py-2 px-3">Company Size</th>
                  <th className="py-2 px-3">Pricing Visits</th>
                  <th className="py-2 px-3">Match Score</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-700/60 font-medium text-slate-200">
                <tr className="bg-indigo-950/40">
                  <td className="py-2 px-3 font-bold text-white flex items-center space-x-1">
                    <span>TechGear Europe</span>
                    <span className="px-1.5 py-0.2 bg-indigo-500 text-white text-[9px] rounded font-bold">CURRENT</span>
                  </td>
                  <td className="py-2 px-3">Paris, France</td>
                  <td className="py-2 px-3">50–200 employees</td>
                  <td className="py-2 px-3 font-bold text-emerald-400">4 visits</td>
                  <td className="py-2 px-3 font-bold text-indigo-300">91% Intent</td>
                </tr>
                <tr>
                  <td className="py-2 px-3 font-bold">Fnac Retail Solutions SARL</td>
                  <td className="py-2 px-3">Lyon, France</td>
                  <td className="py-2 px-3">100–500 employees</td>
                  <td className="py-2 px-3 font-bold text-emerald-400">6 visits</td>
                  <td className="py-2 px-3 font-bold text-indigo-300">95% Intent</td>
                </tr>
                <tr>
                  <td className="py-2 px-3 font-bold">ElectroNordic AB</td>
                  <td className="py-2 px-3">Stockholm, Sweden</td>
                  <td className="py-2 px-3">50–200 employees</td>
                  <td className="py-2 px-3 font-bold text-emerald-400">3 visits</td>
                  <td className="py-2 px-3 font-bold text-indigo-300">88% Intent</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>

    </div>
  );
}
