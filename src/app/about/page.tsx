'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Header } from '@/components/Header'
import { AboutPage } from '@/components/AboutPage'
import { AuthModal } from '@/components/AuthModal'
import { Footer } from '@/components/Footer'
import { mockTrainings } from '@/lib/data'

export default function About() {
  const router = useRouter()
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false)
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login')

  const openAuthModal = (mode: 'login' | 'register') => {
    setAuthMode(mode)
    setIsAuthModalOpen(true)
  }

  const handleNavigate = (page: 'home' | 'about') => {
    if (page === 'home') {
      router.push('/')
    } else {
      router.push('/about')
    }
  }

  return (
    <>
      <Header onOpenAuth={openAuthModal} currentPage="about" onNavigate={handleNavigate} />
      <AboutPage totalCourses={mockTrainings.length} />
      <Footer />
      
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        mode={authMode}
        onModeChange={setAuthMode}
      />
    </>
  )
}