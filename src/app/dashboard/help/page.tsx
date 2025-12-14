"use client";

import { useState } from "react";
import {
  Search,
  BookOpen,
  MessageCircle,
  Video,
  FileQuestion,
  ChevronRight,
  ExternalLink,
  Mail,
} from "lucide-react";

const quickLinks = [
  { title: "Getting Started", description: "Learn the basics of using the platform", icon: BookOpen, articles: 12 },
  { title: "Video Tutorials", description: "Watch step-by-step guides", icon: Video, articles: 8 },
  { title: "FAQ", description: "Frequently asked questions", icon: FileQuestion, articles: 24 },
  { title: "Live Chat", description: "Talk to our support team", icon: MessageCircle, articles: null },
];

const popularArticles = [
  { id: 1, title: "How to create your first dashboard", category: "Getting Started", readTime: "5 min" },
  { id: 2, title: "Connecting data sources", category: "Integrations", readTime: "8 min" },
  { id: 3, title: "Understanding analytics metrics", category: "Analytics", readTime: "6 min" },
  { id: 4, title: "Setting up team permissions", category: "Team Management", readTime: "4 min" },
  { id: 5, title: "Exporting reports and data", category: "Reports", readTime: "3 min" },
  { id: 6, title: "Customizing your workspace", category: "Settings", readTime: "5 min" },
];

const faqs = [
  { question: "How do I reset my password?", answer: "Go to Settings > Security > Change Password, or use the 'Forgot Password' link on the login page." },
  { question: "Can I invite team members?", answer: "Yes! Go to Settings > Team and click 'Invite Member'. You can set their role and permissions." },
  { question: "How do I cancel my subscription?", answer: "Navigate to Settings > Billing and click 'Cancel Subscription'. Your access will continue until the end of the billing period." },
  { question: "Is my data secure?", answer: "We use bank-grade encryption and are SOC 2 compliant. Your data is encrypted both in transit and at rest." },
];

export default function HelpPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  return (
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-2">How can we help you?</h1>
        <p className="text-gray-500">Search our knowledge base or browse categories below</p>

        <div className="max-w-xl mx-auto mt-6">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search for help articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-gray-400 shadow-sm"
            />
          </div>
        </div>
      </div>

      {/* Quick Links */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
        {quickLinks.map((link) => (
          <div
            key={link.title}
            className="bg-white rounded-xl border border-gray-100 p-5 hover:border-gray-200 cursor-pointer group"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="p-2.5 bg-gray-100 rounded-xl group-hover:bg-emerald-100">
                <link.icon className="w-5 h-5 text-gray-600 group-hover:text-emerald-600" />
              </div>
              <ChevronRight size={16} className="text-gray-400 group-hover:text-gray-600" />
            </div>
            <h3 className="font-semibold mb-1">{link.title}</h3>
            <p className="text-sm text-gray-500">{link.description}</p>
            {link.articles && (
              <p className="text-xs text-gray-400 mt-2">{link.articles} articles</p>
            )}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Popular Articles */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl border border-gray-100 p-6">
            <h2 className="text-lg font-semibold mb-4">Popular Articles</h2>
            <div className="space-y-4">
              {popularArticles.map((article) => (
                <div
                  key={article.id}
                  className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-xl cursor-pointer group"
                >
                  <div>
                    <h3 className="font-medium text-sm group-hover:text-emerald-600">{article.title}</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-xs text-gray-500">{article.category}</span>
                      <span className="text-xs text-gray-300">•</span>
                      <span className="text-xs text-gray-500">{article.readTime} read</span>
                    </div>
                  </div>
                  <ChevronRight size={16} className="text-gray-400 group-hover:text-gray-600" />
                </div>
              ))}
            </div>
            <button className="w-full mt-4 py-2 text-sm text-gray-600 hover:text-black flex items-center justify-center gap-1">
              View all articles
              <ExternalLink size={14} />
            </button>
          </div>
        </div>

        {/* FAQs */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl border border-gray-100 p-6">
            <h2 className="text-lg font-semibold mb-4">Frequently Asked</h2>
            <div className="space-y-3">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b border-gray-100 last:border-0 pb-3 last:pb-0">
                  <button
                    onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                    className="w-full text-left flex items-start justify-between gap-2 py-2"
                  >
                    <span className="text-sm font-medium">{faq.question}</span>
                    <ChevronRight
                      size={16}
                      className={`text-gray-400 flex-shrink-0 mt-0.5 transition-transform ${
                        expandedFaq === index ? "rotate-90" : ""
                      }`}
                    />
                  </button>
                  {expandedFaq === index && (
                    <p className="text-sm text-gray-600 pb-2">{faq.answer}</p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Contact Support */}
          <div className="bg-gray-900 rounded-xl p-6 mt-6 text-white">
            <h3 className="font-semibold mb-2">Need more help?</h3>
            <p className="text-sm text-gray-400 mb-4">
              Our support team is available 24/7 to assist you.
            </p>
            <button className="w-full py-2.5 bg-white text-black rounded-lg text-sm font-medium hover:bg-gray-100 flex items-center justify-center gap-2">
              <Mail size={16} />
              Contact Support
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
