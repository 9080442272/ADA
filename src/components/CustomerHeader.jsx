import React, { useState } from 'react';
import { 
  ArrowLeft,
  Mail, 
  MapPin, 
  Calendar, 
  MessageSquare, 
  ChevronDown, 
  Copy,
  Crown,
  ExternalLink,
  Building,
  Users,
  ShieldAlert,
  Share2,
  UserPlus
} from 'lucide-react';

export default function CustomerHeader({ customer, onStartConversation, onActionSelect, onBackToPeople }) {
  const [actionsOpen, setActionsOpen] = useState(false);
  const [copiedId, setCopiedId] = useState(false);

  const handleCopyId = () => {
    navigator.clipboard.writeText(customer.id);
    setCopiedId(true);
    setTimeout(() => setCopiedId(false), 2000);
  };

  const sidebarDetails = customer.sidebarDetails || {};

  return (
    <div className="space-y-3 mb-2">
      
      {/* 1. Breadcrumbs & Top Actions Bar */}
      <div className="flex items-center justify-between px-1 text-xs">
        
        {/* Left Breadcrumb & Back Link */}
        <div className="space-y-1">
          <div className="text-[11px] text-slate-500 font-medium flex items-center space-x-1">
            <span 
              onClick={() => onBackToPeople && onBackToPeople()}
              className="hover:underline cursor-pointer text-slate-500"
            >
              Customer 360
            </span>
            <span>/</span>
            <span className="font-bold text-slate-900">{customer.name} Profile</span>
          </div>
          <button 
            onClick={() => onBackToPeople && onBackToPeople()}
            className="flex items-center space-x-1.5 text-xs font-bold text-indigo-600 hover:text-indigo-800 transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>← Back to People Directory</span>
          </button>
        </div>

        {/* Right Actions Toolbar */}
        <div className="flex items-center space-x-2">
          
          {/* Actions Dropdown */}
          <div className="relative">
            <button 
              onClick={() => setActionsOpen(!actionsOpen)}
              className="px-3 py-1.5 bg-white hover:bg-slate-50 border border-slate-300 rounded-xl text-xs font-bold text-slate-700 flex items-center space-x-1.5 shadow-2xs transition-all cursor-pointer"
            >
              <span>Actions</span>
              <ChevronDown className="w-3.5 h-3.5 text-slate-500" />
            </button>

            {actionsOpen && (
              <div className="absolute right-0 mt-1.5 w-52 bg-white rounded-xl shadow-xl border border-slate-200 py-1 z-40 text-xs">
                <button 
                  onClick={() => { setActionsOpen(false); onActionSelect && onActionSelect('edit_profile'); }}
                  className="w-full px-3.5 py-1.5 text-left text-slate-700 hover:bg-slate-50 flex items-center space-x-2 cursor-pointer"
                >
                  <UserPlus className="w-3.5 h-3.5 text-slate-400" />
                  <span>Edit Account Details</span>
                </button>
                <button 
                  onClick={() => { setActionsOpen(false); onActionSelect && onActionSelect('export_data'); }}
                  className="w-full px-3.5 py-1.5 text-left text-slate-700 hover:bg-slate-50 flex items-center space-x-2 cursor-pointer"
                >
                  <Share2 className="w-3.5 h-3.5 text-slate-400" />
                  <span>Export 360 PDF Report</span>
                </button>
                <div className="my-1 border-t border-slate-100" />
                <button 
                  onClick={() => { setActionsOpen(false); onActionSelect && onActionSelect('block_customer'); }}
                  className="w-full px-3.5 py-1.5 text-left text-rose-600 hover:bg-rose-50 flex items-center space-x-2 cursor-pointer"
                >
                  <ShieldAlert className="w-3.5 h-3.5 text-rose-500" />
                  <span>Opt-out Marketing</span>
                </button>
              </div>
            )}
          </div>

          {/* View in CDP button */}
          <button 
            onClick={() => onActionSelect && onActionSelect('view_cdp')}
            className="px-3 py-1.5 bg-white hover:bg-slate-50 border border-slate-300 rounded-xl text-xs font-bold text-slate-700 flex items-center space-x-1 shadow-2xs transition-all cursor-pointer"
          >
            <span>View in CDP</span>
            <ExternalLink className="w-3 h-3 text-slate-400" />
          </button>

          {/* Start conversation / Campaign outreach Button */}
          <button 
            onClick={onStartConversation}
            className="px-4 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold flex items-center space-x-1.5 shadow-sm transition-all cursor-pointer"
          >
            <MessageSquare className="w-3.5 h-3.5 text-white" />
            <span>Start conversation</span>
          </button>

        </div>

      </div>

      {/* 2. MERGED & REFINED B2B ACCOUNT HEADER CONTAINER */}
      <div className="bg-white border border-slate-200/90 rounded-xl p-5 shadow-2xs space-y-4">
        
        {/* TOP ROW: Identity + Complete Metadata */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* COL 1: Account Logo & Identity (5 Cols) */}
          <div className="lg:col-span-5 flex items-start space-x-4">
            
            {/* Account Logo */}
            <div className="relative shrink-0">
              <img
                src={customer.logo}
                alt={customer.name}
                className="w-14 h-14 rounded-xl object-cover ring-1 ring-slate-200 border border-slate-200"
              />
              <span className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-emerald-500 border-2 border-white rounded-full" title="Active Customer" />
            </div>

            {/* Name, Status Badges, ID, Tags */}
            <div className="space-y-1.5 min-w-0 flex-1">
              
              {/* Primary: Account Name & Status Badges */}
              <div className="flex items-center flex-wrap gap-2">
                <h1 className="text-xl font-extrabold text-slate-900 tracking-tight">
                  {customer.name}
                </h1>

                <span className="px-2 py-0.5 text-[11px] font-bold bg-emerald-50 text-emerald-800 border border-emerald-200 rounded-md flex items-center space-x-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span>{customer.status}</span>
                </span>

                <span className="px-2 py-0.5 text-[11px] font-bold bg-slate-100 text-slate-700 border border-slate-200 rounded-md flex items-center space-x-1">
                  <Crown className="w-3 h-3 text-amber-500 fill-amber-500" />
                  <span>{customer.segmentTier}</span>
                </span>
              </div>

              {/* Account ID + Copy Action */}
              <div className="flex items-center space-x-2 text-xs text-slate-500 font-mono">
                <span className="text-slate-400 font-sans">Account ID:</span>
                <span className="font-bold text-slate-800">{customer.id}</span>
                <button onClick={handleCopyId} title="Copy Account ID" className="text-slate-400 hover:text-slate-700 cursor-pointer ml-0.5">
                  <Copy className="w-3 h-3" />
                </button>
                {copiedId && <span className="text-[10px] text-emerald-600 font-bold ml-1 font-sans">Copied!</span>}
              </div>

              {/* Account Tags Row (Quiet Pills) */}
              <div className="flex items-center flex-wrap gap-1.5 pt-1">
                {customer.tags.map((tag, idx) => (
                  <span 
                    key={idx}
                    className="px-2 py-0.5 text-[10px] font-medium bg-slate-100 text-slate-600 border border-slate-200 rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>

            </div>

          </div>

          {/* COL 2: Unified B2B Profile Metadata (7 Cols) */}
          <div className="lg:col-span-7 bg-slate-50/80 border border-slate-200/80 rounded-xl p-3.5 text-xs text-slate-700 space-y-2">
            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Account Metadata</div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
              <div className="flex items-center space-x-1.5 font-medium text-slate-800">
                <Building className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <span className="truncate">{customer.industry}</span>
              </div>

              <div className="flex items-center space-x-1.5 text-slate-600">
                <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <span>{customer.location}</span>
              </div>

              <div className="flex items-center space-x-1.5 text-slate-600">
                <Users className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <span>{customer.companySize}</span>
              </div>

              <div className="flex items-center space-x-1.5 text-slate-600">
                <Calendar className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <span>Customer since {customer.customerSince}</span>
              </div>

              <div className="flex items-center space-x-1.5 font-medium text-indigo-950 truncate">
                <Mail className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <span className="truncate" title={customer.primaryContact}>{customer.primaryContact}</span>
              </div>

              <div className="flex items-center space-x-1.5 text-slate-600 truncate">
                <span className="text-slate-400 font-bold text-[10px] uppercase">Owner:</span>
                <span className="font-semibold text-slate-800 truncate">{sidebarDetails.accountOwner || "Claire Dubois"}</span>
              </div>
            </div>

            <div className="pt-1.5 border-t border-slate-200/60 flex items-center justify-between text-[11px] text-slate-500">
              <div className="flex items-center space-x-1">
                <span className="text-slate-400 font-bold text-[10px] uppercase">Lead Source:</span>
                <span className="font-semibold text-indigo-700">{sidebarDetails.leadSource || "Inbound Content Marketing"}</span>
              </div>
              <div className="flex items-center space-x-1">
                <span className="text-slate-400 font-bold text-[10px] uppercase">Consent:</span>
                <span className="font-bold text-emerald-700 bg-emerald-50 px-1.5 py-0.2 rounded border border-emerald-200">
                  {sidebarDetails.marketingConsent || "GDPR Compliant"}
                </span>
              </div>
            </div>

          </div>

        </div>

        {/* BOTTOM ROW: Key Business Metrics (LTV, Expansion, Engagement, Active Product) */}
        <div className="pt-3 border-t border-slate-100">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            
            {/* Metric 1: Lifetime Value (Strongest Emphasis) */}
            <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-3 space-y-0.5">
              <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Lifetime Value</div>
              <div className="text-lg font-extrabold text-slate-900 font-mono">{customer.metrics.ltv}</div>
              <div className="text-[10px] text-slate-400">ARR Tier 1 Enterprise</div>
            </div>

            {/* Metric 2: Expansion Potential (Strongest Emphasis) */}
            <div className="bg-amber-50/70 border border-amber-200 rounded-xl p-3 space-y-0.5">
              <div className="text-[10px] font-bold text-amber-800 uppercase tracking-wider">Expansion Opportunity</div>
              <div className="text-sm font-extrabold text-amber-900">HIGH OPPORTUNITY</div>
              <div className="text-[10px] text-amber-700 font-medium">myPricing Cross-Sell Intent</div>
            </div>

            {/* Metric 3: Marketing Engagement (Strongest Emphasis) */}
            <div className="bg-indigo-50/70 border border-indigo-200 rounded-xl p-3 space-y-0.5">
              <div className="text-[10px] font-bold text-indigo-800 uppercase tracking-wider">Engagement Rate</div>
              <div className="text-lg font-extrabold text-indigo-900">{customer.metrics.marketingEngagement}</div>
              <div className="text-[10px] text-indigo-700 font-medium">Open & Click Through Rate</div>
            </div>

            {/* Metric 4: Active Product */}
            <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-3 space-y-0.5">
              <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Active Product</div>
              <div className="text-sm font-extrabold text-emerald-800">myFulfillment</div>
              <div className="text-[10px] text-slate-400">Pro Operations Plan</div>
            </div>

          </div>
        </div>

      </div>

    </div>
  );
}
