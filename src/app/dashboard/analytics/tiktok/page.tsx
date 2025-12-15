"use client";

import { useState } from "react";
import {
  TrendingUp,
  TrendingDown,
  Play,
  Heart,
  Share2,
  MessageCircle,
  Eye,
  Users,
  Download,
  Clock,
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
  { date: "Dec 1", views: 125000, engagement: 8500, spend: 320 },
  { date: "Dec 2", views: 142000, engagement: 9800, spend: 380 },
  { date: "Dec 3", views: 118000, engagement: 7200, spend: 290 },
  { date: "Dec 4", views: 168000, engagement: 12400, spend: 420 },
  { date: "Dec 5", views: 155000, engagement: 11200, spend: 390 },
  { date: "Dec 6", views: 189000, engagement: 14800, spend: 480 },
  { date: "Dec 7", views: 176000, engagement: 13200, spend: 450 },
];

const ageData = [
  { age: "13-17", percentage: 8 },
  { age: "18-24", percentage: 42 },
  { age: "25-34", percentage: 32 },
  { age: "35-44", percentage: 12 },
  { age: "45+", percentage: 6 },
];

const topVideos = [
  { id: 1, name: "Product Launch Reveal", views: 245000, likes: 18200, shares: 4500, comments: 2100, ctr: 5.2 },
  { id: 2, name: "Behind the Scenes", views: 189000, likes: 14500, shares: 3200, comments: 1800, ctr: 4.8 },
  { id: 3, name: "User Testimonial", views: 156000, likes: 11800, shares: 2800, comments: 1400, ctr: 4.2 },
  { id: 4, name: "How-To Tutorial", views: 134000, likes: 9200, shares: 2100, comments: 980, ctr: 3.9 },
];

export default function TikTokAdsPage() {
  const [dateRange, setDateRange] = useState("7d");

  return (
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <div className="w-8 h-8 bg-black dark:bg-white/10 rounded-lg flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-5 h-5 text-white dark:text-white" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
              </svg>
            </div>
            <h1 className="text-2xl font-semibold text-foreground">TikTok Ads</h1>
          </div>
          <p className="text-muted-foreground text-sm">Video performance and audience demographics</p>
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
          { label: "Total Views", value: "1.07M", change: 24.5, icon: Eye },
          { label: "Engagement", value: "77.1K", change: 18.2, icon: Heart },
          { label: "Avg. Watch Time", value: "12.4s", change: 8.5, icon: Clock },
          { label: "Total Spend", value: "$2,730", change: 12.1, icon: TrendingUp },
          { label: "CPV", value: "$0.0026", change: -15.3, icon: TrendingDown },
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
        <h3 className="font-semibold text-foreground mb-6">Views & Engagement</h3>
        <div className="h-[280px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={performanceData}>
              <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
              <XAxis dataKey="date" tick={{ fill: "var(--muted-foreground)", fontSize: 12 }} />
              <YAxis tick={{ fill: "var(--muted-foreground)", fontSize: 12 }} />
              <Tooltip contentStyle={{ backgroundColor: "var(--card)", border: "1px solid var(--border)", borderRadius: "8px" }} />
              <Area type="monotone" dataKey="views" stroke="#ff0050" fill="#ff0050" fillOpacity={0.1} />
              <Area type="monotone" dataKey="engagement" stroke="#00f2ea" fill="#00f2ea" fillOpacity={0.1} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        {/* Age Demographics */}
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-4">Audience Age</h3>
          <div className="h-[200px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={ageData}>
                <CartesianGrid strokeDasharray="3 3" className="stroke-border" vertical={false} />
                <XAxis dataKey="age" tick={{ fill: "var(--muted-foreground)", fontSize: 12 }} />
                <YAxis tick={{ fill: "var(--muted-foreground)", fontSize: 12 }} />
                <Tooltip contentStyle={{ backgroundColor: "var(--card)", border: "1px solid var(--border)", borderRadius: "8px" }} />
                <Bar dataKey="percentage" fill="#ff0050" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Engagement Breakdown */}
        <div className="bg-card rounded-xl border border-border p-6 lg:col-span-2">
          <h3 className="font-semibold text-foreground mb-4">Engagement Breakdown</h3>
          <div className="grid grid-cols-4 gap-4">
            {[
              { label: "Likes", value: "52.4K", icon: Heart, color: "text-pink-500" },
              { label: "Comments", value: "8.2K", icon: MessageCircle, color: "text-blue-500" },
              { label: "Shares", value: "12.6K", icon: Share2, color: "text-emerald-500" },
              { label: "Saves", value: "3.9K", icon: Download, color: "text-purple-500" },
            ].map((item) => (
              <div key={item.label} className="text-center p-4 bg-muted rounded-xl">
                <item.icon className={`w-6 h-6 mx-auto mb-2 ${item.color}`} />
                <p className="text-lg font-semibold text-foreground">{item.value}</p>
                <p className="text-xs text-muted-foreground">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Top Videos */}
      <div className="bg-card rounded-xl border border-border p-6">
        <h3 className="font-semibold text-foreground mb-4">Top Performing Videos</h3>
        <div className="space-y-4">
          {topVideos.map((video, index) => (
            <div key={video.id} className="flex items-center gap-4 p-4 border border-border rounded-xl hover:bg-secondary/50">
              <div className="w-16 h-16 bg-muted rounded-lg flex items-center justify-center">
                <Play className="text-muted-foreground" size={24} />
              </div>
              <div className="flex-1">
                <h4 className="font-medium text-foreground">{video.name}</h4>
                <div className="flex items-center gap-4 mt-1 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1"><Eye size={14} /> {(video.views / 1000).toFixed(0)}K views</span>
                  <span className="flex items-center gap-1"><Heart size={14} /> {(video.likes / 1000).toFixed(1)}K</span>
                  <span className="flex items-center gap-1"><Share2 size={14} /> {(video.shares / 1000).toFixed(1)}K</span>
                </div>
              </div>
              <div className="text-right">
                <p className="text-lg font-semibold text-foreground">{video.ctr}%</p>
                <p className="text-xs text-muted-foreground">CTR</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
