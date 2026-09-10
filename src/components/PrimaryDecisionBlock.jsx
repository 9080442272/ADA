import React, { useState } from 'react';
import { 
  Sparkles, 
  HelpCircle, 
  CheckCircle2, 
  Check, 
  ArrowRight, 
  Megaphone,
  Clock,
  Globe,
  Mail,
  MessageSquare,
  MousePointer,
  ShoppingCart,
  ShoppingBag,
  Tag,
  ChevronDown,
  FileText,
  Eye,
  CreditCard,
  Layers
} from 'lucide-react';

export default function PrimaryDecisionBlock({ 
  customer, 
  onExecutePrimaryAction, 
  onWhyThisClick, 
  isExecuted, 
  onViewFullTimeline 
}) {
  const { primaryInsight, primaryAction, journey } = customer;

  const [activeActivityFilter, setActiveActivityFilter] = useState("All");
  const [selectedTimeRange, setSelectedTimeRange] = useState("Last 30 days");

  // Engagement Summary KPI metrics (matching screenshot layout)
  const engagementStats = [
    {
      id: "stat-1",
      count: "5",
      label: "Conversations",
      trend: "↑ 67%",
      icon: MessageSquare,
      iconBg: "bg-emerald-100 text-emerald-600",
      trendBg: "bg-emerald-50 text-emerald-700 border-emerald-200"
    },
    {
      id: "stat-2",
      count: "12",
      label: "Product views",
      trend: "↑ 20%",
      icon: MousePointer,
      iconBg: "bg-blue-100 text-blue-600",
      trendBg: "bg-emerald-50 text-emerald-700 border-emerald-200"
    },
    {
      id: "stat-3",
      count: "2",
      label: "Add to carts",
      trend: "↑ 100%",
      icon: ShoppingCart,
      iconBg: "bg-purple-100 text-purple-600",
      trendBg: "bg-emerald-50 text-emerald-700 border-emerald-200"
    },
    {
      id: "stat-4",
      count: "1",
      label: "Purchase",
      trend: "↑ 0%",
      icon: ShoppingBag,
      iconBg: "bg-red-100 text-red-600",
      trendBg: "bg-emerald-50 text-emerald-700 border-emerald-200"
    }
  ];

  // Recent Activity Items List (Matching exact screenshot structure & B2B Boostmyshop context)
  const activitiesList = [
    {
      id: "act-1",
      title: "Purchase completed",
      subtitle: "Order #ORD-92831 • €3,499",
      time: "2 days ago",
      type: "Orders",
      icon: ShoppingCart,
      iconBg: "bg-red-100 text-red-600 border-red-200",
      hasViewBtn: false
    },
    {
      id: "act-2",
      title: "Conversation with AI Assistant",
      subtitle: "Asked about Amazon API repricing",
      time: "3 days ago",
      type: "Conversations",
      icon: MessageSquare,
      iconBg: "bg-blue-100 text-blue-600 border-blue-200",
      hasViewBtn: true,
      isAi: true
    },
    {
      id: "act-3",
      title: "Visited product page",
      subtitle: "myPricing ROI Calculator",
      time: "4 days ago",
      type: "Events",
      icon: MousePointer,
      iconBg: "bg-slate-100 text-slate-700 border-slate-200",
      hasViewBtn: false
    },
    {
      id: "act-4",
      title: "Abandoned cart",
      subtitle: "2 items • €4,998",
      time: "5 days ago",
      type: "Orders",
      icon: ShoppingCart,
      iconBg: "bg-red-100 text-red-600 border-red-200",
      hasViewBtn: false
    },
    {
      id: "act-5",
      title: "Email opened",
      subtitle: "New Pricing Strategy Campaign",
      time: "6 days ago",
      type: "Events",
      icon: Mail,
      iconBg: "bg-blue-100 text-blue-600 border-blue-200",
      hasViewBtn: false
    },
    {
      id: "act-6",
      title: "Tag added",
      subtitle: "Interested in new launch",
      isTagPill: true,
      tagLabel: "Interested in new launch",
      time: "1 week ago",
      type: "System",
      icon: Tag,
      iconBg: "bg-red-100 text-red-600 border-red-200",
      hasViewBtn: false
    }
  ];

  // Filter activities
  const filteredActivities = activitiesList.filter(act => {
    if (activeActivityFilter === "All") return true;
    return act.type === activeActivityFilter;
  });

  return (
    <div className="space-y-6">
      
      {/* 1. HERO AI MARKETING DECISION ENGINE */}
      <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-6 space-y-5">
        
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

              {/* Explanation Paragraph */}
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

            {/* Primary Action Button */}
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

      {/* 2. UNIFIED SINGLE CARD SECTION: ENGAGEMENT SUMMARY & RECENT ACTIVITY MERGED */}
      <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-6 space-y-6">
        
        {/* TOP HALF: Engagement summary (Last 30 days) */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-base font-extrabold text-slate-900 tracking-tight flex items-center space-x-2">
              <span>Engagement summary</span>
              <span className="text-xs font-medium text-slate-400">(Last 30 days)</span>
            </h2>

            <div className="relative">
              <select 
                value={selectedTimeRange}
                onChange={(e) => setSelectedTimeRange(e.target.value)}
                className="px-3 py-1.5 bg-white border border-slate-200 rounded-xl text-xs font-bold text-slate-700 focus:outline-none cursor-pointer shadow-2xs appearance-none pr-7"
              >
                <option value="Last 30 days">Last 30 days</option>
                <option value="Last 7 days">Last 7 days</option>
                <option value="Last 90 days">Last 90 days</option>
              </select>
              <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>

          {/* 4 Stat Cards Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {engagementStats.map((st) => {
              const Icon = st.icon;
              return (
                <div key={st.id} className="bg-slate-50/70 p-4 rounded-2xl border border-slate-200/80 space-y-3">
                  <div className="flex items-center justify-between">
                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center font-bold ${st.iconBg}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <div>
                    <div className="text-2xl font-black text-slate-900 tracking-tight">{st.count}</div>
                    <div className="text-xs font-semibold text-slate-500 mt-0.5">{st.label}</div>
                  </div>

                  <div className="pt-1">
                    <span className="px-2 py-0.5 text-[11px] font-extrabold rounded-md bg-emerald-100 text-emerald-800 border border-emerald-200">
                      {st.trend}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* INNER SECTION DIVIDER LINE */}
        <div className="border-t border-slate-100 pt-5 space-y-5">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <h2 className="text-lg font-extrabold text-slate-900 tracking-tight">
              Recent activity
            </h2>

            {/* Filter Pills: All, Events, Conversations, Orders, System */}
            <div className="flex items-center space-x-1.5 overflow-x-auto text-xs">
              {["All", "Events", "Conversations", "Orders", "System"].map(filter => (
                <button
                  key={filter}
                  onClick={() => setActiveActivityFilter(filter)}
                  className={`px-4 py-1.5 rounded-full font-bold transition-all cursor-pointer ${
                    activeActivityFilter === filter 
                      ? 'bg-blue-600 text-white shadow-xs' 
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-600'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          {/* Timeline List (Vertical line with icon nodes) */}
          <div className="relative pl-6 space-y-6 before:absolute before:left-3.5 before:top-3 before:bottom-3 before:w-0.5 before:bg-slate-200">
            {filteredActivities.map((act) => {
              const Icon = act.icon;
              return (
                <div key={act.id} className="relative flex items-start justify-between gap-4 group">
                  
                  {/* Timeline Circle Icon Node */}
                  <div className={`absolute -left-6 top-0 w-7 h-7 rounded-full flex items-center justify-center border-2 bg-white z-10 ${act.iconBg}`}>
                    <Icon className="w-3.5 h-3.5" />
                  </div>

                  {/* Activity Details */}
                  <div className="space-y-1 pl-3 flex-1">
                    <div className="flex items-center space-x-2">
                      <span className="font-extrabold text-slate-900 text-sm">{act.title}</span>
                      {act.isAi && (
                        <span className="w-3.5 h-3.5 rounded-full bg-indigo-100 text-indigo-600 inline-flex items-center justify-center">
                          <Sparkles className="w-2.5 h-2.5" />
                        </span>
                      )}
                    </div>

                    {act.isTagPill ? (
                      <div className="pt-0.5">
                        <span className="px-3 py-1 bg-amber-100 text-amber-950 font-bold text-xs rounded-full border border-amber-200 inline-block">
                          {act.tagLabel}
                        </span>
                      </div>
                    ) : (
                      <div className="text-xs text-slate-500 font-medium flex items-center space-x-2">
                        <span>{act.subtitle}</span>
                        {act.hasViewBtn && (
                          <button 
                            onClick={onViewFullTimeline}
                            className="px-2 py-0.5 bg-blue-100 hover:bg-blue-200 text-blue-700 font-extrabold text-[11px] rounded-md transition-colors cursor-pointer"
                          >
                            View
                          </button>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Time Label */}
                  <div className="text-xs text-slate-400 font-semibold shrink-0 pt-0.5">
                    {act.time}
                  </div>

                </div>
              );
            })}
          </div>

          {/* Full-Width View All Activity CTA Button */}
          <div className="pt-2">
            <button
              onClick={onViewFullTimeline}
              className="w-full py-3 bg-slate-50 hover:bg-slate-100 text-indigo-600 border border-slate-200 rounded-xl text-xs font-extrabold flex items-center justify-center space-x-2 transition-all cursor-pointer"
            >
              <span>View all activity</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>

    </div>
  );
}
