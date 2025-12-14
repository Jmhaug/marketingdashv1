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
          className="bg-white rounded-xl p-5 border border-gray-100"
        >
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-gray-500 mb-1">{stat.label}</p>
              <p className="text-2xl font-semibold">{stat.value}</p>
            </div>
            <div className="p-2.5 bg-gray-50 rounded-lg">
              <stat.icon className="w-5 h-5 text-gray-600" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
