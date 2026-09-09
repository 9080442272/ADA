import React from 'react';
import { 
  X, 
  Sparkles, 
  CheckCircle2, 
  Clock, 
  Package, 
  TrendingUp, 
  Brain, 
  Zap, 
  ArrowRight,
  ShieldAlert,
  Globe,
  FileText,
  Video
} from 'lucide-react';

export default function ProductDetailDrawer({ product, isOpen, onClose, onLaunchCampaign }) {
  if (!isOpen || !product) return null;

  const isPricing = product.id === "prod-mypricing";

  return (
    <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-xs z-50 flex justify-end">
      <div className="bg-white w-full max-w-md h-full shadow-2xl border-l border-slate-200 flex flex-col animate-in slide-in-from-right duration-200">
        
        {/* Drawer Header */}
        <div className="h-16 px-6 bg-slate-900 text-white flex items-center justify-between border-b border-slate-800 shrink-0">
          <div className="flex items-center space-x-2.5">
            <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white font-bold">
              <Package className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white">{product.name} Intelligence</h3>
              <p className="text-[11px] text-slate-400">{product.category}</p>
            </div>
          </div>
          <button onClick={onClose} className="text-slate-400 hover:text-white p-1 rounded-lg cursor-pointer">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Body */}
        <div className="p-6 overflow-y-auto space-y-5 text-xs text-slate-700 flex-1">
          
          {/* Main Product Overview Status Card */}
          <div className={`p-4 rounded-2xl border space-y-3 ${
            isPricing 
              ? 'bg-indigo-50/70 border-indigo-200' 
              : 'bg-slate-50 border-slate-200'
          }`}>
            <div className="flex items-center justify-between">
              <span className={`px-2.5 py-0.5 text-[10px] font-extrabold rounded-md border ${product.statusBadge}`}>
                Status: {product.status}
              </span>

              {product.interest ? (
                <span className="px-2.5 py-0.5 text-[10px] font-extrabold bg-emerald-100 text-emerald-800 rounded-md border border-emerald-300">
                  Interest: {product.interest}
                </span>
              ) : (
                <span className="text-[11px] font-mono text-slate-400">Since: {product.since}</span>
              )}
            </div>

            <div className="flex items-baseline justify-between pt-1">
              <h4 className="text-lg font-extrabold text-slate-900">{product.name}</h4>
              <span className="text-xs font-extrabold text-indigo-600 flex items-center space-x-1">
                <TrendingUp className="w-3.5 h-3.5" />
                <span>Trend: {product.trend}</span>
              </span>
            </div>
          </div>

          {/* Product Signals & Telemetry */}
          <div className="space-y-2">
            <h4 className="font-bold text-slate-900 uppercase tracking-wider text-[11px] flex items-center space-x-1.5">
              <Clock className="w-3.5 h-3.5 text-indigo-600" />
              <span>Engagement & Intent Signals</span>
            </h4>

            <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 space-y-2">
              <ul className="space-y-2">
                {(product.signals || [
                  `Product page visits: ${product.pageVisits || 0}`,
                  `Content downloads: ${product.guideDownloads || 0}`,
                  `Event attendance: ${product.webinarAttendance || 0}`
                ]).map((sig, idx) => (
                  <li key={idx} className="flex items-start space-x-2 text-xs text-slate-800 font-semibold">
                    <span className="text-indigo-600 font-bold">•</span>
                    <span>{sig}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* AI INTERPRETATION & RECOMMENDATION (Requirement #7) */}
          <div className="p-4 bg-slate-900 text-white rounded-2xl space-y-3 shadow-md">
            
            <div className="space-y-1 border-b border-slate-800 pb-2.5">
              <div className="text-[10px] font-bold text-indigo-300 uppercase tracking-wider flex items-center space-x-1">
                <Brain className="w-3.5 h-3.5 text-indigo-400" />
                <span>AI Commercial Interpretation</span>
              </div>
              <p className="text-xs font-bold text-white leading-relaxed">
                "{isPricing ? "High cross-sell intent detected. Account shows natural progression toward myPricing based on current usage patterns." : `Account is in ${product.status} stage for ${product.name}.`}"
              </p>
            </div>

            <div className="space-y-1">
              <div className="text-[10px] font-bold text-amber-400 uppercase tracking-wider flex items-center space-x-1">
                <Zap className="w-3 h-3 text-amber-400" />
                <span>Recommended Action</span>
              </div>
              <div className="text-xs font-bold text-indigo-100">
                {isPricing ? "Launch myPricing Cross-Sell Campaign" : `Initiate ${product.name} Nurture Sequence`}
              </div>
            </div>

            <button 
              onClick={() => {
                onClose();
                onLaunchCampaign && onLaunchCampaign();
              }}
              className="w-full mt-2 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs rounded-xl shadow-md flex items-center justify-center space-x-2 transition-colors cursor-pointer"
            >
              <Zap className="w-3.5 h-3.5 text-amber-300" />
              <span>Add to Campaign & Activate</span>
            </button>
          </div>

        </div>

        {/* Drawer Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex justify-end shrink-0">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-slate-600 bg-white border border-slate-300 rounded-xl cursor-pointer"
          >
            Close Detail
          </button>
        </div>

      </div>
    </div>
  );
}
