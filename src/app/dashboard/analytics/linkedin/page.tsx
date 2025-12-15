"use client";

import { useState } from "react";
import {
  Linkedin,
  TrendingUp,
  TrendingDown,
  Users,
  Building2,
  Briefcase,
  Eye,
  MousePointer,
  Download,
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
  PieChart,
  Pie,
  Cell,
} from "recharts";

const performanceData = [
  { date: "Dec 1", impressions: 12000, clicks: 420, leads: 8 },
  { date: "Dec 2", impressions: 14500, clicks: 510, leads: 12 },
  { date: "Dec 3", impressions: 11800, clicks: 380, leads: 6 },
  { date: "Dec 4", impressions: 16200, clicks: 620, leads: 15 },
  { date: "Dec 5", impressions: 15400, clicks: 580, leads: 11 },
  { date: "Dec 6", impressions: 18900, clicks: 720, leads: 18 },
  { date: "Dec 7", impressions: 17200, clicks: 650, leads: 14 },
];

const industryData = [
  { name: "Technology", value: 35, color: "#0077b5" },
  { name: "Finance", value: 25, color: "#10b981" },
  { name: "Healthcare", value: 18, color: "#8b5cf6" },
  { name: "Manufacturing", value: 12, color: "#f59e0b" },
  { name: "Other", value: 10, color: "#6b7280" },
];

const seniorityData = [
  { level: "C-Suite", percentage: 12 },
  { level: "VP", percentage: 18 },
  { level: "Director", percentage: 28 },
  { level: "Manager", percentage: 25 },
  { level: "Individual", percentage: 17 },
];

const campaigns = [
  { name: "B2B Lead Gen - Enterprise", spend: 3200, leads: 42, cpl: 76.19, ctr: 2.8, status: "active" },
  { name: "Thought Leadership", spend: 1800, leads: 18, cpl: 100.00, ctr: 1.9, status: "active" },
  { name: "Product Demo Request", spend: 2400, leads: 35, cpl: 68.57, ctr: 3.2, status: "active" },
  { name: "Webinar Promotion", spend: 1200, leads: 28, cpl: 42.86, ctr: 4.1, status: "completed" },
];

export default function LinkedInAdsPage() {
  const [dateRange, setDateRange] = useState("7d");

  return (
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <div className="w-8 h-8 bg-[#0077b5]/10 rounded-lg flex items-center justify-center">
              <Linkedin className="w-5 h-5 text-[#0077b5]" />
            </div>
            <h1 className="text-2xl font-semibold text-foreground">LinkedIn Ads</h1>
          </div>
          <p className="text-muted-foreground text-sm">B2B campaign metrics and lead quality</p>
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
            <Download size={14} />
            Export
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
        {[
          { label: "Impressions", value: "106K", change: 15.2, icon: Eye },
          { label: "Clicks", value: "3,880", change: 12.8, icon: MousePointer },
          { label: "Leads", value: "84", change: 22.5, icon: Users },
          { label: "Avg. CPL", value: "$72.38", change: -8.3, icon: TrendingDown },
          { label: "Lead Quality", value: "8.4/10", change: 5.1, icon: TrendingUp },
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
        <h3 className="font-semibold text-foreground mb-6">Lead Generation Performance</h3>
        <div className="h-[280px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={performanceData}>
              <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
              <XAxis dataKey="date" tick={{ fill: "var(--muted-foreground)", fontSize: 12 }} />
              <YAxis yAxisId="left" tick={{ fill: "var(--muted-foreground)", fontSize: 12 }} />
              <YAxis yAxisId="right" orientation="right" tick={{ fill: "var(--muted-foreground)", fontSize: 12 }} />
              <Tooltip contentStyle={{ backgroundColor: "var(--card)", border: "1px solid var(--border)", borderRadius: "8px" }} />
              <Line yAxisId="left" type="monotone" dataKey="impressions" stroke="#0077b5" strokeWidth={2} dot={false} />
              <Line yAxisId="right" type="monotone" dataKey="leads" stroke="#10b981" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Industry Distribution */}
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-4">Lead Industry Distribution</h3>
          <div className="flex items-center gap-8">
            <div className="h-[180px] w-[180px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={industryData} cx="50%" cy="50%" innerRadius={50} outerRadius={80} dataKey="value">
                    {industryData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="space-y-2">
              {industryData.map((industry) => (
                <div key={industry.name} className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: industry.color }} />
                  <span className="text-sm text-foreground">{industry.name}</span>
                  <span className="text-sm text-muted-foreground ml-auto">{industry.value}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Seniority */}
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-4">Lead Seniority Level</h3>
          <div className="h-[200px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={seniorityData} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" className="stroke-border" horizontal={false} />
                <XAxis type="number" tick={{ fill: "var(--muted-foreground)", fontSize: 12 }} />
                <YAxis dataKey="level" type="category" tick={{ fill: "var(--muted-foreground)", fontSize: 12 }} width={80} />
                <Tooltip contentStyle={{ backgroundColor: "var(--card)", border: "1px solid var(--border)", borderRadius: "8px" }} />
                <Bar dataKey="percentage" fill="#0077b5" radius={[0, 4, 4, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Campaigns */}
      <div className="bg-card rounded-xl border border-border p-6">
        <h3 className="font-semibold text-foreground mb-4">Campaign Performance</h3>
        <table className="w-full">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left text-xs font-medium text-muted-foreground uppercase tracking-wider pb-3">Campaign</th>
              <th className="text-right text-xs font-medium text-muted-foreground uppercase tracking-wider pb-3">Spend</th>
              <th className="text-right text-xs font-medium text-muted-foreground uppercase tracking-wider pb-3">Leads</th>
              <th className="text-right text-xs font-medium text-muted-foreground uppercase tracking-wider pb-3">CPL</th>
              <th className="text-right text-xs font-medium text-muted-foreground uppercase tracking-wider pb-3">CTR</th>
              <th className="text-right text-xs font-medium text-muted-foreground uppercase tracking-wider pb-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {campaigns.map((campaign) => (
              <tr key={campaign.name} className="border-b border-border/50 hover:bg-secondary/50">
                <td className="py-3 text-sm text-foreground font-medium">{campaign.name}</td>
                <td className="py-3 text-sm text-foreground text-right">${campaign.spend.toLocaleString()}</td>
                <td className="py-3 text-sm text-foreground text-right">{campaign.leads}</td>
                <td className="py-3 text-sm text-muted-foreground text-right">${campaign.cpl.toFixed(2)}</td>
                <td className="py-3 text-sm text-muted-foreground text-right">{campaign.ctr}%</td>
                <td className="py-3 text-right">
                  <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                    campaign.status === "active"
                      ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400"
                      : "bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400"
                  }`}>
                    {campaign.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
