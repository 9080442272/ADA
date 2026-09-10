import React, { useState } from 'react';
import { 
  Tag, 
  Plus, 
  CheckCircle2, 
  XCircle, 
  Mail, 
  MessageSquare, 
  PhoneCall, 
  ChevronRight, 
  X,
  Search,
  Filter,
  Users,
  ChevronDown,
  Check,
  Shield,
  ArrowRight,
  Clock,
  MoreHorizontal,
  ChevronLeft
} from 'lucide-react';

export default function TagsDncView({ customer, onShowToast }) {
  // 1. Tags List (GDPR Verified removed per instructions)
  const [tags, setTags] = useState([
    "VIP Account", 
    "High Intent", 
    "Pricing Interest", 
    "Enterprise Retailer", 
    "myFulfillment Customer"
  ]);
  const [newTagInput, setNewTagInput] = useState("");

  // 2. Contacts List Data (Matching screenshot 1:1)
  const [contactsList, setContactsList] = useState([
    {
      id: "cnt-1",
      initials: "AL",
      initialsBg: "bg-indigo-100 text-indigo-700",
      name: "Antoine Laurent",
      email: "antoine.laurent@techgear.eu",
      role: "Head of E-Commerce",
      emailStatus: "Subscribed",
      whatsappStatus: "Subscribed",
      smsStatus: "Do Not Contact",
      lastActivity: "Today 10:42 AM",
      preferences: {
        email: {
          status: "Subscribed",
          subtext: "Verified double opt-in. High open rate (82%).",
          source: "Source: GDPR Consent Form",
          updated: "Updated: 12 min ago"
        },
        whatsapp: {
          status: "Subscribed",
          subtext: "Active conversation consent granted.",
          source: "Source: Direct WhatsApp Opt-in",
          updated: "Updated: 1 day ago"
        },
        sms: {
          status: "Do Not Contact",
          subtext: "Customer opted out of marketing SMS.",
          source: "Source: Preference Center",
          updated: "Updated: Mar 4, 2026"
        }
      },
      consentHistory: [
        { title: "Email subscription confirmed", time: "Mar 1, 2026 • 10:24 AM", source: "GDPR Form", type: "opt-in" },
        { title: "WhatsApp opt-in recorded", time: "Feb 28, 2026 • 02:15 PM", source: "WhatsApp", type: "opt-in" },
        { title: "SMS opt-out requested", time: "Feb 20, 2026 • 11:03 AM", source: "Preference Center", type: "opt-out" }
      ]
    },
    {
      id: "cnt-2",
      initials: "SM",
      initialsBg: "bg-indigo-100 text-indigo-700",
      name: "Sophie Martin",
      email: "sophie.martin@techgear.eu",
      role: "Marketing Manager",
      emailStatus: "Subscribed",
      whatsappStatus: "Not Set",
      smsStatus: "Subscribed",
      lastActivity: "2 days ago Mar 2, 2026",
      preferences: {
        email: {
          status: "Subscribed",
          subtext: "Verified marketing communications consent.",
          source: "Source: Web Form",
          updated: "Updated: 2 days ago"
        },
        whatsapp: {
          status: "Not Set",
          subtext: "No consent record on file.",
          source: "Source: Not Recorded",
          updated: "Updated: --"
        },
        sms: {
          status: "Subscribed",
          subtext: "SMS updates enabled.",
          source: "Source: Event Registration",
          updated: "Updated: 1 week ago"
        }
      },
      consentHistory: [
        { title: "Email subscription confirmed", time: "Mar 2, 2026 • 09:10 AM", source: "Web Form", type: "opt-in" },
        { title: "SMS opt-in recorded", time: "Feb 25, 2026 • 04:30 PM", source: "Event Reg", type: "opt-in" }
      ]
    },
    {
      id: "cnt-3",
      initials: "MD",
      initialsBg: "bg-indigo-100 text-indigo-700",
      name: "Marc Dubois",
      email: "marc.dubois@techgear.eu",
      role: "Operations Lead",
      emailStatus: "Subscribed",
      whatsappStatus: "Do Not Contact",
      smsStatus: "Do Not Contact",
      lastActivity: "5 days ago Feb 27, 2026",
      preferences: {
        email: {
          status: "Subscribed",
          subtext: "Transactional and operational updates authorized.",
          source: "Source: Account Portal",
          updated: "Updated: 5 days ago"
        },
        whatsapp: {
          status: "Do Not Contact",
          subtext: "Messaging opt-out requested.",
          source: "Source: Support Ticket",
          updated: "Updated: Feb 27, 2026"
        },
        sms: {
          status: "Do Not Contact",
          subtext: "SMS suppressed.",
          source: "Source: Preference Center",
          updated: "Updated: Jan 14, 2026"
        }
      },
      consentHistory: [
        { title: "WhatsApp opt-out recorded", time: "Feb 27, 2026 • 11:15 AM", source: "Support Ticket", type: "opt-out" },
        { title: "SMS opt-out requested", time: "Jan 14, 2026 • 03:20 PM", source: "Preference Center", type: "opt-out" }
      ]
    },
    {
      id: "cnt-4",
      initials: "EC",
      initialsBg: "bg-blue-100 text-blue-700",
      name: "Elena Costa",
      email: "elena.costa@techgear.eu",
      role: "Sales Director",
      emailStatus: "Subscribed",
      whatsappStatus: "Subscribed",
      smsStatus: "Not Set",
      lastActivity: "1 week ago Feb 20, 2026",
      preferences: {
        email: {
          status: "Subscribed",
          subtext: "Executive newsletter & product announcements.",
          source: "Source: Sales Meeting",
          updated: "Updated: Feb 20, 2026"
        },
        whatsapp: {
          status: "Subscribed",
          subtext: "Direct messaging consent active.",
          source: "Source: Direct Sales Consent",
          updated: "Updated: Feb 20, 2026"
        },
        sms: {
          status: "Not Set",
          subtext: "No consent record on file.",
          source: "Source: Not Recorded",
          updated: "Updated: --"
        }
      },
      consentHistory: [
        { title: "Email consent confirmed", time: "Feb 20, 2026 • 02:00 PM", source: "Sales Meeting", type: "opt-in" },
        { title: "WhatsApp opt-in recorded", time: "Feb 20, 2026 • 02:05 PM", source: "Direct Consent", type: "opt-in" }
      ]
    },
    {
      id: "cnt-5",
      initials: "JR",
      initialsBg: "bg-blue-100 text-blue-700",
      name: "James Rogers",
      email: "james.rogers@techgear.eu",
      role: "IT Manager",
      emailStatus: "Not Set",
      whatsappStatus: "Subscribed",
      smsStatus: "Subscribed",
      lastActivity: "1 week ago Feb 18, 2026",
      preferences: {
        email: {
          status: "Not Set",
          subtext: "No marketing email consent record.",
          source: "Source: Not Recorded",
          updated: "Updated: --"
        },
        whatsapp: {
          status: "Subscribed",
          subtext: "Technical alerts & API updates authorized.",
          source: "Source: Developer Portal",
          updated: "Updated: Feb 18, 2026"
        },
        sms: {
          status: "Subscribed",
          subtext: "System downtime SMS notifications.",
          source: "Source: Developer Portal",
          updated: "Updated: Feb 18, 2026"
        }
      },
      consentHistory: [
        { title: "WhatsApp technical alerts opt-in", time: "Feb 18, 2026 • 10:12 AM", source: "Dev Portal", type: "opt-in" },
        { title: "SMS system alert opt-in", time: "Feb 18, 2026 • 10:14 AM", source: "Dev Portal", type: "opt-in" }
      ]
    }
  ]);

  // Selected Contact for Right Drawer / Panel (Default: null - opens on row click)
  const [selectedContact, setSelectedContact] = useState(null);
  const [activePanelTab, setActivePanelTab] = useState("Preferences");
  
  // Table Filters
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRoleFilter, setSelectedRoleFilter] = useState("All Contacts (8)");

  // Edit Modal State
  const [editingChannel, setEditingChannel] = useState(null); // 'email' | 'whatsapp' | 'sms'
  const [editingStatus, setEditingStatus] = useState("Subscribed");

  // Add Tag Handler
  const handleAddTag = (e) => {
    e.preventDefault();
    if (newTagInput.trim() && !tags.includes(newTagInput.trim())) {
      setTags([...tags, newTagInput.trim()]);
      if (onShowToast) onShowToast(`Added tag '${newTagInput.trim()}' to TechGear Europe!`);
      setNewTagInput("");
    }
  };

  // Remove Tag Handler
  const handleRemoveTag = (tagToRemove) => {
    setTags(tags.filter(t => t !== tagToRemove));
    if (onShowToast) onShowToast(`Removed tag '${tagToRemove}'`);
  };

  // Filter Contacts
  const filteredContacts = contactsList.filter(c => {
    const matchesSearch = c.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          c.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          c.role.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesSearch;
  });

  // Save Channel Preference
  const handleSaveChannelPreference = () => {
    if (!editingChannel || !selectedContact) return;

    const updatedPreferences = { ...selectedContact.preferences };
    updatedPreferences[editingChannel] = {
      ...updatedPreferences[editingChannel],
      status: editingStatus,
      updated: "Updated: Just now"
    };

    const newHistory = [
      {
        title: `${editingChannel.toUpperCase()} preference updated to ${editingStatus}`,
        time: "Just now",
        source: "Preference Center",
        type: editingStatus === "Subscribed" ? "opt-in" : "opt-out"
      },
      ...selectedContact.consentHistory
    ];

    const updatedContact = {
      ...selectedContact,
      [`${editingChannel}Status`]: editingStatus,
      preferences: updatedPreferences,
      consentHistory: newHistory
    };

    setSelectedContact(updatedContact);
    setContactsList(contactsList.map(c => c.id === updatedContact.id ? updatedContact : c));
    setEditingChannel(null);

    if (onShowToast) {
      onShowToast(`Updated ${editingChannel.toUpperCase()} preference for ${selectedContact.name}!`);
    }
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      
      {/* HEADER CARD */}
      <div className="bg-white rounded-2xl border border-slate-200/90 shadow-xs p-6 space-y-2">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 border border-indigo-200/80 flex items-center justify-center font-bold shadow-2xs shrink-0">
            <Tag className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center space-x-2.5">
              <h1 className="text-xl font-extrabold text-slate-900 tracking-tight">
                Tags & Contact Preferences
              </h1>
              <span className="px-2.5 py-0.5 text-[11px] font-extrabold bg-indigo-50 text-indigo-700 rounded-full border border-indigo-200">
                Governance
              </span>
            </div>
            <p className="text-xs font-medium text-slate-500 mt-0.5">
              Organize account taxonomy tags and manage contact-level communication preferences for TechGear Europe (ACC-89420-EU).
            </p>
          </div>
        </div>
      </div>

      {/* CARD 1: ACCOUNT TAXONOMY TAGS */}
      <div className="bg-white rounded-2xl border border-slate-200/90 shadow-xs p-6 space-y-4">
        
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <h2 className="text-xs font-extrabold text-slate-900 uppercase tracking-wider flex items-center space-x-2">
            <Tag className="w-4 h-4 text-indigo-600" />
            <span>ACCOUNT TAXONOMY TAGS</span>
          </h2>
          <span className="text-xs font-semibold text-slate-400">
            {tags.length} Active Tags
          </span>
        </div>

        {/* Tag Input Form */}
        <form onSubmit={handleAddTag} className="flex items-center space-x-2 max-w-lg">
          <input 
            type="text"
            placeholder="Add new tag (e.g. Q4 Target)..."
            value={newTagInput}
            onChange={(e) => setNewTagInput(e.target.value)}
            className="flex-1 px-3.5 py-2 bg-slate-50 border border-slate-300 rounded-xl text-xs font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button 
            type="submit"
            className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold text-xs rounded-xl shadow-xs flex items-center space-x-1 cursor-pointer transition-all active:scale-95 shrink-0"
          >
            <Plus className="w-4 h-4" />
            <span>Add Tag</span>
          </button>
        </form>

        {/* Active Tags List */}
        <div className="flex flex-wrap gap-2 pt-1">
          {tags.map((t) => (
            <span key={t} className="px-3.5 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs rounded-xl border border-slate-200 flex items-center space-x-2 transition-all shadow-2xs">
              <span>{t}</span>
              <button 
                onClick={() => handleRemoveTag(t)}
                className="text-slate-400 hover:text-red-600 font-black cursor-pointer text-sm transition-colors"
                title="Remove tag"
              >
                ×
              </button>
            </span>
          ))}
        </div>

      </div>

      {/* CARD 2: CONTACTS & CHANNEL PREFERENCES TABLE */}
      <div className="bg-white rounded-2xl border border-slate-200/90 shadow-xs p-6 space-y-4">
        
        <div className="border-b border-slate-100 pb-3">
          <div className="flex items-center space-x-2">
            <Users className="w-4 h-4 text-indigo-600" />
            <h2 className="text-xs font-extrabold text-slate-900 uppercase tracking-wider">
              CONTACTS & CHANNEL PREFERENCES
            </h2>
          </div>
          <p className="text-xs text-slate-500 font-medium mt-0.5">
            View and manage communication preferences for contacts at this account. Click any contact row to inspect channel preferences.
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 bg-slate-50 p-2.5 rounded-xl border border-slate-200/80">
          
          {/* Search */}
          <div className="relative flex-1 w-full">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
            <input 
              type="text"
              placeholder="Search contacts by name, email, or role..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-4 py-1.5 bg-white border border-slate-300 rounded-lg text-xs font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Dropdown & Filter Button */}
          <div className="flex items-center space-x-2 w-full sm:w-auto">
            <select 
              value={selectedRoleFilter}
              onChange={(e) => setSelectedRoleFilter(e.target.value)}
              className="px-3 py-1.5 bg-white border border-slate-300 rounded-lg text-xs font-bold text-slate-700 focus:outline-none cursor-pointer"
            >
              <option value="All Contacts (8)">All Contacts (8)</option>
              <option value="Executive">Executive Only</option>
              <option value="Subscribed">Subscribed Only</option>
            </select>

            <button 
              onClick={() => onShowToast && onShowToast("Filters applied")}
              className="px-3 py-1.5 bg-white border border-slate-300 hover:bg-slate-100 rounded-lg text-xs font-bold text-slate-700 flex items-center space-x-1.5 cursor-pointer shadow-2xs"
            >
              <Filter className="w-3.5 h-3.5 text-slate-500" />
              <span>Filter</span>
            </button>
          </div>

        </div>

        {/* Contacts Table */}
        <div className="overflow-x-auto border border-slate-200/90 rounded-xl">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="bg-slate-50 text-slate-600 text-[10px] uppercase font-extrabold tracking-wider border-b border-slate-200">
                <th className="py-3 px-3 w-8">
                  <input type="checkbox" className="rounded text-indigo-600 focus:ring-indigo-500" />
                </th>
                <th className="py-3 px-3">CONTACT</th>
                <th className="py-3 px-3">ROLE</th>
                <th className="py-3 px-3">EMAIL</th>
                <th className="py-3 px-3">WHATSAPP</th>
                <th className="py-3 px-3">SMS</th>
                <th className="py-3 px-3">LAST ACTIVITY</th>
                <th className="py-3 px-3 text-right">ACTIONS</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 font-medium text-slate-700 bg-white">
              {filteredContacts.map((cnt) => {
                const isSelected = selectedContact?.id === cnt.id;
                return (
                  <tr 
                    key={cnt.id}
                    onClick={() => setSelectedContact(cnt)}
                    className={`transition-colors cursor-pointer ${
                      isSelected ? 'bg-indigo-50/80 font-semibold' : 'hover:bg-slate-50/90'
                    }`}
                  >
                    {/* Checkbox */}
                    <td className="py-3.5 px-3">
                      <input 
                        type="checkbox" 
                        checked={isSelected}
                        onChange={() => setSelectedContact(cnt)}
                        className="rounded text-indigo-600 focus:ring-indigo-500"
                      />
                    </td>

                    {/* Contact Name & Email */}
                    <td className="py-3.5 px-3">
                      <div className="flex items-center space-x-2.5">
                        <div className={`w-7 h-7 rounded-full flex items-center justify-center font-black text-xs shrink-0 ${cnt.initialsBg}`}>
                          {cnt.initials}
                        </div>
                        <div>
                          <div className="font-extrabold text-slate-900 text-xs">
                            {cnt.name}
                          </div>
                          <div className="text-[11px] text-slate-400 font-mono">
                            {cnt.email}
                          </div>
                        </div>
                      </div>
                    </td>

                    {/* Role */}
                    <td className="py-3.5 px-3">
                      <span className="text-slate-600 font-bold text-[11px]">
                        {cnt.role}
                      </span>
                    </td>

                    {/* Email Badge */}
                    <td className="py-3.5 px-3">
                      {cnt.emailStatus === "Subscribed" ? (
                        <span className="px-2.5 py-0.5 bg-emerald-100 text-emerald-800 font-extrabold text-[10px] rounded-md border border-emerald-200 inline-block">
                          ✓ Subscribed
                        </span>
                      ) : (
                        <span className="px-2.5 py-0.5 bg-slate-100 text-slate-500 font-semibold text-[10px] rounded-md border border-slate-200 inline-block">
                          Not Set
                        </span>
                      )}
                    </td>

                    {/* WhatsApp Badge */}
                    <td className="py-3.5 px-3">
                      {cnt.whatsappStatus === "Subscribed" ? (
                        <span className="px-2.5 py-0.5 bg-emerald-100 text-emerald-800 font-extrabold text-[10px] rounded-md border border-emerald-200 inline-block">
                          ✓ Subscribed
                        </span>
                      ) : cnt.whatsappStatus === "Do Not Contact" ? (
                        <span className="px-2.5 py-0.5 bg-red-100 text-red-800 font-extrabold text-[10px] rounded-md border border-red-200 inline-block">
                          ⛔ Do Not Contact
                        </span>
                      ) : (
                        <span className="px-2.5 py-0.5 bg-slate-100 text-slate-500 font-semibold text-[10px] rounded-md border border-slate-200 inline-block">
                          Not Set
                        </span>
                      )}
                    </td>

                    {/* SMS Badge */}
                    <td className="py-3.5 px-3">
                      {cnt.smsStatus === "Subscribed" ? (
                        <span className="px-2.5 py-0.5 bg-emerald-100 text-emerald-800 font-extrabold text-[10px] rounded-md border border-emerald-200 inline-block">
                          ✓ Subscribed
                        </span>
                      ) : cnt.smsStatus === "Do Not Contact" ? (
                        <span className="px-2.5 py-0.5 bg-red-100 text-red-800 font-extrabold text-[10px] rounded-md border border-red-200 inline-block">
                          ⛔ Do Not Contact
                        </span>
                      ) : (
                        <span className="px-2.5 py-0.5 bg-slate-100 text-slate-500 font-semibold text-[10px] rounded-md border border-slate-200 inline-block">
                          Not Set
                        </span>
                      )}
                    </td>

                    {/* Last Activity */}
                    <td className="py-3.5 px-3 text-[11px] text-slate-500 font-medium">
                      {cnt.lastActivity}
                    </td>

                    {/* Actions */}
                    <td className="py-3.5 px-3 text-right">
                      <div className="flex items-center justify-end space-x-1">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedContact(cnt);
                          }}
                          className="px-3 py-1 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 font-extrabold text-[11px] rounded-lg border border-indigo-200 cursor-pointer transition-colors"
                        >
                          Manage
                        </button>
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            if (onShowToast) onShowToast(`Contact options for ${cnt.name}`);
                          }}
                          className="p-1 text-slate-400 hover:text-slate-700 rounded-lg cursor-pointer"
                        >
                          <MoreHorizontal className="w-4 h-4" />
                        </button>
                      </div>
                    </td>

                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Table Footer */}
        <div className="flex items-center justify-between text-xs text-slate-500 font-medium pt-1">
          <span>Showing 5 of 8 contacts</span>
          
          <div className="flex items-center space-x-1">
            <button className="p-1 border border-slate-200 rounded-lg hover:bg-slate-100 text-slate-600 disabled:opacity-50">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button className="px-3 py-1 bg-indigo-600 text-white font-bold rounded-lg text-xs">
              1
            </button>
            <button className="px-3 py-1 hover:bg-slate-100 text-slate-700 font-bold rounded-lg text-xs">
              2
            </button>
            <button className="p-1 border border-slate-200 rounded-lg hover:bg-slate-100 text-slate-600">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>

      {/* ==================================================
          CONTACT PREFERENCES INSPECTOR SIDE PANEL (SLIDE-OVER DRAWER)
          Appears when user clicks on a specific contact row in the table
      ================================================== */}
      {selectedContact && (
        <div 
          onClick={() => setSelectedContact(null)}
          className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs z-50 flex justify-end animate-in fade-in duration-200"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-md bg-white min-h-screen shadow-2xl flex flex-col justify-between border-l border-slate-200 animate-in slide-in-from-right duration-200 p-6 space-y-5 overflow-y-auto"
          >
            
            {/* Contact Profile Summary Header */}
            <div className="flex items-start justify-between border-b border-slate-100 pb-4">
              <div className="flex items-center space-x-3">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center font-black text-base shadow-2xs ${selectedContact.initialsBg}`}>
                  {selectedContact.initials}
                </div>
                <div>
                  <h3 className="text-base font-extrabold text-slate-900 tracking-tight">
                    {selectedContact.name}
                  </h3>
                  <div className="text-xs text-slate-500 font-semibold">{selectedContact.role}</div>
                  <div className="text-[11px] text-slate-400 font-mono mt-0.5">{selectedContact.email}</div>
                </div>
              </div>

              <button 
                onClick={() => setSelectedContact(null)}
                className="text-slate-400 hover:text-slate-700 p-1 rounded-lg cursor-pointer transition-colors"
                title="Close panel"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Sub-Tabs: Preferences | Details | Activity */}
            <div className="flex items-center border-b border-slate-200 text-xs font-bold">
              <button
                onClick={() => setActivePanelTab("Preferences")}
                className={`pb-2.5 px-3 border-b-2 cursor-pointer transition-colors ${
                  activePanelTab === "Preferences"
                    ? 'border-indigo-600 text-indigo-600 font-extrabold'
                    : 'border-transparent text-slate-500 hover:text-slate-900'
                }`}
              >
                Preferences
              </button>

              <button
                onClick={() => setActivePanelTab("Details")}
                className={`pb-2.5 px-3 border-b-2 cursor-pointer transition-colors ${
                  activePanelTab === "Details"
                    ? 'border-indigo-600 text-indigo-600 font-extrabold'
                    : 'border-transparent text-slate-500 hover:text-slate-900'
                }`}
              >
                Details
              </button>

              <button
                onClick={() => setActivePanelTab("Activity")}
                className={`pb-2.5 px-3 border-b-2 cursor-pointer transition-colors ${
                  activePanelTab === "Activity"
                    ? 'border-indigo-600 text-indigo-600 font-extrabold'
                    : 'border-transparent text-slate-500 hover:text-slate-900'
                }`}
              >
                Activity
              </button>
            </div>

            {activePanelTab === "Preferences" && (
              <div className="space-y-5 animate-in fade-in duration-150 flex-1">
                
                {/* Channel Preferences Section */}
                <div className="space-y-3">
                  <div>
                    <h4 className="text-xs font-extrabold text-slate-900 uppercase tracking-wider">
                      CHANNEL PREFERENCES
                    </h4>
                    <p className="text-[11px] text-slate-500 font-medium">
                      Manage communication preferences and consent status for this contact.
                    </p>
                  </div>

                  {/* Email Card */}
                  <div 
                    onClick={() => setEditingChannel("email")}
                    className="p-3.5 bg-slate-50 hover:bg-slate-100/90 border border-slate-200 rounded-xl space-y-2 cursor-pointer transition-all group"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="w-7 h-7 rounded-lg bg-indigo-50 text-indigo-600 border border-indigo-200 flex items-center justify-center">
                          <Mail className="w-3.5 h-3.5" />
                        </div>
                        <span className="font-extrabold text-slate-900 text-xs">Email</span>
                      </div>

                      <div className="flex items-center space-x-1.5">
                        <span className={`px-2.5 py-0.5 text-[10px] font-extrabold rounded-md border ${
                          selectedContact.preferences.email.status === "Subscribed" 
                            ? 'bg-emerald-100 text-emerald-800 border-emerald-200'
                            : 'bg-slate-200 text-slate-700 border-slate-300'
                        }`}>
                          ✓ {selectedContact.preferences.email.status}
                        </span>
                        <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-indigo-600 transition-colors" />
                      </div>
                    </div>

                    <p className="text-[11px] text-slate-600 font-medium">
                      {selectedContact.preferences.email.subtext}
                    </p>

                    <div className="text-[10px] text-slate-400 font-mono flex items-center justify-between pt-1 border-t border-slate-200/60">
                      <span>{selectedContact.preferences.email.source}</span>
                      <span>{selectedContact.preferences.email.updated}</span>
                    </div>
                  </div>

                  {/* WhatsApp Card */}
                  <div 
                    onClick={() => setEditingChannel("whatsapp")}
                    className="p-3.5 bg-slate-50 hover:bg-slate-100/90 border border-slate-200 rounded-xl space-y-2 cursor-pointer transition-all group"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center">
                          <MessageSquare className="w-3.5 h-3.5" />
                        </div>
                        <span className="font-extrabold text-slate-900 text-xs">WhatsApp</span>
                      </div>

                      <div className="flex items-center space-x-1.5">
                        <span className={`px-2.5 py-0.5 text-[10px] font-extrabold rounded-md border ${
                          selectedContact.preferences.whatsapp.status === "Subscribed" 
                            ? 'bg-emerald-100 text-emerald-800 border-emerald-200'
                            : selectedContact.preferences.whatsapp.status === "Do Not Contact"
                            ? 'bg-red-100 text-red-800 border-red-200'
                            : 'bg-slate-200 text-slate-700 border-slate-300'
                        }`}>
                          {selectedContact.preferences.whatsapp.status === "Subscribed" ? "✓ Subscribed" : selectedContact.preferences.whatsapp.status === "Do Not Contact" ? "⛔ Do Not Contact" : "Not Set"}
                        </span>
                        <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-indigo-600 transition-colors" />
                      </div>
                    </div>

                    <p className="text-[11px] text-slate-600 font-medium">
                      {selectedContact.preferences.whatsapp.subtext}
                    </p>

                    <div className="text-[10px] text-slate-400 font-mono flex items-center justify-between pt-1 border-t border-slate-200/60">
                      <span>{selectedContact.preferences.whatsapp.source}</span>
                      <span>{selectedContact.preferences.whatsapp.updated}</span>
                    </div>
                  </div>

                  {/* SMS Card */}
                  <div 
                    onClick={() => setEditingChannel("sms")}
                    className="p-3.5 bg-slate-50 hover:bg-slate-100/90 border border-slate-200 rounded-xl space-y-2 cursor-pointer transition-all group"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="w-7 h-7 rounded-lg bg-red-50 text-red-600 border border-red-200 flex items-center justify-center">
                          <PhoneCall className="w-3.5 h-3.5" />
                        </div>
                        <span className="font-extrabold text-slate-900 text-xs">SMS</span>
                      </div>

                      <div className="flex items-center space-x-1.5">
                        <span className={`px-2.5 py-0.5 text-[10px] font-extrabold rounded-md border ${
                          selectedContact.preferences.sms.status === "Subscribed" 
                            ? 'bg-emerald-100 text-emerald-800 border-emerald-200'
                            : selectedContact.preferences.sms.status === "Do Not Contact"
                            ? 'bg-red-100 text-red-800 border-red-200'
                            : 'bg-slate-200 text-slate-700 border-slate-300'
                        }`}>
                          {selectedContact.preferences.sms.status === "Subscribed" ? "✓ Subscribed" : selectedContact.preferences.sms.status === "Do Not Contact" ? "⛔ Do Not Contact" : "Not Set"}
                        </span>
                        <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-indigo-600 transition-colors" />
                      </div>
                    </div>

                    <p className="text-[11px] text-slate-600 font-medium">
                      {selectedContact.preferences.sms.subtext}
                    </p>

                    <div className="text-[10px] text-slate-400 font-mono flex items-center justify-between pt-1 border-t border-slate-200/60">
                      <span>{selectedContact.preferences.sms.source}</span>
                      <span>{selectedContact.preferences.sms.updated}</span>
                    </div>
                  </div>
                </div>

                {/* Consent History Timeline Section */}
                <div className="space-y-3 pt-2 border-t border-slate-100">
                  <div className="flex items-center justify-between">
                    <h4 className="text-xs font-extrabold text-slate-900 uppercase tracking-wider">
                      CONSENT HISTORY
                    </h4>
                    <button 
                      onClick={() => onShowToast && onShowToast("Viewing full consent audit log")}
                      className="text-indigo-600 hover:text-indigo-800 font-bold text-[11px] cursor-pointer"
                    >
                      View All
                    </button>
                  </div>

                  <div className="relative pl-5 space-y-3 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-200">
                    {selectedContact.consentHistory.map((item, idx) => (
                      <div key={idx} className="relative space-y-0.5">
                        <div className={`absolute -left-5 top-1 w-2.5 h-2.5 rounded-full border-2 bg-white ${
                          item.type === "opt-in" ? 'border-emerald-500 bg-emerald-500' : 'border-red-500 bg-red-500'
                        }`} />
                        
                        <div className="flex items-center justify-between text-xs">
                          <span className="font-extrabold text-slate-900">{item.title}</span>
                          <span className="text-[10px] font-mono text-slate-400">{item.source}</span>
                        </div>
                        
                        <div className="text-[10px] font-medium text-slate-400 font-mono">
                          {item.time}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Drawer Panel Action Footer */}
                <div className="grid grid-cols-2 gap-2 pt-2">
                  <button 
                    onClick={() => setEditingChannel("email")}
                    className="py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs rounded-xl cursor-pointer transition-colors"
                  >
                    Update Preferences
                  </button>

                  <button 
                    onClick={() => onShowToast && onShowToast(`Opened full Customer 360 profile for ${selectedContact.name}`)}
                    className="py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold text-xs rounded-xl shadow-xs flex items-center justify-center space-x-1 cursor-pointer transition-all"
                  >
                    <span>View Full Profile</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            )}

            {activePanelTab === "Details" && (
              <div className="space-y-4 text-xs font-medium animate-in fade-in duration-150 flex-1">
                <div className="bg-slate-50 p-4 rounded-xl space-y-2 border border-slate-200">
                  <div className="text-[10px] font-bold text-slate-400 uppercase">Contact ID</div>
                  <div className="font-mono font-bold text-indigo-600">{selectedContact.id}</div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase pt-2">B2B Account</div>
                  <div className="font-bold text-slate-900">{customer.name} ({customer.id})</div>
                </div>
              </div>
            )}

            {activePanelTab === "Activity" && (
              <div className="space-y-3 text-xs font-medium animate-in fade-in duration-150 flex-1">
                <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
                  <div className="font-bold text-slate-900">Last Profile Activity</div>
                  <div className="text-[11px] text-slate-500 mt-0.5">{selectedContact.lastActivity}</div>
                </div>
              </div>
            )}

          </div>
        </div>
      )}

      {/* ==================================================
          EDIT CHANNEL PREFERENCE MODAL
      ================================================== */}
      {editingChannel && selectedContact && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs z-50 flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-slate-200 space-y-5 animate-in zoom-in-95 duration-150">
            
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div>
                <h3 className="font-extrabold text-slate-900 text-base">
                  Update {editingChannel.toUpperCase()} Preference
                </h3>
                <div className="text-xs text-slate-500 font-medium">
                  {selectedContact.name} • {selectedContact.email}
                </div>
              </div>
              <button 
                onClick={() => setEditingChannel(null)}
                className="text-slate-400 hover:text-slate-600 p-1 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3 text-xs">
              <label className="text-[10px] font-bold text-slate-400 uppercase">Select Subscription Status</label>
              
              <div className="space-y-2">
                <label className={`flex items-center space-x-3 p-3 rounded-xl border cursor-pointer transition-all ${
                  editingStatus === "Subscribed" 
                    ? 'bg-emerald-50 border-emerald-300 text-emerald-950 font-bold' 
                    : 'bg-slate-50 border-slate-200 text-slate-700'
                }`}>
                  <input 
                    type="radio" 
                    name="pref_status" 
                    value="Subscribed"
                    checked={editingStatus === "Subscribed"}
                    onChange={(e) => setEditingStatus(e.target.value)}
                    className="text-indigo-600 focus:ring-indigo-500"
                  />
                  <div>
                    <div className="font-extrabold text-xs">✓ Subscribed</div>
                    <div className="text-[10px] opacity-80 font-normal">Contact explicitly consents to receiving marketing messages</div>
                  </div>
                </label>

                <label className={`flex items-center space-x-3 p-3 rounded-xl border cursor-pointer transition-all ${
                  editingStatus === "Do Not Contact" 
                    ? 'bg-red-50 border-red-300 text-red-950 font-bold' 
                    : 'bg-slate-50 border-slate-200 text-slate-700'
                }`}>
                  <input 
                    type="radio" 
                    name="pref_status" 
                    value="Do Not Contact"
                    checked={editingStatus === "Do Not Contact"}
                    onChange={(e) => setEditingStatus(e.target.value)}
                    className="text-red-600 focus:ring-red-500"
                  />
                  <div>
                    <div className="font-extrabold text-xs">⛔ Do Not Contact</div>
                    <div className="text-[10px] opacity-80 font-normal">Suppress all outreach on this communication channel</div>
                  </div>
                </label>
              </div>
            </div>

            <div className="flex items-center justify-end space-x-2 pt-2 border-t border-slate-100">
              <button 
                onClick={() => setEditingChannel(null)}
                className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs rounded-xl cursor-pointer"
              >
                Cancel
              </button>
              <button 
                onClick={handleSaveChannelPreference}
                className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold text-xs rounded-xl shadow-xs cursor-pointer"
              >
                Save Preference
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
