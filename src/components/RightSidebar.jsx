import React from 'react';
import { 
  Megaphone,
  CreditCard,
  GitCommit
} from 'lucide-react';

export default function RightSidebar({ customer, onSegmentClick, onOrderClick, onEntityClick }) {
  return (
    <aside className="w-full space-y-5">

      {/* Block 1: ACCOUNT LIFECYCLE CARD */}
      <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-4 space-y-3">
        <div className="flex items-center justify-between border-b border-slate-100 pb-2.5">
          <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center space-x-1.5">
            <GitCommit className="w-3.5 h-3.5 text-indigo-600" />
            <span>ACCOUNT LIFECYCLE</span>
          </h3>
          <span className="px-2 py-0.5 text-[10px] font-extrabold bg-amber-100 text-amber-900 border border-amber-300 rounded-md">
            Product Interest
          </span>
        </div>

        {/* Lifecycle Stage Stepper */}
        <div className="flex items-center justify-between text-[10px] font-bold py-2 px-2.5 bg-slate-50 rounded-xl border border-slate-200/80 overflow-x-auto">
          {["Awareness", "Evaluation", "Product Interest", "Expansion"].map((st, idx) => {
            const isCurrent = st === "Product Interest";
            const isPast = st === "Awareness" || st === "Evaluation";
            return (
              <React.Fragment key={st}>
                <span className={`px-1.5 py-0.5 rounded shrink-0 ${
                  isCurrent 
                    ? 'bg-amber-500 text-white font-extrabold text-[9px] flex items-center space-x-1' 
                    : isPast
                    ? 'text-slate-700 bg-slate-200/80 font-semibold'
                    : 'text-slate-400 font-normal'
                }`}>
                  {isCurrent && <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />}
                  <span>{st}</span>
                </span>
                {idx < 3 && <span className="text-slate-300 text-[9px] px-0.5">➔</span>}
              </React.Fragment>
            );
          })}
        </div>

        {/* Stage Metadata Grid */}
        <div className="grid grid-cols-2 gap-2 text-center bg-slate-50 border border-slate-200/80 rounded-xl p-2.5">
          <div>
            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">STAGE ENTERED</div>
            <div className="text-xs font-extrabold text-slate-900 mt-0.5">5 days ago</div>
          </div>
          <div>
            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">CONFIDENCE</div>
            <div className="text-xs font-extrabold text-emerald-700 mt-0.5">91% (High)</div>
          </div>
        </div>

        {/* Next Stage Banner */}
        <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
          <span className="text-slate-500 font-semibold text-[11px]">Next likely stage:</span>
          <span className="font-extrabold text-indigo-700 text-[11px]">
            ➔ Expansion
          </span>
        </div>
      </div>

      {/* Block 2: ACTIVE SUBSCRIPTION */}
      <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-4 space-y-3">
        <div className="flex items-center justify-between border-b border-slate-100 pb-2.5">
          <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center space-x-1.5">
            <CreditCard className="w-3.5 h-3.5 text-indigo-600" />
            <span>ACTIVE SUBSCRIPTION</span>
          </h3>
          <button 
            onClick={() => onOrderClick && onOrderClick({ items: "myFulfillment Pro Plan", amount: "€1,850/mo", status: "Active" })}
            className="text-[11px] font-bold text-indigo-600 hover:text-indigo-800 flex items-center space-x-0.5 cursor-pointer"
          >
            <span>View subscription →</span>
          </button>
        </div>

        <div className="space-y-3">
          {/* Product Name & Status */}
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs font-extrabold text-slate-900">myFulfillment Pro Plan</div>
              <div className="text-[11px] text-slate-500 font-medium">Fulfillment & Operations</div>
            </div>
            <span className="px-2 py-0.5 text-[10px] font-extrabold bg-emerald-50 text-emerald-800 border border-emerald-200 rounded-md flex items-center space-x-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <span>Active</span>
            </span>
          </div>

          {/* 3 Metrics Strip */}
          <div className="grid grid-cols-3 gap-2 text-center bg-slate-50 border border-slate-200/80 rounded-xl p-2.5">
            <div>
              <div className="text-xs font-extrabold text-slate-900 font-mono">€1,850 / mo</div>
              <div className="text-[10px] text-slate-400 font-medium">Current plan</div>
            </div>
            <div>
              <div className="text-xs font-extrabold text-slate-900 font-mono">1,420 orders/wk</div>
              <div className="text-[10px] text-slate-400 font-medium">Current usage</div>
            </div>
            <div>
              <div className="text-xs font-extrabold text-slate-900">Mar 2023</div>
              <div className="text-[10px] text-slate-400 font-medium">Customer since</div>
            </div>
          </div>

          {/* Feature Adoption Bar */}
          <div className="space-y-1">
            <div className="flex items-center justify-between text-[11px]">
              <span className="font-bold text-slate-700">Feature adoption</span>
              <span className="font-extrabold text-emerald-700">82%</span>
            </div>
            <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden border border-slate-200/60">
              <div className="h-full bg-emerald-500 rounded-full transition-all" style={{ width: '82%' }} />
            </div>
          </div>
        </div>
      </div>

      {/* Block 3: RECENT CAMPAIGN ACTIVITY */}
      <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-4 space-y-3">
        <div className="flex items-center justify-between border-b border-slate-100 pb-2.5">
          <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center space-x-1.5">
            <Megaphone className="w-3.5 h-3.5 text-indigo-600" />
            <span>Recent Campaign Activity</span>
          </h3>
          <span className="text-[10px] font-semibold text-indigo-700 bg-indigo-50 px-1.5 py-0.5 rounded border border-indigo-200">
            Account Specific
          </span>
        </div>

        <div className="space-y-2 text-xs">
          {/* Campaign Action 1 */}
          <div className="p-3 bg-slate-50 border border-slate-200/80 rounded-xl space-y-1.5">
            <div className="flex items-center justify-between">
              <span className="font-extrabold text-slate-900 truncate">Pricing Strategy Campaign</span>
              <span className="text-[10px] font-mono text-slate-400">Today · 9:15 AM</span>
            </div>
            <div className="space-y-1 text-[11px]">
              <div className="flex items-center space-x-1.5 text-emerald-800 font-medium">
                <span className="w-3.5 h-3.5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-[9px]">✓</span>
                <span>Opened campaign email</span>
              </div>
              <div className="flex items-center space-x-1.5 text-emerald-800 font-medium">
                <span className="w-3.5 h-3.5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-[9px]">✓</span>
                <span>Clicked "Explore myPricing"</span>
              </div>
            </div>
          </div>

          {/* Campaign Action 2 */}
          <div className="p-3 bg-slate-50 border border-slate-200/80 rounded-xl space-y-1.5">
            <div className="flex items-center justify-between">
              <span className="font-extrabold text-slate-900 truncate">Competitive Pricing Webinar</span>
              <span className="text-[10px] font-mono text-slate-400">5 days ago</span>
            </div>
            <div className="space-y-1 text-[11px]">
              <div className="flex items-center space-x-1.5 text-emerald-800 font-medium">
                <span className="w-3.5 h-3.5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-[9px]">✓</span>
                <span>Attended 42 / 45 min</span>
              </div>
              <div className="flex items-center space-x-1.5 text-emerald-800 font-medium">
                <span className="w-3.5 h-3.5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-[9px]">✓</span>
                <span>Submitted API integration question</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-1 border-t border-slate-100 flex items-center justify-between">
          <button 
            onClick={() => onOrderClick && onOrderClick({ items: "Campaign History" })}
            className="text-[11px] font-bold text-indigo-600 hover:text-indigo-800 flex items-center space-x-1 cursor-pointer"
          >
            <span>View campaign history →</span>
          </button>
        </div>
      </div>

    </aside>
  );
}
