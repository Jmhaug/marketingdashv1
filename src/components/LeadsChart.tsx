"use client";

import { Calendar, TrendingUp, TrendingDown } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { month: "Jan", newLeads: 320, replied: 240 },
  { month: "Feb", newLeads: 420, replied: 310 },
  { month: "Mar", newLeads: 748, replied: 512 },
  { month: "Apr", newLeads: 580, replied: 420 },
  { month: "May", newLeads: 650, replied: 480 },
  { month: "Jun", newLeads: 720, replied: 540 },
];

interface CustomTooltipProps {
  active?: boolean;
  payload?: Array<{
    value: number;
    dataKey: string;
    color: string;
  }>;
  label?: string;
}

const CustomTooltip = ({ active, payload, label }: CustomTooltipProps) => {
  if (active && payload && payload.length) {
    const newLeads = payload.find((p) => p.dataKey === "newLeads");
    const replied = payload.find((p) => p.dataKey === "replied");
    const diff = newLeads && replied ? newLeads.value - replied.value : 0;
    const percentChange = newLeads && replied ? ((replied.value / newLeads.value) * 100).toFixed(0) : 0;

    return (
      <div className="bg-card border border-border rounded-2xl shadow-lg p-4 min-w-[180px]">
        <p className="font-medium text-sm mb-2 text-foreground">{label}, 2025</p>
        <div className="space-y-1.5">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-accent" />
              <span className="text-muted-foreground">{newLeads?.value}</span>
            </div>
            <div className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400">
              <TrendingUp size={12} />
              <span>{percentChange}%</span>
            </div>
          </div>
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <span className="text-muted-foreground">{replied?.value}</span>
            </div>
            <div className="flex items-center gap-1 text-muted-foreground">
              <TrendingDown size={12} />
              <span>{diff}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return null;
};

export default function LeadsChart() {
  return (
    <div className="bg-card rounded-2xl p-5 border border-border">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <div className="w-1 h-5 bg-accent rounded-full" />
          <h3 className="font-semibold text-foreground">Leads Over Time</h3>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-4 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-accent" />
              <span className="text-muted-foreground">New Leads</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <span className="text-muted-foreground">Replied</span>
            </div>
          </div>
          <button className="flex items-center gap-2 px-3 py-1.5 border border-border rounded-full text-sm text-foreground hover:bg-secondary">
            <Calendar size={14} />
            <span>Jan - Jun</span>
          </button>
        </div>
      </div>

      <div className="h-[280px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} barGap={4}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} className="stroke-border" />
            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              className="fill-muted-foreground text-xs"
              dy={10}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              className="fill-muted-foreground text-xs"
              dx={-10}
              tickFormatter={(value) => (value >= 1000 ? `${value / 1000}k` : value)}
            />
            <Tooltip content={<CustomTooltip />} cursor={{ fill: "var(--secondary)" }} />
            <Bar
              dataKey="newLeads"
              fill="var(--accent)"
              radius={[4, 4, 0, 0]}
              maxBarSize={32}
            />
            <Bar
              dataKey="replied"
              fill="var(--primary)"
              radius={[4, 4, 0, 0]}
              maxBarSize={32}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
