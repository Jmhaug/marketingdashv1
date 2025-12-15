"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  Search,
  Bell,
  Sparkles,
  LayoutDashboard,
  BarChart3,
  Target,
  Users,
  Brain,
  Lightbulb,
  FileText,
  Settings,
  HelpCircle,
  ChevronDown,
  ChevronRight,
  X,
  Sun,
  Moon,
  TrendingUp,
  Mail,
  Linkedin,
  Plug,
  Crown,
} from "lucide-react";
import { clsx } from "clsx";
import { useTheme } from "./ThemeProvider";

// Platform icons as components
const GoogleIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
  </svg>
);

const MetaIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
    <path d="M12 2.04c-5.5 0-10 4.49-10 10.02 0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02z" />
  </svg>
);

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
  </svg>
);

interface NavSection {
  title: string;
  items: NavItem[];
  collapsible?: boolean;
}

interface NavItem {
  name: string;
  href: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  badge?: string;
  badgeColor?: string;
}

const navSections: NavSection[] = [
  {
    title: "Overview",
    items: [
      { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
      { name: "AI Insights", href: "/dashboard/insights", icon: Lightbulb, badge: "3", badgeColor: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400" },
    ],
  },
  {
    title: "Platform Analytics",
    collapsible: true,
    items: [
      { name: "Google Analytics", href: "/dashboard/analytics/google", icon: GoogleIcon },
      { name: "Google Ads", href: "/dashboard/analytics/google-ads", icon: Target },
      { name: "Meta Ads", href: "/dashboard/analytics/meta", icon: MetaIcon },
      { name: "LinkedIn Ads", href: "/dashboard/analytics/linkedin", icon: Linkedin },
      { name: "TikTok Ads", href: "/dashboard/analytics/tiktok", icon: TikTokIcon },
      { name: "Email Marketing", href: "/dashboard/analytics/email", icon: Mail },
    ],
  },
  {
    title: "Lead Management",
    collapsible: true,
    items: [
      { name: "All Leads", href: "/dashboard/leads", icon: Users, badge: "142" },
      { name: "Pipeline", href: "/dashboard/leads/pipeline", icon: TrendingUp },
      { name: "Lead Scoring", href: "/dashboard/leads/scoring", icon: BarChart3 },
    ],
  },
  {
    title: "AI Visibility",
    collapsible: true,
    items: [
      { name: "Brand Mentions", href: "/dashboard/ai-visibility", icon: Brain },
      { name: "Competitor Analysis", href: "/dashboard/ai-visibility/competitors", icon: Target },
    ],
  },
  {
    title: "Reports",
    collapsible: true,
    items: [
      { name: "Custom Reports", href: "/dashboard/reports", icon: FileText },
      { name: "Scheduled Reports", href: "/dashboard/reports/scheduled", icon: Mail },
    ],
  },
];

const bottomNavItems: NavItem[] = [
  { name: "Integrations", href: "/dashboard/integrations", icon: Plug },
  { name: "Settings", href: "/dashboard/settings", icon: Settings },
  { name: "Help Center", href: "/dashboard/help", icon: HelpCircle },
];

export default function Sidebar() {
  const pathname = usePathname();
  const { setTheme, resolvedTheme } = useTheme();
  const [collapsedSections, setCollapsedSections] = useState<string[]>([]);
  const [showAIChat, setShowAIChat] = useState(false);

  const toggleSection = (title: string) => {
    setCollapsedSections((prev) =>
      prev.includes(title) ? prev.filter((t) => t !== title) : [...prev, title]
    );
  };

  const isActive = (href: string) => {
    if (href === "/dashboard") return pathname === href;
    return pathname.startsWith(href);
  };

  return (
    <>
      <aside className="w-64 h-screen bg-sidebar border-r border-sidebar-border flex flex-col fixed left-0 top-0 z-40">
        {/* Header */}
        <div className="p-4 border-b border-sidebar-border">
          <div className="flex items-center justify-between mb-4">
            <Link href="/dashboard" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">S</span>
              </div>
              <span className="font-semibold text-foreground">Syntara</span>
            </Link>
            <button
              onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
              className="p-1.5 rounded-lg hover:bg-secondary text-muted-foreground hover:text-foreground"
            >
              {resolvedTheme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
            </button>
          </div>

          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={16} />
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-9 pr-12 py-2 bg-muted border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 text-foreground placeholder:text-muted-foreground"
            />
            <kbd className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-muted-foreground bg-card px-1.5 py-0.5 rounded border border-border">
              ⌘K
            </kbd>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="px-4 py-3 border-b border-sidebar-border flex gap-2">
          <button className="flex-1 flex items-center justify-center gap-2 text-muted-foreground hover:text-foreground hover:bg-secondary text-sm py-2 rounded-lg">
            <Bell size={16} />
            <span className="relative">
              Alerts
              <span className="absolute -top-1 -right-3 w-2 h-2 bg-destructive rounded-full" />
            </span>
          </button>
          <button
            onClick={() => setShowAIChat(true)}
            className="flex-1 flex items-center justify-center gap-2 bg-accent/10 text-accent hover:bg-accent/20 text-sm py-2 rounded-lg font-medium"
          >
            <Sparkles size={16} />
            <span>AI Chat</span>
          </button>
        </div>

        {/* Main Navigation */}
        <nav className="flex-1 px-3 py-4 overflow-y-auto">
          {navSections.map((section) => (
            <div key={section.title} className="mb-4">
              <button
                onClick={() => section.collapsible && toggleSection(section.title)}
                className="flex items-center justify-between w-full px-3 mb-1"
              >
                <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  {section.title}
                </span>
                {section.collapsible && (
                  <ChevronDown
                    size={12}
                    className={clsx(
                      "text-muted-foreground transition-transform",
                      collapsedSections.includes(section.title) && "-rotate-90"
                    )}
                  />
                )}
              </button>
              {!collapsedSections.includes(section.title) && (
                <ul className="space-y-0.5">
                  {section.items.map((item) => {
                    const active = isActive(item.href);
                    return (
                      <li key={item.name}>
                        <Link
                          href={item.href}
                          className={clsx(
                            "flex items-center gap-3 px-3 py-2 rounded-lg text-sm",
                            active
                              ? "bg-secondary text-foreground font-medium"
                              : "text-muted-foreground hover:bg-secondary/50 hover:text-foreground"
                          )}
                        >
                          <item.icon size={16} className={active ? "text-accent" : ""} />
                          <span>{item.name}</span>
                          {item.badge && (
                            <span className={clsx(
                              "ml-auto text-xs px-2 py-0.5 rounded-full",
                              item.badgeColor || "bg-accent/10 text-accent"
                            )}>
                              {item.badge}
                            </span>
                          )}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
          ))}
        </nav>

        {/* Upgrade Banner */}
        <div className="px-3 pb-3">
          <div className="p-4 bg-gradient-to-r from-accent/10 to-accent/5 rounded-xl border border-accent/20">
            <div className="flex items-center gap-2 mb-2">
              <Crown size={16} className="text-accent" />
              <span className="text-sm font-medium text-foreground">Upgrade to Pro</span>
            </div>
            <p className="text-xs text-muted-foreground mb-3">
              Unlock AI insights, custom reports, and unlimited integrations.
            </p>
            <Link
              href="/dashboard/settings?tab=billing"
              className="flex items-center justify-center gap-1 w-full py-2 bg-accent text-white rounded-lg text-sm font-medium hover:bg-accent/90"
            >
              View Plans
              <ChevronRight size={14} />
            </Link>
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="px-3 py-3 border-t border-sidebar-border">
          <ul className="space-y-0.5">
            {bottomNavItems.map((item) => {
              const active = isActive(item.href);
              return (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className={clsx(
                      "flex items-center gap-3 px-3 py-2 rounded-lg text-sm",
                      active
                        ? "bg-secondary text-foreground font-medium"
                        : "text-muted-foreground hover:bg-secondary/50 hover:text-foreground"
                    )}
                  >
                    <item.icon size={16} className={active ? "text-accent" : ""} />
                    <span>{item.name}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </aside>

      {/* AI Chat Modal */}
      {showAIChat && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-card rounded-2xl w-full max-w-2xl max-h-[80vh] flex flex-col shadow-2xl border border-border">
            <div className="flex items-center justify-between p-4 border-b border-border">
              <div className="flex items-center gap-2">
                <Sparkles className="text-accent" size={20} />
                <span className="font-semibold text-foreground">AI Assistant</span>
              </div>
              <button
                onClick={() => setShowAIChat(false)}
                className="p-1.5 rounded-lg hover:bg-secondary text-muted-foreground"
              >
                <X size={18} />
              </button>
            </div>
            <div className="flex-1 p-4 overflow-y-auto">
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="text-accent" size={28} />
                </div>
                <h3 className="font-semibold text-lg text-foreground mb-2">Ask me anything about your data</h3>
                <p className="text-muted-foreground text-sm max-w-md mx-auto">
                  Try &ldquo;Show me the best performing ads last month&rdquo; or &ldquo;What&apos;s causing the traffic drop?&rdquo;
                </p>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {[
                  "What are my top performing campaigns?",
                  "Show leads from last week",
                  "Why did conversions drop?",
                  "Compare Meta vs Google ROI",
                ].map((suggestion) => (
                  <button
                    key={suggestion}
                    className="text-left p-3 bg-secondary/50 hover:bg-secondary rounded-lg text-sm text-foreground"
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            </div>
            <div className="p-4 border-t border-border">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Ask a question about your marketing data..."
                  className="w-full px-4 py-3 pr-12 bg-muted border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 text-foreground placeholder:text-muted-foreground"
                />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-accent text-white rounded-lg hover:bg-accent/90">
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
