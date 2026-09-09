import React, { useState } from 'react';
import { ShieldCheck, Lock, FileText, CheckCircle2, AlertOctagon, Mail, MessageSquare, PhoneCall, Trash2 } from 'lucide-react';

export default function ComplianceView({ customer, onShowToast }) {
  const [isDeletionModalOpen, setIsDeletionModalOpen] = useState(false);

  const handleConfirmDeletion = () => {
    setIsDeletionModalOpen(false);
    onShowToast && onShowToast("Submitted GDPR Article 17 Data Deletion request for TechGear Europe (ACC-89420-EU)!");
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      
      {/* Header */}
      <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-5 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl font-extrabold text-slate-900 tracking-tight flex items-center space-x-2">
            <ShieldCheck className="w-5 h-5 text-indigo-600" />
            <span>GDPR & Compliance Governance</span>
            <span className="px-2.5 py-0.5 text-xs font-extrabold bg-emerald-100 text-emerald-800 rounded-full border border-emerald-300">
              GDPR Compliant
            </span>
          </h1>
          <p className="text-xs text-slate-500 mt-0.5">
            Audit consent permissions, legal processing basis, and privacy request logs for {customer.name} ({customer.id})
          </p>
        </div>

        <button 
          onClick={() => setIsDeletionModalOpen(true)}
          className="px-4 py-2 bg-red-50 hover:bg-red-100 text-red-700 font-extrabold text-xs rounded-xl border border-red-200 shadow-xs flex items-center space-x-1.5 cursor-pointer"
        >
          <Trash2 className="w-3.5 h-3.5" />
          <span>Request Data Deletion</span>
        </button>
      </div>

      {/* Consent & Permissions Summary */}
      <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-5 space-y-4">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <h2 className="text-xs font-extrabold text-slate-900 uppercase tracking-wider flex items-center space-x-2">
            <Lock className="w-4 h-4 text-indigo-600" />
            <span>Marketing Permissions & Consent Record</span>
          </h2>
          <span className="text-xs font-mono text-slate-400">Ref: REF-GDPR-FR-88912</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-2">
            <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Consent Record Details</div>
            
            <div className="flex justify-between border-b border-slate-200/60 pb-1.5">
              <span className="text-slate-500 font-medium">Marketing Consent Status:</span>
              <span className="font-extrabold text-emerald-700">Granted & Verified</span>
            </div>

            <div className="flex justify-between border-b border-slate-200/60 pb-1.5">
              <span className="text-slate-500 font-medium">Consent Source:</span>
              <span className="font-bold text-slate-900">Website Lead Form (/en/pricing)</span>
            </div>

            <div className="flex justify-between border-b border-slate-200/60 pb-1.5">
              <span className="text-slate-500 font-medium">Granted Timestamp:</span>
              <span className="font-mono text-slate-800">12 Mar 2026, 14:22:00 CET</span>
            </div>

            <div className="flex justify-between">
              <span className="text-slate-500 font-medium">Legal Processing Basis:</span>
              <span className="font-bold text-indigo-700">Legitimate B2B Commercial Interest</span>
            </div>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-2">
            <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Channel Level Permissions</div>
            
            <div className="flex justify-between items-center border-b border-slate-200/60 pb-1.5">
              <span className="text-slate-700 font-semibold flex items-center space-x-1.5">
                <Mail className="w-3.5 h-3.5 text-indigo-600" />
                <span>Email Marketing:</span>
              </span>
              <span className="px-2 py-0.5 text-[10px] font-extrabold bg-emerald-100 text-emerald-800 rounded">ALLOWED</span>
            </div>

            <div className="flex justify-between items-center border-b border-slate-200/60 pb-1.5">
              <span className="text-slate-700 font-semibold flex items-center space-x-1.5">
                <MessageSquare className="w-3.5 h-3.5 text-indigo-600" />
                <span>WhatsApp Conversations:</span>
              </span>
              <span className="px-2 py-0.5 text-[10px] font-extrabold bg-emerald-100 text-emerald-800 rounded">ALLOWED</span>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-slate-700 font-semibold flex items-center space-x-1.5">
                <PhoneCall className="w-3.5 h-3.5 text-red-600" />
                <span>SMS Direct Messages:</span>
              </span>
              <span className="px-2 py-0.5 text-[10px] font-extrabold bg-red-100 text-red-800 rounded">BLOCKED (DNC)</span>
            </div>
          </div>

        </div>
      </div>

      {/* DATA DELETION REQUEST MODAL */}
      {isDeletionModalOpen && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs z-50 flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl border border-slate-200 p-6 space-y-4 text-xs animate-in zoom-in-95 duration-150">
            <div className="flex items-center space-x-2 text-red-600 font-bold border-b border-slate-100 pb-3">
              <AlertOctagon className="w-5 h-5" />
              <h3 className="text-base font-extrabold text-slate-900">GDPR Data Deletion Request</h3>
            </div>

            <p className="text-slate-700 font-medium leading-relaxed">
              Initiating a Right to be Forgotten (Article 17) request will queue a purge of all personally identifiable information (PII) for <strong>TechGear Europe</strong> across all integrated data pipelines.
            </p>

            <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-red-950 font-semibold space-y-1">
              <div className="font-extrabold flex items-center space-x-1">
                <AlertOctagon className="w-3.5 h-3.5 text-red-600" />
                <span>Governance Confirmation Required</span>
              </div>
              <p className="text-[11px]">This action logs an immutable privacy request in the audit vault.</p>
            </div>

            <div className="pt-2 flex items-center justify-end space-x-2">
              <button 
                onClick={() => setIsDeletionModalOpen(false)}
                className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-xl border border-slate-300 cursor-pointer"
              >
                Cancel
              </button>
              <button 
                onClick={handleConfirmDeletion}
                className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-extrabold rounded-xl shadow-md cursor-pointer"
              >
                Submit Deletion Request
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
