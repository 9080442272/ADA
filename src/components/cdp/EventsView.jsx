import React, { useState } from 'react';
import { 
  Activity, 
  Search, 
  Filter, 
  RefreshCw, 
  ArrowUpRight, 
  Globe, 
  Zap, 
  ShieldCheck, 
  Building2, 
  Eye, 
  Layers, 
  Play, 
  Pause,
  Download,
  Sparkles,
  ChevronRight,
  X,
  Sliders,
  CheckCircle2,
  Cpu,
  ArrowRight,
  Plus,
  Settings,
  Database,
  Code,
  CheckCircle,
  FileText,
  UserCheck,
  Megaphone,
  Share2,
  ExternalLink,
  BookOpen,
  Video,
  Calculator,
  ShoppingBag,
  Mail,
  ListFilter,
  Trash2,
  Check
} from 'lucide-react';

export default function EventsView({ 
  customer, 
  onShowToast, 
  onNavigateToAccountInteractions, 
  onNavigateToSegments,
  onNavigateToRecommendation,
  onNavigateToDataSources
}) {
  // Navigation Sub-Tabs: "stream" | "definitions" | "sources"
  const [activeTab, setActiveTab] = useState("stream");

  // Event Stream Filters & State
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const [isLiveStreaming, setIsLiveStreaming] = useState(true);
  const [selectedEventForDrawer, setSelectedEventForDrawer] = useState(null);
  const [selectedSourceForDrawer, setSelectedSourceForDrawer] = useState(null);

  // 1. EVENT DEFINITIONS CATALOG STATE (allows dynamic addition via "+ Create Event")
  const [eventDefinitionsList, setEventDefinitionsList] = useState([
    {
      id: "def-1",
      title: "Viewed myPricing Page",
      eventKey: "pricing_page_viewed",
      category: "Web & Product",
      status: "Active",
      schemaValid: true,
      description: "Triggered when an identified account/contact views the myPricing product page.",
      propertiesSchema: [
        { name: "page_url", type: "String", required: true, example: "/products/mypricing" },
        { name: "duration", type: "Number", required: false, example: "184 sec" },
        { name: "source", type: "String", required: false, example: "Google Ads" },
        { name: "campaign_id", type: "String", required: false, example: "Pricing Expansion EU" }
      ],
      identityMapping: "Contact → Account",
      trackingSources: ["Google Tag Manager", "Boostmyshop Web SDK"],
      usedBySignals: ["myPricing Interest", "Expansion Potential"],
      usedBySegments: ["High-Intent Accounts", "myPricing Prospects"],
      monthlyVolume: "412,000 / mo"
    },
    {
      id: "def-2",
      title: "Downloaded Dynamic Pricing Playbook",
      eventKey: "playbook_downloaded",
      category: "Content & Lead Gen",
      status: "Active",
      schemaValid: true,
      description: "Triggered when a contact submits a form or downloads the B2B pricing whitepaper.",
      propertiesSchema: [
        { name: "asset_id", type: "String", required: true, example: "playbook-pricing-v4.pdf" },
        { name: "form_name", type: "String", required: true, example: "Playbook Download Form" },
        { name: "referrer", type: "String", required: false, example: "LinkedIn Organic" }
      ],
      identityMapping: "Contact → Account",
      trackingSources: ["HubSpot Connector", "Boostmyshop Web SDK"],
      usedBySignals: ["Content Evaluation", "Product Interest"],
      usedBySegments: ["High-Intent Accounts", "Competitor Replacement Target"],
      monthlyVolume: "84,500 / mo"
    },
    {
      id: "def-3",
      title: "Attended Competitive Pricing Webinar",
      eventKey: "webinar_attended",
      category: "Events & Webinars",
      status: "Active",
      schemaValid: true,
      description: "Triggered when a contact attends 15+ minutes of a live product or strategy webinar.",
      propertiesSchema: [
        { name: "webinar_id", type: "String", required: true, example: "WEB-99102" },
        { name: "minutes_attended", type: "Number", required: true, example: "42 min" },
        { name: "questions_asked", type: "Number", required: false, example: "2" }
      ],
      identityMapping: "Contact → Account",
      trackingSources: ["Zoom Connector", "HubSpot Connector"],
      usedBySignals: ["Executive Engagement", "High Pricing Intent"],
      usedBySegments: ["High-Intent Accounts", "Enterprise Retailer"],
      monthlyVolume: "14,200 / mo"
    },
    {
      id: "def-4",
      title: "ROI Calculator Calculation",
      eventKey: "roi_calculated",
      category: "Interactive Tools",
      status: "Active",
      schemaValid: true,
      description: "Triggered when a prospect calculates estimated annual margin savings on the ROI tool.",
      propertiesSchema: [
        { name: "calculated_savings", type: "Number", required: true, example: "14200" },
        { name: "currency", type: "String", required: true, example: "EUR" },
        { name: "sku_count", type: "Number", required: false, example: "12500" }
      ],
      identityMapping: "Contact → Account",
      trackingSources: ["Boostmyshop Web SDK"],
      usedBySignals: ["Commercial Evaluation", "Expansion Readiness"],
      usedBySegments: ["Expansion Candidates", "myPricing Prospects"],
      monthlyVolume: "38,000 / mo"
    },
    {
      id: "def-5",
      title: "Shopify Integration Auth",
      eventKey: "shopify_auth_completed",
      category: "Product & API Integration",
      status: "Active",
      schemaValid: true,
      description: "Triggered when a merchant connects their Shopify store OAuth credentials.",
      propertiesSchema: [
        { name: "shop_domain", type: "String", required: true, example: "apex-de.myshopify.com" },
        { name: "store_count", type: "Number", required: true, example: "14" },
        { name: "auth_status", type: "String", required: true, example: "Success" }
      ],
      identityMapping: "Contact → Account",
      trackingSources: ["Shopify OAuth Connector"],
      usedBySignals: ["Technical Onboarding"],
      usedBySegments: ["E-Commerce Integration Active"],
      monthlyVolume: "9,400 / mo"
    },
    {
      id: "def-6",
      title: "Opened Pricing Strategy Email",
      eventKey: "email_campaign_opened",
      category: "Outbound Marketing",
      status: "Active",
      schemaValid: true,
      description: "Triggered when a contact opens an outbound marketing or strategy email campaign.",
      propertiesSchema: [
        { name: "campaign_title", type: "String", required: true, example: "Q4 Pricing Alert" },
        { name: "subject_line", type: "String", required: false, example: "Boost buy box win rate" }
      ],
      identityMapping: "Contact → Account",
      trackingSources: ["Customer.io Connector", "HubSpot Connector"],
      usedBySignals: ["Campaign Engagement"],
      usedBySegments: ["Campaign Responsiveness", "myPricing Prospects"],
      monthlyVolume: "278,000 / mo"
    }
  ]);

  // Modal State for "+ Create Event Definition"
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [newEventTitle, setNewEventTitle] = useState("");
  const [newEventKey, setNewEventKey] = useState("");
  const [newEventCategory, setNewEventCategory] = useState("Web & Product");
  const [newEventDescription, setNewEventDescription] = useState("");
  const [newUseForAiSignals, setNewUseForAiSignals] = useState(true);
  const [newUseForSegmentation, setNewUseForSegmentation] = useState(true);
  
  // Interactive Property Rows for Modal
  const [newEventProperties, setNewEventProperties] = useState([
    { name: "page_url", type: "String", required: true },
    { name: "duration", type: "Number", required: false },
    { name: "source", type: "String", required: false }
  ]);

  // Add Property Row in Modal
  const handleAddPropertyRow = () => {
    setNewEventProperties([
      ...newEventProperties,
      { name: "", type: "String", required: false }
    ]);
  };

  // Remove Property Row
  const handleRemovePropertyRow = (index) => {
    setNewEventProperties(newEventProperties.filter((_, i) => i !== index));
  };

  // Handle Save Event Definition Form Submit
  const handleSaveEventDefinition = (e) => {
    e.preventDefault();
    if (!newEventTitle.trim()) return;

    const generatedKey = newEventKey.trim() || newEventTitle.toLowerCase().replace(/[^a-z0-9]+/g, '_').replace(/^_+|_+$/g, '');
    
    const newDefItem = {
      id: `def-${Date.now()}`,
      title: newEventTitle,
      eventKey: generatedKey,
      category: newEventCategory,
      status: "Active",
      schemaValid: true,
      description: newEventDescription || `Triggered when an identified account/contact performs ${newEventTitle}.`,
      propertiesSchema: newEventProperties.filter(p => p.name.trim() !== ""),
      identityMapping: "Contact → Account",
      trackingSources: ["Google Tag Manager", "Boostmyshop Web SDK"],
      usedBySignals: newUseForAiSignals ? ["myPricing Interest", "Expansion Potential"] : ["Operational Fact"],
      usedBySegments: newUseForSegmentation ? ["High-Intent Accounts", "myPricing Prospects"] : ["All Active Accounts"],
      monthlyVolume: "1,200 / mo (New)"
    };

    setEventDefinitionsList([newDefItem, ...eventDefinitionsList]);
    setIsCreateModalOpen(false);
    setActiveTab("definitions");

    if (onShowToast) {
      onShowToast(`Event Definition "${newEventTitle}" (${generatedKey}) saved successfully!`);
    }

    // Reset Form
    setNewEventTitle("");
    setNewEventKey("");
    setNewEventDescription("");
    setNewEventProperties([
      { name: "page_url", type: "String", required: true },
      { name: "duration", type: "Number", required: false }
    ]);
  };

  // Compact Infrastructure Health Summary (non-hero)
  const healthStats = [
    { label: "Events Ingested (24h)", value: "842,109", note: "+14.2% volume" },
    { label: "Active Tracking Sources", value: "4 Connected", note: "100% Operational" },
    { label: "Avg Latency", value: "42 ms", note: "Sub-second SLA" },
    { label: "Signal Conversion Rate", value: "94.8%", note: "Behavior → AI Signal" }
  ];

  // 2. REALISTIC EVENT STREAM SAMPLE DATA
  const eventsList = [
    {
      id: "EVT-90412",
      timestamp: "Today · 10:42 AM",
      eventType: "Viewed myPricing Page",
      eventKey: "pricing_page_viewed",
      category: "Web & Product",
      icon: Eye,
      iconBg: "bg-blue-100 text-blue-700 border-blue-200",
      account: "TechGear Europe",
      accountId: "ACC-89420-EU",
      contact: "Antoine Laurent",
      propertiesCount: "6 properties",
      payload: {
        "Page URL": "/products/mypricing",
        "Duration": "184 sec",
        "Source": "Google Ads",
        "Device": "Desktop",
        "Browser": "Chrome",
        "Campaign": "Pricing Expansion EU",
        "Session ID": "SES-29184"
      },
      signalGenerated: "High Pricing Intent",
      signalScore: "+15",
      signalDescription: "Repeated pricing-page engagement increases the account's cross-sell intent score.",
      usedInSegments: ["High-Intent Accounts", "myPricing Prospects"],
      source: "Google Tag Manager",
      channel: "Web Application",
      activationCampaign: "myPricing Cross-Sell Campaign",
      surfacedInteraction: "Viewed myPricing Page (4th visit in 7 days)"
    },
    {
      id: "EVT-90411",
      timestamp: "Today · 09:15 AM",
      eventType: "Downloaded Dynamic Pricing Playbook",
      eventKey: "playbook_downloaded",
      category: "Content & Lead Gen",
      icon: BookOpen,
      iconBg: "bg-indigo-100 text-indigo-700 border-indigo-200",
      account: "Fnac Digital Commerce",
      accountId: "ACC-31092-FR",
      contact: "Camille Dupont",
      propertiesCount: "4 properties",
      payload: {
        "Asset Title": "B2B Dynamic Pricing Playbook v4.pdf",
        "Form Name": "Playbook Download Form",
        "Referrer": "LinkedIn Organic",
        "Campaign ID": "CMP-88120"
      },
      signalGenerated: "Content Evaluation",
      signalScore: "+18",
      signalDescription: "High-value asset download signals active evaluation of repricing strategies.",
      usedInSegments: ["High-Intent Accounts", "Competitor Replacement Target"],
      source: "HubSpot Connector",
      channel: "Inbound Marketing Form",
      activationCampaign: "Repricing Playbook Nurture Flow",
      surfacedInteraction: "Downloaded Dynamic Pricing Playbook v4"
    },
    {
      id: "EVT-90410",
      timestamp: "Yesterday · 04:30 PM",
      eventType: "Attended Competitive Pricing Webinar",
      eventKey: "webinar_attended",
      category: "Events & Webinars",
      icon: Video,
      iconBg: "bg-purple-100 text-purple-700 border-purple-200",
      account: "TechGear Europe",
      accountId: "ACC-89420-EU",
      contact: "Antoine Laurent",
      propertiesCount: "5 properties",
      payload: {
        "Webinar Title": "Automating Amazon & Marketplace Pricing",
        "Minutes Attended": "42 min",
        "Questions Asked": "2 questions",
        "Poll Response": "Manual Repricing pain point"
      },
      signalGenerated: "Executive Engagement",
      signalScore: "+20",
      signalDescription: "Extended webinar participation indicates urgent operational need for automated pricing.",
      usedInSegments: ["High-Intent Accounts", "Enterprise Retailer"],
      source: "Zoom Connector",
      channel: "Live Webinar Platform",
      activationCampaign: "Post-Webinar Executive Demo Outreach",
      surfacedInteraction: "Attended 42 mins of Marketplace Pricing Webinar"
    },
    {
      id: "EVT-90409",
      timestamp: "Yesterday · 02:10 PM",
      eventType: "ROI Calculator Calculation",
      eventKey: "roi_calculated",
      category: "Interactive Tools",
      icon: Calculator,
      iconBg: "bg-emerald-100 text-emerald-700 border-emerald-200",
      account: "ElectroNordic AB",
      accountId: "ACC-77211-SE",
      contact: "Freja Lindqvist",
      propertiesCount: "5 properties",
      payload: {
        "Calculated Savings": "€14,200/yr",
        "SKU Count": "12,500 SKUs",
        "Modules Selected": "myPricing + myOrders",
        "Currency": "EUR"
      },
      signalGenerated: "Commercial Evaluation",
      signalScore: "+25",
      signalDescription: "High-value ROI calculation demonstrates budget approval and ROI justification phase.",
      usedInSegments: ["Expansion Candidates", "myPricing Prospects"],
      source: "Boostmyshop Web SDK",
      channel: "Web Portal Tool",
      activationCampaign: "Custom ROI Business Case Offer",
      surfacedInteraction: "Calculated €14,200 annual margin expansion"
    },
    {
      id: "EVT-90408",
      timestamp: "2 days ago",
      eventType: "Shopify Integration Auth",
      eventKey: "shopify_auth_completed",
      category: "Product & API Integration",
      icon: ShoppingBag,
      iconBg: "bg-amber-100 text-amber-800 border-amber-200",
      account: "Apex Logistics Retail",
      accountId: "ACC-54109-DE",
      contact: "Markus Weber",
      propertiesCount: "4 properties",
      payload: {
        "Shop Domain": "apex-de.myshopify.com",
        "Store Count": "14 stores",
        "Auth Status": "Success (100% Sync)",
        "API Scope": "read_products, write_inventory"
      },
      signalGenerated: "Operational / Direct Event",
      signalScore: "--",
      signalDescription: "Technical store connector event. Directly updates account timeline and store count profile attribute.",
      usedInSegments: ["E-Commerce Integration Active"],
      source: "Shopify OAuth Connector",
      channel: "REST API Webhook",
      activationCampaign: "Multi-Store Sync Activation Workflow",
      surfacedInteraction: "Authenticated 14 Shopify stores"
    },
    {
      id: "EVT-90407",
      timestamp: "3 days ago",
      eventType: "Opened Pricing Strategy Email",
      eventKey: "email_campaign_opened",
      category: "Outbound Marketing",
      icon: Mail,
      iconBg: "bg-slate-100 text-slate-700 border-slate-200",
      account: "Iberia Tech Retail",
      accountId: "ACC-44910-ES",
      contact: "Carlos Gomez",
      propertiesCount: "4 properties",
      payload: {
        "Campaign Title": "Q4 Competitor Pricing Strategy Alert",
        "Subject Line": "Boost your Amazon buy box win rate by 18%",
        "Device": "Mobile (iOS)",
        "Click Count": "3 clicks"
      },
      signalGenerated: "Campaign Engagement",
      signalScore: "+12",
      signalDescription: "Repeated opens and clicks on pricing strategy content signal high email responsiveness.",
      usedInSegments: ["Campaign Responsiveness", "myPricing Prospects"],
      source: "Customer.io Connector",
      channel: "Email Marketing",
      activationCampaign: "Q4 Amazon Buy-Box Expansion Campaign",
      surfacedInteraction: "Opened Pricing Email (3 clicks)"
    }
  ];

  // 3. STANDARDIZED TRACKING SOURCES DATA
  const trackingSourcesList = [
    {
      id: "src-1",
      name: "Google Tag Manager",
      type: "Web Telemetry",
      status: "Connected",
      statusBadge: "bg-emerald-100 text-emerald-800 border-emerald-200",
      eventTypesCount: 12,
      volume24h: "13,420 / 24h",
      lastReceived: "2 min ago",
      trackedEvents: ["Viewed myPricing Page", "Clicked Pricing CTA", "Form Interaction", "Product View"],
      description: "Captures web client behavior, pageviews, and click interactions.",
      schemaValidation: "99.8%",
      identityResolution: "97.2%",
      lastError: "None"
    },
    {
      id: "src-2",
      name: "Boostmyshop Web SDK",
      type: "First-Party SDK",
      status: "Live",
      statusBadge: "bg-emerald-100 text-emerald-800 border-emerald-200",
      eventTypesCount: 18,
      volume24h: "41,280 / 24h",
      lastReceived: "Just now",
      trackedEvents: ["ROI Calculator Calculation", "Repricing Rule Created", "Margin Audit Triggered"],
      description: "Embedded JavaScript SDK feeding product usage telemetry directly to ADA.",
      schemaValidation: "100.0%",
      identityResolution: "98.9%",
      lastError: "None"
    },
    {
      id: "src-3",
      name: "HubSpot Connector",
      type: "CRM & Inbound",
      status: "Connected",
      statusBadge: "bg-emerald-100 text-emerald-800 border-emerald-200",
      eventTypesCount: 8,
      volume24h: "8,920 / 24h",
      lastReceived: "14 min ago",
      trackedEvents: ["Downloaded Dynamic Pricing Playbook", "Form Submitted", "Sales Email Activity"],
      description: "Syncs inbound lead form submissions and content downloads.",
      schemaValidation: "98.5%",
      identityResolution: "94.1%",
      lastError: "None"
    },
    {
      id: "src-4",
      name: "API / Webhooks",
      type: "Server Integration",
      status: "Connected",
      statusBadge: "bg-emerald-100 text-emerald-800 border-emerald-200",
      eventTypesCount: 15,
      volume24h: "22,104 / 24h",
      lastReceived: "5 min ago",
      trackedEvents: ["Shopify Integration Auth", "Amazon Seller API Sync", "Billing Subscription Update"],
      description: "Inbound REST webhook pipeline receiving marketplace API authentication events.",
      schemaValidation: "99.2%",
      identityResolution: "95.8%",
      lastError: "None"
    }
  ];

  // Filtering Event Stream
  const filteredEvents = eventsList.filter(evt => {
    const matchesSearch = evt.account.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          evt.eventType.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          evt.contact.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          evt.accountId.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          evt.signalGenerated.toLowerCase().includes(searchTerm.toLowerCase());
    if (selectedCategory === "ALL") return matchesSearch;
    return matchesSearch && evt.category === selectedCategory;
  });

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      
      {/* ==================================================
          1. HEADER & SUB-TAB NAVIGATION
      ================================================== */}
      <div className="bg-white rounded-2xl border border-slate-200/90 shadow-xs p-6 space-y-5">
        
        {/* Main Header Row */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-5">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 border border-indigo-200/80 flex items-center justify-center font-bold shadow-2xs">
              <Activity className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center space-x-2.5">
                <h1 className="text-2xl font-black text-slate-900 tracking-tight">
                  Events
                </h1>
                <span className="px-2.5 py-0.5 text-[11px] font-extrabold bg-indigo-50 text-indigo-700 rounded-full border border-indigo-200">
                  Behavior → Intelligence
                </span>
              </div>
              <p className="text-xs font-semibold text-slate-500 mt-0.5">
                Track customer behavior and turn it into actionable audience signals.
              </p>
            </div>
          </div>

          {/* Header Action Button (Contextual per tab) */}
          <div className="flex items-center space-x-2 shrink-0">
            {activeTab === "sources" ? (
              <button 
                onClick={() => {
                  if (onNavigateToDataSources) onNavigateToDataSources();
                  if (onShowToast) onShowToast("Navigating to Data Sources connector wizard...");
                }}
                className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold text-xs rounded-xl shadow-xs flex items-center space-x-1.5 transition-all cursor-pointer"
              >
                <Plus className="w-4 h-4" />
                <span>Connect Source</span>
              </button>
            ) : (
              <button 
                onClick={() => setIsCreateModalOpen(true)}
                className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold text-xs rounded-xl shadow-xs flex items-center space-x-1.5 transition-all cursor-pointer"
              >
                <Plus className="w-4 h-4" />
                <span>Create Event</span>
              </button>
            )}
          </div>
        </div>

        {/* 4 Compact Scannable Metrics Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-1">
          
          <div className="bg-slate-50/90 p-3.5 rounded-xl border border-slate-200/80 space-y-1">
            <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Events ingested</div>
            <div className="text-lg font-black text-slate-900 tracking-tight">842,109 <span className="text-xs font-semibold text-slate-500">/ 24h</span></div>
            <div className="text-[11px] font-extrabold text-emerald-600">+14.2% vs yesterday</div>
          </div>

          <div className="bg-slate-50/90 p-3.5 rounded-xl border border-slate-200/80 space-y-1">
            <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Active sources</div>
            <div className="text-lg font-black text-slate-900 tracking-tight">4 connected</div>
            <div className="text-[11px] font-extrabold text-emerald-600">100% operational</div>
          </div>

          <div className="bg-slate-50/90 p-3.5 rounded-xl border border-slate-200/80 space-y-1">
            <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Avg latency</div>
            <div className="text-lg font-black text-slate-900 tracking-tight">42 ms</div>
            <div className="text-[11px] font-semibold text-slate-500">Sub-second SLA</div>
          </div>

          <div className="bg-slate-50/90 p-3.5 rounded-xl border border-slate-200/80 space-y-1">
            <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Signal conversion</div>
            <div className="text-lg font-black text-slate-900 tracking-tight">94.8%</div>
            <div className="text-[11px] font-extrabold text-purple-700">Behavior → AI signal</div>
          </div>

        </div>

        {/* 3 Sub-Navigation Tabs (Placed below KPIs) */}
        <div className="flex items-center space-x-1 bg-slate-100 p-1 rounded-xl border border-slate-200/80 w-fit text-xs font-extrabold pt-1">
          <button
            onClick={() => setActiveTab("stream")}
            className={`px-4 py-2 rounded-lg transition-all cursor-pointer flex items-center space-x-2 ${
              activeTab === "stream"
                ? 'bg-white text-slate-900 shadow-xs border border-slate-200/60'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Activity className="w-3.5 h-3.5 text-indigo-600" />
            <span>Event Stream</span>
          </button>

          <button
            onClick={() => setActiveTab("definitions")}
            className={`px-4 py-2 rounded-lg transition-all cursor-pointer flex items-center space-x-2 ${
              activeTab === "definitions"
                ? 'bg-white text-slate-900 shadow-xs border border-slate-200/60'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <FileText className="w-3.5 h-3.5 text-indigo-600" />
            <span>Event Definitions</span>
          </button>

          <button
            onClick={() => setActiveTab("sources")}
            className={`px-4 py-2 rounded-lg transition-all cursor-pointer flex items-center space-x-2 ${
              activeTab === "sources"
                ? 'bg-white text-slate-900 shadow-xs border border-slate-200/60'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Database className="w-3.5 h-3.5 text-indigo-600" />
            <span>Tracking Sources</span>
          </button>
        </div>

      </div>

      {/* ==================================================
          2. TAB 1: EVENT STREAM
      ================================================== */}
      {activeTab === "stream" && (
        <div className="bg-white rounded-2xl border border-slate-200/90 shadow-xs p-6 space-y-5 animate-in fade-in duration-150">
          
          {/* Controls: Search, Category Filter & Stream Status */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 bg-slate-50 p-3 rounded-xl border border-slate-200/80">
            {/* Search Input */}
            <div className="relative flex-1 w-full">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
              <input 
                type="text" 
                placeholder="Search by event, account, contact, or generated signal..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-9 pr-4 py-1.5 bg-white border border-slate-300 rounded-lg text-xs font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center space-x-2 w-full sm:w-auto">
              <select 
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-3 py-1.5 bg-white border border-slate-300 rounded-lg text-xs font-bold text-slate-700 focus:outline-none cursor-pointer"
              >
                <option value="ALL">All Categories</option>
                <option value="Web & Product">Web & Product</option>
                <option value="Content & Lead Gen">Content & Lead Gen</option>
                <option value="Events & Webinars">Events & Webinars</option>
                <option value="Interactive Tools">Interactive Tools</option>
                <option value="Product & API Integration">Product & API Integration</option>
                <option value="Outbound Marketing">Outbound Marketing</option>
              </select>

              {/* Streaming Toggle */}
              <button 
                onClick={() => {
                  setIsLiveStreaming(!isLiveStreaming);
                  if (onShowToast) onShowToast(isLiveStreaming ? "Paused event stream" : "Resumed live event stream");
                }}
                className={`px-3 py-1.5 rounded-lg text-xs font-extrabold flex items-center space-x-1.5 cursor-pointer border transition-colors ${
                  isLiveStreaming 
                    ? 'bg-emerald-50 text-emerald-700 border-emerald-300' 
                    : 'bg-slate-100 text-slate-700 border-slate-300'
                }`}
              >
                {isLiveStreaming ? (
                  <>
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span>Live Stream</span>
                    <Pause className="w-3 h-3 ml-0.5" />
                  </>
                ) : (
                  <>
                    <Play className="w-3 h-3" />
                    <span>Paused</span>
                  </>
                )}
              </button>

              <button 
                onClick={() => onShowToast && onShowToast("Refreshed event pipeline stream")}
                className="p-1.5 bg-white border border-slate-300 hover:bg-slate-100 rounded-lg text-slate-600 cursor-pointer"
              >
                <RefreshCw className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Product-Focused Event Table */}
          <div className="overflow-x-auto border border-slate-200/90 rounded-xl">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="bg-slate-900 text-slate-300 text-[10px] uppercase font-extrabold tracking-wider border-b border-slate-800">
                  <th className="py-3.5 px-4">Event</th>
                  <th className="py-3.5 px-4">Account</th>
                  <th className="py-3.5 px-4">Contact</th>
                  <th className="py-3.5 px-4">Properties</th>
                  <th className="py-3.5 px-4">Signal</th>
                  <th className="py-3.5 px-4">Segments</th>
                  <th className="py-3.5 px-4">Source</th>
                  <th className="py-3.5 px-4 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 font-medium text-slate-700 bg-white">
                {filteredEvents.map((evt) => {
                  const IconComponent = evt.icon;
                  return (
                    <tr key={evt.id} className="hover:bg-slate-50/90 transition-colors group">
                      
                      {/* Column 1: Event */}
                      <td className="py-3.5 px-4">
                        <div className="flex items-center space-x-2.5">
                          <div className={`w-7 h-7 rounded-lg flex items-center justify-center font-bold border shrink-0 ${evt.iconBg}`}>
                            <IconComponent className="w-3.5 h-3.5" />
                          </div>
                          <div>
                            <div className="font-extrabold text-slate-900 text-sm group-hover:text-indigo-600 transition-colors">
                              {evt.eventType}
                            </div>
                            <div className="text-[11px] text-slate-400 font-mono">
                              {evt.timestamp} • {evt.id}
                            </div>
                          </div>
                        </div>
                      </td>

                      {/* Column 2: Account */}
                      <td className="py-3.5 px-4">
                        <div className="font-extrabold text-slate-900">{evt.account}</div>
                        <div className="text-[11px] text-slate-500 font-mono">{evt.accountId}</div>
                      </td>

                      {/* Column 3: Contact */}
                      <td className="py-3.5 px-4">
                        <div className="font-bold text-slate-800">{evt.contact}</div>
                      </td>

                      {/* Column 4: Properties */}
                      <td className="py-3.5 px-4">
                        <span className="px-2.5 py-1 bg-slate-100 text-slate-700 font-bold text-[11px] rounded-md border border-slate-200">
                          {evt.propertiesCount}
                        </span>
                      </td>

                      {/* Column 5: Signal */}
                      <td className="py-3.5 px-4">
                        <div className="flex items-center space-x-1.5">
                          <Sparkles className="w-3.5 h-3.5 text-purple-600 shrink-0" />
                          <span className="font-bold text-slate-900">{evt.signalGenerated}</span>
                        </div>
                        {evt.signalScore !== "--" ? (
                          <span className="inline-block mt-0.5 px-2 py-0.2 bg-emerald-100 text-emerald-800 text-[10px] font-extrabold rounded border border-emerald-200">
                            {evt.signalScore}
                          </span>
                        ) : (
                          <span className="inline-block mt-0.5 text-[10px] text-slate-400 font-medium">
                            Direct Activity
                          </span>
                        )}
                      </td>

                      {/* Column 6: Segments */}
                      <td className="py-3.5 px-4">
                        <div className="flex flex-wrap gap-1">
                          {evt.usedInSegments.map((seg, idx) => (
                            <span key={idx} className="px-2 py-0.5 bg-slate-100 text-slate-700 text-[10px] font-extrabold rounded border border-slate-200">
                              ✓ {seg}
                            </span>
                          ))}
                        </div>
                      </td>

                      {/* Column 7: Source */}
                      <td className="py-3.5 px-4">
                        <div className="text-slate-800 font-bold text-xs">{evt.source}</div>
                        <div className="text-[10px] text-slate-400 font-medium">{evt.channel}</div>
                      </td>

                      {/* Column 8: Action */}
                      <td className="py-3.5 px-4 text-right">
                        <button 
                          onClick={() => setSelectedEventForDrawer(evt)}
                          className="px-3 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white text-[11px] font-extrabold rounded-lg shadow-2xs flex items-center space-x-1 ml-auto cursor-pointer transition-all"
                        >
                          <Eye className="w-3.5 h-3.5" />
                          <span>Inspect Event</span>
                        </button>
                      </td>

                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

        </div>
      )}

      {/* ==================================================
          3. TAB 2: EVENT DEFINITIONS
      ================================================== */}
      {activeTab === "definitions" && (
        <div className="bg-white rounded-2xl border border-slate-200/90 shadow-xs p-6 space-y-6 animate-in fade-in duration-150">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
            <div>
              <h2 className="text-lg font-extrabold text-slate-900 tracking-tight">
                Event Definitions Catalog
              </h2>
              <p className="text-xs font-medium text-slate-500 mt-0.5">
                Standardized behavioral event schemas, property types, and identity resolution mappings.
              </p>
            </div>

            <button 
              onClick={() => setIsCreateModalOpen(true)}
              className="px-3.5 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold text-xs rounded-xl flex items-center space-x-1.5 cursor-pointer shadow-2xs shrink-0"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Create Event Definition</span>
            </button>
          </div>

          {/* Definitions Grid / Catalog */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {eventDefinitionsList.map((def) => (
              <div key={def.id} className="bg-slate-50/80 border border-slate-200 rounded-xl p-5 space-y-4 hover:border-slate-300 transition-all shadow-2xs">
                
                {/* Definition Header */}
                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex items-center space-x-2">
                      <h3 className="text-base font-black text-slate-900">{def.title}</h3>
                      <span className="px-2 py-0.5 text-[10px] font-extrabold bg-slate-200 text-slate-700 rounded-md">
                        {def.category}
                      </span>
                    </div>
                    <div className="text-xs font-mono font-bold text-indigo-600 mt-0.5">
                      {def.eventKey}
                    </div>
                  </div>

                  {/* Status & Volume Tags */}
                  <div className="flex flex-col items-end space-y-1">
                    <span className="px-2.5 py-0.5 text-[10px] font-extrabold bg-emerald-100 text-emerald-800 rounded-md border border-emerald-200 flex items-center space-x-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
                      <span>{def.status}</span>
                    </span>
                    <span className="text-[10px] font-mono text-slate-500 font-bold">
                      {def.monthlyVolume}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs text-slate-600 font-medium leading-relaxed bg-white p-3 rounded-lg border border-slate-200/80">
                  "{def.description}"
                </p>

                {/* Schema / Properties Table */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-[10px] font-extrabold text-slate-400 uppercase tracking-wider">
                    <span>Expected Properties & Data Types</span>
                    <span className="text-emerald-600 flex items-center space-x-1">
                      <Check className="w-3 h-3" />
                      <span>Schema Validated</span>
                    </span>
                  </div>
                  <div className="bg-white border border-slate-200 rounded-lg overflow-hidden text-[11px]">
                    {def.propertiesSchema.map((prop, idx) => (
                      <div key={idx} className={`flex items-center justify-between p-2 font-mono ${idx !== def.propertiesSchema.length - 1 ? 'border-b border-slate-100' : ''}`}>
                        <div className="flex items-center space-x-2">
                          <span className="font-extrabold text-slate-900">{prop.name}</span>
                          <span className="text-[10px] font-sans px-1.5 py-0.2 bg-slate-100 text-slate-600 rounded">
                            {prop.type}
                          </span>
                        </div>
                        <span className={`text-[10px] font-sans font-extrabold ${prop.required ? 'text-amber-700' : 'text-slate-400'}`}>
                          {prop.required ? 'Required' : 'Optional'}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Downstream Mapping Connections */}
                <div className="grid grid-cols-2 gap-3 text-xs pt-1 border-t border-slate-200/70">
                  <div>
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Used by AI Signals</div>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {def.usedBySignals.map((sig, i) => (
                        <span key={i} className="px-2 py-0.5 bg-purple-50 text-purple-700 text-[10px] font-bold rounded border border-purple-200">
                          ⚡ {sig}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Used by Segments</div>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {def.usedBySegments.map((seg, i) => (
                        <span key={i} className="px-2 py-0.5 bg-blue-50 text-blue-700 text-[10px] font-bold rounded border border-blue-200">
                          ✓ {seg}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Actions & Simplified Identity Resolution Wording */}
                <div className="flex items-center justify-between pt-2 border-t border-slate-200/60 text-xs">
                  <span className="text-[11px] font-mono text-slate-500">
                    Identity resolution: <span className="font-extrabold text-slate-800">{def.identityMapping}</span>
                  </span>
                  <div className="flex items-center space-x-2">
                    <button 
                      onClick={() => onShowToast && onShowToast(`Opened editor for ${def.eventKey}`)}
                      className="px-2.5 py-1 bg-white hover:bg-slate-100 text-slate-700 font-bold border border-slate-200 rounded-lg text-[11px] cursor-pointer"
                    >
                      Edit Definition
                    </button>
                    <button 
                      onClick={() => onShowToast && onShowToast(`Viewing usage telemetry for ${def.title}`)}
                      className="px-2.5 py-1 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 font-bold border border-indigo-200 rounded-lg text-[11px] cursor-pointer"
                    >
                      View Usage
                    </button>
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      )}

      {/* ==================================================
          4. TAB 3: TRACKING SOURCES (Contextual view connected to Data Sources)
      ================================================== */}
      {activeTab === "sources" && (
        <div className="bg-white rounded-2xl border border-slate-200/90 shadow-xs p-6 space-y-6 animate-in fade-in duration-150">
          
          {/* Header Banner Connecting to Global Data Sources */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-slate-900 text-white p-4 rounded-xl shadow-xs border border-slate-800">
            <div className="space-y-1">
              <div className="flex items-center space-x-2">
                <Database className="w-4 h-4 text-indigo-400" />
                <span className="font-extrabold text-sm text-white">CDP Behavioral Sources Registry</span>
              </div>
              <p className="text-xs text-slate-300 font-medium">
                Tracking Sources displays event-producing channels. To manage CRM connectors, API credentials, or database syncs, visit global Data Sources.
              </p>
            </div>

            <button 
              onClick={() => {
                if (onNavigateToDataSources) onNavigateToDataSources();
                if (onShowToast) onShowToast("Navigated to global Data Sources module");
              }}
              className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white font-extrabold text-xs rounded-xl shadow-xs flex items-center space-x-1.5 cursor-pointer transition-all shrink-0"
            >
              <span>Manage in Data Sources</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Standardized Tracking Sources Table */}
          <div className="overflow-x-auto border border-slate-200/90 rounded-xl">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="bg-slate-900 text-slate-300 text-[10px] uppercase font-extrabold tracking-wider border-b border-slate-800">
                  <th className="py-3.5 px-4">Tracking Source</th>
                  <th className="py-3.5 px-4">Source Type</th>
                  <th className="py-3.5 px-4">Status</th>
                  <th className="py-3.5 px-4 text-right">Event Types</th>
                  <th className="py-3.5 px-4 text-right">Volume / 24h</th>
                  <th className="py-3.5 px-4">Last Received</th>
                  <th className="py-3.5 px-4 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 font-medium text-slate-700 bg-white">
                {trackingSourcesList.map((src) => (
                  <tr key={src.id} className="hover:bg-slate-50/90 transition-colors group cursor-pointer" onClick={() => setSelectedSourceForDrawer(src)}>
                    <td className="py-3.5 px-4 font-extrabold text-slate-900 flex items-center space-x-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                      <span className="group-hover:text-indigo-600 transition-colors">{src.name}</span>
                    </td>
                    <td className="py-3.5 px-4 text-slate-500 font-mono text-[11px]">{src.type}</td>
                    <td className="py-3.5 px-4">
                      <span className={`px-2.5 py-0.5 text-[10px] font-extrabold rounded-md border ${src.statusBadge}`}>
                        ✓ {src.status}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 text-right font-extrabold text-slate-900">{src.eventTypesCount} types</td>
                    <td className="py-3.5 px-4 text-right font-mono font-bold text-slate-900">{src.volume24h}</td>
                    <td className="py-3.5 px-4 text-emerald-600 font-bold">{src.lastReceived}</td>
                    <td className="py-3.5 px-4 text-right">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedSourceForDrawer(src);
                        }}
                        className="px-3 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 font-extrabold text-[11px] rounded-md border border-slate-300 inline-flex items-center space-x-1 cursor-pointer transition-all"
                      >
                        <span>Configure</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Operational "Tracking Health" Section */}
          <div className="bg-slate-50 rounded-xl border border-slate-200 p-5 space-y-5">
            <div className="flex items-center justify-between border-b border-slate-200/80 pb-3">
              <div>
                <h3 className="text-base font-extrabold text-slate-900 tracking-tight">
                  Tracking Health & Pipeline Operational Status
                </h3>
                <p className="text-xs text-slate-500 font-medium mt-0.5">
                  Real-time quality metrics for event delivery, schema validation, and identity resolution.
                </p>
              </div>

              <span className="px-2.5 py-1 text-xs font-extrabold bg-emerald-100 text-emerald-800 rounded-md border border-emerald-200 flex items-center space-x-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>All Pipelines Operational</span>
              </span>
            </div>

            {/* 3 Operational Progress Bar Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-1">
              
              {/* Event Delivery */}
              <div className="bg-white p-4 rounded-xl border border-slate-200/90 space-y-2 shadow-2xs">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-extrabold text-slate-800">Event Delivery SLA</span>
                  <span className="font-black text-emerald-600">98.7%</span>
                </div>
                <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-500 rounded-full" style={{ width: '98.7%' }} />
                </div>
                <div className="text-[11px] text-slate-500 font-medium flex justify-between">
                  <span>Sub-second delivery</span>
                  <span className="text-slate-400 font-mono">0 dropouts</span>
                </div>
              </div>

              {/* Identity Resolution */}
              <div className="bg-white p-4 rounded-xl border border-slate-200/90 space-y-2 shadow-2xs">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-extrabold text-slate-800">Identity Resolution</span>
                  <span className="font-black text-indigo-600">96.2%</span>
                </div>
                <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-indigo-600 rounded-full" style={{ width: '96.2%' }} />
                </div>
                <div className="text-[11px] text-slate-500 font-medium flex justify-between">
                  <span>Contact → Account Graph</span>
                  <span className="text-slate-400 font-mono">125.4k profiles</span>
                </div>
              </div>

              {/* Schema Validation */}
              <div className="bg-white p-4 rounded-xl border border-slate-200/90 space-y-2 shadow-2xs">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-extrabold text-slate-800">Events with Valid Schema</span>
                  <span className="font-black text-purple-600">99.1%</span>
                </div>
                <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-purple-600 rounded-full" style={{ width: '99.1%' }} />
                </div>
                <div className="text-[11px] text-slate-500 font-medium flex justify-between">
                  <span>Type compliance</span>
                  <span className="text-slate-400 font-mono">0 schema errors</span>
                </div>
              </div>

            </div>

          </div>

        </div>
      )}

      {/* ==================================================
          5. EVENT INSPECTOR DRAWER (WITH DIRECT PROFILE LINK)
      ================================================== */}
      {selectedEventForDrawer && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs z-50 flex justify-end animate-in fade-in duration-200">
          <div className="w-full max-w-xl bg-white min-h-screen shadow-2xl flex flex-col justify-between border-l border-slate-200 animate-in slide-in-from-right duration-200">
            
            {/* Drawer Header */}
            <div className="p-6 border-b border-slate-200 bg-slate-900 text-white space-y-2">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-0.5 bg-indigo-500/30 text-indigo-300 text-xs font-extrabold rounded border border-indigo-400/30">
                  EVENT INSPECTOR & BEHAVIOR PIPELINE
                </span>
                <button 
                  onClick={() => setSelectedEventForDrawer(null)}
                  className="text-slate-400 hover:text-white p-1 rounded-lg cursor-pointer transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <h2 className="text-xl font-black text-white">
                {selectedEventForDrawer.eventType}
              </h2>

              <div className="text-xs text-slate-400 flex items-center space-x-3 font-mono">
                <span>{selectedEventForDrawer.timestamp}</span>
                <span>•</span>
                <span>ID: {selectedEventForDrawer.id}</span>
                <span>•</span>
                <span className="text-emerald-400 font-bold">Ingested / Resolved</span>
              </div>
            </div>

            {/* Drawer Content Body: 6 Sections */}
            <div className="p-6 flex-1 overflow-y-auto space-y-6 text-xs">
              
              {/* SECTION 1 — EVENT PROPERTIES */}
              <div className="space-y-2">
                <div className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider flex items-center space-x-1.5">
                  <Code className="w-3.5 h-3.5 text-indigo-600" />
                  <span>SECTION 1 — EVENT PROPERTIES</span>
                </div>
                <div className="bg-slate-900 text-slate-200 p-4 rounded-xl font-mono text-[11px] space-y-2 border border-slate-800">
                  <div className="text-indigo-400 pb-1 border-b border-slate-800">
                    // Source: {selectedEventForDrawer.source} ({selectedEventForDrawer.channel})
                  </div>
                  {Object.entries(selectedEventForDrawer.payload).map(([key, val], idx) => (
                    <div key={idx} className="flex items-center justify-between">
                      <span className="text-slate-400">{key}:</span>
                      <span className="text-emerald-400 font-bold">{val}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* SECTION 2 — IDENTITY RESOLUTION */}
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-3">
                <div className="text-[10px] font-extrabold text-slate-500 uppercase tracking-wider flex items-center justify-between">
                  <span className="flex items-center space-x-1.5">
                    <UserCheck className="w-3.5 h-3.5 text-indigo-600" />
                    <span>SECTION 2 — IDENTITY RESOLUTION</span>
                  </span>
                  <button
                    onClick={() => {
                      setSelectedEventForDrawer(null);
                      if (onNavigateToAccountInteractions) onNavigateToAccountInteractions();
                    }}
                    className="text-indigo-600 hover:text-indigo-800 font-extrabold text-[11px] inline-flex items-center space-x-1 cursor-pointer"
                  >
                    <span>View in Account →</span>
                  </button>
                </div>
                <div className="grid grid-cols-3 gap-3 bg-white p-3 rounded-lg border border-slate-200/80">
                  <div>
                    <div className="text-[10px] font-bold text-slate-400 uppercase">Contact</div>
                    <div className="font-extrabold text-slate-900 text-xs mt-0.5">{selectedEventForDrawer.contact}</div>
                  </div>
                  <div>
                    <div className="text-[10px] font-bold text-slate-400 uppercase">B2B Account</div>
                    <div className="font-extrabold text-slate-900 text-xs mt-0.5">{selectedEventForDrawer.account}</div>
                  </div>
                  <div>
                    <div className="text-[10px] font-bold text-slate-400 uppercase">Account ID</div>
                    <div className="font-mono font-bold text-indigo-700 text-xs mt-0.5">{selectedEventForDrawer.accountId}</div>
                  </div>
                </div>
              </div>

              {/* SECTION 3 — ACCOUNT 360 (PROFILES CONNECTION) */}
              <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl space-y-3">
                <div className="text-[10px] font-extrabold text-slate-500 uppercase tracking-wider flex items-center justify-between">
                  <span className="flex items-center space-x-1.5">
                    <Building2 className="w-3.5 h-3.5 text-indigo-600" />
                    <span>SECTION 3 — SURFACED IN ACCOUNT 360</span>
                  </span>
                  <span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 text-[10px] font-extrabold rounded">
                    Live on Account Profile
                  </span>
                </div>

                <div className="bg-white p-3 rounded-lg border border-slate-200/80 font-bold text-slate-900 flex items-center justify-between">
                  <span>{selectedEventForDrawer.surfacedInteraction}</span>
                  <span className="text-[10px] font-mono text-slate-400">Account Timeline</span>
                </div>

                {/* Primary CTA connecting Event directly back to Profile */}
                <button 
                  onClick={() => {
                    setSelectedEventForDrawer(null);
                    if (onNavigateToAccountInteractions) onNavigateToAccountInteractions();
                  }}
                  className="w-full py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-black text-xs rounded-xl shadow-2xs flex items-center justify-center space-x-1.5 cursor-pointer transition-all"
                >
                  <span>View Account Interactions</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* SECTION 4 — AI SIGNAL */}
              <div className="bg-purple-50/90 border border-purple-200 p-4 rounded-xl space-y-2">
                <div className="text-[10px] font-extrabold text-purple-700 uppercase tracking-wider flex items-center space-x-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-purple-600" />
                  <span>SECTION 4 — AI SIGNAL DERIVED</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="font-black text-purple-950 text-base">
                    {selectedEventForDrawer.signalGenerated}
                  </div>
                  {selectedEventForDrawer.signalScore !== "--" ? (
                    <span className="px-2.5 py-0.5 bg-purple-200/80 text-purple-900 font-extrabold text-xs rounded-full border border-purple-300">
                      {selectedEventForDrawer.signalScore}
                    </span>
                  ) : (
                    <span className="px-2 py-0.5 bg-slate-200 text-slate-700 font-bold text-[10px] rounded">
                      Direct Event
                    </span>
                  )}
                </div>
                <p className="text-purple-900 leading-relaxed font-medium bg-white/70 p-2.5 rounded-lg border border-purple-200/60 text-[11px]">
                  "{selectedEventForDrawer.signalDescription}"
                </p>
              </div>

              {/* SECTION 5 — SEGMENTS */}
              <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl space-y-3">
                <div className="text-[10px] font-extrabold text-slate-500 uppercase tracking-wider flex items-center space-x-1.5">
                  <Layers className="w-3.5 h-3.5 text-indigo-600" />
                  <span>SECTION 5 — USED BY AUDIENCE SEGMENTS</span>
                </div>
                <div className="space-y-2">
                  {selectedEventForDrawer.usedInSegments.map((seg, idx) => (
                    <div key={idx} className="flex items-center justify-between bg-white p-2.5 rounded-lg border border-slate-200 font-bold text-slate-900">
                      <span className="flex items-center space-x-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                        <span>{seg}</span>
                      </span>
                      <span className="text-[10px] font-mono text-slate-400">Rule Match</span>
                    </div>
                  ))}
                </div>

                <button 
                  onClick={() => {
                    setSelectedEventForDrawer(null);
                    if (onNavigateToSegments) onNavigateToSegments();
                  }}
                  className="w-full py-2 bg-slate-900 hover:bg-slate-800 text-white font-extrabold text-xs rounded-lg shadow-2xs flex items-center justify-center space-x-1.5 cursor-pointer transition-all"
                >
                  <Sliders className="w-3.5 h-3.5" />
                  <span>Build / Edit Segment</span>
                </button>
              </div>

              {/* SECTION 6 — ACTIVATION */}
              <div className="bg-indigo-950 text-white border border-indigo-900 p-4 rounded-xl space-y-3 shadow-sm">
                <div className="text-[10px] font-extrabold text-indigo-300 uppercase tracking-wider flex items-center space-x-1.5">
                  <Megaphone className="w-3.5 h-3.5 text-amber-400" />
                  <span>SECTION 6 — ENABLES MARKETING ACTION</span>
                </div>

                <div>
                  <div className="text-[10px] text-slate-400 uppercase font-bold">Campaign Trigger</div>
                  <div className="font-extrabold text-white text-sm mt-0.5">
                    {selectedEventForDrawer.activationCampaign}
                  </div>
                </div>

                <button 
                  onClick={() => {
                    setSelectedEventForDrawer(null);
                    if (onNavigateToRecommendation) onNavigateToRecommendation();
                  }}
                  className="w-full py-2.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs rounded-lg shadow-sm flex items-center justify-center space-x-1.5 cursor-pointer transition-all"
                >
                  <span>View Recommendation</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>

            {/* Drawer Footer Close */}
            <div className="p-4 border-t border-slate-200 bg-slate-50 flex items-center justify-between">
              <span className="text-[11px] font-mono text-slate-500">Event ID: {selectedEventForDrawer.id}</span>
              <button 
                onClick={() => setSelectedEventForDrawer(null)}
                className="px-4 py-2 bg-slate-200 hover:bg-slate-300 text-slate-800 font-bold text-xs rounded-xl cursor-pointer"
              >
                Close Inspector
              </button>
            </div>

          </div>
        </div>
      )}

      {/* ==================================================
          6. CONTEXTUAL SOURCE INSPECTOR DRAWER
      ================================================== */}
      {selectedSourceForDrawer && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs z-50 flex justify-end animate-in fade-in duration-200">
          <div className="w-full max-w-lg bg-white min-h-screen shadow-2xl flex flex-col justify-between border-l border-slate-200 animate-in slide-in-from-right duration-200">
            
            {/* Header */}
            <div className="p-6 border-b border-slate-200 bg-slate-900 text-white space-y-2">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-0.5 bg-indigo-500/30 text-indigo-300 text-xs font-extrabold rounded border border-indigo-400/30">
                  TRACKING SOURCE INSPECTOR
                </span>
                <button 
                  onClick={() => setSelectedSourceForDrawer(null)}
                  className="text-slate-400 hover:text-white p-1 rounded-lg cursor-pointer transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <h2 className="text-xl font-black text-white">
                {selectedSourceForDrawer.name}
              </h2>

              <div className="text-xs text-slate-400 flex items-center space-x-3 font-mono">
                <span>{selectedSourceForDrawer.type}</span>
                <span>•</span>
                <span className="text-emerald-400 font-bold">✓ {selectedSourceForDrawer.status}</span>
                <span>•</span>
                <span>Last: {selectedSourceForDrawer.lastReceived}</span>
              </div>
            </div>

            {/* Content Body */}
            <div className="p-6 flex-1 overflow-y-auto space-y-6 text-xs">
              
              {/* Operational Metrics */}
              <div className="grid grid-cols-2 gap-3 bg-slate-50 p-4 rounded-xl border border-slate-200">
                <div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase">Event Types</div>
                  <div className="text-lg font-black text-slate-900 mt-0.5">{selectedSourceForDrawer.eventTypesCount} types</div>
                </div>
                <div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase">Volume / 24h</div>
                  <div className="text-lg font-black text-emerald-600 mt-0.5">{selectedSourceForDrawer.volume24h}</div>
                </div>
              </div>

              {/* Tracked Event Types */}
              <div className="space-y-2">
                <div className="text-[10px] font-extrabold text-slate-500 uppercase tracking-wider">
                  Active Tracked Event Types
                </div>
                <div className="space-y-1.5 bg-slate-50 p-3 rounded-xl border border-slate-200">
                  {selectedSourceForDrawer.trackedEvents.map((evtName, i) => (
                    <div key={i} className="flex items-center justify-between bg-white p-2.5 rounded-lg border border-slate-200/80 font-bold text-slate-900">
                      <span className="flex items-center space-x-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                        <span>{evtName}</span>
                      </span>
                      <span className="text-[10px] font-mono text-slate-400">Ingesting</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Health Specs */}
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-2">
                <div className="text-[10px] font-extrabold text-slate-500 uppercase tracking-wider">
                  Operational Health Metrics
                </div>
                <div className="space-y-2 text-xs">
                  <div className="flex items-center justify-between bg-white p-2.5 rounded-lg border border-slate-200/80">
                    <span className="text-slate-600 font-medium">Schema Validation Pass Rate</span>
                    <span className="font-black text-emerald-600">{selectedSourceForDrawer.schemaValidation}</span>
                  </div>
                  <div className="flex items-center justify-between bg-white p-2.5 rounded-lg border border-slate-200/80">
                    <span className="text-slate-600 font-medium">Identity Resolution Rate</span>
                    <span className="font-black text-indigo-600">{selectedSourceForDrawer.identityResolution}</span>
                  </div>
                  <div className="flex items-center justify-between bg-white p-2.5 rounded-lg border border-slate-200/80">
                    <span className="text-slate-600 font-medium">Last Ingestion Error</span>
                    <span className="font-bold text-slate-400">{selectedSourceForDrawer.lastError}</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Footer */}
            <div className="p-4 border-t border-slate-200 bg-slate-50 flex items-center justify-between">
              <button
                onClick={() => {
                  setSelectedSourceForDrawer(null);
                  if (onNavigateToDataSources) onNavigateToDataSources();
                }}
                className="w-full py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold text-xs rounded-xl shadow-xs flex items-center justify-center space-x-1.5 cursor-pointer"
              >
                <span>Manage in Data Sources</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>
      )}

      {/* ==================================================
          7. MODAL: "+ CREATE EVENT DEFINITION" WORKFLOW
      ================================================== */}
      {isCreateModalOpen && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs z-50 flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl border border-slate-200 max-w-xl w-full p-6 space-y-5 shadow-2xl animate-in zoom-in-95 duration-150 max-h-[90vh] overflow-y-auto">
            
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold">
                  <Plus className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-lg font-black text-slate-900">Create Event Definition</h3>
                  <p className="text-xs text-slate-500 font-medium">Define a new customer behavioral event schema and properties.</p>
                </div>
              </div>
              <button 
                onClick={() => setIsCreateModalOpen(false)}
                className="text-slate-400 hover:text-slate-700 p-1 rounded-lg cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveEventDefinition} className="space-y-4 text-xs font-medium">
              
              {/* Event Name & Key */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-slate-700 font-bold">Event Name</label>
                  <input 
                    type="text"
                    placeholder="e.g. Viewed Pricing Page"
                    value={newEventTitle}
                    onChange={(e) => {
                      const title = e.target.value;
                      const key = title.toLowerCase().replace(/[^a-z0-9]+/g, '_').replace(/^_+|_+$/g, '');
                      setNewEventTitle(title);
                      setNewEventKey(key);
                    }}
                    className="w-full px-3 py-2 border border-slate-300 rounded-xl font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    required
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-slate-700 font-bold">Event Key (System ID)</label>
                  <input 
                    type="text"
                    placeholder="e.g. pricing_page_viewed"
                    value={newEventKey}
                    onChange={(e) => setNewEventKey(e.target.value)}
                    className="w-full px-3 py-2 border border-slate-300 rounded-xl font-mono text-slate-900 bg-slate-50 focus:outline-none"
                    required
                  />
                </div>
              </div>

              {/* Category & Description */}
              <div className="space-y-1">
                <label className="text-slate-700 font-bold">Category</label>
                <select
                  value={newEventCategory}
                  onChange={(e) => setNewEventCategory(e.target.value)}
                  className="w-full px-3 py-2 border border-slate-300 rounded-xl font-semibold text-slate-900 focus:outline-none cursor-pointer"
                >
                  <option value="Web & Product">Web & Product</option>
                  <option value="Content & Lead Gen">Content & Lead Gen</option>
                  <option value="Events & Webinars">Events & Webinars</option>
                  <option value="Interactive Tools">Interactive Tools</option>
                  <option value="Product & API Integration">Product & API Integration</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-slate-700 font-bold">Description</label>
                <textarea 
                  rows={2}
                  placeholder="Triggered when an identified account/contact views a pricing page..."
                  value={newEventDescription}
                  onChange={(e) => setNewEventDescription(e.target.value)}
                  className="w-full px-3 py-2 border border-slate-300 rounded-xl font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              {/* Dynamic Properties Builder */}
              <div className="space-y-2 pt-2 border-t border-slate-100">
                <div className="flex items-center justify-between">
                  <label className="text-slate-800 font-extrabold uppercase text-[10px] tracking-wider">
                    Properties Schema Builder
                  </label>
                  <button
                    type="button"
                    onClick={handleAddPropertyRow}
                    className="text-indigo-600 hover:text-indigo-800 font-bold text-xs flex items-center space-x-1 cursor-pointer"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>Add property</span>
                  </button>
                </div>

                <div className="space-y-2 bg-slate-50 p-3 rounded-xl border border-slate-200">
                  {newEventProperties.map((prop, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <input 
                        type="text"
                        placeholder="property_name"
                        value={prop.name}
                        onChange={(e) => {
                          const updated = [...newEventProperties];
                          updated[idx].name = e.target.value;
                          setNewEventProperties(updated);
                        }}
                        className="flex-1 px-2.5 py-1.5 bg-white border border-slate-300 rounded-lg text-xs font-mono text-slate-900 focus:outline-none"
                      />

                      <select
                        value={prop.type}
                        onChange={(e) => {
                          const updated = [...newEventProperties];
                          updated[idx].type = e.target.value;
                          setNewEventProperties(updated);
                        }}
                        className="px-2.5 py-1.5 bg-white border border-slate-300 rounded-lg text-xs font-semibold text-slate-800 focus:outline-none"
                      >
                        <option value="String">String</option>
                        <option value="Number">Number</option>
                        <option value="Boolean">Boolean</option>
                        <option value="Array">Array</option>
                      </select>

                      <select
                        value={prop.required ? "Required" : "Optional"}
                        onChange={(e) => {
                          const updated = [...newEventProperties];
                          updated[idx].required = e.target.value === "Required";
                          setNewEventProperties(updated);
                        }}
                        className="px-2.5 py-1.5 bg-white border border-slate-300 rounded-lg text-xs font-semibold text-slate-800 focus:outline-none"
                      >
                        <option value="Required">Required</option>
                        <option value="Optional">Optional</option>
                      </select>

                      <button 
                        type="button"
                        onClick={() => handleRemovePropertyRow(idx)}
                        className="p-1.5 text-slate-400 hover:text-red-600 rounded-lg cursor-pointer"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Identity Resolution Badge */}
              <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 flex items-center justify-between">
                <div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase">Identity Resolution Pathway</div>
                  <div className="font-extrabold text-slate-900 text-xs mt-0.5 flex items-center space-x-2">
                    <span>Contact ID</span>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                    <span className="text-indigo-600">Account ID</span>
                  </div>
                </div>
                <span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 text-[10px] font-extrabold rounded">
                  Resolved
                </span>
              </div>

              {/* Used For Checkboxes */}
              <div className="space-y-1 pt-1 border-t border-slate-100">
                <label className="text-slate-800 font-extrabold uppercase text-[10px] tracking-wider">
                  Used For
                </label>
                <div className="flex items-center space-x-6 text-xs font-bold text-slate-800">
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input 
                      type="checkbox"
                      checked={newUseForAiSignals}
                      onChange={(e) => setNewUseForAiSignals(e.target.checked)}
                      className="rounded text-indigo-600 focus:ring-indigo-500"
                    />
                    <span>AI Signals</span>
                  </label>

                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input 
                      type="checkbox"
                      checked={newUseForSegmentation}
                      onChange={(e) => setNewUseForSegmentation(e.target.checked)}
                      className="rounded text-indigo-600 focus:ring-indigo-500"
                    />
                    <span>Segmentation</span>
                  </label>
                </div>
              </div>

              {/* Modal Actions */}
              <div className="pt-3 border-t border-slate-100 flex items-center justify-end space-x-2">
                <button
                  type="button"
                  onClick={() => setIsCreateModalOpen(false)}
                  className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs rounded-xl cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold text-xs rounded-xl shadow-xs cursor-pointer flex items-center space-x-1"
                >
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>Save Event Definition</span>
                </button>
              </div>

            </form>

          </div>
        </div>
      )}

    </div>
  );
}
