'use client'

import React from 'react'
import Link from 'next/link'
import { Button } from './ui/button'
import { Separator } from './ui/separator'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Twitter, 
  Github, 
  Linkedin,
  BookOpen,
  Users,
  Briefcase,
  GraduationCap
} from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const footerSections = [
    {
      title: 'Learning',
      links: [
        { label: 'All Courses', href: '/' },
        { label: 'Software Development', href: '/?domain=software' },
        { label: 'Business & Leadership', href: '/?domain=business' },
        { label: 'Health & Fitness', href: '/?domain=health' },
        { label: 'Finance', href: '/?domain=finance' },
      ]
    },
    {
      title: 'Company',
      links: [
        { label: 'About Us', href: '/about' },
        { label: 'Our Mission', href: '/about#mission' },
        { label: 'Team', href: '/about#team' }
      ]
    },
    // {
    //   title: 'Support',
    //   links: [
    //     { label: 'Help Center', href: '/help' },
    //     { label: 'Community', href: '/community' },
    //     { label: 'Contact Us', href: '/contact' },
    //     { label: 'System Status', href: '/status' },
    //     { label: 'Bug Reports', href: '/bugs' },
    //   ]
    // },
    // {
    //   title: 'Legal',
    //   links: [
    //     { label: 'Privacy Policy', href: '/privacy' },
    //     { label: 'Terms of Service', href: '/terms' },
    //     { label: 'Cookie Policy', href: '/cookies' },
    //     { label: 'GDPR', href: '/gdpr' },
    //     { label: 'Accessibility', href: '/accessibility' },
    //   ]
    // }
  ]

  const domains = [
    { icon: <BookOpen className="w-4 h-4" />, name: 'Software Development' },
    { icon: <Briefcase className="w-4 h-4" />, name: 'Business' },
    { icon: <Users className="w-4 h-4" />, name: 'Public Speaking' },
    { icon: <GraduationCap className="w-4 h-4" />, name: 'Education' }
  ]

  return (
    <footer className="bg-muted/30 border-t">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="py-12">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <Link href="/" className="flex items-center space-x-2 mb-4">
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
                <span className="text-xl font-bold">Enable AI</span>
              </Link>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Empowering professionals across every industry to master AI skills 
                and stay ahead in the future of work.
              </p>

              {/* Contact Info */}
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>raabdahl@gmail.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>+1 (703) 606-4139</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>Washington DC Metropolitan area</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-2 mt-6">
                {/* <Button variant="ghost" size="sm" className="w-9 h-9 p-0">
                  <Twitter className="w-4 h-4" />
                </Button> */}
                <Button variant="ghost" size="sm" className="w-9 h-9 p-0">
                  <a href="https://github.com/sdahal1">
                    <Github className="w-4 h-4" />
                  </a>
                </Button>
                <Button variant="ghost" size="sm" className="w-9 h-9 p-0">
                  <a href="https://www.linkedin.com/in/saurabhdahal/">
                    <Linkedin className="w-4 h-4" />
                  </a>
                </Button>
              </div>
            </div>

            {/* Footer Links */}
            <div className="lg:col-span-3">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {footerSections.map((section) => (
                  <div key={section.title}>
                    <h4 className="font-semibold mb-3">{section.title}</h4>
                    <ul className="space-y-2">
                      {section.links.map((link) => (
                        <li key={link.label}>
                          <Link 
                            href={link.href}
                            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                          >
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <Separator />

        {/* Bottom Footer */}
        <div className="py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-muted-foreground">
              © {currentYear} Enable AI. All rights reserved.
            </div>
            
            {/* Domain Tags */}
            <div className="flex flex-wrap gap-2">
              {domains.map((domain) => (
                <div 
                  key={domain.name}
                  className="flex items-center gap-1 px-2 py-1 rounded-md bg-muted text-muted-foreground text-xs"
                >
                  {domain.icon}
                  <span>{domain.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}