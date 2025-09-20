// Mock data for the analytics dashboard

export const userStats = {
  totalUsers: 2345,
  newUsers: 342,
  activeUsers: 1823,
  churnRate: 2.4,
};

export const revenueData = {
  total: 34252,
  previousPeriod: 31712,
  growth: 8,
  forecast: 38000,
};

export const conversionData = {
  rate: 3.25,
  previousRate: 3.15,
  improvement: 3,
};

export const sessionData = {
  active: 234,
  average: 198,
  growth: 18,
};

export const monthlyRevenue = [
  { month: 'January', revenue: 12000, expenses: 8000 },
  { month: 'February', revenue: 19000, expenses: 12000 },
  { month: 'March', revenue: 15000, expenses: 10000 },
  { month: 'April', revenue: 25000, expenses: 15000 },
  { month: 'May', revenue: 22000, expenses: 14000 },
  { month: 'June', revenue: 30000, expenses: 18000 },
  { month: 'July', revenue: 40000, expenses: 25000 },
];

export const trafficSources = [
  { source: 'Direct', percentage: 35 },
  { source: 'Social Media', percentage: 25 },
  { source: 'Email', percentage: 15 },
  { source: 'Organic Search', percentage: 20 },
  { source: 'Referral', percentage: 5 },
];

export const platformEngagement = [
  { platform: 'Mobile', activeUsers: 4500, newUsers: 2200 },
  { platform: 'Desktop', activeUsers: 3200, newUsers: 1800 },
  { platform: 'Tablet', activeUsers: 1800, newUsers: 900 },
  { platform: 'Smart TV', activeUsers: 800, newUsers: 300 },
  { platform: 'Other', activeUsers: 300, newUsers: 100 },
];

export const userDemographics = {
  age: [
    { group: '18-24', percentage: 22 },
    { group: '25-34', percentage: 38 },
    { group: '35-44', percentage: 25 },
    { group: '45-54', percentage: 10 },
    { group: '55+', percentage: 5 },
  ],
  gender: [
    { type: 'Male', percentage: 52 },
    { type: 'Female', percentage: 46 },
    { type: 'Other', percentage: 2 },
  ],
  location: [
    { country: 'United States', percentage: 45 },
    { country: 'United Kingdom', percentage: 15 },
    { country: 'Germany', percentage: 10 },
    { country: 'France', percentage: 8 },
    { country: 'Canada', percentage: 7 },
    { country: 'Other', percentage: 15 },
  ],
};

export const performanceMetrics = {
  pageLoadTime: 2.4, // seconds
  serverResponseTime: 0.8, // seconds
  errorRate: 0.5, // percentage
  availability: 99.95, // percentage
};