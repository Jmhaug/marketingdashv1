"use client";

import { useState } from "react";
import {
  Brain,
  TrendingUp,
  TrendingDown,
  MessageSquare,
  Search,
  Eye,
  AlertCircle,
  CheckCircle,
  ExternalLink,
  Sparkles,
} from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";

const mentionData = [
  { date: "Dec 1", chatgpt: 45, claude: 32, perplexity: 28 },
  { date: "Dec 2", chatgpt: 52, claude: 38, perplexity: 31 },
  { date: "Dec 3", chatgpt: 48, claude: 35, perplexity: 29 },
  { date: "Dec 4", chatgpt: 61, claude: 42, perplexity: 35 },
  { date: "Dec 5", chatgpt: 58, claude: 45, perplexity: 38 },
  { date: "Dec 6", chatgpt: 72, claude: 51, perplexity: 42 },
  { date: "Dec 7", chatgpt: 68, claude: 48, perplexity: 40 },
];

const recentMentions = [
  {
    id: 1,
    platform: "ChatGPT",
    query: "best marketing analytics tools",
    context: "Syntara is mentioned as a comprehensive marketing analytics platform that offers real-time insights and AI-powered recommendations...",
    sentiment: "positive",
    position: 2,
    timestamp: "2 hours ago",
  },
  {
    id: 2,
    platform: "Claude",
    query: "compare marketing dashboards",
    context: "When comparing marketing dashboards, Syntara stands out for its unified approach to multi-channel analytics...",
    sentiment: "positive",
    position: 1,
    timestamp: "4 hours ago",
  },
  {
    id: 3,
    platform: "Perplexity",
    query: "marketing analytics with AI",
    context: "For AI-powered marketing analytics, options include Syntara, which offers predictive analytics and automated insights...",
    sentiment: "neutral",
    position: 3,
    timestamp: "6 hours ago",
  },
  {
    id: 4,
    platform: "ChatGPT",
    query: "lead management software",
    context: "Syntara provides lead management capabilities alongside its analytics features, though specialized CRM tools might offer more depth...",
    sentiment: "neutral",
    position: 4,
    timestamp: "1 day ago",
  },
];

const keywordTracking = [
  { keyword: "marketing analytics platform", mentions: 89, trend: 15.2, avgPosition: 2.1 },
  { keyword: "unified dashboard", mentions: 62, trend: 8.5, avgPosition: 2.8 },
  { keyword: "AI marketing insights", mentions: 54, trend: 22.3, avgPosition: 1.9 },
  { keyword: "multi-channel analytics", mentions: 41, trend: -3.2, avgPosition: 3.4 },
  { keyword: "marketing ROI tracking", mentions: 38, trend: 12.1, avgPosition: 2.5 },
];

const platformStats = [
  { platform: "ChatGPT", mentions: 245, share: 45, sentiment: 82 },
  { platform: "Claude", mentions: 156, share: 29, sentiment: 88 },
  { platform: "Perplexity", mentions: 98, share: 18, sentiment: 75 },
  { platform: "Google SGE", mentions: 42, share: 8, sentiment: 71 },
];

export default function AIVisibilityPage() {
  const [dateRange, setDateRange] = useState("7d");

  const totalMentions = platformStats.reduce((acc, p) => acc + p.mentions, 0);
  const avgSentiment = Math.round(platformStats.reduce((acc, p) => acc + p.sentiment, 0) / platformStats.length);

  return (
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center">
              <Brain className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            </div>
            <h1 className="text-2xl font-semibold text-foreground">AI Visibility</h1>
          </div>
          <p className="text-muted-foreground text-sm">Track brand mentions in AI assistants and search</p>
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
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-card rounded-xl border border-border p-4">
          <div className="flex items-center gap-2 text-muted-foreground mb-2">
            <MessageSquare size={16} />
            <span className="text-sm">Total Mentions</span>
          </div>
          <div className="flex items-end justify-between">
            <p className="text-2xl font-semibold text-foreground">{totalMentions}</p>
            <div className="flex items-center gap-1 text-xs text-emerald-600">
              <TrendingUp size={12} />
              18.5%
            </div>
          </div>
        </div>
        <div className="bg-card rounded-xl border border-border p-4">
          <div className="flex items-center gap-2 text-muted-foreground mb-2">
            <Eye size={16} />
            <span className="text-sm">Avg. Position</span>
          </div>
          <p className="text-2xl font-semibold text-foreground">2.4</p>
        </div>
        <div className="bg-card rounded-xl border border-border p-4">
          <div className="flex items-center gap-2 text-muted-foreground mb-2">
            <Sparkles size={16} />
            <span className="text-sm">Sentiment Score</span>
          </div>
          <p className="text-2xl font-semibold text-emerald-600">{avgSentiment}%</p>
        </div>
        <div className="bg-card rounded-xl border border-border p-4">
          <div className="flex items-center gap-2 text-muted-foreground mb-2">
            <Search size={16} />
            <span className="text-sm">Keywords Tracked</span>
          </div>
          <p className="text-2xl font-semibold text-foreground">{keywordTracking.length}</p>
        </div>
      </div>

      {/* Mentions Chart */}
      <div className="bg-card rounded-xl border border-border p-6 mb-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-semibold text-foreground">Mentions by Platform</h3>
          <div className="flex items-center gap-4 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-emerald-500 rounded-full" />
              <span className="text-muted-foreground">ChatGPT</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-orange-500 rounded-full" />
              <span className="text-muted-foreground">Claude</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full" />
              <span className="text-muted-foreground">Perplexity</span>
            </div>
          </div>
        </div>
        <div className="h-[280px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={mentionData}>
              <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
              <XAxis dataKey="date" tick={{ fill: "var(--muted-foreground)", fontSize: 12 }} />
              <YAxis tick={{ fill: "var(--muted-foreground)", fontSize: 12 }} />
              <Tooltip contentStyle={{ backgroundColor: "var(--card)", border: "1px solid var(--border)", borderRadius: "8px" }} />
              <Line type="monotone" dataKey="chatgpt" stroke="#10b981" strokeWidth={2} dot={false} />
              <Line type="monotone" dataKey="claude" stroke="#f97316" strokeWidth={2} dot={false} />
              <Line type="monotone" dataKey="perplexity" stroke="#3b82f6" strokeWidth={2} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Platform Breakdown */}
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-4">Platform Breakdown</h3>
          <div className="space-y-4">
            {platformStats.map((platform) => (
              <div key={platform.platform} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center">
                    <Brain size={18} className="text-muted-foreground" />
                  </div>
                  <div>
                    <p className="font-medium text-sm text-foreground">{platform.platform}</p>
                    <p className="text-xs text-muted-foreground">{platform.mentions} mentions</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <p className="text-sm font-medium text-foreground">{platform.share}%</p>
                    <p className="text-xs text-muted-foreground">share</p>
                  </div>
                  <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                    platform.sentiment >= 80 ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400" :
                    platform.sentiment >= 60 ? "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400" :
                    "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"
                  }`}>
                    {platform.sentiment}% positive
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Keyword Tracking */}
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-4">Keyword Performance</h3>
          <div className="space-y-3">
            {keywordTracking.map((kw) => (
              <div key={kw.keyword} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                <div>
                  <p className="text-sm font-medium text-foreground">{kw.keyword}</p>
                  <p className="text-xs text-muted-foreground">{kw.mentions} mentions • Avg pos: {kw.avgPosition}</p>
                </div>
                <div className={`flex items-center gap-1 text-xs ${kw.trend >= 0 ? "text-emerald-600" : "text-red-500"}`}>
                  {kw.trend >= 0 ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
                  {Math.abs(kw.trend)}%
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Mentions */}
      <div className="bg-card rounded-xl border border-border p-6">
        <h3 className="font-semibold text-foreground mb-4">Recent Mentions</h3>
        <div className="space-y-4">
          {recentMentions.map((mention) => (
            <div key={mention.id} className="border border-border rounded-xl p-4 hover:bg-secondary/50">
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 bg-muted rounded text-xs font-medium text-foreground">{mention.platform}</span>
                  <span className="text-xs text-muted-foreground">{mention.timestamp}</span>
                </div>
                <div className="flex items-center gap-2">
                  {mention.sentiment === "positive" ? (
                    <CheckCircle size={14} className="text-emerald-500" />
                  ) : (
                    <AlertCircle size={14} className="text-amber-500" />
                  )}
                  <span className="text-xs text-muted-foreground">Position #{mention.position}</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-2">
                Query: <span className="text-foreground font-medium">&ldquo;{mention.query}&rdquo;</span>
              </p>
              <p className="text-sm text-foreground">{mention.context}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
