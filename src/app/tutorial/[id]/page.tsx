'use client'

import React, { useState } from 'react'
import { useRouter, useParams } from 'next/navigation'
import { Header } from '@/components/Header'
import { TutorialPage } from '@/components/TutorialPage'
import { AuthModal } from '@/components/AuthModal'
import { Footer } from '@/components/Footer'
import { mockTrainings } from '@/lib/data'

export default function Tutorial() {
  const router = useRouter()
  const params = useParams()
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false)
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login')

  const trainingId = params.id as string
  const training = mockTrainings.find(t => t.id === trainingId)

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

  const handleBack = () => {
    router.push('/')
  }

  if (!training) {
    return (
      <>
        <Header onOpenAuth={openAuthModal} currentPage="home" onNavigate={handleNavigate} />
        <div className="container mx-auto px-4 py-12">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Tutorial Not Found</h1>
            <p className="text-muted-foreground mb-8">The tutorial you're looking for doesn't exist.</p>
            <button 
              onClick={handleBack}
              className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90"
            >
              Back to Home
            </button>
          </div>
        </div>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Header onOpenAuth={openAuthModal} currentPage="home" onNavigate={handleNavigate} />
      <TutorialPage training={training} onBack={handleBack} />
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