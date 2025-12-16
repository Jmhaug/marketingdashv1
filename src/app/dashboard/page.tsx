"use client";

import { Download, Plus } from "lucide-react";
import StatsCards from "@/components/StatsCards";
import LeadsChart from "@/components/LeadsChart";
import RecentDocuments from "@/components/RecentDocuments";
import DataTable from "@/components/DataTable";

export default function DashboardPage() {
  return (
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
            <span>3 team members are active</span>
            <div className="flex -space-x-2 ml-2">
              <div className="w-6 h-6 bg-secondary rounded-full border-2 border-card flex items-center justify-center text-xs text-foreground">J</div>
              <div className="w-6 h-6 bg-secondary rounded-full border-2 border-card flex items-center justify-center text-xs text-foreground">S</div>
              <div className="w-6 h-6 bg-secondary rounded-full border-2 border-card flex items-center justify-center text-xs text-foreground">M</div>
            </div>
          </div>
          <h1 className="text-2xl font-semibold text-foreground flex items-center gap-2">
            Welcome back, Augustas
            <span className="text-2xl">👋</span>
          </h1>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 border border-border rounded-full text-sm text-foreground hover:bg-secondary">
            <Download size={16} />
            <span>Export</span>
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-full text-sm hover:opacity-90">
            <Plus size={16} />
            <span>New</span>
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="mb-6">
        <StatsCards />
      </div>

      {/* Chart and Documents Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <div className="lg:col-span-2">
          <LeadsChart />
        </div>
        <div className="lg:col-span-1">
          <RecentDocuments />
        </div>
      </div>

      {/* Data Table */}
      <DataTable />
    </div>
  );
}
