import React, { useState, useRef } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import CustomerHeader from './components/CustomerHeader';
import CustomerTabs from './components/CustomerTabs';
import PrimaryDecisionBlock from './components/PrimaryDecisionBlock';
import UnifiedTimeline from './components/UnifiedTimeline';
import RightSidebar from './components/RightSidebar';
import ValuePropBanner from './components/ValuePropBanner';
import InteractionsTab from './components/InteractionsTab';
import CommercialUsageTab from './components/CommercialUsageTab';
import AttributesTab from './components/AttributesTab';

import PeopleView from './components/PeopleView';

// CDP Modules
import SegmentsView from './components/cdp/SegmentsView';
import TagsDncView from './components/cdp/TagsDncView';
import DuplicatesView from './components/cdp/DuplicatesView';
import DataSourcesView from './components/cdp/DataSourcesView';
import ComplianceView from './components/cdp/ComplianceView';
import EventsView from './components/cdp/EventsView';
import GlobalAttributesView from './components/cdp/GlobalAttributesView';

// Modals
import ActionModal from './components/modals/ActionModal';
import WhyTheseModal from './components/modals/WhyTheseModal';
import StartConversationModal from './components/modals/StartConversationModal';
import InsightDetailDrawer from './components/modals/InsightDetailDrawer';
import EditStageModal from './components/modals/EditStageModal';
import InteractionDetailDrawer from './components/modals/InteractionDetailDrawer';
import ProductDetailDrawer from './components/modals/ProductDetailDrawer';
import EditAttributeDrawer from './components/modals/EditAttributeDrawer';
import AddAttributeModal from './components/modals/AddAttributeModal';

// Dataset
import { initialCustomer } from './data/customerData';
import { CheckCircle2, Sparkles, X } from 'lucide-react';

export default function App() {
  const [customer, setCustomer] = useState(initialCustomer);
  const [activeTab, setActiveTab] = useState("Overview");
  const [activeSubTab, setActiveSubTab] = useState("Overview");

  // Trace State
  const [activeTraceInsightId, setActiveTraceInsightId] = useState(null);

  // Modal / Drawer States
  const [selectedActionForModal, setSelectedActionForModal] = useState(null);
  const [executedActionIds, setExecutedActionIds] = useState([]);
  const [isWhyTheseOpen, setIsWhyTheseOpen] = useState(false);
  const [isStartChatOpen, setIsStartChatOpen] = useState(false);
  const [selectedInsightForDrawer, setSelectedInsightForDrawer] = useState(null);
  const [selectedInteractionForDrawer, setSelectedInteractionForDrawer] = useState(null);
  const [selectedProductForDrawer, setSelectedProductForDrawer] = useState(null);
  const [selectedAttributeForEdit, setSelectedAttributeForEdit] = useState(null);
  const [isAddCustomAttributeOpen, setIsAddCustomAttributeOpen] = useState(false);
  const [isEditStageOpen, setIsEditStageOpen] = useState(false);

  // Ref for auto-scrolling to full timeline
  const timelineRef = useRef(null);

  // Toast Notification State
  const [toastMessage, setToastMessage] = useState(null);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  // Scroll to full timeline
  const handleScrollToTimeline = () => {
    if (timelineRef.current) {
      timelineRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Action Confirmation Execution
  const handleConfirmAction = (actionId) => {
    if (!executedActionIds.includes(actionId)) {
      setExecutedActionIds([...executedActionIds, actionId]);
      showToast(`Activated: Launch myPricing Cross-Sell Campaign for TechGear Europe!`);
    }
  };

  // Stage Update Handler
  const handleSaveStage = (newStage, reason) => {
    setCustomer(prev => ({
      ...prev,
      journey: {
        ...prev.journey,
        currentStage: newStage,
        reason: reason ? `Manual override: ${reason}` : prev.journey.reason
      }
    }));
    showToast(`Updated Account Lifecycle stage to "${newStage}"`);
  };

  // Attribute Handlers
  const handleSaveAttribute = (attrId, newValue) => {
    setCustomer(prev => ({
      ...prev,
      attributesData: {
        ...prev.attributesData,
        attributesList: prev.attributesData.attributesList.map(a => 
          a.id === attrId ? { ...a, value: newValue, lastUpdated: "Just now", syncStatus: "Healthy" } : a
        )
      }
    }));
    showToast("Attribute updated successfully!");
  };

  const handleCreateCustomAttribute = (newAttr) => {
    setCustomer(prev => ({
      ...prev,
      attributesData: {
        ...prev.attributesData,
        summary: {
          ...prev.attributesData.summary,
          total: prev.attributesData.summary.total + 1,
          customCount: prev.attributesData.summary.customCount + 1
        },
        attributesList: [newAttr, ...prev.attributesData.attributesList]
      }
    }));
    showToast(`Custom attribute "${newAttr.name}" created successfully!`);
  };

  // Quick Action menu select
  const handleHeaderActionSelect = (actionType) => {
    if (actionType === 'edit_profile') {
      showToast("Opened Edit Account Profile drawer");
    } else if (actionType === 'export_data') {
      showToast("Exported TechGear Europe Account 360 PDF report!");
    } else if (actionType === 'block_customer') {
      showToast("Account marketing consent status updated");
    } else if (actionType === 'view_cdp') {
      showToast("Opening CDP account record for ACC-89420-EU");
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col font-sans">
      
      {/* Toast Popup Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-slate-900 text-white px-5 py-3 rounded-2xl shadow-2xl border border-slate-700 flex items-center space-x-3 animate-in slide-in-from-bottom-5 duration-200">
          <div className="w-6 h-6 rounded-lg bg-emerald-500 text-white flex items-center justify-center font-bold">
            <CheckCircle2 className="w-3.5 h-3.5" />
          </div>
          <div className="text-xs font-semibold">{toastMessage}</div>
          <button onClick={() => setToastMessage(null)} className="text-slate-400 hover:text-white ml-2">
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* App Main Shell */}
      <div className="flex flex-1 w-full min-h-screen">
        
        {/* LEFT SIDEBAR */}
        <Sidebar 
          activeSubTab={activeSubTab} 
          onSelectSubTab={(tab) => {
            setActiveSubTab(tab);
            if (["Overview", "Interactions", "Commercial & Usage", "Attributes"].includes(tab)) {
              setActiveTab(tab);
            } else {
              setActiveTab("CDP_MODULE");
            }
          }} 
        />

        {/* MAIN BODY AREA */}
        <div className="flex-1 flex flex-col min-w-0 bg-slate-50">
          
          {/* 1. TOP BAR */}
          <Header />

          {/* MAIN PAGE CONTENT AREA */}
          <main className="p-6 max-w-7xl w-full mx-auto space-y-6">
            
            {activeSubTab === "People" ? (
              <PeopleView 
                customer={customer} 
                onSelectCustomer={(c) => {
                  setActiveTab("Overview");
                  setActiveSubTab("Overview");
                  showToast(`Opened Account 360 profile for ${c.name}`);
                }}
                onShowToast={showToast}
              />
            ) : ["Global_Attributes", "Segments", "Events", "Tags & DNC", "Duplicates", "Data Sources", "Compliance & GDPR"].includes(activeSubTab) ? (
              <div>
                {activeSubTab === "Global_Attributes" && <GlobalAttributesView customer={customer} onShowToast={showToast} />}
                {activeSubTab === "Segments" && <SegmentsView customer={customer} onShowToast={showToast} />}
                {activeSubTab === "Events" && <EventsView customer={customer} onShowToast={showToast} />}
                {activeSubTab === "Tags & DNC" && <TagsDncView customer={customer} onShowToast={showToast} />}
                {activeSubTab === "Duplicates" && <DuplicatesView customer={customer} onShowToast={showToast} />}
                {activeSubTab === "Data Sources" && <DataSourcesView customer={customer} onShowToast={showToast} />}
                {activeSubTab === "Compliance & GDPR" && <ComplianceView customer={customer} onShowToast={showToast} />}
              </div>
            ) : (
              <div className="space-y-5">
                
                {/* 1. CUSTOMER PROFILE HEADER SECTION (B2B Account 360) */}
                <CustomerHeader 
                  customer={customer}
                  onStartConversation={() => setIsStartChatOpen(true)}
                  onActionSelect={handleHeaderActionSelect}
                  onBackToPeople={() => setActiveSubTab("People")}
                />

                {/* 2. CUSTOMER TABS STRIP (4 ACCOUNT TABS: Overview, Interactions, Commercial & Usage, Attributes) */}
                <CustomerTabs 
                  activeTab={activeSubTab} 
                  onSelectTab={(tab) => {
                    setActiveTab(tab);
                    setActiveSubTab(tab);
                  }} 
                />

                {/* 3. ACCOUNT 360 TAB CONTENT */}
                {activeTab === "Overview" ? (
                  <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 items-start">
                    
                    {/* PRIMARY DECISION BLOCK & RECENT INTERACTIONS SUMMARY (8 Cols) */}
                    <div className="xl:col-span-8 space-y-6">
                      <PrimaryDecisionBlock 
                        customer={customer}
                        onExecutePrimaryAction={(act) => setSelectedActionForModal(act)}
                        onWhyThisClick={() => setIsWhyTheseOpen(true)}
                        isExecuted={executedActionIds.includes(customer.primaryAction.id)}
                        onViewFullTimeline={() => {
                          setActiveTab("Interactions");
                          setActiveSubTab("Interactions");
                        }}
                      />
                    </div>

                    {/* CONTEXTUAL SIDEBAR: SEGMENTS, CAMPAIGNS, SUBSCRIPTIONS (4 Cols) */}
                    <div className="xl:col-span-4">
                      <RightSidebar 
                        customer={customer}
                        onSegmentClick={(seg) => showToast(`Filtering by segment: ${seg.name}`)}
                        onOrderClick={(ord) => showToast(`Viewing subscription details for ${ord.name}`)}
                        onEntityClick={(ent) => showToast(`Inspecting related graph entity: ${ent.name}`)}
                      />
                    </div>

                  </div>
                ) : activeTab === "Interactions" ? (
                  <InteractionsTab 
                    customer={customer}
                    onViewEventDetails={(evt) => setSelectedInteractionForDrawer(evt)}
                    onNavigateToOverview={() => setActiveTab("Overview")}
                  />
                ) : activeTab === "Commercial & Usage" ? (
                  <CommercialUsageTab 
                    customer={customer}
                    onSelectProductDetails={(prod) => setSelectedProductForDrawer(prod)}
                    onLaunchCampaign={(act) => setSelectedActionForModal(act || customer.primaryAction)}
                  />
                ) : activeTab === "Attributes" ? (
                  <AttributesTab 
                    customer={customer}
                    onEditAttribute={(attr) => setSelectedAttributeForEdit(attr)}
                    onAddCustomAttribute={() => setIsAddCustomAttributeOpen(true)}
                    onViewSegmentDetails={(attr) => showToast(`Filtering CDP segments using attribute: ${attr.name}`)}
                    onViewInsightEvidence={(attr) => showToast(`ADA Evidence: ${attr.aiDerived?.evidence?.join(" • ") || "Verified signal"}`)}
                  />
                ) : null}

              </div>
            )}

            {/* BOTTOM VALUE PROPOSITION PARADIGM BANNER */}
            <ValuePropBanner />

          </main>

        </div>

      </div>

      {/* GLOBAL MODALS & DRAWERS */}
      <ActionModal 
        action={selectedActionForModal}
        isOpen={Boolean(selectedActionForModal)}
        onClose={() => setSelectedActionForModal(null)}
        onConfirm={handleConfirmAction}
      />

      <WhyTheseModal 
        isOpen={isWhyTheseOpen}
        onClose={() => setIsWhyTheseOpen(false)}
        customer={customer}
      />

      <StartConversationModal 
        customer={customer}
        isOpen={isStartChatOpen}
        onClose={() => setIsStartChatOpen(false)}
        onSend={({ channel, message }) => showToast(`Sent ${channel} campaign to Antoine Laurent!`)}
      />

      <InsightDetailDrawer 
        insight={selectedInsightForDrawer}
        isOpen={Boolean(selectedInsightForDrawer)}
        onClose={() => setSelectedInsightForDrawer(null)}
        onExecuteRelatedAction={() => setSelectedActionForModal(customer.primaryAction)}
      />

      <InteractionDetailDrawer 
        event={selectedInteractionForDrawer}
        isOpen={Boolean(selectedInteractionForDrawer)}
        onClose={() => setSelectedInteractionForDrawer(null)}
        onNavigateToRecommendation={() => {
          setActiveTab("Overview");
          setSelectedActionForModal(customer.primaryAction);
        }}
      />

      <ProductDetailDrawer 
        product={selectedProductForDrawer}
        isOpen={Boolean(selectedProductForDrawer)}
        onClose={() => setSelectedProductForDrawer(null)}
        onLaunchCampaign={() => {
          setSelectedActionForModal(customer.primaryAction);
        }}
      />

      <EditAttributeDrawer 
        attribute={selectedAttributeForEdit}
        isOpen={Boolean(selectedAttributeForEdit)}
        onClose={() => setSelectedAttributeForEdit(null)}
        onSave={handleSaveAttribute}
      />

      <AddAttributeModal 
        isOpen={isAddCustomAttributeOpen}
        onClose={() => setIsAddCustomAttributeOpen(false)}
        onCreate={handleCreateCustomAttribute}
      />

      <EditStageModal 
        currentStage={customer.journey.currentStage}
        stages={customer.journey.stages}
        isOpen={isEditStageOpen}
        onClose={() => setIsEditStageOpen(false)}
        onSave={handleSaveStage}
      />

    </div>
  );
}
