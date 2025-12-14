"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Search,
  Bell,
  Sparkles,
  LayoutDashboard,
  Calendar,
  FolderOpen,
  Users,
  Plug,
  FileText,
  FileType,
  BookOpen,
  MessageSquare,
  Settings,
  HelpCircle,
  ChevronDown,
  X,
} from "lucide-react";
import { clsx } from "clsx";

const mainNavItems = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard, badge: "5" },
  { name: "Schedule", href: "/dashboard/schedule", icon: Calendar },
  { name: "Resources", href: "/dashboard/resources", icon: FolderOpen },
  { name: "Clients", href: "/dashboard/clients", icon: Users },
  { name: "Integrations", href: "/dashboard/integrations", icon: Plug },
];

const favoriteItems = [
  { name: "Contracts", href: "/dashboard/contracts", icon: FileText },
  { name: "Content", href: "/dashboard/content", icon: FileType },
  { name: "Summaries", href: "/dashboard/summaries", icon: BookOpen },
];

const bottomNavItems = [
  { name: "Feedback", href: "/dashboard/feedback", icon: MessageSquare },
  { name: "Settings", href: "/dashboard/settings", icon: Settings },
  { name: "Help Center", href: "/dashboard/help", icon: HelpCircle },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 h-screen bg-white border-r border-gray-100 flex flex-col fixed left-0 top-0">
      {/* Header */}
      <div className="p-4 border-b border-gray-100">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">L</span>
            </div>
            <span className="font-semibold">Lunor Group</span>
          </div>
          <button className="text-gray-400 hover:text-gray-600">
            <ChevronDown size={16} />
          </button>
        </div>

        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
          <input
            type="text"
            placeholder="Search..."
            className="w-full pl-9 pr-12 py-2 bg-gray-50 border border-gray-100 rounded-lg text-sm focus:outline-none focus:border-gray-300"
          />
          <kbd className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-400 bg-white px-1.5 py-0.5 rounded border border-gray-200">
            ⌘K
          </kbd>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="px-4 py-3 border-b border-gray-100">
        <button className="flex items-center gap-2 text-gray-600 hover:text-black text-sm w-full py-1.5">
          <Bell size={16} />
          <span>Notifications</span>
        </button>
        <button className="flex items-center gap-2 text-gray-600 hover:text-black text-sm w-full py-1.5">
          <Sparkles size={16} />
          <span>AI Assistant</span>
        </button>
      </div>

      {/* Main Navigation */}
      <nav className="flex-1 px-3 py-4 overflow-y-auto">
        <ul className="space-y-1">
          {mainNavItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={clsx(
                    "flex items-center gap-3 px-3 py-2 rounded-lg text-sm",
                    isActive
                      ? "bg-gray-100 text-black font-medium"
                      : "text-gray-600 hover:bg-gray-50 hover:text-black"
                  )}
                >
                  <item.icon size={18} className={isActive ? "text-emerald-500" : ""} />
                  <span>{item.name}</span>
                  {item.badge && (
                    <span className="ml-auto bg-emerald-100 text-emerald-700 text-xs px-2 py-0.5 rounded-full">
                      {item.badge}
                    </span>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Favorites */}
        <div className="mt-6">
          <div className="flex items-center gap-2 px-3 mb-2">
            <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">Favorites</span>
            <ChevronDown size={12} className="text-gray-400" />
          </div>
          <ul className="space-y-1">
            {favoriteItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className={clsx(
                      "flex items-center gap-3 px-3 py-2 rounded-lg text-sm",
                      isActive
                        ? "bg-gray-100 text-black font-medium"
                        : "text-gray-600 hover:bg-gray-50 hover:text-black"
                    )}
                  >
                    <item.icon size={18} />
                    <span>{item.name}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>

      {/* Trial Banner */}
      <div className="px-4 py-3 mx-3 mb-3 bg-gray-50 rounded-lg">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-amber-400 rounded-full" />
            <span className="text-sm font-medium">4 Days Left!</span>
          </div>
          <button className="text-gray-400 hover:text-gray-600">
            <X size={14} />
          </button>
        </div>
        <p className="text-xs text-gray-500 mb-3">
          Select a plan and unlock unlimited premium features
        </p>
        <div className="w-full bg-gray-200 rounded-full h-1.5 mb-3">
          <div className="bg-black h-1.5 rounded-full" style={{ width: "30%" }} />
        </div>
        <button className="flex items-center gap-1 text-sm font-medium hover:text-gray-600">
          Select plan
          <ChevronDown size={14} className="rotate-[-90deg]" />
        </button>
      </div>

      {/* Bottom Navigation */}
      <div className="px-3 py-4 border-t border-gray-100">
        <ul className="space-y-1">
          {bottomNavItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={clsx(
                    "flex items-center gap-3 px-3 py-2 rounded-lg text-sm",
                    isActive
                      ? "bg-gray-100 text-black font-medium"
                      : "text-gray-600 hover:bg-gray-50 hover:text-black"
                  )}
                >
                  <item.icon size={18} />
                  <span>{item.name}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
}
