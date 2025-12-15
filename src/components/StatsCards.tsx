"use client";

import { Users, Briefcase, DollarSign, FileText } from "lucide-react";

const stats = [
  {
    label: "Total Clients",
    value: "67",
    icon: Users,
    change: "+12%",
    changeType: "positive" as const,
  },
  {
    label: "Active Projects",
    value: "12",
    icon: Briefcase,
    change: "+3",
    changeType: "positive" as const,
  },
  {
    label: "Weekly Revenue",
    value: "$4,571",
    icon: DollarSign,
    change: "+8.2%",
    changeType: "positive" as const,
  },
  {
    label: "Sent Invoices",
    value: "32",
    icon: FileText,
    change: "-2",
    changeType: "negative" as const,
  },
];

export default function StatsCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="bg-white rounded-2xl p-5 border border-[#efe1d4] relative overflow-hidden"
        >
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-[#f8d7c1] to-transparent" />
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-[#5f5b53] mb-1">{stat.label}</p>
              <p className="text-2xl font-semibold text-[#1f2533]">{stat.value}</p>
            </div>
            <div className="p-2.5 rounded-xl bg-[#fff1ea] text-[#d47a5a]">
              <stat.icon className="w-5 h-5" />
            </div>
          </div>
          <div
            className={`mt-3 text-sm font-medium ${
              stat.changeType === "positive" ? "text-[#1f7a5f]" : "text-[#b45309]"
            }`}
          >
            {stat.changeType === "positive" ? "▲" : "▼"} {stat.change}
          </div>
        </div>
      ))}
    </div>
  );
}
