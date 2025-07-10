// SEO ROI Calculator benchmark data
export const INDUSTRY_BENCHMARKS = {
  saas: { upliftStarter: 0.50, upliftGrowth: 1.20, upliftEnterprise: 2.00, cvr: 0.03, aov: 250 },
  ecommerce: { upliftStarter: 0.40, upliftGrowth: 1.00, upliftEnterprise: 1.50, cvr: 0.02, aov: 65 },
  local: { upliftStarter: 0.30, upliftGrowth: 0.80, upliftEnterprise: 1.20, cvr: 0.08, aov: 180 },
  content: { upliftStarter: 0.60, upliftGrowth: 1.40, upliftEnterprise: 2.40, cvr: 0.01, aov: 20 },
} as const;

export const PACKAGE_COST = {
  starter: 599,
  growth: 1499,
  enterprise: 4500, // starting point – can be custom
};

export type IndustryKey = keyof typeof INDUSTRY_BENCHMARKS;
export type PackageKey = keyof typeof PACKAGE_COST;