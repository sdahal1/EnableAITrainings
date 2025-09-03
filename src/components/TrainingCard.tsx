import React from 'react'
import { Card, CardContent } from './ui/card'
import { Badge } from './ui/badge'
import { Clock, BookOpen, Monitor, FileText } from 'lucide-react'
import { cn } from '../lib/utils'
import { ImageWithFallback } from './figma/ImageWithFallback'

interface Training {
  id: string;
  title: string;
  description: string;
  type: 'tutorial/guide' | 'article/blog' | 'course';
  domains: string[];
  duration: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'All Levels';
  imageUrl: string;
}

interface TrainingCardProps {
  training: Training
  onClick?: () => void
}

export function TrainingCard({ training, onClick }: TrainingCardProps) {
  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'course':
        return <BookOpen className="w-4 h-4" />
      case 'tutorial/guide':
        return <Monitor className="w-4 h-4" />
      case 'article/blog':
        return <FileText className="w-4 h-4" />
      default:
        return <BookOpen className="w-4 h-4" />
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'course':
        return 'bg-primary/10 text-primary border-primary/20'
      case 'tutorial/guide':
        return 'bg-green-100 text-green-700 border-green-200 dark:bg-green-900/20 dark:text-green-400 dark:border-green-800'
      case 'article/blog':
        return 'bg-purple-100 text-purple-700 border-purple-200 dark:bg-purple-900/20 dark:text-purple-400 dark:border-purple-800'
      default:
        return 'bg-primary/10 text-primary border-primary/20'
    }
  }

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Beginner':
        return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400'
      case 'Intermediate':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400'
      case 'Advanced':
        return 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400'
      default:
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400'
    }
  }

  return (
    <Card 
      className={cn(
        "group overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1",
        onClick && "cursor-pointer"
      )}
      onClick={onClick}
    >
      <div className="relative overflow-hidden">
        <ImageWithFallback
          src={training.imageUrl}
          alt={training.title}
          width={400}
          height={240}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute top-3 left-3">
          <Badge 
            variant="secondary" 
            className={cn("flex items-center gap-1.5", getTypeColor(training.type))}
          >
            {getTypeIcon(training.type)}
            {training.type === 'tutorial/guide' ? 'Tutorial' : 
             training.type === 'article/blog' ? 'Article' : 'Course'}
          </Badge>
        </div>
      </div>
      
      <CardContent className="p-6">
        <div className="space-y-3">
          <h3 className="font-semibold text-lg leading-tight line-clamp-2 group-hover:text-primary transition-colors">
            {training.title}
          </h3>
          
          <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
            {training.description}
          </p>
          
          <div className="flex items-center justify-between pt-2">
            <div className="flex items-center gap-1 text-muted-foreground text-xs">
              <Clock className="w-3 h-3" />
              <span>{training.duration}</span>
            </div>
            
            <Badge variant="outline" className={cn("text-xs", getLevelColor(training.level))}>
              {training.level}
            </Badge>
          </div>
          
          {/* Domain tags */}
          {training.domains.length > 0 && (
            <div className="flex flex-wrap gap-1 pt-2">
              {training.domains.map((domain) => (
                <Badge 
                  key={domain} 
                  variant="outline" 
                  className="text-xs bg-muted/50 text-muted-foreground border-muted-foreground/20"
                >
                  {domain}
                </Badge>
              ))}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}