import React from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { Badge } from './ui/badge'
import { Checkbox } from './ui/checkbox'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select'
import { Card, CardContent } from './ui/card'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from './ui/collapsible'
import { Search, Filter, X, ChevronDown } from 'lucide-react'
import { cn } from '../lib/utils'

interface SearchFiltersProps {
  searchQuery: string
  onSearchChange: (query: string) => void
  selectedType: string
  onTypeChange: (type: string) => void
  selectedDomains: string[]
  onDomainsChange: (domains: string[]) => void
  selectedSkillLevels: string[]
  onSkillLevelsChange: (levels: string[]) => void
}

const domains = [
  'Software Development',
  'Business',
  'Health/Fitness', 
  'Public Speaking',
  'Finance',
  'Education'
]

const skillLevels = [
  'Beginner',
  'Intermediate', 
  'Advanced',
  'All Levels'
]

export function SearchFilters({
  searchQuery,
  onSearchChange,
  selectedType,
  onTypeChange,
  selectedDomains,
  onDomainsChange,
  selectedSkillLevels,
  onSkillLevelsChange
}: SearchFiltersProps) {
  const [isFiltersExpanded, setIsFiltersExpanded] = React.useState(false)

  const handleDomainChange = (domain: string, checked: boolean) => {
    if (checked) {
      onDomainsChange([...selectedDomains, domain])
    } else {
      onDomainsChange(selectedDomains.filter(d => d !== domain))
    }
  }

  const handleSkillLevelChange = (level: string, checked: boolean) => {
    if (checked) {
      onSkillLevelsChange([...selectedSkillLevels, level])
    } else {
      onSkillLevelsChange(selectedSkillLevels.filter(l => l !== level))
    }
  }

  const clearAllFilters = () => {
    onSearchChange('')
    onTypeChange('all')
    onDomainsChange([])
    onSkillLevelsChange([])
  }

  const hasActiveFilters = searchQuery || selectedType !== 'all' || selectedDomains.length > 0 || selectedSkillLevels.length > 0

  return (
    <div className="space-y-4 mb-8">
      {/* Search bar */}
      <div className="relative max-w-md mx-auto">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
        <Input
          type="text"
          placeholder="Search courses, tutorials, and articles..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="pl-10 bg-input-background border-border"
        />
      </div>

      {/* Filter toggle and active filters */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <Collapsible 
          open={isFiltersExpanded} 
          onOpenChange={setIsFiltersExpanded}
          className="w-full"
        >
          <div className="flex items-center justify-between">
            <CollapsibleTrigger asChild>
              <Button variant="outline" className="flex items-center gap-2">
                <Filter className="w-4 h-4" />
                Filters
                <ChevronDown className={cn("w-4 h-4 transition-transform", isFiltersExpanded && "rotate-180")} />
              </Button>
            </CollapsibleTrigger>
            
            {hasActiveFilters && (
              <Button variant="ghost" size="sm" onClick={clearAllFilters} className="text-muted-foreground">
                <X className="w-4 h-4 mr-1" />
                Clear all
              </Button>
            )}
          </div>

          <CollapsibleContent className="mt-4">
            <Card>
              <CardContent className="p-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Content Type Filter */}
                  <div className="space-y-3">
                    <h4 className="font-medium text-sm">Content Type</h4>
                    <Select value={selectedType} onValueChange={onTypeChange}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Types</SelectItem>
                        <SelectItem value="course">Courses</SelectItem>
                        <SelectItem value="tutorial/guide">Tutorials</SelectItem>
                        <SelectItem value="article/blog">Articles</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Domain Filter */}
                  <div className="space-y-3">
                    <h4 className="font-medium text-sm">Domain</h4>
                    <div className="space-y-2 max-h-32 overflow-y-auto">
                      {domains.map((domain) => (
                        <div key={domain} className="flex items-center space-x-2">
                          <Checkbox
                            id={`domain-${domain}`}
                            checked={selectedDomains.includes(domain)}
                            onCheckedChange={(checked) => handleDomainChange(domain, !!checked)}
                          />
                          <label
                            htmlFor={`domain-${domain}`}
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                          >
                            {domain}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Skill Level Filter */}
                  <div className="space-y-3">
                    <h4 className="font-medium text-sm">Skill Level</h4>
                    <div className="space-y-2">
                      {skillLevels.map((level) => (
                        <div key={level} className="flex items-center space-x-2">
                          <Checkbox
                            id={`level-${level}`}
                            checked={selectedSkillLevels.includes(level)}
                            onCheckedChange={(checked) => handleSkillLevelChange(level, !!checked)}
                          />
                          <label
                            htmlFor={`level-${level}`}
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                          >
                            {level}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </CollapsibleContent>
        </Collapsible>
      </div>

      {/* Active filter badges */}
      {hasActiveFilters && (
        <div className="flex flex-wrap gap-2">
          {selectedType !== 'all' && (
            <Badge variant="secondary" className="flex items-center gap-1">
              Type: {selectedType === 'tutorial/guide' ? 'Tutorial' : selectedType === 'article/blog' ? 'Article' : 'Course'}
              <button onClick={() => onTypeChange('all')} className="ml-1 hover:bg-secondary-foreground/20 rounded-full p-0.5">
                <X className="w-3 h-3" />
              </button>
            </Badge>
          )}
          {selectedDomains.map((domain) => (
            <Badge key={domain} variant="secondary" className="flex items-center gap-1">
              {domain}
              <button 
                onClick={() => onDomainsChange(selectedDomains.filter(d => d !== domain))} 
                className="ml-1 hover:bg-secondary-foreground/20 rounded-full p-0.5"
              >
                <X className="w-3 h-3" />
              </button>
            </Badge>
          ))}
          {selectedSkillLevels.map((level) => (
            <Badge key={level} variant="secondary" className="flex items-center gap-1">
              {level}
              <button 
                onClick={() => onSkillLevelsChange(selectedSkillLevels.filter(l => l !== level))} 
                className="ml-1 hover:bg-secondary-foreground/20 rounded-full p-0.5"
              >
                <X className="w-3 h-3" />
              </button>
            </Badge>
          ))}
        </div>
      )}
    </div>
  )
}