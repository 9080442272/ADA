import React, { useState } from 'react';
import { X, Send, CheckCircle2, Zap, Shield, Sparkles, Megaphone } from 'lucide-react';

export default function ActionModal({ action, isOpen, onClose, onConfirm }) {
  const [customNote, setCustomNote] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen || !action) return null;

  const handleExecute = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      onConfirm(action.id);
      onClose();
    }, 800);
  };

  return (
    <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-lg w-full shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in zoom-in-95 duration-150">
        
        {/* Modal Header */}
        <div className="h-16 px-6 bg-slate-900 text-white flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center space-x-2.5">
            <div className="w-8 h-8 rounded-lg ada-gradient-bg flex items-center justify-center text-white">
              <Megaphone className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white">Confirm Campaign Activation</h3>
              <p className="text-[11px] text-slate-400">Target Account: TechGear Europe ({action.confidence}% Match)</p>
            </div>
          </div>
          <button onClick={onClose} className="text-slate-400 hover:text-white p-1 rounded-lg">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-4 text-xs">
          
          {/* Action Overview Box */}
          <div className="p-4 bg-indigo-50/70 border border-indigo-100 rounded-xl space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold text-indigo-700 uppercase tracking-wider">Recommended Action</span>
              <span className="px-2 py-0.5 text-[10px] font-extrabold bg-indigo-600 text-white rounded-full">
                {action.confidence}% Confidence Match
              </span>
            </div>
            <div className="text-base font-bold text-slate-900">{action.title}</div>
            <div className="text-slate-600">
              <span className="font-semibold text-slate-700">Trigger Reason:</span> {action.reason || action.whyThisAction}
            </div>
          </div>

          {/* Action Payload Preview */}
          <div className="space-y-2">
            <label className="font-bold text-slate-800 block">Campaign Configuration Preview:</label>
            <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl space-y-1.5 font-mono text-[11px]">
              {action.payload ? (
                Object.entries(action.payload).map(([k, v]) => (
                  <div key={k} className="flex justify-between">
                    <span className="text-slate-500 capitalize">{k.replace(/([A-Z])/g, ' $1')}:</span>
                    <span className="text-slate-800 font-semibold">{String(v)}</span>
                  </div>
                ))
              ) : (
                <div className="text-slate-500">Boostmyshop B2B campaign segment insertion initialized.</div>
              )}
            </div>
          </div>

          {/* Compliance & Audit guarantee */}
          <div className="flex items-center space-x-2 text-[11px] text-slate-500 bg-slate-100/70 p-2.5 rounded-lg">
            <Shield className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Campaign execution logged in Boostmyshop Marketing Hub & GDPR audit logs.</span>
          </div>

        </div>

        {/* Modal Footer Buttons */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-end space-x-3">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 bg-white border border-slate-300 rounded-xl"
          >
            Cancel
          </button>
          <button
            onClick={handleExecute}
            disabled={isSubmitting}
            className="px-5 py-2 text-xs font-bold text-white ada-gradient-bg hover:opacity-95 rounded-xl shadow-md flex items-center space-x-2 disabled:opacity-50"
          >
            {isSubmitting ? (
              <span>Activating Campaign...</span>
            ) : (
              <>
                <Send className="w-3.5 h-3.5" />
                <span>Execute & Enroll Account</span>
              </>
            )}
          </button>
        </div>

      </div>
    </div>
  );
}
