import React, { useState, useRef, useEffect } from 'react';
import { 
  Layers, 
  Plus, 
  Users, 
  Download, 
  Bot, 
  Megaphone, 
  CheckCircle2, 
  Sparkles, 
  Sliders,
  Share2,
  Globe,
  Database,
  Building2,
  TrendingUp,
  Check,
  Trash2,
  Edit3,
  ChevronDown,
  AlertCircle,
  X,
  Activity,
  Calendar,
  Filter
} from 'lucide-react';

export default function SegmentsView({ customer, onShowToast }) {
  const [segmentName, setSegmentName] = useState("High Intent — myPricing Prospects");
  const [isAddMenuOpen, setIsAddMenuOpen] = useState(false);
  const [editingRuleId, setEditingRuleId] = useState(null);
  const [validationError, setValidationError] = useState(null);
  const addMenuRef = useRef(null);

  // Initial Rules Array matching the assignment baseline
  const [rules, setRules] = useState([
    {
      id: "rule-1",
      conjunction: "WHERE",
      type: "attribute",
      category: "Standard Account Attribute",
      field: "Company Size",
      operator: "equals",
      value: "50–200 employees",
      isAi: false
    },
    {
      id: "rule-2",
      conjunction: "AND",
      type: "attribute",
      category: "AI-Derived Attribute",
      field: "myPricing Interest",
      operator: "equals",
      value: "High Intent",
      isAi: true
    },
    {
      id: "rule-3",
      conjunction: "AND",
      type: "event",
      category: "Real-Time Event Ingestion",
      event: "Viewed myPricing Page",
      operator: "at_least",
      value: "3",
      timeWindow: "last 7 days",
      isAi: false
    }
  ]);

  // Available Attribute Options
  const attributeOptions = [
    { label: "Company Size", category: "Standard Account Attribute", type: "select", options: ["1-10", "11-50", "50–200 employees", "201-500", "500+"] },
    { label: "Country", category: "Standard Account Attribute", type: "select", options: ["France", "Germany", "United Kingdom", "Spain", "Sweden", "Netherlands", "United States"] },
    { label: "Industry", category: "Standard Account Attribute", type: "select", options: ["Consumer Electronics", "E-commerce", "Logistics", "Telecommunications", "Retail", "Software"] },
    { label: "Account Type", category: "Standard Account Attribute", type: "select", options: ["Enterprise", "Mid-Market", "SMB", "Strategic Account"] },
    { label: "myPricing Interest", category: "AI-Derived Attribute", isAi: true, type: "select", options: ["High Intent", "Medium Intent", "Low Intent"] },
    { label: "Product Adoption Rate", category: "Usage Attribute", type: "number", defaultOp: "greater_than_or_equal" },
    { label: "Marketing Intent Score", category: "AI-Derived Attribute", isAi: true, type: "number", defaultOp: "greater_than_or_equal" },
    { label: "Current Product", category: "Commercial Attribute", type: "select", options: ["myPricing", "myOrders", "Catalog Engine", "Omnichannel Hub"] },
    { label: "Account Owner", category: "Standard Account Attribute", type: "select", options: ["Antoine Laurent", "Sarah Jenkins", "Marc Moreau", "Elena Rostova"] },
    { label: "Lead Source", category: "Marketing Attribute", type: "select", options: ["Inbound Web", "Outbound Sales", "Partner Referral", "Trade Event"] }
  ];

  // Available Event Options
  const eventOptions = [
    { label: "Viewed myPricing Page", category: "Real-Time Event Ingestion" },
    { label: "Viewed product page", category: "Real-Time Event Ingestion" },
    { label: "Opened email", category: "Marketing Event" },
    { label: "Clicked campaign", category: "Marketing Event" },
    { label: "Downloaded content", category: "Content Event" },
    { label: "Attended webinar", category: "Event Telemetry" },
    { label: "Started conversation", category: "Conversational AI" },
    { label: "Used product", category: "Usage Telemetry" },
    { label: "Compared competitor features", category: "Intent Trigger" }
  ];

  // Operator Options
  const attributeOperators = [
    { value: "equals", label: "is (=)" },
    { value: "not_equals", label: "is not (≠)" },
    { value: "contains", label: "contains" },
    { value: "does_not_contain", label: "does not contain" },
    { value: "starts_with", label: "starts with" },
    { value: "is_empty", label: "is empty" },
    { value: "is_not_empty", label: "is not empty" },
    { value: "greater_than_or_equal", label: "greater than or equal (≥)" },
    { value: "less_than_or_equal", label: "less than or equal (≤)" }
  ];

  const eventOperators = [
    { value: "at_least", label: "at least (≥)" },
    { value: "at_most", label: "at most (≤)" },
    { value: "happened", label: "happened" },
    { value: "did_not_happen", label: "did not happen" },
    { value: "exactly", label: "exactly (=)" }
  ];

  const timeWindows = [
    { value: "today", label: "today" },
    { value: "last 24 hours", label: "last 24 hours" },
    { value: "last 7 days", label: "last 7 days" },
    { value: "last 30 days", label: "last 30 days" },
    { value: "last 90 days", label: "last 90 days" },
    { value: "custom", label: "custom timeframe" }
  ];

  // Close popover menu on click outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (addMenuRef.current && !addMenuRef.current.contains(event.target)) {
        setIsAddMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Handler: Add new condition rule
  const handleAddRule = (type) => {
    setIsAddMenuOpen(false);
    setValidationError(null);

    const newRuleId = `rule-${Date.now()}`;
    const isFirst = rules.length === 0;

    let newRule;
    if (type === "attribute") {
      const defaultAttr = attributeOptions[0];
      newRule = {
        id: newRuleId,
        conjunction: isFirst ? "WHERE" : "AND",
        type: "attribute",
        category: defaultAttr.category,
        field: defaultAttr.label,
        operator: "equals",
        value: defaultAttr.options ? defaultAttr.options[2] || defaultAttr.options[0] : "Consumer Electronics",
        isAi: Boolean(defaultAttr.isAi)
      };
    } else {
      const defaultEvt = eventOptions[0];
      newRule = {
        id: newRuleId,
        conjunction: isFirst ? "WHERE" : "AND",
        type: "event",
        category: defaultEvt.category,
        event: defaultEvt.label,
        operator: "at_least",
        value: "3",
        timeWindow: "last 7 days",
        isAi: false
      };
    }

    setRules(prev => [...prev, newRule]);
    setEditingRuleId(newRuleId);
    if (onShowToast) onShowToast(`Added new ${type} condition. Please configure rule details.`);
  };

  // Handler: Delete rule
  const handleRemoveRule = (id) => {
    setValidationError(null);
    setRules(prev => {
      const updated = prev.filter(r => r.id !== id);
      // Ensure first rule always starts with WHERE
      if (updated.length > 0) {
        updated[0].conjunction = "WHERE";
      }
      return updated;
    });
    if (editingRuleId === id) setEditingRuleId(null);
    if (onShowToast) onShowToast("Condition removed from segment rule matrix.");
  };

  // Handler: Update rule field
  const handleUpdateRule = (id, fieldName, fieldValue) => {
    setValidationError(null);
    setRules(prev => prev.map(rule => {
      if (rule.id !== id) return rule;

      const updated = { ...rule, [fieldName]: fieldValue };

      // Auto-update category & metadata when changing attribute field
      if (fieldName === "field" && rule.type === "attribute") {
        const found = attributeOptions.find(a => a.label === fieldValue);
        if (found) {
          updated.category = found.category;
          updated.isAi = Boolean(found.isAi);
          if (found.options && !found.options.includes(updated.value)) {
            updated.value = found.options[0];
          }
        }
      }

      // Auto-update category when changing event field
      if (fieldName === "event" && rule.type === "event") {
        const foundEvt = eventOptions.find(e => e.label === fieldValue);
        if (foundEvt) {
          updated.category = foundEvt.category;
        }
      }

      return updated;
    }));
  };

  // Validate all rules before saving
  const validateRules = () => {
    if (rules.length === 0) {
      setValidationError("Segment must contain at least 1 targeting condition.");
      return false;
    }

    for (let i = 0; i < rules.length; i++) {
      const r = rules[i];
      if (r.type === "attribute") {
        if (!r.field || !r.operator) {
          setValidationError(`Condition #${i + 1} (${r.field || 'Attribute'}) is incomplete.`);
          return false;
        }
        if (!["is_empty", "is_not_empty"].includes(r.operator) && (!r.value || r.value.toString().trim() === "")) {
          setValidationError(`Condition #${i + 1} (${r.field}) requires a value.`);
          return false;
        }
      } else if (r.type === "event") {
        if (!r.event || !r.operator) {
          setValidationError(`Condition #${i + 1} (Behavior Event) is incomplete.`);
          return false;
        }
        if (!["happened", "did_not_happen"].includes(r.operator) && (!r.value || r.value.toString().trim() === "")) {
          setValidationError(`Condition #${i + 1} (${r.event}) requires a numeric count.`);
          return false;
        }
        if (!r.timeWindow) {
          setValidationError(`Condition #${i + 1} (${r.event}) requires a time window selection.`);
          return false;
        }
      }
    }

    setValidationError(null);
    return true;
  };

  // Save Segment handler
  const handleSaveSegment = () => {
    if (!validateRules()) {
      return;
    }
    setEditingRuleId(null);
    if (onShowToast) {
      onShowToast(`Segment saved successfully. ${calculateAudienceCount().toLocaleString()} accounts matching.`);
    }
  };

  // Dynamic Calculation Logic for Audience & TechGear Europe Match
  const calculateAudienceCount = () => {
    let count = 8420;
    
    // Baseline reduction per rule
    rules.forEach(rule => {
      if (rule.type === "attribute") {
        if (rule.field === "Company Size") count = Math.round(count * 0.38);
        else if (rule.field === "myPricing Interest") count = Math.round(count * 0.45);
        else if (rule.field === "Country") count = Math.round(count * 0.28);
        else if (rule.field === "Industry") count = Math.round(count * 0.32);
        else count = Math.round(count * 0.65);
      } else {
        if (rule.event === "Viewed myPricing Page") count = Math.round(count * 0.52);
        else count = Math.round(count * 0.40);
      }
    });

    if (rules.length === 0) count = 8420;
    return Math.max(12, count);
  };

  // Dynamic Check for TechGear Europe Profile Match
  const checkTechGearMatch = () => {
    if (rules.length === 0) return true;

    // TechGear Europe Profile:
    // Company Size: 50–200 employees
    // myPricing Interest: High Intent
    // Country: France
    // Industry: Consumer Electronics / Retail
    // Viewed myPricing Page: 4 times in last 7 days

    for (let r of rules) {
      if (r.type === "attribute") {
        if (r.field === "Company Size" && r.value !== "50–200 employees" && r.operator === "equals") return false;
        if (r.field === "myPricing Interest" && r.value !== "High Intent" && r.operator === "equals") return false;
        if (r.field === "Country" && r.value !== "France" && r.operator === "equals") return false;
        if (r.field === "Industry" && !["Consumer Electronics", "Retail"].includes(r.value) && r.operator === "equals") return false;
      } else if (r.type === "event") {
        if (r.event === "Viewed myPricing Page" && r.operator === "at_least" && parseInt(r.value) > 4) return false;
      }
    }
    return true;
  };

  const matchedCount = calculateAudienceCount();
  const isTechGearMatched = checkTechGearMatch();
  const matchPercentage = ((matchedCount / 8420) * 100).toFixed(1);
  const estimatedRevenue = (matchedCount * 3400).toLocaleString();

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      
      {/* 1. GLOBAL CDP AUDIENCE BUILDER HEADER */}
      <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-5 space-y-3">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-4">
          <div>
            <div className="flex items-center space-x-2">
              <h1 className="text-xl font-extrabold text-slate-900 tracking-tight flex items-center space-x-2">
                <Layers className="w-5 h-5 text-indigo-600" />
                <span>Audience Segmentation Builder</span>
              </h1>
              <span className="px-2.5 py-0.5 text-xs font-extrabold bg-indigo-50 text-indigo-700 rounded-full border border-indigo-200">
                Global CDP Directory
              </span>
            </div>
            <p className="text-xs text-slate-500 mt-1 font-medium">
              Building dynamic targeting rules across <strong>8,420 customer accounts</strong> in platform directory
            </p>
          </div>

          <div className="flex items-center space-x-2 shrink-0">
            <button 
              onClick={handleSaveSegment}
              className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold text-xs rounded-xl shadow-xs flex items-center space-x-1.5 cursor-pointer transition-all active:scale-95"
            >
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Save Segment</span>
            </button>
          </div>
        </div>

        {/* Validation Warning Alert */}
        {validationError && (
          <div className="bg-amber-50 border border-amber-300 text-amber-900 px-4 py-2.5 rounded-xl text-xs flex items-center justify-between animate-in fade-in duration-150">
            <div className="flex items-center space-x-2">
              <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
              <span className="font-bold">{validationError}</span>
            </div>
            <button onClick={() => setValidationError(null)} className="text-amber-700 hover:text-amber-950 font-bold text-xs">
              Dismiss
            </button>
          </div>
        )}

        {/* Segment Metadata Strip */}
        <div className="flex items-center justify-between text-xs pt-1">
          <div className="flex items-center space-x-3 text-slate-600 font-medium">
            <span>Segment Rule: <strong className="text-slate-900 font-extrabold">#SEG-9912</strong></span>
            <span>•</span>
            <span>Last calculated: <strong className="text-slate-900 font-semibold">Just now</strong></span>
            <span>•</span>
            <span className="text-emerald-700 font-bold flex items-center space-x-1">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Real-Time Sync Active</span>
            </span>
          </div>
          <span className="text-indigo-600 font-bold cursor-pointer hover:underline text-[11px]">
            View Rule Revision History →
          </span>
        </div>
      </div>

      {/* 2. BOOLEAN RULE MATRIX & INTERACTIVE ADD CONDITION BUILDER */}
      <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-5 space-y-4">
        
        <div className="flex items-center justify-between border-b border-slate-100 pb-3 relative">
          <h2 className="text-xs font-extrabold text-slate-900 uppercase tracking-wider flex items-center space-x-2">
            <Sliders className="w-4 h-4 text-indigo-600" />
            <span>Targeting Criteria & Boolean Rule Logic ({rules.length} conditions)</span>
          </h2>

          {/* + ADD RULE CONDITION DROPDOWN MENU */}
          <div className="relative" ref={addMenuRef}>
            <button 
              onClick={() => setIsAddMenuOpen(!isAddMenuOpen)}
              className="text-xs font-bold bg-indigo-50 hover:bg-indigo-100 text-indigo-700 px-3 py-1.5 rounded-lg border border-indigo-200 flex items-center space-x-1.5 cursor-pointer transition-all shadow-2xs"
            >
              <Plus className="w-3.5 h-3.5 text-indigo-600" />
              <span>+ Add Rule Condition</span>
              <ChevronDown className={`w-3 h-3 transition-transform ${isAddMenuOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* SENIOR CDP UX: Add Condition Type Picker Menu */}
            {isAddMenuOpen && (
              <div className="absolute right-0 mt-1.5 w-60 bg-white border border-slate-200 rounded-xl shadow-xl z-30 py-1 text-xs animate-in fade-in duration-150">
                <div className="px-3 py-1.5 text-[10px] font-extrabold text-slate-400 uppercase tracking-wider border-b border-slate-100">
                  Select Condition Type
                </div>
                
                <button
                  onClick={() => handleAddRule("attribute")}
                  className="w-full px-3 py-2.5 text-left flex items-start space-x-2.5 hover:bg-indigo-50/80 transition-colors group cursor-pointer"
                >
                  <div className="w-6 h-6 rounded-md bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold shrink-0 mt-0.5">
                    <Sliders className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <div className="font-extrabold text-slate-900 group-hover:text-indigo-600">Add Attribute Condition</div>
                    <div className="text-[10px] text-slate-500 font-normal">Filter by company size, industry, location, intent score</div>
                  </div>
                </button>

                <button
                  onClick={() => handleAddRule("event")}
                  className="w-full px-3 py-2.5 text-left flex items-start space-x-2.5 hover:bg-purple-50/80 transition-colors group cursor-pointer border-t border-slate-100"
                >
                  <div className="w-6 h-6 rounded-md bg-purple-100 text-purple-700 flex items-center justify-center font-bold shrink-0 mt-0.5">
                    <Activity className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <div className="font-extrabold text-slate-900 group-hover:text-purple-600">Add Behavior / Event</div>
                    <div className="text-[10px] text-slate-500 font-normal">Filter by page visits, email opens, product usage</div>
                  </div>
                </button>
              </div>
            )}
          </div>
        </div>

        {/* RULE MATRIX CONTAINER */}
        <div className="space-y-3 bg-slate-50/80 p-4 rounded-xl border border-slate-200/80 text-xs">
          
          {rules.length === 0 ? (
            <div className="p-8 text-center bg-white rounded-xl border border-dashed border-slate-300 space-y-2">
              <Sliders className="w-6 h-6 text-slate-400 mx-auto" />
              <div className="font-bold text-slate-700">No targeting conditions defined</div>
              <div className="text-xs text-slate-500">Click <strong>+ Add Rule Condition</strong> above to build your segment.</div>
            </div>
          ) : (
            rules.map((rule, index) => {
              const isEditing = editingRuleId === rule.id;

              return (
                <React.Fragment key={rule.id}>
                  
                  {/* CONJUNCTION PICKER (AND / OR) between rules */}
                  {index > 0 && (
                    <div className="flex items-center space-x-2 pl-4 py-0.5">
                      <select 
                        value={rule.conjunction}
                        onChange={(e) => handleUpdateRule(rule.id, "conjunction", e.target.value)}
                        className="px-2.5 py-0.5 bg-indigo-600 text-white text-[10px] font-extrabold rounded-md shadow-2xs focus:outline-none cursor-pointer border border-indigo-700"
                      >
                        <option value="AND">AND</option>
                        <option value="OR">OR</option>
                      </select>
                      <span className="text-[10px] text-slate-400 font-medium italic">
                        {rule.conjunction === "AND" ? "Matches both conditions" : "Matches either condition"}
                      </span>
                    </div>
                  )}

                  {/* CONDITION CARD ROW */}
                  <div className={`transition-all rounded-xl border p-3.5 bg-white shadow-2xs ${
                    isEditing ? 'border-indigo-500 ring-2 ring-indigo-500/20' : 'border-slate-200 hover:border-slate-300'
                  }`}>
                    
                    {!isEditing ? (
                      /* VIEW MODE RULE ROW */
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className={`px-2 py-0.5 text-white text-[10px] font-extrabold rounded ${
                            rule.type === "event" ? 'bg-purple-700' : 'bg-slate-900'
                          }`}>
                            {index === 0 ? "WHERE" : rule.conjunction}
                          </span>

                          <span className="font-bold text-slate-700">
                            {rule.type === "attribute" ? rule.field : rule.event}
                          </span>

                          <span className="text-slate-400 font-bold font-mono">
                            {attributeOperators.find(o => o.value === rule.operator)?.label || eventOperators.find(o => o.value === rule.operator)?.label || rule.operator}
                          </span>

                          <span className={`px-2.5 py-1 font-extrabold text-slate-900 rounded-lg border font-mono ${
                            rule.isAi 
                              ? 'bg-emerald-100 text-emerald-800 border-emerald-300' 
                              : rule.type === "event" 
                                ? 'bg-purple-50 text-purple-900 border-purple-200' 
                                : 'bg-slate-100 border-slate-200'
                          }`}>
                            {rule.value} {rule.type === "event" && `times in ${rule.timeWindow}`}
                          </span>
                        </div>

                        <div className="flex items-center space-x-3 shrink-0">
                          {rule.isAi ? (
                            <span className="text-[11px] text-purple-700 font-bold flex items-center space-x-1">
                              <Sparkles className="w-3 h-3 text-purple-600" />
                              <span>AI-Derived</span>
                            </span>
                          ) : (
                            <span className="text-[11px] text-slate-400 font-medium">
                              {rule.category}
                            </span>
                          )}

                          <button 
                            onClick={() => setEditingRuleId(rule.id)}
                            className="p-1 text-slate-400 hover:text-indigo-600 rounded transition-colors cursor-pointer"
                            title="Edit condition"
                          >
                            <Edit3 className="w-3.5 h-3.5" />
                          </button>

                          <button 
                            onClick={() => handleRemoveRule(rule.id)}
                            className="p-1 text-slate-400 hover:text-red-600 rounded transition-colors cursor-pointer"
                            title="Delete condition"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    ) : (
                      /* EDIT MODE RULE BUILDER ROW */
                      <div className="space-y-3">
                        <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                          <span className="text-[10px] font-extrabold text-indigo-700 uppercase tracking-wider flex items-center space-x-1">
                            <span>Editing Rule Condition #{index + 1}</span>
                          </span>

                          <div className="flex items-center space-x-2">
                            <button 
                              onClick={() => setEditingRuleId(null)}
                              className="px-2.5 py-1 bg-indigo-600 text-white font-bold text-[11px] rounded-md shadow-2xs hover:bg-indigo-700 cursor-pointer"
                            >
                              Done Editing
                            </button>
                          </div>
                        </div>

                        {/* EDIT FORM CONTROLS */}
                        <div className="grid grid-cols-1 sm:grid-cols-12 gap-2.5 items-center">
                          
                          {/* Type Select */}
                          <div className="sm:col-span-3">
                            <label className="text-[9px] font-bold text-slate-400 uppercase">Condition Type</label>
                            <select 
                              value={rule.type}
                              onChange={(e) => {
                                const newType = e.target.value;
                                if (newType === "attribute") {
                                  handleUpdateRule(rule.id, "type", "attribute");
                                  handleUpdateRule(rule.id, "field", "Company Size");
                                  handleUpdateRule(rule.id, "operator", "equals");
                                  handleUpdateRule(rule.id, "value", "50–200 employees");
                                } else {
                                  handleUpdateRule(rule.id, "type", "event");
                                  handleUpdateRule(rule.id, "event", "Viewed myPricing Page");
                                  handleUpdateRule(rule.id, "operator", "at_least");
                                  handleUpdateRule(rule.id, "value", "3");
                                  handleUpdateRule(rule.id, "timeWindow", "last 7 days");
                                }
                              }}
                              className="w-full px-2.5 py-1.5 bg-slate-50 border border-slate-300 rounded-lg text-xs font-bold text-slate-900 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                            >
                              <option value="attribute">Attribute</option>
                              <option value="event">Behavior / Event</option>
                            </select>
                          </div>

                          {/* Field / Event Select */}
                          <div className="sm:col-span-4">
                            <label className="text-[9px] font-bold text-slate-400 uppercase">
                              {rule.type === "attribute" ? "Attribute Field" : "Event Trigger"}
                            </label>
                            {rule.type === "attribute" ? (
                              <select 
                                value={rule.field}
                                onChange={(e) => handleUpdateRule(rule.id, "field", e.target.value)}
                                className="w-full px-2.5 py-1.5 bg-slate-50 border border-slate-300 rounded-lg text-xs font-bold text-slate-900 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                              >
                                {attributeOptions.map((opt, i) => (
                                  <option key={i} value={opt.label}>{opt.label} ({opt.category})</option>
                                ))}
                              </select>
                            ) : (
                              <select 
                                value={rule.event}
                                onChange={(e) => handleUpdateRule(rule.id, "event", e.target.value)}
                                className="w-full px-2.5 py-1.5 bg-slate-50 border border-slate-300 rounded-lg text-xs font-bold text-slate-900 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                              >
                                {eventOptions.map((opt, i) => (
                                  <option key={i} value={opt.label}>{opt.label}</option>
                                ))}
                              </select>
                            )}
                          </div>

                          {/* Operator Select */}
                          <div className="sm:col-span-3">
                            <label className="text-[9px] font-bold text-slate-400 uppercase">Operator</label>
                            <select 
                              value={rule.operator}
                              onChange={(e) => handleUpdateRule(rule.id, "operator", e.target.value)}
                              className="w-full px-2.5 py-1.5 bg-slate-50 border border-slate-300 rounded-lg text-xs font-bold text-slate-900 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                            >
                              {(rule.type === "attribute" ? attributeOperators : eventOperators).map((op, i) => (
                                <option key={i} value={op.value}>{op.label}</option>
                              ))}
                            </select>
                          </div>

                          {/* Value Input or Select */}
                          <div className="sm:col-span-2">
                            <label className="text-[9px] font-bold text-slate-400 uppercase">Value</label>
                            {rule.type === "attribute" ? (
                              (() => {
                                const matchedOpt = attributeOptions.find(a => a.label === rule.field);
                                if (matchedOpt && matchedOpt.options) {
                                  return (
                                    <select 
                                      value={rule.value}
                                      onChange={(e) => handleUpdateRule(rule.id, "value", e.target.value)}
                                      className="w-full px-2.5 py-1.5 bg-slate-50 border border-slate-300 rounded-lg text-xs font-bold text-slate-900 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                                    >
                                      {matchedOpt.options.map((val, vi) => (
                                        <option key={vi} value={val}>{val}</option>
                                      ))}
                                    </select>
                                  );
                                }
                                return (
                                  <input 
                                    type="text" 
                                    value={rule.value}
                                    onChange={(e) => handleUpdateRule(rule.id, "value", e.target.value)}
                                    placeholder="Enter value..."
                                    className="w-full px-2.5 py-1.5 bg-slate-50 border border-slate-300 rounded-lg text-xs font-bold text-slate-900 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                                  />
                                );
                              })()
                            ) : (
                              <input 
                                type="number" 
                                value={rule.value}
                                onChange={(e) => handleUpdateRule(rule.id, "value", e.target.value)}
                                placeholder="Times"
                                className="w-full px-2.5 py-1.5 bg-slate-50 border border-slate-300 rounded-lg text-xs font-bold text-slate-900 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                              />
                            )}
                          </div>

                        </div>

                        {/* TIME WINDOW (If Event) */}
                        {rule.type === "event" && (
                          <div className="pt-2 border-t border-slate-100 flex items-center space-x-3">
                            <span className="text-[10px] font-extrabold text-slate-500 uppercase flex items-center space-x-1">
                              <Calendar className="w-3 h-3 text-purple-600" />
                              <span>Time Window:</span>
                            </span>
                            <select 
                              value={rule.timeWindow}
                              onChange={(e) => handleUpdateRule(rule.id, "timeWindow", e.target.value)}
                              className="px-2.5 py-1 bg-slate-50 border border-slate-300 rounded-lg text-xs font-bold text-slate-900 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                            >
                              {timeWindows.map((tw, ti) => (
                                <option key={ti} value={tw.value}>{tw.label}</option>
                              ))}
                            </select>
                          </div>
                        )}

                      </div>
                    )}

                  </div>
                </React.Fragment>
              );
            })
          )}

        </div>
      </div>

      {/* 3. DYNAMIC GLOBAL POPULATION MATCH & ACTIVATION BAR */}
      <div className="bg-slate-900 text-white rounded-2xl p-6 shadow-xl border border-slate-800 space-y-5">
        
        {/* Population Counter Header */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-slate-800 pb-4">
          <div className="space-y-1">
            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
              TOTAL MATCHED POPULATION (DYNAMIC ESTIMATE)
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl font-black text-white tracking-tight">
                  {matchedCount.toLocaleString()} Matching Accounts
                </h2>
                <div className="text-xs text-slate-400 flex items-center space-x-2 mt-0.5">
                  <span>{matchPercentage}% of total CDP directory</span>
                  <span>•</span>
                  <span>€{estimatedRevenue} segment opportunity</span>
                </div>
              </div>
            </div>
          </div>

          {/* Account Membership Confirmation Badge (TechGear Europe match preview) */}
          <div className={`border rounded-xl p-3 flex items-center space-x-3 shrink-0 transition-all ${
            isTechGearMatched 
              ? 'bg-slate-800/90 border-slate-700/80' 
              : 'bg-amber-950/40 border-amber-800/60 text-amber-200'
          }`}>
            <div className={`w-7 h-7 rounded-full flex items-center justify-center font-bold text-xs shrink-0 ${
              isTechGearMatched ? 'bg-emerald-500/20 text-emerald-400' : 'bg-amber-500/20 text-amber-400'
            }`}>
              {isTechGearMatched ? '✓' : '○'}
            </div>
            <div className="text-xs">
              <div className="text-slate-400 text-[10px] font-bold uppercase tracking-wider">MATCH PREVIEW</div>
              <div className="font-extrabold text-white">
                TechGear Europe <span className="text-slate-400 font-mono font-normal">(ACC-89420-EU)</span> {isTechGearMatched ? 'matches this segment' : 'does not match segment'}
              </div>
            </div>
          </div>
        </div>

        {/* Activation Actions Strip */}
        <div className="space-y-2">
          <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
            CAMPAIGN ACTIVATION DESTINATIONS
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <button 
              onClick={() => onShowToast && onShowToast(`Launched Omnichannel Cross-Sell Campaign for ${matchedCount.toLocaleString()} matching accounts!`)}
              className="px-4 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white font-extrabold text-xs rounded-xl shadow-md flex items-center space-x-2 cursor-pointer transition-all active:scale-95"
            >
              <Megaphone className="w-4 h-4 text-indigo-200" />
              <span>Activate Campaign ({matchedCount.toLocaleString()} Accounts)</span>
            </button>

            <button 
              onClick={() => onShowToast && onShowToast(`Enrolled ${matchedCount.toLocaleString()} accounts into ADA AI Outreach Bot Assistant!`)}
              className="px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-indigo-300 font-bold text-xs rounded-xl border border-slate-700 flex items-center space-x-2 cursor-pointer transition-all"
            >
              <Bot className="w-4 h-4 text-indigo-400" />
              <span>Send to Bot</span>
            </button>

            <button 
              onClick={() => onShowToast && onShowToast(`Exported ${matchedCount.toLocaleString()} accounts CSV file!`)}
              className="px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs rounded-xl border border-slate-700 flex items-center space-x-2 cursor-pointer transition-all"
            >
              <Download className="w-4 h-4 text-slate-400" />
              <span>Export CSV</span>
            </button>

            <button 
              onClick={() => onShowToast && onShowToast(`Synced ${matchedCount.toLocaleString()} accounts to Salesforce & Meta Audiences!`)}
              className="px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-xs rounded-xl border border-slate-700 flex items-center space-x-2 cursor-pointer transition-all"
            >
              <Share2 className="w-4 h-4 text-slate-400" />
              <span>Sync Destination APIs</span>
            </button>
          </div>
        </div>

        {/* 4. AUDIENCE PREVIEW TABLE SAMPLE */}
        <div className="space-y-2 pt-2">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
              Sample Preview of {matchedCount.toLocaleString()} Matched Accounts
            </span>
            <span className="text-[11px] text-slate-400 font-mono">Showing 5 of {matchedCount.toLocaleString()}</span>
          </div>

          <div className="bg-slate-800/80 rounded-xl overflow-hidden border border-slate-700/80">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="bg-slate-950 border-b border-slate-700 text-[10px] text-slate-400 uppercase font-bold">
                  <th className="py-2.5 px-3">Account Name</th>
                  <th className="py-2.5 px-3">Location</th>
                  <th className="py-2.5 px-3">Company Size</th>
                  <th className="py-2.5 px-3">Pricing Visits</th>
                  <th className="py-2.5 px-3">Match Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-700/60 font-medium text-slate-200">
                <tr className={isTechGearMatched ? "bg-indigo-950/40" : "bg-slate-900/60 opacity-70"}>
                  <td className="py-2.5 px-3 font-bold text-white flex items-center space-x-2">
                    <span>TechGear Europe</span>
                    <span className="px-1.5 py-0.5 bg-indigo-500 text-white text-[9px] rounded font-bold">PREVIEW ACCOUNT</span>
                  </td>
                  <td className="py-2.5 px-3">Paris, France</td>
                  <td className="py-2.5 px-3 font-mono">50–200 employees</td>
                  <td className="py-2.5 px-3 font-bold text-emerald-400">4 visits / 7d</td>
                  <td className="py-2.5 px-3 font-bold">
                    {isTechGearMatched ? (
                      <span className="text-emerald-400 flex items-center space-x-1">
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Matched (91% Intent)</span>
                      </span>
                    ) : (
                      <span className="text-amber-400 flex items-center space-x-1 font-normal">
                        <span>○ Excluded by rules</span>
                      </span>
                    )}
                  </td>
                </tr>
                <tr>
                  <td className="py-2.5 px-3 font-bold text-white">ElectroNordic AB</td>
                  <td className="py-2.5 px-3">Stockholm, Sweden</td>
                  <td className="py-2.5 px-3 font-mono">50–200 employees</td>
                  <td className="py-2.5 px-3 font-bold text-emerald-400">5 visits / 7d</td>
                  <td className="py-2.5 px-3 font-bold text-emerald-400 flex items-center space-x-1">
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Matched (94% Intent)</span>
                  </td>
                </tr>
                <tr>
                  <td className="py-2.5 px-3 font-bold text-white">Apex Logistics Retail</td>
                  <td className="py-2.5 px-3">Frankfurt, Germany</td>
                  <td className="py-2.5 px-3 font-mono">100–200 employees</td>
                  <td className="py-2.5 px-3 font-bold text-emerald-400">6 visits / 7d</td>
                  <td className="py-2.5 px-3 font-bold text-emerald-400 flex items-center space-x-1">
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Matched (96% Intent)</span>
                  </td>
                </tr>
                <tr>
                  <td className="py-2.5 px-3 font-bold text-white">Fnac Digital Commerce</td>
                  <td className="py-2.5 px-3">Lyon, France</td>
                  <td className="py-2.5 px-3 font-mono">50–200 employees</td>
                  <td className="py-2.5 px-3 font-bold text-emerald-400">3 visits / 7d</td>
                  <td className="py-2.5 px-3 font-bold text-emerald-400 flex items-center space-x-1">
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Matched (88% Intent)</span>
                  </td>
                </tr>
                <tr>
                  <td className="py-2.5 px-3 font-bold text-white">Iberia Tech Retail</td>
                  <td className="py-2.5 px-3">Madrid, Spain</td>
                  <td className="py-2.5 px-3 font-mono">80–200 employees</td>
                  <td className="py-2.5 px-3 font-bold text-emerald-400">4 visits / 7d</td>
                  <td className="py-2.5 px-3 font-bold text-emerald-400 flex items-center space-x-1">
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Matched (90% Intent)</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>

    </div>
  );
}
