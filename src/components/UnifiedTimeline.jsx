import React, { useState } from 'react';
import { 
  Activity, 
  MessageSquare, 
  Globe, 
  Smartphone, 
  Mail, 
  ShoppingBag, 
  Filter, 
  Calendar, 
  ArrowUpRight,
  Sparkles,
  Search,
  CheckCircle2,
  X,
  Video,
  FileText,
  Package
} from 'lucide-react';

export default function UnifiedTimeline({ 
  events, 
  onViewEventDetails, 
  activeTraceInsightId, 
  onClearTrace, 
  insights, 
  actions 
}) {
  const [selectedChannel, setSelectedChannel] = useState("All");
  const [selectedDateRange, setSelectedDateRange] = useState("All");
  const [selectedEventType, setSelectedEventType] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const channels = ["All", "Website", "Email", "Webinar", "Product"];
  const dateRanges = ["All", "Today", "Last 7 days", "Last 30 days"];
  const eventTypes = ["All", "web_view", "email", "webinar", "download", "product_usage"];

  // Icon Resolver
  const getEventIcon = (channel) => {
    switch (channel) {
      case 'Website': return Globe;
      case 'Email': return Mail;
      case 'Webinar': return Video;
      case 'Product': return Package;
      default: return Activity;
    }
  };

  // Filter Logic
  const filteredEvents = events.filter(evt => {
    if (selectedChannel !== "All" && evt.channel !== selectedChannel) return false;
    if (selectedEventType !== "All" && evt.type !== selectedEventType) return false;
    
    if (selectedDateRange === "Today") {
      if (!evt.time.includes("Today")) return false;
    } else if (selectedDateRange === "Last 7 days") {
      if (evt.time.includes("2 weeks ago")) return false;
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
    <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-4 space-y-4">
      
      {/* Timeline Header & Filters */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3 border-b border-slate-100 pb-3">
        
        {/* Title */}
        <div className="flex items-center space-x-2">
          <div className="w-7 h-7 rounded-lg bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 shadow-2xs">
            <Activity className="w-3.5 h-3.5 text-indigo-600" />
          </div>
          <div>
            <h2 className="text-sm font-extrabold text-slate-900 tracking-tight flex items-center space-x-2">
              <span>Evidence & Marketing Interaction Timeline</span>
              <span className="px-2 py-0.2 text-[10px] font-bold bg-indigo-100 text-indigo-800 rounded-full">
                {filteredEvents.length} Events
              </span>
            </h2>
            <p className="text-[11px] text-slate-500">Omnichannel B2B activity log tracing TechGear Europe marketing behavior</p>
          </div>
        </div>

        {/* Filter Controls Bar */}
        <div className="flex items-center flex-wrap gap-2 text-xs">
          
          {/* Search Filter */}
          <div className="relative">
            <Search className="w-3 h-3 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
            <input 
              type="text"
              placeholder="Search evidence..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-7 pr-2.5 py-1 bg-slate-50 border border-slate-200 rounded-lg text-xs focus:outline-none focus:ring-1 focus:ring-indigo-500 w-32"
            />
          </div>

          {/* Channel Dropdown Filter */}
          <div className="flex items-center space-x-1 bg-slate-50 border border-slate-200 rounded-lg px-2 py-1">
            <Filter className="w-3 h-3 text-slate-400" />
            <select
              value={selectedChannel}
              onChange={(e) => setSelectedChannel(e.target.value)}
              className="bg-transparent text-xs font-medium text-slate-700 focus:outline-none cursor-pointer"
            >
              {channels.map(c => <option key={c} value={c}>Channel: {c}</option>)}
            </select>
          </div>

          {/* Date Filter */}
          <div className="flex items-center space-x-1 bg-slate-50 border border-slate-200 rounded-lg px-2 py-1">
            <Calendar className="w-3 h-3 text-slate-400" />
            <select
              value={selectedDateRange}
              onChange={(e) => setSelectedDateRange(e.target.value)}
              className="bg-transparent text-xs font-medium text-slate-700 focus:outline-none cursor-pointer"
            >
              {dateRanges.map(d => <option key={d} value={d}>Time: {d}</option>)}
            </select>
          </div>

        </div>

      </div>

      {/* Timeline Stream */}
      <div className="relative pl-6 space-y-4 pt-1">
        
        {/* Vertical stem line */}
        <div className="absolute left-2.5 top-2 bottom-2 w-0.5 bg-slate-200" />

        {filteredEvents.length === 0 ? (
          <div className="p-6 text-center text-slate-400 text-xs font-medium bg-slate-50 rounded-xl border border-dashed border-slate-200">
            No interaction events match the selected filters.
          </div>
        ) : (
          filteredEvents.map((evt) => {
            const Icon = getEventIcon(evt.channel);

            return (
              <div key={evt.id} className="relative group">
                {/* Node marker icon */}
                <div className="absolute -left-6 top-1 w-5 h-5 rounded-full border-2 bg-white border-indigo-500 text-indigo-600 shadow-2xs z-10 group-hover:scale-110 transition-transform flex items-center justify-center">
                  <Icon className="w-2.5 h-2.5" />
                </div>

                {/* Event Card Container */}
                <div className="ml-2 p-3 rounded-xl border border-slate-200/80 bg-slate-50/60 hover:bg-slate-50 hover:border-indigo-200 transition-all space-y-1.5">
                  
                  {/* Event Header row */}
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-0.2 text-[10px] font-bold rounded border ${evt.channelBadge}`}>
                        {evt.channel}
                      </span>

                      <h3 className="text-xs font-bold text-slate-900">
                        {evt.title}
                      </h3>
                    </div>

                    <span className="text-xs font-medium text-slate-400 font-mono">
                      {evt.time}
                    </span>
                  </div>

                  {/* Event Description */}
                  <p className="text-xs font-medium text-slate-700 bg-white p-2 rounded-lg border border-slate-200 shadow-2xs leading-snug">
                    {evt.description}
                  </p>

                  {/* Metadata & CTAs */}
                  <div className="flex items-center justify-between text-[11px] pt-0.5">
                    <span className="text-slate-500 truncate max-w-[320px]">
                      {evt.metadata}
                    </span>

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
  );
}
