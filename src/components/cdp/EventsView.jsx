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
  Download,
  Sparkles,
  ChevronRight,
  X,
  Sliders,
  CheckCircle2,
  Cpu,
  ArrowRight
} from 'lucide-react';

export default function EventsView({ 
  customer, 
  onShowToast, 
  onNavigateToAccountInteractions, 
  onNavigateToSegments 
}) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedEventType, setSelectedEventType] = useState("ALL");
  const [isLiveStreaming, setIsLiveStreaming] = useState(true);
  const [selectedEventForDrawer, setSelectedEventForDrawer] = useState(null);

  const stats = [
    { label: "Total Events Ingested (24h)", value: "842,109", change: "+14.2% vs yesterday" },
    { label: "Active Telemetry Pipelines", value: "14 Live", change: "100% Operational" },
    { label: "Avg Ingestion Latency", value: "42 ms", change: "Sub-second SLA" },
    { label: "Signal Conversion Rate", value: "94.8%", change: "Behavior → AI Signal" }
  ];

  const eventsList = [
    {
      id: "EVT-90412",
      timestamp: "Today · 10:42 AM",
      eventType: "Viewed myPricing Page",
      account: "TechGear Europe",
      accountId: "ACC-89420-EU",
      contact: "Antoine Laurent",
      channel: "Web Application",
      source: "Google Tag Manager API",
      payload: { path: "/pricing/my-pricing", duration: "184 sec", scrollDepth: "85%", device: "Chrome / macOS" },
      rawPayloadStr: "{ path: '/pricing/my-pricing', duration: 184, scrollDepth: '85%' }",
      intentScore: "High Intent (+15)",
      signalGenerated: "High Pricing Intent",
      derivedSignal: "myPricing Interest: HIGH INTENT (91% confidence)",
      signalEvidence: "4 myPricing visits + Playbook download + Webinar attendance + Pricing email click",
      usedInSegments: ["High-Intent Accounts", "myPricing Prospects"],
      status: "Ingested"
    },
    {
      id: "EVT-90411",
      timestamp: "10 mins ago",
      eventType: "ROI Calculator Calculation",
      account: "ElectroNordic AB",
      accountId: "ACC-77211-SE",
      contact: "Freja Lindqvist",
      channel: "Web Portal",
      source: "Segment Web SDK",
      payload: { calculatedSavings: "€14,200/yr", currency: "EUR", modules: ["myPricing", "myOrders"] },
      rawPayloadStr: "{ calculatedSavings: 14200, currency: 'EUR', modules: ['myPricing', 'myOrders'] }",
      intentScore: "High Intent (+25)",
      signalGenerated: "Commercial Evaluation",
      derivedSignal: "Expansion Readiness: HIGH INTENT (94% confidence)",
      signalEvidence: "ROI tool calculation + 2 seat expansion queries in 48h",
      usedInSegments: ["Expansion Candidates", "myPricing Prospects"],
      status: "Ingested"
    },
    {
      id: "EVT-90410",
      timestamp: "25 mins ago",
      eventType: "Shopify Integration Auth",
      account: "Apex Logistics Retail",
      accountId: "ACC-54109-DE",
      contact: "Markus Weber",
      channel: "API Webhook",
      source: "Shopify OAuth Connector",
      payload: { shopId: "apex-de.myshopify.com", status: "connected", storeCount: 14 },
      rawPayloadStr: "{ shopId: 'apex-de.myshopify.com', status: 'connected', storeCount: 14 }",
      intentScore: "Technical Intent (+10)",
      signalGenerated: "Technical Onboarding",
      derivedSignal: "Connector Health: HEALTHY (100% Sync)",
      signalEvidence: "14 store connections authenticated successfully",
      usedInSegments: ["E-Commerce Integration Active"],
      status: "Ingested"
    },
    {
      id: "EVT-90409",
      timestamp: "1 hour ago",
      eventType: "Downloaded Playbook",
      account: "Fnac Digital Commerce",
      accountId: "ACC-31092-FR",
      contact: "Camille Dupont",
      channel: "REST API",
      source: "HubSpot Form Ingestion",
      payload: { contentId: "playbook-pricing-v4.pdf", asset: "Competitor Matrix" },
      rawPayloadStr: "{ contentId: 'playbook-pricing-v4.pdf', asset: 'Competitor Matrix' }",
      intentScore: "Medium Intent (+18)",
      signalGenerated: "Content Evaluation",
      derivedSignal: "Product Evaluation: ACTIVE (88% confidence)",
      signalEvidence: "PDF asset downloaded + 3 competitor page visits",
      usedInSegments: ["High-Intent Accounts", "Competitor Replacement Target"],
      status: "Ingested"
    },
    {
      id: "EVT-90408",
      timestamp: "2 hours ago",
      eventType: "Pricing Rules Export PDF",
      account: "Iberia Tech Retail",
      accountId: "ACC-44910-ES",
      contact: "Carlos Gomez",
      channel: "Web Application",
      source: "ADA Web Frontend",
      payload: { reportType: "Q4_Competitor_Pricing_Strategy.pdf", rowsExported: 450 },
      rawPayloadStr: "{ reportType: 'Q4_Competitor_Pricing_Strategy.pdf' }",
      intentScore: "Product Usage (+12)",
      signalGenerated: "Power Usage Signal",
      derivedSignal: "myPricing Usage: POWER USER (96% active)",
      signalEvidence: "450 pricing rules generated + daily report exports",
      usedInSegments: ["Power Users", "myPricing Prospects"],
      status: "Ingested"
    }
  ];

  const filteredEvents = eventsList.filter(evt => {
    const matchesSearch = evt.account.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          evt.eventType.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          evt.accountId.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          evt.signalGenerated.toLowerCase().includes(searchTerm.toLowerCase());
    if (selectedEventType === "ALL") return matchesSearch;
    return matchesSearch && evt.intentScore.includes(selectedEventType);
  });

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      
      {/* 1. GLOBAL EVENTS HEADER */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-4">
          <div>
            <div className="flex items-center space-x-2.5">
              <div className="w-9 h-9 rounded-xl bg-indigo-50 text-indigo-600 border border-indigo-200 flex items-center justify-center font-bold">
                <Activity className="w-5 h-5" />
              </div>
              <div>
                <h1 className="text-xl font-extrabold text-slate-900 tracking-tight flex items-center space-x-2">
                  <span>Global Behavioral Events & Intelligence Stream</span>
                  <span className="px-2.5 py-0.5 text-xs font-extrabold bg-indigo-50 text-indigo-700 rounded-full border border-indigo-200">
                    CDP Signal Pipeline
                  </span>
                </h1>
                <p className="text-xs text-slate-500 font-medium mt-0.5">
                  Real-time event telemetry ingestion feeding customer profiles, AI intelligence signals, and segment builder rules
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

      {/* 3. EVENT STREAM TABLE & CONTROLS */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 space-y-4">
        
        {/* Filter and Search Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 bg-slate-50 p-3 rounded-xl border border-slate-200">
          <div className="relative flex-1 w-full">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
            <input 
              type="text" 
              placeholder="Search event type, account name, generated signal, or Account ID..."
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

        {/* Live Stream Telemetry Table with Signal & Segment columns */}
        <div className="overflow-x-auto border border-slate-200 rounded-xl">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="bg-slate-900 text-slate-300 text-[10px] uppercase font-extrabold tracking-wider border-b border-slate-800">
                <th className="py-3 px-4">Event & Timestamp</th>
                <th className="py-3 px-4">Account & Primary Contact</th>
                <th className="py-3 px-4">Signal Generated</th>
                <th className="py-3 px-4">Used In Segments</th>
                <th className="py-3 px-4">Source Connector</th>
                <th className="py-3 px-4 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 font-medium text-slate-700 bg-white">
              {filteredEvents.map((evt) => (
                <tr key={evt.id} className="hover:bg-slate-50/80 transition-colors">
                  
                  {/* Event & Timestamp */}
                  <td className="py-3 px-4">
                    <div className="font-extrabold text-indigo-700">{evt.eventType}</div>
                    <div className="text-[11px] text-slate-400 font-mono mt-0.5">{evt.timestamp} • {evt.id}</div>
                  </td>

                  {/* Account & Contact */}
                  <td className="py-3 px-4">
                    <div className="font-bold text-slate-900">{evt.account}</div>
                    <div className="text-[11px] text-slate-500 font-mono">{evt.contact} • {evt.accountId}</div>
                  </td>

                  {/* Signal Generated */}
                  <td className="py-3 px-4">
                    <div className="flex items-center space-x-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-purple-600 shrink-0" />
                      <span className="font-bold text-slate-900">{evt.signalGenerated}</span>
                    </div>
                    <span className="inline-block mt-0.5 px-2 py-0.2 bg-emerald-100 text-emerald-800 text-[10px] font-extrabold rounded">
                      {evt.intentScore}
                    </span>
                  </td>

                  {/* Used in Segments */}
                  <td className="py-3 px-4">
                    <div className="flex flex-wrap gap-1">
                      {evt.usedInSegments.map((seg, idx) => (
                        <span key={idx} className="px-2 py-0.5 bg-slate-100 text-slate-700 text-[10px] font-extrabold rounded border border-slate-200">
                          ✓ {seg}
                        </span>
                      ))}
                    </div>
                  </td>

                  {/* Source */}
                  <td className="py-3 px-4">
                    <div className="text-slate-800 font-semibold">{evt.source}</div>
                    <div className="text-[10px] text-slate-400 font-mono">{evt.channel}</div>
                  </td>

                  {/* Inspect Action */}
                  <td className="py-3 px-4 text-right">
                    <button 
                      onClick={() => setSelectedEventForDrawer(evt)}
                      className="px-3 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white text-[11px] font-extrabold rounded-lg shadow-2xs flex items-center space-x-1 ml-auto cursor-pointer transition-all"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Inspect Event</span>
                    </button>
                  </td>

                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>

      {/* 4. EVENT DETAILS DRAWER (INSPECT EVENT MODAL) */}
      {selectedEventForDrawer && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs z-50 flex justify-end animate-in fade-in duration-200">
          <div className="w-full max-w-xl bg-white min-h-screen shadow-2xl flex flex-col justify-between border-l border-slate-200 animate-in slide-in-from-right duration-200">
            
            {/* Drawer Header */}
            <div className="p-6 border-b border-slate-200 bg-slate-900 text-white space-y-2">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-0.5 bg-indigo-500/30 text-indigo-300 text-xs font-extrabold rounded border border-indigo-400/30">
                  EVENT DETAILS & CDP PIPELINE
                </span>
                <button 
                  onClick={() => setSelectedEventForDrawer(null)}
                  className="text-slate-400 hover:text-white p-1 rounded-lg cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <h2 className="text-xl font-black text-white">
                {selectedEventForDrawer.eventType}
              </h2>

              <div className="text-xs text-slate-400 flex items-center space-x-3 font-mono">
                <span>{selectedEventForDrawer.timestamp}</span>
                <span>•</span>
                <span>ID: {selectedEventForDrawer.id}</span>
                <span>•</span>
                <span className="text-emerald-400 font-bold">{selectedEventForDrawer.status}</span>
              </div>
            </div>

            {/* Drawer Content Body */}
            <div className="p-6 flex-1 overflow-y-auto space-y-6 text-xs">
              
              {/* Account Information */}
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-2">
                <div className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider">Target Customer Account</div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-extrabold text-slate-900 text-sm">{selectedEventForDrawer.account}</div>
                    <div className="text-slate-500 font-mono text-[11px]">{selectedEventForDrawer.contact} • {selectedEventForDrawer.accountId}</div>
                  </div>
                  <button 
                    onClick={() => {
                      setSelectedEventForDrawer(null);
                      if (onNavigateToAccountInteractions) onNavigateToAccountInteractions();
                    }}
                    className="px-3 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-[11px] rounded-lg shadow-2xs flex items-center space-x-1 cursor-pointer"
                  >
                    <span>View Account 360</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Event Payload Properties */}
              <div className="space-y-2">
                <div className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider">Raw Telemetry Properties</div>
                <div className="bg-slate-900 text-slate-200 p-4 rounded-xl font-mono text-[11px] space-y-1.5 border border-slate-800">
                  <div className="text-indigo-400">// Ingested via {selectedEventForDrawer.source}</div>
                  {Object.entries(selectedEventForDrawer.payload).map(([k, v], i) => (
                    <div key={i} className="flex items-center justify-between">
                      <span className="text-slate-400">{k}:</span>
                      <span className="text-emerald-400 font-bold">{v}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CONTRIBUTES TO SIGNAL */}
              <div className="bg-purple-50/80 border border-purple-200 p-4 rounded-xl space-y-2">
                <div className="text-[10px] font-extrabold text-purple-700 uppercase tracking-wider flex items-center space-x-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-purple-600" />
                  <span>CONTRIBUTES TO INTELLIGENCE SIGNAL</span>
                </div>
                <div className="font-extrabold text-purple-950 text-sm">
                  {selectedEventForDrawer.derivedSignal}
                </div>
                <p className="text-purple-800 leading-relaxed font-medium">
                  <strong>Evidence Trace:</strong> {selectedEventForDrawer.signalEvidence}
                </p>
              </div>

              {/* USED BY SEGMENTS */}
              <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl space-y-3">
                <div className="text-[10px] font-extrabold text-slate-500 uppercase tracking-wider flex items-center space-x-1.5">
                  <Layers className="w-3.5 h-3.5 text-indigo-600" />
                  <span>USED BY AUDIENCE SEGMENTS</span>
                </div>
                <div className="space-y-1.5">
                  {selectedEventForDrawer.usedInSegments.map((seg, idx) => (
                    <div key={idx} className="flex items-center justify-between bg-white p-2.5 rounded-lg border border-slate-200 font-bold text-slate-900">
                      <span className="flex items-center space-x-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                        <span>{seg}</span>
                      </span>
                      <span className="text-[10px] font-mono text-slate-400">Active Rule Match</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Drawer Footer Actions */}
            <div className="p-4 border-t border-slate-200 bg-slate-50 flex items-center justify-between">
              <button 
                onClick={() => {
                  setSelectedEventForDrawer(null);
                  if (onNavigateToAccountInteractions) onNavigateToAccountInteractions();
                }}
                className="px-4 py-2 bg-slate-200 hover:bg-slate-300 text-slate-800 font-bold text-xs rounded-xl cursor-pointer"
              >
                View Account Interactions
              </button>

              <button 
                onClick={() => {
                  setSelectedEventForDrawer(null);
                  if (onNavigateToSegments) onNavigateToSegments();
                }}
                className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold text-xs rounded-xl shadow-xs cursor-pointer flex items-center space-x-1.5"
              >
                <Sliders className="w-3.5 h-3.5" />
                <span>Build / Edit Segment</span>
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
