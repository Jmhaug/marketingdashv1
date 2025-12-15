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
      <div className="bg-[#fffdf9] border border-[#f1d6c2] rounded-2xl shadow-lg p-4 min-w-[180px]">
        <p className="font-medium text-sm mb-2 text-[#1f2533]">{label}, 2025</p>
        <div className="space-y-1.5">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#ee6c4d]" />
              <span className="text-[#5f5b53]">{newLeads?.value}</span>
            </div>
            <div className="flex items-center gap-1 text-[#1f7a5f]">
              <TrendingUp size={12} />
              <span>{percentChange}%</span>
            </div>
          </div>
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#1f2533]" />
              <span className="text-[#5f5b53]">{replied?.value}</span>
            </div>
            <div className="flex items-center gap-1 text-[#a98879]">
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
    <div className="bg-white rounded-2xl p-5 border border-[#efe1d4]">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <div className="w-1 h-5 bg-[#ee6c4d] rounded-full" />
          <h3 className="font-semibold text-[#1f2533]">Leads Over Time</h3>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-4 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#ee6c4d]" />
              <span className="text-[#5f5b53]">New Leads</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#1f2533]" />
              <span className="text-[#5f5b53]">Replied</span>
            </div>
          </div>
          <button className="flex items-center gap-2 px-3 py-1.5 border border-[#e7ded2] rounded-full text-sm text-[#1f2533]">
            <Calendar size={14} />
            <span>Jan - Jun</span>
          </button>
        </div>
      </div>

      <div className="h-[280px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} barGap={4}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f5eadc" />
            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#a98879", fontSize: 12 }}
              dy={10}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#a98879", fontSize: 12 }}
              dx={-10}
              tickFormatter={(value) => (value >= 1000 ? `${value / 1000}k` : value)}
            />
            <Tooltip content={<CustomTooltip />} cursor={{ fill: "#fffaf5" }} />
            <Bar
              dataKey="newLeads"
              fill="#ee6c4d"
              radius={[4, 4, 0, 0]}
              maxBarSize={32}
            />
            <Bar
              dataKey="replied"
              fill="#1f2533"
              radius={[4, 4, 0, 0]}
              maxBarSize={32}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
