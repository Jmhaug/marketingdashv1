"use client";

import { useState } from "react";
import { Brain, MessageSquare, Send, Sparkles, Bot } from "lucide-react";

type InsightCard = {
  id: number;
  tone: "win" | "watch" | "alert";
  label: string;
  title: string;
  summary: string;
  detail: string;
};

type ChatMessage = {
  id: string;
  role: "assistant" | "user";
  content: string;
  timestamp: string;
};

const insightCards: InsightCard[] = [
  {
    id: 1,
    tone: "win",
    label: "Win",
    title: "LinkedIn pipeline pacing",
    summary: "RevOps leaders are driving 118% of SQL target after the new persona split.",
    detail: "Hold spend at +8% week-over-week to keep volume ahead of plan while CPC stays down 14%.",
  },
  {
    id: 2,
    tone: "watch",
    label: "Watch",
    title: "Meta creative fatigue",
    summary: "Creative set B has shipped the same hero assets for 9 days.",
    detail: "Rotate in short-form video or cap impressions at 5/day before CPA creeps above $210.",
  },
  {
    id: 3,
    tone: "alert",
    label: "Alert",
    title: "Automation keyword ROAS dip",
    summary: "32% of Google conversions slipped below 3.5 ROAS yesterday.",
    detail: "Pause the bottom 20% of automation queries and reinvest in brand to recover ~0.4 ROAS.",
  },
  {
    id: 4,
    tone: "watch",
    label: "Watch",
    title: "Content topic surge",
    summary: "Automation case studies earn 26% longer dwell time than the weekly digest.",
    detail: "Queue a follow-up nurture highlighting customer proof and invite to the workspace tour.",
  },
];

const quickPrompts = [
  "Where should we move budget this week?",
  "Why did ROAS change yesterday?",
  "Suggest copy for RevOps campaign",
];

const assistantReplies = [
  "Shift $4.5k from Meta creative set B into LinkedIn RevOps carousel to keep SQL volume ahead of pace.",
  "ROAS dipped after automation keywords matched broad intent searches. Suppressing seven queries would recover ~0.4 ROAS.",
  "Try a 3-step message: highlight automation wins, include proof point (-32% manual hours), close with \"See the workspace.\"",
  "Lifecycle can clone the automation case-study drip you approved last week; expect 11% warmer replies in 3 days.",
];

const toneStyles: Record<InsightCard["tone"], string> = {
  win: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300",
  watch: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300",
  alert: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300",
};

const makeId = () => Math.random().toString(36).slice(2, 9);
const timeLabel = () => new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

export default function AIInsightsPage() {
  const [chatInput, setChatInput] = useState("");
  const [replyIndex, setReplyIndex] = useState(0);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "welcome",
      role: "assistant",
      content: "Morning pulse: SQLs are +12% ahead of target. Two risks flagged (Meta creative fatigue, Google ROAS dip).",
      timestamp: "9:02 AM",
    },
  ]);

  const sendMessage = (text: string) => {
    const sanitized = text.trim();
    if (!sanitized) return;
    const replyContent = assistantReplies[replyIndex % assistantReplies.length];
    setMessages((prev) => {
      const userMessage: ChatMessage = {
        id: makeId(),
        role: "user",
        content: sanitized,
        timestamp: timeLabel(),
      };
      const assistantMessage: ChatMessage = {
        id: makeId(),
        role: "assistant",
        content: replyContent,
        timestamp: "Just now",
      };
      return [...prev, userMessage, assistantMessage];
    });
    setChatInput("");
    setReplyIndex((index) => (index + 1) % assistantReplies.length);
  };

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-xl bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-purple-600 dark:text-purple-300" />
          </div>
          <div>
            <p className="text-xs uppercase tracking-wide text-muted-foreground">AI Workbench</p>
            <h1 className="text-2xl font-semibold text-foreground flex items-center gap-2">
              AI Insights
              <Brain className="w-5 h-5 text-muted-foreground" />
            </h1>
          </div>
        </div>
        <p className="text-sm text-muted-foreground">
          Four fast takes from Syntara AI plus a chat surface to dig into the data.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {insightCards.map((card) => (
          <div key={card.id} className="bg-card border border-border rounded-2xl p-5">
            <div className="flex items-center justify-between mb-3">
              <div>
                <p className="text-xs uppercase tracking-wide text-muted-foreground">{card.summary}</p>
                <h3 className="text-lg font-semibold text-foreground">{card.title}</h3>
              </div>
              <span className={`px-2 py-0.5 rounded-full text-[11px] font-medium ${toneStyles[card.tone]}`}>
                {card.label}
              </span>
            </div>
            <p className="text-sm text-muted-foreground">{card.detail}</p>
          </div>
        ))}
      </div>

      <div className="bg-card border border-border rounded-2xl p-6 flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
            <MessageSquare className="w-5 h-5 text-foreground" />
          </div>
          <div>
            <p className="text-xs uppercase tracking-wide text-muted-foreground">Ask syntara</p>
            <h3 className="text-lg font-semibold text-foreground">Chat with your data</h3>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 text-xs">
          {quickPrompts.map((prompt) => (
            <button
              key={prompt}
              type="button"
              onClick={() => sendMessage(prompt)}
              className="px-3 py-1 rounded-full bg-muted text-foreground hover:bg-secondary"
            >
              {prompt}
            </button>
          ))}
        </div>

        <div className="flex-1 min-h-[260px] border border-dashed border-border rounded-xl p-4 bg-muted/40 overflow-y-auto space-y-4">
          {messages.map((message) => (
            <div key={message.id} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
              <div className="max-w-[80%]">
                <div
                  className={`flex items-center gap-2 text-[11px] mb-1 ${
                    message.role === "user" ? "justify-end text-muted-foreground" : "text-muted-foreground"
                  }`}
                >
                  {message.role === "assistant" && <Bot className="w-4 h-4 text-accent" />}
                  <span>{message.role === "assistant" ? "Syntara AI" : "You"}</span>
                  <span>- {message.timestamp}</span>
                </div>
                <div
                  className={`px-4 py-3 rounded-2xl text-sm ${
                    message.role === "user"
                      ? "bg-primary text-primary-foreground rounded-br-sm"
                      : "bg-card border border-border rounded-bl-sm"
                  }`}
                >
                  {message.content}
                </div>
              </div>
            </div>
          ))}
        </div>

        <form
          onSubmit={(event) => {
            event.preventDefault();
            sendMessage(chatInput);
          }}
          className="flex items-center gap-2"
        >
          <input
            type="text"
            value={chatInput}
            onChange={(event) => setChatInput(event.target.value)}
            placeholder="Ask for a summary, playbook, or action..."
            className="flex-1 px-4 py-2 rounded-lg bg-muted border border-border text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent/40"
          />
          <button
            type="submit"
            className="px-4 py-2 rounded-lg bg-accent text-white text-sm flex items-center gap-1 hover:bg-accent/90"
          >
            <Send size={16} />
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
