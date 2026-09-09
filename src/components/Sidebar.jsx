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
  const [cdpExpanded, setCdpExpanded] = useState(true);

  const account360Items = [
    { label: "Accounts", sub: "TechGear Europe", icon: Users, count: "1.4k" },
  ];

  const cdpItems = [
    { label: "Segments", icon: Layers, count: "48" },
    { label: "Events", icon: Activity, count: "840k" },
    { label: "Attributes", icon: Sliders, count: "52" },
    { label: "Tags & DNC", icon: Tag, count: "28" },
    { label: "Duplicates", icon: Copy, count: "2" },
    { label: "Data Sources", icon: Database, count: "6" },
    { label: "Compliance & GDPR", icon: ShieldCheck, count: "Verified" }
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
            <div className="text-[10px] text-slate-400 font-medium tracking-wider uppercase mt-0.5">Boostmyshop CDP</div>
          </div>
        </div>
        <span className="px-1.5 py-0.5 text-[10px] font-semibold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 rounded">
          Enterprise
        </span>
      </div>

      {/* Navigation Links */}
      <div className="flex-1 overflow-y-auto py-4 px-3 space-y-2">
        
        {/* Main Section 1: Core Navigation */}
        <div className="space-y-0.5">
          <button className="w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/60 transition-colors font-medium text-left cursor-pointer">
            <Home className="w-4 h-4 text-slate-400" />
            <span>Home</span>
          </button>

          <button className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/60 transition-colors font-medium text-left cursor-pointer">
            <div className="flex items-center space-x-3">
              <Megaphone className="w-4 h-4 text-slate-400" />
              <span>Campaigns</span>
            </div>
            <span className="px-1.5 py-0.5 text-[11px] font-semibold bg-indigo-500 text-white rounded-full">
              12
            </span>
          </button>
        </div>

        {/* SECTION 2: ACCOUNT 360 (Entity-Level Experience) */}
        <div className="pt-2">
          <div className="px-3 pb-1 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
            Account 360
          </div>

          <button 
            onClick={() => onSelectSubTab && onSelectSubTab("Overview")}
            className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg border font-semibold text-left transition-all cursor-pointer ${
              ["Overview", "Interactions", "Commercial & Usage", "Attributes"].includes(activeSubTab)
                ? 'bg-indigo-600 text-white border-indigo-500 shadow-sm'
                : 'bg-slate-800/60 text-slate-300 hover:text-white hover:bg-slate-800 border-slate-700/60'
            }`}
          >
            <div className="flex items-center space-x-2.5 truncate">
              <Building2 className={`w-4 h-4 ${["Overview", "Interactions", "Commercial & Usage", "Attributes"].includes(activeSubTab) ? 'text-white' : 'text-indigo-400'}`} />
              <div className="truncate">
                <div className="text-xs font-bold leading-tight">Accounts</div>
                <div className="text-[10px] font-normal opacity-80 truncate">TechGear Europe</div>
              </div>
            </div>
            <span className={`text-[10px] px-1.5 py-0.5 rounded font-bold ${
              ["Overview", "Interactions", "Commercial & Usage", "Attributes"].includes(activeSubTab)
                ? 'bg-indigo-700 text-indigo-100'
                : 'bg-slate-700 text-slate-300'
            }`}>
              1.4k
            </span>
          </button>
        </div>

        {/* SECTION 3: CDP PLATFORM CAPABILITIES */}
        <div className="pt-3">
          <div className="px-3 pb-1.5 text-[10px] font-bold text-slate-400 uppercase tracking-wider flex items-center justify-between">
            <span>CDP Capabilities</span>
            <span className="text-[9px] font-normal text-slate-400">Platform</span>
          </div>

          <div className="space-y-0.5">
            {cdpItems.map((item) => {
              const ItemIcon = item.icon;
              const isActive = activeSubTab === item.label;
              return (
                <button
                  key={item.label}
                  onClick={() => onSelectSubTab && onSelectSubTab(item.label)}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs transition-all text-left cursor-pointer ${
                    isActive 
                      ? 'bg-indigo-600 text-white font-bold shadow-xs' 
                      : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                  }`}
                >
                  <div className="flex items-center space-x-2.5 truncate">
                    <ItemIcon className={`w-3.5 h-3.5 ${isActive ? 'text-white' : 'text-slate-500'}`} />
                    <span className="truncate">{item.label}</span>
                  </div>
                  {item.count && (
                    <span className={`text-[10px] px-1.5 py-0.2 rounded font-medium ${
                      isActive ? 'bg-indigo-700 text-indigo-100' : 'text-slate-500 bg-slate-800'
                    }`}>
                      {item.count}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* SECTION 4: Engagement & Channels */}
        <div className="pt-3 border-t border-slate-800/80 space-y-0.5">
          <button className="w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/60 transition-colors font-medium text-left cursor-pointer">
            <MessageSquare className="w-4 h-4 text-slate-400" />
            <span>Conversations</span>
          </button>

          <button className="w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/60 transition-colors font-medium text-left cursor-pointer">
            <BarChart3 className="w-4 h-4 text-slate-400" />
            <span>Analytics</span>
          </button>

          <button className="w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/60 transition-colors font-medium text-left cursor-pointer">
            <Radio className="w-4 h-4 text-slate-400" />
            <span>Channels</span>
          </button>

          <button className="w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/60 transition-colors font-medium text-left cursor-pointer">
            <Layers className="w-4 h-4 text-slate-400" />
            <span>Integrations</span>
          </button>
        </div>

      </div>

      {/* Settings */}
      <div className="p-3 border-t border-slate-800">
        <button className="w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/60 transition-colors font-medium text-left cursor-pointer">
          <Settings className="w-4 h-4 text-slate-400" />
          <span>Settings</span>
        </button>
      </div>
    </aside>
  );
}
