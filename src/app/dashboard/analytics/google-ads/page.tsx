"use client";

import { useState } from "react";
import {
  Target,
  TrendingUp,
  TrendingDown,
  DollarSign,
  MousePointer,
  Eye,
  Download,
  RefreshCw,
  AlertTriangle,
  CheckCircle,
  Pause,
} from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";

const campaignData = [
  { name: "Brand Awareness", spend: 4500, conversions: 245, cpc: 1.84, ctr: 4.2, status: "active" },
  { name: "Product Launch", spend: 8200, conversions: 512, cpc: 1.60, ctr: 5.1, status: "active" },
  { name: "Retargeting", spend: 3100, conversions: 189, cpc: 1.64, ctr: 6.8, status: "active" },
  { name: "Competitor Keywords", spend: 5600, conversions: 167, cpc: 3.35, ctr: 2.9, status: "paused" },
  { name: "Holiday Sale", spend: 6800, conversions: 423, cpc: 1.61, ctr: 4.8, status: "active" },
];

const performanceData = [
  { date: "Dec 1", spend: 850, conversions: 42, clicks: 520 },
  { date: "Dec 2", spend: 920, conversions: 48, clicks: 580 },
  { date: "Dec 3", spend: 780, conversions: 38, clicks: 490 },
  { date: "Dec 4", spend: 1100, conversions: 62, clicks: 720 },
  { date: "Dec 5", spend: 1250, conversions: 71, clicks: 810 },
  { date: "Dec 6", spend: 980, conversions: 52, clicks: 620 },
  { date: "Dec 7", spend: 1080, conversions: 58, clicks: 680 },
];

const keywordData = [
  { keyword: "marketing analytics", impressions: 45200, clicks: 1890, ctr: 4.2, cpc: 2.15, conversions: 89 },
  { keyword: "dashboard software", impressions: 32100, clicks: 1420, ctr: 4.4, cpc: 1.95, conversions: 72 },
  { keyword: "business intelligence", impressions: 28500, clicks: 1180, ctr: 4.1, cpc: 2.45, conversions: 54 },
  { keyword: "data visualization", impressions: 21800, clicks: 980, ctr: 4.5, cpc: 1.78, conversions: 48 },
  { keyword: "analytics platform", impressions: 18900, clicks: 820, ctr: 4.3, cpc: 2.32, conversions: 41 },
];

export default function GoogleAdsPage() {
  const [dateRange, setDateRange] = useState("7d");

  const totalSpend = campaignData.reduce((acc, c) => acc + c.spend, 0);
  const totalConversions = campaignData.reduce((acc, c) => acc + c.conversions, 0);
  const avgCPC = totalSpend / campaignData.reduce((acc, c) => acc + (c.spend / c.cpc), 0);

  return (
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <div className="w-8 h-8 bg-amber-100 dark:bg-amber-900/30 rounded-lg flex items-center justify-center">
              <Target className="w-5 h-5 text-amber-600 dark:text-amber-400" />
            </div>
            <h1 className="text-2xl font-semibold text-foreground">Google Ads</h1>
          </div>
          <p className="text-muted-foreground text-sm">Campaign performance, keywords, and ROI</p>
        </div>
        <div className="flex items-center gap-3">
          <select
            value={dateRange}
            onChange={(e) => setDateRange(e.target.value)}
            className="px-3 py-2 bg-card border border-border rounded-lg text-sm text-foreground"
          >
            <option value="7d">Last 7 days</option>
            <option value="14d">Last 14 days</option>
            <option value="30d">Last 30 days</option>
          </select>
          <button className="flex items-center gap-2 px-3 py-2 bg-card border border-border rounded-lg text-sm text-foreground hover:bg-secondary">
            <RefreshCw size={14} />
            Sync
          </button>
          <button className="flex items-center gap-2 px-3 py-2 bg-card border border-border rounded-lg text-sm text-foreground hover:bg-secondary">
            <Download size={14} />
            Export
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
        {[
          { label: "Total Spend", value: `$${totalSpend.toLocaleString()}`, change: 8.5, icon: DollarSign },
          { label: "Conversions", value: totalConversions.toLocaleString(), change: 15.2, icon: Target },
          { label: "Avg. CPC", value: `$${avgCPC.toFixed(2)}`, change: -5.3, icon: MousePointer },
          { label: "Impressions", value: "892K", change: 12.1, icon: Eye },
          { label: "ROAS", value: "4.2x", change: 18.5, icon: TrendingUp },
        ].map((stat) => (
          <div key={stat.label} className="bg-card rounded-xl border border-border p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-muted-foreground">{stat.label}</span>
              <stat.icon size={16} className="text-muted-foreground" />
            </div>
            <div className="flex items-end justify-between">
              <span className="text-xl font-semibold text-foreground">{stat.value}</span>
              <div className={`flex items-center gap-1 text-xs ${stat.change >= 0 ? "text-emerald-600" : "text-red-500"}`}>
                {stat.change >= 0 ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
                {Math.abs(stat.change)}%
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Performance Chart */}
      <div className="bg-card rounded-xl border border-border p-6 mb-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-semibold text-foreground">Performance Overview</h3>
          <div className="flex items-center gap-4 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-emerald-500 rounded-full" />
              <span className="text-muted-foreground">Spend</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full" />
              <span className="text-muted-foreground">Conversions</span>
            </div>
          </div>
        </div>
        <div className="h-[280px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={performanceData}>
              <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
              <XAxis dataKey="date" tick={{ fill: "var(--muted-foreground)", fontSize: 12 }} />
              <YAxis yAxisId="left" tick={{ fill: "var(--muted-foreground)", fontSize: 12 }} />
              <YAxis yAxisId="right" orientation="right" tick={{ fill: "var(--muted-foreground)", fontSize: 12 }} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "var(--card)",
                  border: "1px solid var(--border)",
                  borderRadius: "8px",
                }}
              />
              <Line yAxisId="left" type="monotone" dataKey="spend" stroke="#10b981" strokeWidth={2} dot={false} />
              <Line yAxisId="right" type="monotone" dataKey="conversions" stroke="#3b82f6" strokeWidth={2} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Campaigns Table */}
      <div className="bg-card rounded-xl border border-border p-6 mb-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold text-foreground">Active Campaigns</h3>
          <button className="text-sm text-accent hover:underline">View All</button>
        </div>
        <table className="w-full">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left text-xs font-medium text-muted-foreground uppercase tracking-wider pb-3">Campaign</th>
              <th className="text-left text-xs font-medium text-muted-foreground uppercase tracking-wider pb-3">Status</th>
              <th className="text-right text-xs font-medium text-muted-foreground uppercase tracking-wider pb-3">Spend</th>
              <th className="text-right text-xs font-medium text-muted-foreground uppercase tracking-wider pb-3">Conv.</th>
              <th className="text-right text-xs font-medium text-muted-foreground uppercase tracking-wider pb-3">CPC</th>
              <th className="text-right text-xs font-medium text-muted-foreground uppercase tracking-wider pb-3">CTR</th>
            </tr>
          </thead>
          <tbody>
            {campaignData.map((campaign) => (
              <tr key={campaign.name} className="border-b border-border/50 hover:bg-secondary/50">
                <td className="py-3 text-sm text-foreground font-medium">{campaign.name}</td>
                <td className="py-3">
                  <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium ${
                    campaign.status === "active"
                      ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400"
                      : "bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400"
                  }`}>
                    {campaign.status === "active" ? <CheckCircle size={10} /> : <Pause size={10} />}
                    {campaign.status}
                  </span>
                </td>
                <td className="py-3 text-sm text-foreground text-right">${campaign.spend.toLocaleString()}</td>
                <td className="py-3 text-sm text-foreground text-right">{campaign.conversions}</td>
                <td className="py-3 text-sm text-muted-foreground text-right">${campaign.cpc.toFixed(2)}</td>
                <td className="py-3 text-sm text-muted-foreground text-right">{campaign.ctr}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Top Keywords */}
      <div className="bg-card rounded-xl border border-border p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold text-foreground">Top Keywords</h3>
          <button className="text-sm text-accent hover:underline">Manage Keywords</button>
        </div>
        <table className="w-full">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left text-xs font-medium text-muted-foreground uppercase tracking-wider pb-3">Keyword</th>
              <th className="text-right text-xs font-medium text-muted-foreground uppercase tracking-wider pb-3">Impr.</th>
              <th className="text-right text-xs font-medium text-muted-foreground uppercase tracking-wider pb-3">Clicks</th>
              <th className="text-right text-xs font-medium text-muted-foreground uppercase tracking-wider pb-3">CTR</th>
              <th className="text-right text-xs font-medium text-muted-foreground uppercase tracking-wider pb-3">CPC</th>
              <th className="text-right text-xs font-medium text-muted-foreground uppercase tracking-wider pb-3">Conv.</th>
            </tr>
          </thead>
          <tbody>
            {keywordData.map((kw) => (
              <tr key={kw.keyword} className="border-b border-border/50 hover:bg-secondary/50">
                <td className="py-3 text-sm text-foreground font-medium">{kw.keyword}</td>
                <td className="py-3 text-sm text-muted-foreground text-right">{kw.impressions.toLocaleString()}</td>
                <td className="py-3 text-sm text-foreground text-right">{kw.clicks.toLocaleString()}</td>
                <td className="py-3 text-sm text-muted-foreground text-right">{kw.ctr}%</td>
                <td className="py-3 text-sm text-muted-foreground text-right">${kw.cpc}</td>
                <td className="py-3 text-sm text-emerald-600 text-right">{kw.conversions}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
