import React, { useState } from 'react';
import { Search, HelpCircle, Bell, ChevronDown, Building2, Sparkles } from 'lucide-react';

export default function Header() {
  const [workspace, setWorkspace] = useState("Boostmyshop — Enterprise Europe");

  return (
    <header className="h-16 bg-white border-b border-slate-200 px-6 flex items-center justify-between sticky top-0 z-30 shadow-xs">
      {/* Global Search Bar */}
      <div className="flex-1 max-w-xl relative">
        <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
        <input
          type="text"
          placeholder="Search accounts, campaigns, segments, or events..."
          className="w-full pl-10 pr-12 py-2 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 focus:bg-white transition-all text-slate-800 placeholder-slate-400"
        />
        <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center space-x-1">
          <kbd className="px-1.5 py-0.5 text-[10px] font-mono text-slate-400 bg-slate-200/60 border border-slate-300 rounded">⌘K</kbd>
        </div>
      </div>

      {/* Right Controls */}
      <div className="flex items-center space-x-4 ml-4">
        {/* Live AI Status pill */}
        <div className="hidden xl:flex items-center space-x-2 px-2.5 py-1 bg-emerald-50 border border-emerald-200/80 rounded-full">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-[11px] font-semibold text-emerald-700 flex items-center space-x-1">
            <Sparkles className="w-3 h-3 text-emerald-600 inline mr-0.5" />
            <span>ADA AI Decision Engine Active</span>
          </span>
        </div>

        {/* Workspace Selector */}
        <div className="relative">
          <button className="flex items-center space-x-2 px-3 py-1.5 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-lg text-xs font-medium text-slate-700 transition-colors">
            <Building2 className="w-3.5 h-3.5 text-indigo-600" />
            <span className="max-w-[200px] truncate">{workspace}</span>
            <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
          </button>
        </div>

        <div className="h-5 w-px bg-slate-200" />

        {/* Help */}
        <button 
          title="Help & Documentation"
          className="p-2 text-slate-500 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors relative"
        >
          <HelpCircle className="w-4 h-4" />
        </button>

        {/* Notifications */}
        <button 
          title="Notifications"
          className="p-2 text-slate-500 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors relative"
        >
          <Bell className="w-4 h-4" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-indigo-600 rounded-full ring-2 ring-white" />
        </button>

        {/* User Profile */}
        <div className="flex items-center space-x-3 pl-2">
          <img
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80"
            alt="User avatar"
            className="w-8 h-8 rounded-full object-cover ring-2 ring-indigo-500/20"
          />
          <div className="hidden lg:block text-left">
            <div className="text-xs font-semibold text-slate-800 leading-tight">Sarah Chen</div>
            <div className="text-[10px] text-slate-500 leading-tight">Senior Product Marketer</div>
          </div>
        </div>
      </div>
    </header>
  );
}
