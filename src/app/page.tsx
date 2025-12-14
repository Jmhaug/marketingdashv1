"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ArrowRight, Check, Zap, Shield, BarChart3, Users } from "lucide-react";

// Navigation Component
function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">S</span>
            </div>
            <span className="font-semibold text-lg">Syntara</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="#product" className="text-gray-600 hover:text-black text-sm">
              Product
            </Link>
            <Link href="#how-it-works" className="text-gray-600 hover:text-black text-sm">
              How it Works
            </Link>
            <Link href="#solutions" className="text-gray-600 hover:text-black text-sm">
              Solutions
            </Link>
            <Link href="#pricing" className="text-gray-600 hover:text-black text-sm">
              Pricing
            </Link>
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Link href="/login" className="text-sm font-medium hover:text-gray-600">
              Log In
            </Link>
            <Link
              href="/dashboard"
              className="bg-black text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-800"
            >
              Sign Up
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col gap-4">
              <Link href="#product" className="text-gray-600 hover:text-black text-sm">
                Product
              </Link>
              <Link href="#how-it-works" className="text-gray-600 hover:text-black text-sm">
                How it Works
              </Link>
              <Link href="#solutions" className="text-gray-600 hover:text-black text-sm">
                Solutions
              </Link>
              <Link href="#pricing" className="text-gray-600 hover:text-black text-sm">
                Pricing
              </Link>
              <hr className="border-gray-100" />
              <Link href="/login" className="text-sm font-medium">
                Log In
              </Link>
              <Link
                href="/dashboard"
                className="bg-black text-white px-4 py-2 rounded-lg text-sm font-medium text-center"
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

// Hero Section
function HeroSection() {
  return (
    <section className="pt-32 pb-20 px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-20 right-0 w-[600px] h-[600px] opacity-30 pointer-events-none">
        <svg viewBox="0 0 600 600" className="w-full h-full">
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f3f4f6" />
              <stop offset="100%" stopColor="#e5e7eb" />
            </linearGradient>
          </defs>
          <path
            d="M300,50 Q450,100 500,200 Q550,300 450,400 Q350,500 200,450 Q50,400 100,250 Q150,100 300,50"
            fill="url(#grad1)"
          />
          <ellipse cx="400" cy="200" rx="80" ry="60" fill="#f9fafb" />
          <ellipse cx="200" cy="350" rx="100" ry="70" fill="#f9fafb" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-tight mb-6">
            See Patterns Your Dashboards Can&apos;t
          </h1>
          <p className="text-gray-600 text-lg mb-8 max-w-md">
            Syntara unifies your data streams and works with real-time, self-learning intelligence.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/dashboard"
              className="bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 inline-flex items-center gap-2"
            >
              Request access
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/dashboard"
              className="bg-white text-black px-6 py-3 rounded-lg font-medium border border-gray-300 hover:border-gray-400"
            >
              Try Live Demo
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

// Logo Carousel
function LogoCarousel() {
  const logos = [
    { name: "Microsoft", svg: "M0 0h11v11H0zM12 0h11v11H12zM0 12h11v11H0zM12 12h11v11H12z" },
    { name: "Apple", svg: null },
    { name: "OpenAI", svg: null },
    { name: "Google", svg: null },
    { name: "Meta", svg: null },
    { name: "Stripe", svg: null },
  ];

  return (
    <section className="py-16 px-6 bg-gray-50/50">
      <div className="max-w-7xl mx-auto">
        <p className="text-center text-gray-400 text-sm mb-8">Used by the best</p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16">
          {logos.map((logo) => (
            <div key={logo.name} className="text-gray-400 hover:text-gray-600">
              {logo.name === "Microsoft" && (
                <svg viewBox="0 0 23 23" className="w-6 h-6" fill="currentColor">
                  <path d="M0 0h11v11H0zM12 0h11v11H12zM0 12h11v11H0zM12 12h11v11H12z" />
                </svg>
              )}
              {logo.name === "Apple" && (
                <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
              )}
              {logo.name === "OpenAI" && (
                <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
                  <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364l2.0201-1.1638a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.4043-.6813zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z" />
                </svg>
              )}
              {logo.name === "Google" && (
                <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
              )}
              {logo.name === "Meta" && (
                <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
                  <path d="M12 2.04c-5.5 0-10 4.49-10 10.02 0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02z" />
                </svg>
              )}
              {logo.name === "Stripe" && (
                <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
                  <path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219 2.585.92 3.445 1.574 3.445 2.583 0 .98-.84 1.545-2.354 1.545-1.875 0-4.965-.921-6.99-2.109l-.9 5.555C5.175 22.99 8.385 24 11.714 24c2.641 0 4.843-.624 6.328-1.813 1.664-1.305 2.525-3.236 2.525-5.732 0-4.128-2.524-5.851-6.591-7.305z" />
                </svg>
              )}
              <span className="sr-only">{logo.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Features Section
function FeaturesSection() {
  const features = [
    {
      icon: Zap,
      title: "Real-time Analytics",
      description: "Get instant insights with our real-time data processing engine that analyzes patterns as they emerge.",
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-grade encryption and SOC 2 compliance ensure your data stays protected at all times.",
    },
    {
      icon: BarChart3,
      title: "Smart Predictions",
      description: "AI-powered forecasting helps you stay ahead of trends and make data-driven decisions.",
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Share dashboards, insights, and reports with your team in real-time with granular permissions.",
    },
  ];

  return (
    <section id="product" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Everything you need to understand your data
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Powerful features designed to help you extract meaningful insights from complex data streams.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="p-6 rounded-2xl bg-gray-50 hover:bg-gray-100">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-4 shadow-sm">
                <feature.icon className="w-6 h-6 text-emerald-500" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// How It Works Section
function HowItWorksSection() {
  const steps = [
    {
      step: "01",
      title: "Connect your data",
      description: "Integrate with 100+ data sources including databases, APIs, and cloud services.",
    },
    {
      step: "02",
      title: "Configure your dashboards",
      description: "Build custom dashboards with drag-and-drop widgets and real-time updates.",
    },
    {
      step: "03",
      title: "Get actionable insights",
      description: "Let our AI surface patterns and anomalies you might have missed.",
    },
  ];

  return (
    <section id="how-it-works" className="py-20 px-6 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How it works</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Get started in minutes, not months.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((item) => (
            <div key={item.step} className="text-center md:text-left">
              <div className="text-emerald-400 text-sm font-mono mb-4">{item.step}</div>
              <h3 className="font-semibold text-xl mb-3">{item.title}</h3>
              <p className="text-gray-400">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Pricing Section
function PricingSection() {
  const plans = [
    {
      name: "Starter",
      price: "$29",
      description: "Perfect for small teams getting started",
      features: ["Up to 5 team members", "10 dashboards", "Basic analytics", "Email support"],
      cta: "Start free trial",
      highlighted: false,
    },
    {
      name: "Pro",
      price: "$79",
      description: "For growing teams that need more",
      features: ["Up to 20 team members", "Unlimited dashboards", "Advanced analytics", "Priority support", "Custom integrations"],
      cta: "Start free trial",
      highlighted: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large organizations",
      features: ["Unlimited team members", "Unlimited everything", "Dedicated support", "Custom SLA", "On-premise option"],
      cta: "Contact sales",
      highlighted: false,
    },
  ];

  return (
    <section id="pricing" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, transparent pricing</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose the plan that works best for your team. All plans include a 14-day free trial.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`p-8 rounded-2xl ${
                plan.highlighted
                  ? "bg-black text-white ring-4 ring-emerald-500/20"
                  : "bg-gray-50"
              }`}
            >
              <h3 className="font-semibold text-lg mb-2">{plan.name}</h3>
              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-4xl font-bold">{plan.price}</span>
                {plan.price !== "Custom" && <span className="text-gray-500">/month</span>}
              </div>
              <p className={`text-sm mb-6 ${plan.highlighted ? "text-gray-400" : "text-gray-600"}`}>
                {plan.description}
              </p>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm">
                    <Check className={`w-4 h-4 ${plan.highlighted ? "text-emerald-400" : "text-emerald-500"}`} />
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-3 rounded-lg font-medium ${
                  plan.highlighted
                    ? "bg-white text-black hover:bg-gray-100"
                    : "bg-black text-white hover:bg-gray-800"
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

// CTA Section
function CTASection() {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to see patterns your dashboards can&apos;t?
        </h2>
        <p className="text-gray-600 mb-8">
          Join thousands of teams using Syntara to make better decisions.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/dashboard"
            className="bg-black text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-800 inline-flex items-center gap-2"
          >
            Get started free
            <ArrowRight size={16} />
          </Link>
          <Link
            href="#"
            className="text-black px-8 py-3 rounded-lg font-medium border border-gray-300 hover:border-gray-400"
          >
            Talk to sales
          </Link>
        </div>
      </div>
    </section>
  );
}

// Footer
function Footer() {
  const links = {
    Product: ["Features", "Integrations", "Pricing", "Changelog"],
    Company: ["About", "Blog", "Careers", "Press"],
    Resources: ["Documentation", "Help Center", "Community", "Status"],
    Legal: ["Privacy", "Terms", "Security"],
  };

  return (
    <footer className="py-16 px-6 border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">S</span>
              </div>
              <span className="font-semibold text-lg">Syntara</span>
            </Link>
            <p className="text-gray-500 text-sm">
              See patterns your dashboards can&apos;t.
            </p>
          </div>
          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h4 className="font-semibold text-sm mb-4">{category}</h4>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item}>
                    <Link href="#" className="text-gray-500 hover:text-black text-sm">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 pt-8 border-t border-gray-100 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Syntara. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

// Main Landing Page
export default function LandingPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <LogoCarousel />
      <FeaturesSection />
      <HowItWorksSection />
      <PricingSection />
      <CTASection />
      <Footer />
    </main>
  );
}
