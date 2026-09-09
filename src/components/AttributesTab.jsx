import React, { useState } from 'react';
import { 
  Search, 
  Plus, 
  Edit3, 
  Sparkles, 
  Layers, 
  ChevronDown, 
  ChevronRight, 
  Filter, 
  RefreshCw, 
  Database,
  Tag,
  HelpCircle,
  AlertCircle,
  Building2,
  CreditCard,
  Package,
  Megaphone,
  Activity,
  ShieldCheck,
  CheckCircle2
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
  const [selectedTypeFilter, setSelectedTypeFilter] = useState("All"); // All, Standard, Custom, AI-derived, Missing values
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState("All");
  
  // Category Subtitle Previews (as specified in user requirements)
  const categoryPreviews = {
    "COMPANY INFORMATION": "Company · Industry · Size · Country · Primary Contact · Location",
    "COMMERCIAL": "Customer since · LTV · ARR · Owner · Product Tier · Revenue",
    "PRODUCT & USAGE": "myFulfillment · Adoption Rate · Usage · Features · Integrations",
    "MARKETING": "Lead Source · Intent Score · Campaign Engagement · Channels",
    "BEHAVIOURAL": "Web Visits · Resource Downloads · Chat Inquiries · Activity",
    "CONSENT & PRIVACY": "GDPR Consent · DNC Status · Cookie Preferences · Erasure Log"
  };

  // Accordion open/collapse states (default: ALL COLLAPSED as requested)
  const [expandedCategories, setExpandedCategories] = useState({
    "COMPANY INFORMATION": false,
    "COMMERCIAL": false,
    "PRODUCT & USAGE": false,
    "MARKETING": false,
    "BEHAVIOURAL": false,
    "CONSENT & PRIVACY": false
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
    // Check if AI Derived
    const isAIDerived = attr.source === "ADA AI Decision Engine" || Boolean(attr.aiDerived);

    // Type Filter
    if (selectedTypeFilter === "Standard" && (attr.isCustom || isAIDerived)) return false;
    if (selectedTypeFilter === "Custom" && !attr.isCustom) return false;
    if (selectedTypeFilter === "AI-derived" && !isAIDerived) return false;
    if (selectedTypeFilter === "Missing values" && attr.value !== null && attr.syncStatus !== "Missing") return false;

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

  // Count AI-Derived Attributes
  const aiDerivedCount = attributesList.filter(a => a.source === "ADA AI Decision Engine" || Boolean(a.aiDerived)).length;
  const missingCount = attributesList.filter(a => a.value === null || a.syncStatus === "Missing").length;

  // Group filtered attributes by category
  const groupedAttributes = {};
  categories.forEach(cat => {
    groupedAttributes[cat] = filteredAttributes.filter(a => a.category === cat);
  });

  // Auto-expand categories if searching or filtering by specific type
  const isFilteringOrSearching = searchQuery.trim() !== "" || selectedTypeFilter !== "All" || selectedCategoryFilter !== "All";

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      
      {/* 1. ENTERPRISE DATA GOVERNANCE HEADER & METRICS */}
      <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-5 space-y-4">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-slate-100 pb-4">
          <div>
            <div className="flex items-center space-x-2">
              <h1 className="text-xl font-extrabold text-slate-900 tracking-tight">
                Account Attributes
              </h1>
              <span className="px-2.5 py-0.5 text-xs font-extrabold bg-indigo-50 text-indigo-700 rounded-full border border-indigo-200">
                CDP Schema & Governance
              </span>
            </div>
            <p className="text-xs text-slate-500 mt-1 flex items-center space-x-2 font-medium">
              <span>{summary.total} attributes</span>
              <span>•</span>
              <span>{summary.standardCount} standard</span>
              <span>•</span>
              <span>{summary.customCount} custom</span>
              <span>•</span>
              <span>{aiDerivedCount} AI-derived</span>
              <span>•</span>
              <span className="text-emerald-700 font-bold flex items-center space-x-1">
                <RefreshCw className="w-3 h-3 text-emerald-600 inline animate-spin" />
                <span>Synced {summary.lastSynced}</span>
              </span>
            </p>
          </div>

          {/* Top-Right Governance Actions */}
          <div className="flex items-center space-x-2 shrink-0">
            <button 
              onClick={onAddCustomAttribute}
              className="px-3.5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold text-xs rounded-xl shadow-xs flex items-center space-x-1.5 transition-all cursor-pointer"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Add custom attribute</span>
            </button>

            <button 
              onClick={() => onEditAttribute(attributesList[0])}
              className="px-3.5 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs rounded-xl border border-slate-300 flex items-center space-x-1.5 transition-all cursor-pointer"
            >
              <Edit3 className="w-3.5 h-3.5 text-slate-500" />
              <span>Edit schema</span>
            </button>
          </div>
        </div>

        {/* Governance Metrics Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
          <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-3">
            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Total Schema Fields</div>
            <div className="text-lg font-extrabold text-slate-900 mt-0.5">{summary.total} fields</div>
          </div>
          <div className="bg-indigo-50/70 border border-indigo-200/80 rounded-xl p-3">
            <div className="text-[10px] font-bold text-indigo-600 uppercase tracking-wider">Custom Attributes</div>
            <div className="text-lg font-extrabold text-indigo-900 mt-0.5">{summary.customCount} custom</div>
          </div>
          <div className="bg-purple-50/70 border border-purple-200/80 rounded-xl p-3">
            <div className="text-[10px] font-bold text-purple-600 uppercase tracking-wider">AI-Derived Signals</div>
            <div className="text-lg font-extrabold text-purple-900 mt-0.5">{aiDerivedCount} AI-derived</div>
          </div>
          <div className="bg-amber-50/70 border border-amber-200/80 rounded-xl p-3">
            <div className="text-[10px] font-bold text-amber-700 uppercase tracking-wider">Missing Values</div>
            <div className="text-lg font-extrabold text-amber-900 mt-0.5">{missingCount} fields</div>
          </div>
        </div>
      </div>

      {/* 2. ATTRIBUTE SEARCH & TYPE FILTERS */}
      <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-4 space-y-3">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
          
          {/* Search Input */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input 
              type="text"
              placeholder="Search attributes by name, value, or data source (e.g. CRM, Salesforce, ADA)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-indigo-500 font-medium"
            />
          </div>

          {/* Type Filter Pills */}
          <div className="flex items-center space-x-1 overflow-x-auto text-xs shrink-0">
            {[
              { id: "All", label: `All (${attributesList.length})` },
              { id: "Standard", label: `Standard (${summary.standardCount})` },
              { id: "Custom", label: `Custom (${summary.customCount})` },
              { id: "AI-derived", label: `AI-derived (${aiDerivedCount})` },
              { id: "Missing values", label: `Missing (${missingCount})` }
            ].map(filter => (
              <button
                key={filter.id}
                onClick={() => setSelectedTypeFilter(filter.id)}
                className={`px-3 py-1.5 rounded-xl font-extrabold text-xs transition-all cursor-pointer ${
                  selectedTypeFilter === filter.id 
                    ? 'bg-indigo-600 text-white shadow-2xs' 
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                }`}
              >
                {filter.label}
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

          <div className="flex items-center space-x-3 text-[11px] font-bold text-indigo-600">
            <button onClick={expandAll} className="hover:text-indigo-800 cursor-pointer">Expand All</button>
            <span>•</span>
            <button onClick={collapseAll} className="hover:text-indigo-800 cursor-pointer">Collapse All</button>
          </div>
        </div>
      </div>

      {/* 3. CATEGORY ACCORDION GROUPS (COLLAPSED BY DEFAULT AS REQUESTED) */}
      <div className="space-y-4">
        {categories.map(cat => {
          const items = groupedAttributes[cat] || [];
          if (items.length === 0 && searchQuery.trim() !== "") return null;

          const isExpanded = isFilteringOrSearching || Boolean(expandedCategories[cat]);
          const previewTags = categoryPreviews[cat] || "Customer attributes and parameters";

          return (
            <div 
              key={cat} 
              className={`bg-white rounded-2xl border transition-all overflow-hidden shadow-2xs ${
                isExpanded ? 'border-indigo-200 ring-1 ring-indigo-500/10' : 'border-slate-200/90 hover:border-slate-300'
              }`}
            >
              
              {/* Category Header (Summary Card when Collapsed) */}
              <button
                onClick={() => toggleCategory(cat)}
                className="w-full p-4 bg-white hover:bg-slate-50/90 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-left transition-colors cursor-pointer"
              >
                <div className="space-y-1">
                  <div className="flex items-center space-x-2.5">
                    <h3 className="text-xs font-extrabold text-slate-900 tracking-wider uppercase flex items-center space-x-2">
                      <span>{cat}</span>
                    </h3>
                    <span className="px-2 py-0.5 text-xs font-extrabold bg-indigo-50 text-indigo-700 border border-indigo-100 rounded-md">
                      {items.length}
                    </span>
                  </div>
                  {/* Category Preview Tags (User Specified Format) */}
                  <div className="text-xs text-slate-500 font-medium">
                    {previewTags}
                  </div>
                </div>

                <div className="flex items-center space-x-2 text-slate-400 shrink-0">
                  <span className="text-xs font-bold text-slate-500">
                    {items.length} attributes
                  </span>
                  <div className="w-7 h-7 rounded-lg bg-slate-100 flex items-center justify-center text-slate-600">
                    {isExpanded ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
                  </div>
                </div>
              </button>

              {/* Accordion Body: Attribute Rows */}
              {isExpanded && (
                <div className="border-t border-slate-100 divide-y divide-slate-100 p-2 space-y-1 bg-slate-50/40">
                  {items.length === 0 ? (
                    <div className="p-4 text-center text-slate-400 text-xs italic">
                      No attributes found matching current filters in {cat}.
                    </div>
                  ) : (
                    items.map((attr) => {
                      const isAIDerived = attr.source === "ADA AI Decision Engine" || Boolean(attr.aiDerived);

                      return (
                        <div 
                          key={attr.id}
                          className="p-3.5 bg-white border border-slate-200/70 hover:border-slate-300 rounded-xl transition-all space-y-2.5 shadow-2xs"
                        >
                          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
                            
                            {/* Left: Attribute Name & Badges */}
                            <div className="space-y-1.5 min-w-[260px]">
                              <div className="flex items-center space-x-2">
                                <span className="text-xs font-extrabold text-slate-900">{attr.name}</span>
                                
                                {/* AI-derived vs Custom vs Standard Badges */}
                                {isAIDerived ? (
                                  <span className="px-2 py-0.5 text-[10px] font-extrabold bg-purple-100 text-purple-800 border border-purple-200 rounded-md flex items-center space-x-1">
                                    <Sparkles className="w-3 h-3 text-purple-600" />
                                    <span>AI-derived</span>
                                  </span>
                                ) : attr.isCustom ? (
                                  <span className="px-2 py-0.5 text-[10px] font-extrabold bg-indigo-100 text-indigo-800 border border-indigo-200 rounded-md">
                                    CUSTOM
                                  </span>
                                ) : (
                                  <span className="px-2 py-0.5 text-[10px] font-bold bg-slate-100 text-slate-600 rounded-md border border-slate-200">
                                    STANDARD
                                  </span>
                                )}
                              </div>

                              {/* Data Provenance & Source Metadata */}
                              <div className="flex items-center space-x-2 text-[11px] text-slate-500 font-mono">
                                <span>Source: <strong className="text-slate-800 font-semibold">{attr.source}</strong></span>
                                <span>•</span>
                                <span>Updated: {attr.lastUpdated}</span>
                              </div>
                            </div>

                            {/* Middle: Attribute Value Display */}
                            <div className="flex-1 min-w-[180px]">
                              {attr.value ? (
                                <span className="text-xs font-extrabold text-slate-900 bg-slate-100 px-3 py-1.5 rounded-lg border border-slate-200 inline-block font-mono">
                                  {String(attr.value)}
                                </span>
                              ) : (
                                <span className="text-xs font-semibold text-amber-800 bg-amber-50 px-3 py-1.5 rounded-lg border border-amber-200 inline-flex items-center space-x-1">
                                  <AlertCircle className="w-3 h-3 text-amber-600" />
                                  <span>Not available / missing</span>
                                </span>
                              )}
                            </div>

                            {/* Right Actions: Segment Links & Edit Button */}
                            <div className="flex items-center space-x-2 shrink-0">
                              
                              {/* Used in Segments Badge */}
                              {attr.usedInSegments && (
                                <button 
                                  onClick={() => onViewSegmentDetails && onViewSegmentDetails(attr)}
                                  className="px-2.5 py-1 bg-emerald-50 text-emerald-800 hover:bg-emerald-100 border border-emerald-200 rounded-lg text-[10px] font-extrabold flex items-center space-x-1 cursor-pointer transition-colors"
                                >
                                  <Layers className="w-3 h-3 text-emerald-600" />
                                  <span>Used in: {attr.usedInSegments}</span>
                                </button>
                              )}

                              {/* Edit Button */}
                              <button
                                onClick={() => onEditAttribute(attr)}
                                className="px-3 py-1.5 bg-white hover:bg-slate-50 text-slate-700 font-bold text-xs rounded-xl border border-slate-300 shadow-2xs flex items-center space-x-1 cursor-pointer"
                              >
                                <Edit3 className="w-3 h-3 text-slate-500" />
                                <span>{attr.value ? "Edit" : "Add value"}</span>
                              </button>

                            </div>

                          </div>

                          {/* AI Derived Intelligence Provenance Box */}
                          {isAIDerived && (
                            <div className="bg-purple-50/70 border border-purple-200/80 rounded-lg p-2.5 text-xs text-purple-900 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                              <div className="flex items-center space-x-2">
                                <Sparkles className="w-3.5 h-3.5 text-purple-600 shrink-0" />
                                <span>
                                  <strong>AI Decision Provenance:</strong> Derived by ADA AI Decision Engine based on behavioral telemetry signals.
                                </span>
                              </div>
                              {attr.aiDerived && (
                                <button 
                                  onClick={() => onViewInsightEvidence && onViewInsightEvidence(attr)}
                                  className="text-[11px] font-extrabold text-purple-700 hover:text-purple-900 underline shrink-0 cursor-pointer"
                                >
                                  View {attr.aiDerived.confidence}% confidence signals →
                                </button>
                              )}
                            </div>
                          )}

                        </div>
                      );
                    })
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
