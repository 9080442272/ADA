import React, { useState, useEffect } from 'react';
import { 
  X, 
  Save, 
  CheckCircle2, 
  Database, 
  Clock, 
  Sliders, 
  ShieldCheck, 
  Info,
  Brain
} from 'lucide-react';

export default function EditAttributeDrawer({ attribute, isOpen, onClose, onSave }) {
  if (!isOpen || !attribute) return null;

  const [val, setVal] = useState(attribute.value || "");

  useEffect(() => {
    setVal(attribute.value || "");
  }, [attribute]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave && onSave(attribute.id, val);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-xs z-50 flex justify-end">
      <div className="bg-white w-full max-w-md h-full shadow-2xl border-l border-slate-200 flex flex-col animate-in slide-in-from-right duration-200">
        
        {/* Drawer Header */}
        <div className="h-16 px-6 bg-slate-900 text-white flex items-center justify-between border-b border-slate-800 shrink-0">
          <div className="flex items-center space-x-2.5">
            <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white font-bold">
              <Sliders className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white">EDIT ATTRIBUTE</h3>
              <p className="text-[11px] text-slate-400">{attribute.category}</p>
            </div>
          </div>
          <button onClick={onClose} className="text-slate-400 hover:text-white p-1 rounded-lg cursor-pointer">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Form Body */}
        <form onSubmit={handleSubmit} className="p-6 overflow-y-auto space-y-5 text-xs text-slate-700 flex-1">
          
          {/* Main Attribute Identity */}
          <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Attribute Name</span>
              {attribute.isCustom ? (
                <span className="px-2 py-0.5 text-[9px] font-extrabold bg-indigo-600 text-white rounded-full uppercase">CUSTOM</span>
              ) : (
                <span className="px-2 py-0.5 text-[9px] font-extrabold bg-slate-200 text-slate-700 rounded-full uppercase">STANDARD</span>
              )}
            </div>
            <h4 className="text-base font-extrabold text-slate-900">{attribute.name}</h4>
          </div>

          {/* Editable Field Input */}
          <div className="space-y-1.5">
            <label className="block text-xs font-bold text-slate-800">
              Attribute Value
            </label>
            <input 
              type="text"
              value={val}
              onChange={(e) => setVal(e.target.value)}
              placeholder="Enter attribute value..."
              className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white"
            />
          </div>

          {/* Read-Only Metadata & Provenance (Requirement #7 & #11) */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-2 text-xs">
            <h5 className="font-bold text-slate-900 uppercase tracking-wider text-[11px] border-b border-slate-200 pb-1.5">
              Data Provenance & System Specs
            </h5>

            <div className="flex justify-between border-b border-slate-200/60 pb-1.5">
              <span className="text-slate-500 font-medium">Data Type:</span>
              <span className="font-bold text-slate-800 font-mono">{attribute.dataType || "Text"}</span>
            </div>

            <div className="flex justify-between border-b border-slate-200/60 pb-1.5">
              <span className="text-slate-500 font-medium">Source System:</span>
              <span className="font-bold text-indigo-700">{attribute.source}</span>
            </div>

            <div className="flex justify-between border-b border-slate-200/60 pb-1.5">
              <span className="text-slate-500 font-medium">Last Updated:</span>
              <span className="font-bold text-slate-800">{attribute.lastUpdated}</span>
            </div>

            <div className="flex justify-between">
              <span className="text-slate-500 font-medium">Sync Status:</span>
              <span className="font-bold text-emerald-700">{attribute.syncStatus || "Healthy"}</span>
            </div>
          </div>

          {/* AI Evidence linkage notice if AI derived */}
          {attribute.aiDerived && (
            <div className="p-3.5 bg-indigo-50 border border-indigo-100 rounded-xl space-y-1">
              <div className="text-[10px] font-bold text-indigo-800 uppercase tracking-wider flex items-center space-x-1">
                <Brain className="w-3.5 h-3.5 text-indigo-600" />
                <span>ADA Decision Engine Derived ({attribute.aiDerived.confidence}% confidence)</span>
              </div>
              <ul className="text-[11px] text-indigo-950 space-y-0.5 pl-2">
                {attribute.aiDerived.evidence.map((ev, i) => (
                  <li key={i}>• {ev}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Drawer Actions */}
          <div className="pt-4 flex items-center space-x-2">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 py-2.5 text-xs font-bold text-slate-600 bg-slate-100 hover:bg-slate-200 border border-slate-300 rounded-xl cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 py-2.5 text-xs font-extrabold text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl shadow-md flex items-center justify-center space-x-1.5 cursor-pointer"
            >
              <Save className="w-3.5 h-3.5" />
              <span>Save changes</span>
            </button>
          </div>

        </form>

      </div>
    </div>
  );
}
