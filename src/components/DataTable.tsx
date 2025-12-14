"use client";

import { useState } from "react";
import {
  Search,
  ArrowUpDown,
  Filter,
  Download,
  Plus,
  Mail,
  Phone,
} from "lucide-react";
import { clsx } from "clsx";

interface Contact {
  id: number;
  name: string;
  avatar: string;
  jobTitle: string;
  status: "Active" | "Offline";
  email: string;
  phone: string;
  tags: string[];
}

const contacts: Contact[] = [
  {
    id: 1,
    name: "Sarah",
    avatar: "S",
    jobTitle: "Marketing Director",
    status: "Active",
    email: "sarah@brightwave.co",
    phone: "(415) 283-9921",
    tags: ["Marketing", "SaaS"],
  },
  {
    id: 2,
    name: "James",
    avatar: "J",
    jobTitle: "Sales Manager",
    status: "Offline",
    email: "james@gmail.com",
    phone: "(646) 555-7310",
    tags: ["Sales", "Enterprise"],
  },
  {
    id: 3,
    name: "Priya",
    avatar: "P",
    jobTitle: "Product Manager",
    status: "Active",
    email: "priya@auroratech.io",
    phone: "(312) 449-2278",
    tags: ["Product", "B2B"],
  },
  {
    id: 4,
    name: "Lucas",
    avatar: "L",
    jobTitle: "Account Executive",
    status: "Offline",
    email: "lucas@yahoo.com",
    phone: "(512) 930-4456",
    tags: ["Sales", "Startup"],
  },
  {
    id: 5,
    name: "Emily",
    avatar: "E",
    jobTitle: "Customer Success Lead",
    status: "Active",
    email: "emily@zencloud.com",
    phone: "(206) 902-1884",
    tags: ["Customer Success"],
  },
  {
    id: 6,
    name: "Michael",
    avatar: "M",
    jobTitle: "HR Coordinator",
    status: "Active",
    email: "michael@outlook.com",
    phone: "(617) 348-9922",
    tags: ["Technology", "SaaS"],
  },
];

export default function DataTable() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRows, setSelectedRows] = useState<number[]>([]);

  const filteredContacts = contacts.filter(
    (contact) =>
      contact.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      contact.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      contact.jobTitle.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleRowSelection = (id: number) => {
    setSelectedRows((prev) =>
      prev.includes(id) ? prev.filter((rowId) => rowId !== id) : [...prev, id]
    );
  };

  const toggleAllRows = () => {
    if (selectedRows.length === filteredContacts.length) {
      setSelectedRows([]);
    } else {
      setSelectedRows(filteredContacts.map((c) => c.id));
    }
  };

  return (
    <div className="bg-white rounded-xl border border-gray-100">
      {/* Table Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-100">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
          <input
            type="text"
            placeholder="Search files..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9 pr-4 py-2 bg-gray-50 border border-gray-100 rounded-lg text-sm w-64 focus:outline-none focus:border-gray-300"
          />
        </div>
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-2 px-3 py-2 border border-gray-200 rounded-lg text-sm hover:bg-gray-50">
            <ArrowUpDown size={14} />
            <span>Sort</span>
          </button>
          <button className="flex items-center gap-2 px-3 py-2 border border-gray-200 rounded-lg text-sm hover:bg-gray-50">
            <Filter size={14} />
            <span>Filter</span>
          </button>
          <button className="flex items-center gap-2 px-3 py-2 border border-gray-200 rounded-lg text-sm hover:bg-gray-50">
            <Download size={14} />
            <span>Import</span>
          </button>
          <button className="flex items-center gap-2 px-3 py-2 bg-black text-white rounded-lg text-sm hover:bg-gray-800">
            <Plus size={14} />
            <span>New</span>
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-100">
              <th className="px-4 py-3 text-left">
                <input
                  type="checkbox"
                  checked={selectedRows.length === filteredContacts.length && filteredContacts.length > 0}
                  onChange={toggleAllRows}
                  className="rounded border-gray-300"
                />
              </th>
              <th className="px-4 py-3 text-left">
                <button className="flex items-center gap-1 text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                  <Plus size={12} className="rotate-45" />
                </button>
              </th>
              <th className="px-4 py-3 text-left">
                <button className="flex items-center gap-1 text-xs font-medium text-gray-500 uppercase tracking-wider">
                  <Mail size={12} />
                  Job Title
                </button>
              </th>
              <th className="px-4 py-3 text-left">
                <button className="flex items-center gap-1 text-xs font-medium text-gray-500 uppercase tracking-wider">
                  <Mail size={12} />
                  Status
                </button>
              </th>
              <th className="px-4 py-3 text-left">
                <button className="flex items-center gap-1 text-xs font-medium text-gray-500 uppercase tracking-wider">
                  <Mail size={12} />
                  Email
                </button>
              </th>
              <th className="px-4 py-3 text-left">
                <button className="flex items-center gap-1 text-xs font-medium text-gray-500 uppercase tracking-wider">
                  <Phone size={12} />
                  Phone
                </button>
              </th>
              <th className="px-4 py-3 text-left">
                <button className="flex items-center gap-1 text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Tags
                </button>
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredContacts.map((contact) => (
              <tr
                key={contact.id}
                className={clsx(
                  "border-b border-gray-50 hover:bg-gray-50",
                  selectedRows.includes(contact.id) && "bg-gray-50"
                )}
              >
                <td className="px-4 py-3">
                  <input
                    type="checkbox"
                    checked={selectedRows.includes(contact.id)}
                    onChange={() => toggleRowSelection(contact.id)}
                    className="rounded border-gray-300"
                  />
                </td>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full flex items-center justify-center text-sm font-medium">
                      {contact.avatar}
                    </div>
                    <span className="text-sm font-medium">{contact.name}</span>
                  </div>
                </td>
                <td className="px-4 py-3 text-sm text-gray-600">{contact.jobTitle}</td>
                <td className="px-4 py-3">
                  <span
                    className={clsx(
                      "inline-flex items-center gap-1.5 px-2 py-1 rounded-full text-xs font-medium",
                      contact.status === "Active"
                        ? "bg-emerald-50 text-emerald-700"
                        : "bg-gray-100 text-gray-600"
                    )}
                  >
                    <span
                      className={clsx(
                        "w-1.5 h-1.5 rounded-full",
                        contact.status === "Active" ? "bg-emerald-500" : "bg-gray-400"
                      )}
                    />
                    {contact.status}
                  </span>
                </td>
                <td className="px-4 py-3 text-sm text-emerald-600">{contact.email}</td>
                <td className="px-4 py-3 text-sm text-gray-600">{contact.phone}</td>
                <td className="px-4 py-3">
                  <div className="flex gap-1.5">
                    {contact.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-gray-100 rounded text-xs font-medium text-gray-600"
                      >
                        {tag}
                      </span>
                    ))}
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
