'use client'

import { Mic, Settings, Lock, Gauge } from "lucide-react"

export function FeaturesSection() {
  return (
    <div className="min-h-screen bg-black text-white p-6 relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent opacity-50" />
      <div className="fixed inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-pink-900/30 to-blue-900/30 animate-gradient-slow" />
        <div className="absolute inset-0 bg-[linear-gradient(40deg,transparent,rgba(168,85,247,0.2),transparent,rgba(168,85,247,0.2),transparent)] animate-wave" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold mb-16 text-gray-400">
          Why choose
          <span className="block text-white">Syncra?</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Seamless Integration Card */}
          <div className="group relative rounded-3xl bg-black/40 backdrop-blur-xl p-8 border border-purple-500/10 hover:border-purple-500/20 transition-all duration-300">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-500/5 to-transparent" />
            <div className="absolute inset-0 rounded-3xl shadow-[inset_0_0_40px_rgba(168,85,247,0.1)]" />
            <div className="relative">
              <div className="flex justify-between items-start mb-8">
                <h3 className="text-2xl font-semibold">Seamless Integration</h3>
                <div className="p-2 rounded-full bg-purple-500/10">
                  <Mic className="w-5 h-5 text-purple-400" />
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Syncra effortlessly integrates with your existing tools and platforms, ensuring a smooth transition to voice-activated control
              </p>
            </div>
          </div>

          {/* Precision Accuracy Card */}
          <div className="group relative rounded-3xl bg-black/40 backdrop-blur-xl p-8 border border-purple-500/10 hover:border-purple-500/20 transition-all duration-300">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-500/5 to-transparent" />
            <div className="absolute inset-0 rounded-3xl shadow-[inset_0_0_40px_rgba(168,85,247,0.1)]" />
            <div className="relative">
              <div className="flex justify-between items-start mb-8">
                <h3 className="text-2xl font-semibold">Precision Accuracy</h3>
                <div className="p-2 rounded-full bg-purple-500/10">
                  <Gauge className="w-5 h-5 text-purple-400" />
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Our AI is fine-tuned to understand and execute commands with remarkable accuracy, making your voice the ultimate productivity tool
              </p>
            </div>
          </div>

          {/* Customizable Commands Card */}
          <div className="group relative rounded-3xl bg-black/40 backdrop-blur-xl p-8 border border-purple-500/10 hover:border-purple-500/20 transition-all duration-300">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-500/5 to-transparent" />
            <div className="absolute inset-0 rounded-3xl shadow-[inset_0_0_40px_rgba(168,85,247,0.1)]" />
            <div className="relative">
              <div className="flex justify-between items-start mb-8">
                <h3 className="text-2xl font-semibold">Customizable Commands</h3>
                <div className="p-2 rounded-full bg-purple-500/10">
                  <Settings className="w-5 h-5 text-purple-400" />
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Tailor Syncra to fit your specific needs. Create custom voice commands that align perfectly with your workflow
              </p>
            </div>
          </div>

          {/* Secure Reliable Card */}
          <div className="group relative rounded-3xl bg-black/40 backdrop-blur-xl p-8 border border-purple-500/10 hover:border-purple-500/20 transition-all duration-300">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-500/5 to-transparent" />
            <div className="absolute inset-0 rounded-3xl shadow-[inset_0_0_40px_rgba(168,85,247,0.1)]" />
            <div className="relative">
              <div className="flex justify-between items-start mb-8">
                <h3 className="text-2xl font-semibold">Secure Reliable</h3>
                <div className="p-2 rounded-full bg-purple-500/10">
                  <Lock className="w-5 h-5 text-purple-400" />
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed">
                With Syncra, your data is protected by top-notch security protocols, ensuring that your voice commands are both private and safe
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}