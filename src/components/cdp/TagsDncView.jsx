import React, { useState } from 'react';
import { Tag, ShieldAlert, Plus, CheckCircle2, XCircle, Mail, MessageSquare, PhoneCall } from 'lucide-react';

export default function TagsDncView({ customer, onShowToast }) {
  const [tags, setTags] = useState([
    "VIP Account", "High Intent", "Pricing Interest", "Enterprise Retailer", "myFulfillment Customer", "GDPR Verified"
  ]);
  const [newTagInput, setNewTagInput] = useState("");

  const handleAddTag = (e) => {
    e.preventDefault();
    if (newTagInput.trim() && !tags.includes(newTagInput.trim())) {
      setTags([...tags, newTagInput.trim()]);
      onShowToast && onShowToast(`Added tag '${newTagInput.trim()}' to TechGear Europe!`);
      setNewTagInput("");
    }
  };

  const handleRemoveTag = (tagToRemove) => {
    setTags(tags.filter(t => t !== tagToRemove));
    onShowToast && onShowToast(`Removed tag '${tagToRemove}'`);
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      
      {/* Header */}
      <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-5">
        <h1 className="text-xl font-extrabold text-slate-900 tracking-tight flex items-center space-x-2">
          <Tag className="w-5 h-5 text-indigo-600" />
          <span>Tags & Do-Not-Contact (DNC) Governance</span>
        </h1>
        <p className="text-xs text-slate-500 mt-0.5">
          Lightweight tag categorization & explicit contactability controls for {customer.name} ({customer.id})
        </p>
      </div>

      {/* 1. TAGS MANAGEMENT */}
      <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-5 space-y-4">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <h2 className="text-xs font-extrabold text-slate-900 uppercase tracking-wider flex items-center space-x-2">
            <Tag className="w-4 h-4 text-indigo-600" />
            <span>Account Tag Taxonomy</span>
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
          <button type="submit" className="px-3.5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold text-xs rounded-xl shadow-xs flex items-center space-x-1 cursor-pointer">
            <Plus className="w-3.5 h-3.5" />
            <span>Add Tag</span>
          </button>
        </form>

        {/* Active Tags Grid */}
        <div className="flex flex-wrap gap-2 pt-2">
          {tags.map(t => (
            <span key={t} className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold rounded-xl border border-slate-300 flex items-center space-x-2 transition-all">
              <span>{t}</span>
              <button onClick={() => handleRemoveTag(t)} className="text-slate-400 hover:text-red-600 cursor-pointer">
                ×
              </button>
            </span>
          ))}
        </div>
      </div>

      {/* 2. DO-NOT-CONTACT (DNC) & CONTACTABILITY MATRIX */}
      <div className="bg-white rounded-2xl border-2 border-amber-300/90 shadow-sm p-5 space-y-4">
        <div className="flex items-center space-x-2 border-b border-slate-100 pb-3">
          <ShieldAlert className="w-5 h-5 text-amber-600" />
          <div>
            <h2 className="text-sm font-extrabold text-slate-900 tracking-tight">Channel Contactability & Compliance Matrix</h2>
            <p className="text-xs text-slate-500">Explicit DNC flags enforced across all marketing campaigns</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          
          {/* Email */}
          <div className="p-4 bg-emerald-50/70 border border-emerald-200 rounded-xl space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-extrabold text-slate-900 flex items-center space-x-1.5">
                <Mail className="w-4 h-4 text-emerald-600" />
                <span>Email Channel</span>
              </span>
              <span className="px-2 py-0.5 text-[10px] font-extrabold bg-emerald-600 text-white rounded-md">SUBSCRIBED</span>
            </div>
            <p className="text-xs text-emerald-950 font-semibold">Verified GDPR Opt-In. High open rate (82%).</p>
          </div>

          {/* WhatsApp */}
          <div className="p-4 bg-emerald-50/70 border border-emerald-200 rounded-xl space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-extrabold text-slate-900 flex items-center space-x-1.5">
                <MessageSquare className="w-4 h-4 text-emerald-600" />
                <span>WhatsApp Business</span>
              </span>
              <span className="px-2 py-0.5 text-[10px] font-extrabold bg-emerald-600 text-white rounded-md">SUBSCRIBED</span>
            </div>
            <p className="text-xs text-emerald-950 font-semibold">Active conversation consent granted by Antoine Laurent.</p>
          </div>

          {/* SMS - DO NOT CONTACT */}
          <div className="p-4 bg-red-50/90 border-2 border-red-300 rounded-xl space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-extrabold text-slate-900 flex items-center space-x-1.5">
                <PhoneCall className="w-4 h-4 text-red-600" />
                <span>SMS Channel</span>
              </span>
              <span className="px-2 py-0.5 text-[10px] font-extrabold bg-red-600 text-white rounded-md uppercase animate-pulse">DO NOT CONTACT</span>
            </div>
            <p className="text-xs text-red-950 font-bold">Contact opted out of SMS notifications. Broadcasts automatically suppressed.</p>
          </div>

        </div>
      </div>

    </div>
  );
}
