"use client";

import { useState } from "react";
import {
  Mail,
  TrendingUp,
  TrendingDown,
  MousePointer,
  Eye,
  Users,
  Download,
  Send,
  UserMinus,
  CheckCircle,
} from "lucide-react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";

const performanceData = [
  { date: "Dec 1", sent: 12000, opened: 4200, clicked: 840 },
  { date: "Dec 2", sent: 0, opened: 3800, clicked: 720 },
  { date: "Dec 3", sent: 8500, opened: 3100, clicked: 580 },
  { date: "Dec 4", sent: 0, opened: 2800, clicked: 520 },
  { date: "Dec 5", sent: 15000, opened: 5400, clicked: 1020 },
  { date: "Dec 6", sent: 0, opened: 4800, clicked: 890 },
  { date: "Dec 7", sent: 0, opened: 4200, clicked: 780 },
];

const campaigns = [
  { name: "Weekly Newsletter", sent: 15000, openRate: 38.2, clickRate: 6.8, unsubRate: 0.12, status: "sent" },
  { name: "Product Update", sent: 12000, openRate: 42.5, clickRate: 8.2, unsubRate: 0.08, status: "sent" },
  { name: "Holiday Sale", sent: 18000, openRate: 35.8, clickRate: 12.4, unsubRate: 0.15, status: "sent" },
  { name: "Onboarding Sequence", sent: 2400, openRate: 52.3, clickRate: 18.5, unsubRate: 0.04, status: "active" },
  { name: "Re-engagement", sent: 8500, openRate: 22.1, clickRate: 4.2, unsubRate: 0.35, status: "sent" },
];

const automations = [
  { name: "Welcome Series", active: true, sent: 4200, openRate: 58.2, conversions: 245 },
  { name: "Abandoned Cart", active: true, sent: 1800, openRate: 45.8, conversions: 89 },
  { name: "Post-Purchase", active: true, sent: 2100, openRate: 42.1, conversions: 156 },
  { name: "Win-Back", active: false, sent: 0, openRate: 0, conversions: 0 },
];

export default function EmailMarketingPage() {
  const [dateRange, setDateRange] = useState("7d");

  return (
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center">
              <Mail className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            </div>
            <h1 className="text-2xl font-semibold text-foreground">Email Marketing</h1>
          </div>
          <p className="text-muted-foreground text-sm">Campaign performance and automation metrics</p>
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
          { label: "Emails Sent", value: "55.9K", change: 8.2, icon: Send },
          { label: "Open Rate", value: "38.2%", change: 5.4, icon: Eye },
          { label: "Click Rate", value: "7.8%", change: 12.1, icon: MousePointer },
          { label: "Subscribers", value: "24.8K", change: 3.2, icon: Users },
          { label: "Unsubscribe Rate", value: "0.15%", change: -18.5, icon: UserMinus },
        ].map((stat) => (
          <div key={stat.label} className="bg-card rounded-xl border border-border p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-muted-foreground">{stat.label}</span>
              <stat.icon size={16} className="text-muted-foreground" />
            </div>
            <div className="flex items-end justify-between">
              <span className="text-xl font-semibold text-foreground">{stat.value}</span>
              <div className={`flex items-center gap-1 text-xs ${
                stat.label === "Unsubscribe Rate"
                  ? stat.change <= 0 ? "text-emerald-600" : "text-red-500"
                  : stat.change >= 0 ? "text-emerald-600" : "text-red-500"
              }`}>
                {stat.change >= 0 ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
                {Math.abs(stat.change)}%
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Performance Chart */}
      <div className="bg-card rounded-xl border border-border p-6 mb-6">
        <h3 className="font-semibold text-foreground mb-6">Email Performance</h3>
        <div className="h-[280px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={performanceData}>
              <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
              <XAxis dataKey="date" tick={{ fill: "var(--muted-foreground)", fontSize: 12 }} />
              <YAxis tick={{ fill: "var(--muted-foreground)", fontSize: 12 }} />
              <Tooltip contentStyle={{ backgroundColor: "var(--card)", border: "1px solid var(--border)", borderRadius: "8px" }} />
              <Area type="monotone" dataKey="opened" stroke="#8b5cf6" fill="#8b5cf6" fillOpacity={0.1} />
              <Area type="monotone" dataKey="clicked" stroke="#10b981" fill="#10b981" fillOpacity={0.1} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Recent Campaigns */}
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-4">Recent Campaigns</h3>
          <div className="space-y-3">
            {campaigns.map((campaign) => (
              <div key={campaign.name} className="flex items-center justify-between p-3 border border-border rounded-lg hover:bg-secondary/50">
                <div>
                  <h4 className="font-medium text-sm text-foreground">{campaign.name}</h4>
                  <p className="text-xs text-muted-foreground">{campaign.sent.toLocaleString()} sent</p>
                </div>
                <div className="flex items-center gap-4 text-sm">
                  <div className="text-center">
                    <p className="font-medium text-foreground">{campaign.openRate}%</p>
                    <p className="text-xs text-muted-foreground">Opens</p>
                  </div>
                  <div className="text-center">
                    <p className="font-medium text-foreground">{campaign.clickRate}%</p>
                    <p className="text-xs text-muted-foreground">Clicks</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Automations */}
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-4">Active Automations</h3>
          <div className="space-y-3">
            {automations.map((automation) => (
              <div key={automation.name} className="flex items-center justify-between p-3 border border-border rounded-lg hover:bg-secondary/50">
                <div className="flex items-center gap-3">
                  <div className={`w-2 h-2 rounded-full ${automation.active ? "bg-emerald-500" : "bg-gray-400"}`} />
                  <div>
                    <h4 className="font-medium text-sm text-foreground">{automation.name}</h4>
                    <p className="text-xs text-muted-foreground">{automation.sent.toLocaleString()} sent this month</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-sm">
                  <div className="text-center">
                    <p className="font-medium text-foreground">{automation.openRate}%</p>
                    <p className="text-xs text-muted-foreground">Opens</p>
                  </div>
                  <div className="text-center">
                    <p className="font-medium text-emerald-600">{automation.conversions}</p>
                    <p className="text-xs text-muted-foreground">Conv.</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
