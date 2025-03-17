'use client'

import { Play } from "lucide-react"

export function AboutSection() {
  return (
    <div className="min-h-screen bg-black text-white p-6 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent opacity-50" />
      
      {/* Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Title */}
        <h2 className="text-7xl font-bold mb-12 text-center bg-gradient-to-b from-gray-300 via-gray-400 to-gray-500 text-transparent bg-clip-text">
          About Syncra
        </h2>

        {/* Video Container */}
        <div className="relative group">
          {/* Main Image/Video Container */}
          <div className="relative rounded-3xl overflow-hidden">
            {/* Background Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/30 to-pink-900/30 mix-blend-overlay" />
            
            {/* Video Thumbnail */}
            <img
              src="https://i.pinimg.com/originals/dd/50/b6/dd50b6932dfd6ff35c020c63f7e1213f.gif?height=600&width=1200"
              alt="Syncra video thumbnail"
              className="w-full aspect-[16/9] object-cover"
            />

            {/* Play Button */}
            <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:scale-110 transition-transform duration-300">
              <div className="relative">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full blur-xl opacity-50 group-hover:opacity-70 transition-opacity" />
                
                {/* Button Background */}
                <div className="relative h-20 w-20 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-[0_0_30px_rgba(168,85,247,0.5)]">
                  <Play className="w-8 h-8 text-white ml-1" />
                </div>
              </div>
            </button>

            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 via-black/50 to-transparent">
              <p className="text-center text-lg font-medium max-w-2xl mx-auto text-gray-100">
                At Syncra, we believe in the power of voice to transform the way you work
              </p>
            </div>
          </div>

          {/* Corner Gradient Effects */}
          <div className="absolute -top-20 -left-20 w-40 h-40 bg-purple-500/30 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-pink-500/30 rounded-full blur-3xl" />
        </div>
      </div>
    </div>
  )
}