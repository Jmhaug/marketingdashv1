"use client";

import { Search, FileText, Clock } from "lucide-react";
import Image from "next/image";

const documents = [
  {
    id: 1,
    title: "Cold Call Scripts",
    icon: "📞",
    iconBg: "bg-blue-100",
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
    iconBg: "bg-purple-100",
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
    iconBg: "bg-green-100",
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
    iconBg: "bg-amber-100",
    author: {
      name: "Maya",
      avatar: "/avatars/maya.jpg",
    },
    timestamp: "4 Days Ago",
  },
];

export default function RecentDocuments() {
  return (
    <div className="bg-white rounded-xl p-5 border border-gray-100 h-full">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold">Recent Documents</h3>
        <div className="relative">
          <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 text-gray-400" size={14} />
          <input
            type="text"
            placeholder="Search files..."
            className="pl-8 pr-3 py-1.5 bg-gray-50 border border-gray-100 rounded-lg text-sm w-32 focus:outline-none focus:border-gray-300 focus:w-40 transition-all"
          />
        </div>
      </div>

      <div className="space-y-2">
        {documents.map((doc) => (
          <div
            key={doc.id}
            className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg cursor-pointer group"
          >
            <div className="flex items-center gap-3">
              <div className={`w-9 h-9 ${doc.iconBg} rounded-lg flex items-center justify-center text-lg`}>
                {doc.icon}
              </div>
              <span className="text-sm font-medium">{doc.title}</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 bg-gray-200 rounded-full flex items-center justify-center text-xs font-medium">
                {doc.author.name.charAt(0)}
              </div>
              <div className="flex items-center gap-1 text-xs text-gray-400">
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
