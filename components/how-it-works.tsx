'use client'

import { Mic, Video, Cog, CheckCircle } from "lucide-react"

export function HowItWorks() {
  return (
    <div className="min-h-screen bg-black text-white p-6 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent opacity-50" />
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-pink-900/30 to-blue-900/30 animate-gradient-slow" />
        <div className="absolute inset-0 bg-[linear-gradient(40deg,transparent,rgba(168,85,247,0.2),transparent,rgba(168,85,247,0.2),transparent)] animate-wave" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto">
        <h2 className="text-6xl font-bold mb-16">
          <span className="text-gray-500">How Syncra</span>
          <span className="block text-gray-400">works?</span>
        </h2>

        <div className="space-y-6">
          {/* Activate Syncra Card */}
          <div className="group relative rounded-3xl bg-black/40 backdrop-blur-xl p-8 border border-purple-500/10 hover:border-purple-500/20 transition-all duration-300">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-500/5 to-transparent" />
            <div className="absolute inset-0 rounded-3xl shadow-[inset_0_0_40px_rgba(168,85,247,0.1)]" />
            <div className="relative flex justify-between items-start">
              <div>
                <h3 className="text-2xl font-semibold mb-2">Activate Syncra</h3>
                <p className="text-gray-400">Say "Hey Syncra" to wake up your personal assistant</p>
              </div>
              <div className="p-2 rounded-full bg-purple-500/10">
                <Mic className="w-5 h-5 text-purple-400" />
              </div>
            </div>
          </div>

          {/* Speak Your Command Card */}
          <div className="group relative rounded-3xl bg-gradient-to-br from-purple-900/50 to-pink-900/50 backdrop-blur-xl p-8 border border-purple-500/10 hover:border-purple-500/20 transition-all duration-300">
            <div className="absolute inset-0 rounded-3xl shadow-[inset_0_0_40px_rgba(168,85,247,0.2)]" />
            <div className="relative flex justify-between items-start">
              <div>
                <h3 className="text-2xl font-semibold mb-2">Speak Your Command</h3>
                <p className="text-gray-300">Give any command naturally, from scheduling meetings to controlling smart devices</p>
              </div>
              <div className="p-2 rounded-full bg-purple-500/20">
                <Video className="w-5 h-5 text-purple-300" />
              </div>
            </div>
          </div>

          {/* Syncra Takes Action Card */}
          <div className="group relative rounded-3xl bg-gradient-to-br from-purple-900/40 to-blue-900/40 backdrop-blur-xl p-8 border border-purple-500/10 hover:border-purple-500/20 transition-all duration-300">
            <div className="absolute inset-0 rounded-3xl shadow-[inset_0_0_40px_rgba(168,85,247,0.15)]" />
            <div className="relative flex justify-between items-start">
              <div>
                <h3 className="text-2xl font-semibold mb-2">Syncra Takes Action</h3>
                <p className="text-gray-300">Syncra processes your request instantly and accurately</p>
              </div>
              <div className="p-2 rounded-full bg-purple-500/20">
                <Cog className="w-5 h-5 text-purple-300 animate-spin-slow" />
              </div>
            </div>
          </div>

          {/* Get Results Card */}
          <div className="group relative rounded-3xl bg-black/40 backdrop-blur-xl p-8 border border-purple-500/10 hover:border-purple-500/20 transition-all duration-300">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-500/5 to-transparent" />
            <div className="absolute inset-0 rounded-3xl shadow-[inset_0_0_40px_rgba(168,85,247,0.1)]" />
            <div className="relative flex justify-between items-start">
              <div>
                <h3 className="text-2xl font-semibold mb-2">Get Results</h3>
                <p className="text-gray-400">Enjoy hands-free efficiency as your tasks are completed seamlessly</p>
              </div>
              <div className="p-2 rounded-full bg-purple-500/10">
                <CheckCircle className="w-5 h-5 text-purple-400" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}