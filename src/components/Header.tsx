import React from 'react'
import { Button } from './ui/button'

interface HeaderProps {
  onOpenAuth: (mode: 'login' | 'register') => void
  currentPage: 'home' | 'about'
  onNavigate: (page: 'home' | 'about') => void
}

export function Header({ onOpenAuth, currentPage, onNavigate }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo and brand */}
          <div className="flex items-center">
            <button 
              onClick={() => onNavigate('home')}
              className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
            >
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary text-primary-foreground">
                <svg
                  className="w-4 h-4"
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
              <span className="text-xl font-bold text-foreground">Enable AI</span>
            </button>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <button 
              onClick={() => onNavigate('home')}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                currentPage === 'home' ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              Home
            </button>
            <button 
              onClick={() => onNavigate('about')}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                currentPage === 'about' ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              About Us
            </button>
          </nav>

          {/* Auth buttons */}
          <div className="flex items-center space-x-3">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => onOpenAuth('login')}
              className="hidden sm:inline-flex"
            >
              Login
            </Button>
            <Button 
              size="sm" 
              onClick={() => onOpenAuth('register')}
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}