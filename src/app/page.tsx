'use client'

import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { AboutSection } from '@/components/AboutSection'
import { SearchFilters } from '@/components/SearchFilters'
import { TrainingGrid } from '@/components/TrainingGrid'
import { AuthModal } from '@/components/AuthModal'
import { Footer } from '@/components/Footer'
import { Button } from '@/components/ui/button'
import { ChevronRight } from 'lucide-react'
import { mockTrainings, type Training } from '@/lib/data'

export default function HomePage() {
  const router = useRouter()
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false)
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login')
  const [currentPage, setCurrentPage] = useState(1)
  
  // Search and filter state
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedType, setSelectedType] = useState<string>('all')
  const [selectedDomains, setSelectedDomains] = useState<string[]>([])
  const [selectedSkillLevels, setSelectedSkillLevels] = useState<string[]>([])
  const [showAllCourses, setShowAllCourses] = useState(false)
  
  const coursesPerPage = 6

  const openAuthModal = (mode: 'login' | 'register') => {
    setAuthMode(mode)
    setIsAuthModalOpen(true)
  }

  const handleNavigate = (page: 'home' | 'about') => {
    if (page === 'about') {
      router.push('/about')
    } else {
      router.push('/')
    }
  }

  const handleTrainingClick = (training: Training) => {
    router.push(`/tutorial/${training.id}`)
  }

  // Enhanced filtering logic to support multi-domain courses
  const filteredTrainings = mockTrainings.filter((training: Training) => {
    const matchesSearch = training.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         training.description.toLowerCase().includes(searchQuery.toLowerCase())
    
    const matchesType = selectedType === 'all' || training.type === selectedType
    
    // Enhanced domain filtering - check if any selected domain matches any of the training's domains
    const matchesDomains = selectedDomains.length === 0 || 
                          selectedDomains.some(selectedDomain => 
                            training.domains.includes(selectedDomain)
                          )
    
    const matchesSkillLevels = selectedSkillLevels.length === 0 || 
                              selectedSkillLevels.includes(training.level)
    
    return matchesSearch && matchesType && matchesDomains && matchesSkillLevels
  })

  // Handle pagination
  const totalPages = Math.ceil(filteredTrainings.length / coursesPerPage)
  const startIndex = (currentPage - 1) * coursesPerPage
  const endIndex = startIndex + coursesPerPage

  // Get trainings to display based on view mode
  const displayedTrainings = showAllCourses 
    ? filteredTrainings.slice(startIndex, endIndex)
    : filteredTrainings.slice(0, 6)

  const handleViewAllCourses = () => {
    setShowAllCourses(true)
    setCurrentPage(1)
  }

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    // Scroll to top of training grid
    window.scrollTo({ top: 400, behavior: 'smooth' })
  }

  // Reset pagination when filters change
  useEffect(() => {
    setCurrentPage(1)
  }, [searchQuery, selectedType, selectedDomains, selectedSkillLevels])

  return (
    <>
      <Header onOpenAuth={openAuthModal} currentPage="home" onNavigate={handleNavigate} />
      
      {/* Hero Section */}
      <Hero />

      {/* Courses Section - Moved directly after hero */}
      <section id="courses-section" className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Explore Our Learning Resources
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover curated content designed to help you master AI across different domains and skill levels.
            </p>
          </div>

          <SearchFilters
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            selectedType={selectedType}
            onTypeChange={setSelectedType}
            selectedDomains={selectedDomains}
            onDomainsChange={setSelectedDomains}
            selectedSkillLevels={selectedSkillLevels}
            onSkillLevelsChange={setSelectedSkillLevels}
          />

          <TrainingGrid 
            trainings={displayedTrainings} 
            showPagination={showAllCourses}
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
            onTrainingClick={handleTrainingClick}
          />

          {!showAllCourses && filteredTrainings.length > 6 && !searchQuery && selectedType === 'all' && selectedDomains.length === 0 && selectedSkillLevels.length === 0 && (
            <div className="flex justify-center mt-8">
              <Button onClick={handleViewAllCourses} variant="outline" size="lg">
                View All Courses
                <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* About Section - Moved to bottom */}
      <AboutSection />

      {/* Footer */}
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