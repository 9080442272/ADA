import React from 'react';
import { 
  UserCheck, 
  Layers, 
  ShoppingBag, 
  Network, 
  ShieldCheck, 
  CheckCircle, 
  ChevronRight,
  Building,
  Ticket,
  Megaphone,
  CreditCard,
  Building2
} from 'lucide-react';

export default function RightSidebar({ customer, onSegmentClick, onOrderClick, onEntityClick }) {
  const sidebarDetails = customer.sidebarDetails || {};
  const recentSegments = customer.recentSegments || [];
  const recentCampaigns = customer.recentCampaigns || [];
  const recentOrders = customer.recentOrders || [];
  const relatedEntities = customer.relatedEntities || { household: [], linkedAccounts: [], openTickets: [] };

  return (
    <aside className="w-full space-y-5">

      {/* Block 2: Active Marketing Segments */}
      <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-4 space-y-3">
        <div className="flex items-center justify-between border-b border-slate-100 pb-2.5">
          <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center space-x-1.5">
            <Layers className="w-3.5 h-3.5 text-indigo-600" />
            <span>Active Segments</span>
          </h3>
          <span className="text-[10px] text-slate-400">{recentSegments.length} Segments</span>
        </div>

        <div className="space-y-1.5">
          {recentSegments.map((seg, idx) => (
            <div 
              key={idx}
              onClick={() => onSegmentClick && onSegmentClick(seg)}
              className="flex items-center justify-between p-2 rounded-lg bg-slate-50 hover:bg-indigo-50/50 border border-slate-200/70 hover:border-indigo-200 transition-colors cursor-pointer group"
            >
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-indigo-500" />
                <span className="text-xs font-bold text-slate-800 group-hover:text-indigo-600 transition-colors">
                  {seg.name}
                </span>
              </div>
              <span className="text-[10px] text-slate-500 font-medium bg-white px-1.5 py-0.5 rounded border border-slate-200">
                {seg.count}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Block 3: Account-Specific Recent Campaign Activity */}
      <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-4 space-y-3">
        <div className="flex items-center justify-between border-b border-slate-100 pb-2.5">
          <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center space-x-1.5">
            <Megaphone className="w-3.5 h-3.5 text-indigo-600" />
            <span>Recent Campaign Activity</span>
          </h3>
          <span className="text-[10px] font-semibold text-indigo-700 bg-indigo-50 px-1.5 py-0.5 rounded border border-indigo-200">
            Account Specific
          </span>
        </div>

        <div className="space-y-2 text-xs">
          {/* Campaign Action 1 */}
          <div className="p-3 bg-slate-50 border border-slate-200/80 rounded-xl space-y-1.5">
            <div className="flex items-center justify-between">
              <span className="font-extrabold text-slate-900 truncate">Pricing Strategy Campaign</span>
              <span className="text-[10px] font-mono text-slate-400">Today · 9:15 AM</span>
            </div>
            <div className="space-y-1 text-[11px]">
              <div className="flex items-center space-x-1.5 text-emerald-800 font-medium">
                <span className="w-3.5 h-3.5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-[9px]">✓</span>
                <span>Opened campaign email</span>
              </div>
              <div className="flex items-center space-x-1.5 text-emerald-800 font-medium">
                <span className="w-3.5 h-3.5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-[9px]">✓</span>
                <span>Clicked "Explore myPricing"</span>
              </div>
            </div>
          </div>

          {/* Campaign Action 2 */}
          <div className="p-3 bg-slate-50 border border-slate-200/80 rounded-xl space-y-1.5">
            <div className="flex items-center justify-between">
              <span className="font-extrabold text-slate-900 truncate">Competitive Pricing Webinar</span>
              <span className="text-[10px] font-mono text-slate-400">5 days ago</span>
            </div>
            <div className="space-y-1 text-[11px]">
              <div className="flex items-center space-x-1.5 text-emerald-800 font-medium">
                <span className="w-3.5 h-3.5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-[9px]">✓</span>
                <span>Attended 42 / 45 min</span>
              </div>
              <div className="flex items-center space-x-1.5 text-emerald-800 font-medium">
                <span className="w-3.5 h-3.5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-[9px]">✓</span>
                <span>Submitted API integration question</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-1 border-t border-slate-100 flex items-center justify-between">
          <button 
            onClick={() => onCampaignHistoryClick && onCampaignHistoryClick()}
            className="text-[11px] font-bold text-indigo-600 hover:text-indigo-800 flex items-center space-x-1 cursor-pointer"
          >
            <span>View campaign history →</span>
          </button>
        </div>
      </div>

      {/* Block 4: Commercial Activity & Subscriptions */}
      <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-4 space-y-3">
        <div className="flex items-center justify-between border-b border-slate-100 pb-2.5">
          <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center space-x-1.5">
            <CreditCard className="w-3.5 h-3.5 text-indigo-600" />
            <span>Active Subscriptions</span>
          </h3>
          <button className="text-[11px] font-semibold text-indigo-600 hover:text-indigo-800">View Invoices</button>
        </div>

        <div className="space-y-2">
          {recentOrders.map((ord) => (
            <div 
              key={ord.id}
              onClick={() => onOrderClick && onOrderClick(ord)}
              className="p-2.5 rounded-lg bg-slate-50 hover:bg-slate-100 border border-slate-200/80 transition-colors cursor-pointer text-xs space-y-1"
            >
              <div className="flex items-center justify-between font-bold text-slate-900">
                <span>{ord.items}</span>
                <span className="text-indigo-700 font-mono font-extrabold">{ord.amount}</span>
              </div>
              <div className="flex items-center justify-between text-[11px] text-slate-500">
                <span>ID: {ord.id}</span>
                <span className="text-emerald-600 font-bold">{ord.status}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

    </aside>
  );
}
