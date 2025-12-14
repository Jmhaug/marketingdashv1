"use client";

import { useState } from "react";
import { Search, Plus, Check, ExternalLink } from "lucide-react";
import { clsx } from "clsx";

interface Integration {
  id: number;
  name: string;
  description: string;
  category: string;
  connected: boolean;
  icon: string;
}

const integrations: Integration[] = [
  { id: 1, name: "Slack", description: "Send notifications and updates to Slack channels", category: "Communication", connected: true, icon: "#" },
  { id: 2, name: "Google Calendar", description: "Sync your events and meetings", category: "Productivity", connected: true, icon: "G" },
  { id: 3, name: "Salesforce", description: "Sync contacts and deals with Salesforce CRM", category: "CRM", connected: false, icon: "SF" },
  { id: 4, name: "Stripe", description: "Process payments and manage subscriptions", category: "Payments", connected: true, icon: "S" },
  { id: 5, name: "Notion", description: "Connect your Notion workspace", category: "Productivity", connected: false, icon: "N" },
  { id: 6, name: "GitHub", description: "Track issues and pull requests", category: "Development", connected: true, icon: "GH" },
  { id: 7, name: "Figma", description: "Embed and preview Figma designs", category: "Design", connected: false, icon: "F" },
  { id: 8, name: "Zapier", description: "Automate workflows with 5000+ apps", category: "Automation", connected: false, icon: "Z" },
  { id: 9, name: "HubSpot", description: "Sync marketing and sales data", category: "CRM", connected: false, icon: "HS" },
  { id: 10, name: "Jira", description: "Track projects and issues", category: "Development", connected: true, icon: "J" },
  { id: 11, name: "Intercom", description: "Manage customer conversations", category: "Support", connected: false, icon: "I" },
  { id: 12, name: "Mailchimp", description: "Sync email marketing campaigns", category: "Marketing", connected: false, icon: "MC" },
];

const categories = ["All", "Communication", "Productivity", "CRM", "Payments", "Development", "Design", "Automation", "Support", "Marketing"];

export default function IntegrationsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [localIntegrations, setLocalIntegrations] = useState(integrations);

  const filteredIntegrations = localIntegrations.filter((integration) => {
    const matchesSearch = integration.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      integration.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || integration.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const toggleConnection = (id: number) => {
    setLocalIntegrations((prev) =>
      prev.map((integration) =>
        integration.id === id ? { ...integration, connected: !integration.connected } : integration
      )
    );
  };

  return (
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-semibold">Integrations</h1>
          <p className="text-gray-500 text-sm mt-1">Connect your favorite tools and services</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg text-sm hover:bg-gray-800">
          <Plus size={16} />
          <span>Request Integration</span>
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-white rounded-xl border border-gray-100 p-4">
          <p className="text-sm text-gray-500">Available Integrations</p>
          <p className="text-2xl font-semibold mt-1">{integrations.length}</p>
        </div>
        <div className="bg-white rounded-xl border border-gray-100 p-4">
          <p className="text-sm text-gray-500">Connected</p>
          <p className="text-2xl font-semibold mt-1 text-emerald-600">
            {localIntegrations.filter((i) => i.connected).length}
          </p>
        </div>
        <div className="bg-white rounded-xl border border-gray-100 p-4">
          <p className="text-sm text-gray-500">Categories</p>
          <p className="text-2xl font-semibold mt-1">{categories.length - 1}</p>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="bg-white rounded-xl border border-gray-100 p-4 mb-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
            <input
              type="text"
              placeholder="Search integrations..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9 pr-4 py-2 bg-gray-50 border border-gray-100 rounded-lg text-sm w-full md:w-64 focus:outline-none focus:border-gray-300"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={clsx(
                  "px-3 py-1.5 rounded-lg text-sm",
                  selectedCategory === category
                    ? "bg-black text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                )}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Integrations Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredIntegrations.map((integration) => (
          <div key={integration.id} className="bg-white rounded-xl border border-gray-100 p-5 hover:border-gray-200">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center font-bold text-gray-700">
                  {integration.icon}
                </div>
                <div>
                  <h3 className="font-semibold">{integration.name}</h3>
                  <span className="text-xs text-gray-500">{integration.category}</span>
                </div>
              </div>
              {integration.connected && (
                <div className="flex items-center gap-1 text-emerald-600 text-xs font-medium">
                  <Check size={14} />
                  Connected
                </div>
              )}
            </div>
            <p className="text-sm text-gray-600 mb-4">{integration.description}</p>
            <div className="flex items-center justify-between pt-4 border-t border-gray-100">
              <button className="text-sm text-gray-600 hover:text-black flex items-center gap-1">
                Learn more
                <ExternalLink size={12} />
              </button>
              <button
                onClick={() => toggleConnection(integration.id)}
                className={clsx(
                  "px-4 py-1.5 rounded-lg text-sm font-medium",
                  integration.connected
                    ? "border border-gray-200 text-gray-600 hover:bg-gray-50"
                    : "bg-black text-white hover:bg-gray-800"
                )}
              >
                {integration.connected ? "Disconnect" : "Connect"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
