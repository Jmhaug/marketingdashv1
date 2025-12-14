"use client";

import { useState } from "react";
import {
  Search,
  Plus,
  Filter,
  MoreHorizontal,
  Building2,
  Mail,
  Phone,
  Globe,
  MapPin,
} from "lucide-react";
import { clsx } from "clsx";

interface Client {
  id: number;
  name: string;
  company: string;
  email: string;
  phone: string;
  website: string;
  location: string;
  status: "Active" | "Inactive" | "Pending";
  revenue: string;
  projects: number;
}

const clients: Client[] = [
  {
    id: 1,
    name: "Acme Corporation",
    company: "Acme Corp",
    email: "contact@acmecorp.com",
    phone: "(555) 123-4567",
    website: "acmecorp.com",
    location: "San Francisco, CA",
    status: "Active",
    revenue: "$125,000",
    projects: 3,
  },
  {
    id: 2,
    name: "TechStart Inc",
    company: "TechStart",
    email: "hello@techstart.io",
    phone: "(555) 234-5678",
    website: "techstart.io",
    location: "New York, NY",
    status: "Active",
    revenue: "$89,500",
    projects: 2,
  },
  {
    id: 3,
    name: "Global Dynamics",
    company: "Global Dynamics",
    email: "info@globaldynamics.com",
    phone: "(555) 345-6789",
    website: "globaldynamics.com",
    location: "Chicago, IL",
    status: "Pending",
    revenue: "$45,000",
    projects: 1,
  },
  {
    id: 4,
    name: "InnovateTech",
    company: "InnovateTech",
    email: "support@innovatetech.co",
    phone: "(555) 456-7890",
    website: "innovatetech.co",
    location: "Austin, TX",
    status: "Inactive",
    revenue: "$0",
    projects: 0,
  },
  {
    id: 5,
    name: "CloudScale Systems",
    company: "CloudScale",
    email: "team@cloudscale.dev",
    phone: "(555) 567-8901",
    website: "cloudscale.dev",
    location: "Seattle, WA",
    status: "Active",
    revenue: "$210,000",
    projects: 5,
  },
  {
    id: 6,
    name: "DataFlow Analytics",
    company: "DataFlow",
    email: "analytics@dataflow.ai",
    phone: "(555) 678-9012",
    website: "dataflow.ai",
    location: "Boston, MA",
    status: "Active",
    revenue: "$167,500",
    projects: 4,
  },
];

export default function ClientsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [view, setView] = useState<"grid" | "list">("grid");

  const filteredClients = clients.filter(
    (client) =>
      client.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      client.company.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-semibold">Clients</h1>
          <p className="text-gray-500 text-sm mt-1">Manage your client relationships</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg text-sm hover:bg-gray-800">
          <Plus size={16} />
          <span>Add Client</span>
        </button>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl border border-gray-100 p-4 mb-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
              <input
                type="text"
                placeholder="Search clients..."
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
                "px-3 py-1.5 rounded-md text-sm",
                view === "grid" ? "bg-white shadow-sm" : "text-gray-600"
              )}
            >
              Grid
            </button>
            <button
              onClick={() => setView("list")}
              className={clsx(
                "px-3 py-1.5 rounded-md text-sm",
                view === "list" ? "bg-white shadow-sm" : "text-gray-600"
              )}
            >
              List
            </button>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white rounded-xl border border-gray-100 p-4">
          <p className="text-sm text-gray-500">Total Clients</p>
          <p className="text-2xl font-semibold mt-1">{clients.length}</p>
        </div>
        <div className="bg-white rounded-xl border border-gray-100 p-4">
          <p className="text-sm text-gray-500">Active</p>
          <p className="text-2xl font-semibold mt-1 text-emerald-600">
            {clients.filter((c) => c.status === "Active").length}
          </p>
        </div>
        <div className="bg-white rounded-xl border border-gray-100 p-4">
          <p className="text-sm text-gray-500">Total Revenue</p>
          <p className="text-2xl font-semibold mt-1">$637,000</p>
        </div>
        <div className="bg-white rounded-xl border border-gray-100 p-4">
          <p className="text-sm text-gray-500">Active Projects</p>
          <p className="text-2xl font-semibold mt-1">15</p>
        </div>
      </div>

      {/* Clients Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredClients.map((client) => (
          <div key={client.id} className="bg-white rounded-xl border border-gray-100 p-5 hover:border-gray-200">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-gray-500" />
                </div>
                <div>
                  <h3 className="font-semibold">{client.name}</h3>
                  <p className="text-sm text-gray-500">{client.company}</p>
                </div>
              </div>
              <button className="p-1 hover:bg-gray-100 rounded">
                <MoreHorizontal size={16} className="text-gray-400" />
              </button>
            </div>

            <div className="space-y-2 mb-4">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Mail size={14} className="text-gray-400" />
                <span>{client.email}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Phone size={14} className="text-gray-400" />
                <span>{client.phone}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <MapPin size={14} className="text-gray-400" />
                <span>{client.location}</span>
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-gray-100">
              <span
                className={clsx(
                  "px-2 py-1 rounded-full text-xs font-medium",
                  client.status === "Active"
                    ? "bg-emerald-50 text-emerald-700"
                    : client.status === "Pending"
                    ? "bg-amber-50 text-amber-700"
                    : "bg-gray-100 text-gray-600"
                )}
              >
                {client.status}
              </span>
              <div className="text-right">
                <p className="text-sm font-semibold">{client.revenue}</p>
                <p className="text-xs text-gray-500">{client.projects} projects</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
