"use client";

import { useState } from "react";
import {
  User,
  Bell,
  Shield,
  CreditCard,
  Users,
  Palette,
  Globe,
  Key,
  Mail,
  Smartphone,
} from "lucide-react";
import { clsx } from "clsx";

const tabs = [
  { id: "profile", label: "Profile", icon: User },
  { id: "notifications", label: "Notifications", icon: Bell },
  { id: "security", label: "Security", icon: Shield },
  { id: "billing", label: "Billing", icon: CreditCard },
  { id: "team", label: "Team", icon: Users },
  { id: "appearance", label: "Appearance", icon: Palette },
];

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("profile");

  return (
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-semibold">Settings</h1>
        <p className="text-gray-500 text-sm mt-1">Manage your account and preferences</p>
      </div>

      <div className="flex gap-8">
        {/* Sidebar */}
        <div className="w-56 flex-shrink-0">
          <nav className="space-y-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={clsx(
                  "w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm",
                  activeTab === tab.id
                    ? "bg-gray-100 text-black font-medium"
                    : "text-gray-600 hover:bg-gray-50"
                )}
              >
                <tab.icon size={18} />
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Content */}
        <div className="flex-1">
          {activeTab === "profile" && (
            <div className="bg-white rounded-xl border border-gray-100 p-6">
              <h2 className="text-lg font-semibold mb-6">Profile Settings</h2>

              <div className="flex items-center gap-6 mb-8 pb-8 border-b border-gray-100">
                <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center text-2xl font-semibold">
                  A
                </div>
                <div>
                  <button className="px-4 py-2 bg-black text-white rounded-lg text-sm hover:bg-gray-800">
                    Upload Photo
                  </button>
                  <button className="px-4 py-2 text-gray-600 text-sm hover:text-black ml-2">
                    Remove
                  </button>
                  <p className="text-xs text-gray-500 mt-2">JPG, PNG or GIF. Max 2MB.</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">First Name</label>
                  <input
                    type="text"
                    defaultValue="Augustas"
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-gray-400"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Last Name</label>
                  <input
                    type="text"
                    defaultValue="Smith"
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-gray-400"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    defaultValue="augustas@lunorgroup.com"
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-gray-400"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Phone</label>
                  <input
                    type="tel"
                    defaultValue="+1 (555) 000-0000"
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-gray-400"
                  />
                </div>
                <div className="col-span-2">
                  <label className="block text-sm font-medium mb-2">Bio</label>
                  <textarea
                    rows={3}
                    defaultValue="Product designer with 5+ years of experience."
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-gray-400"
                  />
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-100 flex justify-end gap-3">
                <button className="px-4 py-2 border border-gray-200 rounded-lg text-sm hover:bg-gray-50">
                  Cancel
                </button>
                <button className="px-4 py-2 bg-black text-white rounded-lg text-sm hover:bg-gray-800">
                  Save Changes
                </button>
              </div>
            </div>
          )}

          {activeTab === "notifications" && (
            <div className="bg-white rounded-xl border border-gray-100 p-6">
              <h2 className="text-lg font-semibold mb-6">Notification Preferences</h2>

              <div className="space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-gray-100 rounded-lg">
                      <Mail size={18} className="text-gray-600" />
                    </div>
                    <div>
                      <p className="font-medium text-sm">Email Notifications</p>
                      <p className="text-xs text-gray-500">Receive updates via email</p>
                    </div>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" defaultChecked />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-500"></div>
                  </label>
                </div>

                <div className="flex items-center justify-between pb-4 border-b border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-gray-100 rounded-lg">
                      <Smartphone size={18} className="text-gray-600" />
                    </div>
                    <div>
                      <p className="font-medium text-sm">Push Notifications</p>
                      <p className="text-xs text-gray-500">Receive push notifications on mobile</p>
                    </div>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" defaultChecked />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-500"></div>
                  </label>
                </div>

                <div className="flex items-center justify-between pb-4 border-b border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-gray-100 rounded-lg">
                      <Bell size={18} className="text-gray-600" />
                    </div>
                    <div>
                      <p className="font-medium text-sm">Weekly Summary</p>
                      <p className="text-xs text-gray-500">Get a weekly digest of your activity</p>
                    </div>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-500"></div>
                  </label>
                </div>
              </div>
            </div>
          )}

          {activeTab === "security" && (
            <div className="bg-white rounded-xl border border-gray-100 p-6">
              <h2 className="text-lg font-semibold mb-6">Security Settings</h2>

              <div className="space-y-6">
                <div className="pb-6 border-b border-gray-100">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-gray-100 rounded-lg">
                        <Key size={18} className="text-gray-600" />
                      </div>
                      <div>
                        <p className="font-medium text-sm">Password</p>
                        <p className="text-xs text-gray-500">Last changed 30 days ago</p>
                      </div>
                    </div>
                    <button className="px-4 py-2 border border-gray-200 rounded-lg text-sm hover:bg-gray-50">
                      Change Password
                    </button>
                  </div>
                </div>

                <div className="pb-6 border-b border-gray-100">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-gray-100 rounded-lg">
                        <Shield size={18} className="text-gray-600" />
                      </div>
                      <div>
                        <p className="font-medium text-sm">Two-Factor Authentication</p>
                        <p className="text-xs text-gray-500">Add an extra layer of security</p>
                      </div>
                    </div>
                    <button className="px-4 py-2 bg-emerald-500 text-white rounded-lg text-sm hover:bg-emerald-600">
                      Enable 2FA
                    </button>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-gray-100 rounded-lg">
                        <Globe size={18} className="text-gray-600" />
                      </div>
                      <div>
                        <p className="font-medium text-sm">Active Sessions</p>
                        <p className="text-xs text-gray-500">Manage your active sessions</p>
                      </div>
                    </div>
                    <button className="px-4 py-2 border border-gray-200 rounded-lg text-sm hover:bg-gray-50">
                      View Sessions
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "billing" && (
            <div className="space-y-6">
              <div className="bg-white rounded-xl border border-gray-100 p-6">
                <h2 className="text-lg font-semibold mb-6">Current Plan</h2>
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                  <div>
                    <p className="font-semibold">Pro Plan</p>
                    <p className="text-sm text-gray-500">$79/month, billed monthly</p>
                  </div>
                  <button className="px-4 py-2 bg-black text-white rounded-lg text-sm hover:bg-gray-800">
                    Upgrade Plan
                  </button>
                </div>
              </div>

              <div className="bg-white rounded-xl border border-gray-100 p-6">
                <h2 className="text-lg font-semibold mb-6">Payment Method</h2>
                <div className="flex items-center justify-between p-4 border border-gray-200 rounded-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-8 bg-gray-900 rounded flex items-center justify-center text-white text-xs font-bold">
                      VISA
                    </div>
                    <div>
                      <p className="font-medium text-sm">**** **** **** 4242</p>
                      <p className="text-xs text-gray-500">Expires 12/2025</p>
                    </div>
                  </div>
                  <button className="text-sm text-gray-600 hover:text-black">Edit</button>
                </div>
              </div>
            </div>
          )}

          {activeTab === "team" && (
            <div className="bg-white rounded-xl border border-gray-100 p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold">Team Members</h2>
                <button className="px-4 py-2 bg-black text-white rounded-lg text-sm hover:bg-gray-800">
                  Invite Member
                </button>
              </div>

              <div className="space-y-4">
                {[
                  { name: "Augustas Smith", email: "augustas@lunorgroup.com", role: "Admin" },
                  { name: "Sarah Johnson", email: "sarah@lunorgroup.com", role: "Editor" },
                  { name: "Michael Chen", email: "michael@lunorgroup.com", role: "Viewer" },
                ].map((member) => (
                  <div key={member.email} className="flex items-center justify-between p-4 border border-gray-100 rounded-xl">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center font-medium">
                        {member.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-medium text-sm">{member.name}</p>
                        <p className="text-xs text-gray-500">{member.email}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <select className="px-3 py-1.5 border border-gray-200 rounded-lg text-sm bg-white">
                        <option>{member.role}</option>
                        <option>Admin</option>
                        <option>Editor</option>
                        <option>Viewer</option>
                      </select>
                      <button className="text-sm text-red-600 hover:text-red-700">Remove</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "appearance" && (
            <div className="bg-white rounded-xl border border-gray-100 p-6">
              <h2 className="text-lg font-semibold mb-6">Appearance Settings</h2>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-3">Theme</label>
                  <div className="flex gap-4">
                    <button className="p-4 border-2 border-black rounded-xl flex flex-col items-center gap-2">
                      <div className="w-16 h-12 bg-white border border-gray-200 rounded-lg" />
                      <span className="text-sm">Light</span>
                    </button>
                    <button className="p-4 border border-gray-200 rounded-xl flex flex-col items-center gap-2 hover:border-gray-300">
                      <div className="w-16 h-12 bg-gray-900 rounded-lg" />
                      <span className="text-sm">Dark</span>
                    </button>
                    <button className="p-4 border border-gray-200 rounded-xl flex flex-col items-center gap-2 hover:border-gray-300">
                      <div className="w-16 h-12 bg-gradient-to-r from-white to-gray-900 rounded-lg" />
                      <span className="text-sm">System</span>
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-3">Accent Color</label>
                  <div className="flex gap-3">
                    {["bg-emerald-500", "bg-blue-500", "bg-purple-500", "bg-pink-500", "bg-amber-500"].map((color) => (
                      <button
                        key={color}
                        className={clsx(
                          "w-8 h-8 rounded-full",
                          color,
                          color === "bg-emerald-500" && "ring-2 ring-offset-2 ring-gray-400"
                        )}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
