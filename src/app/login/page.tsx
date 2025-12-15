"use client";

import Link from "next/link";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <div className="min-h-screen bg-[#f8f4ef] grid lg:grid-cols-2">
      {/* Left Panel - Form */}
      <div className="flex flex-col items-center justify-center p-8">
        <div className="w-full max-w-md">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 mb-8">
            <div className="w-9 h-9 bg-[#1f2533] rounded-2xl flex items-center justify-center text-white font-semibold">
              S
            </div>
            <span className="font-semibold text-lg text-[#1f2533]">Syntara</span>
          </Link>

          <h1 className="text-3xl font-semibold text-[#1f2533] mb-2">
            {isSignUp ? "Create your account" : "Welcome back"}
          </h1>
          <p className="text-[#5f5b53] mb-8">
            {isSignUp
              ? "Start your 14-day free trial. No credit card required."
              : "Enter your credentials to access your account."}
          </p>

          <form className="space-y-4">
            {isSignUp && (
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">First Name</label>
                  <input
                    type="text"
                    placeholder="John"
                    className="w-full px-4 py-2.5 border border-[#e7ded2] rounded-xl text-sm focus:outline-none focus:border-[#d8c7b5] bg-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Last Name</label>
                  <input
                    type="text"
                    placeholder="Doe"
                    className="w-full px-4 py-2.5 border border-[#e7ded2] rounded-xl text-sm focus:outline-none focus:border-[#d8c7b5] bg-white"
                  />
                </div>
              </div>
            )}

            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                placeholder="name@company.com"
                className="w-full px-4 py-2.5 border border-[#e7ded2] rounded-xl text-sm focus:outline-none focus:border-[#d8c7b5] bg-white"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className="w-full px-4 py-2.5 border border-[#e7ded2] rounded-xl text-sm focus:outline-none focus:border-[#d8c7b5] bg-white"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#c5a99d] hover:text-[#986555]"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {!isSignUp && (
              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="rounded border-[#d8c7b5]" />
                  <span className="text-[#5f5b53]">Remember me</span>
                </label>
                <Link href="#" className="text-[#1f2533] hover:underline font-medium">
                  Forgot password?
                </Link>
              </div>
            )}

            {isSignUp && (
              <label className="flex items-start gap-2 text-sm">
                <input type="checkbox" className="rounded border-[#d8c7b5] mt-0.5" />
                <span className="text-[#5f5b53]">
                  I agree to the{" "}
                  <Link href="#" className="text-[#1f2533] hover:underline">
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link href="#" className="text-[#1f2533] hover:underline">
                    Privacy Policy
                  </Link>
                </span>
              </label>
            )}

            <Link
              href="/dashboard"
              className="w-full py-2.5 bg-[#1f2533] text-white rounded-full text-sm font-medium hover:bg-[#151b26] flex items-center justify-center"
            >
              {isSignUp ? "Create account" : "Sign in"}
            </Link>
          </form>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-[#e7ded2]" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-[#f8f4ef] text-[#5f5b53]">or continue with</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <button className="flex items-center justify-center gap-2 px-4 py-2.5 border border-[#e7ded2] rounded-xl text-sm hover:bg-white">
              <svg viewBox="0 0 24 24" className="w-5 h-5">
                <path
                  fill="currentColor"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="currentColor"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="currentColor"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="currentColor"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              Google
            </button>
            <button className="flex items-center justify-center gap-2 px-4 py-2.5 border border-[#e7ded2] rounded-xl text-sm hover:bg-white">
              <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              GitHub
            </button>
          </div>

          <p className="text-center text-sm text-[#5f5b53] mt-8">
            {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
            <button
              onClick={() => setIsSignUp(!isSignUp)}
              className="text-[#1f2533] hover:underline font-medium"
            >
              {isSignUp ? "Sign in" : "Sign up"}
            </button>
          </p>
        </div>
      </div>

      {/* Right Panel - Branding */}
      <div className="hidden lg:flex items-center justify-center p-16 bg-gradient-to-br from-[#1f2533] to-[#49302b] text-white">
        <div className="max-w-md">
          <p className="text-sm uppercase tracking-[0.4em] text-white/70 mb-6">Why teams stay</p>
          <h2 className="text-3xl font-semibold mb-4 leading-snug">
            Weekly rituals that feel curated, not automated.
          </h2>
          <p className="text-white/80 mb-10">
            Walk through journeys, edit recaps side-by-side, and invite finance or clients without another login mess.
          </p>
          <div className="space-y-5">
            {["Ritual templates for every launch", "Voice & audio notes built-in", "Granular sharing with clients"]
              .map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-white/80">{item}</span>
                </div>
              ))}
          </div>

          <div className="mt-12 pt-8 border-t border-white/20">
            <p className="text-sm text-white/60 mb-4">Teams currently onboarding</p>
            <div className="flex items-center gap-6 text-white">
              <span className="font-semibold">Fieldway</span>
              <span className="font-semibold">Brightside</span>
              <span className="font-semibold">Northwind</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
