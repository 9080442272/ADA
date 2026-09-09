import React, { useState } from 'react';
import { 
  Sliders, 
  Search, 
  Plus, 
  Edit3, 
  Sparkles, 
  CheckCircle2, 
  Brain, 
  Layers, 
  ChevronDown, 
  ChevronRight, 
  Filter, 
  RefreshCw, 
  ShieldCheck, 
  Info, 
  Building2, 
  CreditCard, 
  Package, 
  MessageSquare, 
  TrendingUp, 
  Lock,
  ArrowRight,
  PlusCircle,
  ExternalLink,
  Zap
} from 'lucide-react';

export default function AttributesTab({ 
  customer, 
  onEditAttribute, 
  onAddCustomAttribute,
  onViewSegmentDetails,
  onViewInsightEvidence 
}) {
  const { attributesData } = customer;
  const { summary, categories, attributesList } = attributesData;

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTypeFilter, setSelectedTypeFilter] = useState("All"); // All, Standard, Custom, Recently updated
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState("All");
  
  // Accordion open/collapse states (default: all expanded)
  const [expandedCategories, setExpandedCategories] = useState({
    "COMPANY INFORMATION": true,
    "COMMERCIAL": true,
    "PRODUCT & USAGE": true,
    "MARKETING": true,
    "BEHAVIOURAL": true,
    "CONSENT & PRIVACY": true
  });

  const toggleCategory = (cat) => {
    setExpandedCategories(prev => ({
      ...prev,
      [cat]: !prev[cat]
    }));
  };

  const expandAll = () => {
    const all = {};
    categories.forEach(c => all[c] = true);
    setExpandedCategories(all);
  };

  const collapseAll = () => {
    const all = {};
    categories.forEach(c => all[c] = false);
    setExpandedCategories(all);
  };

  // Filter attributes logic
  const filteredAttributes = attributesList.filter(attr => {
    // Type Filter
    if (selectedTypeFilter === "Standard" && attr.isCustom) return false;
    if (selectedTypeFilter === "Custom" && !attr.isCustom) return false;
    if (selectedTypeFilter === "Recently updated" && !attr.lastUpdated.includes("min")) return false;

    // Category Filter
    if (selectedCategoryFilter !== "All" && attr.category !== selectedCategoryFilter) return false;

    // Search Query Filter
    if (searchQuery.trim() !== "") {
      const q = searchQuery.toLowerCase();
      const matchName = attr.name.toLowerCase().includes(q);
      const matchValue = attr.value ? String(attr.value).toLowerCase().includes(q) : false;
      const matchSource = attr.source.toLowerCase().includes(q);
      if (!matchName && !matchValue && !matchSource) return false;
    }

    return true;
  });

  // Group filtered attributes by category
  const groupedAttributes = {};
  categories.forEach(cat => {
    groupedAttributes[cat] = filteredAttributes.filter(a => a.category === cat);
  });

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      
      {/* 1. PAGE HEADER & COMPACT SUMMARY (Requirement #1) */}
      <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-5 space-y-4">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-slate-100 pb-4">
          <div>
            <h1 className="text-xl font-extrabold text-slate-900 tracking-tight flex items-center space-x-2">
              <span>Account Attributes</span>
              <span className="px-2.5 py-0.5 text-xs font-extrabold bg-indigo-100 text-indigo-800 rounded-full border border-indigo-200">
                CDP Unified Schema
              </span>
            </h1>
            <p className="text-xs text-slate-500 mt-0.5">
              Standard and custom attributes unified from connected data sources for {customer.name} ({customer.id})
            </p>
          </div>

          {/* Top-Right Action Buttons */}
          <div className="flex items-center space-x-2">
            <button 
              onClick={onAddCustomAttribute}
              className="px-3.5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold text-xs rounded-xl shadow-xs flex items-center space-x-1.5 transition-all cursor-pointer"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Add custom attribute</span>
            </button>

            <button 
              onClick={() => onEditAttribute(attributesList[1])} // Open edit attribute drawer for demo
              className="px-3.5 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs rounded-xl border border-slate-300 flex items-center space-x-1.5 transition-all cursor-pointer"
            >
              <Edit3 className="w-3.5 h-3.5 text-slate-500" />
              <span>Edit attributes</span>
            </button>
          </div>
        </div>

        {/* Compact Metrics Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
          <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-3">
            <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">Total Attributes</div>
            <div className="text-lg font-extrabold text-slate-900 mt-0.5">{summary.total} attributes</div>
          </div>
          <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-3">
            <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">Standard Schema</div>
            <div className="text-lg font-extrabold text-slate-900 mt-0.5">{summary.standardCount} standard</div>
          </div>
          <div className="bg-indigo-50/70 border border-indigo-200/80 rounded-xl p-3">
            <div className="text-[11px] font-semibold text-indigo-700 uppercase tracking-wider">Custom Schema</div>
            <div className="text-lg font-extrabold text-indigo-900 mt-0.5">{summary.customCount} custom</div>
          </div>
          <div className="bg-emerald-50/70 border border-emerald-200/80 rounded-xl p-3">
            <div className="text-[11px] font-semibold text-emerald-700 uppercase tracking-wider">Sync Status</div>
            <div className="text-sm font-extrabold text-emerald-900 mt-1 flex items-center space-x-1">
              <RefreshCw className="w-3 h-3 text-emerald-600 animate-spin" />
              <span>Synced {summary.lastSynced}</span>
            </div>
          </div>
        </div>
      </div>

      {/* 2. AI ATTRIBUTE SUMMARY (Requirement #2) */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white rounded-2xl p-5 shadow-md border border-slate-800 space-y-3">
        <div className="flex items-center justify-between border-b border-slate-800 pb-2.5">
          <div className="flex items-center space-x-2">
            <div className="w-7 h-7 rounded-lg ada-gradient-bg flex items-center justify-center text-white shadow-xs">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <h2 className="text-sm font-extrabold text-white tracking-tight">AI Attribute Summary</h2>
          </div>
          <span className="text-[10px] font-semibold text-slate-400 italic">
            Generated from account attributes + behavioural signals
          </span>
        </div>

        <p className="text-xs font-semibold text-indigo-100 leading-relaxed">
          "{summary.aiSummaryText}"
        </p>

        {/* 3 Derived Attribute Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs pt-1">
          {summary.derivedMetrics.map((dm, idx) => (
            <div key={idx} className="bg-slate-800/80 border border-slate-700/80 rounded-xl p-2.5 flex items-center justify-between">
              <span className="text-slate-400 font-medium text-[11px]">{dm.label}:</span>
              <span className={`px-2 py-0.5 text-[10px] font-extrabold rounded-md border ${dm.badge}`}>
                {dm.value}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* 3. ATTRIBUTE SEARCH + FILTERS (Requirement #3) */}
      <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-4 space-y-3">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
          
          {/* Search Input Field */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input 
              type="text"
              placeholder="Search by attribute name, value, or source..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-indigo-500 font-medium"
            />
          </div>

          {/* Type Filter Pills */}
          <div className="flex items-center space-x-1 overflow-x-auto text-xs shrink-0">
            {["All", "Standard", "Custom", "Recently updated"].map(filter => (
              <button
                key={filter}
                onClick={() => setSelectedTypeFilter(filter)}
                className={`px-3 py-1.5 rounded-xl font-extrabold text-xs transition-all cursor-pointer ${
                  selectedTypeFilter === filter 
                    ? 'bg-indigo-600 text-white shadow-2xs' 
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Category Selector & Collapse Controls */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-t border-slate-100 pt-3 text-xs">
          <div className="flex items-center space-x-2">
            <Filter className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-slate-500 font-bold">Category:</span>
            <select
              value={selectedCategoryFilter}
              onChange={(e) => setSelectedCategoryFilter(e.target.value)}
              className="bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-1 text-xs font-bold text-slate-800 focus:outline-none cursor-pointer"
            >
              <option value="All">All Categories ({filteredAttributes.length} fields)</option>
              {categories.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>

          <div className="flex items-center space-x-2 text-[11px] font-bold text-indigo-600">
            <button onClick={expandAll} className="hover:text-indigo-800 cursor-pointer">Expand All</button>
            <span>•</span>
            <button onClick={collapseAll} className="hover:text-indigo-800 cursor-pointer">Collapse All</button>
          </div>
        </div>
      </div>

      {/* 4. ATTRIBUTE GROUPS (COLLAPSIBLE SECTIONS) (Requirement #4) */}
      <div className="space-y-4">
        {categories.map(cat => {
          const items = groupedAttributes[cat] || [];
          if (items.length === 0 && searchQuery.trim() !== "") return null;

          const isExpanded = expandedCategories[cat];

          return (
            <div key={cat} className="bg-white rounded-2xl border border-slate-200/90 shadow-sm overflow-hidden transition-all">
              
              {/* Category Header Bar */}
              <button
                onClick={() => toggleCategory(cat)}
                className="w-full p-4 bg-slate-50/90 hover:bg-slate-100/90 border-b border-slate-200/80 flex items-center justify-between text-left transition-colors cursor-pointer"
              >
                <div className="flex items-center space-x-2.5">
                  <div className="w-6 h-6 rounded-lg bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold text-xs">
                    {items.length}
                  </div>
                  <h3 className="text-xs font-extrabold text-slate-900 tracking-wider uppercase">
                    {cat}
                  </h3>
                </div>

                <div className="flex items-center space-x-2 text-slate-400">
                  <span className="text-[11px] font-semibold text-slate-500">
                    {items.length} attributes
                  </span>
                  {isExpanded ? <ChevronDown className="w-4 h-4 text-slate-600" /> : <ChevronRight className="w-4 h-4 text-slate-600" />}
                </div>
              </button>

              {/* Accordion Body: Attribute Rows List */}
              {isExpanded && (
                <div className="divide-y divide-slate-100 p-2 space-y-1">
                  {items.length === 0 ? (
                    <div className="p-4 text-center text-slate-400 text-xs italic">
                      No attributes found matching current filters in {cat}.
                    </div>
                  ) : (
                    items.map((attr) => (
                      <div 
                        key={attr.id}
                        className="p-3.5 hover:bg-slate-50/80 rounded-xl transition-all space-y-2 group"
                      >
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
                          
                          {/* Attribute Name & Badges */}
                          <div className="space-y-1 min-w-[240px]">
                            <div className="flex items-center space-x-2">
                              <span className="text-xs font-extrabold text-slate-900">{attr.name}</span>
                              
                              {/* Standard vs Custom Badge (Requirement #6) */}
                              {attr.isCustom ? (
                                <span className="px-2 py-0.2 text-[9px] font-extrabold bg-indigo-600 text-white rounded-full uppercase tracking-wider">
                                  CUSTOM
                                </span>
                              ) : (
                                <span className="px-2 py-0.2 text-[9px] font-extrabold bg-slate-100 text-slate-600 rounded-full uppercase tracking-wider border border-slate-200">
                                  STANDARD
                                </span>
                              )}
                            </div>

                            {/* Source Provenance (Requirement #5 & #11) */}
                            <div className="flex items-center space-x-2 text-[11px] text-slate-500 font-mono">
                              <span>Source: <strong className="text-slate-700 font-semibold">{attr.source}</strong></span>
                              <span>•</span>
                              <span>Updated: {attr.lastUpdated}</span>
                            </div>
                          </div>

                          {/* Value / Missing Value Display (Requirement #12) */}
                          <div className="flex-1 min-w-[180px]">
                            {attr.value ? (
                              <span className="text-xs font-extrabold text-slate-900 bg-slate-100/90 px-3 py-1.5 rounded-lg border border-slate-200/80 inline-block">
                                {String(attr.value)}
                              </span>
                            ) : (
                              <span className="text-xs font-semibold text-slate-400 italic bg-amber-50/80 text-amber-800 px-3 py-1.5 rounded-lg border border-amber-200 inline-flex items-center space-x-1">
                                <span>Not available / missing</span>
                              </span>
                            )}
                          </div>

                          {/* Actions: Edit & Traceability */}
                          <div className="flex items-center space-x-2 shrink-0">
                            
                            {/* Segment Linkage Badge (Requirement #9) */}
                            {attr.usedInSegments && (
                              <button 
                                onClick={() => onViewSegmentDetails && onViewSegmentDetails(attr)}
                                className="px-2.5 py-1 bg-emerald-50 text-emerald-800 hover:bg-emerald-100 border border-emerald-200 rounded-lg text-[10px] font-extrabold flex items-center space-x-1 cursor-pointer"
                              >
                                <Layers className="w-3 h-3 text-emerald-600" />
                                <span>Used in: {attr.usedInSegments}</span>
                              </button>
                            )}

                            {/* AI Derived Evidence Linkage (Requirement #10) */}
                            {attr.aiDerived && (
                              <button 
                                onClick={() => onViewInsightEvidence && onViewInsightEvidence(attr)}
                                className="px-2.5 py-1 bg-indigo-50 text-indigo-800 hover:bg-indigo-100 border border-indigo-200 rounded-lg text-[10px] font-extrabold flex items-center space-x-1 cursor-pointer"
                              >
                                <Brain className="w-3 h-3 text-indigo-600" />
                                <span>ADA {attr.aiDerived.confidence}% Evidence</span>
                              </button>
                            )}

                            {/* Edit Button */}
                            <button
                              onClick={() => onEditAttribute(attr)}
                              className="px-3 py-1.5 bg-white hover:bg-slate-100 text-slate-700 font-bold text-xs rounded-xl border border-slate-300 shadow-2xs flex items-center space-x-1 cursor-pointer"
                            >
                              <Edit3 className="w-3 h-3 text-slate-500" />
                              <span>{attr.value ? "Edit" : "Add value"}</span>
                            </button>

                          </div>

                        </div>
                      </div>
                    ))
                  )}
                </div>
              )}

            </div>
          );
        })}
      </div>

    </div>
  );
}
