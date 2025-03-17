'use client'

import { Mic } from "lucide-react"
import Link from "next/link"

export function TryNow() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden flex flex-col items-center justify-center">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent opacity-50" />
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-pink-900/30 to-blue-900/30 animate-gradient-slow" />
        <div className="absolute inset-0 bg-[linear-gradient(40deg,transparent,rgba(168,85,247,0.2),transparent,rgba(168,85,247,0.2),transparent)] animate-wave" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center gap-24">
        {/* Title */}
        <h1 className="text-7xl font-bold text-center bg-gradient-to-b from-gray-200 via-gray-400 to-gray-600 text-transparent bg-clip-text">
          Try Syncra now
        </h1>

        {/* Microphone Button with Ripple Effect */}
        <button className="group relative transform transition-transform hover:scale-105">
          {/* Ripple Effects */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="w-32 h-32 rounded-full bg-purple-500/10 animate-ping" />
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="w-40 h-40 rounded-full bg-purple-500/5 animate-pulse" />
          </div>
          
          {/* Main Button */}
          <div className="relative h-24 w-24 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-[0_0_30px_rgba(168,85,247,0.5)] group-hover:shadow-[0_0_40px_rgba(168,85,247,0.7)] transition-shadow">
            <Mic className="w-12 h-12 text-white" />
          </div>
        </button>
      </div>

      {/* Navigation Menu */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
        <nav className="flex gap-2 px-6 py-3 rounded-full bg-black/20 backdrop-blur-xl border border-white/10">
          {[
            { name: "Home", href: "#", current: false },
            { name: "Features", href: "/Features", current: false },
            { name: "Solutions", href: "#", current: false },
            { name: "Pricing", href: "#", current: false },
            { name: "About Us", href: "#", current: false },
          ].map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`px-4 py-2 rounded-full transition-colors ${
                item.current
                ? "bg-purple-500/20 text-white"
                : "text-gray-400 hover:text-white hover:bg-purple-500/10"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  )
}