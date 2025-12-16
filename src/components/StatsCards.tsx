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
          className="bg-card rounded-2xl p-5 border border-border relative overflow-hidden"
        >
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
              <p className="text-2xl font-semibold text-foreground">{stat.value}</p>
            </div>
            <div className="p-2.5 rounded-xl bg-accent/10 text-accent">
              <stat.icon className="w-5 h-5" />
            </div>
          </div>
          <div
            className={`mt-3 text-sm font-medium ${
              stat.changeType === "positive" ? "text-emerald-600 dark:text-emerald-400" : "text-amber-600 dark:text-amber-400"
            }`}
          >
            {stat.changeType === "positive" ? "▲" : "▼"} {stat.change}
          </div>
        </div>
      ))}
    </div>
  );
}
