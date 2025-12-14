"use client";

import { useState } from "react";
import { Search, Plus, Filter, Grid3X3, List, FileText, Image, Video, MoreHorizontal, Eye, Edit, Trash2 } from "lucide-react";
import { clsx } from "clsx";

interface Content {
  id: number;
  title: string;
  type: "article" | "image" | "video";
  status: "Published" | "Draft" | "Scheduled";
  author: string;
  date: string;
  views: number;
}

const contents: Content[] = [
  { id: 1, title: "Getting Started with Analytics", type: "article", status: "Published", author: "Sarah", date: "Dec 10, 2025", views: 1245 },
  { id: 2, title: "Product Demo Video", type: "video", status: "Published", author: "James", date: "Dec 8, 2025", views: 892 },
  { id: 3, title: "Q4 Marketing Banner", type: "image", status: "Draft", author: "Priya", date: "Dec 12, 2025", views: 0 },
  { id: 4, title: "Best Practices Guide", type: "article", status: "Scheduled", author: "Lucas", date: "Dec 15, 2025", views: 0 },
  { id: 5, title: "Tutorial: Dashboard Setup", type: "video", status: "Published", author: "Emily", date: "Dec 5, 2025", views: 2156 },
  { id: 6, title: "Feature Announcement Post", type: "article", status: "Draft", author: "Michael", date: "Dec 11, 2025", views: 0 },
];

const getIcon = (type: string) => {
  switch (type) {
    case "article":
      return FileText;
    case "image":
      return Image;
    case "video":
      return Video;
    default:
      return FileText;
  }
};

export default function ContentPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [view, setView] = useState<"grid" | "list">("list");

  const filteredContent = contents.filter((content) =>
    content.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-semibold">Content</h1>
          <p className="text-gray-500 text-sm mt-1">Manage your articles, images, and videos</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg text-sm hover:bg-gray-800">
          <Plus size={16} />
          <span>Create Content</span>
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white rounded-xl border border-gray-100 p-4">
          <p className="text-sm text-gray-500">Total Content</p>
          <p className="text-2xl font-semibold mt-1">{contents.length}</p>
        </div>
        <div className="bg-white rounded-xl border border-gray-100 p-4">
          <p className="text-sm text-gray-500">Published</p>
          <p className="text-2xl font-semibold mt-1 text-emerald-600">
            {contents.filter((c) => c.status === "Published").length}
          </p>
        </div>
        <div className="bg-white rounded-xl border border-gray-100 p-4">
          <p className="text-sm text-gray-500">Drafts</p>
          <p className="text-2xl font-semibold mt-1 text-amber-600">
            {contents.filter((c) => c.status === "Draft").length}
          </p>
        </div>
        <div className="bg-white rounded-xl border border-gray-100 p-4">
          <p className="text-sm text-gray-500">Total Views</p>
          <p className="text-2xl font-semibold mt-1">{contents.reduce((acc, c) => acc + c.views, 0).toLocaleString()}</p>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl border border-gray-100 p-4 mb-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
              <input
                type="text"
                placeholder="Search content..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9 pr-4 py-2 bg-gray-50 border border-gray-100 rounded-lg text-sm w-64 focus:outline-none focus:border-gray-300"
              />
            </div>
            <button className="flex items-center gap-2 px-3 py-2 border border-gray-200 rounded-lg text-sm hover:bg-gray-50">
              <Filter size={14} />
              <span>Filter</span>
            </button>
          </div>
          <div className="flex items-center gap-2 bg-gray-100 rounded-lg p-1">
            <button
              onClick={() => setView("grid")}
              className={clsx(
                "p-1.5 rounded-md",
                view === "grid" ? "bg-white shadow-sm" : "text-gray-600"
              )}
            >
              <Grid3X3 size={16} />
            </button>
            <button
              onClick={() => setView("list")}
              className={clsx(
                "p-1.5 rounded-md",
                view === "list" ? "bg-white shadow-sm" : "text-gray-600"
              )}
            >
              <List size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Content Table */}
      <div className="bg-white rounded-xl border border-gray-100">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-100">
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Content</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Author</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Views</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredContent.map((content) => {
              const Icon = getIcon(content.type);
              return (
                <tr key={content.id} className="border-b border-gray-50 hover:bg-gray-50">
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                        <Icon className="w-5 h-5 text-gray-500" />
                      </div>
                      <span className="font-medium text-sm">{content.title}</span>
                    </div>
                  </td>
                  <td className="px-4 py-4 text-sm text-gray-600 capitalize">{content.type}</td>
                  <td className="px-4 py-4">
                    <span
                      className={clsx(
                        "inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium",
                        content.status === "Published"
                          ? "bg-emerald-50 text-emerald-700"
                          : content.status === "Draft"
                          ? "bg-gray-100 text-gray-700"
                          : "bg-blue-50 text-blue-700"
                      )}
                    >
                      {content.status}
                    </span>
                  </td>
                  <td className="px-4 py-4 text-sm text-gray-600">{content.author}</td>
                  <td className="px-4 py-4 text-sm text-gray-500">{content.date}</td>
                  <td className="px-4 py-4 text-sm text-gray-600">{content.views.toLocaleString()}</td>
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-1">
                      <button className="p-1.5 hover:bg-gray-100 rounded">
                        <Eye size={14} className="text-gray-400" />
                      </button>
                      <button className="p-1.5 hover:bg-gray-100 rounded">
                        <Edit size={14} className="text-gray-400" />
                      </button>
                      <button className="p-1.5 hover:bg-gray-100 rounded">
                        <Trash2 size={14} className="text-gray-400" />
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
