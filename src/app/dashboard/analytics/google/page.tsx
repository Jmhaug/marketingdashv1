"use client";

import { useState } from "react";
import {
  Calendar,
  TrendingUp,
  TrendingDown,
  Users,
  Clock,
  MousePointer,
  ArrowUpRight,
  Globe,
  Smartphone,
  Monitor,
  Tablet,
  Download,
  RefreshCw,
} from "lucide-react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
} from "recharts";

const trafficData = [
  { date: "Dec 1", sessions: 2400, users: 1800, pageviews: 4200 },
  { date: "Dec 2", sessions: 2100, users: 1600, pageviews: 3800 },
  { date: "Dec 3", sessions: 2800, users: 2100, pageviews: 5100 },
  { date: "Dec 4", sessions: 3200, users: 2400, pageviews: 5800 },
  { date: "Dec 5", sessions: 2900, users: 2200, pageviews: 5200 },
  { date: "Dec 6", sessions: 3500, users: 2700, pageviews: 6200 },
  { date: "Dec 7", sessions: 3800, users: 2900, pageviews: 6800 },
  { date: "Dec 8", sessions: 3200, users: 2500, pageviews: 5900 },
  { date: "Dec 9", sessions: 3600, users: 2800, pageviews: 6400 },
  { date: "Dec 10", sessions: 4100, users: 3200, pageviews: 7200 },
  { date: "Dec 11", sessions: 3900, users: 3000, pageviews: 6900 },
  { date: "Dec 12", sessions: 4200, users: 3300, pageviews: 7500 },
  { date: "Dec 13", sessions: 4500, users: 3500, pageviews: 8000 },
  { date: "Dec 14", sessions: 4800, users: 3700, pageviews: 8500 },
];

const deviceData = [
  { name: "Desktop", value: 58, color: "#10b981" },
  { name: "Mobile", value: 35, color: "#6366f1" },
  { name: "Tablet", value: 7, color: "#f59e0b" },
];

const topPages = [
  { page: "/", views: 12500, avgTime: "2:45", bounceRate: "32%" },
  { page: "/products", views: 8400, avgTime: "3:12", bounceRate: "28%" },
  { page: "/pricing", views: 6200, avgTime: "4:05", bounceRate: "22%" },
  { page: "/blog", views: 5100, avgTime: "5:30", bounceRate: "45%" },
  { page: "/contact", views: 3800, avgTime: "1:55", bounceRate: "38%" },
];

const sourceData = [
  { source: "Organic Search", sessions: 15200, change: 12.5 },
  { source: "Direct", sessions: 8400, change: 5.2 },
  { source: "Social", sessions: 6100, change: -3.8 },
  { source: "Referral", sessions: 4200, change: 8.1 },
  { source: "Email", sessions: 2800, change: 15.3 },
  { source: "Paid Search", sessions: 2100, change: -2.1 },
];

const realTimeData = {
  activeUsers: 142,
  topPages: [
    { page: "/pricing", users: 28 },
    { page: "/", users: 24 },
    { page: "/products/pro", users: 18 },
    { page: "/blog/analytics-guide", users: 15 },
  ],
};

export default function GoogleAnalyticsPage() {
  const [dateRange, setDateRange] = useState("14d");

  return (
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="currentColor">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
            </div>
            <h1 className="text-2xl font-semibold text-foreground">Google Analytics</h1>
          </div>
          <p className="text-muted-foreground text-sm">Traffic, user behavior, and conversions</p>
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
            <option value="90d">Last 90 days</option>
          </select>
          <button className="flex items-center gap-2 px-3 py-2 bg-card border border-border rounded-lg text-sm text-foreground hover:bg-secondary">
            <RefreshCw size={14} />
            Refresh
          </button>
          <button className="flex items-center gap-2 px-3 py-2 bg-card border border-border rounded-lg text-sm text-foreground hover:bg-secondary">
            <Download size={14} />
            Export
          </button>
        </div>
      </div>

      {/* Real-time Widget */}
      <div className="bg-card rounded-xl border border-border p-4 mb-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse" />
              <span className="text-sm font-medium text-foreground">Real-time</span>
            </div>
            <div className="text-3xl font-bold text-foreground">{realTimeData.activeUsers}</div>
            <span className="text-muted-foreground text-sm">active users now</span>
          </div>
          <div className="flex items-center gap-6">
            {realTimeData.topPages.map((page) => (
              <div key={page.page} className="text-sm">
                <span className="text-muted-foreground">{page.page}</span>
                <span className="ml-2 font-medium text-foreground">{page.users}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {[
          { label: "Sessions", value: "48.2K", change: 12.5, icon: Users },
          { label: "Users", value: "36.8K", change: 8.3, icon: Users },
          { label: "Pageviews", value: "124K", change: 15.2, icon: MousePointer },
          { label: "Avg. Session", value: "3m 24s", change: -2.1, icon: Clock },
        ].map((stat) => (
          <div key={stat.label} className="bg-card rounded-xl border border-border p-5">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm text-muted-foreground">{stat.label}</span>
              <stat.icon size={18} className="text-muted-foreground" />
            </div>
            <div className="flex items-end justify-between">
              <span className="text-2xl font-semibold text-foreground">{stat.value}</span>
              <div className={`flex items-center gap-1 text-sm ${stat.change >= 0 ? "text-emerald-600" : "text-red-500"}`}>
                {stat.change >= 0 ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
                {Math.abs(stat.change)}%
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Main Chart */}
      <div className="bg-card rounded-xl border border-border p-6 mb-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-semibold text-foreground">Traffic Overview</h3>
          <div className="flex items-center gap-4 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-emerald-500 rounded-full" />
              <span className="text-muted-foreground">Sessions</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full" />
              <span className="text-muted-foreground">Users</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-purple-500 rounded-full" />
              <span className="text-muted-foreground">Pageviews</span>
            </div>
          </div>
        </div>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={trafficData}>
              <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
              <XAxis dataKey="date" tick={{ fill: "var(--muted-foreground)", fontSize: 12 }} />
              <YAxis tick={{ fill: "var(--muted-foreground)", fontSize: 12 }} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "var(--card)",
                  border: "1px solid var(--border)",
                  borderRadius: "8px",
                }}
              />
              <Area type="monotone" dataKey="pageviews" stroke="#8b5cf6" fill="#8b5cf6" fillOpacity={0.1} />
              <Area type="monotone" dataKey="sessions" stroke="#10b981" fill="#10b981" fillOpacity={0.1} />
              <Area type="monotone" dataKey="users" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.1} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Device Breakdown */}
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-4">Device Breakdown</h3>
          <div className="h-[200px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={deviceData}
                  cx="50%"
                  cy="50%"
                  innerRadius={50}
                  outerRadius={80}
                  dataKey="value"
                >
                  {deviceData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="flex justify-center gap-6 mt-4">
            {deviceData.map((device) => (
              <div key={device.name} className="flex items-center gap-2">
                {device.name === "Desktop" && <Monitor size={14} className="text-emerald-500" />}
                {device.name === "Mobile" && <Smartphone size={14} className="text-indigo-500" />}
                {device.name === "Tablet" && <Tablet size={14} className="text-amber-500" />}
                <span className="text-sm text-muted-foreground">{device.name}</span>
                <span className="text-sm font-medium text-foreground">{device.value}%</span>
              </div>
            ))}
          </div>
        </div>

        {/* Traffic Sources */}
        <div className="bg-card rounded-xl border border-border p-6 lg:col-span-2">
          <h3 className="font-semibold text-foreground mb-4">Traffic Sources</h3>
          <div className="space-y-3">
            {sourceData.map((source) => (
              <div key={source.source} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Globe size={16} className="text-muted-foreground" />
                  <span className="text-sm text-foreground">{source.source}</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-sm font-medium text-foreground">{source.sessions.toLocaleString()}</span>
                  <div className={`flex items-center gap-1 text-xs ${source.change >= 0 ? "text-emerald-600" : "text-red-500"}`}>
                    {source.change >= 0 ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
                    {Math.abs(source.change)}%
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Top Pages */}
      <div className="bg-card rounded-xl border border-border p-6 mt-6">
        <h3 className="font-semibold text-foreground mb-4">Top Pages</h3>
        <table className="w-full">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left text-xs font-medium text-muted-foreground uppercase tracking-wider pb-3">Page</th>
              <th className="text-right text-xs font-medium text-muted-foreground uppercase tracking-wider pb-3">Views</th>
              <th className="text-right text-xs font-medium text-muted-foreground uppercase tracking-wider pb-3">Avg. Time</th>
              <th className="text-right text-xs font-medium text-muted-foreground uppercase tracking-wider pb-3">Bounce Rate</th>
            </tr>
          </thead>
          <tbody>
            {topPages.map((page) => (
              <tr key={page.page} className="border-b border-border/50 hover:bg-secondary/50">
                <td className="py-3 text-sm text-foreground font-medium">{page.page}</td>
                <td className="py-3 text-sm text-foreground text-right">{page.views.toLocaleString()}</td>
                <td className="py-3 text-sm text-muted-foreground text-right">{page.avgTime}</td>
                <td className="py-3 text-sm text-muted-foreground text-right">{page.bounceRate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
