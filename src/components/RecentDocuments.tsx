"use client";

import { Search, Clock } from "lucide-react";

const documents = [
  {
    id: 1,
    title: "Cold Call Scripts",
    icon: "📞",
    iconBg: "bg-blue-100 dark:bg-blue-900/30",
    author: {
      name: "Jeremy",
      avatar: "/avatars/jeremy.jpg",
    },
    timestamp: "Today",
  },
  {
    id: 2,
    title: "Email Template",
    icon: "📧",
    iconBg: "bg-purple-100 dark:bg-purple-900/30",
    author: {
      name: "Samantha",
      avatar: "/avatars/samantha.jpg",
    },
    timestamp: "Yesterday",
  },
  {
    id: 3,
    title: "Meeting Agenda",
    icon: "📋",
    iconBg: "bg-green-100 dark:bg-green-900/30",
    author: {
      name: "Alex",
      avatar: "/avatars/alex.jpg",
    },
    timestamp: "2 Days Ago",
  },
  {
    id: 4,
    title: "Project Proposal",
    icon: "📄",
    iconBg: "bg-amber-100 dark:bg-amber-900/30",
    author: {
      name: "Maya",
      avatar: "/avatars/maya.jpg",
    },
    timestamp: "4 Days Ago",
  },
];

export default function RecentDocuments() {
  return (
    <div className="bg-card rounded-2xl p-5 border border-border h-full">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-foreground">Recent Documents</h3>
        <div className="relative">
          <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 text-muted-foreground" size={14} />
          <input
            type="text"
            placeholder="Search files..."
            className="pl-8 pr-3 py-1.5 bg-muted border border-border rounded-full text-sm text-foreground w-32 focus:outline-none focus:border-accent focus:w-40 transition-all"
          />
        </div>
      </div>

      <div className="space-y-2">
        {documents.map((doc) => (
          <div
            key={doc.id}
            className="flex items-center justify-between p-3 hover:bg-secondary rounded-2xl cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <div className={`w-9 h-9 ${doc.iconBg} rounded-2xl flex items-center justify-center text-lg`}>
                {doc.icon}
              </div>
              <span className="text-sm font-medium text-foreground">{doc.title}</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 bg-secondary rounded-full flex items-center justify-center text-xs font-medium text-muted-foreground">
                {doc.author.name.charAt(0)}
              </div>
              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                <Clock size={12} />
                <span>{doc.timestamp}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
