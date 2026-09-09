import React, { useState } from 'react';
import { 
  Home, 
  MessageSquare, 
  Bot, 
  Megaphone, 
  Users, 
  ChevronDown, 
  ChevronRight,
  BarChart3, 
  Radio, 
  Layers, 
  Settings,
  Database,
  Tag,
  Copy,
  ShieldCheck,
  Zap,
  Activity,
  Sliders,
  Building2,
  CreditCard
} from 'lucide-react';

export default function Sidebar({ activeSubTab = "Overview", onSelectSubTab }) {
  const [c360Expanded, setC360Expanded] = useState(true);

  const c360Items = [
    { label: "Overview", icon: Building2, count: null },
    { label: "Accounts", icon: Users, count: "1.4k" },
    { label: "Segments", icon: Layers, count: "48" },
    { label: "Events", icon: Activity, count: "840k" },
    { label: "Attributes", icon: Sliders, count: "52" },
    { label: "Tags", icon: Tag, count: "28" },
    { label: "Data sources", icon: Database, count: "6" },
    { label: "Consent & Preferences", icon: ShieldCheck, count: null }
  ];

  return (
    <aside className="w-64 bg-slate-900 text-slate-300 min-h-screen flex flex-col border-r border-slate-800 shrink-0 text-sm">
      {/* Brand Header */}
      <div className="h-16 px-5 flex items-center justify-between border-b border-slate-800">
        <div className="flex items-center space-x-2.5">
          <div className="w-8 h-8 rounded-lg ada-gradient-bg flex items-center justify-center text-white font-bold text-lg shadow-md">
            A
          </div>
          <div>
            <div className="font-bold text-white tracking-wide text-base leading-none">ADA CAIP</div>
            <div className="text-[10px] text-slate-400 font-medium tracking-wider uppercase mt-0.5">Boostmyshop Marketing</div>
          </div>
        </div>
        <span className="px-1.5 py-0.5 text-[10px] font-semibold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 rounded">
          v4.2
        </span>
      </div>

      {/* Navigation Links */}
      <div className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
        {/* Home */}
        <button className="w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/60 transition-colors font-medium text-left">
          <Home className="w-4 h-4 text-slate-400" />
          <span>Home</span>
        </button>

        {/* Campaigns */}
        <button className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/60 transition-colors font-medium text-left">
          <div className="flex items-center space-x-3">
            <Megaphone className="w-4 h-4 text-slate-400" />
            <span>Campaigns</span>
          </div>
          <span className="px-1.5 py-0.5 text-[11px] font-semibold bg-indigo-500 text-white rounded-full">
            12
          </span>
        </button>

        {/* Account 360 - Active Accordion Header */}
        <div className="pt-1">
          <button 
            onClick={() => setC360Expanded(!c360Expanded)}
            className="w-full flex items-center justify-between px-3 py-2 rounded-lg bg-indigo-950/60 text-white font-semibold text-left border border-indigo-800/50 shadow-xs cursor-pointer"
          >
            <div className="flex items-center space-x-3">
              <div className="w-5 h-5 rounded flex items-center justify-center bg-indigo-600 text-white">
                <Zap className="w-3.5 h-3.5" />
              </div>
              <span className="text-indigo-200">Account 360</span>
            </div>
            {c360Expanded ? (
              <ChevronDown className="w-4 h-4 text-indigo-400" />
            ) : (
              <ChevronRight className="w-4 h-4 text-indigo-400" />
            )}
          </button>

          {/* Sub Navigation Items (Account 360 tabs + Global CDP Modules) */}
          {c360Expanded && (
            <div className="ml-3 pl-3 border-l border-indigo-900/50 my-1 space-y-0.5">
              {[
                { label: "Overview", icon: Building2, count: null },
                { label: "Interactions", icon: MessageSquare, count: "18" },
                { label: "Commercial & Usage", icon: CreditCard, count: "Active" },
                { label: "Attributes", icon: Sliders, count: "52" },
                { label: "Accounts", icon: Users, count: "1.4k" },
                { label: "Segments", icon: Layers, count: "48" },
                { label: "Events", icon: Activity, count: "840k" },
                { label: "Tags & DNC", icon: Tag, count: "28" },
                { label: "Data Sources", icon: Database, count: "6" },
                { label: "Duplicates", icon: Copy, count: "2" },
                { label: "Compliance & GDPR", icon: ShieldCheck, count: "Verified" }
              ].map((item) => {
                const ItemIcon = item.icon;
                const isActive = activeSubTab === item.label;
                return (
                  <button
                    key={item.label}
                    onClick={() => onSelectSubTab && onSelectSubTab(item.label)}
                    className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded-md text-xs transition-all text-left cursor-pointer ${
                      isActive 
                        ? 'bg-indigo-600 text-white font-medium shadow-xs' 
                        : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                    }`}
                  >
                    <div className="flex items-center space-x-2.5 truncate">
                      <ItemIcon className={`w-3.5 h-3.5 ${isActive ? 'text-white' : 'text-slate-500'}`} />
                      <span className="truncate">{item.label}</span>
                    </div>
                    {item.count && (
                      <span className={`text-[10px] px-1.5 py-0.2 rounded font-normal ${
                        isActive ? 'bg-indigo-700 text-indigo-100' : 'text-slate-500 bg-slate-800'
                      }`}>
                        {item.count}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* Conversations */}
        <button className="w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/60 transition-colors font-medium text-left">
          <MessageSquare className="w-4 h-4 text-slate-400" />
          <span>Conversations</span>
        </button>

        {/* Analytics */}
        <button className="w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/60 transition-colors font-medium text-left">
          <BarChart3 className="w-4 h-4 text-slate-400" />
          <span>Analytics</span>
        </button>

        {/* Channels */}
        <button className="w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/60 transition-colors font-medium text-left">
          <Radio className="w-4 h-4 text-slate-400" />
          <span>Channels</span>
        </button>

        {/* Integrations */}
        <button className="w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/60 transition-colors font-medium text-left">
          <Layers className="w-4 h-4 text-slate-400" />
          <span>Integrations</span>
        </button>
      </div>

      {/* Settings */}
      <div className="p-3 border-t border-slate-800">
        <button className="w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/60 transition-colors font-medium text-left">
          <Settings className="w-4 h-4 text-slate-400" />
          <span>Settings</span>
        </button>
      </div>
    </aside>
  );
}
