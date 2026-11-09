export const roles = [
  'Risk Strategist',
  'Systems Architect',
  'Data Analyst',
  'Builder',
];

export const projects = [
  {
    id: 'nexus',
    name: 'Nexus',
    desc: 'Personal operations workspace for tasks, boards, notes, and decisions, with an AI assistant that answers from its own records.',
    tags: ['React', 'Supabase', 'AI'],
    live: 'https://nexus.hueyventures.org',
  },
  {
    id: 'monitor',
    name: 'Monitor',
    desc: 'Options dashboard that scores covered calls, cash-secured puts, and LEAPS, and tracks open positions with live P&L and Greeks.',
    tags: ['React', 'Schwab API', 'Finance'],
    live: 'https://monitor.hueyventures.org',
  },
  {
    id: 'perks-ledger',
    name: 'Perks Ledger',
    desc: 'PWA for tracking credit card benefit ROI, redemption streaks, and annual fee breakeven.',
    tags: ['Vanilla JS', 'Supabase', 'PWA'],
    github: 'https://github.com/jhueyx/Perks-Ledger',
    live: 'https://perks.hueyventures.org',
  },
  {
    id: 'habits',
    name: 'Habits',
    desc: 'Daily habit tracker with streaks, weekly-frequency goals, monthly insights, and history.',
    tags: ['Vanilla JS', 'Supabase', 'PWA'],
    live: 'https://habits.hueyventures.org',
  },
];

export const skills = [
  { category: 'Languages', items: ['Python', 'SQL', 'Snowflake', 'PostgreSQL', 'R', 'JavaScript'] },
  { category: 'Risk & Analytics', items: ['Credit Risk', 'Fraud Strategy', 'Trust & Safety', 'Decision Systems'] },
  { category: 'Tools & Infra', items: ['Supabase', 'dbt', 'Tableau', 'Looker', 'Vercel', 'Next.js', 'GitHub Actions', 'GitHub', 'Git', 'JIRA'] },
  { category: 'Domains', items: ['Fintech', 'Marketplace', 'Financial Services', 'Payments', 'Gig Economy'] },
];

export const experience = [
  {
    period: 'Current',
    title: 'Risk Strategy & Insights',
    desc: 'Fintech infrastructure, risk analytics, operational strategy, and decision-support workflows.',
  },
  {
    period: 'Platforms',
    title: 'Marketplace Trust & Risk',
    desc: 'Experience across marketplace, payments, trust & safety, and money movement risk environments.',
  },
  {
    period: 'Foundation',
    title: 'Compliance Operations & Advisory',
    desc: 'Background in banking operations, client advisory, fraud detection, and financial relationship management workflows.',
  },
];
