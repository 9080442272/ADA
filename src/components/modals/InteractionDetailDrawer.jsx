import React from 'react';
import { 
  X, 
  Sparkles, 
  CheckCircle2, 
  Clock, 
  Globe, 
  Mail, 
  Video, 
  Package, 
  FileText, 
  MessageSquare, 
  ArrowRight,
  Brain,
  Zap,
  Activity
} from 'lucide-react';

export default function InteractionDetailDrawer({ event, isOpen, onClose, onNavigateToRecommendation }) {
  if (!isOpen || !event) return null;

  const getEventIcon = (channel) => {
    switch (channel) {
      case 'Website': return Globe;
      case 'Email': return Mail;
      case 'Webinar': return Video;
      case 'Product': return Package;
      case 'Conversation': return MessageSquare;
      default: return Activity;
    }
  };

  const Icon = getEventIcon(event.channel);
  const sessionDetails = event.sessionDetails || {
    duration: "4 mins 12 secs",
    actions: ["Viewed pricing capabilities", "Explored ROI calculator"]
  };

  return (
    <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-xs z-50 flex justify-end">
      <div className="bg-white w-full max-w-md h-full shadow-2xl border-l border-slate-200 flex flex-col animate-in slide-in-from-right duration-200">
        
        {/* Drawer Header */}
        <div className="h-16 px-6 bg-slate-900 text-white flex items-center justify-between border-b border-slate-800 shrink-0">
          <div className="flex items-center space-x-2.5">
            <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white">
              <Icon className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white">Interaction Intelligence</h3>
              <p className="text-[11px] text-slate-400">{event.channel} • {event.time}</p>
            </div>
          </div>
          <button onClick={onClose} className="text-slate-400 hover:text-white p-1 rounded-lg">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Body */}
        <div className="p-6 overflow-y-auto space-y-5 text-xs text-slate-700 flex-1">
          
          {/* Main Interaction Hero Card */}
          <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl space-y-2.5">
            <div className="flex items-center justify-between">
              <span className={`px-2 py-0.5 text-[10px] font-bold rounded border ${event.channelBadge}`}>
                {event.channel}
              </span>
              <span className="text-[11px] font-mono text-slate-400">{event.time}</span>
            </div>
            <h4 className="text-base font-extrabold text-slate-900">{event.title}</h4>
            <p className="text-xs font-semibold text-slate-800 bg-white p-3 rounded-xl border border-slate-200 leading-relaxed shadow-2xs">
              "{event.description}"
            </p>
          </div>

          {/* Session / Engagement Details */}
          <div className="space-y-2">
            <h4 className="font-bold text-slate-900 uppercase tracking-wider text-[11px] flex items-center space-x-1.5">
              <Clock className="w-3.5 h-3.5 text-indigo-600" />
              <span>Session Activity & Actions</span>
            </h4>
            
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 space-y-2 text-xs">
              <div className="flex justify-between border-b border-slate-200/60 pb-1.5">
                <span className="text-slate-500 font-medium">Session Duration / Type:</span>
                <span className="font-bold text-slate-800">{sessionDetails.duration}</span>
              </div>
              
              <div className="space-y-1 pt-1">
                <span className="text-slate-500 font-medium block">Actions Taken in Session:</span>
                <ul className="space-y-1 pl-2">
                  {sessionDetails.actions.map((act, idx) => (
                    <li key={idx} className="flex items-center space-x-2 text-slate-800 font-semibold">
                      <span className="text-indigo-600 font-bold">•</span>
                      <span>{act}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* WHY IT MATTERS BLOCK (Requirement #6) */}
          <div className="p-4 bg-indigo-50 border border-indigo-100 rounded-2xl space-y-2">
            <div className="text-[10px] font-bold text-indigo-800 uppercase tracking-wider flex items-center space-x-1">
              <Brain className="w-3.5 h-3.5 text-indigo-600" />
              <span>Why It Matters:</span>
            </div>
            <p className="text-xs font-semibold text-indigo-950 leading-relaxed">
              "{event.whyItMatters || "This interaction contributed to ADA's High myPricing Cross-Sell Intent signal."}"
            </p>
          </div>

          {/* RELATED AI INSIGHT & RECOMMENDATION */}
          <div className="p-4 bg-slate-900 text-white rounded-2xl space-y-3 shadow-md">
            
            <div className="space-y-1 border-b border-slate-800 pb-2.5">
              <div className="text-[10px] font-bold text-indigo-300 uppercase tracking-wider">
                Related AI Insight
              </div>
              <div className="text-sm font-extrabold text-white flex items-center justify-between">
                <span>HIGH MYPRICING CROSS-SELL INTENT</span>
                <span className="px-2 py-0.2 bg-emerald-500 text-white rounded-full text-[10px]">91% confidence</span>
              </div>
            </div>

            <div className="space-y-1">
              <div className="text-[10px] font-bold text-amber-400 uppercase tracking-wider flex items-center space-x-1">
                <Zap className="w-3 h-3 text-amber-400" />
                <span>Related Recommendation</span>
              </div>
              <div className="text-xs font-bold text-indigo-100">
                Launch myPricing Cross-Sell Campaign
              </div>
            </div>

            <button 
              onClick={() => {
                onClose();
                onNavigateToRecommendation && onNavigateToRecommendation();
              }}
              className="w-full mt-2 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs rounded-xl shadow-md flex items-center justify-center space-x-2 transition-colors"
            >
              <span>View Recommendation & Activate</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* Drawer Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex justify-end shrink-0">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-slate-600 bg-white border border-slate-300 rounded-xl"
          >
            Close Detail
          </button>
        </div>

      </div>
    </div>
  );
}
