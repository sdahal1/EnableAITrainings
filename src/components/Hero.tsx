import React from 'react'
import { ImageWithFallback } from './figma/ImageWithFallback'

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background to-accent/30 py-8 lg:py-12">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left content */}
          <div className="space-y-4">
            <h1 className="text-3xl lg:text-5xl font-bold tracking-tight text-foreground">
              Become deeply competent with AI—
              <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                across work and life
              </span>
            </h1>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Enable AI helps every professional—from developers and teachers to entrepreneurs and creators—learn the AI skills to cut busywork, level up results, and stay future-ready.
            </p>
          </div>

          {/* Right content - Hero image with Enable AI branding */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <ImageWithFallback
                src="/HeroPicture.jpeg"
                alt="Enable AI - Professional AI Education"
                width={1080}
                height={720}
                className="w-full h-[280px] lg:h-[360px] object-cover"
              />
              
              {/* Brand overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
              
              {/* Enable AI Logo/Brand */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-lg">
                  <div className="flex items-center space-x-3">
                    {/* Logo icon */}
                    <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                    </div>
                    {/* Brand text */}
                    <div>
                      <div className="text-lg font-bold text-foreground">Enable AI</div>
                      <div className="text-sm text-muted-foreground">Professional AI Trainings</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-3 -right-3 w-16 h-16 bg-primary/10 rounded-full blur-xl"></div>
            <div className="absolute -bottom-3 -left-3 w-20 h-20 bg-blue-500/10 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  )
}