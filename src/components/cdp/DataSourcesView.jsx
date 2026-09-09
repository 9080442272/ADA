import React, { useState } from 'react';
import { Database, RefreshCw, CheckCircle2, AlertTriangle, Plus, ArrowRight, ShieldCheck, HardDrive, Globe, FileSpreadsheet } from 'lucide-react';

export default function DataSourcesView({ customer, onShowToast }) {
  const [sources, setSources] = useState([
    { id: "src-1", name: "HubSpot CRM", type: "CRM API", status: "Connected", lastSync: "12 min ago", records: "42,812 records", warnings: 0, badge: "bg-emerald-100 text-emerald-800 border-emerald-300" },
    { id: "src-2", name: "Q3 Retail Leads CSV", type: "CSV File Upload", status: "Completed", lastSync: "2 days ago", records: "12,450 records", warnings: 23, badge: "bg-amber-100 text-amber-800 border-amber-300" },
    { id: "src-3", name: "Boostmyshop Web SDK", type: "Real-time Telemetry", status: "Healthy", lastSync: "Real-time", records: "840,210 events", warnings: 0, badge: "bg-emerald-100 text-emerald-800 border-emerald-300" },
    { id: "src-4", name: "Stripe Billing API", type: "Financial Ingestion", status: "Connected", lastSync: "1 hour ago", records: "8,920 transactions", warnings: 0, badge: "bg-emerald-100 text-emerald-800 border-emerald-300" }
  ]);

  const [isConnectModalOpen, setIsConnectModalOpen] = useState(false);

  const handleSyncSource = (sourceName) => {
    onShowToast && onShowToast(`Triggered real-time re-sync for data source '${sourceName}'!`);
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      
      {/* Header */}
      <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-5 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl font-extrabold text-slate-900 tracking-tight flex items-center space-x-2">
            <Database className="w-5 h-5 text-indigo-600" />
            <span>Data Ingestion & Sync Pipelines</span>
            <span className="px-2.5 py-0.5 text-xs font-extrabold bg-emerald-100 text-emerald-800 rounded-full border border-emerald-300">
              4 Active Pipelines
            </span>
          </h1>
          <p className="text-xs text-slate-500 mt-0.5">
            Manage data connectors, CSV file imports, real-time web SDK streams, and field mappings
          </p>
        </div>

        <button 
          onClick={() => setIsConnectModalOpen(true)}
          className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold text-xs rounded-xl shadow-xs flex items-center space-x-1.5 cursor-pointer"
        >
          <Plus className="w-3.5 h-3.5" />
          <span>Connect New Source</span>
        </button>
      </div>

      {/* Connected Sources List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {sources.map(src => (
          <div key={src.id} className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-5 space-y-3 flex flex-col justify-between">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className={`px-2.5 py-0.5 text-[10px] font-extrabold rounded-md border ${src.badge}`}>
                  {src.status}
                </span>
                <span className="text-[11px] font-mono text-slate-400">Last sync: {src.lastSync}</span>
              </div>

              <h3 className="text-base font-extrabold text-slate-900 flex items-center space-x-2">
                <span>{src.name}</span>
              </h3>

              <div className="text-xs text-slate-500 font-medium">
                Type: <strong className="text-slate-800">{src.type}</strong> • Ingested: <strong className="text-indigo-700 font-extrabold">{src.records}</strong>
              </div>

              {src.warnings > 0 && (
                <div className="p-2.5 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-900 font-semibold flex items-center space-x-1.5">
                  <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>{src.warnings} field formatting warnings detected during validation</span>
                </div>
              )}
            </div>

            <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
              <span className="text-slate-400 font-mono text-[11px]">Pipeline ID: #{src.id}</span>
              <button 
                onClick={() => handleSyncSource(src.name)}
                className="text-indigo-600 hover:text-indigo-800 font-bold flex items-center space-x-1 cursor-pointer"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Re-sync pipeline</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* CONNECT NEW SOURCE WORKFLOW MODAL */}
      {isConnectModalOpen && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs z-50 flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl border border-slate-200 p-6 space-y-4 text-xs animate-in zoom-in-95 duration-150">
            <div className="flex items-center space-x-2 text-indigo-600 font-bold border-b border-slate-100 pb-3">
              <Database className="w-5 h-5" />
              <h3 className="text-base font-extrabold text-slate-900">Connect New CDP Data Pipeline</h3>
            </div>

            <div className="space-y-3">
              <div className="text-xs font-bold text-slate-800">Select Integration Type:</div>
              
              <div className="grid grid-cols-2 gap-2 text-xs font-bold">
                <div className="p-3 bg-indigo-50 border-2 border-indigo-500 rounded-xl text-indigo-900 cursor-pointer">
                  1. REST API / Webhook
                </div>
                <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-700 hover:bg-slate-100 cursor-pointer">
                  2. CSV / File Upload
                </div>
                <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-700 hover:bg-slate-100 cursor-pointer">
                  3. CRM Connector
                </div>
                <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-700 hover:bg-slate-100 cursor-pointer">
                  4. Real-time SDK
                </div>
              </div>
            </div>

            <div className="p-3 bg-slate-100 rounded-xl text-[11px] font-medium text-slate-600">
              Pipeline Flow: <strong>CONNECT ➔ MAP FIELDS ➔ VALIDATE ➔ SYNC ➔ MONITOR</strong>
            </div>

            <div className="pt-2 flex items-center justify-end space-x-2">
              <button 
                onClick={() => setIsConnectModalOpen(false)}
                className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-xl border border-slate-300 cursor-pointer"
              >
                Cancel
              </button>
              <button 
                onClick={() => {
                  setIsConnectModalOpen(false);
                  onShowToast && onShowToast("Successfully initialized new API data connector!");
                }}
                className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold rounded-xl shadow-md cursor-pointer"
              >
                Initialize Pipeline
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
