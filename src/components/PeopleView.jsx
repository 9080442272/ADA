import React, { useState } from 'react';
import { 
  Users, 
  Send, 
  Ban, 
  Search, 
  Filter, 
  ChevronDown, 
  Upload, 
  Plus, 
  MoreHorizontal, 
  SlidersHorizontal,
  ChevronLeft,
  ChevronRight,
  Settings,
  Mail,
  Phone,
  MessageCircle,
  CheckCircle2,
  Sparkles,
  ArrowUpRight,
  Building2
} from 'lucide-react';

export default function PeopleView({ customer, onSelectCustomer, onShowToast }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeDirectoryTab, setActiveDirectoryTab] = useState("All customers");
  const [selectedSegmentFilter, setSelectedSegmentFilter] = useState("All segments");
  const [selectedTagFilter, setSelectedTagFilter] = useState("All tags");
  const [selectedStatusFilter, setSelectedStatusFilter] = useState("Contact status");
  const [selectedActivityFilter, setSelectedActivityFilter] = useState("Last activity");

  // Sample Customer Database (125,482 customers directory)
  const customersList = [
    {
      id: "ACC-89420-EU",
      name: "TechGear Europe",
      contactName: "Antoine Laurent",
      email: "antoine.l@techgear.fr",
      phone: "+33 1 42 68 55 00",
      channel: "email",
      segments: [{ label: "High intent", bg: "bg-purple-100 text-purple-800 border-purple-200" }, { label: "myPricing", bg: "bg-indigo-100 text-indigo-800 border-indigo-200" }],
      tags: ["Existing Customer", "Enterprise"],
      lastActivityTime: "2 hours ago",
      lastActivityEvent: "Product viewed",
      status: "Reachable",
      statusBadge: "bg-emerald-100 text-emerald-800 border-emerald-300",
      isFeatured: true
    },
    {
      id: "CUST-001234",
      name: "Maya Perera",
      contactName: "Maya Perera",
      email: "maya@email.com",
      phone: "+94 77 123 4567",
      channel: "whatsapp",
      segments: [{ label: "VIP", bg: "bg-slate-200 text-slate-800 border-slate-300" }, { label: "Active", bg: "bg-slate-200 text-slate-800 border-slate-300" }],
      tags: ["premium"],
      extraTagsCount: 2,
      lastActivityTime: "4 minutes ago",
      lastActivityEvent: "Product viewed",
      status: "Reachable",
      statusBadge: "bg-emerald-100 text-emerald-800 border-emerald-300"
    },
    {
      id: "CUST-001235",
      name: "Daniel Wong",
      contactName: "Daniel Wong",
      email: "daniel@company.com",
      phone: "+65 9123 4567",
      channel: "phone",
      segments: [{ label: "Trial", bg: "bg-slate-200 text-slate-800 border-slate-300" }],
      tags: ["onboarding"],
      lastActivityTime: "2 hours ago",
      lastActivityEvent: "Conversation started",
      status: "Do not contact",
      statusBadge: "bg-rose-100 text-rose-800 border-rose-300"
    },
    {
      id: "CUST-001236",
      name: "Sarah Chen",
      contactName: "Sarah Chen",
      email: "sarah@email.com",
      phone: "+65 8123 9876",
      channel: "whatsapp",
      segments: [{ label: "High intent", bg: "bg-slate-200 text-slate-800 border-slate-300" }, { label: "Active", bg: "bg-slate-200 text-slate-800 border-slate-300" }],
      tags: ["product-a"],
      extraTagsCount: 1,
      lastActivityTime: "1 day ago",
      lastActivityEvent: "Bot interaction",
      status: "Reachable",
      statusBadge: "bg-emerald-100 text-emerald-800 border-emerald-300"
    },
    {
      id: "CUST-001237",
      name: "Arjun Patel",
      contactName: "Arjun Patel",
      email: "arjun@email.com",
      phone: "+91 98765 43210",
      channel: "phone",
      segments: [{ label: "Loyal", bg: "bg-slate-200 text-slate-800 border-slate-300" }, { label: "Repeat", bg: "bg-slate-200 text-slate-800 border-slate-300" }],
      tags: ["loyalty", "high-value"],
      lastActivityTime: "2 days ago",
      lastActivityEvent: "Purchase completed",
      status: "Reachable",
      statusBadge: "bg-emerald-100 text-emerald-800 border-emerald-300"
    },
    {
      id: "CUST-001238",
      name: "Emily Rogers",
      contactName: "Emily Rogers",
      email: "emily@email.com",
      phone: "+1 415 123 9876",
      channel: "whatsapp",
      segments: [{ label: "New", bg: "bg-slate-200 text-slate-800 border-slate-300" }],
      tags: ["trial", "webinar"],
      lastActivityTime: "3 days ago",
      lastActivityEvent: "Subscribed to campaign",
      status: "Reachable",
      statusBadge: "bg-emerald-100 text-emerald-800 border-emerald-300"
    },
    {
      id: "CUST-001239",
      name: "Ravi Kumar",
      contactName: "Ravi Kumar",
      email: "ravi@email.com",
      phone: "+91 99876 54321",
      channel: "phone",
      segments: [{ label: "Inactive", bg: "bg-slate-200 text-slate-800 border-slate-300" }],
      tags: ["churn-risk"],
      lastActivityTime: "5 days ago",
      lastActivityEvent: "Last seen",
      status: "Unreachable",
      statusBadge: "bg-amber-100 text-amber-800 border-amber-300"
    },
    {
      id: "CUST-001240",
      name: "Isabella Martin",
      contactName: "Isabella Martin",
      email: "isabella@email.com",
      phone: "+61 412 345 678",
      channel: "whatsapp",
      segments: [{ label: "VIP", bg: "bg-slate-200 text-slate-800 border-slate-300" }, { label: "High intent", bg: "bg-slate-200 text-slate-800 border-slate-300" }],
      tags: ["premium", "product-b"],
      lastActivityTime: "1 week ago",
      lastActivityEvent: "Email opened",
      status: "Reachable",
      statusBadge: "bg-emerald-100 text-emerald-800 border-emerald-300"
    },
    {
      id: "CUST-001241",
      name: "Kenji Tanaka",
      contactName: "Kenji Tanaka",
      email: "kenji@email.com",
      phone: "+81 90 1234 5678",
      channel: "phone",
      segments: [{ label: "Active", bg: "bg-slate-200 text-slate-800 border-slate-300" }],
      tags: ["engaged"],
      lastActivityTime: "1 week ago",
      lastActivityEvent: "Conversation ended",
      status: "Reachable",
      statusBadge: "bg-emerald-100 text-emerald-800 border-emerald-300"
    }
  ];

  // Filtered List
  const filteredCustomers = customersList.filter(c => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    return (
      c.name.toLowerCase().includes(q) ||
      c.email.toLowerCase().includes(q) ||
      c.phone.toLowerCase().includes(q) ||
      c.id.toLowerCase().includes(q)
    );
  });

  return (
    <div className="space-y-5 animate-in fade-in duration-200">
      
      {/* 1. BREADCRUMBS & TOP HEADER */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="text-xs text-slate-500 font-medium flex items-center space-x-1.5">
            <span className="hover:text-slate-800 cursor-pointer">Customer 360</span>
            <span>›</span>
            <span className="text-slate-900 font-bold">People</span>
          </div>
          <h1 className="text-2xl font-black text-slate-900 tracking-tight mt-1">
            People
          </h1>
          <p className="text-xs text-slate-500 mt-0.5">
            View and manage all your customers in one place. Unify data, understand behavior, and take action across CAIP.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center space-x-2.5 shrink-0">
          <button 
            onClick={() => onShowToast && onShowToast("Opened customer CSV import wizard!")}
            className="px-4 py-2 bg-white hover:bg-slate-50 text-slate-700 font-extrabold text-xs rounded-xl border border-slate-300 shadow-2xs flex items-center space-x-1.5 cursor-pointer transition-all"
          >
            <Upload className="w-3.5 h-3.5 text-slate-500" />
            <span>Import customers</span>
          </button>

          <button 
            onClick={() => onShowToast && onShowToast("Opened Add New Customer dialog!")}
            className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white font-extrabold text-xs rounded-xl shadow-sm flex items-center space-x-1.5 cursor-pointer transition-all"
          >
            <Plus className="w-4 h-4 text-white" />
            <span>Add customer</span>
          </button>
        </div>
      </div>

      {/* 2. 4 TOP KPI METRIC CARDS (Pixel-perfect matches screenshot) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        
        {/* Total Customers */}
        <div className="bg-white rounded-2xl border border-slate-200/90 shadow-2xs p-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-700">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <div className="text-2xl font-extrabold text-slate-900 tracking-tight">125,482</div>
              <div className="text-xs font-semibold text-slate-500">Total customers</div>
            </div>
          </div>
        </div>

        {/* Reachable */}
        <div className="bg-white rounded-2xl border border-slate-200/90 shadow-2xs p-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-700">
              <Send className="w-5 h-5" />
            </div>
            <div>
              <div className="text-2xl font-extrabold text-slate-900 tracking-tight">92,341</div>
              <div className="text-xs font-semibold text-slate-500">Reachable</div>
            </div>
          </div>
          <span className="px-2 py-0.5 text-xs font-extrabold bg-slate-100 text-slate-700 rounded-md border border-slate-200">
            73%
          </span>
        </div>

        {/* Do Not Contact */}
        <div className="bg-white rounded-2xl border border-slate-200/90 shadow-2xs p-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-700">
              <Ban className="w-5 h-5" />
            </div>
            <div>
              <div className="text-2xl font-extrabold text-slate-900 tracking-tight">3,892</div>
              <div className="text-xs font-semibold text-slate-500">Do not contact</div>
            </div>
          </div>
          <span className="px-2 py-0.5 text-xs font-extrabold bg-slate-100 text-slate-700 rounded-md border border-slate-200">
            3%
          </span>
        </div>

        {/* In Active Segments */}
        <div className="bg-white rounded-2xl border border-slate-200/90 shadow-2xs p-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-700">
              <Users className="w-5 h-5 text-indigo-600" />
            </div>
            <div>
              <div className="text-2xl font-extrabold text-slate-900 tracking-tight">1,284</div>
              <div className="text-xs font-semibold text-slate-500">In active segments</div>
            </div>
          </div>
          <span className="px-2 py-0.5 text-xs font-extrabold bg-slate-100 text-slate-700 rounded-md border border-slate-200">
            24%
          </span>
        </div>

      </div>

      {/* 3. SEARCH & FILTERS CONTROL BAR */}
      <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-4 space-y-4">
        
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3">
          
          {/* Search Bar */}
          <div className="relative flex-1 min-w-[280px]">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input 
              type="text"
              placeholder="Search by name, email, phone or customer ID..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Filter Dropdowns */}
          <div className="flex items-center flex-wrap gap-2 text-xs font-semibold shrink-0">
            
            <select 
              value={selectedSegmentFilter}
              onChange={(e) => setSelectedSegmentFilter(e.target.value)}
              className="px-3 py-2 bg-white border border-slate-200 rounded-xl text-slate-700 focus:outline-none cursor-pointer"
            >
              <option value="All segments">All segments</option>
              <option value="High intent">High intent</option>
              <option value="VIP">VIP</option>
              <option value="Active">Active</option>
              <option value="Trial">Trial</option>
            </select>

            <select 
              value={selectedTagFilter}
              onChange={(e) => setSelectedTagFilter(e.target.value)}
              className="px-3 py-2 bg-white border border-slate-200 rounded-xl text-slate-700 focus:outline-none cursor-pointer"
            >
              <option value="All tags">All tags</option>
              <option value="premium">premium</option>
              <option value="onboarding">onboarding</option>
              <option value="high-value">high-value</option>
              <option value="churn-risk">churn-risk</option>
            </select>

            <select 
              value={selectedStatusFilter}
              onChange={(e) => setSelectedStatusFilter(e.target.value)}
              className="px-3 py-2 bg-white border border-slate-200 rounded-xl text-slate-700 focus:outline-none cursor-pointer"
            >
              <option value="Contact status">Contact status</option>
              <option value="Reachable">Reachable</option>
              <option value="Do not contact">Do not contact</option>
              <option value="Unreachable">Unreachable</option>
            </select>

            <select 
              value={selectedActivityFilter}
              onChange={(e) => setSelectedActivityFilter(e.target.value)}
              className="px-3 py-2 bg-white border border-slate-200 rounded-xl text-slate-700 focus:outline-none cursor-pointer"
            >
              <option value="Last activity">Last activity</option>
              <option value="2 hours ago">Last 2 hours</option>
              <option value="1 day ago">Last 24 hours</option>
              <option value="7 days ago">Last 7 days</option>
            </select>

            <button className="px-3 py-2 bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200 rounded-xl flex items-center space-x-1.5 cursor-pointer">
              <SlidersHorizontal className="w-3.5 h-3.5 text-slate-500" />
              <span>More filters</span>
            </button>

          </div>

        </div>

        {/* 4. DIRECTORY SUB-TABS & COLUMN CUSTOMIZER */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-slate-100 pt-3 text-xs">
          
          <div className="flex items-center space-x-6 font-bold overflow-x-auto">
            {[
              { id: "All customers", label: "All customers (125,482)" },
              { id: "Recently added", label: "Recently added (3,241)" },
              { id: "Recently active", label: "Recently active (12,492)" },
              { id: "Duplicates", label: "Duplicates (26)" }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveDirectoryTab(tab.id)}
                className={`pb-1 transition-all cursor-pointer whitespace-nowrap ${
                  activeDirectoryTab === tab.id
                    ? 'text-slate-900 border-b-2 border-slate-900'
                    : 'text-slate-400 hover:text-slate-700'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <button className="text-xs font-bold text-slate-500 hover:text-slate-800 flex items-center space-x-1 shrink-0 cursor-pointer">
            <Settings className="w-3.5 h-3.5 text-slate-400" />
            <span>Customize columns</span>
          </button>

        </div>

      </div>

      {/* 5. CUSTOMERS DIRECTORY TABLE (Matching screenshot format) */}
      <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            
            {/* Table Header */}
            <thead>
              <tr className="bg-slate-50/80 border-b border-slate-200/80 text-[11px] font-extrabold text-slate-500 uppercase tracking-wider">
                <th className="py-3 px-4 w-10">
                  <input type="checkbox" className="rounded border-slate-300 text-indigo-600 focus:ring-indigo-500" />
                </th>
                <th className="py-3 px-4 min-w-[180px]">Customer</th>
                <th className="py-3 px-4 min-w-[200px]">Contact</th>
                <th className="py-3 px-4 min-w-[140px]">Segments</th>
                <th className="py-3 px-4 min-w-[160px]">Tags</th>
                <th className="py-3 px-4 min-w-[160px]">Last activity ↕</th>
                <th className="py-3 px-4 min-w-[120px]">Status</th>
                <th className="py-3 px-4 w-10 text-right"></th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody className="divide-y divide-slate-100 font-medium text-slate-800">
              {filteredCustomers.map((cust) => (
                <tr 
                  key={cust.id}
                  onClick={() => {
                    onSelectCustomer(cust);
                    if (onShowToast) onShowToast(`Loading Account 360 view for ${cust.name}...`);
                  }}
                  className={`hover:bg-indigo-50/40 transition-colors cursor-pointer group ${
                    cust.isFeatured ? 'bg-indigo-50/20 font-semibold' : ''
                  }`}
                >
                  
                  {/* Checkbox */}
                  <td className="py-3.5 px-4" onClick={(e) => e.stopPropagation()}>
                    <input type="checkbox" className="rounded border-slate-300 text-indigo-600 focus:ring-indigo-500" />
                  </td>

                  {/* Customer Avatar & Name */}
                  <td className="py-3.5 px-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-full bg-slate-200 text-slate-600 font-bold flex items-center justify-center text-xs shrink-0 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                        {cust.name.substring(0, 2).toUpperCase()}
                      </div>
                      <div>
                        <div className="font-extrabold text-slate-900 group-hover:text-indigo-600 flex items-center space-x-1.5">
                          <span>{cust.name}</span>
                          {cust.isFeatured && (
                            <span className="px-1.5 py-0.2 bg-indigo-600 text-white text-[9px] font-extrabold rounded">
                              ACCOUNT 360
                            </span>
                          )}
                        </div>
                        <div className="text-[11px] text-slate-400 font-mono">ID: {cust.id}</div>
                      </div>
                    </div>
                  </td>

                  {/* Contact Methods */}
                  <td className="py-3.5 px-4 space-y-1">
                    <div className="flex items-center space-x-1.5 text-slate-700 text-xs">
                      <Mail className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span className="truncate">{cust.email}</span>
                    </div>
                    <div className="flex items-center space-x-1.5 text-slate-500 text-[11px] font-mono">
                      {cust.channel === "whatsapp" ? (
                        <MessageCircle className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                      ) : (
                        <Phone className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      )}
                      <span>{cust.phone}</span>
                    </div>
                  </td>

                  {/* Segments */}
                  <td className="py-3.5 px-4">
                    <div className="flex items-center flex-wrap gap-1 text-[11px]">
                      {cust.segments.map((seg, i) => (
                        <span key={i} className={`px-2 py-0.5 rounded-md font-bold text-[10px] border ${seg.bg}`}>
                          {seg.label}
                        </span>
                      ))}
                    </div>
                  </td>

                  {/* Tags */}
                  <td className="py-3.5 px-4">
                    <div className="flex items-center flex-wrap gap-1 text-[11px]">
                      {cust.tags.map((tag, i) => (
                        <span key={i} className="px-2 py-0.5 bg-slate-100 text-slate-700 border border-slate-200 rounded-md font-semibold text-[10px]">
                          {tag}
                        </span>
                      ))}
                      {cust.extraTagsCount && (
                        <span className="px-1.5 py-0.5 bg-slate-100 text-slate-500 font-bold text-[10px] rounded-md">
                          +{cust.extraTagsCount}
                        </span>
                      )}
                    </div>
                  </td>

                  {/* Last Activity */}
                  <td className="py-3.5 px-4">
                    <div className="font-extrabold text-slate-900">{cust.lastActivityTime}</div>
                    <div className="text-[11px] text-slate-500 font-normal">{cust.lastActivityEvent}</div>
                  </td>

                  {/* Status */}
                  <td className="py-3.5 px-4">
                    <span className={`px-2.5 py-1 text-[10px] font-extrabold rounded-md border inline-block ${cust.statusBadge}`}>
                      {cust.status}
                    </span>
                  </td>

                  {/* More Actions Menu */}
                  <td className="py-3.5 px-4 text-right" onClick={(e) => e.stopPropagation()}>
                    <button 
                      onClick={() => onSelectCustomer(cust)}
                      className="p-1 hover:bg-slate-100 rounded-lg text-slate-400 hover:text-slate-700 cursor-pointer"
                    >
                      <MoreHorizontal className="w-4 h-4" />
                    </button>
                  </td>

                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* 6. PAGINATION FOOTER */}
        <div className="p-4 border-t border-slate-100 bg-slate-50/50 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-semibold text-slate-600">
          <div>
            Showing 1–{filteredCustomers.length} of 125,482 customers
          </div>

          <div className="flex items-center space-x-1">
            <button className="w-8 h-8 rounded-lg border border-slate-200 bg-white flex items-center justify-center text-slate-400 hover:text-slate-700 cursor-pointer">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button className="w-8 h-8 rounded-lg bg-slate-900 text-white font-bold flex items-center justify-center">
              1
            </button>
            <button className="w-8 h-8 rounded-lg border border-slate-200 bg-white flex items-center justify-center text-slate-700 hover:bg-slate-50 cursor-pointer">
              2
            </button>
            <button className="w-8 h-8 rounded-lg border border-slate-200 bg-white flex items-center justify-center text-slate-700 hover:bg-slate-50 cursor-pointer">
              3
            </button>
            <button className="w-8 h-8 rounded-lg border border-slate-200 bg-white flex items-center justify-center text-slate-700 hover:bg-slate-50 cursor-pointer">
              4
            </button>
            <button className="w-8 h-8 rounded-lg border border-slate-200 bg-white flex items-center justify-center text-slate-700 hover:bg-slate-50 cursor-pointer">
              5
            </button>
            <span className="px-1 text-slate-400">...</span>
            <button className="px-2.5 h-8 rounded-lg border border-slate-200 bg-white flex items-center justify-center text-slate-700 hover:bg-slate-50 cursor-pointer">
              15,686
            </button>
            <button className="w-8 h-8 rounded-lg border border-slate-200 bg-white flex items-center justify-center text-slate-700 hover:bg-slate-50 cursor-pointer">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>

    </div>
  );
}
