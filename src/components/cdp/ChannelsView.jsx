import React, { useState } from 'react';
import { 
  Radio, 
  Mail, 
  MessageSquare, 
  PhoneCall, 
  Globe, 
  Share2, 
  CheckCircle2, 
  RefreshCw, 
  Sliders, 
  Download, 
  Megaphone, 
  Bot, 
  ExternalLink,
  ChevronRight,
  X,
  Zap,
  ShieldCheck,
  Building2,
  Users
} from 'lucide-react';

export default function ChannelsView({ customer, onShowToast, onNavigateToSegments }) {
  const [selectedChannelForDrawer, setSelectedChannelForDrawer] = useState(null);

  const channelsList = [
    {
      id: "chn-email",
      name: "Email Channel",
      provider: "SendGrid Enterprise API & AWS SES",
      icon: Mail,
      status: "Connected",
      reachableCount: "92,341 reachable contacts",
      reachablePercent: "73% of total accounts",
      deliverabilityRate: "99.2%",
      optOutRate: "0.4%",
      lastSync: "2 mins ago",
      color: "indigo",
      details: {
        apiKeyStatus: "Active & Verified",
        webhookUrl: "https://api.caip.boostmyshop.com/v1/webhooks/sendgrid",
        dailyCap: "500,000 emails/day",
        complianceSla: "GDPR Double Opt-In Verified",
        bounceSuppression: "Automated (2,140 addresses suppressed)"
      }
    },
    {
      id: "chn-whatsapp",
      name: "WhatsApp Business API",
      provider: "Meta WhatsApp Business Cloud API",
      icon: MessageSquare,
      status: "Connected",
      reachableCount: "48,620 reachable contacts",
      reachablePercent: "39% of total accounts",
      deliverabilityRate: "91.4% read rate",
      optOutRate: "0.2%",
      lastSync: "5 mins ago",
      color: "emerald",
      details: {
        apiKeyStatus: "Meta Verified WABA Account",
        phoneId: "+33 (0) 1 42 68 00 99",
        templateCount: "18 Approved Templates",
        complianceSla: "Conversational Session Opt-In",
        bounceSuppression: "Automatic 24-hr session expiry"
      }
    },
    {
      id: "chn-sms",
      name: "SMS Channel",
      provider: "Twilio Programmable Messaging API",
      icon: PhoneCall,
      status: "Connected",
      reachableCount: "31,204 reachable contacts",
      reachablePercent: "25% of total accounts",
      deliverabilityRate: "98.6%",
      optOutRate: "1.1%",
      lastSync: "12 mins ago",
      color: "blue",
      details: {
        apiKeyStatus: "Twilio Account Sid Verified",
        senderId: "ADA-ALERT",
        complianceSla: "Explicit SMS Opt-In Only",
        bounceSuppression: "Automatic STOP keyword processing (1,890 DNC)"
      }
    },
    {
      id: "chn-inapp",
      name: "In-App & Web Push",
      provider: "ADA Web SDK & Mobile Push Gateway",
      icon: Globe,
      status: "Connected",
      reachableCount: "67,890 reachable contacts",
      reachablePercent: "54% of total accounts",
      deliverabilityRate: "42.8% active CTR",
      optOutRate: "0.1%",
      lastSync: "Real-Time Streaming",
      color: "purple",
      details: {
        apiKeyStatus: "SDK Active across 8,420 portals",
        activeSessions: "1,240 live web sessions",
        complianceSla: "Browser Notification Permission",
        bounceSuppression: "Expired Push Token Pruning"
      }
    },
    {
      id: "chn-salesforce",
      name: "Salesforce CRM Connector",
      provider: "Salesforce REST Bulk API v58.0",
      icon: Share2,
      status: "Connected",
      reachableCount: "8,420 synced accounts",
      reachablePercent: "100% of B2B accounts",
      deliverabilityRate: "Bi-directional Active",
      optOutRate: "0%",
      lastSync: "3 mins ago",
      color: "sky",
      details: {
        apiKeyStatus: "OAuth2 Refresh Token Active",
        instanceUrl: "https://boostmyshop.my.salesforce.com",
        objectMapping: "Account, Contact, Opportunity",
        syncInterval: "Every 5 minutes"
      }
    },
    {
      id: "chn-meta",
      name: "Meta Custom Audiences API",
      provider: "Meta Ads Marketing API v19.0",
      icon: Share2,
      status: "Connected",
      reachableCount: "4,120 matched accounts",
      reachablePercent: "84.2% match rate",
      deliverabilityRate: "SHA-256 Hashed Sync",
      optOutRate: "0%",
      lastSync: "1 hour ago",
      color: "amber",
      details: {
        apiKeyStatus: "Ad Account Connected",
        pixelId: "px-990412051",
        hashingAlgo: "SHA-256 (PII-protected)",
        syncInterval: "Daily automated upload"
      }
    }
  ];

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      
      {/* 1. HEADER */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-4">
          <div>
            <div className="flex items-center space-x-2.5">
              <div className="w-9 h-9 rounded-xl bg-indigo-50 text-indigo-600 border border-indigo-200 flex items-center justify-center font-bold">
                <Radio className="w-5 h-5" />
              </div>
              <div>
                <h1 className="text-xl font-extrabold text-slate-900 tracking-tight flex items-center space-x-2">
                  <span>Global Channels, Activation & Reachability</span>
                  <span className="px-2.5 py-0.5 text-xs font-extrabold bg-indigo-50 text-indigo-700 rounded-full border border-indigo-200">
                    Data Activation Hub
                  </span>
                </h1>
                <p className="text-xs text-slate-500 font-medium mt-0.5">
                  Monitor connected activation destinations, channel connectivity statuses, and total reachable customer accounts
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-2 shrink-0">
            <button 
              onClick={() => onShowToast && onShowToast("Refreshed all channel connectivity tokens!")}
              className="px-3.5 py-2 bg-slate-900 hover:bg-slate-800 text-white font-extrabold text-xs rounded-xl shadow-xs flex items-center space-x-1.5 cursor-pointer"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Refresh Connectivity</span>
            </button>
          </div>
        </div>

        {/* Reachability KPI Summary */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/80">
            <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Total Reachable Accounts</div>
            <div className="text-xl font-black text-slate-900 mt-1">8,140 Accounts</div>
            <div className="text-[11px] font-semibold text-emerald-600 mt-0.5">96.7% of CDP Directory</div>
          </div>

          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/80">
            <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Active Messaging Channels</div>
            <div className="text-xl font-black text-slate-900 mt-1">4 Connected</div>
            <div className="text-[11px] font-semibold text-indigo-600 mt-0.5">Email, WhatsApp, SMS, Push</div>
          </div>

          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/80">
            <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">API Sync Destinations</div>
            <div className="text-xl font-black text-slate-900 mt-1">2 Connected</div>
            <div className="text-[11px] font-semibold text-blue-600 mt-0.5">Salesforce, Meta Ads</div>
          </div>

          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/80">
            <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Global Compliance Status</div>
            <div className="text-xl font-black text-slate-900 mt-1">100% Verified</div>
            <div className="text-[11px] font-semibold text-emerald-600 mt-0.5">Automated DNC Enforcement</div>
          </div>
        </div>
      </div>

      {/* 2. DATA ACTIVATION PARADIGM BANNER */}
      <div className="bg-slate-900 text-white rounded-2xl p-5 border border-slate-800 shadow-md space-y-3">
        <div className="flex items-center justify-between">
          <div className="text-[10px] font-extrabold text-indigo-300 uppercase tracking-wider flex items-center space-x-1.5">
            <Zap className="w-3.5 h-3.5 text-indigo-400" />
            <span>DATA ACTIVATION PIPELINE</span>
          </div>
          <span className="text-[10px] font-mono text-slate-400">Segment → Reachability Filter → Activation</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 text-xs pt-1">
          <div className="bg-slate-800/80 p-3 rounded-xl border border-slate-700/80 space-y-1">
            <div className="text-[10px] font-extrabold text-indigo-400">1. TARGET AUDIENCE</div>
            <div className="font-extrabold text-white">Segment #SEG-9912</div>
            <div className="text-[11px] text-slate-400">1,240 Matched Accounts</div>
          </div>

          <div className="bg-slate-800/80 p-3 rounded-xl border border-slate-700/80 space-y-1">
            <div className="text-[10px] font-extrabold text-emerald-400">2. REACHABLE EMAIL</div>
            <div className="font-extrabold text-white">980 Contacts</div>
            <div className="text-[11px] text-slate-400">79% Channel Opt-In Rate</div>
          </div>

          <div className="bg-slate-800/80 p-3 rounded-xl border border-slate-700/80 space-y-1">
            <div className="text-[10px] font-extrabold text-purple-400">3. REACHABLE WHATSAPP</div>
            <div className="font-extrabold text-white">640 Contacts</div>
            <div className="text-[11px] text-slate-400">51.6% Channel Opt-In Rate</div>
          </div>

          <div className="bg-slate-800/80 p-3 rounded-xl border border-slate-700/80 space-y-1">
            <div className="text-[10px] font-extrabold text-blue-400">4. CAMPAIGN DISPATCH</div>
            <div className="font-extrabold text-white">Omnichannel Execution</div>
            <div className="text-[11px] text-slate-400">Auto-Enrolled in Bot Assistant</div>
          </div>
        </div>
      </div>

      {/* 3. CONNECTED CHANNELS REACHABILITY GRID */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 space-y-4">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <h2 className="text-xs font-extrabold text-slate-900 uppercase tracking-wider flex items-center space-x-2">
            <Radio className="w-4 h-4 text-indigo-600" />
            <span>Connected Activation Channels & Reachable Customer Counts</span>
          </h2>
          <span className="text-xs font-bold text-indigo-600 cursor-pointer hover:underline" onClick={() => onNavigateToSegments && onNavigateToSegments()}>
            Build Audience Segment →
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {channelsList.map((chn) => {
            const Icon = chn.icon;
            return (
              <div key={chn.id} className="bg-slate-50 hover:bg-slate-50/90 p-5 rounded-2xl border border-slate-200 transition-all space-y-4 shadow-2xs flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2.5">
                      <div className="w-9 h-9 rounded-xl bg-white border border-slate-200 text-slate-800 flex items-center justify-center font-bold shadow-2xs">
                        <Icon className="w-5 h-5 text-indigo-600" />
                      </div>
                      <div>
                        <div className="font-extrabold text-slate-900 text-sm">{chn.name}</div>
                        <div className="text-[10px] text-slate-500 font-medium">{chn.provider}</div>
                      </div>
                    </div>
                    <span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 text-[10px] font-extrabold rounded-md border border-emerald-300 flex items-center space-x-1">
                      <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                      <span>{chn.status}</span>
                    </span>
                  </div>

                  {/* Reachability Count Banner */}
                  <div className="bg-white p-3.5 rounded-xl border border-slate-200 space-y-1">
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">REACHABLE AUDIENCE</div>
                    <div className="text-lg font-black text-slate-900 tracking-tight">{chn.reachableCount}</div>
                    <div className="text-[11px] font-bold text-indigo-600">{chn.reachablePercent}</div>
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-2 gap-2 text-xs pt-1">
                    <div className="bg-slate-100/80 p-2 rounded-lg">
                      <div className="text-[9px] font-bold text-slate-400 uppercase">Performance</div>
                      <div className="font-extrabold text-slate-800 mt-0.5">{chn.deliverabilityRate}</div>
                    </div>
                    <div className="bg-slate-100/80 p-2 rounded-lg">
                      <div className="text-[9px] font-bold text-slate-400 uppercase">Last Sync</div>
                      <div className="font-extrabold text-slate-800 mt-0.5">{chn.lastSync}</div>
                    </div>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-200 flex items-center justify-between text-xs">
                  <span className="text-slate-400 text-[11px]">SLA: Verified</span>
                  <button 
                    onClick={() => setSelectedChannelForDrawer(chn)}
                    className="text-indigo-600 font-extrabold hover:underline flex items-center space-x-1 cursor-pointer"
                  >
                    <span>Manage Channel</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 4. MANAGE CHANNEL DETAIL DRAWER */}
      {selectedChannelForDrawer && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs z-50 flex justify-end animate-in fade-in duration-200">
          <div className="w-full max-w-lg bg-white min-h-screen shadow-2xl flex flex-col justify-between border-l border-slate-200 animate-in slide-in-from-right duration-200">
            
            <div className="p-6 border-b border-slate-200 bg-slate-900 text-white space-y-2">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-0.5 bg-indigo-500/30 text-indigo-300 text-xs font-extrabold rounded border border-indigo-400/30">
                  CHANNEL CONFIGURATION & REACHABILITY
                </span>
                <button 
                  onClick={() => setSelectedChannelForDrawer(null)}
                  className="text-slate-400 hover:text-white p-1 rounded-lg cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <h2 className="text-xl font-black text-white">
                {selectedChannelForDrawer.name}
              </h2>
              <div className="text-xs text-slate-400 font-medium">{selectedChannelForDrawer.provider}</div>
            </div>

            <div className="p-6 flex-1 overflow-y-auto space-y-5 text-xs">
              
              <div className="bg-emerald-50 border border-emerald-200 p-4 rounded-xl space-y-1">
                <div className="text-[10px] font-extrabold text-emerald-700 uppercase">REACHABILITY METRICS</div>
                <div className="text-base font-extrabold text-emerald-950">{selectedChannelForDrawer.reachableCount}</div>
                <div className="text-xs text-emerald-800 font-semibold">{selectedChannelForDrawer.reachablePercent}</div>
              </div>

              <div className="space-y-3">
                <div className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider">Integration Parameters & SLA</div>
                
                {Object.entries(selectedChannelForDrawer.details).map(([k, v], idx) => (
                  <div key={idx} className="bg-slate-50 p-3 rounded-xl border border-slate-200 flex items-center justify-between">
                    <span className="font-bold text-slate-600 capitalize">{k.replace(/([A-Z])/g, ' $1')}:</span>
                    <span className="font-extrabold text-slate-900 font-mono text-[11px]">{v}</span>
                  </div>
                ))}
              </div>

              <div className="bg-indigo-50 border border-indigo-200 p-4 rounded-xl space-y-2">
                <div className="text-[10px] font-extrabold text-indigo-700 uppercase">DO-NOT-CONTACT (DNC) COMPLIANCE</div>
                <p className="text-indigo-900 leading-relaxed font-medium">
                  ADA CAIP automatically enforces global DNC lists and contact suppression rules before dispatching any campaign on this channel.
                </p>
              </div>

            </div>

            <div className="p-4 border-t border-slate-200 bg-slate-50 flex items-center justify-between">
              <button 
                onClick={() => {
                  if (onShowToast) onShowToast(`Tested API connection for ${selectedChannelForDrawer.name}. 100% Healthy!`);
                }}
                className="px-4 py-2 bg-slate-900 text-white font-bold text-xs rounded-xl hover:bg-slate-800 cursor-pointer"
              >
                Test Connection
              </button>

              <button 
                onClick={() => setSelectedChannelForDrawer(null)}
                className="px-4 py-2 bg-indigo-600 text-white font-extrabold text-xs rounded-xl hover:bg-indigo-700 cursor-pointer"
              >
                Done
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
