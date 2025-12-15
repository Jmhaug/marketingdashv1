"use client";

import { useState } from "react";
import { Plus, MoreHorizontal, DollarSign, Users, Clock, Flame } from "lucide-react";

interface Lead {
  id: number;
  name: string;
  company: string;
  value: number;
  score: number;
  daysInStage: number;
}

interface Stage {
  id: string;
  name: string;
  color: string;
  leads: Lead[];
}

const initialStages: Stage[] = [
  {
    id: "new",
    name: "New",
    color: "bg-gray-500",
    leads: [
      { id: 1, name: "Amanda Foster", company: "Enterprise Co", value: 18000, score: 45, daysInStage: 2 },
      { id: 2, name: "David Kim", company: "Solutions Inc", value: 22000, score: 32, daysInStage: 3 },
    ],
  },
  {
    id: "contacted",
    name: "Contacted",
    color: "bg-blue-500",
    leads: [
      { id: 3, name: "Emily Watson", company: "GlobalTech", value: 28000, score: 65, daysInStage: 5 },
      { id: 4, name: "Alex Johnson", company: "Startup Co", value: 15000, score: 25, daysInStage: 8 },
    ],
  },
  {
    id: "qualified",
    name: "Qualified",
    color: "bg-purple-500",
    leads: [
      { id: 5, name: "Sarah Chen", company: "TechCorp Inc", value: 45000, score: 92, daysInStage: 4 },
      { id: 6, name: "Rachel Green", company: "BigCorp", value: 52000, score: 71, daysInStage: 6 },
    ],
  },
  {
    id: "demo",
    name: "Demo Scheduled",
    color: "bg-amber-500",
    leads: [
      { id: 7, name: "Michael Torres", company: "Innovate Solutions", value: 32000, score: 78, daysInStage: 2 },
    ],
  },
  {
    id: "proposal",
    name: "Proposal Sent",
    color: "bg-orange-500",
    leads: [
      { id: 8, name: "James Liu", company: "StartupXYZ", value: 75000, score: 88, daysInStage: 7 },
    ],
  },
  {
    id: "won",
    name: "Won",
    color: "bg-emerald-500",
    leads: [],
  },
];

export default function PipelinePage() {
  const [stages] = useState(initialStages);

  const totalValue = stages.reduce((acc, stage) =>
    acc + stage.leads.reduce((sum, lead) => sum + lead.value, 0), 0
  );

  const totalLeads = stages.reduce((acc, stage) => acc + stage.leads.length, 0);

  return (
    <div className="max-w-full mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-semibold text-foreground">Sales Pipeline</h1>
          <p className="text-muted-foreground text-sm">Drag and drop leads between stages</p>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <Users size={16} className="text-muted-foreground" />
            <span className="text-sm text-muted-foreground">{totalLeads} leads</span>
          </div>
          <div className="flex items-center gap-2">
            <DollarSign size={16} className="text-emerald-500" />
            <span className="text-sm font-medium text-foreground">${totalValue.toLocaleString()} pipeline value</span>
          </div>
        </div>
      </div>

      {/* Pipeline Kanban */}
      <div className="flex gap-4 overflow-x-auto pb-4">
        {stages.map((stage) => {
          const stageValue = stage.leads.reduce((sum, lead) => sum + lead.value, 0);
          return (
            <div key={stage.id} className="flex-shrink-0 w-72">
              {/* Stage Header */}
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <div className={`w-3 h-3 rounded-full ${stage.color}`} />
                  <span className="font-medium text-foreground">{stage.name}</span>
                  <span className="text-xs text-muted-foreground bg-muted px-2 py-0.5 rounded-full">
                    {stage.leads.length}
                  </span>
                </div>
                <button className="p-1 hover:bg-secondary rounded">
                  <Plus size={16} className="text-muted-foreground" />
                </button>
              </div>

              {/* Stage Value */}
              <div className="text-xs text-muted-foreground mb-3">
                ${stageValue.toLocaleString()} total
              </div>

              {/* Leads */}
              <div className="space-y-2">
                {stage.leads.map((lead) => (
                  <div
                    key={lead.id}
                    className="bg-card rounded-lg border border-border p-4 cursor-pointer hover:border-accent/50 hover:shadow-sm"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h4 className="font-medium text-sm text-foreground">{lead.name}</h4>
                        <p className="text-xs text-muted-foreground">{lead.company}</p>
                      </div>
                      <button className="p-1 hover:bg-secondary rounded opacity-0 group-hover:opacity-100">
                        <MoreHorizontal size={14} className="text-muted-foreground" />
                      </button>
                    </div>

                    <div className="flex items-center justify-between mt-3">
                      <span className="text-sm font-medium text-foreground">
                        ${lead.value.toLocaleString()}
                      </span>
                      <div className="flex items-center gap-2">
                        {lead.score >= 80 && <Flame size={12} className="text-red-500" />}
                        <span className={`text-xs px-2 py-0.5 rounded-full ${
                          lead.score >= 80 ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400" :
                          lead.score >= 50 ? "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400" :
                          "bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400"
                        }`}>
                          {lead.score}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-1 mt-2 text-xs text-muted-foreground">
                      <Clock size={10} />
                      <span>{lead.daysInStage}d in stage</span>
                    </div>
                  </div>
                ))}

                {stage.leads.length === 0 && (
                  <div className="border-2 border-dashed border-border rounded-lg p-4 text-center">
                    <p className="text-sm text-muted-foreground">No leads in this stage</p>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
