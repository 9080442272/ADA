import React from 'react';
import { 
  Sparkles, 
  HelpCircle, 
  CheckCircle2, 
  Check, 
  ArrowRight, 
  ArrowDown,
  Megaphone,
  Brain,
  GitCommit,
  Clock,
  Globe,
  Mail,
  Video,
  FileText
} from 'lucide-react';

export default function PrimaryDecisionBlock({ 
  customer, 
  onExecutePrimaryAction, 
  onWhyThisClick, 
  isExecuted, 
  onViewFullTimeline 
}) {
  const { primaryInsight, primaryAction, journey } = customer;

  // Sample recent chronological interactions for overview preview
  const recentInteractionsPreview = [
    { title: "Viewed myPricing product page", channel: "Website", detail: "4th visit this week", badgeColor: "bg-blue-100 text-blue-800 border-blue-200", time: "Today, 10:42 AM" },
    { title: "Opened & clicked Pricing Strategy campaign email", channel: "Email", detail: "Campaign #PRC-2026", badgeColor: "bg-indigo-100 text-indigo-800 border-indigo-200", time: "Today, 9:15 AM" },
    { title: "Downloaded Dynamic Pricing Playbook", channel: "Website", detail: "24-page PDF resource", badgeColor: "bg-purple-100 text-purple-800 border-purple-200", time: "3 days ago" },
    { title: "Attended Competitive Pricing Strategy webinar", channel: "Webinar", detail: "42 min attendance", badgeColor: "bg-amber-100 text-amber-800 border-amber-200", time: "5 days ago" }
  ];

  return (
    <div className="space-y-6">
      
      {/* 1. HERO AI MARKETING DECISION ENGINE (Clean White Enterprise Card) */}
      <div className="bg-white rounded-xl border border-slate-200/90 shadow-sm p-6 space-y-5">
        
        {/* AI Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
          <div className="flex items-center space-x-2.5">
            <div className="w-7 h-7 rounded-lg bg-indigo-600 flex items-center justify-center text-white shadow-2xs">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h2 className="text-base font-extrabold text-slate-900 tracking-tight">
                  ADA AI Marketing Decision Engine
                </h2>
                <span className="px-2 py-0.5 text-[10px] font-bold bg-slate-100 text-slate-700 rounded-md border border-slate-200">
                  Boostmyshop B2B Cross-Sell Model
                </span>
              </div>
              <p className="text-xs text-slate-500 mt-0.5">
                Account Signals → AI Insight → Evidence → Recommended Action → Campaign Activation
              </p>
            </div>
          </div>

          {/* Secondary Utility Link */}
          <button 
            onClick={onWhyThisClick}
            className="text-xs font-semibold text-slate-500 hover:text-slate-800 flex items-center space-x-1 transition-colors cursor-pointer shrink-0"
          >
            <HelpCircle className="w-3.5 h-3.5 text-slate-400" />
            <span>Why this recommendation?</span>
          </button>
        </div>

        {/* Core AI Decision Flow (Insight ➔ Recommendation) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start pt-1">
          
          {/* LEFT: PRIMARY B2B MARKETING INSIGHT & WHY ADA THINKS THIS (7 Cols) */}
          <div className="lg:col-span-7 bg-slate-50/80 border border-slate-200/80 rounded-xl p-5 space-y-4">
            
            <div className="space-y-2">
              {/* Eyebrow & Confidence */}
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                  PRIMARY B2B MARKETING INSIGHT
                </span>
                <span className="px-2.5 py-0.5 text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-md">
                  {primaryInsight.confidence}% confidence
                </span>
              </div>

              {/* Main Headline */}
              <h3 className="text-lg font-extrabold text-slate-900 tracking-tight">
                {primaryInsight.title}
              </h3>

              {/* Explanation Paragraph (Highly Readable, font-normal) */}
              <p className="text-sm font-normal text-slate-700 bg-white p-3.5 rounded-xl border border-slate-200/80 leading-relaxed shadow-2xs">
                "{primaryInsight.headline}"
              </p>
            </div>

            {/* Supporting Evidence Checklist Rows (Why ADA thinks this) */}
            <div className="space-y-2 pt-1 border-t border-slate-200/60">
              <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                Why ADA thinks this:
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {primaryInsight.whyAdaThinksThis.map((sig, idx) => (
                  <div key={idx} className="flex items-center space-x-2 text-slate-800 font-medium">
                    <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-[10px] shrink-0">
                      ✓
                    </span>
                    <span className="truncate">{sig}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quiet Related AI Signals Footer */}
            <div className="pt-2 border-t border-slate-200/60 flex items-center space-x-2 text-xs">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider shrink-0">Related Signals:</span>
              <div className="flex items-center flex-wrap gap-1.5 text-[11px] text-slate-600">
                <span className="px-2 py-0.5 bg-white border border-slate-200 rounded-md font-medium">
                  High Campaign Responsiveness
                </span>
                <span className="px-2 py-0.5 bg-white border border-slate-200 rounded-md font-medium">
                  Expansion Readiness (88%)
                </span>
              </div>
            </div>

          </div>

          {/* RIGHT: RECOMMENDED MARKETING ACTION & PRIMARY CTA (5 Cols) */}
          <div className="lg:col-span-5 bg-slate-900 text-white rounded-xl p-5 flex flex-col justify-between space-y-4 shadow-sm border border-slate-800">
            
            <div className="space-y-3">
              
              {/* Header */}
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider flex items-center space-x-1.5">
                  <Megaphone className="w-3.5 h-3.5 text-amber-400" />
                  <span>RECOMMENDED MARKETING ACTION</span>
                </span>
                <span className="px-2 py-0.5 text-[11px] font-bold bg-indigo-500/20 text-indigo-300 rounded border border-indigo-500/30">
                  {primaryAction.confidence}% match
                </span>
              </div>

              {/* Title */}
              <h3 className="text-base font-extrabold text-white tracking-tight">
                {primaryAction.title}
              </h3>

              {/* Reason */}
              <div className="bg-slate-800/80 p-3 rounded-lg border border-slate-700/80 space-y-1 text-xs">
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Why recommended:</div>
                <p className="text-slate-200 font-normal leading-snug">
                  "{primaryAction.whyThisAction}"
                </p>
              </div>

              {/* Target Campaign Payload */}
              <div className="text-xs text-indigo-200 bg-slate-800/50 p-2.5 rounded-lg border border-slate-700/60 font-mono">
                <span className="text-slate-400 font-bold">Target Campaign:</span> {primaryAction.payload.campaignName}
              </div>

            </div>

            {/* Primary Action Button (Visually Dominant) */}
            <div className="pt-2">
              {isExecuted ? (
                <div className="w-full py-3 bg-emerald-600 text-white text-xs font-extrabold rounded-xl flex items-center justify-center space-x-2 shadow-sm">
                  <Check className="w-4 h-4" />
                  <span>Account Enrolled in Campaign</span>
                </div>
              ) : (
                <button
                  onClick={() => onExecutePrimaryAction(primaryAction)}
                  className="w-full py-3 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-extrabold rounded-xl flex items-center justify-center space-x-2 shadow-md hover:shadow-lg transition-all cursor-pointer"
                >
                  <span>Launch Campaign</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              )}
            </div>

          </div>

        </div>

      </div>

      {/* 2. LATEST ACTIVITY CARD (Full 8-Cols Width to balance sidebar height) */}
      <div className="bg-white border border-slate-200/90 rounded-xl p-5 shadow-2xs space-y-4">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center">
              <Clock className="w-3.5 h-3.5" />
            </div>
            <h3 className="text-xs font-extrabold text-slate-900 uppercase tracking-wider">
              LATEST ACTIVITY
            </h3>
          </div>
          <button 
            onClick={onViewFullTimeline}
            className="text-[11px] font-bold text-indigo-600 hover:text-indigo-800 flex items-center space-x-1 cursor-pointer transition-colors"
          >
            <span>View full timeline →</span>
          </button>
        </div>

        {/* Chronological Activity List */}
        <div className="space-y-2.5 text-xs">
          <div className="p-3 bg-slate-50/80 border border-slate-200/70 rounded-xl flex items-center justify-between hover:bg-slate-100/60 transition-colors">
            <div className="flex items-center space-x-3 truncate pr-2">
              <span className="w-2.5 h-2.5 rounded-full bg-indigo-600 shrink-0 ring-4 ring-indigo-50" />
              <div className="truncate">
                <div className="font-bold text-slate-900">Viewed myPricing ROI calculator</div>
                <div className="text-[11px] text-slate-500 font-medium">4th visit this week • Spent 4m 12s on page</div>
              </div>
            </div>
            <div className="flex items-center space-x-2 shrink-0">
              <span className="px-2 py-0.5 text-[10px] font-bold bg-blue-50 text-blue-700 border border-blue-200/80 rounded-md">Website</span>
              <span className="text-[11px] text-slate-400 font-mono">Today · 10:42 AM</span>
            </div>
          </div>

          <div className="p-3 bg-slate-50/80 border border-slate-200/70 rounded-xl flex items-center justify-between hover:bg-slate-100/60 transition-colors">
            <div className="flex items-center space-x-3 truncate pr-2">
              <span className="w-2.5 h-2.5 rounded-full bg-indigo-600 shrink-0 ring-4 ring-indigo-50" />
              <div className="truncate">
                <div className="font-bold text-slate-900">Clicked "Explore myPricing" in campaign email</div>
                <div className="text-[11px] text-slate-500 font-medium">Pricing Strategy Campaign #PRC-2026</div>
              </div>
            </div>
            <div className="flex items-center space-x-2 shrink-0">
              <span className="px-2 py-0.5 text-[10px] font-bold bg-indigo-50 text-indigo-700 border border-indigo-200/80 rounded-md">Email</span>
              <span className="text-[11px] text-slate-400 font-mono">Today · 9:15 AM</span>
            </div>
          </div>

          <div className="p-3 bg-slate-50/80 border border-slate-200/70 rounded-xl flex items-center justify-between hover:bg-slate-100/60 transition-colors">
            <div className="flex items-center space-x-3 truncate pr-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 shrink-0 ring-4 ring-emerald-50" />
              <div className="truncate">
                <div className="font-bold text-slate-900">Asked ADA about Amazon API repricing</div>
                <div className="text-[11px] text-slate-500 font-medium">AI Copilot Chat • Inquiry answered in 2s</div>
              </div>
            </div>
            <div className="flex items-center space-x-2 shrink-0">
              <span className="px-2 py-0.5 text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200/80 rounded-md">Conversation</span>
              <span className="text-[11px] text-slate-400 font-mono">Yesterday</span>
            </div>
          </div>

          <div className="p-3 bg-slate-50/80 border border-slate-200/70 rounded-xl flex items-center justify-between hover:bg-slate-100/60 transition-colors">
            <div className="flex items-center space-x-3 truncate pr-2">
              <span className="w-2.5 h-2.5 rounded-full bg-purple-600 shrink-0 ring-4 ring-purple-50" />
              <div className="truncate">
                <div className="font-bold text-slate-900">Downloaded Dynamic Pricing Playbook</div>
                <div className="text-[11px] text-slate-500 font-medium">24-page PDF guide downloaded by Antoine Laurent</div>
              </div>
            </div>
            <div className="flex items-center space-x-2 shrink-0">
              <span className="px-2 py-0.5 text-[10px] font-bold bg-purple-50 text-purple-700 border border-purple-200/80 rounded-md">Resource</span>
              <span className="text-[11px] text-slate-400 font-mono">3 days ago</span>
            </div>
          </div>
        </div>

        <div className="text-[11px] text-slate-400 pt-2 flex items-center justify-between border-t border-slate-100">
          <span>Showing 4 latest events for TechGear Europe</span>
          <button 
            onClick={onViewFullTimeline}
            className="text-indigo-600 hover:text-indigo-800 font-semibold cursor-pointer"
          >
            Detailed interaction history in Interactions →
          </button>
        </div>
      </div>

    </div>
  );
}
