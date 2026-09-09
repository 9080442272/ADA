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

      {/* Block 4: Active Subscription Summary */}
      <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-4 space-y-3">
        <div className="flex items-center justify-between border-b border-slate-100 pb-2.5">
          <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center space-x-1.5">
            <CreditCard className="w-3.5 h-3.5 text-indigo-600" />
            <span>Active Subscription</span>
          </h3>
          <button 
            onClick={() => onOrderClick && onOrderClick({ items: "myFulfillment Pro Plan", amount: "€1,850/mo", status: "Active" })}
            className="text-[11px] font-bold text-indigo-600 hover:text-indigo-800 flex items-center space-x-0.5 cursor-pointer"
          >
            <span>View subscription →</span>
          </button>
        </div>

        <div className="space-y-3">
          {/* Product Name & Status */}
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs font-extrabold text-slate-900">myFulfillment Pro Plan</div>
              <div className="text-[11px] text-slate-500 font-medium">Fulfillment & Operations</div>
            </div>
            <span className="px-2 py-0.5 text-[10px] font-extrabold bg-emerald-50 text-emerald-800 border border-emerald-200 rounded-md flex items-center space-x-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <span>Active</span>
            </span>
          </div>

          {/* 3 Metrics Strip */}
          <div className="grid grid-cols-3 gap-2 text-center bg-slate-50 border border-slate-200/80 rounded-xl p-2.5">
            <div>
              <div className="text-xs font-extrabold text-slate-900 font-mono">€1,850 / mo</div>
              <div className="text-[10px] text-slate-400 font-medium">Current plan</div>
            </div>
            <div>
              <div className="text-xs font-extrabold text-slate-900 font-mono">1,420 orders/wk</div>
              <div className="text-[10px] text-slate-400 font-medium">Current usage</div>
            </div>
            <div>
              <div className="text-xs font-extrabold text-slate-900">Mar 2023</div>
              <div className="text-[10px] text-slate-400 font-medium">Customer since</div>
            </div>
          </div>

          {/* Feature Adoption Bar */}
          <div className="space-y-1">
            <div className="flex items-center justify-between text-[11px]">
              <span className="font-bold text-slate-700">Feature adoption</span>
              <span className="font-extrabold text-emerald-700">82%</span>
            </div>
            <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden border border-slate-200/60">
              <div className="h-full bg-emerald-500 rounded-full transition-all" style={{ width: '82%' }} />
            </div>
          </div>
        </div>
      </div>

    </aside>
  );
}
