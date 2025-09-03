import React from 'react'
import { Card, CardContent } from './ui/card'
import { Badge } from './ui/badge'
import { Button } from './ui/button'
import { Users, Target, Lightbulb, ArrowRight } from 'lucide-react'
import { ImageWithFallback } from './figma/ImageWithFallback'

interface AboutPageProps {
  totalCourses?: number;
}

export function AboutPage({ totalCourses = 0 }: AboutPageProps) {
  const teamMembers = [
    {
      name: 'Founder & Educator',
      role: 'CEO of Enable AI',
      image: '/src/assets/profileImage.png',
      bio: 'Cloud Software Development Trainer and Speaker with expertise in making complex technical concepts accessible. Former engineer and trainer at Oracle, various coding bootcamps, and built training programs at AWS.'
    }
  ]

  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Practical First',
      description: 'Every course is designed to solve real workplace challenges, not just teach theory.'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Inclusive Learning',
      description: 'AI education for professionals across all industries and technical backgrounds.'
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: 'Continuous Innovation',
      description: 'We constantly update our content to reflect the latest AI developments and best practices.'
    }
  ]

  return (
    <main className="pt-8">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-background to-accent/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-6 bg-primary/10 text-primary border-primary/20">
              About Enable AI
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Democratizing AI Education for 
              <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                {' '}Every Professional
              </span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              We believe that AI literacy shouldn't be limited to data scientists and engineers. 
              Every professional deserves to understand and leverage AI to enhance their work and career.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                The AI revolution is happening now, but most educational resources are either too technical 
                for general professionals or too shallow to create real competence. We bridge this gap by 
                offering domain-specific AI education that professionals can immediately apply.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                From developers learning to integrate AI APIs to business leaders understanding AI strategy, 
                from teachers exploring AI tools to healthcare workers leveraging AI for better outcomes—we 
                provide the practical knowledge needed for your specific field.
              </p>
              <Button size="lg" className="group">
                Start Learning Today
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            <div className="relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbiUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzU1Nzk0NzI2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Team collaboration and learning"
                width={600}
                height={400}
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These principles guide everything we do, from content creation to community building.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our diverse team combines deep AI expertise with practical teaching experience 
              across multiple industries.
            </p>
          </div>

          <div className="flex justify-center">
            <div className="max-w-md">
              {teamMembers.map((member, index) => (
                <Card key={index} className="text-center overflow-hidden">
                  <div className="relative">
                    <ImageWithFallback
                      src={member.image}
                      alt={member.name}
                      width={400}
                      height={300}
                      className="w-full h-48 object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                    <p className="text-primary font-medium mb-3">{member.role}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {member.bio}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">{totalCourses}</div>
              <div className="text-muted-foreground">Learning Resources</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">6</div>
              <div className="text-muted-foreground">Professional Domains</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">3</div>
              <div className="text-muted-foreground">Content Types</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}