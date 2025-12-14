"use client";

import { useState } from "react";
import { Search, Plus, Filter, BookOpen, Clock, TrendingUp, BarChart2 } from "lucide-react";

interface Summary {
  id: number;
  title: string;
  category: string;
  date: string;
  readTime: string;
  highlights: number;
}

const summaries: Summary[] = [
  { id: 1, title: "Q4 2025 Performance Overview", category: "Quarterly Report", date: "Dec 14, 2025", readTime: "5 min", highlights: 8 },
  { id: 2, title: "Marketing Campaign Analysis", category: "Marketing", date: "Dec 12, 2025", readTime: "7 min", highlights: 12 },
  { id: 3, title: "Customer Feedback Summary", category: "Customer Success", date: "Dec 10, 2025", readTime: "4 min", highlights: 6 },
  { id: 4, title: "Product Roadmap Q1 2026", category: "Product", date: "Dec 8, 2025", readTime: "10 min", highlights: 15 },
  { id: 5, title: "Sales Pipeline Review", category: "Sales", date: "Dec 5, 2025", readTime: "6 min", highlights: 9 },
  { id: 6, title: "Engineering Sprint Retrospective", category: "Engineering", date: "Dec 1, 2025", readTime: "8 min", highlights: 11 },
];

export default function SummariesPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredSummaries = summaries.filter((summary) =>
    summary.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    summary.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-semibold">Summaries</h1>
          <p className="text-gray-500 text-sm mt-1">AI-generated summaries of your data and reports</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg text-sm hover:bg-gray-800">
          <Plus size={16} />
          <span>Generate Summary</span>
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white rounded-xl border border-gray-100 p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gray-100 rounded-lg">
              <BookOpen size={18} className="text-gray-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Total Summaries</p>
              <p className="text-xl font-semibold">{summaries.length}</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl border border-gray-100 p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-emerald-100 rounded-lg">
              <TrendingUp size={18} className="text-emerald-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">This Week</p>
              <p className="text-xl font-semibold">3</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl border border-gray-100 p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-100 rounded-lg">
              <Clock size={18} className="text-blue-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Avg. Read Time</p>
              <p className="text-xl font-semibold">6.7 min</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl border border-gray-100 p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-amber-100 rounded-lg">
              <BarChart2 size={18} className="text-amber-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Total Highlights</p>
              <p className="text-xl font-semibold">61</p>
            </div>
          </div>
        </div>
      </div>

      {/* Search */}
      <div className="bg-white rounded-xl border border-gray-100 p-4 mb-6">
        <div className="flex items-center gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
            <input
              type="text"
              placeholder="Search summaries..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-gray-50 border border-gray-100 rounded-lg text-sm focus:outline-none focus:border-gray-300"
            />
          </div>
          <button className="flex items-center gap-2 px-3 py-2 border border-gray-200 rounded-lg text-sm hover:bg-gray-50">
            <Filter size={14} />
            <span>Filter</span>
          </button>
        </div>
      </div>

      {/* Summaries Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredSummaries.map((summary) => (
          <div key={summary.id} className="bg-white rounded-xl border border-gray-100 p-5 hover:border-gray-200 cursor-pointer group">
            <div className="flex items-start justify-between mb-4">
              <span className="px-2.5 py-1 bg-gray-100 rounded-full text-xs font-medium text-gray-600">
                {summary.category}
              </span>
              <span className="text-xs text-gray-400">{summary.date}</span>
            </div>
            <h3 className="font-semibold mb-3 group-hover:text-emerald-600">{summary.title}</h3>
            <div className="flex items-center justify-between text-sm text-gray-500">
              <div className="flex items-center gap-1">
                <Clock size={14} />
                <span>{summary.readTime} read</span>
              </div>
              <div className="flex items-center gap-1">
                <BarChart2 size={14} />
                <span>{summary.highlights} highlights</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
