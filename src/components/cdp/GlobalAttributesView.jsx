import React, { useState } from 'react';
import { 
  Sliders, 
  Plus, 
  Search, 
  Filter, 
  CheckCircle2, 
  Sparkles, 
  Database, 
  ShieldCheck, 
  RefreshCw,
  Building2,
  Lock,
  Edit3
} from 'lucide-react';

export default function GlobalAttributesView({ customer, onShowToast }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("ALL");

  const schemaStats = [
    { label: "Total Platform Attributes", value: "52 Attributes", sub: "46 Standard • 6 Custom" },
    { label: "AI-Derived Signals", value: "12 Attributes", sub: "Calculated in Real-Time" },
    { label: "Sync Connectors", value: "6 Data Sources", sub: "Salesforce, Shopify, Hubspot" },
    { label: "Compliance & Consent", value: "100% GDPR Compliant", sub: "Zero PII Leaks" }
  ];

  const categories = [
    { name: "Company Information", count: 7, desc: "Legal entity, size, industry, revenue, country" },
    { name: "Commercial & Financial", count: 9, desc: "MRR, Plan type, ARR, Billing status, Currency" },
    { name: "Product & Usage", count: 14, desc: "API calls, Module adoption, Active seats, License tier" },
    { name: "Marketing & Behavioral", count: 12, desc: "Pricing visits, Intent level, Lead source, Web sessions" },
    { name: "AI-Derived Intelligence", count: 6, desc: "Churn risk probability, Next best action, Upsell score" },
    { name: "Consent & Privacy", count: 4, desc: "GDPR opt-in, DNC status, Email marketing permission" }
  ];

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      
      {/* 1. GLOBAL DATA MODEL HEADER */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-4">
          <div>
            <div className="flex items-center space-x-2.5">
              <div className="w-9 h-9 rounded-xl bg-indigo-50 text-indigo-600 border border-indigo-200 flex items-center justify-center font-bold">
                <Sliders className="w-5 h-5" />
              </div>
              <div>
                <h1 className="text-xl font-extrabold text-slate-900 tracking-tight flex items-center space-x-2">
                  <span>Data Model & Unified Attributes Schema</span>
                  <span className="px-2.5 py-0.5 text-xs font-extrabold bg-indigo-50 text-indigo-700 rounded-full border border-indigo-200">
                    Global CDP Governance
                  </span>
                </h1>
                <p className="text-xs text-slate-500 font-medium mt-0.5">
                  Manage platform-wide unified schema attributes, data types, sync pipelines, and AI-derived signal definitions
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-2 shrink-0">
            <button 
              onClick={() => onShowToast && onShowToast("Opened New Custom Attribute Modal")}
              className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold text-xs rounded-xl shadow-xs flex items-center space-x-1.5 cursor-pointer transition-all"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Create Custom Attribute</span>
            </button>
          </div>
        </div>

        {/* 4 Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {schemaStats.map((stat, idx) => (
            <div key={idx} className="bg-slate-50 p-4 rounded-xl border border-slate-200/80">
              <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">{stat.label}</div>
              <div className="text-xl font-black text-slate-900 mt-1">{stat.value}</div>
              <div className="text-[11px] font-semibold text-indigo-600 mt-0.5">{stat.sub}</div>
            </div>
          ))}
        </div>
      </div>

      {/* 2. ATTRIBUTES CATEGORY DIRECTORY & SEARCH */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 space-y-4">
        
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 bg-slate-50 p-3 rounded-xl border border-slate-200">
          <div className="relative flex-1 w-full">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
            <input 
              type="text" 
              placeholder="Search attribute schema (e.g., Company Size, myPricing Interest, MRR)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-4 py-1.5 bg-white border border-slate-300 rounded-lg text-xs font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div className="flex items-center space-x-2 w-full sm:w-auto">
            <select 
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-3 py-1.5 bg-white border border-slate-300 rounded-lg text-xs font-semibold text-slate-700 focus:outline-none"
            >
              <option value="ALL">All 6 Schema Categories</option>
              {categories.map((c, i) => (
                <option key={i} value={c.name}>{c.name} ({c.count})</option>
              ))}
            </select>
          </div>
        </div>

        {/* Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((cat, idx) => (
            <div key={idx} className="bg-slate-50/80 hover:bg-slate-50 p-4 rounded-xl border border-slate-200 transition-all space-y-3 cursor-pointer group">
              <div className="flex items-center justify-between">
                <div className="font-extrabold text-slate-900 text-sm group-hover:text-indigo-600 transition-colors">
                  {cat.name}
                </div>
                <span className="px-2 py-0.5 bg-indigo-100 text-indigo-800 text-[10px] font-extrabold rounded-full">
                  {cat.count} fields
                </span>
              </div>
              <p className="text-xs text-slate-500 font-medium leading-relaxed">
                {cat.desc}
              </p>
              <div className="pt-2 border-t border-slate-200/80 flex items-center justify-between text-[11px]">
                <span className="text-slate-400 font-semibold">Schema: Verified</span>
                <span className="text-indigo-600 font-bold group-hover:underline">Inspect Category →</span>
              </div>
            </div>
          ))}
        </div>

        {/* Account vs Global Architecture Note */}
        <div className="bg-indigo-50/70 border border-indigo-200/80 rounded-xl p-4 flex items-start space-x-3 text-xs">
          <div className="w-5 h-5 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold shrink-0 mt-0.5">
            i
          </div>
          <div className="space-y-1">
            <div className="font-extrabold text-indigo-950">
              CDP Architecture Note: Global Data Model vs Account 360 Attributes
            </div>
            <div className="text-indigo-800 leading-relaxed">
              This screen manages the <strong>global CDP unified data model schema</strong> across all 52 attributes. 
              To inspect or edit attribute values specifically for <strong>TechGear Europe</strong>, navigate to <strong>Accounts → Account 360 → Attributes tab</strong>.
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}
