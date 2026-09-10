import React, { useState } from 'react';
import { 
  Home, 
  MessageSquare, 
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
  CreditCard,
  Building
} from 'lucide-react';

export default function Sidebar({ activeSubTab = "Overview", onSelectSubTab }) {
  const [account360Expanded, setAccount360Expanded] = useState(true);
  const [cdpExpanded, setCdpExpanded] = useState(true);

  const cdpCapabilities = [
    { id: "Global_Attributes", label: "Attributes", icon: Sliders, badge: "52" },
    { id: "Segments", label: "Segments", icon: Layers, badge: "48" },
    { id: "Events", label: "Events", icon: Activity, badge: "840k" },
    { id: "Tags & DNC", label: "Tags & DNC", icon: Tag, badge: "28" },
    { id: "Duplicates", label: "Duplicates", icon: Copy, badge: "2" },
    { id: "Data Sources", label: "Data Sources", icon: Database, badge: "6" },
    { id: "Compliance & GDPR", label: "Compliance & GDPR", icon: ShieldCheck, badge: "Verified" }
  ];

  const engagementItems = [
    { id: "Conversations", label: "Conversations", icon: MessageSquare },
    { id: "Campaigns", label: "Campaigns", icon: Megaphone, badge: "12" },
    { id: "Channels", label: "Channels", icon: Radio }
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

      {/* Navigation Sections */}
      <div className="flex-1 overflow-y-auto py-4 px-3 space-y-4">
        
        {/* GROUP 1: ACCOUNT 360 */}
        <div className="space-y-1">
          <div className="px-3 pb-1 text-[10px] font-extrabold text-slate-400 uppercase tracking-wider flex items-center justify-between">
            <span>ACCOUNT 360</span>
            <span className="text-[9px] font-normal text-slate-400">B2B</span>
          </div>

          <button 
            onClick={() => onSelectSubTab && onSelectSubTab("People")}
            className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-bold text-left transition-all cursor-pointer ${
              activeSubTab === "People"
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'text-slate-300 hover:text-white hover:bg-slate-800/80'
            }`}
          >
            <div className="flex items-center space-x-2.5">
              <Users className="w-4 h-4 text-indigo-400" />
              <span>Accounts Directory</span>
            </div>
            <span className="text-[10px] px-1.5 py-0.2 rounded font-mono font-semibold bg-slate-800 text-slate-300">
              8,420
            </span>
          </button>

          <button 
            onClick={() => onSelectSubTab && onSelectSubTab("Overview")}
            className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-bold text-left transition-all cursor-pointer pl-6 ${
              ["Overview", "Interactions", "Commercial & Usage", "Attributes"].includes(activeSubTab)
                ? 'bg-indigo-900/60 text-indigo-200 border border-indigo-700/60'
                : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
            }`}
          >
            <div className="flex items-center space-x-2 truncate">
              <Building2 className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
              <span className="truncate">TechGear Europe</span>
            </div>
            <span className="text-[9px] px-1.5 py-0.2 rounded font-extrabold bg-indigo-500/20 text-indigo-300 shrink-0">
              Account 360
            </span>
          </button>
        </div>

        {/* GROUP 2: CDP CAPABILITIES */}
        <div className="pt-2 border-t border-slate-800/80 space-y-1">
          <div className="px-3 pb-1 text-[10px] font-extrabold text-slate-400 uppercase tracking-wider flex items-center justify-between">
            <span>CDP CAPABILITIES</span>
            <span className="text-[9px] font-normal text-slate-400">Platform</span>
          </div>

          {cdpCapabilities.map((item) => {
            const Icon = item.icon;
            const isActive = activeSubTab === item.id || (item.id === "Global_Attributes" && activeSubTab === "Global_Attributes");
            return (
              <button
                key={item.id}
                onClick={() => onSelectSubTab && onSelectSubTab(item.id)}
                className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-medium text-left transition-all cursor-pointer ${
                  isActive
                    ? 'bg-indigo-600 text-white font-bold shadow-sm'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                <div className="flex items-center space-x-2.5">
                  <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                  <span>{item.label}</span>
                </div>
                {item.badge && (
                  <span className={`text-[10px] px-1.5 py-0.2 rounded font-mono font-semibold ${
                    isActive ? 'bg-indigo-700 text-indigo-100' : 'bg-slate-800 text-slate-400'
                  }`}>
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* GROUP 3: ENGAGEMENT */}
        <div className="pt-2 border-t border-slate-800/80 space-y-1">
          <div className="px-3 pb-1 text-[10px] font-extrabold text-slate-400 uppercase tracking-wider">
            ENGAGEMENT
          </div>

          {engagementItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => onSelectSubTab && onSelectSubTab(item.id)}
                className="w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-medium text-left text-slate-400 hover:text-white hover:bg-slate-800/60 transition-all cursor-pointer"
              >
                <div className="flex items-center space-x-2.5">
                  <Icon className="w-4 h-4 text-slate-400" />
                  <span>{item.label}</span>
                </div>
                {item.badge && (
                  <span className="text-[10px] px-1.5 py-0.2 rounded-full font-bold bg-indigo-500 text-white">
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
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
