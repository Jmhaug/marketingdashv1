"use client";

import { useState } from "react";
import {
  Search,
  Plus,
  Filter,
  Download,
  MoreHorizontal,
  Mail,
  Phone,
  Building2,
  MapPin,
  Calendar,
  TrendingUp,
  Users,
  Target,
  Flame,
  Thermometer,
  Snowflake,
} from "lucide-react";
import { clsx } from "clsx";

interface Lead {
  id: number;
  name: string;
  email: string;
  company: string;
  title: string;
  phone: string;
  source: string;
  score: number;
  status: "hot" | "warm" | "cold";
  stage: string;
  value: number;
  createdAt: string;
  lastActivity: string;
}

const leads: Lead[] = [
  { id: 1, name: "Sarah Chen", email: "sarah@techcorp.io", company: "TechCorp Inc", title: "VP of Marketing", phone: "(415) 555-0123", source: "Google Ads", score: 92, status: "hot", stage: "Qualified", value: 45000, createdAt: "2024-12-10", lastActivity: "2 hours ago" },
  { id: 2, name: "Michael Torres", email: "m.torres@innovate.co", company: "Innovate Solutions", title: "Director of Operations", phone: "(512) 555-0456", source: "LinkedIn", score: 78, status: "hot", stage: "Demo Scheduled", value: 32000, createdAt: "2024-12-08", lastActivity: "1 day ago" },
  { id: 3, name: "Emily Watson", email: "emily.w@globaltech.com", company: "GlobalTech", title: "Marketing Manager", phone: "(646) 555-0789", source: "Organic", score: 65, status: "warm", stage: "Contacted", value: 28000, createdAt: "2024-12-05", lastActivity: "3 days ago" },
  { id: 4, name: "James Liu", email: "jliu@startupxyz.io", company: "StartupXYZ", title: "CEO", phone: "(628) 555-0147", source: "Referral", score: 88, status: "hot", stage: "Proposal Sent", value: 75000, createdAt: "2024-12-01", lastActivity: "5 hours ago" },
  { id: 5, name: "Amanda Foster", email: "afoster@enterprise.com", company: "Enterprise Co", title: "Head of Digital", phone: "(312) 555-0258", source: "Meta Ads", score: 45, status: "warm", stage: "New", value: 18000, createdAt: "2024-12-12", lastActivity: "4 hours ago" },
  { id: 6, name: "David Kim", email: "david.kim@solutions.io", company: "Solutions Inc", title: "CTO", phone: "(206) 555-0369", source: "Email", score: 32, status: "cold", stage: "New", value: 22000, createdAt: "2024-12-11", lastActivity: "2 days ago" },
  { id: 7, name: "Rachel Green", email: "rgreen@bigcorp.com", company: "BigCorp", title: "VP of Sales", phone: "(617) 555-0741", source: "Google Ads", score: 71, status: "warm", stage: "Qualified", value: 52000, createdAt: "2024-12-03", lastActivity: "1 day ago" },
  { id: 8, name: "Alex Johnson", email: "alex@startup.co", company: "Startup Co", title: "Founder", phone: "(858) 555-0852", source: "LinkedIn", score: 25, status: "cold", stage: "Contacted", value: 15000, createdAt: "2024-12-09", lastActivity: "5 days ago" },
];

const getScoreColor = (score: number) => {
  if (score >= 80) return "text-emerald-600 bg-emerald-100 dark:bg-emerald-900/30";
  if (score >= 50) return "text-amber-600 bg-amber-100 dark:bg-amber-900/30";
  return "text-gray-600 bg-gray-100 dark:bg-gray-800";
};

const getStatusIcon = (status: string) => {
  switch (status) {
    case "hot": return <Flame size={14} className="text-red-500" />;
    case "warm": return <Thermometer size={14} className="text-amber-500" />;
    case "cold": return <Snowflake size={14} className="text-blue-500" />;
    default: return null;
  }
};

export default function LeadsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [selectedLeads, setSelectedLeads] = useState<number[]>([]);

  const filteredLeads = leads.filter((lead) => {
    const matchesSearch = lead.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lead.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lead.email.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === "all" || lead.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const totalValue = filteredLeads.reduce((acc, l) => acc + l.value, 0);
  const avgScore = Math.round(filteredLeads.reduce((acc, l) => acc + l.score, 0) / filteredLeads.length);

  return (
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-semibold text-foreground">Leads</h1>
          <p className="text-muted-foreground text-sm">Manage and track your marketing leads</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-3 py-2 bg-card border border-border rounded-lg text-sm text-foreground hover:bg-secondary">
            <Download size={14} />
            Export
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-accent text-white rounded-lg text-sm hover:bg-accent/90">
            <Plus size={14} />
            Add Lead
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-card rounded-xl border border-border p-4">
          <div className="flex items-center gap-2 text-muted-foreground mb-2">
            <Users size={16} />
            <span className="text-sm">Total Leads</span>
          </div>
          <p className="text-2xl font-semibold text-foreground">{filteredLeads.length}</p>
        </div>
        <div className="bg-card rounded-xl border border-border p-4">
          <div className="flex items-center gap-2 text-muted-foreground mb-2">
            <Flame size={16} />
            <span className="text-sm">Hot Leads</span>
          </div>
          <p className="text-2xl font-semibold text-red-500">{leads.filter(l => l.status === "hot").length}</p>
        </div>
        <div className="bg-card rounded-xl border border-border p-4">
          <div className="flex items-center gap-2 text-muted-foreground mb-2">
            <Target size={16} />
            <span className="text-sm">Avg. Score</span>
          </div>
          <p className="text-2xl font-semibold text-foreground">{avgScore}</p>
        </div>
        <div className="bg-card rounded-xl border border-border p-4">
          <div className="flex items-center gap-2 text-muted-foreground mb-2">
            <TrendingUp size={16} />
            <span className="text-sm">Pipeline Value</span>
          </div>
          <p className="text-2xl font-semibold text-emerald-600">${totalValue.toLocaleString()}</p>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-card rounded-xl border border-border p-4 mb-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={16} />
              <input
                type="text"
                placeholder="Search leads..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-64 pl-9 pr-4 py-2 bg-muted border border-border rounded-lg text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50"
              />
            </div>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="px-3 py-2 bg-muted border border-border rounded-lg text-sm text-foreground"
            >
              <option value="all">All Status</option>
              <option value="hot">Hot</option>
              <option value="warm">Warm</option>
              <option value="cold">Cold</option>
            </select>
            <button className="flex items-center gap-2 px-3 py-2 border border-border rounded-lg text-sm text-foreground hover:bg-secondary">
              <Filter size={14} />
              More Filters
            </button>
          </div>
        </div>
      </div>

      {/* Leads Table */}
      <div className="bg-card rounded-xl border border-border overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border bg-muted/50">
              <th className="px-4 py-3 text-left">
                <input type="checkbox" className="rounded border-border" />
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Lead</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Company</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Source</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Score</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Status</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Stage</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Value</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Activity</th>
              <th className="px-4 py-3"></th>
            </tr>
          </thead>
          <tbody>
            {filteredLeads.map((lead) => (
              <tr key={lead.id} className="border-b border-border/50 hover:bg-secondary/50">
                <td className="px-4 py-3">
                  <input type="checkbox" className="rounded border-border" />
                </td>
                <td className="px-4 py-3">
                  <div>
                    <p className="font-medium text-sm text-foreground">{lead.name}</p>
                    <p className="text-xs text-muted-foreground">{lead.email}</p>
                  </div>
                </td>
                <td className="px-4 py-3">
                  <div>
                    <p className="text-sm text-foreground">{lead.company}</p>
                    <p className="text-xs text-muted-foreground">{lead.title}</p>
                  </div>
                </td>
                <td className="px-4 py-3 text-sm text-muted-foreground">{lead.source}</td>
                <td className="px-4 py-3">
                  <span className={clsx("px-2 py-1 rounded-full text-xs font-medium", getScoreColor(lead.score))}>
                    {lead.score}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-1.5">
                    {getStatusIcon(lead.status)}
                    <span className="text-sm text-foreground capitalize">{lead.status}</span>
                  </div>
                </td>
                <td className="px-4 py-3 text-sm text-foreground">{lead.stage}</td>
                <td className="px-4 py-3 text-sm font-medium text-foreground">${lead.value.toLocaleString()}</td>
                <td className="px-4 py-3 text-xs text-muted-foreground">{lead.lastActivity}</td>
                <td className="px-4 py-3">
                  <button className="p-1 hover:bg-secondary rounded">
                    <MoreHorizontal size={16} className="text-muted-foreground" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
