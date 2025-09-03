import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Enable AI - Become deeply competent with AI—across work and life',
  description: 'Learn AI skills to cut busywork, level up results, and stay future-ready. Explore curated courses, tutorials, and articles across multiple domains.',
  keywords: 'AI learning, artificial intelligence courses, machine learning tutorials, AI for professionals, technology education',
  authors: [{ name: 'Enable AI Team' }],
  creator: 'Enable AI',
  publisher: 'Enable AI',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Enable AI - Become deeply competent with AI—across work and life',
    description: 'Learn AI skills to cut busywork, level up results, and stay future-ready.',
    url: 'https://enable-ai.com',
    siteName: 'Enable AI',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1738003667850-a2fb736e31b3?w=1200&h=630&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Enable AI Platform',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Enable AI - Become deeply competent with AI—across work and life',
    description: 'Learn AI skills to cut busywork, level up results, and stay future-ready.',
    images: ['https://images.unsplash.com/photo-1738003667850-a2fb736e31b3?w=1200&h=630&fit=crop'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <div className="min-h-screen bg-background">
          {children}
        </div>
      </body>
    </html>
  )
}