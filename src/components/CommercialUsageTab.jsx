import React, { useState } from 'react';
import { 
  CreditCard, 
  TrendingUp, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Clock, 
  BarChart3, 
  Package, 
  Zap, 
  Brain, 
  Globe, 
  FileText, 
  Video, 
  ChevronRight,
  ShieldCheck,
  Building2,
  Calendar,
  Layers,
  ArrowUpRight,
  Info
} from 'lucide-react';

export default function CommercialUsageTab({ 
  customer, 
  onSelectProductDetails, 
  onLaunchCampaign 
}) {
  const { commercialData } = customer;
  const { productUsageRows, usageTrend, keyUsageInsights, recentCommercialActivity } = commercialData;

  const [activeTimePeriod, setActiveTimePeriod] = useState("Last 30 days");

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      
      {/* 1. HERO SYNTHESIS BANNER: CONNECT USAGE TO MARKETING OPPORTUNITY (Requirement #5) */}
      <div className="bg-slate-900 text-white rounded-2xl p-6 shadow-xl border border-slate-800 relative overflow-hidden">
        {/* Background Subtle Mesh / Accents */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-emerald-600/10 rounded-full blur-2xl pointer-events-none" />

        <div className="relative z-10 space-y-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-4">
            <div className="flex items-center space-x-2.5">
              <div className="w-8 h-8 rounded-xl ada-gradient-bg flex items-center justify-center text-white shadow-md">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <h1 className="text-lg font-extrabold text-white tracking-tight flex items-center space-x-2">
                  <span>Commercial & Product Intelligence</span>
                  <span className="px-2.5 py-0.5 text-[10px] font-extrabold bg-indigo-500/20 text-indigo-300 rounded-full border border-indigo-500/30">
                    Expansion Signal Detected
                  </span>
                </h1>
                <p className="text-xs text-slate-400 mt-0.5">
                  Synthesized product usage, engagement trend, and commercial readiness for {customer.name} ({customer.id})
                </p>
              </div>
            </div>

            <button 
              onClick={() => onLaunchCampaign && onLaunchCampaign(customer.primaryAction)}
              className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white font-extrabold text-xs rounded-xl shadow-lg flex items-center space-x-2 transition-all hover:scale-105 shrink-0 cursor-pointer"
            >
              <Zap className="w-3.5 h-3.5 text-amber-300" />
              <span>Launch myPricing Cross-Sell Campaign</span>
            </button>
          </div>

          {/* Core Decision Flow Equation (USAGE ➔ BEHAVIOUR ➔ AI INSIGHT ➔ MARKETING ACTION) */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-3 text-xs pt-1">
            
            <div className="bg-slate-800/80 border border-slate-700/80 rounded-xl p-3 space-y-1">
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">1. Current Usage</div>
              <div className="text-xs font-extrabold text-white flex items-center space-x-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>myFulfillment — 82% Adoption</span>
              </div>
              <p className="text-[11px] text-slate-400">High operational volume (1,420 orders/wk)</p>
            </div>

            <div className="bg-slate-800/80 border border-slate-700/80 rounded-xl p-3 space-y-1">
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">2. Account Behaviour</div>
              <div className="text-xs font-extrabold text-white flex items-center space-x-1.5">
                <TrendingUp className="w-3.5 h-3.5 text-indigo-400" />
                <span>myPricing — 4 Visits (+300%)</span>
              </div>
              <p className="text-[11px] text-slate-400">Downloaded playbook & attended webinar</p>
            </div>

            <div className="bg-slate-800/80 border border-slate-700/80 rounded-xl p-3 space-y-1">
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">3. AI Synthesis</div>
              <div className="text-xs font-extrabold text-indigo-300 flex items-center space-x-1.5">
                <Brain className="w-3.5 h-3.5 text-indigo-400" />
                <span>High Expansion Intent (91%)</span>
              </div>
              <p className="text-[11px] text-slate-400">Natural progression from fulfillment to repricing</p>
            </div>

            <div className="bg-indigo-950/80 border border-indigo-700/60 rounded-xl p-3 space-y-1">
              <div className="text-[10px] font-bold text-amber-400 uppercase tracking-wider">4. Marketing Opportunity</div>
              <div className="text-xs font-extrabold text-emerald-300 flex items-center space-x-1.5">
                <Zap className="w-3.5 h-3.5 text-amber-400" />
                <span>Cross-Sell myPricing</span>
              </div>
              <p className="text-[11px] text-slate-300">Actionable cross-sell campaign ready</p>
            </div>

          </div>
        </div>
      </div>

      {/* 2. PRODUCT USAGE OVERVIEW (Requirement #1) */}
      <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-5 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3">
          <div>
            <h2 className="text-sm font-extrabold text-slate-900 tracking-tight flex items-center space-x-2">
              <Package className="w-4 h-4 text-indigo-600" />
              <span>Product Usage Overview</span>
            </h2>
            <p className="text-xs text-slate-500">Usage trends and engagement across Boostmyshop products</p>
          </div>
          <span className="text-[11px] font-semibold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-lg">
            4 Products Tracked
          </span>
        </div>

        {/* Product Rows List */}
        <div className="space-y-3">
          {productUsageRows.map((prod) => {
            const isPricing = prod.id === "prod-mypricing";

            return (
              <div 
                key={prod.id}
                className={`p-4 rounded-2xl border transition-all ${
                  isPricing 
                    ? 'bg-indigo-50/60 border-2 border-indigo-400/90 shadow-md ring-2 ring-indigo-500/10' 
                    : prod.status === "Active"
                    ? 'bg-slate-50/80 border-slate-200 hover:border-slate-300'
                    : 'bg-white border-slate-200/80 opacity-80 hover:opacity-100'
                }`}
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  
                  {/* Left Column: Product Identity & Badges */}
                  <div className="space-y-1.5 min-w-[220px]">
                    <div className="flex items-center space-x-2">
                      <h3 className="text-sm font-extrabold text-slate-900 flex items-center space-x-1.5">
                        <span>{prod.name}</span>
                        {isPricing && (
                          <span className="px-2 py-0.5 text-[10px] font-extrabold bg-indigo-600 text-white rounded-full uppercase tracking-wider shadow-2xs">
                            Expansion Opportunity
                          </span>
                        )}
                      </h3>
                    </div>

                    <div className="text-[11px] text-slate-500 font-medium">
                      {prod.category}
                    </div>

                    <div className="flex items-center space-x-2 pt-0.5">
                      <span className={`px-2 py-0.5 text-[10px] font-extrabold rounded-md border ${prod.statusBadge}`}>
                        {prod.status}
                      </span>

                      {prod.interest && (
                        <span className="px-2 py-0.5 text-[10px] font-extrabold bg-emerald-100 text-emerald-800 rounded-md border border-emerald-300">
                          {prod.interest}
                        </span>
                      )}

                      <span className="text-[10px] font-mono text-slate-400">Since: {prod.since}</span>
                    </div>
                  </div>

                  {/* Middle Column: Metrics Strip */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 flex-1 text-xs">
                    {prod.metricsList.map((m, idx) => (
                      <div key={idx} className="bg-white/80 border border-slate-200/80 rounded-xl p-2.5 text-center shadow-2xs">
                        <div className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider">{m.label}</div>
                        <div className={`text-xs font-extrabold mt-0.5 ${isPricing && idx === 3 ? 'text-indigo-600 font-extrabold' : 'text-slate-900'}`}>
                          {m.value}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Right Column: CTA */}
                  <div className="flex items-center justify-end shrink-0">
                    <button
                      onClick={() => onSelectProductDetails(prod)}
                      className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center space-x-1.5 cursor-pointer ${
                        isPricing 
                          ? 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-md' 
                          : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-300'
                      }`}
                    >
                      <span>{prod.ctaText}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 3. USAGE TREND CHART & TIME FILTERS (Requirement #2) */}
      <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-5 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-3">
          <div>
            <h2 className="text-sm font-extrabold text-slate-900 tracking-tight flex items-center space-x-2">
              <TrendingUp className="w-4 h-4 text-indigo-600" />
              <span>Usage & Interest Trend</span>
            </h2>
            <p className="text-xs text-slate-500">Track whether account product engagement is increasing or decreasing over time</p>
          </div>

          {/* Time Filter Buttons */}
          <div className="flex items-center space-x-1 bg-slate-100 p-1 rounded-xl text-xs">
            {usageTrend.periods.map(period => (
              <button
                key={period}
                onClick={() => setActiveTimePeriod(period)}
                className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  activeTimePeriod === period 
                    ? 'bg-white text-indigo-700 shadow-2xs font-extrabold' 
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {period}
              </button>
            ))}
          </div>
        </div>

        {/* Takeaway Insight Banner */}
        <div className="p-3 bg-indigo-50/80 border border-indigo-100 rounded-xl text-xs flex items-center space-x-2">
          <Brain className="w-4 h-4 text-indigo-600 shrink-0" />
          <span className="text-indigo-950 font-bold">
            ADA Core Finding: "{usageTrend.insightTakeaway}"
          </span>
        </div>

        {/* Legend */}
        <div className="flex items-center space-x-6 text-xs font-semibold pt-1 flex-wrap gap-y-2">
          <div className="flex items-center space-x-2">
            <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block" />
            <span className="text-slate-800">myFulfillment Usage (Strong +18%)</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="w-3 h-3 rounded-full bg-indigo-600 inline-block animate-pulse" />
            <span className="text-indigo-900 font-extrabold">myPricing Interest (Rapid Spike +300%)</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="w-3 h-3 rounded-full bg-slate-300 inline-block" />
            <span className="text-slate-400">Industry Benchmark</span>
          </div>
        </div>

        {/* Visual Line Chart Graphic representation */}
        <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-4 relative h-52 flex flex-col justify-between">
          <div className="absolute inset-0 p-4 flex flex-col justify-between pointer-events-none opacity-20">
            <div className="border-b border-slate-400 w-full" />
            <div className="border-b border-slate-400 w-full" />
            <div className="border-b border-slate-400 w-full" />
            <div className="border-b border-slate-400 w-full" />
          </div>

          <svg className="w-full h-36 overflow-visible z-10" viewBox="0 0 400 120">
            {/* Benchmark line */}
            <path 
              d="M 10 90 Q 130 88, 250 85 T 390 82" 
              fill="none" 
              stroke="#cbd5e1" 
              strokeWidth="2" 
              strokeDasharray="4 4" 
            />
            {/* myFulfillment Usage Line */}
            <path 
              d="M 10 70 Q 130 60, 250 45 T 390 35" 
              fill="none" 
              stroke="#10b981" 
              strokeWidth="3" 
            />
            {/* myPricing Interest Line (Spiking UP!) */}
            <path 
              d="M 10 110 Q 130 100, 250 50 T 390 15" 
              fill="none" 
              stroke="#4f46e5" 
              strokeWidth="4" 
            />

            {/* Data points */}
            <circle cx="390" cy="35" r="5" fill="#10b981" />
            <circle cx="390" cy="15" r="6" fill="#4f46e5" className="animate-ping" />
            <circle cx="390" cy="15" r="5" fill="#4f46e5" />
          </svg>

          <div className="flex justify-between text-[11px] font-mono text-slate-500 pt-2 border-t border-slate-200/80 z-10">
            <span>Week 1 (Aug 10)</span>
            <span>Week 2 (Aug 17)</span>
            <span>Week 3 (Aug 24)</span>
            <span className="font-extrabold text-indigo-600">Week 4 (Today · Peak Interest)</span>
          </div>
        </div>

      </div>

      {/* 4. KEY USAGE INSIGHTS (AI-GENERATED) (Requirement #3) */}
      <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-5 space-y-4">
        <div className="flex items-center space-x-2 border-b border-slate-100 pb-3">
          <Brain className="w-4 h-4 text-indigo-600" />
          <div>
            <h2 className="text-sm font-extrabold text-slate-900 tracking-tight">Key Usage Insights</h2>
            <p className="text-xs text-slate-500">AI-generated commercial observations and business meaning</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {keyUsageInsights.map(ins => (
            <div 
              key={ins.id}
              className="p-4 bg-slate-50/80 hover:bg-slate-50 border border-slate-200 rounded-xl space-y-2.5 flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className={`px-2 py-0.5 text-[10px] font-extrabold rounded-md border ${ins.statusBadge}`}>
                    {ins.status}
                  </span>
                  <span className="text-[10px] font-bold text-slate-400">ADA Analysis</span>
                </div>

                <h3 className="text-xs font-extrabold text-slate-900">{ins.title}</h3>

                <p className="text-xs font-semibold text-indigo-950 bg-white p-2.5 rounded-lg border border-slate-200 leading-snug">
                  "{ins.evidence}"
                </p>
              </div>

              <div className="pt-2 border-t border-slate-200/60 text-[11px] text-slate-600">
                <span className="font-bold text-slate-700">Business meaning:</span> {ins.businessMeaning}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 5. RECENT COMMERCIAL ACTIVITY (Requirement #4) */}
      <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-5 space-y-4">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <div>
            <h2 className="text-sm font-extrabold text-slate-900 tracking-tight flex items-center space-x-2">
              <CreditCard className="w-4 h-4 text-indigo-600" />
              <span>Recent Commercial Activity</span>
            </h2>
            <p className="text-xs text-slate-500">Contracts, subscriptions and account revenue history</p>
          </div>

          <button className="text-xs font-bold text-indigo-600 hover:text-indigo-800 flex items-center space-x-1 cursor-pointer">
            <span>View all contracts</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Compact Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                <th className="py-2.5 px-3">Date</th>
                <th className="py-2.5 px-3">Activity</th>
                <th className="py-2.5 px-3">Product</th>
                <th className="py-2.5 px-3">Value</th>
                <th className="py-2.5 px-3">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {recentCommercialActivity.map(act => (
                <tr key={act.id} className="hover:bg-slate-50/80 font-medium text-slate-800">
                  <td className="py-2.5 px-3 font-mono text-slate-500">{act.date}</td>
                  <td className="py-2.5 px-3 font-bold text-slate-900">{act.activity}</td>
                  <td className="py-2.5 px-3">{act.product}</td>
                  <td className="py-2.5 px-3 font-mono font-bold text-indigo-900">{act.value}</td>
                  <td className="py-2.5 px-3">
                    <span className={`px-2 py-0.5 text-[10px] font-extrabold rounded-md border ${act.statusBadge}`}>
                      {act.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}
