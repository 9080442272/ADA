import React, { useState } from 'react';
import { X, MessageSquare, Send, Mail, Phone, Sparkles, CheckCircle2, Megaphone } from 'lucide-react';

export default function StartConversationModal({ customer, isOpen, onClose, onSend }) {
  const [channel, setChannel] = useState("Email");
  const [message, setMessage] = useState(
    "Hi Antoine, following up on your team's interest in Boostmyshop myPricing. I've prepared a customized dynamic repricing strategy for TechGear Europe. Would you be available for a brief 15-minute demo this Thursday?"
  );
  const [sentToast, setSentToast] = useState(false);

  if (!isOpen) return null;

  const handleSend = () => {
    setSentToast(true);
    setTimeout(() => {
      setSentToast(false);
      onSend && onSend({ channel, message });
      onClose();
    }, 1000);
  };

  return (
    <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-lg w-full shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in zoom-in-95 duration-150">
        
        {/* Header */}
        <div className="h-16 px-6 bg-slate-900 text-white flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center space-x-2.5">
            <div className="w-8 h-8 rounded-lg ada-gradient-bg flex items-center justify-center text-white">
              <Megaphone className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white">Start Marketing Outreach: {customer.name}</h3>
              <p className="text-[11px] text-slate-400">Target: {customer.primaryContact}</p>
            </div>
          </div>
          <button onClick={onClose} className="text-slate-400 hover:text-white p-1 rounded-lg">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-4 text-xs">
          
          {/* Channel selector */}
          <div className="space-y-1.5">
            <label className="font-bold text-slate-800 block">Select Marketing Channel:</label>
            <div className="grid grid-cols-3 gap-2">
              {["Email", "In-App Banner", "Demo Invite"].map((c) => (
                <button
                  key={c}
                  type="button"
                  onClick={() => setChannel(c)}
                  className={`p-2.5 rounded-xl border text-xs font-bold transition-all flex items-center justify-center space-x-1.5 ${
                    channel === c
                      ? 'bg-indigo-600 text-white border-indigo-600 shadow-sm'
                      : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  <span>{c}</span>
                </button>
              ))}
            </div>
          </div>

          {/* AI Template Prompt Suggestion */}
          <div className="p-3 bg-indigo-50/70 border border-indigo-100 rounded-xl space-y-1">
            <div className="flex items-center space-x-1.5 text-[11px] font-bold text-indigo-800">
              <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
              <span>ADA Copilot Auto-Suggested Outreach Template:</span>
            </div>
            <p className="text-[11px] text-indigo-900 italic">
              "myPricing Executive Briefing & Demo Invitation" (91% predicted response rate)
            </p>
          </div>

          {/* Message Box */}
          <div className="space-y-1.5">
            <label className="font-bold text-slate-800 block">Outreach Message Content:</label>
            <textarea
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-indigo-500 text-slate-800 leading-relaxed font-sans"
            />
          </div>

        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
          <span className="text-[11px] text-slate-500">
            Routing via Boostmyshop Marketing Hub
          </span>

          <div className="flex items-center space-x-2">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold text-slate-600 bg-white border border-slate-300 rounded-xl"
            >
              Cancel
            </button>
            <button
              onClick={handleSend}
              disabled={sentToast}
              className="px-5 py-2 text-xs font-bold text-white ada-gradient-bg hover:opacity-95 rounded-xl shadow-md flex items-center space-x-2"
            >
              {sentToast ? (
                <span>Sending Campaign...</span>
              ) : (
                <>
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Campaign Now</span>
                </>
              )}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
