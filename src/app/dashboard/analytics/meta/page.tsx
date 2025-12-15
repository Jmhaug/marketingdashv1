"use client";

import { useState } from "react";
import {
  TrendingUp,
  TrendingDown,
  DollarSign,
  Users,
  Heart,
  MessageCircle,
  Share2,
  Eye,
  Download,
  RefreshCw,
  Play,
  Image,
} from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
} from "recharts";

const performanceData = [
  { date: "Dec 1", reach: 45000, engagement: 3200, spend: 420 },
  { date: "Dec 2", reach: 52000, engagement: 3800, spend: 480 },
  { date: "Dec 3", reach: 48000, engagement: 3400, spend: 440 },
  { date: "Dec 4", reach: 61000, engagement: 4500, spend: 520 },
  { date: "Dec 5", reach: 58000, engagement: 4200, spend: 490 },
  { date: "Dec 6", reach: 72000, engagement: 5100, spend: 580 },
  { date: "Dec 7", reach: 68000, engagement: 4800, spend: 550 },
];

const adCreatives = [
  {
    id: 1,
    name: "Product Showcase Video",
    type: "video",
    spend: 2400,
    reach: 124000,
    engagement: 8500,
    ctr: 4.2,
    cpm: 19.35,
    status: "active"
  },
  {
    id: 2,
    name: "Carousel - Features",
    type: "carousel",
    spend: 1800,
    reach: 98000,
    engagement: 6200,
    ctr: 3.8,
    cpm: 18.37,
    status: "active"
  },
  {
    id: 3,
    name: "Static - Holiday Sale",
    type: "image",
    spend: 1200,
    reach: 72000,
    engagement: 4100,
    ctr: 3.5,
    cpm: 16.67,
    status: "active"
  },
  {
    id: 4,
    name: "Story Ad - Brand",
    type: "story",
    spend: 900,
    reach: 58000,
    engagement: 3800,
    ctr: 5.1,
    cpm: 15.52,
    status: "paused"
  },
];

const audienceData = [
  { age: "18-24", percentage: 22 },
  { age: "25-34", percentage: 38 },
  { age: "35-44", percentage: 24 },
  { age: "45-54", percentage: 12 },
  { age: "55+", percentage: 4 },
];

export default function MetaAdsPage() {
  const [dateRange, setDateRange] = useState("7d");
  const [platform, setPlatform] = useState("all");

  return (
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="currentColor">
                <path d="M12 2.04c-5.5 0-10 4.49-10 10.02 0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02z" />
              </svg>
            </div>
            <h1 className="text-2xl font-semibold text-foreground">Meta Ads</h1>
          </div>
          <p className="text-muted-foreground text-sm">Facebook & Instagram advertising performance</p>
        </div>
        <div className="flex items-center gap-3">
          <select
            value={platform}
            onChange={(e) => setPlatform(e.target.value)}
            className="px-3 py-2 bg-card border border-border rounded-lg text-sm text-foreground"
          >
            <option value="all">All Platforms</option>
            <option value="facebook">Facebook</option>
            <option value="instagram">Instagram</option>
          </select>
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

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
        {[
          { label: "Total Reach", value: "404K", change: 18.2, icon: Users },
          { label: "Engagement", value: "29.2K", change: 12.5, icon: Heart },
          { label: "Link Clicks", value: "8,420", change: 8.3, icon: TrendingUp },
          { label: "Total Spend", value: "$6,280", change: 5.1, icon: DollarSign },
          { label: "Avg. CPM", value: "$17.84", change: -3.2, icon: Eye },
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
          <h3 className="font-semibold text-foreground">Reach & Engagement</h3>
          <div className="flex items-center gap-4 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full" />
              <span className="text-muted-foreground">Reach</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-pink-500 rounded-full" />
              <span className="text-muted-foreground">Engagement</span>
            </div>
          </div>
        </div>
        <div className="h-[280px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={performanceData}>
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
              <Area type="monotone" dataKey="reach" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.1} />
              <Area type="monotone" dataKey="engagement" stroke="#ec4899" fill="#ec4899" fillOpacity={0.1} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        {/* Engagement Breakdown */}
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-4">Engagement Breakdown</h3>
          <div className="space-y-4">
            {[
              { label: "Likes", value: 18420, icon: Heart, color: "text-pink-500" },
              { label: "Comments", value: 3240, icon: MessageCircle, color: "text-blue-500" },
              { label: "Shares", value: 1890, icon: Share2, color: "text-emerald-500" },
              { label: "Saves", value: 5650, icon: Download, color: "text-purple-500" },
            ].map((item) => (
              <div key={item.label} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <item.icon size={18} className={item.color} />
                  <span className="text-sm text-foreground">{item.label}</span>
                </div>
                <span className="text-sm font-medium text-foreground">{item.value.toLocaleString()}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Audience Age */}
        <div className="bg-card rounded-xl border border-border p-6 lg:col-span-2">
          <h3 className="font-semibold text-foreground mb-4">Audience Demographics</h3>
          <div className="h-[200px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={audienceData} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" className="stroke-border" horizontal={false} />
                <XAxis type="number" tick={{ fill: "var(--muted-foreground)", fontSize: 12 }} />
                <YAxis dataKey="age" type="category" tick={{ fill: "var(--muted-foreground)", fontSize: 12 }} width={50} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "var(--card)",
                    border: "1px solid var(--border)",
                    borderRadius: "8px",
                  }}
                />
                <Bar dataKey="percentage" fill="#3b82f6" radius={[0, 4, 4, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Ad Creatives */}
      <div className="bg-card rounded-xl border border-border p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold text-foreground">Ad Creative Performance</h3>
          <button className="text-sm text-accent hover:underline">View All Ads</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {adCreatives.map((ad) => (
            <div key={ad.id} className="border border-border rounded-xl p-4 hover:bg-secondary/50">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center">
                    {ad.type === "video" && <Play size={18} className="text-muted-foreground" />}
                    {ad.type === "image" && <Image size={18} className="text-muted-foreground" />}
                    {ad.type === "carousel" && <Image size={18} className="text-muted-foreground" />}
                    {ad.type === "story" && <Play size={18} className="text-muted-foreground" />}
                  </div>
                  <div>
                    <h4 className="font-medium text-sm text-foreground">{ad.name}</h4>
                    <span className="text-xs text-muted-foreground capitalize">{ad.type}</span>
                  </div>
                </div>
                <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                  ad.status === "active"
                    ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400"
                    : "bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400"
                }`}>
                  {ad.status}
                </span>
              </div>
              <div className="grid grid-cols-4 gap-2 text-center">
                <div>
                  <p className="text-xs text-muted-foreground">Reach</p>
                  <p className="text-sm font-medium text-foreground">{(ad.reach / 1000).toFixed(0)}K</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Eng.</p>
                  <p className="text-sm font-medium text-foreground">{(ad.engagement / 1000).toFixed(1)}K</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">CTR</p>
                  <p className="text-sm font-medium text-foreground">{ad.ctr}%</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Spend</p>
                  <p className="text-sm font-medium text-foreground">${ad.spend}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
