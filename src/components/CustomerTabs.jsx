import React from 'react';
import { 
  LayoutDashboard, 
  MessageSquare, 
  CreditCard, 
  Sliders 
} from 'lucide-react';

export default function CustomerTabs({ activeTab, onSelectTab }) {
  const tabs = [
    { id: "Overview", label: "Overview", icon: LayoutDashboard, badge: null },
    { id: "Interactions", label: "Interactions", icon: MessageSquare, badge: "18" },
    { id: "Commercial & Usage", label: "Commercial & Usage", icon: CreditCard, badge: "Active" },
    { id: "Attributes", label: "Attributes", icon: Sliders, badge: "52" }
  ];

  return (
    <div className="bg-white border-b border-slate-200 px-6 sticky top-16 z-20 shadow-2xs">
      <div className="flex items-center space-x-2 overflow-x-auto scrollbar-none">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => onSelectTab(tab.id)}
              className={`flex items-center space-x-2 py-3 px-4 border-b-2 text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                isActive
                  ? 'border-indigo-600 text-indigo-600 font-extrabold bg-slate-50/50'
                  : 'border-transparent text-slate-600 hover:text-slate-900 hover:border-slate-300'
              }`}
            >
              <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-indigo-600' : 'text-slate-400'}`} />
              <span>{tab.label}</span>
              {tab.badge && (
                <span className={`text-[10px] px-1.5 py-0.2 rounded-md font-bold ${
                  isActive 
                    ? 'bg-indigo-100 text-indigo-800' 
                    : 'bg-slate-100 text-slate-600'
                }`}>
                  {tab.badge}
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
