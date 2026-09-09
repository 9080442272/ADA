import React, { useState } from 'react';
import { 
  Layers, 
  Plus, 
  Users, 
  Download, 
  Bot, 
  Megaphone, 
  CheckCircle2, 
  Sparkles, 
  Sliders,
  Share2,
  Globe,
  Database,
  Building2,
  TrendingUp,
  Check
} from 'lucide-react';

export default function SegmentsView({ customer, onShowToast }) {
  const [segmentName, setSegmentName] = useState("High Intent — myPricing Prospects");

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      
      {/* 1. GLOBAL CDP AUDIENCE BUILDER HEADER */}
      <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-5 space-y-3">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-4">
          <div>
            <div className="flex items-center space-x-2">
              <h1 className="text-xl font-extrabold text-slate-900 tracking-tight flex items-center space-x-2">
                <Layers className="w-5 h-5 text-indigo-600" />
                <span>Audience Segmentation Builder</span>
              </h1>
              <span className="px-2.5 py-0.5 text-xs font-extrabold bg-indigo-50 text-indigo-700 rounded-full border border-indigo-200">
                Global CDP Directory
              </span>
            </div>
            <p className="text-xs text-slate-500 mt-1 font-medium">
              Building dynamic targeting rules across <strong>8,420 customer accounts</strong> in platform directory
            </p>
          </div>

          <div className="flex items-center space-x-2 shrink-0">
            <button 
              onClick={() => onShowToast && onShowToast("Saved segment 'High Intent — myPricing Prospects' to CDP!")}
              className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold text-xs rounded-xl shadow-xs flex items-center space-x-1.5 cursor-pointer transition-all"
            >
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Save Segment</span>
            </button>
          </div>
        </div>

        {/* Segment Metadata Strip */}
        <div className="flex items-center justify-between text-xs pt-1">
          <div className="flex items-center space-x-3 text-slate-600 font-medium">
            <span>Segment Rule: <strong className="text-slate-900 font-extrabold">#SEG-9912</strong></span>
            <span>•</span>
            <span>Last calculated: <strong className="text-slate-900 font-semibold">12 min ago</strong></span>
            <span>•</span>
            <span className="text-emerald-700 font-bold flex items-center space-x-1">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Real-Time Sync Active</span>
            </span>
          </div>
          <span className="text-indigo-600 font-bold cursor-pointer hover:underline text-[11px]">
            View Rule Revision History →
          </span>
        </div>
      </div>

      {/* 2. BOOLEAN RULE MATRIX (Company Size AND myPricing Interest AND Behavior) */}
      <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-5 space-y-4">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <h2 className="text-xs font-extrabold text-slate-900 uppercase tracking-wider flex items-center space-x-2">
            <Sliders className="w-4 h-4 text-indigo-600" />
            <span>Targeting Criteria & Boolean Rule Logic</span>
          </h2>
          <button className="text-xs font-bold text-indigo-600 hover:text-indigo-800 flex items-center space-x-1 cursor-pointer">
            <Plus className="w-3.5 h-3.5" />
            <span>Add Rule Condition</span>
          </button>
        </div>

        <div className="space-y-3 bg-slate-50/80 p-4 rounded-xl border border-slate-200/80 text-xs">
          
          {/* Condition 1: Company Size */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white p-3.5 rounded-xl border border-slate-200 shadow-2xs">
            <div className="flex items-center space-x-3">
              <span className="px-2 py-0.5 bg-slate-900 text-white text-[10px] font-extrabold rounded">WHERE</span>
              <span className="font-bold text-slate-600">Company Size</span>
              <span className="text-slate-400 font-bold">=</span>
              <span className="px-2.5 py-1 bg-slate-100 font-extrabold text-slate-900 rounded-lg border border-slate-200 font-mono">
                50–200 employees
              </span>
            </div>
            <span className="text-[11px] text-slate-400 font-medium">Standard Account Attribute</span>
          </div>

          {/* Logical Operator */}
          <div className="pl-4">
            <span className="px-3 py-1 bg-indigo-600 text-white text-[10px] font-extrabold rounded-md shadow-2xs">
              AND
            </span>
          </div>

          {/* Condition 2: myPricing Interest */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white p-3.5 rounded-xl border border-slate-200 shadow-2xs">
            <div className="flex items-center space-x-3">
              <span className="px-2 py-0.5 bg-slate-900 text-white text-[10px] font-extrabold rounded">WHERE</span>
              <span className="font-bold text-slate-600">myPricing Interest</span>
              <span className="text-slate-400 font-bold">=</span>
              <span className="px-2.5 py-1 bg-emerald-100 text-emerald-800 font-extrabold rounded-lg border border-emerald-300 font-mono">
                High Intent
              </span>
            </div>
            <span className="text-[11px] text-purple-700 font-bold flex items-center space-x-1">
              <Sparkles className="w-3 h-3 text-purple-600" />
              <span>AI-Derived Attribute</span>
            </span>
          </div>

          {/* Logical Operator */}
          <div className="pl-4">
            <span className="px-3 py-1 bg-indigo-600 text-white text-[10px] font-extrabold rounded-md shadow-2xs">
              AND
            </span>
          </div>

          {/* Condition 3: Behavioural Trigger */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white p-3.5 rounded-xl border border-slate-200 shadow-2xs">
            <div className="flex items-center space-x-3">
              <span className="px-2 py-0.5 bg-purple-700 text-white text-[10px] font-extrabold rounded">BEHAVIOR</span>
              <span className="font-bold text-slate-600">Viewed myPricing Page</span>
              <span className="text-slate-400 font-bold">≥</span>
              <span className="px-2.5 py-1 bg-slate-100 font-extrabold text-slate-900 rounded-lg border border-slate-200 font-mono">
                3 times in 7 days
              </span>
            </div>
            <span className="text-[11px] text-slate-400 font-medium">Real-Time Event Ingestion</span>
          </div>

        </div>
      </div>

      {/* 3. GLOBAL POPULATION MATCH & ACTIVATION BAR (1,240 MATCHING ACCOUNTS) */}
      <div className="bg-slate-900 text-white rounded-2xl p-6 shadow-xl border border-slate-800 space-y-5">
        
        {/* Population Counter Header */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-slate-800 pb-4">
          <div className="space-y-1">
            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
              TOTAL MATCHED POPULATION
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl font-black text-white tracking-tight">
                  1,240 Matching Accounts
                </h2>
                <div className="text-xs text-slate-400 flex items-center space-x-2 mt-0.5">
                  <span>14.7% of total CDP directory</span>
                  <span>•</span>
                  <span>€4.2M segment opportunity</span>
                </div>
              </div>
            </div>
          </div>

          {/* Account Membership Confirmation Badge */}
          <div className="bg-slate-800/90 border border-slate-700/80 rounded-xl p-3 flex items-center space-x-3 shrink-0">
            <div className="w-7 h-7 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-xs shrink-0">
              ✓
            </div>
            <div className="text-xs">
              <div className="text-slate-400 text-[10px] font-bold uppercase tracking-wider">ACCOUNT CONFIRMATION</div>
              <div className="font-extrabold text-white">
                TechGear Europe <span className="text-slate-400 font-mono font-normal">(ACC-89420-EU)</span> matches rules
              </div>
            </div>
          </div>
        </div>

        {/* Activation Actions Strip */}
        <div className="space-y-2">
          <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
            CAMPAIGN ACTIVATION DESTINATIONS
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <button 
              onClick={() => onShowToast && onShowToast("Launched Omnichannel Cross-Sell Campaign for 1,240 matching accounts!")}
              className="px-4 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white font-extrabold text-xs rounded-xl shadow-md flex items-center space-x-2 cursor-pointer transition-all"
            >
              <Megaphone className="w-4 h-4 text-indigo-200" />
              <span>Activate Campaign (1,240 Accounts)</span>
            </button>

            <button 
              onClick={() => onShowToast && onShowToast("Enrolled 1,240 accounts into ADA AI Outreach Bot Assistant!")}
              className="px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-indigo-300 font-bold text-xs rounded-xl border border-slate-700 flex items-center space-x-2 cursor-pointer transition-all"
            >
              <Bot className="w-4 h-4 text-indigo-400" />
              <span>Send to Bot</span>
            </button>

            <button 
              onClick={() => onShowToast && onShowToast("Exported 1,240 accounts CSV file!")}
              className="px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs rounded-xl border border-slate-700 flex items-center space-x-2 cursor-pointer transition-all"
            >
              <Download className="w-4 h-4 text-slate-400" />
              <span>Export CSV</span>
            </button>

            <button 
              onClick={() => onShowToast && onShowToast("Synced 1,240 accounts to Salesforce & Meta Audiences!")}
              className="px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-xs rounded-xl border border-slate-700 flex items-center space-x-2 cursor-pointer transition-all"
            >
              <Share2 className="w-4 h-4 text-slate-400" />
              <span>Sync Destination APIs</span>
            </button>
          </div>
        </div>

        {/* 4. AUDIENCE PREVIEW TABLE SAMPLE */}
        <div className="space-y-2 pt-2">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
              Sample Preview of 1,240 Matched Accounts
            </span>
            <span className="text-[11px] text-slate-400 font-mono">Showing 5 of 1,240</span>
          </div>

          <div className="bg-slate-800/80 rounded-xl overflow-hidden border border-slate-700/80">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="bg-slate-950 border-b border-slate-700 text-[10px] text-slate-400 uppercase font-bold">
                  <th className="py-2.5 px-3">Account Name</th>
                  <th className="py-2.5 px-3">Location</th>
                  <th className="py-2.5 px-3">Company Size</th>
                  <th className="py-2.5 px-3">Pricing Visits</th>
                  <th className="py-2.5 px-3">Match Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-700/60 font-medium text-slate-200">
                <tr className="bg-indigo-950/40">
                  <td className="py-2.5 px-3 font-bold text-white flex items-center space-x-2">
                    <span>TechGear Europe</span>
                    <span className="px-1.5 py-0.5 bg-indigo-500 text-white text-[9px] rounded font-bold">PREVIEW ACCOUNT</span>
                  </td>
                  <td className="py-2.5 px-3">Paris, France</td>
                  <td className="py-2.5 px-3 font-mono">50–200 employees</td>
                  <td className="py-2.5 px-3 font-bold text-emerald-400">4 visits / 7d</td>
                  <td className="py-2.5 px-3 font-bold text-emerald-400 flex items-center space-x-1">
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Matched (91% Intent)</span>
                  </td>
                </tr>
                <tr>
                  <td className="py-2.5 px-3 font-bold text-white">ElectroNordic AB</td>
                  <td className="py-2.5 px-3">Stockholm, Sweden</td>
                  <td className="py-2.5 px-3 font-mono">50–200 employees</td>
                  <td className="py-2.5 px-3 font-bold text-emerald-400">5 visits / 7d</td>
                  <td className="py-2.5 px-3 font-bold text-emerald-400 flex items-center space-x-1">
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Matched (94% Intent)</span>
                  </td>
                </tr>
                <tr>
                  <td className="py-2.5 px-3 font-bold text-white">Apex Logistics Retail</td>
                  <td className="py-2.5 px-3">Frankfurt, Germany</td>
                  <td className="py-2.5 px-3 font-mono">100–200 employees</td>
                  <td className="py-2.5 px-3 font-bold text-emerald-400">6 visits / 7d</td>
                  <td className="py-2.5 px-3 font-bold text-emerald-400 flex items-center space-x-1">
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Matched (96% Intent)</span>
                  </td>
                </tr>
                <tr>
                  <td className="py-2.5 px-3 font-bold text-white">Fnac Digital Commerce</td>
                  <td className="py-2.5 px-3">Lyon, France</td>
                  <td className="py-2.5 px-3 font-mono">50–200 employees</td>
                  <td className="py-2.5 px-3 font-bold text-emerald-400">3 visits / 7d</td>
                  <td className="py-2.5 px-3 font-bold text-emerald-400 flex items-center space-x-1">
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Matched (88% Intent)</span>
                  </td>
                </tr>
                <tr>
                  <td className="py-2.5 px-3 font-bold text-white">Iberia Tech Retail</td>
                  <td className="py-2.5 px-3">Madrid, Spain</td>
                  <td className="py-2.5 px-3 font-mono">80–200 employees</td>
                  <td className="py-2.5 px-3 font-bold text-emerald-400">4 visits / 7d</td>
                  <td className="py-2.5 px-3 font-bold text-emerald-400 flex items-center space-x-1">
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Matched (90% Intent)</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>

    </div>
  );
}
