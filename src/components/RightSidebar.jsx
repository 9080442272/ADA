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
      
      {/* Block 1: B2B Account Details */}
      <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-4 space-y-3">
        <div className="flex items-center justify-between border-b border-slate-100 pb-2.5">
          <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center space-x-1.5">
            <Building2 className="w-3.5 h-3.5 text-indigo-600" />
            <span>Account Details</span>
          </h3>
          <span className="text-[10px] font-semibold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200">
            Verified B2B Account
          </span>
        </div>

        <div className="space-y-2 text-xs divide-y divide-slate-100">
          <div className="flex justify-between py-1">
            <span className="text-slate-500 font-medium">Company</span>
            <span className="font-bold text-slate-800">{customer.name}</span>
          </div>
          <div className="flex justify-between py-1">
            <span className="text-slate-500 font-medium">Industry</span>
            <span className="font-semibold text-slate-800">{customer.industry}</span>
          </div>
          <div className="flex justify-between py-1">
            <span className="text-slate-500 font-medium">Company Size</span>
            <span className="font-semibold text-slate-800">{customer.companySize}</span>
          </div>
          <div className="flex justify-between py-1">
            <span className="text-slate-500 font-medium">Country</span>
            <span className="font-semibold text-slate-800">{sidebarDetails.country || "Paris, France"}</span>
          </div>
          <div className="flex justify-between py-1">
            <span className="text-slate-500 font-medium">Primary Contact</span>
            <span className="font-semibold text-indigo-700 truncate max-w-[160px]">{customer.primaryContact}</span>
          </div>
          <div className="flex justify-between py-1">
            <span className="text-slate-500 font-medium">Account ID</span>
            <span className="font-mono font-bold text-slate-800">{customer.id}</span>
          </div>
          <div className="flex justify-between py-1">
            <span className="text-slate-500 font-medium">Customer Since</span>
            <span className="font-semibold text-slate-800">{customer.customerSince}</span>
          </div>
          <div className="flex justify-between py-1">
            <span className="text-slate-500 font-medium">Current Products</span>
            <span className="font-bold text-emerald-600">{sidebarDetails.currentProducts || "myFulfillment"}</span>
          </div>
          <div className="flex justify-between py-1">
            <span className="text-slate-500 font-medium">Account Owner</span>
            <span className="font-semibold text-slate-800">{sidebarDetails.accountOwner || "Claire Dubois"}</span>
          </div>
          <div className="flex justify-between py-1">
            <span className="text-slate-500 font-medium">Lead Source</span>
            <span className="font-semibold text-indigo-600">{sidebarDetails.leadSource || "Inbound Content"}</span>
          </div>
          <div className="flex justify-between py-1">
            <span className="text-slate-500 font-medium">Marketing Consent</span>
            <span className="font-medium text-slate-800 flex items-center space-x-1">
              <ShieldCheck className="w-3 h-3 text-emerald-500" />
              <span>{sidebarDetails.marketingConsent || "Verified GDPR"}</span>
            </span>
          </div>
        </div>
      </div>

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

      {/* Block 3: Recent Marketing Campaigns */}
      <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-4 space-y-3">
        <div className="flex items-center justify-between border-b border-slate-100 pb-2.5">
          <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center space-x-1.5">
            <Megaphone className="w-3.5 h-3.5 text-indigo-600" />
            <span>Recent Campaigns</span>
          </h3>
          <span className="text-[10px] text-slate-400">3 Campaigns</span>
        </div>

        <div className="space-y-2">
          {recentCampaigns.map((camp, idx) => (
            <div 
              key={idx}
              className="p-2.5 rounded-lg bg-slate-50 border border-slate-200/80 text-xs space-y-1"
            >
              <div className="flex items-center justify-between font-bold text-slate-900">
                <span className="truncate max-w-[180px]">{camp.name}</span>
                <span className="text-[10px] px-1.5 py-0.2 bg-emerald-100 text-emerald-800 rounded font-bold">{camp.status}</span>
              </div>
              <div className="flex items-center justify-between text-[11px] text-slate-500">
                <span>Account Engagement</span>
                <span className="text-indigo-700 font-bold">{camp.openRate}</span>
              </div>
            </div>
          ))}
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
