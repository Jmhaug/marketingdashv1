"use client";

import { Search, Clock } from "lucide-react";

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
    <div className="bg-white rounded-2xl p-5 border border-[#efe1d4] h-full">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-[#1f2533]">Recent Documents</h3>
        <div className="relative">
          <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 text-[#c5a99d]" size={14} />
          <input
            type="text"
            placeholder="Search files..."
            className="pl-8 pr-3 py-1.5 bg-[#f8f4ef] border border-[#e7ded2] rounded-full text-sm w-32 focus:outline-none focus:border-[#d8c7b5] focus:w-40 transition-all"
          />
        </div>
      </div>

      <div className="space-y-2">
        {documents.map((doc) => (
          <div
            key={doc.id}
            className="flex items-center justify-between p-3 hover:bg-[#fff6ef] rounded-2xl cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <div className={`w-9 h-9 ${doc.iconBg} rounded-2xl flex items-center justify-center text-lg`}>
                {doc.icon}
              </div>
              <span className="text-sm font-medium text-[#1f2533]">{doc.title}</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 bg-[#f4ede4] rounded-full flex items-center justify-center text-xs font-medium text-[#5f5b53]">
                {doc.author.name.charAt(0)}
              </div>
              <div className="flex items-center gap-1 text-xs text-[#a98879]">
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
