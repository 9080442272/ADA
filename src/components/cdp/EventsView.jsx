import React, { useState } from 'react';
import { 
  Activity, 
  Search, 
  Filter, 
  RefreshCw, 
  ArrowUpRight, 
  Globe, 
  Zap, 
  ShieldCheck, 
  Building2, 
  Eye, 
  Layers, 
  Play, 
  Pause,
  Download
} from 'lucide-react';

export default function EventsView({ customer, onShowToast }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedEventType, setSelectedEventType] = useState("ALL");
  const [isLiveStreaming, setIsLiveStreaming] = useState(true);

  const stats = [
    { label: "Total Events Ingested (24h)", value: "842,109", change: "+14.2% vs yesterday", color: "indigo" },
    { label: "Active Event Pipelines", value: "14 Live", change: "100% Operational", color: "emerald" },
    { label: "Avg Event Ingestion Latency", value: "42 ms", change: "Sub-second SLA", color: "purple" },
    { label: "Event Validation Pass Rate", value: "99.94%", change: "Schema Verified", color: "blue" }
  ];

  const eventsList = [
    {
      id: "EVT-90412",
      timestamp: "Just now (10:54:12)",
      eventType: "myPricing Page Visit",
      account: "TechGear Europe",
      accountId: "ACC-89420-EU",
      contact: "Antoine Laurent",
      channel: "Web Application",
      source: "Google Tag Manager API",
      payload: "{ path: '/pricing/my-pricing', duration: 184, scrollDepth: '85%' }",
      intentScore: "High Intent (+15)",
      status: "Ingested"
    },
    {
      id: "EVT-90411",
      timestamp: "1 min ago",
      eventType: "ROI Calculator Calculation",
      account: "ElectroNordic AB",
      accountId: "ACC-77211-SE",
      contact: "Freja Lindqvist",
      channel: "Web Portal",
      source: "Segment Web SDK",
      payload: "{ calculatedSavings: 14200, currency: 'EUR', modules: ['myPricing', 'myOrders'] }",
      intentScore: "High Intent (+25)",
      status: "Ingested"
    },
    {
      id: "EVT-90410",
      timestamp: "2 mins ago",
      eventType: "Shopify Integration Auth",
      account: "Apex Logistics Retail",
      accountId: "ACC-54109-DE",
      contact: "Markus Weber",
      channel: "API Webhook",
      source: "Shopify OAuth Connector",
      payload: "{ shopId: 'apex-de.myshopify.com', status: 'connected', storeCount: 14 }",
      intentScore: "Technical Intent (+10)",
      status: "Ingested"
    },
    {
      id: "EVT-90409",
      timestamp: "3 mins ago",
      eventType: "Catalog API Sync Batch",
      account: "Fnac Digital Commerce",
      accountId: "ACC-31092-FR",
      contact: "Camille Dupont",
      channel: "REST API",
      source: "ADA Catalog Sync Pipeline",
      payload: "{ SKU_updated: 24500, status: 'success', latency: '38ms' }",
      intentScore: "Operational",
      status: "Ingested"
    },
    {
      id: "EVT-90408",
      timestamp: "5 mins ago",
      eventType: "Pricing Rules Export PDF",
      account: "Iberia Tech Retail",
      accountId: "ACC-44910-ES",
      contact: "Carlos Gomez",
      channel: "Web Application",
      source: "ADA Web Frontend",
      payload: "{ reportType: 'Q4_Competitor_Pricing_Strategy.pdf' }",
      intentScore: "Medium Intent (+8)",
      status: "Ingested"
    }
  ];

  const filteredEvents = eventsList.filter(evt => {
    const matchesSearch = evt.account.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          evt.eventType.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          evt.accountId.toLowerCase().includes(searchTerm.toLowerCase());
    if (selectedEventType === "ALL") return matchesSearch;
    return matchesSearch && evt.intentScore.includes(selectedEventType);
  });

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      
      {/* 1. GLOBAL EVENTS & ACTIVITY STREAM HEADER */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-4">
          <div>
            <div className="flex items-center space-x-2.5">
              <div className="w-9 h-9 rounded-xl bg-indigo-50 text-indigo-600 border border-indigo-200 flex items-center justify-center font-bold">
                <Activity className="w-5 h-5" />
              </div>
              <div>
                <h1 className="text-xl font-extrabold text-slate-900 tracking-tight flex items-center space-x-2">
                  <span>Global Events & Activity Stream</span>
                  <span className="px-2.5 py-0.5 text-xs font-extrabold bg-indigo-50 text-indigo-700 rounded-full border border-indigo-200">
                    Real-Time CDP Telemetry
                  </span>
                </h1>
                <p className="text-xs text-slate-500 font-medium mt-0.5">
                  Central behavioral telemetry ingestion bus capturing all real-time events across 8,420 B2B customer accounts
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-2 shrink-0">
            <button 
              onClick={() => {
                setIsLiveStreaming(!isLiveStreaming);
                if (onShowToast) onShowToast(isLiveStreaming ? "Paused real-time telemetry stream" : "Resumed live telemetry stream");
              }}
              className={`px-3.5 py-2 rounded-xl text-xs font-extrabold flex items-center space-x-1.5 cursor-pointer transition-all border ${
                isLiveStreaming 
                  ? 'bg-emerald-50 text-emerald-700 border-emerald-300 hover:bg-emerald-100' 
                  : 'bg-slate-100 text-slate-700 border-slate-300 hover:bg-slate-200'
              }`}
            >
              {isLiveStreaming ? (
                <>
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Streaming Live</span>
                  <Pause className="w-3.5 h-3.5 ml-1" />
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5" />
                  <span>Stream Paused</span>
                </>
              )}
            </button>

            <button 
              onClick={() => onShowToast && onShowToast("Exported 840,000 events log JSON schema!")}
              className="px-3.5 py-2 bg-slate-900 hover:bg-slate-800 text-white font-extrabold text-xs rounded-xl shadow-xs flex items-center space-x-1.5 cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Export Stream JSON</span>
            </button>
          </div>
        </div>

        {/* 4 KPI Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, idx) => (
            <div key={idx} className="bg-slate-50 p-4 rounded-xl border border-slate-200/80">
              <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">{stat.label}</div>
              <div className="text-xl font-black text-slate-900 mt-1">{stat.value}</div>
              <div className="text-[11px] font-semibold text-emerald-600 mt-0.5">{stat.change}</div>
            </div>
          ))}
        </div>
      </div>

      {/* 2. REAL-TIME EVENT STREAM TABLE & CONTROLS */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 space-y-4">
        
        {/* Filter and Search Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 bg-slate-50 p-3 rounded-xl border border-slate-200">
          
          <div className="relative flex-1 w-full">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
            <input 
              type="text" 
              placeholder="Search event type, account name, payload, or Account ID..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-4 py-1.5 bg-white border border-slate-300 rounded-lg text-xs font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div className="flex items-center space-x-2 w-full sm:w-auto">
            <select 
              value={selectedEventType}
              onChange={(e) => setSelectedEventType(e.target.value)}
              className="px-3 py-1.5 bg-white border border-slate-300 rounded-lg text-xs font-semibold text-slate-700 focus:outline-none"
            >
              <option value="ALL">All Event Types</option>
              <option value="High Intent">High Intent Events</option>
              <option value="Technical Intent">Technical / Connector Events</option>
            </select>

            <button 
              onClick={() => onShowToast && onShowToast("Refreshed event pipeline connection")}
              className="p-1.5 bg-white border border-slate-300 hover:bg-slate-100 rounded-lg text-slate-600 cursor-pointer"
            >
              <RefreshCw className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Live Stream Telemetry Table */}
        <div className="overflow-x-auto border border-slate-200 rounded-xl">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="bg-slate-900 text-slate-300 text-[10px] uppercase font-extrabold tracking-wider border-b border-slate-800">
                <th className="py-3 px-4">Event ID / Time</th>
                <th className="py-3 px-4">Event Type</th>
                <th className="py-3 px-4">Account & Primary Contact</th>
                <th className="py-3 px-4">Ingestion Connector</th>
                <th className="py-3 px-4">Raw Payload Preview</th>
                <th className="py-3 px-4">Intent Score</th>
                <th className="py-3 px-4 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 font-medium text-slate-700 bg-white">
              {filteredEvents.map((evt) => (
                <tr key={evt.id} className="hover:bg-slate-50/80 transition-colors">
                  <td className="py-3 px-4">
                    <div className="font-bold text-slate-900 font-mono">{evt.id}</div>
                    <div className="text-[11px] text-slate-400 font-medium">{evt.timestamp}</div>
                  </td>
                  <td className="py-3 px-4">
                    <span className="font-extrabold text-indigo-700 bg-indigo-50 px-2.5 py-1 rounded-md border border-indigo-200">
                      {evt.eventType}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <div className="font-bold text-slate-900">{evt.account}</div>
                    <div className="text-[11px] text-slate-500 font-mono">{evt.contact} • {evt.accountId}</div>
                  </td>
                  <td className="py-3 px-4">
                    <div className="text-slate-800 font-semibold">{evt.source}</div>
                    <div className="text-[10px] text-slate-400 font-mono">{evt.channel}</div>
                  </td>
                  <td className="py-3 px-4 font-mono text-[10px] text-slate-600 max-w-xs truncate">
                    {evt.payload}
                  </td>
                  <td className="py-3 px-4">
                    <span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 text-[10px] font-extrabold rounded-md border border-emerald-300">
                      {evt.intentScore}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-right">
                    <button 
                      onClick={() => onShowToast && onShowToast(`Inspecting raw event schema payload for ${evt.id}`)}
                      className="px-2.5 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 text-[11px] font-bold rounded-lg cursor-pointer"
                    >
                      Inspect JSON
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Global Context Distinction Note */}
        <div className="bg-indigo-50/70 border border-indigo-200/80 rounded-xl p-4 flex items-start space-x-3 text-xs">
          <div className="w-5 h-5 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold shrink-0 mt-0.5">
            i
          </div>
          <div className="space-y-1">
            <div className="font-extrabold text-indigo-950">
              CDP Architecture Note: Global Events vs Account 360 Interactions
            </div>
            <div className="text-indigo-800 leading-relaxed">
              <strong>Events</strong> is a global CDP capability that monitors real-time event telemetry stream across all 840k platform interactions. 
              To inspect events specifically belonging to <strong>TechGear Europe</strong>, navigate to <strong>Accounts → Account 360 → Interactions tab</strong>.
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}
