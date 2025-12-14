"use client";

import { Calendar, Clock, Plus, ChevronLeft, ChevronRight, Users, Video, MapPin } from "lucide-react";

const events = [
  {
    id: 1,
    title: "Team Standup",
    time: "9:00 AM - 9:30 AM",
    type: "meeting",
    attendees: 5,
    location: "Google Meet",
    color: "bg-emerald-500",
  },
  {
    id: 2,
    title: "Client Review - Acme Corp",
    time: "11:00 AM - 12:00 PM",
    type: "meeting",
    attendees: 3,
    location: "Zoom",
    color: "bg-blue-500",
  },
  {
    id: 3,
    title: "Product Planning",
    time: "2:00 PM - 3:30 PM",
    type: "workshop",
    attendees: 8,
    location: "Conference Room A",
    color: "bg-purple-500",
  },
  {
    id: 4,
    title: "1:1 with Sarah",
    time: "4:00 PM - 4:30 PM",
    type: "meeting",
    attendees: 2,
    location: "Office",
    color: "bg-amber-500",
  },
];

const upcomingEvents = [
  { id: 1, title: "Quarterly Review", date: "Dec 18", time: "10:00 AM" },
  { id: 2, title: "Team Lunch", date: "Dec 20", time: "12:30 PM" },
  { id: 3, title: "Sprint Planning", date: "Dec 22", time: "9:00 AM" },
];

export default function SchedulePage() {
  const currentDate = new Date();
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  return (
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-semibold">Schedule</h1>
          <p className="text-gray-500 text-sm mt-1">Manage your meetings and events</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg text-sm hover:bg-gray-800">
          <Plus size={16} />
          <span>New Event</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Calendar */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl border border-gray-100 p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold">{months[currentDate.getMonth()]} {currentDate.getFullYear()}</h2>
              <div className="flex items-center gap-2">
                <button className="p-2 hover:bg-gray-100 rounded-lg">
                  <ChevronLeft size={16} />
                </button>
                <button className="px-3 py-1.5 bg-black text-white rounded-lg text-sm">Today</button>
                <button className="p-2 hover:bg-gray-100 rounded-lg">
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>

            {/* Calendar Grid */}
            <div className="grid grid-cols-7 gap-1 mb-4">
              {days.map((day) => (
                <div key={day} className="text-center text-xs font-medium text-gray-500 py-2">
                  {day}
                </div>
              ))}
            </div>
            <div className="grid grid-cols-7 gap-1">
              {Array.from({ length: 35 }, (_, i) => {
                const dayNum = i - 5;
                const isToday = dayNum === currentDate.getDate();
                const isCurrentMonth = dayNum > 0 && dayNum <= 31;
                return (
                  <div
                    key={i}
                    className={`aspect-square p-1 text-center rounded-lg ${
                      isToday ? "bg-black text-white" : isCurrentMonth ? "hover:bg-gray-50 cursor-pointer" : "text-gray-300"
                    }`}
                  >
                    <span className="text-sm">{isCurrentMonth ? dayNum : ""}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Today's Events */}
          <div className="bg-white rounded-xl border border-gray-100 p-6 mt-6">
            <div className="flex items-center gap-2 mb-4">
              <Calendar size={18} className="text-gray-500" />
              <h3 className="font-semibold">Today&apos;s Schedule</h3>
              <span className="text-xs text-gray-400">December 14, 2025</span>
            </div>
            <div className="space-y-3">
              {events.map((event) => (
                <div key={event.id} className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 cursor-pointer">
                  <div className={`w-1 h-full min-h-[60px] ${event.color} rounded-full`} />
                  <div className="flex-1">
                    <h4 className="font-medium">{event.title}</h4>
                    <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
                      <span className="flex items-center gap-1">
                        <Clock size={14} />
                        {event.time}
                      </span>
                      <span className="flex items-center gap-1">
                        <Users size={14} />
                        {event.attendees}
                      </span>
                      <span className="flex items-center gap-1">
                        {event.location.includes("Meet") || event.location.includes("Zoom") ? (
                          <Video size={14} />
                        ) : (
                          <MapPin size={14} />
                        )}
                        {event.location}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Upcoming Events Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl border border-gray-100 p-6">
            <h3 className="font-semibold mb-4">Upcoming Events</h3>
            <div className="space-y-4">
              {upcomingEvents.map((event) => (
                <div key={event.id} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg cursor-pointer">
                  <div>
                    <p className="font-medium text-sm">{event.title}</p>
                    <p className="text-xs text-gray-500 mt-1">{event.time}</p>
                  </div>
                  <span className="text-xs text-gray-400 bg-gray-100 px-2 py-1 rounded">{event.date}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Stats */}
          <div className="bg-white rounded-xl border border-gray-100 p-6 mt-6">
            <h3 className="font-semibold mb-4">This Week</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Total Meetings</span>
                <span className="font-semibold">12</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Hours Scheduled</span>
                <span className="font-semibold">18.5h</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Free Slots</span>
                <span className="font-semibold text-emerald-600">8</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
