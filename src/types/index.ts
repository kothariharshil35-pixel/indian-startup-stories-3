export interface StoryImage {
  url: string;
  caption: string;
  credit: string;
  type: 'hero' | 'founder' | 'product';
}

export interface StoryFact {
  label: string;
  value: string;
}

export interface StorySource {
  title: string;
  type: 'primary' | 'independent';
  publisher?: string;
  url?: string;
}

export interface StartupStory {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  companyName: string;
  category: string;
  author: string;
  publishedDate: string;
  updatedDate: string;
  readTime: string;
  foundedYear: number;
  founders: string[];
  headquarters: string;
  businessModelType: string; // e.g. "Discount Brokerage / SaaS", "Marketplace & Delivery"
  fundingStage: 'Bootstrapped' | 'Public' | 'Private Series F' | 'Private Series E' | 'Private Unicorn';
  images: {
    hero: StoryImage;
    founder: StoryImage;
    product: StoryImage;
  };
  quickFacts: StoryFact[];
  summary: string;
  sections: {
    introduction: string;
    theBeginning: string;
    theProblem: string;
    technologyAndProduct: string;
    businessModel: string;
    marketingStrategy: string;
    challengesAndScaling: string;
    lessons: {
      title: string;
      description: string;
    }[];
    finalTakeaway: string;
  };
  sources: StorySource[];
  tags: string[];
  featured?: boolean;
}

export interface Founder {
  id: string;
  name: string;
  company: string;
  role: string;
  education: string;
  storySlug: string;
  image: string;
  imageCredit: string;
  quote: string;
  bio: string;
  keyPhilosophy: string;
}

export interface IndustryCategory {
  id: string;
  name: string;
  icon: string;
  description: string;
  startups: string[];
  marketContext: string;
}

export interface MarketingCase {
  id: string;
  title: string;
  startup: string;
  category: string;
  readTime: string;
  summary: string;
  coreStrategy: string;
  keyTactics: string[];
  takeawayForStudents: string;
  storySlug: string;
}

export interface FailureStory {
  id: string;
  companyName: string;
  industry: string;
  foundedYear: number;
  shutDownYear: number;
  peakValuationOrFunding: string;
  corePremise: string;
  whatWentWrong: string[];
  strategicLessons: string[];
  sources: string[];
}

export interface FundingRecord {
  startup: string;
  industry: string;
  fundingStage: string;
  founded: number;
  headquarters: string;
  verifiedNotes: string;
  asOfDate: string;
  primaryInvestors: string[];
  storySlug?: string;
}
