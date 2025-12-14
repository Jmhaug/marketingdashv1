"use client";

import { useState } from "react";
import {
  Search,
  Plus,
  Filter,
  Grid3X3,
  List,
  Folder,
  FileText,
  Image,
  Video,
  MoreHorizontal,
  Download,
  Trash2,
  Share2,
} from "lucide-react";
import { clsx } from "clsx";

interface Resource {
  id: number;
  name: string;
  type: "folder" | "document" | "image" | "video";
  size: string;
  modified: string;
  shared: boolean;
}

const resources: Resource[] = [
  { id: 1, name: "Marketing Assets", type: "folder", size: "2.4 GB", modified: "2 hours ago", shared: true },
  { id: 2, name: "Q4 Report.pdf", type: "document", size: "4.2 MB", modified: "Yesterday", shared: false },
  { id: 3, name: "Product Screenshots", type: "folder", size: "856 MB", modified: "3 days ago", shared: true },
  { id: 4, name: "Brand Guidelines.pdf", type: "document", size: "12.8 MB", modified: "1 week ago", shared: true },
  { id: 5, name: "Demo Video.mp4", type: "video", size: "245 MB", modified: "2 weeks ago", shared: false },
  { id: 6, name: "Team Photos", type: "folder", size: "1.2 GB", modified: "1 month ago", shared: true },
  { id: 7, name: "Logo Pack.zip", type: "image", size: "56 MB", modified: "1 month ago", shared: true },
  { id: 8, name: "Presentation Template.pptx", type: "document", size: "8.4 MB", modified: "2 months ago", shared: false },
];

const getIcon = (type: string) => {
  switch (type) {
    case "folder":
      return Folder;
    case "document":
      return FileText;
    case "image":
      return Image;
    case "video":
      return Video;
    default:
      return FileText;
  }
};

const getIconColor = (type: string) => {
  switch (type) {
    case "folder":
      return "text-amber-500 bg-amber-50";
    case "document":
      return "text-blue-500 bg-blue-50";
    case "image":
      return "text-pink-500 bg-pink-50";
    case "video":
      return "text-purple-500 bg-purple-50";
    default:
      return "text-gray-500 bg-gray-50";
  }
};

export default function ResourcesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [view, setView] = useState<"grid" | "list">("grid");

  const filteredResources = resources.filter((resource) =>
    resource.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-semibold">Resources</h1>
          <p className="text-gray-500 text-sm mt-1">Manage your files and documents</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg text-sm hover:bg-gray-800">
          <Plus size={16} />
          <span>Upload</span>
        </button>
      </div>

      {/* Storage Stats */}
      <div className="bg-white rounded-xl border border-gray-100 p-6 mb-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold">Storage</h3>
          <span className="text-sm text-gray-500">4.8 GB of 10 GB used</span>
        </div>
        <div className="w-full bg-gray-100 rounded-full h-2 mb-4">
          <div className="bg-emerald-500 h-2 rounded-full" style={{ width: "48%" }} />
        </div>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-blue-500 rounded" />
            <span className="text-sm text-gray-600">Documents (1.2 GB)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-pink-500 rounded" />
            <span className="text-sm text-gray-600">Images (2.1 GB)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-purple-500 rounded" />
            <span className="text-sm text-gray-600">Videos (1.5 GB)</span>
          </div>
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
                placeholder="Search resources..."
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

      {/* Resources Grid */}
      {view === "grid" ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredResources.map((resource) => {
            const Icon = getIcon(resource.type);
            const colorClass = getIconColor(resource.type);
            return (
              <div key={resource.id} className="bg-white rounded-xl border border-gray-100 p-4 hover:border-gray-200 group">
                <div className="flex items-start justify-between mb-4">
                  <div className={clsx("w-12 h-12 rounded-xl flex items-center justify-center", colorClass)}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <button className="p-1 hover:bg-gray-100 rounded opacity-0 group-hover:opacity-100">
                    <MoreHorizontal size={16} className="text-gray-400" />
                  </button>
                </div>
                <h3 className="font-medium text-sm mb-1 truncate">{resource.name}</h3>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>{resource.size}</span>
                  <span>{resource.modified}</span>
                </div>
                {resource.shared && (
                  <div className="mt-3 pt-3 border-t border-gray-100">
                    <span className="text-xs text-emerald-600 flex items-center gap-1">
                      <Share2 size={12} />
                      Shared
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      ) : (
        <div className="bg-white rounded-xl border border-gray-100">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-100">
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Size</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Modified</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredResources.map((resource) => {
                const Icon = getIcon(resource.type);
                const colorClass = getIconColor(resource.type);
                return (
                  <tr key={resource.id} className="border-b border-gray-50 hover:bg-gray-50">
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-3">
                        <div className={clsx("w-8 h-8 rounded-lg flex items-center justify-center", colorClass)}>
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className="text-sm font-medium">{resource.name}</span>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-600">{resource.size}</td>
                    <td className="px-4 py-3 text-sm text-gray-600">{resource.modified}</td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        <button className="p-1.5 hover:bg-gray-100 rounded">
                          <Download size={14} className="text-gray-400" />
                        </button>
                        <button className="p-1.5 hover:bg-gray-100 rounded">
                          <Share2 size={14} className="text-gray-400" />
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
      )}
    </div>
  );
}
