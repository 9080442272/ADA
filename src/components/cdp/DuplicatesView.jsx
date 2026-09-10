import React, { useState } from 'react';
import { Copy, AlertTriangle, CheckCircle2, ArrowRight, ShieldCheck, Merge } from 'lucide-react';

export default function DuplicatesView({ customer, onShowToast }) {
  const [isMergeModalOpen, setIsMergeModalOpen] = useState(false);

  const handleConfirmMerge = () => {
    setIsMergeModalOpen(false);
    onShowToast && onShowToast("Merged 'TechGear Europe GmbH' into primary account ACC-89420-EU successfully!");
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      
      {/* Header */}
      <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-5 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl font-extrabold text-slate-900 tracking-tight flex items-center space-x-2">
            <Copy className="w-5 h-5 text-indigo-600" />
            <span>Duplicate Account Resolution</span>
            <span className="px-2.5 py-0.5 text-xs font-extrabold bg-amber-100 text-amber-800 rounded-full border border-amber-300">
              1 Potential Duplicate Detected
            </span>
          </h1>
          <p className="text-xs text-slate-500 mt-0.5">
            CDP identity resolution matching rule trigger: Account Name + Website Similarity &gt; 92%
          </p>
        </div>

        <div className="flex items-center space-x-2">
          <button 
            onClick={() => onShowToast && onShowToast("Ignored duplicate match. Profiles kept separate.")}
            className="px-3.5 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs rounded-xl border border-slate-300 cursor-pointer"
          >
            Keep Both
          </button>
          <button 
            onClick={() => setIsMergeModalOpen(true)}
            className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold text-xs rounded-xl shadow-xs flex items-center space-x-1.5 cursor-pointer"
          >
            <Merge className="w-3.5 h-3.5" />
            <span>Merge Profiles</span>
          </button>
        </div>
      </div>

      {/* Duplicate Side-by-Side Comparison Matrix */}
      <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-5 space-y-4">
        <div className="flex items-center space-x-2 border-b border-slate-100 pb-3">
          <AlertTriangle className="w-5 h-5 text-amber-500" />
          <h2 className="text-xs font-extrabold text-slate-900 uppercase tracking-wider">
            Side-by-Side Field Comparison
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          
          {/* Primary Account Card */}
          <div className="p-4 bg-indigo-50/60 border-2 border-indigo-400 rounded-2xl space-y-3">
            <div className="flex items-center justify-between">
              <span className="px-2.5 py-0.5 text-[10px] font-extrabold bg-indigo-600 text-white rounded-md uppercase">
                PRIMARY CANONICAL PROFILE
              </span>
              <span className="font-mono text-slate-500 text-[11px]">ACC-89420-EU</span>
            </div>
            <h3 className="text-base font-extrabold text-slate-900">TechGear Europe</h3>

            <div className="space-y-1.5 text-slate-700 font-semibold pt-1">
              <div className="flex justify-between border-b border-indigo-200/60 pb-1">
                <span className="text-slate-500 font-medium">Domain:</span>
                <span>techgear.fr</span>
              </div>
              <div className="flex justify-between border-b border-indigo-200/60 pb-1">
                <span className="text-slate-500 font-medium">Location:</span>
                <span>Paris, France</span>
              </div>
              <div className="flex justify-between border-b border-indigo-200/60 pb-1">
                <span className="text-slate-500 font-medium">Primary Contact:</span>
                <span>Antoine Laurent</span>
              </div>
              <div className="flex justify-between border-b border-indigo-200/60 pb-1">
                <span className="text-slate-500 font-medium">LTV / ARR:</span>
                <span className="text-indigo-900 font-bold">€84,500</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500 font-medium">Source System:</span>
                <span className="font-bold text-slate-900">HubSpot CRM</span>
              </div>
            </div>
          </div>

          {/* Secondary Candidate Card */}
          <div className="p-4 bg-amber-50/60 border-2 border-amber-300 rounded-2xl space-y-3">
            <div className="flex items-center justify-between">
              <span className="px-2.5 py-0.5 text-[10px] font-extrabold bg-amber-600 text-white rounded-md uppercase">
                DUPLICATE CANDIDATE
              </span>
              <span className="font-mono text-slate-500 text-[11px]">ACC-99104-DE</span>
            </div>
            <h3 className="text-base font-extrabold text-slate-900">TechGear Europe GmbH</h3>

            <div className="space-y-1.5 text-slate-700 font-semibold pt-1">
              <div className="flex justify-between border-b border-amber-200/60 pb-1">
                <span className="text-slate-500 font-medium">Domain:</span>
                <span>techgear.de (Match)</span>
              </div>
              <div className="flex justify-between border-b border-amber-200/60 pb-1">
                <span className="text-slate-500 font-medium">Location:</span>
                <span>Munich, Germany (Conflicting)</span>
              </div>
              <div className="flex justify-between border-b border-amber-200/60 pb-1">
                <span className="text-slate-500 font-medium">Primary Contact:</span>
                <span>Antoine Laurent (Match)</span>
              </div>
              <div className="flex justify-between border-b border-amber-200/60 pb-1">
                <span className="text-slate-500 font-medium">LTV / ARR:</span>
                <span className="text-amber-900 font-bold">€0 (Unconverted lead)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500 font-medium">Source System:</span>
                <span className="font-bold text-slate-900">CSV Import</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* MERGE CONFIRMATION MODAL WITH FIELD-LEVEL RESOLUTION PREVIEW */}
      {isMergeModalOpen && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs z-50 flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-lg rounded-2xl shadow-2xl border border-slate-200 p-6 space-y-4 text-xs animate-in zoom-in-95 duration-150">
            <div className="flex items-center space-x-2 text-indigo-600 font-bold border-b border-slate-100 pb-3">
              <Merge className="w-5 h-5" />
              <h3 className="text-base font-extrabold text-slate-900">Field-Level Resolution Preview</h3>
            </div>

            <p className="text-slate-600 font-medium leading-relaxed">
              Reviewing field-level resolution before merging <strong>TechGear Europe GmbH (ACC-99104-DE)</strong> into primary account <strong>TechGear Europe (ACC-89420-EU)</strong>:
            </p>

            {/* Field-level resolution table */}
            <div className="bg-slate-50 rounded-xl overflow-hidden border border-slate-200">
              <table className="w-full text-left text-[11px]">
                <thead>
                  <tr className="bg-slate-900 text-slate-300 text-[10px] uppercase font-extrabold">
                    <th className="py-2 px-3">Field</th>
                    <th className="py-2 px-3">Primary</th>
                    <th className="py-2 px-3">Duplicate</th>
                    <th className="py-2 px-3">Final Merged</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 font-medium text-slate-700 bg-white">
                  <tr>
                    <td className="py-2 px-3 font-bold text-slate-900">Company Name</td>
                    <td className="py-2 px-3">TechGear Europe</td>
                    <td className="py-2 px-3 text-slate-400">TechGear Europe GmbH</td>
                    <td className="py-2 px-3 font-bold text-indigo-700">TechGear Europe</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 font-bold text-slate-900">Domain</td>
                    <td className="py-2 px-3 font-mono">techgear.fr</td>
                    <td className="py-2 px-3 font-mono text-slate-400">techgear.de</td>
                    <td className="py-2 px-3 font-bold text-indigo-700 font-mono">techgear.fr</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 font-bold text-slate-900">Location</td>
                    <td className="py-2 px-3">Paris, France</td>
                    <td className="py-2 px-3 text-slate-400">Munich, Germany</td>
                    <td className="py-2 px-3 font-bold text-indigo-700">Paris, France</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 font-bold text-slate-900">Contact</td>
                    <td className="py-2 px-3">Antoine Laurent</td>
                    <td className="py-2 px-3 text-slate-400">Antoine Laurent</td>
                    <td className="py-2 px-3 font-bold text-indigo-700">Antoine Laurent</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 font-bold text-slate-900">LTV / ARR</td>
                    <td className="py-2 px-3 font-bold text-emerald-700">€84,500</td>
                    <td className="py-2 px-3 text-slate-400">€0</td>
                    <td className="py-2 px-3 font-bold text-emerald-700">€84,500</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl text-amber-950 font-semibold space-y-1">
              <div className="font-extrabold flex items-center space-x-1">
                <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />
                <span>Identity Resolution Note</span>
              </div>
              <p className="text-[11px]">Merging will combine all historical interaction timelines, event logs, and contact preferences into primary profile ACC-89420-EU.</p>
            </div>

            <div className="pt-2 flex items-center justify-end space-x-2">
              <button 
                onClick={() => setIsMergeModalOpen(false)}
                className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-xl border border-slate-300 cursor-pointer"
              >
                Cancel
              </button>
              <button 
                onClick={handleConfirmMerge}
                className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold rounded-xl shadow-md cursor-pointer"
              >
                Confirm & Merge Profiles
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
