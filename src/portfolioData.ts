export interface PortfolioItem {
  id: string;
  caseNumber: string;
  clientName: string;
  projectTitle: string;
  description: string;
  industry: string;
  engagement: string;
  tags: string[];
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: "disneyland",
    caseNumber: "Case Study 01",
    clientName: "Hong Kong Most Popular Theme Park",
    projectTitle: "Reimagining the Guest Journey Through End-to-End Digital Commerce",
    description: "Digital Commerce Platform",
    industry: "Travel & Hospitality",
    engagement: "Direct Engagement",
    tags: ["Digital Commerce", "Payments", "API Development"],
  },
  {
    id: "mobility",
    caseNumber: "Case Study 02",
    clientName: "Leading HK Mobility Platform",
    projectTitle: "Building the Payment Backbone for Urban Transportation",
    description: "Payment Infrastructure",
    industry: "Transportation",
    engagement: "Team Work",
    tags: ["Payments", "Fintech", "Reconciliation"],
  },
  {
    id: "tuition",
    caseNumber: "Case Study 03",
    clientName: "Cross-Border Payment Company",
    projectTitle: "International Tuition Payment Portal",
    description: "International Tuition Payment Portal",
    industry: "Financial Services",
    engagement: "Direct Engagement",
    tags: ["Payments", "Cross-Border", "Compliance"],
  },
  {
    id: "remittance",
    caseNumber: "Case Study 04",
    clientName: "Cross-Border Payment Company",
    projectTitle: "B2B Remittance API Platform",
    description: "B2B Remittance API Platform",
    industry: "Financial Services",
    engagement: "Team Work",
    tags: ["API Development", "Cross-Border", "Fintech"],
  },
  {
    id: "luxury",
    caseNumber: "Case Study 05",
    clientName: "Global Luxury Brand",
    projectTitle: "Security Case Automation",
    description: "Security Case Automation",
    industry: "Retail & Luxury",
    engagement: "Direct Engagement",
    tags: ["AI/ML", "Automation", "Security"],
  },
  {
    id: "financial",
    caseNumber: "Case Study 06",
    clientName: "Global Luxury Brand",
    projectTitle: "Vision-Enabled Brand Intelligence",
    description: "Vision-Enabled Brand Intelligence",
    industry: "Retail & Luxury",
    engagement: "Team Work",
    tags: ["AI/ML", "Computer Vision", "Automation"],
  },
];

// Extract all unique tags for filtering
export const allTags = Array.from(
  new Set(portfolioItems.flatMap((item) => item.tags))
).sort();

// Extract all unique industries
export const allIndustries = Array.from(
  new Set(portfolioItems.map((item) => item.industry))
).sort();

// Extract all unique engagement types
export const allEngagements = Array.from(
  new Set(portfolioItems.map((item) => item.engagement))
).sort();
