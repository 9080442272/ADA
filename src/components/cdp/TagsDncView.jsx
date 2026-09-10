import React, { useState } from 'react';
import { 
  Tag, 
  ShieldAlert, 
  Plus, 
  CheckCircle2, 
  XCircle, 
  Mail, 
  MessageSquare, 
  PhoneCall, 
  ChevronRight, 
  X,
  Sliders,
  AlertTriangle,
  Check
} from 'lucide-react';

export default function TagsDncView({ customer, onShowToast }) {
  // Tags List (Removed 'GDPR Verified' per instruction)
  const [tags, setTags] = useState([
    "VIP Account", 
    "High Intent", 
    "Pricing Interest", 
    "Enterprise Retailer", 
    "myFulfillment Customer"
  ]);
  const [newTagInput, setNewTagInput] = useState("");

  // Contact Preferences State
  const [preferences, setPreferences] = useState({
    email: {
      status: "Subscribed",
      label: "Email Marketing",
      icon: Mail,
      desc: "Verified double opt-in. High open rate (82%).",
      reason: "GDPR Consent Form submitted on 15/01/2025"
    },
    whatsapp: {
      status: "Subscribed",
      label: "WhatsApp Business",
      icon: MessageSquare,
      desc: "Active conversation consent granted by Antoine Laurent.",
      reason: "Direct WhatsApp opt-in during sales onboarding"
    },
    sms: {
      status: "Do Not Contact",
      label: "SMS Channel",
      icon: PhoneCall,
      desc: "Marketing messages automatically suppressed.",
      reason: "Customer opted out of SMS broadcasts on 12/08/2025"
    }
  });

  // Modal State for Editing Preference
  const [editingChannelKey, setEditingChannelKey] = useState(null);
  const [editStatusValue, setEditStatusValue] = useState("Subscribed");
  const [editReasonValue, setEditReasonValue] = useState("");

  // Add Tag Handler
  const handleAddTag = (e) => {
    e.preventDefault();
    if (newTagInput.trim() && !tags.includes(newTagInput.trim())) {
      setTags([...tags, newTagInput.trim()]);
      if (onShowToast) onShowToast(`Added tag '${newTagInput.trim()}' to ${customer.name}!`);
      setNewTagInput("");
    }
  };

  // Remove Tag Handler
  const handleRemoveTag = (tagToRemove) => {
    setTags(tags.filter(t => t !== tagToRemove));
    if (onShowToast) onShowToast(`Removed tag '${tagToRemove}'`);
  };

  // Open Edit Preference Modal
  const handleOpenManageModal = (key) => {
    const target = preferences[key];
    setEditingChannelKey(key);
    setEditStatusValue(target.status);
    setEditReasonValue(target.reason);
  };

  // Save Preference Handler
  const handleSavePreference = () => {
    if (!editingChannelKey) return;
    
    setPreferences(prev => ({
      ...prev,
      [editingChannelKey]: {
        ...prev[editingChannelKey],
        status: editStatusValue,
        reason: editReasonValue || prev[editingChannelKey].reason
      }
    }));

    const channelName = preferences[editingChannelKey].label;
    if (onShowToast) {
      onShowToast(`Updated ${channelName} preference to '${editStatusValue}' for ${customer.name}`);
    }
    setEditingChannelKey(null);
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      
      {/* HEADER */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 space-y-2">
        <div className="flex items-center space-x-2.5">
          <div className="w-9 h-9 rounded-xl bg-indigo-50 text-indigo-600 border border-indigo-200 flex items-center justify-center font-bold">
            <Tag className="w-5 h-5" />
          </div>
          <div>
            <h1 className="text-xl font-extrabold text-slate-900 tracking-tight flex items-center space-x-2">
              <span>Tags & Contact Preferences</span>
              <span className="px-2.5 py-0.5 text-xs font-extrabold bg-indigo-50 text-indigo-700 rounded-full border border-indigo-200">
                Governance
              </span>
            </h1>
            <p className="text-xs text-slate-500 font-medium mt-0.5">
              Organizing account taxonomy tags and managing explicit channel subscription & contact preferences for {customer.name} ({customer.id})
            </p>
          </div>
        </div>
      </div>

      {/* 1. ACCOUNT TAG TAXONOMY */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 space-y-4">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <h2 className="text-xs font-extrabold text-slate-900 uppercase tracking-wider flex items-center space-x-2">
            <Tag className="w-4 h-4 text-indigo-600" />
            <span>Account Taxonomy Tags</span>
          </h2>
          <span className="text-xs font-bold text-slate-500">{tags.length} Active Tags</span>
        </div>

        {/* Tag Input */}
        <form onSubmit={handleAddTag} className="flex items-center space-x-2 max-w-md">
          <input 
            type="text"
            placeholder="Add new tag (e.g. Q4 Target)..."
            value={newTagInput}
            onChange={(e) => setNewTagInput(e.target.value)}
            className="flex-1 px-3 py-2 bg-slate-50 border border-slate-300 rounded-xl text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button 
            type="submit" 
            className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold text-xs rounded-xl shadow-xs flex items-center space-x-1 cursor-pointer transition-all active:scale-95"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Add Tag</span>
          </button>
        </form>

        {/* Active Tags Grid */}
        <div className="flex flex-wrap gap-2 pt-2">
          {tags.map(t => (
            <span key={t} className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold rounded-xl border border-slate-300 flex items-center space-x-2 transition-all shadow-2xs">
              <span>{t}</span>
              <button 
                onClick={() => handleRemoveTag(t)} 
                className="text-slate-400 hover:text-red-600 font-extrabold cursor-pointer ml-1 text-sm"
                title="Remove tag"
              >
                ×
              </button>
            </span>
          ))}
        </div>
      </div>

      {/* 2. CONTACT PREFERENCES */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 space-y-4">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <div className="flex items-center space-x-2">
            <ShieldAlert className="w-4 h-4 text-amber-600" />
            <h2 className="text-xs font-extrabold text-slate-900 uppercase tracking-wider">
              Contact Preferences
            </h2>
          </div>
          <span className="text-[11px] text-slate-400 font-medium">Explicit channel restrictions</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          
          {/* EMAIL PREFERENCE */}
          <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-3 flex flex-col justify-between">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-extrabold text-slate-900 flex items-center space-x-1.5">
                  <Mail className="w-4 h-4 text-indigo-600" />
                  <span>Email</span>
                </span>
                <span className={`px-2 py-0.5 text-[10px] font-extrabold rounded-md ${
                  preferences.email.status === "Subscribed" 
                    ? 'bg-emerald-100 text-emerald-800 border border-emerald-300' 
                    : 'bg-red-100 text-red-800 border border-red-300'
                }`}>
                  {preferences.email.status === "Subscribed" ? "✓ Subscribed" : "⛔ Do Not Contact"}
                </span>
              </div>
              <p className="text-xs text-slate-600 font-medium leading-relaxed">
                {preferences.email.desc}
              </p>
            </div>

            <div className="pt-2 border-t border-slate-200/80 flex items-center justify-between text-xs">
              <span className="text-[10px] text-slate-400 font-mono truncate max-w-[120px]">{preferences.email.reason}</span>
              <button 
                onClick={() => handleOpenManageModal("email")}
                className="text-indigo-600 font-bold hover:underline cursor-pointer flex items-center space-x-1 shrink-0"
              >
                <span>Manage →</span>
              </button>
            </div>
          </div>

          {/* WHATSAPP PREFERENCE */}
          <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-3 flex flex-col justify-between">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-extrabold text-slate-900 flex items-center space-x-1.5">
                  <MessageSquare className="w-4 h-4 text-emerald-600" />
                  <span>WhatsApp</span>
                </span>
                <span className={`px-2 py-0.5 text-[10px] font-extrabold rounded-md ${
                  preferences.whatsapp.status === "Subscribed" 
                    ? 'bg-emerald-100 text-emerald-800 border border-emerald-300' 
                    : 'bg-red-100 text-red-800 border border-red-300'
                }`}>
                  {preferences.whatsapp.status === "Subscribed" ? "✓ Subscribed" : "⛔ Do Not Contact"}
                </span>
              </div>
              <p className="text-xs text-slate-600 font-medium leading-relaxed">
                {preferences.whatsapp.desc}
              </p>
            </div>

            <div className="pt-2 border-t border-slate-200/80 flex items-center justify-between text-xs">
              <span className="text-[10px] text-slate-400 font-mono truncate max-w-[120px]">{preferences.whatsapp.reason}</span>
              <button 
                onClick={() => handleOpenManageModal("whatsapp")}
                className="text-indigo-600 font-bold hover:underline cursor-pointer flex items-center space-x-1 shrink-0"
              >
                <span>Manage →</span>
              </button>
            </div>
          </div>

          {/* SMS PREFERENCE */}
          <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-3 flex flex-col justify-between">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-extrabold text-slate-900 flex items-center space-x-1.5">
                  <PhoneCall className="w-4 h-4 text-blue-600" />
                  <span>SMS</span>
                </span>
                <span className={`px-2 py-0.5 text-[10px] font-extrabold rounded-md ${
                  preferences.sms.status === "Subscribed" 
                    ? 'bg-emerald-100 text-emerald-800 border border-emerald-300' 
                    : 'bg-red-100 text-red-800 border border-red-300'
                }`}>
                  {preferences.sms.status === "Subscribed" ? "✓ Subscribed" : "⛔ Do Not Contact"}
                </span>
              </div>
              <p className="text-xs text-slate-600 font-medium leading-relaxed">
                {preferences.sms.desc}
              </p>
            </div>

            <div className="pt-2 border-t border-slate-200/80 flex items-center justify-between text-xs">
              <span className="text-[10px] text-slate-400 font-mono truncate max-w-[120px]">{preferences.sms.reason}</span>
              <button 
                onClick={() => handleOpenManageModal("sms")}
                className="text-indigo-600 font-bold hover:underline cursor-pointer flex items-center space-x-1 shrink-0"
              >
                <span>Manage →</span>
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* 3. EDIT PREFERENCE MODAL */}
      {editingChannelKey && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs z-50 flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-slate-200 space-y-5 animate-in zoom-in-95 duration-150">
            
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div>
                <h3 className="font-extrabold text-slate-900 text-base">
                  Manage Contact Preference
                </h3>
                <div className="text-xs text-slate-500 font-medium">
                  {preferences[editingChannelKey]?.label} • {customer.name}
                </div>
              </div>
              <button 
                onClick={() => setEditingChannelKey(null)}
                className="text-slate-400 hover:text-slate-600 p-1 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4 text-xs">
              
              {/* Radio Selection */}
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-slate-400 uppercase">Subscription Preference</label>
                
                <div className="space-y-2">
                  <label className={`flex items-center space-x-3 p-3 rounded-xl border cursor-pointer transition-all ${
                    editStatusValue === "Subscribed" 
                      ? 'bg-emerald-50 border-emerald-300 text-emerald-950 font-bold' 
                      : 'bg-slate-50 border-slate-200 text-slate-700'
                  }`}>
                    <input 
                      type="radio" 
                      name="pref_status" 
                      value="Subscribed"
                      checked={editStatusValue === "Subscribed"}
                      onChange={(e) => setEditStatusValue(e.target.value)}
                      className="text-indigo-600 focus:ring-indigo-500"
                    />
                    <div>
                      <div className="font-extrabold text-xs">✓ Subscribed</div>
                      <div className="text-[10px] opacity-80 font-normal">Customer consents to receiving messages on this channel</div>
                    </div>
                  </label>

                  <label className={`flex items-center space-x-3 p-3 rounded-xl border cursor-pointer transition-all ${
                    editStatusValue === "Do Not Contact" 
                      ? 'bg-red-50 border-red-300 text-red-950 font-bold' 
                      : 'bg-slate-50 border-slate-200 text-slate-700'
                  }`}>
                    <input 
                      type="radio" 
                      name="pref_status" 
                      value="Do Not Contact"
                      checked={editStatusValue === "Do Not Contact"}
                      onChange={(e) => setEditStatusValue(e.target.value)}
                      className="text-red-600 focus:ring-red-500"
                    />
                    <div>
                      <div className="font-extrabold text-xs">⛔ Do Not Contact (Suppressed)</div>
                      <div className="text-[10px] opacity-80 font-normal">Automatically suppress all marketing and outreach campaigns</div>
                    </div>
                  </label>
                </div>
              </div>

              {/* Audit Reason Input */}
              <div className="space-y-1">
                <label className="text-[10px] font-bold text-slate-400 uppercase">Audit Reason / Note</label>
                <input 
                  type="text"
                  placeholder="e.g. Opted out via customer portal on 12/08/2025"
                  value={editReasonValue}
                  onChange={(e) => setEditReasonValue(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-xl text-xs font-medium focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                />
              </div>

            </div>

            <div className="flex items-center justify-end space-x-2 pt-2 border-t border-slate-100">
              <button 
                onClick={() => setEditingChannelKey(null)}
                className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs rounded-xl cursor-pointer"
              >
                Cancel
              </button>
              <button 
                onClick={handleSavePreference}
                className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold text-xs rounded-xl shadow-xs cursor-pointer"
              >
                Save Preferences
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
