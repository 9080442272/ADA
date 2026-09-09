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

export default function CustomerHeader({ customer, onStartConversation, onActionSelect }) {
  const [actionsOpen, setActionsOpen] = useState(false);
  const [copiedId, setCopiedId] = useState(false);

  const handleCopyId = () => {
    navigator.clipboard.writeText(customer.id);
    setCopiedId(true);
    setTimeout(() => setCopiedId(false), 2000);
  };

  return (
    <div className="space-y-3 mb-2">
      
      {/* 1. Breadcrumbs & Top Actions Bar */}
      <div className="flex items-center justify-between px-1 text-xs">
        
        {/* Left Breadcrumb & Back Link */}
        <div className="space-y-1">
          <div className="text-[11px] text-slate-500 font-medium flex items-center space-x-1">
            <span className="hover:underline cursor-pointer text-slate-500">Accounts</span>
            <span>/</span>
            <span className="font-bold text-slate-900">Account 360</span>
          </div>
          <button className="flex items-center space-x-1.5 text-xs font-bold text-slate-700 hover:text-slate-900 transition-colors">
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Accounts</span>
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

      {/* 2. REFINED B2B ACCOUNT HEADER CONTAINER */}
      <div className="bg-white border border-slate-200/90 rounded-xl p-5 shadow-2xs space-y-4">
        
        {/* Main Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* COL 1: Account Identity & Quiet Tags (5 Cols) */}
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

            {/* Name, Primary Status, Secondary Contact, Quiet Tags */}
            <div className="space-y-1 min-w-0 flex-1">
              
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

              {/* Secondary: ID + Primary Contact */}
              <div className="flex items-center space-x-3 text-xs text-slate-500 pt-0.5">
                <div className="flex items-center space-x-1 font-mono">
                  <span className="text-slate-400">ID:</span>
                  <span className="font-semibold text-slate-700">{customer.id}</span>
                  <button onClick={handleCopyId} title="Copy Account ID" className="text-slate-400 hover:text-slate-700 cursor-pointer ml-0.5">
                    <Copy className="w-3 h-3" />
                  </button>
                  {copiedId && <span className="text-[10px] text-emerald-600 font-bold ml-1">Copied!</span>}
                </div>

                <span>•</span>

                <div className="flex items-center space-x-1 truncate text-slate-700 font-medium">
                  <Mail className="w-3 h-3 text-slate-400 shrink-0" />
                  <span>{customer.primaryContact}</span>
                </div>
              </div>

              {/* Account Tags Row (Visually Quieter) */}
              <div className="flex items-center flex-wrap gap-1.5 pt-1.5">
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

          {/* COL 2: B2B Metadata (2 Cols) */}
          <div className="lg:col-span-2 space-y-1 text-xs text-slate-600 border-l border-slate-100 pl-4">
            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Account Profile</div>
            <div className="flex items-center space-x-1.5 font-medium text-slate-800">
              <Building className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              <span>{customer.industry}</span>
            </div>
            <div className="flex items-center space-x-1.5 text-slate-600">
              <Users className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              <span>{customer.companySize}</span>
            </div>
            <div className="flex items-center space-x-1.5 text-slate-600">
              <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              <span>{customer.location}</span>
            </div>
            <div className="flex items-center space-x-1.5 text-slate-500 font-mono text-[11px]">
              <Calendar className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              <span>Customer since {customer.customerSince}</span>
            </div>
          </div>

          {/* COL 3: Business Metrics (Strongest Emphasis on LTV, Expansion, Engagement) (5 Cols) */}
          <div className="lg:col-span-5 border-l border-slate-100 pl-4 space-y-2">
            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Business & Opportunity Metrics</div>
            
            <div className="grid grid-cols-4 gap-2">
              
              {/* Metric 1: LTV (Strongest Emphasis) */}
              <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-2.5 space-y-0.5">
                <div className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider">Lifetime Value</div>
                <div className="text-base font-extrabold text-slate-900 font-mono">{customer.metrics.ltv}</div>
                <div className="text-[10px] text-slate-400">ARR Tier 1</div>
              </div>

              {/* Metric 2: Expansion Potential (Strongest Emphasis) */}
              <div className="bg-amber-50/60 border border-amber-200 rounded-xl p-2.5 space-y-0.5">
                <div className="text-[10px] font-bold text-amber-800 uppercase tracking-wider">Expansion</div>
                <div className="text-sm font-extrabold text-amber-900">High Opportunity</div>
                <div className="text-[10px] text-amber-700 font-medium">myPricing Intent</div>
              </div>

              {/* Metric 3: Marketing Engagement (Strongest Emphasis) */}
              <div className="bg-indigo-50/60 border border-indigo-200 rounded-xl p-2.5 space-y-0.5">
                <div className="text-[10px] font-bold text-indigo-800 uppercase tracking-wider">Engagement</div>
                <div className="text-base font-extrabold text-indigo-900">{customer.metrics.marketingEngagement}</div>
                <div className="text-[10px] text-indigo-700 font-medium">Open & Click Rate</div>
              </div>

              {/* Metric 4: Active Product */}
              <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-2.5 space-y-0.5">
                <div className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider">Active Product</div>
                <div className="text-xs font-bold text-emerald-800">myFulfillment</div>
                <div className="text-[10px] text-slate-400">Pro Plan</div>
              </div>

            </div>

          </div>

        </div>
      </div>

    </div>
  );
}
