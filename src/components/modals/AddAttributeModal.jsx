import React, { useState } from 'react';
import { X, Plus, Sparkles, Sliders, CheckCircle2 } from 'lucide-react';

export default function AddAttributeModal({ isOpen, onClose, onCreate }) {
  if (!isOpen) return null;

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [dataType, setDataType] = useState("Dropdown");
  const [category, setCategory] = useState("Commercial");
  const [defaultValue, setDefaultValue] = useState("");
  const [options, setOptions] = useState("Low, Medium, High");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) return;

    onCreate && onCreate({
      id: `attr-custom-${Date.now()}`,
      name,
      value: defaultValue || "High",
      category: category.toUpperCase(),
      isCustom: true,
      source: "Manual Entry / Marketing Team",
      lastUpdated: "Just now",
      dataType,
      syncStatus: "Healthy",
      usedInSegments: "1 segment"
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-xs z-50 flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-lg rounded-2xl shadow-2xl border border-slate-200 overflow-hidden animate-in zoom-in-95 duration-150">
        
        {/* Modal Header */}
        <div className="px-6 py-4 bg-slate-900 text-white flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center space-x-2.5">
            <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white font-bold">
              <Plus className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white">Add Custom Attribute</h3>
              <p className="text-[11px] text-slate-400">Define a custom attribute for segment targeting & AI rules</p>
            </div>
          </div>
          <button onClick={onClose} className="text-slate-400 hover:text-white p-1 rounded-lg cursor-pointer">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4 text-xs">
          
          <div className="space-y-1">
            <label className="block font-bold text-slate-800">Attribute Name *</label>
            <input 
              type="text"
              required
              placeholder="e.g. Expansion potential, Preferred tier..."
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-xl text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div className="space-y-1">
            <label className="block font-bold text-slate-800">Description</label>
            <input 
              type="text"
              placeholder="Brief explanation of attribute purpose..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-xl text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1">
              <label className="block font-bold text-slate-800">Data Type</label>
              <select
                value={dataType}
                onChange={(e) => setDataType(e.target.value)}
                className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-xl text-xs font-bold text-slate-800 focus:outline-none cursor-pointer"
              >
                <option value="Text">Text</option>
                <option value="Number">Number</option>
                <option value="Boolean">Boolean</option>
                <option value="Date">Date</option>
                <option value="Dropdown">Dropdown</option>
                <option value="Multi-select">Multi-select</option>
              </select>
            </div>

            <div className="space-y-1">
              <label className="block font-bold text-slate-800">Category</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-xl text-xs font-bold text-slate-800 focus:outline-none cursor-pointer"
              >
                <option value="Company Information">Company Information</option>
                <option value="Commercial">Commercial</option>
                <option value="Product & Usage">Product & Usage</option>
                <option value="Marketing">Marketing</option>
                <option value="Behavioural">Behavioural</option>
                <option value="Consent & Privacy">Consent & Privacy</option>
              </select>
            </div>
          </div>

          {(dataType === "Dropdown" || dataType === "Multi-select") && (
            <div className="space-y-1">
              <label className="block font-bold text-slate-800">Dropdown Options (Comma separated)</label>
              <input 
                type="text"
                value={options}
                onChange={(e) => setOptions(e.target.value)}
                placeholder="Low, Medium, High"
                className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-xl text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          )}

          <div className="space-y-1">
            <label className="block font-bold text-slate-800">Initial Default Value</label>
            <input 
              type="text"
              placeholder="e.g. High"
              value={defaultValue}
              onChange={(e) => setDefaultValue(e.target.value)}
              className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-xl text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Modal Actions */}
          <div className="pt-3 border-t border-slate-200 flex justify-end space-x-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs font-bold text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-xl border border-slate-300 cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 text-xs font-extrabold text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl shadow-md cursor-pointer"
            >
              Create attribute
            </button>
          </div>

        </form>

      </div>
    </div>
  );
}
