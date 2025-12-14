"use client";

import { Calendar, TrendingUp, TrendingDown } from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

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
      <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-3 min-w-[160px]">
        <p className="font-medium text-sm mb-2">{label}, 2025</p>
        <div className="space-y-1.5">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-500" />
              <span className="text-gray-600">{newLeads?.value}</span>
            </div>
            <div className="flex items-center gap-1 text-emerald-600">
              <TrendingUp size={12} />
              <span>{percentChange}%</span>
            </div>
          </div>
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-gray-900" />
              <span className="text-gray-600">{replied?.value}</span>
            </div>
            <div className="flex items-center gap-1 text-gray-500">
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
    <div className="bg-white rounded-xl p-5 border border-gray-100">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <div className="w-1 h-5 bg-emerald-500 rounded-full" />
          <h3 className="font-semibold">Leads Over Time</h3>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-4 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-500" />
              <span className="text-gray-600">New Leads</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-gray-900" />
              <span className="text-gray-600">Replied</span>
            </div>
          </div>
          <button className="flex items-center gap-2 px-3 py-1.5 border border-gray-200 rounded-lg text-sm hover:bg-gray-50">
            <Calendar size={14} />
            <span>Jan - Jun</span>
          </button>
        </div>
      </div>

      <div className="h-[280px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} barGap={4}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f3f4f6" />
            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#9ca3af", fontSize: 12 }}
              dy={10}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#9ca3af", fontSize: 12 }}
              dx={-10}
              tickFormatter={(value) => (value >= 1000 ? `${value / 1000}k` : value)}
            />
            <Tooltip content={<CustomTooltip />} cursor={{ fill: "#f9fafb" }} />
            <Bar
              dataKey="newLeads"
              fill="#10b981"
              radius={[4, 4, 0, 0]}
              maxBarSize={32}
            />
            <Bar
              dataKey="replied"
              fill="#111827"
              radius={[4, 4, 0, 0]}
              maxBarSize={32}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
