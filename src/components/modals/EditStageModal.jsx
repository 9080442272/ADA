import React, { useState } from 'react';
import { X, GitCommit, Check } from 'lucide-react';

export default function EditStageModal({ currentStage, stages, isOpen, onClose, onSave }) {
  const [selectedStage, setSelectedStage] = useState(currentStage);
  const [reason, setReason] = useState("");

  if (!isOpen) return null;

  const handleSave = () => {
    onSave(selectedStage, reason);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-md w-full shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in zoom-in-95 duration-150">
        
        {/* Header */}
        <div className="h-14 px-6 bg-slate-900 text-white flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center space-x-2">
            <GitCommit className="w-4 h-4 text-purple-400" />
            <h3 className="text-xs font-bold text-white uppercase tracking-wider">Update Journey Stage</h3>
          </div>
          <button onClick={onClose} className="text-slate-400 hover:text-white p-1 rounded-lg">
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Body */}
        <div className="p-5 space-y-4 text-xs">
          <div className="space-y-1.5">
            <label className="font-bold text-slate-800 block">Select New Journey Stage:</label>
            <div className="grid grid-cols-2 gap-2">
              {stages.map((stageName) => (
                <button
                  key={stageName}
                  type="button"
                  onClick={() => setSelectedStage(stageName)}
                  className={`p-3 rounded-xl border text-xs font-bold text-left transition-all flex items-center justify-between ${
                    selectedStage === stageName
                      ? 'bg-amber-500 text-white border-amber-500 shadow-sm'
                      : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  <span>{stageName}</span>
                  {selectedStage === stageName && <Check className="w-4 h-4" />}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="font-bold text-slate-800 block">Override Reason / Audit Note:</label>
            <textarea
              rows={3}
              placeholder="e.g. Customer completed dealership visit and test drive booking manually..."
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-amber-500 text-slate-800"
            />
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex justify-end space-x-2">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-slate-600 bg-white border border-slate-300 rounded-xl"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="px-4 py-2 text-xs font-bold text-white bg-amber-600 hover:bg-amber-700 rounded-xl shadow-md"
          >
            Save Stage Update
          </button>
        </div>

      </div>
    </div>
  );
}
