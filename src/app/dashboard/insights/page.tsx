"use client";

import { useState } from "react";
import { MessageSquare, Send, Sparkles, Bot, TrendingUp, AlertTriangle, Eye } from "lucide-react";

type InsightCard = {
  id: number;
  tone: "win" | "watch" | "alert";
  icon: typeof TrendingUp;
  title: string;
  metric: string;
  action: string;
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
    icon: TrendingUp,
    title: "LinkedIn SQLs",
    metric: "118% of target",
    action: "Hold spend +8% WoW",
  },
  {
    id: 2,
    tone: "watch",
    icon: Eye,
    title: "Meta creative",
    metric: "9 days stale",
    action: "Rotate video assets",
  },
  {
    id: 3,
    tone: "alert",
    icon: AlertTriangle,
    title: "Google ROAS",
    metric: "32% below 3.5",
    action: "Pause bottom 20% queries",
  },
  {
    id: 4,
    tone: "watch",
    icon: Eye,
    title: "Content dwell",
    metric: "+26% on case studies",
    action: "Add nurture sequence",
  },
];

const quickPrompts = [
  "Budget reallocation",
  "ROAS analysis",
  "Copy suggestions",
];

const assistantReplies = [
  "Shift $4.5k from Meta to LinkedIn RevOps carousel.",
  "ROAS dipped from broad match. Suppress 7 queries to recover ~0.4.",
  "3-step: automation wins → -32% manual hours → CTA.",
  "Clone case-study drip for 11% warmer replies.",
];

const toneStyles: Record<InsightCard["tone"], { bg: string; icon: string; border: string }> = {
  win: { bg: "bg-emerald-50 dark:bg-emerald-950/50", icon: "text-emerald-600 dark:text-emerald-400", border: "border-emerald-200 dark:border-emerald-800/50" },
  watch: { bg: "bg-amber-50 dark:bg-amber-950/50", icon: "text-amber-600 dark:text-amber-400", border: "border-amber-200 dark:border-amber-800/50" },
  alert: { bg: "bg-red-50 dark:bg-red-950/50", icon: "text-red-600 dark:text-red-400", border: "border-red-200 dark:border-red-800/50" },
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
      content: "SQLs +12% ahead. 2 risks flagged.",
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
      {/* Header */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500/20 to-purple-600/20 flex items-center justify-center">
          <Sparkles className="w-5 h-5 text-purple-500" />
        </div>
        <div>
          <h1 className="text-xl font-semibold text-foreground">AI Insights</h1>
          <p className="text-sm text-muted-foreground">Today&apos;s pulse</p>
        </div>
      </div>

      {/* Insight Cards - Compact Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        {insightCards.map((card) => {
          const styles = toneStyles[card.tone];
          const Icon = card.icon;
          return (
            <div
              key={card.id}
              className={`${styles.bg} border ${styles.border} rounded-xl p-4 hover:scale-[1.02] transition-transform cursor-pointer`}
            >
              <div className="flex items-center gap-2 mb-2">
                <Icon className={`w-4 h-4 ${styles.icon}`} />
                <span className="text-xs font-medium text-foreground">{card.title}</span>
              </div>
              <p className="text-lg font-semibold text-foreground mb-1">{card.metric}</p>
              <p className="text-xs text-muted-foreground">{card.action}</p>
            </div>
          );
        })}
      </div>

      {/* Chat Section */}
      <div className="bg-card border border-border rounded-xl overflow-hidden">
        {/* Chat Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-border">
          <div className="flex items-center gap-2">
            <MessageSquare className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm font-medium text-foreground">Ask Syntara</span>
          </div>
          <div className="flex gap-1.5">
            {quickPrompts.map((prompt) => (
              <button
                key={prompt}
                type="button"
                onClick={() => sendMessage(prompt)}
                className="px-2.5 py-1 rounded-full bg-secondary text-xs text-foreground hover:bg-muted transition-colors"
              >
                {prompt}
              </button>
            ))}
          </div>
        </div>

        {/* Messages */}
        <div className="h-64 overflow-y-auto p-4 space-y-3 bg-muted/30">
          {messages.map((message) => (
            <div key={message.id} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
              <div className={`max-w-[75%] ${message.role === "user" ? "order-1" : ""}`}>
                <div
                  className={`px-3 py-2 rounded-xl text-sm ${
                    message.role === "user"
                      ? "bg-primary text-primary-foreground rounded-br-sm"
                      : "bg-card border border-border rounded-bl-sm"
                  }`}
                >
                  {message.role === "assistant" && (
                    <Bot className="w-3 h-3 text-accent inline mr-1.5 -mt-0.5" />
                  )}
                  {message.content}
                </div>
                <span className="text-[10px] text-muted-foreground mt-0.5 block px-1">
                  {message.timestamp}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Input */}
        <form
          onSubmit={(event) => {
            event.preventDefault();
            sendMessage(chatInput);
          }}
          className="flex items-center gap-2 p-3 border-t border-border"
        >
          <input
            type="text"
            value={chatInput}
            onChange={(event) => setChatInput(event.target.value)}
            placeholder="Ask anything..."
            className="flex-1 px-3 py-2 rounded-lg bg-muted text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-accent/50"
          />
          <button
            type="submit"
            className="p-2 rounded-lg bg-accent text-white hover:bg-accent/90 transition-colors"
          >
            <Send size={16} />
          </button>
        </form>
      </div>
    </div>
  );
}
