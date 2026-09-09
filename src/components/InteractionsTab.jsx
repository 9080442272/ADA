import React, { useState } from 'react';
import { 
  Activity, 
  Search, 
  Filter, 
  Calendar, 
  Globe, 
  Mail, 
  Video, 
  Package, 
  MessageSquare, 
  ArrowUpRight, 
  CheckCircle2, 
  Brain, 
  Zap, 
  ArrowRight,
  Sparkles,
  FileText,
  Clock,
  Layers,
  ChevronRight
} from 'lucide-react';

export default function InteractionsTab({ customer, onViewEventDetails, onNavigateToOverview }) {
  const { interactionSummary, opportunitySignals, campaignProgression, timelineEvents } = customer;

  const [selectedChannel, setSelectedChannel] = useState("All");
  const [selectedType, setSelectedType] = useState("All");
  const [selectedTime, setSelectedTime] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const channels = ["All", "Website", "Email", "Webinar", "Product", "Conversation", "Campaign"];
  const types = ["All", "viewed", "opened", "attended", "downloaded", "replied", "used", "clicked"];
  const times = ["All", "Last 7 days", "Last 30 days", "Last 90 days"];

  // Icon resolver
  const getEventIcon = (channel) => {
    switch (channel) {
      case 'Website': return Globe;
      case 'Email': return Mail;
      case 'Webinar': return Video;
      case 'Product': return Package;
      case 'Conversation': return MessageSquare;
      default: return Activity;
    }
  };

  // Real-time filter logic
  const filteredEvents = (timelineEvents || []).filter(evt => {
    if (selectedChannel !== "All" && evt.channel !== selectedChannel) return false;
    if (selectedType !== "All" && evt.type !== selectedType) return false;

    if (selectedTime === "Last 7 days") {
      if (evt.time.includes("2 weeks ago")) return false;
    } else if (selectedTime === "Last 30 days") {
      // Includes all sample events
    }

    if (searchQuery.trim() !== "") {
      const q = searchQuery.toLowerCase();
      const matchTitle = evt.title.toLowerCase().includes(q);
      const matchDesc = evt.description.toLowerCase().includes(q);
      const matchChannel = evt.channel.toLowerCase().includes(q);
      if (!matchTitle && !matchDesc && !matchChannel) return false;
    }

    return true;
  });

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      
      {/* 1. PAGE HEADER & SUMMARY BAR (Requirement #2) */}
      <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-5 space-y-4">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-slate-100 pb-4">
          <div>
            <h1 className="text-xl font-extrabold text-slate-900 tracking-tight flex items-center space-x-2">
              <span>Interactions Intelligence Workspace</span>
              <span className="px-2.5 py-0.5 text-xs font-extrabold bg-indigo-100 text-indigo-800 rounded-full border border-indigo-200">
                Marketing Behaviour
              </span>
            </h1>
            <p className="text-xs text-slate-500 mt-0.5">
              Cross-channel activity and engagement history for {customer.name} ({customer.id})
            </p>
          </div>

          {/* Search Interactions Bar */}
          <div className="relative w-full lg:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input 
              type="text"
              placeholder="Search interactions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        </div>

        {/* Compact Summary Metrics Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
          <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-3">
            <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">Total Interactions</div>
            <div className="text-lg font-extrabold text-slate-900 mt-0.5">{interactionSummary.totalInteractions}</div>
          </div>
          <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-3">
            <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">Last Active</div>
            <div className="text-sm font-extrabold text-slate-900 mt-1">{interactionSummary.lastActive}</div>
          </div>
          <div className="bg-emerald-50/70 border border-emerald-200/80 rounded-xl p-3">
            <div className="text-[11px] font-semibold text-emerald-700 uppercase tracking-wider">High-Intent Signals</div>
            <div className="text-lg font-extrabold text-emerald-900 mt-0.5">{interactionSummary.highIntentSignals} Signals</div>
          </div>
          <div className="bg-indigo-50/70 border border-indigo-200/80 rounded-xl p-3">
            <div className="text-[11px] font-semibold text-indigo-700 uppercase tracking-wider">Active Channels</div>
            <div className="text-lg font-extrabold text-indigo-900 mt-0.5">{interactionSummary.channelsCount} Channels</div>
          </div>
        </div>
      </div>

      {/* 2. SIGNALS RELEVANT TO CURRENT OPPORTUNITY (Requirement #3 - Highlighted High-Value Signals) */}
      <div className="bg-white rounded-2xl border-2 border-indigo-200/90 shadow-sm p-5 space-y-4">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <div className="flex items-center space-x-2">
            <div className="w-7 h-7 rounded-lg ada-gradient-bg flex items-center justify-center text-white shadow-xs">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <div>
              <h2 className="text-sm font-extrabold text-slate-900 tracking-tight flex items-center space-x-2">
                <span>Signals Relevant to Current Opportunity</span>
                <span className="px-2 py-0.2 text-[10px] font-bold bg-emerald-100 text-emerald-800 rounded-full">
                  myPricing Cross-Sell Evidence
                </span>
              </h2>
              <p className="text-[11px] text-slate-500">Key high-value behaviors that directly influenced ADA's 91% Cross-Sell Intent prediction</p>
            </div>
          </div>

          <button 
            onClick={onNavigateToOverview}
            className="text-xs font-bold text-indigo-600 hover:text-indigo-800 flex items-center space-x-1"
          >
            <span>View Recommendation</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* 4 Opportunity Signal Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {opportunitySignals.map((sig) => {
            const Icon = getEventIcon(sig.channel);

            return (
              <div 
                key={sig.id}
                className="p-4 bg-slate-50/80 hover:bg-slate-50 border border-slate-200 rounded-xl space-y-3 transition-all flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className={`px-2.5 py-0.5 text-[10px] font-extrabold rounded-md border ${sig.badgeColor}`}>
                      {sig.badge}
                    </span>
                    <span className="text-[11px] font-mono text-slate-400">{sig.time}</span>
                  </div>

                  <h3 className="text-xs font-extrabold text-slate-900 flex items-center space-x-1.5">
                    <Icon className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
                    <span>{sig.title}</span>
                  </h3>

                  {/* Why it matters box */}
                  <div className="p-2.5 bg-white rounded-lg border border-slate-200 text-xs space-y-1 shadow-2xs">
                    <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Why it matters:</div>
                    <p className="text-slate-800 font-medium leading-snug">"{sig.whyItMatters}"</p>
                  </div>
                </div>

                {/* Contributed to Insight Indicator (Requirement #9) */}
                <div className="pt-2 border-t border-slate-200/60 flex items-center justify-between text-[11px]">
                  <div className="flex items-center space-x-1 text-indigo-700 font-bold">
                    <Brain className="w-3 h-3 text-indigo-600" />
                    <span>Contributed to: {sig.contributedTo}</span>
                  </div>

                  <button 
                    onClick={() => onViewEventDetails({
                      title: sig.title,
                      channel: sig.channel,
                      time: sig.time,
                      description: sig.whyItMatters,
                      sessionDetails: sig.sessionDetails,
                      whyItMatters: sig.whyItMatters,
                      channelBadge: sig.badgeColor
                    })}
                    className="text-indigo-600 font-bold hover:text-indigo-800 flex items-center space-x-0.5"
                  >
                    <span>View details</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>
      </div>

      {/* 3. MARKETING CAMPAIGN ENGAGEMENT PROGRESSION (Requirement #8) */}
      <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-5 space-y-3">
        <div className="flex items-center justify-between border-b border-slate-100 pb-2">
          <h3 className="text-xs font-extrabold text-slate-900 uppercase tracking-wider flex items-center space-x-1.5">
            <Layers className="w-4 h-4 text-indigo-600" />
            <span>Campaign Journey Progression — "{campaignProgression.campaignName}"</span>
          </h3>
          <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
            82% Open & Click Through Rate
          </span>
        </div>

        {/* Stepper */}
        <div className="flex items-center justify-between overflow-x-auto py-2 text-xs">
          {campaignProgression.steps.map((st, idx) => (
            <React.Fragment key={st.step}>
              <div className="flex flex-col items-center text-center space-y-1 px-2">
                <span className="w-6 h-6 rounded-full bg-emerald-500 text-white flex items-center justify-center text-[10px] font-bold">
                  ✓
                </span>
                <span className="font-bold text-slate-800 text-[11px]">{st.step}</span>
                <span className="text-[10px] text-slate-400 font-mono">{st.time}</span>
              </div>

              {idx < campaignProgression.steps.length - 1 && (
                <div className="h-0.5 flex-1 bg-emerald-300 min-w-[30px]" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* 4. FULL INTERACTION TIMELINE & REAL-TIME FILTERING (Requirement #4 & #5) */}
      <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-5 space-y-4">
        
        {/* Filter Controls Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-3">
          <div className="flex items-center space-x-2">
            <Activity className="w-4 h-4 text-indigo-600" />
            <h3 className="text-sm font-extrabold text-slate-900">
              Full Interaction Timeline ({filteredEvents.length} Events)
            </h3>
          </div>

          <div className="flex items-center flex-wrap gap-2 text-xs">
            {/* Channel Filter */}
            <div className="flex items-center space-x-1 bg-slate-50 border border-slate-200 rounded-xl px-2.5 py-1">
              <Filter className="w-3 h-3 text-slate-400" />
              <select 
                value={selectedChannel}
                onChange={(e) => setSelectedChannel(e.target.value)}
                className="bg-transparent text-xs font-semibold text-slate-700 focus:outline-none cursor-pointer"
              >
                {channels.map(c => <option key={c} value={c}>Channel: {c}</option>)}
              </select>
            </div>

            {/* Interaction Type Filter */}
            <div className="flex items-center space-x-1 bg-slate-50 border border-slate-200 rounded-xl px-2.5 py-1">
              <select 
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="bg-transparent text-xs font-semibold text-slate-700 focus:outline-none cursor-pointer"
              >
                {types.map(t => <option key={t} value={t}>Type: {t}</option>)}
              </select>
            </div>

            {/* Time Filter */}
            <div className="flex items-center space-x-1 bg-slate-50 border border-slate-200 rounded-xl px-2.5 py-1">
              <Calendar className="w-3 h-3 text-slate-400" />
              <select 
                value={selectedTime}
                onChange={(e) => setSelectedTime(e.target.value)}
                className="bg-transparent text-xs font-semibold text-slate-700 focus:outline-none cursor-pointer"
              >
                {times.map(tm => <option key={tm} value={tm}>Time: {tm}</option>)}
              </select>
            </div>
          </div>
        </div>

        {/* Timeline Events List */}
        <div className="relative pl-6 space-y-4 pt-1">
          <div className="absolute left-2.5 top-2 bottom-2 w-0.5 bg-slate-200" />

          {filteredEvents.length === 0 ? (
            <div className="p-8 text-center text-slate-400 text-xs font-medium bg-slate-50 rounded-xl border border-dashed border-slate-200">
              No interactions match the selected channel or type filters.
            </div>
          ) : (
            filteredEvents.map((evt) => {
              const Icon = getEventIcon(evt.channel);
              const isConversation = evt.channel === "Conversation";

              return (
                <div key={evt.id} className="relative group">
                  <div className="absolute -left-6 top-1 w-5 h-5 rounded-full border-2 bg-white border-indigo-500 text-indigo-600 shadow-2xs z-10 group-hover:scale-110 transition-transform flex items-center justify-center">
                    <Icon className="w-2.5 h-2.5" />
                  </div>

                  <div className="ml-2 p-3.5 rounded-xl border border-slate-200/80 bg-slate-50/60 hover:bg-slate-50 hover:border-indigo-200 transition-all space-y-2">
                    <div className="flex items-center justify-between flex-wrap gap-2">
                      <div className="flex items-center space-x-2">
                        <span className={`px-2 py-0.2 text-[10px] font-bold rounded border ${evt.channelBadge}`}>
                          {evt.channel}
                        </span>
                        <h4 className="text-xs font-bold text-slate-900">{evt.title}</h4>
                      </div>

                      <span className="text-xs font-medium text-slate-400 font-mono">{evt.time}</span>
                    </div>

                    <p className="text-xs font-medium text-slate-700 bg-white p-2.5 rounded-lg border border-slate-200 leading-snug">
                      "{evt.description}"
                    </p>

                    {/* Requirement #7: Specialized conversation attributes box if channel === 'Conversation' */}
                    {isConversation && (
                      <div className="p-3 bg-emerald-50/70 border border-emerald-200 rounded-xl space-y-1.5 text-xs">
                        <div className="grid grid-cols-2 gap-2 text-[11px]">
                          <div>
                            <span className="text-emerald-800 font-semibold">Intent detected:</span>
                            <span className="font-bold text-slate-900 ml-1">Pricing evaluation</span>
                          </div>
                          <div>
                            <span className="text-emerald-800 font-semibold">Sentiment:</span>
                            <span className="font-bold text-slate-900 ml-1">Neutral / Interested</span>
                          </div>
                        </div>
                        <div className="text-[11px] flex items-center space-x-1 text-indigo-700 font-bold pt-1 border-t border-emerald-200/60">
                          <Brain className="w-3 h-3 text-indigo-600" />
                          <span>Related insight: High Cross-Sell Intent (91% confidence)</span>
                        </div>
                      </div>
                    )}

                    <div className="flex items-center justify-between text-[11px] pt-1">
                      <div className="flex items-center space-x-1.5 text-indigo-700 font-semibold">
                        <Brain className="w-3 h-3 text-indigo-600" />
                        <span>Why it matters: {evt.whyItMatters}</span>
                      </div>

                      <button 
                        onClick={() => onViewEventDetails(evt)}
                        className="text-xs font-bold text-indigo-600 hover:text-indigo-800 flex items-center space-x-0.5 transition-colors"
                      >
                        <span>{evt.ctaText}</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>
                    </div>

                  </div>
                </div>
              );
            })
          )}
        </div>

      </div>

    </div>
  );
}
