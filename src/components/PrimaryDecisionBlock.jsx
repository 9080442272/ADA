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
  onScrollToTimeline 
}) {
  const { primaryInsight, primaryAction, journey } = customer;

  // Sample recent chronological interactions for overview preview
  const recentInteractionsPreview = [
    { title: "Viewed myPricing product page (4th visit)", channel: "Website", badgeColor: "bg-blue-100 text-blue-800 border-blue-200", time: "Today · 10:42 AM" },
    { title: "Opened & clicked Pricing Strategy campaign email", channel: "Email", badgeColor: "bg-indigo-100 text-indigo-800 border-indigo-200", time: "Today · 9:15 AM" },
    { title: "Downloaded 'Dynamic Pricing Playbook' (PDF)", channel: "Website", badgeColor: "bg-purple-100 text-purple-800 border-purple-200", time: "3 days ago" },
    { title: "Attended 'Competitive Pricing Strategy' webinar (42 mins)", channel: "Webinar", badgeColor: "bg-amber-100 text-amber-800 border-amber-200", time: "5 days ago" }
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

      {/* 2. RECENT INTERACTIONS PREVIEW (CHRONOLOGICAL) & B2B LIFECYCLE STAGE */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch">
        
        {/* Recent Interactions Chronological Summary (7 Cols) */}
        <div className="lg:col-span-7 bg-white border border-slate-200/90 rounded-xl p-4 space-y-3 shadow-2xs">
          <div className="flex items-center justify-between border-b border-slate-100 pb-2">
            <h3 className="text-xs font-extrabold text-slate-900 uppercase tracking-wider flex items-center space-x-1.5">
              <Clock className="w-4 h-4 text-indigo-600" />
              <span>Recent Interactions</span>
            </h3>
            <button 
              onClick={onScrollToTimeline}
              className="text-[11px] font-bold text-indigo-600 hover:text-indigo-800 flex items-center space-x-1 cursor-pointer"
            >
              <span>View full timeline</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>

          {/* Chronological List of Actual Customer Activity */}
          <div className="space-y-2 text-xs">
            {recentInteractionsPreview.map((item, idx) => (
              <div key={idx} className="p-2.5 bg-slate-50 border border-slate-200/80 rounded-lg flex items-center justify-between">
                <div className="flex items-center space-x-2 truncate pr-2">
                  <span className="w-2 h-2 rounded-full bg-indigo-500 shrink-0" />
                  <span className="font-semibold text-slate-800 truncate">{item.title}</span>
                </div>
                <div className="flex items-center space-x-2 shrink-0">
                  <span className={`px-2 py-0.2 text-[10px] font-bold rounded border ${item.badgeColor}`}>
                    {item.channel}
                  </span>
                  <span className="text-[11px] text-slate-400 font-mono">{item.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* B2B Marketing Lifecycle Stage (5 Cols) */}
        <div className="lg:col-span-5 bg-white border border-slate-200/90 rounded-xl p-4 space-y-2.5 shadow-2xs flex flex-col justify-between">
          <div className="flex items-center justify-between border-b border-slate-100 pb-2">
            <h3 className="text-xs font-extrabold text-slate-900 uppercase tracking-wider flex items-center space-x-1.5">
              <GitCommit className="w-4 h-4 text-slate-500" />
              <span>Account Lifecycle Stage</span>
            </h3>
            <span className="px-2 py-0.5 text-[10px] font-bold bg-amber-100 text-amber-800 rounded">
              {journey.currentStage}
            </span>
          </div>

          {/* Stepper */}
          <div className="flex items-center justify-between text-[10px] font-bold py-1">
            {journey.stages.map((st, idx) => (
              <div key={st} className="flex items-center space-x-1">
                <span className={`px-2 py-0.5 rounded-md ${
                  st === journey.currentStage 
                    ? 'bg-amber-500 text-white font-extrabold' 
                    : 'text-slate-500 bg-slate-100'
                }`}>
                  {st}
                </span>
                {idx < journey.stages.length - 1 && <span className="text-slate-300">➔</span>}
              </div>
            ))}
          </div>

          <p className="text-[11px] text-slate-600 bg-slate-50 p-2 rounded-lg border border-slate-200">
            <span className="font-semibold text-slate-700">Reason:</span> "{journey.reason}"
          </p>
        </div>

      </div>

    </div>
  );
}
