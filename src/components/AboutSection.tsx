import React from 'react'
import { Card, CardContent } from './ui/card'
import { Badge } from './ui/badge'
import { Users, Target, Zap, BookOpen } from 'lucide-react'

export function AboutSection() {
  const features = [
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: 'Curated Content',
      description: 'Expert-selected courses, tutorials, and articles across multiple AI domains.'
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Practical Focus',
      description: 'Real-world applications that help you immediately apply AI skills to your work.'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Multi-Domain',
      description: 'Learn AI applications across software development, business, health, and more.'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Skill Progression',
      description: 'Structured learning paths from beginner to advanced levels in each domain.'
    }
  ]

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 bg-primary/10 text-primary border-primary/20">
            Why Choose Enable AI
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Start Your AI Journey Today
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our platform is designed specifically for professionals who want to master AI skills 
            that directly impact their work and productivity. No fluff, just practical knowledge.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="border-border/50 hover:border-primary/50 transition-colors">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  {feature.icon}
                </div>
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            Join professionals already advancing their careers with AI
          </p>
        </div>
      </div>
    </section>
  )
}