'use client'

import { Plus, Mic } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-purple-950 to-black text-white flex flex-col overflow-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent opacity-50" />
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-pink-900/20 via-transparent to-transparent opacity-30" />

      {/* Navigation Bar */}
      <nav className="relative z-10 flex items-center justify-between p-4 bg-black/50 backdrop-blur-sm">
        <div className="flex items-center gap-2">
          <div className="relative">
            <img
              src="https://i.pinimg.com/originals/b5/db/46/b5db46949d9005be06ebf248ab1dbb00.gif"
              alt="Profile"
              width={40}
              height={40}
              className="rounded-full border border-purple-500/20"
            />
            <div className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-500 border-2 border-black" />
          </div>
          <div className="text-sm">
            <span className="font-semibold">8K</span>
            <span className="text-gray-400 ml-1">online</span>
            <span className="text-green-500 ml-1">•</span>
          </div>
        </div>

        <div className="absolute left-1/2 -translate-x-1/2">
          <div className="flex items-center gap-2 bg-purple-500/10 rounded-full px-4 py-1.5 shadow-[0_0_15px_rgba(168,85,247,0.5)]">
            <div className="h-5 w-5 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 shadow-[0_0_10px_rgba(168,85,247,0.7)]" />
            <span className="text-sm font-medium">AI Voice Command</span>
          </div>
        </div>

        <button className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full px-4 py-1.5 text-sm font-medium shadow-[0_0_15px_rgba(168,85,247,0.5)] hover:shadow-[0_0_20px_rgba(168,85,247,0.7)] transition-shadow">
          Try Premium
          <Plus className="h-4 w-4" />
        </button>
      </nav>

      {/* Hero Section */}
      <main className="flex-grow flex flex-col items-center justify-center px-4 relative z-10 mt-5">
        <h1 className="text-6xl font-bold tracking-tight mb-24 text-center">
          <div className="text-gray-400">Effortless control</div>
          <div className="bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">with Syncra</div>
        </h1>

        {/* Microphone with Ripple Effect */}
        <div className="relative mb-32 group">
          <div className="absolute inset-0 animate-ping bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full scale-150 group-hover:scale-175 transition-transform duration-500" />
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full scale-125 group-hover:scale-150 transition-transform duration-500" />
          <div className="relative h-24 w-24 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(168,85,247,0.7)] group-hover:shadow-[0_0_40px_rgba(168,85,247,0.9)] transition-shadow duration-500">
            <Mic className="h-12 w-12 text-white" />
          </div>
        </div>

        {/* Bottom Wave Effect */}
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-purple-900/30 via-purple-800/20 to-transparent" />

        {/* Navigation Menu */}
        <div className="relative z-10 mt-auto mb-8">
          <nav className="flex flex-wrap justify-center gap-4">
            {["Home", "Features", "Solutions", "Pricing", "About Us"].map((item) => (
              <Link
                key={item}
                href="#"
                className="px-6 py-2 rounded-full bg-purple-500/10 hover:bg-purple-500/20 transition-colors shadow-[0_0_10px_rgba(168,85,247,0.3)] hover:shadow-[0_0_15px_rgba(168,85,247,0.5)]"
              >
                {item}
              </Link>
            ))}
          </nav>
        </div>
      </main>
    </div>
  )
}