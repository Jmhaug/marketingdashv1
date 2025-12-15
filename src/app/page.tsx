"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Menu,
  X,
  ArrowRight,
  Zap,
  Shield,
  BarChart3,
  Users,
} from "lucide-react";

function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const links = [
    { href: "#product", label: "Product" },
    { href: "#how-it-works", label: "How it Works" },
    { href: "#solutions", label: "Solutions" },
    { href: "#pricing", label: "Pricing" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-black text-white flex items-center justify-center font-bold text-sm">
              S
            </div>
            <span className="font-bold text-black text-lg">Syntara</span>
          </Link>
          <div className="hidden md:flex items-center gap-8 text-sm">
            {links.map((item) => (
              <Link key={item.label} href={item.href} className="text-gray-700 hover:text-black font-medium">
                {item.label}
              </Link>
            ))}
          </div>
          <div className="hidden md:flex items-center gap-3 text-sm">
            <Link href="/login" className="text-gray-700 hover:text-black font-medium">
              Log In
            </Link>
            <Link
              href="/dashboard"
              className="inline-flex items-center gap-2 bg-black text-white px-5 py-2.5 rounded-lg font-medium hover:bg-gray-900 transition-colors"
            >
              Sign Up
            </Link>
          </div>
          <button
            className="md:hidden p-2 text-black"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden border-t py-4">
            <div className="flex flex-col gap-4 text-sm">
              {links.map((item) => (
                <Link key={item.label} href={item.href} className="text-gray-700">
                  {item.label}
                </Link>
              ))}
              <hr />
              <Link href="/login" className="text-black font-medium">
                Log In
              </Link>
              <Link
                href="/dashboard"
                className="inline-flex items-center justify-center gap-2 bg-black text-white px-5 py-2.5 rounded-lg font-medium"
              >
                Sign Up
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

function HeroSection() {
  return (
    <section className="pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-black leading-tight mb-6">
          See Patterns Your<br />Dashboards Can&apos;t
        </h1>
        <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
          Syntara unifies your data streams and works with real-time, self-learning intelligence.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="/dashboard"
            className="inline-flex items-center gap-2 bg-black text-white px-7 py-3.5 rounded-lg font-medium text-base hover:bg-gray-900 transition-colors"
          >
            Request access
            <ArrowRight size={18} />
          </Link>
          <Link
            href="#demo"
            className="inline-flex items-center gap-2 bg-white border-2 border-gray-200 text-black px-7 py-3.5 rounded-lg font-medium text-base hover:border-gray-300 transition-colors"
          >
            Try Live Demo
          </Link>
        </div>
      </div>
    </section>
  );
}

function LogoSection() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-center text-sm text-gray-500 mb-10 font-medium">Used by the best</p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
          {[
            // Microsoft logo
            <svg key="microsoft" className="h-8 w-8" viewBox="0 0 23 23" fill="none">
              <rect width="11" height="11" fill="#F25022"/>
              <rect x="12" width="11" height="11" fill="#7FBA00"/>
              <rect y="12" width="11" height="11" fill="#00A4EF"/>
              <rect x="12" y="12" width="11" height="11" fill="#FFB900"/>
            </svg>,
            // Apple logo placeholder
            <div key="apple" className="text-gray-400 text-3xl font-bold">
              <svg className="h-9 w-9" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
              </svg>
            </div>,
            // OpenAI logo placeholder
            <div key="openai" className="text-gray-400 text-2xl font-bold">
              <svg className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
                <circle cx="12" cy="12" r="3" fill="currentColor"/>
              </svg>
            </div>,
            // Google logo placeholder
            <div key="google" className="text-gray-400 text-2xl font-bold">
              <svg className="h-8 w-24" viewBox="0 0 92 30" fill="none">
                <text x="0" y="20" className="fill-current font-bold" style={{fontSize: '20px'}}>Google</text>
              </svg>
            </div>,
            // Facebook logo placeholder
            <div key="facebook" className="text-gray-400 text-2xl font-bold">
              <svg className="h-9 w-9" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </div>,
            // Stripe logo placeholder
            <div key="stripe" className="text-gray-400 text-2xl font-bold">
              <svg className="h-8 w-16" viewBox="0 0 60 25" fill="currentColor">
                <path d="M59.64 14.28h-8.06c.19 1.93 1.6 2.55 3.2 2.55 1.64 0 2.96-.37 4.05-.95v3.32a8.33 8.33 0 0 1-4.56 1.1c-4.01 0-6.83-2.5-6.83-7.48 0-4.19 2.39-7.52 6.3-7.52 3.92 0 5.96 3.28 5.96 7.5 0 .4-.04 1.26-.06 1.48zm-5.92-5.62c-1.03 0-2.17.73-2.17 2.58h4.25c0-1.85-1.07-2.58-2.08-2.58zM40.95 20.3c-1.44 0-2.32-.6-2.9-1.04l-.02 4.63-4.12.87V5.57h3.76l.08 1.02a4.7 4.7 0 0 1 3.23-1.29c2.9 0 5.62 2.6 5.62 7.4 0 5.23-2.7 7.6-5.65 7.6zM40 8.95c-.95 0-1.54.34-1.97.81l.02 6.12c.4.44.98.78 1.95.78 1.52 0 2.54-1.65 2.54-3.87 0-2.15-1.04-3.84-2.54-3.84zM28.24 5.57h4.13v14.44h-4.13V5.57zm0-4.7L32.37 0v3.36l-4.13.88V.87zm-4.32 9.35v9.79H19.8V5.57h3.7l.12 1.22c1-1.77 3.07-1.41 3.62-1.22v3.79c-.52-.17-2.29-.43-3.32.86zm-8.55 4.72c0 2.43 2.6 1.68 3.12 1.46v3.36c-.55.3-1.54.54-2.89.54a4.15 4.15 0 0 1-4.27-4.24l.01-13.17 4.02-.86v3.54h3.14V9.1h-3.13v5.85zm-4.91.7c0 2.97-2.31 4.66-5.73 4.66a11.2 11.2 0 0 1-4.46-.93v-3.93c1.38.75 3.1 1.31 4.46 1.31.92 0 1.53-.24 1.53-1C6.26 13.77 0 14.51 0 9.95 0 7.04 2.28 5.3 5.62 5.3c1.36 0 2.72.2 4.09.75v3.88a9.23 9.23 0 0 0-4.1-1.06c-.86 0-1.44.25-1.44.9 0 1.85 6.29.97 6.29 5.88z"/>
              </svg>
            </div>
          ]}
        </div>
      </div>
    </section>
  );
}

function FeaturesSection() {
  const features = [
    {
      icon: Zap,
      title: "Real-time Analytics",
      description: "Get instant insights with our real-time data processing engine that analyzes performance as it happens.",
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-grade encryption and SOC 2 compliance ensure your data stays protected at all times.",
    },
    {
      icon: BarChart3,
      title: "Smart Predictions",
      description: "AI-powered forecasting helps you stay ahead of trends and make data-driven decisions with confidence.",
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Share dashboards, insights, and reports with your team in real-time with granular permissions.",
    },
  ];

  return (
    <section id="product" className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-4">
            Everything you need to understand your data
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Powerful features designed to help you extract meaningful insights from complex data streams.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center mb-4">
                <feature.icon className="text-black" size={24} />
              </div>
              <h3 className="text-lg font-bold text-black mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      <LogoSection />
      <FeaturesSection />
    </main>
  );
}
