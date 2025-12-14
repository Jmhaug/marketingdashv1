"use client";

import { useState } from "react";
import { Search, Plus, Filter, FileText, Download, MoreHorizontal, Clock, CheckCircle, AlertCircle } from "lucide-react";
import { clsx } from "clsx";

interface Contract {
  id: number;
  title: string;
  client: string;
  value: string;
  status: "Active" | "Pending" | "Expired";
  startDate: string;
  endDate: string;
}

const contracts: Contract[] = [
  { id: 1, title: "Enterprise License Agreement", client: "Acme Corp", value: "$125,000", status: "Active", startDate: "Jan 1, 2025", endDate: "Dec 31, 2025" },
  { id: 2, title: "Consulting Services Contract", client: "TechStart Inc", value: "$45,000", status: "Active", startDate: "Mar 15, 2025", endDate: "Sep 15, 2025" },
  { id: 3, title: "Software Development Agreement", client: "Global Dynamics", value: "$89,500", status: "Pending", startDate: "Pending", endDate: "Pending" },
  { id: 4, title: "Annual Support Contract", client: "CloudScale", value: "$24,000", status: "Active", startDate: "Jun 1, 2025", endDate: "May 31, 2026" },
  { id: 5, title: "Partnership Agreement", client: "DataFlow", value: "$200,000", status: "Expired", startDate: "Jan 1, 2024", endDate: "Dec 31, 2024" },
  { id: 6, title: "Service Level Agreement", client: "InnovateTech", value: "$36,000", status: "Pending", startDate: "Pending", endDate: "Pending" },
];

export default function ContractsPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredContracts = contracts.filter(
    (contract) =>
      contract.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      contract.client.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Active":
        return <CheckCircle size={14} className="text-emerald-500" />;
      case "Pending":
        return <Clock size={14} className="text-amber-500" />;
      case "Expired":
        return <AlertCircle size={14} className="text-red-500" />;
      default:
        return null;
    }
  };

  return (
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-semibold">Contracts</h1>
          <p className="text-gray-500 text-sm mt-1">Manage your client contracts and agreements</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg text-sm hover:bg-gray-800">
          <Plus size={16} />
          <span>New Contract</span>
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white rounded-xl border border-gray-100 p-4">
          <p className="text-sm text-gray-500">Total Contracts</p>
          <p className="text-2xl font-semibold mt-1">{contracts.length}</p>
        </div>
        <div className="bg-white rounded-xl border border-gray-100 p-4">
          <p className="text-sm text-gray-500">Active</p>
          <p className="text-2xl font-semibold mt-1 text-emerald-600">
            {contracts.filter((c) => c.status === "Active").length}
          </p>
        </div>
        <div className="bg-white rounded-xl border border-gray-100 p-4">
          <p className="text-sm text-gray-500">Pending</p>
          <p className="text-2xl font-semibold mt-1 text-amber-600">
            {contracts.filter((c) => c.status === "Pending").length}
          </p>
        </div>
        <div className="bg-white rounded-xl border border-gray-100 p-4">
          <p className="text-sm text-gray-500">Total Value</p>
          <p className="text-2xl font-semibold mt-1">$519,500</p>
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
                placeholder="Search contracts..."
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
        </div>
      </div>

      {/* Contracts Table */}
      <div className="bg-white rounded-xl border border-gray-100">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-100">
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contract</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Client</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Value</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Duration</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredContracts.map((contract) => (
              <tr key={contract.id} className="border-b border-gray-50 hover:bg-gray-50">
                <td className="px-4 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                      <FileText className="w-5 h-5 text-gray-500" />
                    </div>
                    <span className="font-medium text-sm">{contract.title}</span>
                  </div>
                </td>
                <td className="px-4 py-4 text-sm text-gray-600">{contract.client}</td>
                <td className="px-4 py-4 text-sm font-semibold">{contract.value}</td>
                <td className="px-4 py-4">
                  <span
                    className={clsx(
                      "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium",
                      contract.status === "Active"
                        ? "bg-emerald-50 text-emerald-700"
                        : contract.status === "Pending"
                        ? "bg-amber-50 text-amber-700"
                        : "bg-red-50 text-red-700"
                    )}
                  >
                    {getStatusIcon(contract.status)}
                    {contract.status}
                  </span>
                </td>
                <td className="px-4 py-4 text-sm text-gray-500">
                  {contract.startDate} - {contract.endDate}
                </td>
                <td className="px-4 py-4">
                  <div className="flex items-center gap-2">
                    <button className="p-1.5 hover:bg-gray-100 rounded">
                      <Download size={14} className="text-gray-400" />
                    </button>
                    <button className="p-1.5 hover:bg-gray-100 rounded">
                      <MoreHorizontal size={14} className="text-gray-400" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
