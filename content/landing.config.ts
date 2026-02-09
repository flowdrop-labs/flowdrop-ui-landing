import { SEO } from '@/lib/seo-constants';

export type Audience = { label: string };
export type PainPoint = { text: string };
export type CompanyLogo = { src: string; alt: string };
export type Testimonial = { initials: string; name: string; role: string; quote: string; color?: string };
export type ComparisonItem = { title: string; emoji: string; color: 'red' | 'primary' | 'blue'; bullets: string[]; highlight?: boolean };
export type HeroContent = { headline: string; subcopy: string; ctaHref: string; ctaText: string };
export type MobileStory = { title: string; copy: string; screenshot: { url: string; src: string; alt: string; width: number; height: number; label: { text: string; colorClass: string } } };
export type TraditionalStep = { label: string; time: number; unit: string };
export type TraditionalComparisonData = {
  sectionLabel: string;
  headline: string;
  traditionalLabel: string;
  traditionalSteps: TraditionalStep[];
  totalTime: number;
  totalUnit: string;
  nonTechnicalCallout: string;
  productLabel: string;
  productTime: string;
  productDescription: string;
  productSubtext: string;
};
export type UseCaseItem = { icon: string; label: string; style: 'default' | 'outline' | 'dark' | 'radial' | 'darker' | 'dashed' };
export type UseCaseRow = { direction: 'left' | 'right'; items: UseCaseItem[] };

export const audiences: Audience[] = [
  { label: '⚡ Side‑Hustlers' },
  { label: '🚀 Indie SaaS teams' },
  { label: '📈 Sales & Marketing teams' },
  { label: '🛠️ Automation agencies' },
];

export const painPoints: PainPoint[] = [
  { text: 'Mapping nodes takes forever' },
  { text: "Im tired of copying between tools" },
  { text: 'API keys are endless' },
];

export const companyLogos: CompanyLogo[] = [
  { src: '/logos/apple.svg', alt: 'Apple' },
  { src: '/logos/meta.svg', alt: 'Meta' },
  { src: '/logos/capital-one.svg', alt: 'Capital One' },
];

export const testimonials: Testimonial[] = [
  { initials: 'HT', name: 'Hugh Tang', role: 'SaaS Founder', quote: 'Love the minimalist design.' },
  { initials: 'W', name: 'Will', role: 'Agency Founder', quote: 'Saw your LinkedIn post and thought it looked great.' },
  { initials: 'K', name: 'Kmark', role: 'Community Moderator & JavaScript Dev', quote: 'i gotta say sir. i love the UI' },
  { initials: 'A', name: 'Alex', role: 'Founder of TradeJournal', quote: 'thanks you so much for your time and the effort you put for your customers 😀 🥰' },
];

export const comparisonItems: ComparisonItem[] = [
  {
    title: 'Zapier',
    emoji: '😤',
    color: 'red',
    bullets: ['5,000+ apps but limited depth', '$20/month for basic features', 'Complex node mapping'],
  },
  {
    title: 'Flowdrop',
    emoji: '⚡',
    color: 'primary',
    bullets: ['AI-powered workflow builder', 'Starts at $9/month for everything', 'Zero learning curve'],
    highlight: true,
  },
  {
    title: 'n8n',
    emoji: '🤔',
    color: 'blue',
    bullets: ['Self-hosted or $24/month cloud', '500+ integrations with JS/Python nodes', 'Steep learning curve for non-developers'],
  },
];

export const hero: HeroContent = {
  headline: "Ever wish you could hire ai agents? Now you can.",
  subcopy: "I'm not technical but I know AI should be helping me run my business.",
  ctaHref: 'https://app.flowdrop.ai/',
  ctaText: 'Get Started',
};

export const mobileStories: MobileStory[] = [
  {
    title: 'Visual Workflow Builder',
    copy: 'Drag, drop, and connect. Build complex workflows with intuitive visual tools.',
    screenshot: {
      url: 'flowdrop.ai/builder',
      src: '/screenshots/webfloweditor.png',
      alt: 'Flowdrop Visual Workflow Builder',
      width: 400,
      height: 300,
      label: { text: 'Visual Builder', colorClass: 'bg-primary-main/20 backdrop-blur-sm border border-primary-main/30 text-primary-main' },
    },
  },
  {
    title: 'AI-Powered Generation',
    copy: 'Describe your workflow in plain English. Watch AI create it instantly.',
    screenshot: {
      url: 'flowdrop.ai/ai-generator',
      src: '/screenshots/generatewebflowscreen.png',
      alt: 'Flowdrop AI Workflow Generation',
      width: 400,
      height: 300,
      label: { text: 'AI Workflow Generation', colorClass: 'bg-purple-500/20 backdrop-blur-sm border border-purple-500/30 text-purple-400' },
    },
  },
  {
    title: 'Advanced AI Node Editing',
    copy: 'Fine-tune AI nodes with precision. Custom logic for complex workflows.',
    screenshot: {
      url: 'flowdrop.ai/node-editor',
      src: '/screenshots/nodeeditor.png',
      alt: 'Flowdrop Node Editor',
      width: 400,
      height: 300,
      label: { text: 'AI node editing', colorClass: 'bg-orange-500/20 backdrop-blur-sm border border-orange-500/30 text-orange-400 px-2 py-1' },
    },
  },
  {
    title: 'Advanced AI-Powered Nodes',
    copy: 'Cutting-edge AI nodes with advanced capabilities. Build sophisticated workflows with powerful AI tools.',
    screenshot: {
      url: 'flowdrop.ai/advanced-editor',
      src: '/screenshots/webfloweditor2.png',
      alt: 'Flowdrop Advanced AI-Powered Nodes',
      width: 400,
      height: 300,
      label: { text: 'Advanced AI nodes', colorClass: 'bg-blue-500/20 backdrop-blur-sm border border-blue-500/30 text-blue-400 px-2 py-1' },
    },
  },
];

export const traditionalComparison: TraditionalComparisonData = {
  sectionLabel: 'Comparison',
  headline: `Traditional Method vs ${SEO.siteName}`,
  traditionalLabel: 'Traditional',
  traditionalSteps: [
    { label: 'Research and compare automation tools', time: 15, unit: 'min' },
    { label: 'Sign up and learn node-based interface', time: 30, unit: 'min' },
    { label: 'Manually map out workflow nodes', time: 20, unit: 'min' },
    { label: 'Configure API connections per node', time: 15, unit: 'min' },
    { label: 'Set up auth for each integration', time: 10, unit: 'min' },
    { label: 'Test and debug broken connections', time: 20, unit: 'min' },
    { label: 'Deploy and set up error monitoring', time: 10, unit: 'min' },
  ],
  totalTime: 120,
  totalUnit: 'min',
  nonTechnicalCallout: 'If you\'re <non-technical>, multiply these <times by 10> — you have to learn each step before doing.',
  productLabel: SEO.siteName,
  productTime: '< 5 min',
  productDescription: 'Describe what you need in plain English, AI builds it, deploy — done in under 5 minutes.',
  productSubtext: 'AI agents handle the complexity. No nodes, no SSH, no code required. Simple, secure, and fast.',
};

export const useCaseRows: UseCaseRow[] = [
  {
    direction: 'right',
    items: [
      { icon: 'Mail', label: 'Read & summarize email', style: 'default' },
      { icon: 'MessageSquareReply', label: 'Draft replies and follow-ups', style: 'default' },
      { icon: 'Languages', label: 'Translate messages in real time', style: 'outline' },
      { icon: 'Inbox', label: 'Organize your inbox', style: 'dark' },
      { icon: 'Headphones', label: 'Answer support tickets', style: 'radial' },
      { icon: 'FileText', label: 'Summarize long documents', style: 'darker' },
      { icon: 'Bell', label: 'Notify before a meeting', style: 'dashed' },
      { icon: 'CalendarPlus', label: 'Schedule meetings from chat', style: 'default' },
    ],
  },
  {
    direction: 'left',
    items: [
      { icon: 'AlarmClock', label: 'Remind you of deadlines', style: 'default' },
      { icon: 'CalendarDays', label: 'Plan your week', style: 'outline' },
      { icon: 'ClipboardList', label: 'Take meeting notes', style: 'dark' },
      { icon: 'Globe', label: 'Sync across time zones', style: 'radial' },
      { icon: 'Calculator', label: 'Do your taxes', style: 'darker' },
      { icon: 'Receipt', label: 'Track expenses and receipts', style: 'dashed' },
      { icon: 'Shield', label: 'Compare insurance quotes', style: 'default' },
      { icon: 'CreditCard', label: 'Manage subscriptions', style: 'default' },
    ],
  },
  {
    direction: 'right',
    items: [
      { icon: 'Calculator', label: 'Run payroll calculations', style: 'outline' },
      { icon: 'CircleDollarSign', label: 'Negotiate refunds', style: 'dark' },
      { icon: 'Tag', label: 'Find coupons', style: 'radial' },
      { icon: 'Search', label: 'Find best prices online', style: 'darker' },
      { icon: 'Percent', label: 'Find discount codes', style: 'dashed' },
      { icon: 'TrendingDown', label: 'Price-drop alerts', style: 'default' },
      { icon: 'GitCompare', label: 'Compare product specs', style: 'default' },
      { icon: 'Handshake', label: 'Negotiate deals', style: 'outline' },
    ],
  },
  {
    direction: 'left',
    items: [
      { icon: 'FilePenLine', label: 'Write contracts and NDAs', style: 'dark' },
      { icon: 'Telescope', label: 'Research competitors', style: 'radial' },
      { icon: 'Users', label: 'Screen and prioritize leads', style: 'darker' },
      { icon: 'FileSpreadsheet', label: 'Generate invoices', style: 'dashed' },
      { icon: 'Presentation', label: 'Create presentations from bullet points', style: 'default' },
      { icon: 'Plane', label: 'Book travel and hotels', style: 'default' },
      { icon: 'ChefHat', label: 'Find recipes from ingredients', style: 'outline' },
      { icon: 'Share2', label: 'Draft social posts', style: 'dark' },
    ],
  },
  {
    direction: 'right',
    items: [
      { icon: 'Newspaper', label: 'Monitor news and alerts', style: 'radial' },
      { icon: 'Target', label: 'Set and track goals', style: 'darker' },
      { icon: 'Send', label: 'Screen cold outreach', style: 'dashed' },
      { icon: 'Briefcase', label: 'Draft job descriptions', style: 'default' },
      { icon: 'UsersRound', label: 'Run standup summaries', style: 'default' },
      { icon: 'ChartColumn', label: 'Track OKRs and KPIs', style: 'outline' },
    ],
  },
];
