export const initialCustomer = {
  id: "ACC-89420-EU",
  name: "TechGear Europe",
  logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=200&auto=format&fit=crop&q=80",
  accountType: "E-commerce Retailer",
  status: "Active Customer",
  segmentTier: "High-value account",
  industry: "Consumer Electronics & Accessories",
  companySize: "50 - 200 employees",
  location: "Paris, France",
  country: "France",
  primaryContact: "Antoine Laurent (Head of E-Commerce)",
  contactEmail: "antoine.l@techgear.fr",
  contactPhone: "+33 1 42 68 55 00",
  customerSince: "2023",
  accountOwner: "Claire Dubois (Senior Account Manager)",
  
  // PRODUCT ADOPTION RELATIONSHIP
  products: {
    currentlyUsing: "myFulfillment",
    interestedIn: "myPricing",
    potentialNextProduct: "myPricing"
  },

  tags: ["Existing Customer", "myFulfillment", "Pricing Interest", "High Intent", "Enterprise Retailer"],
  
  metrics: {
    ltv: "€84,500",
    activeProducts: "1 (myFulfillment)",
    expansionPotential: "High",
    expansionBadge: "bg-emerald-100 text-emerald-800 border-emerald-300",
    marketingEngagement: "82%",
    engagementBadge: "bg-indigo-100 text-indigo-800 border-indigo-200",
    lastActive: "2 hours ago",
    lastActiveSubtext: "via myFulfillment Dashboard"
  },

  // B2B MARKETING LIFECYCLE JOURNEY
  journey: {
    currentStage: "PRODUCT INTEREST",
    stages: ["Awareness", "Evaluation", "PRODUCT INTEREST", "Expansion", "Advocacy"],
    reason: "Account is actively researching pricing capabilities and comparing solutions."
  },
  
  // PRIMARY B2B MARKETING AI INSIGHT (DOMINANT FOCUS)
  primaryInsight: {
    id: "ins-primary",
    title: "HIGH MYPRICING CROSS-SELL INTENT",
    confidence: 91,
    badgeColor: "bg-emerald-50 text-emerald-800 border-emerald-300",
    progressColor: "bg-emerald-600",
    headline: "TechGear Europe is showing strong interest in myPricing based on repeated pricing-related behaviour across website, email and webinar engagement.",
    whyAdaThinksThis: [
      "Visited myPricing product page 4 times in 7 days",
      "Downloaded the pricing guide ('Dynamic Pricing Playbook')",
      "Attended the Competitive Pricing webinar (stayed for 42 minutes)",
      "Opened 3 pricing-related campaign emails",
      "Compared competitor pricing features"
    ]
  },

  // SECONDARY MARKETING INSIGHTS
  secondaryInsights: [
    {
      id: "ins-2",
      title: "Competitor monitoring urgency",
      confidence: 84,
      explanation: "High frequency views on Amazon & Fnac price scraping modules."
    },
    {
      id: "ins-3",
      title: "High campaign responsiveness",
      confidence: 79,
      explanation: "Open rate 82% on B2B product feature announcements."
    },
    {
      id: "ins-4",
      title: "Expansion readiness score",
      confidence: 88,
      explanation: "myFulfillment usage up +45% in Q3; ready for multi-tool stack."
    }
  ],

  // PRIMARY RECOMMENDED NEXT BEST MARKETING ACTION
  primaryAction: {
    id: "act-primary",
    title: "Launch myPricing Cross-Sell Campaign",
    confidence: 91,
    ctaText: "Add to Campaign",
    actionType: "add_campaign",
    whyThisAction: "Account is an existing myFulfillment customer showing repeated pricing-related intent across website and webinars.",
    payload: {
      campaignName: "myPricing Cross-Sell Europe 2026",
      channel: "Omnichannel (Email + In-App Banner)",
      targetAccount: "TechGear Europe (ACC-89420-EU)",
      incentive: "Free 14-Day myPricing Pilot + Strategy Session"
    }
  },

  // SECONDARY MARKETING ACTIONS
  secondaryActions: [
    {
      id: "act-2",
      title: "Add to High-Intent Pricing Segment",
      reason: "Automated inclusion in High-Intent Enterprise Retailers audience",
      confidence: 88,
      ctaText: "Add to Segment",
      actionType: "add_segment"
    },
    {
      id: "act-3",
      title: "Send Personalized myPricing Email",
      reason: "Custom executive briefing on dynamic repricing ROI",
      confidence: 82,
      ctaText: "Create Campaign",
      actionType: "send_email"
    },
    {
      id: "act-4",
      title: "Invite to myPricing Demo",
      reason: "Connect Antoine Laurent with B2B pricing specialist",
      confidence: 76,
      ctaText: "Send Invite",
      actionType: "send_invite"
    },
    {
      id: "act-5",
      title: "Assign to Account Marketing Journey",
      reason: "Trigger 14-day Boostmyshop Expansion Nurture sequence",
      confidence: 72,
      ctaText: "Add to Journey",
      actionType: "assign_journey"
    }
  ],

  // COMPACT SUPPORTING EVIDENCE CHECKLIST
  supportingEvidence: [
    { text: "Visited myPricing page 4× in 7 days", channel: "Website", icon: "Globe" },
    { text: "Downloaded 'Dynamic Pricing Playbook'", channel: "Website", icon: "FileText" },
    { text: "Attended Competitive Pricing webinar (42 mins)", channel: "Webinar", icon: "Video" },
    { text: "Opened 3 pricing-related emails", channel: "Email", icon: "Mail" },
    { text: "Compared competitor pricing features", channel: "Website", icon: "Globe" }
  ],

  // 18 FULL B2B MARKETING INTERACTIONS (FOR INTERACTIONS TAB)
  interactionSummary: {
    totalInteractions: 18,
    lastActive: "2 hours ago",
    highIntentSignals: 5,
    channelsCount: 4
  },

  // HIGH-VALUE SIGNALS RELEVANT TO CURRENT OPPORTUNITY
  opportunitySignals: [
    {
      id: "sig-1",
      badge: "HIGH INTENT SIGNAL",
      badgeColor: "bg-emerald-100 text-emerald-800 border-emerald-300",
      title: "Viewed myPricing page 4× in 7 days",
      channel: "Website",
      time: "Today · 10:42 AM",
      actionText: "4th visit in 7 days",
      whyItMatters: "Strong repeated interest in pricing capabilities and automated margin optimization.",
      contributedTo: "High myPricing cross-sell intent — 91%",
      sessionDetails: {
        duration: "6 min 42 sec",
        actions: ["Viewed pricing features", "Opened pricing comparison matrix", "Used pricing ROI calculator"]
      }
    },
    {
      id: "sig-2",
      badge: "MARKETING SIGNAL",
      badgeColor: "bg-blue-100 text-blue-800 border-blue-300",
      title: "Opened 3 pricing-related emails",
      channel: "Email",
      time: "Today · 9:15 AM",
      actionText: "Opened & clicked 'See pricing features'",
      whyItMatters: "High campaign responsiveness to margin strategy content and European repricing case studies.",
      contributedTo: "High myPricing cross-sell intent — 91%",
      sessionDetails: {
        duration: "Email Campaign #PRC-2026",
        actions: ["Opened email", "Clicked primary CTA 'Explore myPricing'", "Downloaded PDF attachment"]
      }
    },
    {
      id: "sig-3",
      badge: "CONTENT SIGNAL",
      badgeColor: "bg-purple-100 text-purple-800 border-purple-300",
      title: "Downloaded 'Dynamic Pricing Playbook'",
      channel: "Website",
      time: "3 days ago",
      actionText: "PDF Downloaded",
      whyItMatters: "Active evaluation of dynamic pricing playbooks for multi-marketplace European e-commerce.",
      contributedTo: "High myPricing cross-sell intent — 91%",
      sessionDetails: {
        duration: "Resource Download",
        actions: ["Filled lead form", "Downloaded 24-page PDF playbook", "Shared with internal e-commerce team"]
      }
    },
    {
      id: "sig-4",
      badge: "EVENT SIGNAL",
      badgeColor: "bg-amber-100 text-amber-800 border-amber-300",
      title: "Attended Competitive Pricing webinar — 42 min",
      channel: "Webinar",
      time: "Yesterday · 3:00 PM",
      actionText: "Attended 42 mins of 45 min session",
      whyItMatters: "Antoine Laurent attended live session & submitted Q&A question regarding Amazon API repricing frequency.",
      contributedTo: "High myPricing cross-sell intent — 91%",
      sessionDetails: {
        duration: "42 minutes",
        actions: ["Joined live stream", "Stayed through Q&A", "Submitted API integration question"]
      }
    }
  ],

  // CAMPAIGN JOURNEY PROGRESSION
  campaignProgression: {
    campaignName: "Pricing Strategy 2026",
    steps: [
      { step: "Email Sent", status: "Completed", time: "Jan 12" },
      { step: "Opened", status: "Completed", time: "Jan 12, 9:15 AM" },
      { step: "Clicked Link", status: "Completed", time: "Jan 12, 9:18 AM" },
      { step: "Visited Product Page", status: "Completed", time: "Jan 12, 10:42 AM" },
      { step: "Downloaded Playbook", status: "Completed", time: "Jan 15" }
    ]
  },

  // FULL CHRONOLOGICAL TIMELINE EVENTS (18 EVENTS)
  timelineEvents: [
    {
      id: "evt-1",
      time: "Today, 10:42 AM",
      timestamp: "2026-09-09T10:42:00",
      channel: "Website",
      channelBadge: "bg-blue-100 text-blue-800 border-blue-300",
      iconName: "Globe",
      title: "Viewed myPricing Product Page",
      description: "Visited myPricing product page for the 4th time this week. Spent 6m 42s exploring dynamic repricing rules.",
      ctaText: "View details",
      type: "viewed",
      metadata: "Desktop Chrome · Paris IP · Ref: Email Campaign #PRC-2026",
      whyItMatters: "4th visit in 7 days. Contributed to High myPricing cross-sell intent.",
      sessionDetails: {
        duration: "6 min 42 sec",
        actions: ["Viewed pricing features", "Opened pricing comparison matrix", "Used pricing ROI calculator"]
      }
    },
    {
      id: "evt-2",
      time: "Today, 9:15 AM",
      timestamp: "2026-09-09T09:15:00",
      channel: "Email",
      channelBadge: "bg-indigo-100 text-indigo-800 border-indigo-300",
      iconName: "Mail",
      title: "Opened 'Improve Your Pricing Strategy'",
      description: "Opened email and clicked 'See pricing features' link.",
      ctaText: "View campaign",
      type: "opened",
      metadata: "Recipient: antoine.l@techgear.fr · Campaign #PRC-2026",
      whyItMatters: "Opened & clicked pricing campaign. High email engagement.",
      sessionDetails: {
        duration: "Email Campaign",
        actions: ["Opened email", "Clicked primary CTA 'Explore myPricing'", "Downloaded PDF attachment"]
      }
    },
    {
      id: "evt-3",
      time: "Yesterday, 3:00 PM",
      timestamp: "2026-09-08T15:00:00",
      channel: "Webinar",
      channelBadge: "bg-purple-100 text-purple-800 border-purple-300",
      iconName: "Video",
      title: "Attended 'Competitive Pricing in E-commerce'",
      description: "Antoine Laurent attended 42 minutes of the 45-minute live webinar session.",
      ctaText: "View event",
      type: "attended",
      metadata: "Engagement Score: 94/100 · Asked question about Amazon API integration",
      whyItMatters: "High webinar engagement & live Q&A submission on competitor pricing.",
      sessionDetails: {
        duration: "42 minutes",
        actions: ["Joined live stream", "Stayed through Q&A", "Submitted API integration question"]
      }
    },
    {
      id: "evt-4",
      time: "3 days ago",
      timestamp: "2026-09-06T14:20:00",
      channel: "Website",
      channelBadge: "bg-blue-100 text-blue-800 border-blue-300",
      iconName: "FileText",
      title: "Downloaded 'Dynamic Pricing Playbook'",
      description: "Downloaded PDF whitepaper resource 'The Ultimate Dynamic Pricing Playbook for European Retailers'.",
      ctaText: "View asset",
      type: "downloaded",
      metadata: "Form filled by Antoine Laurent (Head of E-Commerce)",
      whyItMatters: "Downloaded 24-page strategy guide.",
      sessionDetails: {
        duration: "Resource Download",
        actions: ["Filled lead form", "Downloaded PDF playbook"]
      }
    },
    {
      id: "evt-5",
      time: "4 days ago",
      timestamp: "2026-09-05T16:10:00",
      channel: "Conversation",
      channelBadge: "bg-emerald-100 text-emerald-800 border-emerald-300",
      iconName: "MessageSquare",
      title: "Conversation with ADA AI Assistant",
      description: 'Antoine asked: "How does your dynamic pricing compare with competitor solutions like RepricerExpress?"',
      ctaText: "View conversation",
      type: "replied",
      metadata: "Intent: Pricing evaluation · Sentiment: Highly Interested",
      whyItMatters: "Direct customer inquiry comparing myPricing vs competitors.",
      sessionDetails: {
        duration: "4 mins 12 secs",
        actions: ["Asked competitor comparison question", "Bot provided PDF feature matrix", "Requested sales follow-up"]
      }
    },
    {
      id: "evt-6",
      time: "5 days ago",
      timestamp: "2026-09-04T11:45:00",
      channel: "Website",
      channelBadge: "bg-blue-100 text-blue-800 border-blue-300",
      iconName: "Globe",
      title: "Viewed Competitor Intelligence Page",
      description: "Viewed competitor price monitoring & MAP compliance enforcement features.",
      ctaText: "View details",
      type: "viewed",
      metadata: "Session duration: 3m 45s · Viewed Fnac & Amazon price scrapers",
      whyItMatters: "Researched automated price scrapers & MAP compliance rules.",
      sessionDetails: {
        duration: "3 min 45 sec",
        actions: ["Explored Amazon price monitoring", "Viewed repricing frequency docs"]
      }
    },
    {
      id: "evt-7",
      time: "1 week ago",
      timestamp: "2026-09-02T09:30:00",
      channel: "Product",
      channelBadge: "bg-emerald-100 text-emerald-800 border-emerald-300",
      iconName: "Package",
      title: "Used myFulfillment Dashboard",
      description: "Active customer login on myFulfillment. Processed 1,420 orders in last 7 days.",
      ctaText: "View usage",
      type: "used",
      metadata: "Plan: myFulfillment Pro (€1,850/mo)",
      whyItMatters: "Active product user with high Q3 order volume.",
      sessionDetails: {
        duration: "45 minutes",
        actions: ["Processed batch shipment labels", "Exported inventory report"]
      }
    },
    {
      id: "evt-8",
      time: "1 week ago",
      timestamp: "2026-09-01T15:20:00",
      channel: "Email",
      channelBadge: "bg-indigo-100 text-indigo-800 border-indigo-300",
      iconName: "Mail",
      title: "Clicked 'Q3 Margin Optimization' Campaign",
      description: "Opened email newsletter and clicked link to European repricing case study.",
      ctaText: "View campaign",
      type: "clicked",
      metadata: "Campaign #NWS-2026-09",
      whyItMatters: "Engaged with margin optimization case study.",
      sessionDetails: {
        duration: "Email Click",
        actions: ["Clicked case study link"]
      }
    },
    {
      id: "evt-9",
      time: "2 weeks ago",
      timestamp: "2026-08-26T14:00:00",
      channel: "Campaign",
      channelBadge: "bg-indigo-100 text-indigo-800 border-indigo-300",
      iconName: "Megaphone",
      title: "Enrolled in High-Intent Pricing Segment",
      description: "Automated inclusion in High-Intent Enterprise Retailers segment by ADA Engine.",
      ctaText: "View segment",
      type: "submitted",
      metadata: "Audience ID #SEG-9912",
      whyItMatters: "Scored 91% conversion probability by ADA ML.",
      sessionDetails: {
        duration: "System Automation",
        actions: ["Segment rule trigger"]
      }
    }
  ],

  sidebarDetails: {
    company: "TechGear Europe",
    industry: "E-commerce Retailer",
    companySize: "50 - 200 employees",
    country: "Paris, France",
    primaryContact: "Antoine Laurent (Head of E-Commerce)",
    contactEmail: "antoine.l@techgear.fr",
    accountId: "ACC-89420-EU",
    customerSince: "2023",
    currentProducts: "myFulfillment",
    accountOwner: "Claire Dubois",
    leadSource: "Inbound Content Marketing",
    marketingConsent: "Verified GDPR Compliant"
  },
  recentSegments: [
    { name: "High-Intent Accounts", count: "48 accounts" },
    { name: "myPricing Prospects", count: "124 accounts" },
    { name: "Existing myFulfillment Customers", count: "310 accounts" },
    { name: "Enterprise Retailers", count: "85 accounts" }
  ],
  recentCampaigns: [
    { name: "Pricing Strategy Campaign 2026", status: "Active", openRate: "82%" },
    { name: "myFulfillment Customer Nurture", status: "Active", openRate: "74%" },
    { name: "Competitive Intelligence Webinar", status: "Completed", openRate: "91%" }
  ],
  currentProducts: [
    { id: "SUB-8812", name: "myFulfillment Pro Plan", amount: "€1,850/mo", status: "Active Subscription", usage: "1,420 orders/wk" }
  ],
  relatedEntities: {
    household: [],
    linkedAccounts: [
      { name: "TechGear France SARL", type: "Parent Entity", status: "Active" }
    ],
    openTickets: [
      { id: "#TK-8021", topic: "API Webhook setup for Shopify Fulfillment", status: "Resolved", priority: "Low" }
    ]
  },

  // COMMERCIAL & USAGE TAB DATASET
  commercialData: {
    productUsageRows: [
      {
        id: "prod-myfulfillment",
        name: "myFulfillment",
        category: "Fulfillment & Operations",
        status: "Active",
        statusBadge: "bg-emerald-100 text-emerald-800 border-emerald-300",
        since: "Mar 2023",
        featureAdoption: "82%",
        activeUsers: 245,
        monthlyActions: "1,285",
        trend: "+18%",
        isOpportunity: false,
        ctaText: "View usage",
        metricsList: [
          { label: "Feature adoption", value: "82%" },
          { label: "Active users", value: "245" },
          { label: "Actions / mo", value: "1,285" },
          { label: "30-day Trend", value: "+18%" }
        ]
      },
      {
        id: "prod-mypricing",
        name: "myPricing",
        category: "Dynamic Pricing & Repricing",
        status: "Not Activated",
        statusBadge: "bg-amber-100 text-amber-800 border-amber-300",
        interest: "High Interest",
        interestBadge: "bg-indigo-600 text-white font-bold animate-pulse",
        since: "Not Subscribed",
        pageVisits: 4,
        guideDownloads: 1,
        webinarAttendance: 1,
        trend: "+300% page visits",
        isOpportunity: true, // Visually stands out as expansion opportunity!
        ctaText: "View details",
        metricsList: [
          { label: "Product page visits", value: "4 visits" },
          { label: "Pricing guide downloads", value: "1 download" },
          { label: "Webinar attendance", value: "1 session (42m)" },
          { label: "Intent Trend", value: "+300%" }
        ],
        signals: [
          "4 product page visits in 7 days",
          "Downloaded 'Dynamic Pricing Playbook' PDF",
          "Attended Competitive Pricing webinar (42 mins)",
          "Asked bot about Amazon API repricing rates"
        ]
      },
      {
        id: "prod-mywebpos",
        name: "myWebPOS",
        category: "Point of Sale Integration",
        status: "In Evaluation",
        statusBadge: "bg-slate-100 text-slate-700 border-slate-300",
        since: "Not Subscribed",
        pageVisits: 0,
        guideDownloads: 0,
        webinarAttendance: 0,
        trend: "0%",
        isOpportunity: false,
        ctaText: "View details",
        metricsList: [
          { label: "Product page visits", value: "0" },
          { label: "Content downloads", value: "0" },
          { label: "Event attendance", value: "0" }
        ]
      },
      {
        id: "prod-aicommerce",
        name: "AICommerce",
        category: "AI-Powered Commerce Engine",
        status: "Not Started",
        statusBadge: "bg-slate-100 text-slate-500 border-slate-200",
        since: "Not Subscribed",
        pageVisits: 0,
        guideDownloads: 0,
        webinarAttendance: 0,
        trend: "0%",
        isOpportunity: false,
        ctaText: "View details",
        metricsList: [
          { label: "Product page visits", value: "0" },
          { label: "Content downloads", value: "0" },
          { label: "Event attendance", value: "0" }
        ]
      }
    ],

    usageTrend: {
      insightTakeaway: "Existing product adoption is strong while interest in another product is emerging.",
      periods: ["Last 30 days", "Last 90 days", "Last 12 months"],
      dataPoints: [
        { label: "Week 1", myFulfillment: 65, myPricing: 10, benchmark: 45 },
        { label: "Week 2", myFulfillment: 70, myPricing: 25, benchmark: 46 },
        { label: "Week 3", myFulfillment: 78, myPricing: 60, benchmark: 47 },
        { label: "Week 4 (Today)", myFulfillment: 82, myPricing: 91, benchmark: 48 }
      ]
    },

    keyUsageInsights: [
      {
        id: "usi-1",
        title: "STRONG MYFULFILLMENT ADOPTION",
        evidence: "Usage is 28% higher than similar accounts in the industry.",
        businessMeaning: "Account is heavily reliant on Boostmyshop for operational fulfillment (1,420 orders/wk processed).",
        status: "Positive",
        statusBadge: "bg-emerald-100 text-emerald-800 border-emerald-300"
      },
      {
        id: "usi-2",
        title: "HIGH INTENT FOR MYPRICING",
        evidence: "4 pricing page visits in 7 days (+300%).",
        businessMeaning: "Commercial team is actively looking to automate competitor price matching and Fnac/Amazon repricing.",
        status: "Opportunity",
        statusBadge: "bg-indigo-100 text-indigo-800 border-indigo-300"
      },
      {
        id: "usi-3",
        title: "EXPANSION OPPORTUNITY",
        evidence: "Account shows natural progression toward myPricing based on current usage patterns.",
        businessMeaning: "Fulfillment volume growth directly creates a need for margin optimization tooling.",
        status: "Actionable",
        statusBadge: "bg-amber-100 text-amber-800 border-amber-300"
      }
    ],

    recentCommercialActivity: [
      {
        id: "com-1",
        date: "Mar 15, 2023",
        activity: "Contract Signed",
        product: "myFulfillment Pro",
        value: "€84,500 ARR",
        status: "Active",
        statusBadge: "bg-emerald-100 text-emerald-800 border-emerald-300"
      },
      {
        id: "com-2",
        date: "Mar 15, 2023",
        activity: "Subscription Started",
        product: "myFulfillment Pro (€1,850/mo)",
        value: "€84,500",
        status: "Active",
        statusBadge: "bg-emerald-100 text-emerald-800 border-emerald-300"
      },
      {
        id: "com-3",
        date: "Feb 28, 2025",
        activity: "Renewal Confirmed",
        product: "myFulfillment Pro",
        value: "€84,500",
        status: "Active",
        statusBadge: "bg-emerald-100 text-emerald-800 border-emerald-300"
      }
    ]
  },

  // 52 ACCOUNT ATTRIBUTES DATASET (FOR ATTRIBUTES TAB)
  attributesData: {
    summary: {
      total: 52,
      standardCount: 46,
      customCount: 6,
      lastSynced: "12 min ago",
      aiSummaryText: "TechGear Europe is a mid-market European e-commerce retailer with strong adoption of myFulfillment and growing interest in myPricing.",
      derivedMetrics: [
        { label: "Account tier", value: "High Value", badge: "bg-emerald-100 text-emerald-800 border-emerald-300" },
        { label: "Expansion potential", value: "High", badge: "bg-indigo-100 text-indigo-800 border-indigo-200" },
        { label: "Product interest", value: "myPricing", badge: "bg-amber-100 text-amber-800 border-amber-300" }
      ]
    },

    categories: [
      "COMPANY INFORMATION",
      "COMMERCIAL",
      "PRODUCT & USAGE",
      "MARKETING",
      "BEHAVIOURAL",
      "CONSENT & PRIVACY"
    ],

    attributesList: [
      // 1. COMPANY INFORMATION (7 attributes)
      {
        id: "attr-comp-1",
        name: "Company Name",
        value: "TechGear Europe",
        category: "COMPANY INFORMATION",
        isCustom: false,
        source: "CRM",
        lastUpdated: "12 min ago",
        dataType: "Text",
        syncStatus: "Healthy",
        usedInSegments: "4 segments"
      },
      {
        id: "attr-comp-2",
        name: "Industry",
        value: "Consumer Electronics & Accessories",
        category: "COMPANY INFORMATION",
        isCustom: false,
        source: "CRM",
        lastUpdated: "12 min ago",
        dataType: "Dropdown",
        syncStatus: "Healthy",
        usedInSegments: "3 segments"
      },
      {
        id: "attr-comp-3",
        name: "Company Size",
        value: "50–200 employees",
        category: "COMPANY INFORMATION",
        isCustom: false,
        source: "CRM",
        lastUpdated: "1 hour ago",
        dataType: "Dropdown",
        syncStatus: "Healthy",
        usedInSegments: "2 segments"
      },
      {
        id: "attr-comp-4",
        name: "Country",
        value: "France",
        category: "COMPANY INFORMATION",
        isCustom: false,
        source: "CRM",
        lastUpdated: "2 hours ago",
        dataType: "Dropdown",
        syncStatus: "Healthy",
        usedInSegments: "5 segments"
      },
      {
        id: "attr-comp-5",
        name: "City",
        value: "Paris",
        category: "COMPANY INFORMATION",
        isCustom: false,
        source: "CRM",
        lastUpdated: "2 hours ago",
        dataType: "Text",
        syncStatus: "Healthy",
        usedInSegments: null
      },
      {
        id: "attr-comp-6",
        name: "Website",
        value: "https://www.techgear.fr",
        category: "COMPANY INFORMATION",
        isCustom: false,
        source: "CRM",
        lastUpdated: "1 day ago",
        dataType: "Text",
        syncStatus: "Healthy",
        usedInSegments: null
      },
      {
        id: "attr-comp-7",
        name: "Account Type",
        value: "E-commerce Retailer",
        category: "COMPANY INFORMATION",
        isCustom: false,
        source: "CRM",
        lastUpdated: "12 min ago",
        dataType: "Dropdown",
        syncStatus: "Healthy",
        usedInSegments: "3 segments"
      },

      // 2. COMMERCIAL (8 attributes)
      {
        id: "attr-comm-1",
        name: "Customer Since",
        value: "March 2023",
        category: "COMMERCIAL",
        isCustom: false,
        source: "Billing System",
        lastUpdated: "12 min ago",
        dataType: "Date",
        syncStatus: "Healthy",
        usedInSegments: "2 segments"
      },
      {
        id: "attr-comm-2",
        name: "Account Owner",
        value: "Claire Dubois",
        category: "COMMERCIAL",
        isCustom: false,
        source: "CRM",
        lastUpdated: "1 day ago",
        dataType: "Text",
        syncStatus: "Healthy",
        usedInSegments: null
      },
      {
        id: "attr-comm-3",
        name: "Lifetime Value (LTV)",
        value: "€84,500",
        category: "COMMERCIAL",
        isCustom: false,
        source: "Billing System",
        lastUpdated: "12 min ago",
        dataType: "Number",
        syncStatus: "Healthy",
        usedInSegments: "4 segments"
      },
      {
        id: "attr-comm-4",
        name: "Annual Recurring Revenue (ARR)",
        value: "€22,200",
        category: "COMMERCIAL",
        isCustom: false,
        source: "Billing System",
        lastUpdated: "12 min ago",
        dataType: "Number",
        syncStatus: "Healthy",
        usedInSegments: "3 segments"
      },
      {
        id: "attr-comm-5",
        name: "Current Products",
        value: "myFulfillment Pro Plan",
        category: "COMMERCIAL",
        isCustom: false,
        source: "Product Telemetry",
        lastUpdated: "12 min ago",
        dataType: "Multi-select",
        syncStatus: "Healthy",
        usedInSegments: "6 segments"
      },
      {
        id: "attr-comm-6",
        name: "Expansion Potential",
        value: "High",
        category: "COMMERCIAL",
        isCustom: true, // CUSTOM BADGE
        source: "ADA AI Decision Engine",
        lastUpdated: "12 min ago",
        dataType: "Dropdown",
        syncStatus: "Healthy",
        usedInSegments: "3 segments",
        aiDerived: {
          confidence: 91,
          evidence: ["High Q3 order growth (+45%)", "Repeated pricing page visits", "Webinar Q&A engagement"]
        }
      },
      {
        id: "attr-comm-7",
        name: "Account Maturity Tier",
        value: "Tier 1 Enterprise",
        category: "COMMERCIAL",
        isCustom: true, // CUSTOM BADGE
        source: "CDP Unified Layer",
        lastUpdated: "3 hours ago",
        dataType: "Dropdown",
        syncStatus: "Healthy",
        usedInSegments: "2 segments"
      },
      {
        id: "attr-comm-8",
        name: "Account Annual Revenue",
        value: null, // EMPTY VALUE TEST
        category: "COMMERCIAL",
        isCustom: false,
        source: "CRM",
        lastUpdated: "30 days ago",
        dataType: "Number",
        syncStatus: "Missing",
        usedInSegments: null
      },

      // 3. PRODUCT & USAGE (9 attributes)
      {
        id: "attr-prod-1",
        name: "Current Active Product",
        value: "myFulfillment",
        category: "PRODUCT & USAGE",
        isCustom: false,
        source: "Product Telemetry",
        lastUpdated: "2 hours ago",
        dataType: "Text",
        syncStatus: "Healthy",
        usedInSegments: "5 segments"
      },
      {
        id: "attr-prod-2",
        name: "Product Adoption Rate",
        value: "82%",
        category: "PRODUCT & USAGE",
        isCustom: false,
        source: "Product Telemetry",
        lastUpdated: "12 min ago",
        dataType: "Number",
        syncStatus: "Healthy",
        usedInSegments: "2 segments"
      },
      {
        id: "attr-prod-3",
        name: "Feature Adoption Score",
        value: "High (8.4 / 10)",
        category: "PRODUCT & USAGE",
        isCustom: false,
        source: "Product Telemetry",
        lastUpdated: "1 hour ago",
        dataType: "Text",
        syncStatus: "Healthy",
        usedInSegments: "1 segment"
      },
      {
        id: "attr-prod-4",
        name: "myPricing Interest Level",
        value: "High Intent",
        category: "PRODUCT & USAGE",
        isCustom: true, // CUSTOM BADGE
        source: "ADA AI Decision Engine",
        lastUpdated: "12 min ago",
        dataType: "Dropdown",
        syncStatus: "Healthy",
        usedInSegments: "3 segments",
        aiDerived: {
          confidence: 91,
          evidence: ["4 pricing page visits in 7 days", "1 playbook download", "1 webinar attendance (42m)"]
        }
      },
      {
        id: "attr-prod-5",
        name: "Usage Frequency",
        value: "Daily Active (1,420 orders/wk)",
        category: "PRODUCT & USAGE",
        isCustom: false,
        source: "Product Telemetry",
        lastUpdated: "2 hours ago",
        dataType: "Text",
        syncStatus: "Healthy",
        usedInSegments: "4 segments"
      },
      {
        id: "attr-prod-6",
        name: "Preferred Product Category",
        value: "Automated Repricing & Operations",
        category: "PRODUCT & USAGE",
        isCustom: true, // CUSTOM BADGE
        source: "Marketing Automation",
        lastUpdated: "1 day ago",
        dataType: "Dropdown",
        syncStatus: "Healthy",
        usedInSegments: "2 segments"
      },
      {
        id: "attr-prod-7",
        name: "Active Users Count",
        value: "245 seats",
        category: "PRODUCT & USAGE",
        isCustom: false,
        source: "Product Telemetry",
        lastUpdated: "12 min ago",
        dataType: "Number",
        syncStatus: "Healthy",
        usedInSegments: "2 segments"
      },
      {
        id: "attr-prod-8",
        name: "API Webhook Integration Status",
        value: "Active & Verified",
        category: "PRODUCT & USAGE",
        isCustom: false,
        source: "Product Telemetry",
        lastUpdated: "3 days ago",
        dataType: "Boolean",
        syncStatus: "Healthy",
        usedInSegments: null
      },
      {
        id: "attr-prod-9",
        name: "Secondary Integration Goal",
        value: null, // EMPTY VALUE
        category: "PRODUCT & USAGE",
        isCustom: false,
        source: "Product Telemetry",
        lastUpdated: "14 days ago",
        dataType: "Text",
        syncStatus: "Missing",
        usedInSegments: null
      },

      // 4. MARKETING (9 attributes)
      {
        id: "attr-mkt-1",
        name: "Lead Source",
        value: "Inbound Content Marketing",
        category: "MARKETING",
        isCustom: false,
        source: "Marketing Automation",
        lastUpdated: "1 day ago",
        dataType: "Dropdown",
        syncStatus: "Healthy",
        usedInSegments: "3 segments"
      },
      {
        id: "attr-mkt-2",
        name: "Campaign Engagement Rate",
        value: "82% Open & Click Rate",
        category: "MARKETING",
        isCustom: false,
        source: "Marketing Automation",
        lastUpdated: "12 min ago",
        dataType: "Number",
        syncStatus: "Healthy",
        usedInSegments: "4 segments"
      },
      {
        id: "attr-mkt-3",
        name: "Marketing Intent Score",
        value: "91 / 100",
        category: "MARKETING",
        isCustom: false,
        source: "ADA AI Decision Engine",
        lastUpdated: "12 min ago",
        dataType: "Number",
        syncStatus: "Healthy",
        usedInSegments: "3 segments",
        aiDerived: {
          confidence: 91,
          evidence: ["Email open rate 82%", "Webinar Q&A participation", "Downloaded whitepaper"]
        }
      },
      {
        id: "attr-mkt-4",
        name: "Last Campaign Engaged",
        value: "Pricing Strategy 2026",
        category: "MARKETING",
        isCustom: false,
        source: "Marketing Automation",
        lastUpdated: "Today 9:15 AM",
        dataType: "Text",
        syncStatus: "Healthy",
        usedInSegments: "2 segments"
      },
      {
        id: "attr-mkt-5",
        name: "Preferred Communication Channel",
        value: "Email + In-App Notification",
        category: "MARKETING",
        isCustom: false,
        source: "Marketing Automation",
        lastUpdated: "12 min ago",
        dataType: "Dropdown",
        syncStatus: "Healthy",
        usedInSegments: "5 segments"
      },
      {
        id: "attr-mkt-6",
        name: "Account Marketing Tier",
        value: "Priority Nurture Target",
        category: "MARKETING",
        isCustom: true, // CUSTOM BADGE
        source: "Marketing Automation",
        lastUpdated: "2 days ago",
        dataType: "Dropdown",
        syncStatus: "Healthy",
        usedInSegments: "3 segments"
      },
      {
        id: "attr-mkt-7",
        name: "Primary Contact Person",
        value: "Antoine Laurent (Head of E-Commerce)",
        category: "MARKETING",
        isCustom: false,
        source: "CRM",
        lastUpdated: "12 min ago",
        dataType: "Text",
        syncStatus: "Healthy",
        usedInSegments: null
      },
      {
        id: "attr-mkt-8",
        name: "Primary Contact Email",
        value: "antoine.l@techgear.fr",
        category: "MARKETING",
        isCustom: false,
        source: "CRM",
        lastUpdated: "12 min ago",
        dataType: "Text",
        syncStatus: "Healthy",
        usedInSegments: null
      },
      {
        id: "attr-mkt-9",
        name: "Secondary Marketing Contact",
        value: null, // EMPTY VALUE
        category: "MARKETING",
        isCustom: false,
        source: "CRM",
        lastUpdated: "60 days ago",
        dataType: "Text",
        syncStatus: "Missing",
        usedInSegments: null
      },

      // 5. BEHAVIOURAL (10 attributes)
      {
        id: "attr-beh-1",
        name: "Last Active Timestamp",
        value: "Today, 10:42 AM",
        category: "BEHAVIOURAL",
        isCustom: false,
        source: "Web Analytics",
        lastUpdated: "2 hours ago",
        dataType: "Date",
        syncStatus: "Healthy",
        usedInSegments: "3 segments"
      },
      {
        id: "attr-beh-2",
        name: "Website Visits (7 days)",
        value: "12 sessions",
        category: "BEHAVIOURAL",
        isCustom: false,
        source: "Web Analytics",
        lastUpdated: "12 min ago",
        dataType: "Number",
        syncStatus: "Healthy",
        usedInSegments: "2 segments"
      },
      {
        id: "attr-beh-3",
        name: "Content Downloads Count",
        value: "3 resource PDFs",
        category: "BEHAVIOURAL",
        isCustom: false,
        source: "Web Analytics",
        lastUpdated: "3 days ago",
        dataType: "Number",
        syncStatus: "Healthy",
        usedInSegments: "2 segments"
      },
      {
        id: "attr-beh-4",
        name: "Webinar Attendance History",
        value: "1 session (42 min attended)",
        category: "BEHAVIOURAL",
        isCustom: false,
        source: "Event Platform",
        lastUpdated: "Yesterday 3:00 PM",
        dataType: "Text",
        syncStatus: "Healthy",
        usedInSegments: "1 segment"
      },
      {
        id: "attr-beh-5",
        name: "myPricing Page Visits",
        value: "4 visits in 7 days",
        category: "BEHAVIOURAL",
        isCustom: false,
        source: "Web Analytics",
        lastUpdated: "Today 10:42 AM",
        dataType: "Number",
        syncStatus: "Healthy",
        usedInSegments: "3 segments",
        aiDerived: {
          confidence: 91,
          evidence: ["4 visits to /en/mypricing", "Used pricing calculator 2x"]
        }
      },
      {
        id: "attr-beh-6",
        name: "Competitor Comparison Views",
        value: "2 views (Fnac & Amazon Repricers)",
        category: "BEHAVIOURAL",
        isCustom: false,
        source: "Web Analytics",
        lastUpdated: "5 days ago",
        dataType: "Number",
        syncStatus: "Healthy",
        usedInSegments: "1 segment"
      },
      {
        id: "attr-beh-7",
        name: "Average Session Duration",
        value: "5m 18s",
        category: "BEHAVIOURAL",
        isCustom: false,
        source: "Web Analytics",
        lastUpdated: "12 min ago",
        dataType: "Text",
        syncStatus: "Healthy",
        usedInSegments: null
      },
      {
        id: "attr-beh-8",
        name: "Device & Operating System",
        value: "macOS Chrome (Paris, FR)",
        category: "BEHAVIOURAL",
        isCustom: false,
        source: "Web Analytics",
        lastUpdated: "Today 10:42 AM",
        dataType: "Text",
        syncStatus: "Healthy",
        usedInSegments: null
      },
      {
        id: "attr-beh-9",
        name: "Account Interest Acceleration Score",
        value: "+300% WoW",
        category: "BEHAVIOURAL",
        isCustom: true, // CUSTOM BADGE
        source: "ADA AI Decision Engine",
        lastUpdated: "12 min ago",
        dataType: "Text",
        syncStatus: "Healthy",
        usedInSegments: "2 segments"
      },
      {
        id: "attr-beh-10",
        name: "Preferred Event Type",
        value: null, // EMPTY VALUE
        category: "BEHAVIOURAL",
        isCustom: false,
        source: "Web Analytics",
        lastUpdated: "45 days ago",
        dataType: "Dropdown",
        syncStatus: "Missing",
        usedInSegments: null
      },

      // 6. CONSENT & PRIVACY (9 attributes)
      {
        id: "attr-priv-1",
        name: "Marketing Consent Status",
        value: "Verified Opt-In (GDPR Compliant)",
        category: "CONSENT & PRIVACY",
        isCustom: false,
        source: "CDP Privacy Vault",
        lastUpdated: "March 2023",
        dataType: "Boolean",
        syncStatus: "Healthy",
        usedInSegments: "All campaign segments"
      },
      {
        id: "attr-priv-2",
        name: "Email Communication Consent",
        value: "Opted-In",
        category: "CONSENT & PRIVACY",
        isCustom: false,
        source: "CDP Privacy Vault",
        lastUpdated: "March 2023",
        dataType: "Boolean",
        syncStatus: "Healthy",
        usedInSegments: "Email broadcasts"
      },
      {
        id: "attr-priv-3",
        name: "Data Processing Basis",
        value: "Legitimate B2B Commercial Interest",
        category: "CONSENT & PRIVACY",
        isCustom: false,
        source: "CDP Privacy Vault",
        lastUpdated: "March 2023",
        dataType: "Dropdown",
        syncStatus: "Healthy",
        usedInSegments: null
      },
      {
        id: "attr-priv-4",
        name: "Do-Not-Contact Status",
        value: "False (Active Target)",
        category: "CONSENT & PRIVACY",
        isCustom: false,
        source: "CDP Privacy Vault",
        lastUpdated: "12 min ago",
        dataType: "Boolean",
        syncStatus: "Healthy",
        usedInSegments: "Compliance filter"
      },
      {
        id: "attr-priv-5",
        name: "Cookie Preference Tier",
        value: "All Cookies Accepted",
        category: "CONSENT & PRIVACY",
        isCustom: false,
        source: "Web Consent Banner",
        lastUpdated: "Today 10:42 AM",
        dataType: "Dropdown",
        syncStatus: "Healthy",
        usedInSegments: null
      },
      {
        id: "attr-priv-6",
        name: "GDPR Consent Audit Log Ref",
        value: "REF-GDPR-FR-88912",
        category: "CONSENT & PRIVACY",
        isCustom: false,
        source: "CDP Privacy Vault",
        lastUpdated: "March 2023",
        dataType: "Text",
        syncStatus: "Healthy",
        usedInSegments: null
      },
      {
        id: "attr-priv-7",
        name: "Phone / SMS Consent",
        value: "Opted-Out",
        category: "CONSENT & PRIVACY",
        isCustom: false,
        source: "CRM",
        lastUpdated: "1 day ago",
        dataType: "Boolean",
        syncStatus: "Healthy",
        usedInSegments: null
      },
      {
        id: "attr-priv-8",
        name: "Data Retention Schedule Tier",
        value: "Standard 7-Year B2B Commercial",
        category: "CONSENT & PRIVACY",
        isCustom: false,
        source: "CDP Privacy Vault",
        lastUpdated: "1 year ago",
        dataType: "Dropdown",
        syncStatus: "Healthy",
        usedInSegments: null
      },
      {
        id: "attr-priv-9",
        name: "Custom Privacy Notice Acknowledgement",
        value: null, // EMPTY VALUE
        category: "CONSENT & PRIVACY",
        isCustom: true, // CUSTOM BADGE
        source: "CDP Privacy Vault",
        lastUpdated: "90 days ago",
        dataType: "Text",
        syncStatus: "Missing",
        usedInSegments: null
      }
    ]
  }
};
