"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Menu,
  X,
  ArrowRight,
  ArrowUpRight,
  Check,
  HeartHandshake,
  Feather,
  Compass,
  Users as UsersIcon,
  Quote,
} from "lucide-react";

function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const links = [
    { href: "#product", label: "Product" },
    { href: "#journey", label: "Flow" },
    { href: "#stories", label: "Stories" },
    { href: "#pricing", label: "Pricing" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#fff9f4]/80 backdrop-blur-xl border-b border-[#efe1d4]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-2xl bg-[#1f2533] text-white flex items-center justify-center font-semibold">
              S
            </div>
            <span className="font-semibold text-[#1f2533] tracking-tight">Syntara</span>
          </Link>
          <div className="hidden md:flex items-center gap-8 text-sm text-[#5f5b53]">
            {links.map((item) => (
              <Link key={item.label} href={item.href} className="hover:text-[#1f2533]">
                {item.label}
              </Link>
            ))}
          </div>
          <div className="hidden md:flex items-center gap-3 text-sm">
            <Link href="/login" className="text-[#5f5b53] hover:text-[#1f2533]">
              Log In
            </Link>
            <Link
              href="/dashboard"
              className="inline-flex items-center gap-2 bg-[#1f2533] text-white px-4 py-2 rounded-full font-medium"
            >
              Book a demo
              <ArrowUpRight size={16} />
            </Link>
          </div>
          <button
            className="md:hidden p-2 text-[#1f2533]"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-[#efe1d4] py-4">
            <div className="flex flex-col gap-4 text-sm">
              {links.map((item) => (
                <Link key={item.label} href={item.href} className="text-[#5f5b53]">
                  {item.label}
                </Link>
              ))}
              <hr className="border-[#efe1d4]" />
              <Link href="/login" className="text-[#1f2533]">
                Log In
              </Link>
              <Link
                href="/dashboard"
                className="inline-flex items-center justify-center gap-2 bg-[#1f2533] text-white px-4 py-2 rounded-full font-medium"
              >
                Book a demo
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

function HeroSection() {
  const stats = [
    { label: "People-first insights shipped", value: "428", detail: "this week" },
    { label: "Avg. team adoption", value: "92%", detail: "+14% vs last quarter" },
    { label: "Manual updates removed", value: "-37 hrs", detail: "per teammate" },
  ];

  return (
    <section className="pt-32 pb-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#fffaf5] via-[#f8f4ef] to-transparent" aria-hidden />
      <div
        className="absolute inset-y-10 -right-10 w-[420px] bg-[#f8c8a8] blur-[120px] opacity-50"
        aria-hidden
      />
      <div className="max-w-7xl mx-auto relative">
        <div className="grid lg:grid-cols-[minmax(0,1fr)_420px] gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-[#d47a5a] mb-6">
              <span className="w-6 h-6 rounded-full border border-[#f1d6c2] flex items-center justify-center">◎</span>
              Calm marketing OS
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold text-[#1f2533] leading-tight">
              A marketing nervous system that feels warm, not robotic
            </h1>
            <p className="text-lg text-[#5f5b53] mt-6 max-w-xl">
              Syntara organizes multi-channel data into shared rituals&mdash;weekly pulses, gentle nudges, and
              beautiful workrooms that your team actually wants to check.
            </p>
            <div className="flex flex-wrap gap-4 mt-10">
              <Link
                href="/dashboard"
                className="inline-flex items-center gap-2 rounded-full bg-[#1f2533] text-white px-6 py-3 font-medium"
              >
                Get started free
                <ArrowRight size={16} />
              </Link>
              <Link
                href="#journey"
                className="inline-flex items-center gap-2 rounded-full border border-[#e7ded2] px-6 py-3 text-[#1f2533] font-medium"
              >
                See the flow
                <ArrowUpRight size={16} />
              </Link>
            </div>
            <div className="flex flex-wrap items-center gap-4 mt-10 text-sm text-[#5f5b53]">
              <div className="flex -space-x-2">
                {["AS", "KP", "LM"].map((initials) => (
                  <div
                    key={initials}
                    className="w-9 h-9 rounded-full bg-white border border-[#e7ded2] flex items-center justify-center text-xs font-semibold text-[#5f5b53]"
                  >
                    {initials}
                  </div>
                ))}
              </div>
              <div>
                <p className="font-medium text-[#1f2533]">Loved by brand, ops & finance in 600+ teams</p>
                <p className="text-xs">Weekly rituals, not dashboards</p>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="rounded-3xl border border-[#e7ded2] bg-white/90 p-6 shadow-[0_20px_60px_rgba(31,37,51,0.08)]">
              <div className="flex items-center justify-between mb-6">
                <span className="text-sm text-[#5f5b53]">Weekly pulse</span>
                <span className="text-xs px-3 py-1 rounded-full bg-[#fff1ea] text-[#d47a5a]">Friday 9:00 AM</span>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-[#5f5b53]">Confidence</p>
                    <p className="text-2xl font-semibold text-[#1f2533]">78%</p>
                  </div>
                  <p className="text-sm text-[#5f5b53]">+6 pts since last week</p>
                </div>
                <div className="rounded-2xl bg-[#f9efe5] p-4">
                  <p className="text-sm font-medium text-[#1f2533]">Focus for Monday</p>
                  <p className="text-sm text-[#5f5b53]">Reduce paid social fatigue with softer pacing.</p>
                </div>
              </div>
            </div>
            <div className="rounded-3xl bg-[#1f2533] text-white p-6">
              <div className="flex items-center justify-between mb-4">
                <p className="text-sm text-white/70">Team temperature</p>
                <span className="text-xs px-3 py-1 rounded-full bg-white/10">People Ops</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-4xl font-semibold">+12%</div>
                <p className="text-sm text-white/70 max-w-[200px]">
                  Happier handoffs since we rewrote our weekly sync agenda in Syntara.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-[#e7ded2] bg-white/80 p-4"
                >
                  <p className="text-xs uppercase tracking-wider text-[#d47a5a] mb-1">{stat.detail}</p>
                  <p className="text-xl font-semibold text-[#1f2533]">{stat.value}</p>
                  <p className="text-sm text-[#5f5b53]">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PartnerStrip() {
  const logos = ["Spotify", "Allbirds", "Notion", "Dropbox", "Away", "Headspace"];
  return (
    <section className="py-16 px-6" aria-label="Brand logos">
      <div className="max-w-6xl mx-auto rounded-3xl border border-[#efe1d4] bg-white/80 px-8 py-6">
        <p className="text-center text-xs uppercase tracking-[0.4em] text-[#c5a99d] mb-6">Trusted by thoughtful teams</p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 text-[#bfa899] font-semibold text-sm">
          {logos.map((logo) => (
            <span key={logo}>{logo}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureShowcase() {
  const features = [
    {
      icon: HeartHandshake,
      label: "People-first insights",
      title: "Context in every update",
      description: "Recaps arrive with a tone you set: grounded, candid, and paired with next steps for humans, not robots.",
      detail: "92% of teams open weekly pulses on Monday mornings.",
    },
    {
      icon: Feather,
      label: "Ritual-ready templates",
      title: "Turn chaos into calm cadence",
      description: "Use our templates to run share-outs, launch reviews, client pulses, or build your own with blocks and stories.",
      detail: "Drag, drop, and publish in under 8 minutes.",
    },
    {
      icon: Compass,
      label: "Unified journey",
      title: "A single thread for every launch",
      description: "Connect ad spend, newsletter replies, surveys, and finance actuals to one living workspace you can narrate.",
      detail: "No more tab-hopping or copy/paste screenshots.",
    },
    {
      icon: UsersIcon,
      label: "Shared ownership",
      title: "Invite every partner without friction",
      description: "Granular spaces keep leadership, agency partners, and finance in sync using the same calm source of truth.",
      detail: "Role-aware notes and approvals built in.",
    },
  ];

  return (
    <section id="product" className="py-20 px-6 bg-[#fffdf9]" aria-labelledby="features-heading">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mb-12">
          <p className="text-sm uppercase tracking-[0.4em] text-[#c5a99d] mb-4">Product</p>
          <h2 id="features-heading" className="text-3xl md:text-4xl font-semibold text-[#1f2533] mb-4">
            Built like a studio, not a dashboard
          </h2>
          <p className="text-lg text-[#5f5b53]">
            Each surface is intentionally minimal, tactile, and breathable so your work feels as elegant as your outcome.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-3xl border border-[#efe1d4] bg-white p-6 flex flex-col"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-[#fff1ea] text-[#d47a5a] flex items-center justify-center">
                  <feature.icon size={20} />
                </div>
                <span className="text-sm font-medium text-[#d47a5a]">{feature.label}</span>
              </div>
              <h3 className="text-xl font-semibold text-[#1f2533] mb-2">{feature.title}</h3>
              <p className="text-[#5f5b53] mb-4">{feature.description}</p>
              <p className="text-sm text-[#1f2533] font-medium mt-auto">{feature.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialSection() {
  return (
    <section id="stories" className="py-20 px-6">
      <div className="max-w-5xl mx-auto rounded-[32px] bg-[#1f2533] text-white p-10 md:p-16">
        <div className="flex flex-col md:flex-row gap-10 items-start">
          <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center">
            <Quote size={24} />
          </div>
          <div>
            <p className="text-lg leading-relaxed text-white/80">
              “Running our marketing reviews in Syntara feels like reading a beautiful magazine spread about our own team.
              It changed how finance, brand, and ops talk to each other—no bots, no jargon, just clarity.”
            </p>
            <div className="mt-6">
              <p className="font-semibold">Isabel O&apos;Rourke</p>
              <p className="text-sm text-white/70">VP of Growth, Fieldway</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function JourneySection() {
  const steps = [
    {
      step: "01",
      title: "Connect with intention",
      description: "Pick from 120+ integrations or drag in your own rituals. Only surface what the team actually needs.",
      note: "Average setup: 12 minutes",
    },
    {
      step: "02",
      title: "Design your weekly pulse",
      description: "Blend charts with human notes, celebrations, and next steps. Add audio or canvases for even more context.",
      note: "Templates for every ritual",
    },
    {
      step: "03",
      title: "Share it like a story",
      description: "Send pulses to Slack, email summaries to execs, and open read-only rooms for agencies and clients.",
      note: "Track reads and replies",
    },
  ];

  return (
    <section id="journey" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-sm uppercase tracking-[0.4em] text-[#c5a99d] mb-4">Flow</p>
          <h2 className="text-3xl font-semibold text-[#1f2533] mb-4">Launch calm in three beats</h2>
          <p className="text-[#5f5b53]">No massive implementation. You spin up a ritual, invite collaborators, and start narrating outcomes.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((item) => (
            <div key={item.step} className="rounded-3xl border border-[#efe1d4] p-6">
              <div className="flex items-center justify-between mb-5">
                <span className="text-xs font-semibold text-[#d47a5a]">{item.note}</span>
                <span className="text-sm font-mono text-[#bba08f]">{item.step}</span>
              </div>
              <h3 className="text-xl font-semibold text-[#1f2533] mb-3">{item.title}</h3>
              <p className="text-[#5f5b53]">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PricingSection() {
  const plans = [
    {
      name: "Studio",
      price: "$38",
      description: "For small teams establishing weekly rituals.",
      features: ["Up to 8 collaborators", "3 rituals", "Email & Slack share", "Starter templates"],
      highlighted: false,
      cta: "Start free",
    },
    {
      name: "House",
      price: "$118",
      description: "Marketing, ops, and finance in one calm workspace.",
      features: [
        "Unlimited rituals",
        "Advanced permissions",
        "Workspace automations",
        "Priority support",
      ],
      highlighted: true,
      cta: "Book a tour",
    },
    {
      name: "Collective",
      price: "Custom",
      description: "Agencies, multi-brand groups, or enterprises.",
      features: [
        "Dedicated partner",
        "Custom data residency",
        "Onboarding support",
        "White-glove migration",
      ],
      highlighted: false,
      cta: "Talk to us",
    },
  ];

  return (
    <section id="pricing" className="py-20 px-6 bg-[#fffdf9]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-sm uppercase tracking-[0.4em] text-[#c5a99d] mb-4">Pricing</p>
          <h2 className="text-3xl font-semibold text-[#1f2533] mb-4">Simple plans for growing rituals</h2>
          <p className="text-[#5f5b53]">Every plan includes data refreshes, gentle onboarding, and access to the template library.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-3xl border p-8 flex flex-col ${
                plan.highlighted
                  ? "bg-[#1f2533] border-[#1f2533] text-white"
                  : "bg-white border-[#efe1d4] text-[#1f2533]"
              }`}
            >
              <div className="mb-6">
                <p className="text-sm uppercase tracking-[0.3em] mb-2 opacity-60">{plan.name}</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-semibold">{plan.price}</span>
                  {plan.price !== "Custom" && <span className="text-sm opacity-70">/month</span>}
                </div>
                <p className={`mt-2 text-sm ${plan.highlighted ? "text-white/80" : "text-[#5f5b53]"}`}>
                  {plan.description}
                </p>
              </div>
              <ul className="space-y-3 mb-8 text-sm">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <span
                      className={`inline-flex items-center justify-center w-6 h-6 rounded-full border ${
                        plan.highlighted ? "border-white/40" : "border-[#e7ded2]"
                      }`}
                    >
                      <Check size={14} className={plan.highlighted ? "text-white" : "text-[#d47a5a]"} />
                    </span>
                    <span className={plan.highlighted ? "text-white" : "text-[#1f2533]"}>{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                className={`mt-auto rounded-full px-5 py-3 font-medium ${
                  plan.highlighted
                    ? "bg-white text-[#1f2533]"
                    : "bg-[#f4ede4] text-[#1f2533] hover:bg-[#efe1d4]"
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="px-6 pb-24">
      <div className="max-w-5xl mx-auto rounded-[36px] bg-gradient-to-br from-[#1f2533] via-[#1f2533] to-[#3a2e2b] text-white p-12 relative overflow-hidden">
        <div className="absolute inset-0 opacity-40" aria-hidden>
          <div className="absolute inset-y-0 right-0 w-64 bg-[#ee6c4d] blur-[140px]" />
        </div>
        <div className="relative">
          <p className="text-sm uppercase tracking-[0.4em] text-white/70 mb-4">Next chapter</p>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 max-w-3xl">
            Ready to build a calmer, more human marketing practice?
          </h2>
          <p className="text-white/80 mb-8 max-w-2xl">
            Start with templates or bring your own rituals. Either way, your next update reads like a beautifully crafted
            story.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/dashboard"
              className="inline-flex items-center gap-2 rounded-full bg-white text-[#1f2533] px-6 py-3 font-medium"
            >
              Open the workspace
              <ArrowRight size={16} />
            </Link>
            <Link
              href="mailto:hello@syntara.com"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-white"
            >
              Talk with our team
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const links = {
    Product: ["Rituals", "Templates", "Integrations", "Security"],
    Company: ["About", "Careers", "Press", "Contact"],
    Resources: ["Guides", "Community", "API", "Status"],
    Legal: ["Privacy", "Terms", "DPA"],
  };

  return (
    <footer className="bg-[#111827] text-white px-6 py-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-5 gap-10">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-2xl bg-white text-[#111827] flex items-center justify-center font-semibold">
                S
              </div>
              <span className="font-semibold tracking-tight">Syntara</span>
            </Link>
            <p className="text-white/70 text-sm max-w-sm">
              A calmer way to see the work. Built in Brooklyn, shared with teams around the world.
            </p>
          </div>
          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/60 mb-4">{category}</p>
              <ul className="space-y-2 text-sm text-white/70">
                {items.map((item) => (
                  <li key={item}>
                    <Link href="#" className="hover:text-white">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 pt-8 border-t border-white/10 text-sm text-white/60 flex flex-wrap gap-4 justify-between">
          <p>&copy; {new Date().getFullYear()} Syntara. All rights reserved.</p>
          <p>Designed for human teams, never bots.</p>
        </div>
      </div>
    </footer>
  );
}

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-[#f8f4ef]">
      <Navigation />
      <HeroSection />
      <PartnerStrip />
      <FeatureShowcase />
      <TestimonialSection />
      <JourneySection />
      <PricingSection />
      <CTASection />
      <Footer />
    </main>
  );
}
