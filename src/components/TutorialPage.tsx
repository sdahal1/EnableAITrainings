import React, { useState, useEffect } from 'react'
import { Button } from './ui/button'
import { Badge } from './ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Separator } from './ui/separator'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion'
import { 
  ArrowLeft, 
  Clock, 
  BookOpen, 
  Monitor, 
  FileText, 
  ExternalLink,
  CheckCircle,
  AlertCircle,
  Info,
  Code,
  Terminal,
  Zap,
  Settings,
  Shield,
  Database,
  Mail,
  Search,
  FileCode,
  GitBranch,
  Target,
  TrendingUp,
  ListChecks,
  ScrollText
} from 'lucide-react'
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

interface TutorialPageProps {
  training: Training
  onBack: () => void
}

// Tutorial sections for the sidebar navigation
const tutorialSections = [
  { id: 'overview', title: 'Overview — what we\'re building', icon: Target },
  { id: 'understanding', title: 'Understanding Amazon Q Developer CLI and MCP', icon: Info },
  { id: 'preparing', title: 'Preparing your environment', icon: Settings },
  { id: 'configuration', title: 'Creating the MCP configuration', icon: FileCode },
  { id: 'agents', title: 'Creating agents to scope your tools', icon: Shield },
  { id: 'workflow', title: 'Building the weekly Asana workflow', icon: TrendingUp },
  { id: 'context', title: 'Managing context and tokens', icon: Database },
  { id: 'security', title: 'Security considerations and best practices', icon: Shield },
  { id: 'learned', title: 'What you learned', icon: CheckCircle }
]

// Amazon Q Developer CLI and MCP Tutorial Content
const tutorialContent = {
  overview: {
    title: "Overview — what we're building",
    content: `
We will create a command‑line workflow that:

* Fetches tasks from a specific Asana project for the past seven days.
* Summarises progress against organisational goals and metrics.
* Drafts a professional weekly email summarising wins, risks and opportunities.
* Sends the email with the report attached via Gmail.

To achieve this we'll extend Amazon Q Developer CLI with Model Context Protocol (MCP) servers for Brave Search, Fetch, Asana and Gmail. We'll then use agents to load only the servers we need for a given session to keep the startup lean. By the end you'll understand how Q CLI communicates with MCP servers and how to secure environment variables and secrets.
    `
  },
  understanding: {
    title: "Understanding Amazon Q Developer CLI and MCP",
    content: `
Amazon Q Developer CLI is a command‑line assistant that can chat in natural language, read and write local files and keep track of context across a session. On its own, the CLI doesn't know about your APIs or services, but it can be extended using Model Context Protocol (MCP) servers.

### What is MCP?

MCP standardises how AI applications connect to external tools. A helpful analogy is that MCP is like a USB‑C port for AI: just as USB‑C lets you plug in different accessories without rewiring your laptop, MCP provides a standard handshake so Q CLI can discover and call tools safely. An MCP system has three roles:

* **Host** – the AI application (in our case, Q CLI) that runs the model and exposes commands to the user.
* **Client** – embedded inside the host; it discovers MCP servers and passes messages back and forth.
* **Server** – an external process that advertises its capabilities and executes tasks on behalf of the host.

During the discovery phase the client asks the server for its capabilities. The server responds with a description of available tools and parameters. Because the protocol negotiates capabilities at runtime, your workflow automatically adapts if the server's API changes (similar to how a USB‑C accessory can add new features without changing your computer).

### Why use MCP servers?

Out of the box, Q CLI cannot call external APIs such as Asana or Gmail. MCP servers act as adapters: each server provides one or more tools that appear within the Q chat session. For example, the Brave Search server exposes search functions, while the Asana server exposes functions to list workspaces, search tasks and retrieve task details. MCP servers communicate with Q CLI via standard input/output (STDIO); the client negotiates commands, and the user must explicitly trust a tool before it executes. Because servers are installed locally, you can control which ones are loaded and ensure that secrets remain in your environment.
    `
  },
  preparing: {
    title: "Preparing your environment",
    content: `
### Prerequisites

* **Operating system**: Linux or macOS (tested on macOS Sonoma). Windows WSL should work but is untested.
* **Node.js and npm**: required for servers distributed via npx such as Brave Search and Asana. Use nvm or Homebrew to install Node 18 LTS.
* **Python/uv (optional)**: If you prefer Python‑based servers (e.g., Fetch), install uv so that uvx is on your PATH. uvx is similar to npx but for Python packages.
* **Asana account**: with a project to report on.
* **Gmail account**: to send emails.
* **Brave Search API key**: sign up at Brave Search API.
* **AWS Builder ID**: required to authenticate the Q CLI.

### Install and authenticate Q CLI

Follow the Amazon Q Developer CLI installation guide for your OS.

Verify the installation:

\`\`\`bash
q --version
\`\`\`

Authenticate using your AWS Builder ID:

\`\`\`bash
q auth login
\`\`\`

Q CLI launches a browser for sign‑in. Once logged in, return to the terminal; you should see a confirmation message.

### Set up environment variables

MCP servers inherit environment variables from your shell. Storing secrets as environment variables avoids hard‑coding them into configuration files. For example, in your \`~/.zshrc\` or \`~/.bash_profile\` add:

\`\`\`bash
# Brave Search API key
export BRAVE_API_KEY="your_brave_key"
# Asana Personal Access Token
export ASANA_ACCESS_TOKEN="your_asana_pat"
# Gmail OAuth/refresh tokens or client credentials if needed
export GMAIL_CLIENT_ID="..."
export GMAIL_CLIENT_SECRET="..."
export GMAIL_REFRESH_TOKEN="..."
\`\`\`

After editing the file, reload your shell (\`source ~/.zshrc\`). Environment variables allow you to reference secrets in the configuration using \`\${VAR_NAME}\`. This technique avoids hard‑coding secrets and supports different keys across environments.
    `
  },
  configuration: {
    title: "Creating the MCP configuration",
    content: `
Q CLI looks for an \`mcp.json\` file in \`~/.aws/amazonq\`. This global file defines which MCP servers to start and how to invoke them. Each server entry specifies a name, a command, a list of arguments, an optional timeout and optionally an env map to override environment variables. If the file is missing or invalid, Q CLI starts without external tools.

### Why use a single configuration file?

Although Q CLI supports both global (\`~/.aws/amazonq/mcp.json\`) and workspace (\`./.amazonq/mcp.json\`) configurations, a known bug causes workspace files to be ignored. Therefore, we recommend maintaining a single global \`mcp.json\` and using agents to control which tools load for each session.

### Example mcp.json with multiple servers

The file below shows a complete configuration with the four servers used in this tutorial. Each server's env references environment variables rather than hard‑coding secrets.

\`\`\`json
{
  "mcpServers": {
    "brave-search": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-brave-search"],
      "timeout": 120000,
      "env": {
        "BRAVE_API_KEY": "\${BRAVE_API_KEY}"
      }
    },
    "fetch": {
      "command": "uvx",
      "args": ["mcp-server-fetch"],
      "timeout": 120000,
      "env": {}
    },
    "asana": {
      "command": "npx",
      "args": ["-y", "@roychri/mcp-server-asana"],
      "timeout": 120000,
      "env": {
        "ASANA_ACCESS_TOKEN": "\${ASANA_ACCESS_TOKEN}"
      }
    },
    "gmail": {
      "command": "npx",
      "args": ["@gongrzhe/server-gmail-autoauth-mcp"],
      "timeout": 120000,
      "env": {
        "GOOGLE_CLIENT_ID": "\${GMAIL_CLIENT_ID}",
        "GOOGLE_CLIENT_SECRET": "\${GMAIL_CLIENT_SECRET}",
        "GOOGLE_REFRESH_TOKEN": "\${GMAIL_REFRESH_TOKEN}"
      }
    }
  }
}
\`\`\`

* **Brave Search** – provided via \`@modelcontextprotocol/server-brave-search\`. Uses your \`BRAVE_API_KEY\` to perform web searches.
* **Fetch** – converts the content of a URL into Markdown for Q to reason over.
* **Asana** – reads tasks and projects; uses your personal access token.
* **Gmail** – drafts and sends emails; uses OAuth credentials or a refresh token.

You can add other servers by including additional objects under \`mcpServers\`. Q CLI lists the number of servers configured at startup. Be mindful that each server increases startup time; keep the configuration lean by only adding servers you intend to use.

### Reloading the configuration

After editing \`mcp.json\`, restart Q CLI. When the CLI starts it logs messages similar to:

\`\`\`
✓ brave-search loaded in 3.5 s
✓ fetch loaded in 2.1 s
✓ asana loaded in 5.2 s
✓ gmail loaded in 7.0 s
✓ 4 of 4 MCP servers initialised
\`\`\`

If a server fails to start due to an invalid configuration or missing dependency, Q CLI will display a warning. Check logs in \`$TMPDIR/qlog\` and ensure that dependencies (e.g., Node.js or uv) are installed.
    `
  },
  agents: {
    title: "Creating agents to scope your tools",
    content: `
Loading every MCP server for every chat session can slow down Q CLI. By default, tools are untrusted; Q will ask for confirmation before running them. Instead of trusting or untrusting tools manually each time, you can create agents. An agent is a named configuration that controls which servers and tools are available for a chat session. This makes your workflow faster and safer.

### Default agent (web utilities)

Create a lightweight agent that only includes Brave Search and Fetch for everyday research:

\`\`\`bash
# Create the agent
q agent create --name web-utility
# Allow only Brave Search and Fetch tools in this agent
/tools trust brave-search
/tools trust fetch
\`\`\`

To use the agent, run:

\`\`\`bash
q chat --agent web-utility
\`\`\`

You can make this the default by adding an alias to your shell:

\`\`\`bash
alias q='q chat --agent web-utility'
\`\`\`

### Asana reporting agent

For our weekly report, we need Asana and Gmail in addition to file writing. Create a dedicated agent:

\`\`\`bash
q agent create --name asana-report
# Trust the tools you need
/tools trust asana_list_workspaces asana_search_tasks asana_get_task
/tools trust gmail_send
/tools trust fs_write
# Optionally trust Brave or Fetch if you want web search in the same session
/tools trust brave-search fetch
\`\`\`

When running your workflow, specify the agent:

\`\`\`bash
q chat --agent asana-report
\`\`\`

Agents let you keep rarely used servers disabled most of the time, reducing startup time and limiting risk.
    `
  },
  workflow: {
    title: "Building the weekly Asana → AI → Email workflow",
    content: `
The following steps assume that your \`mcp.json\` includes all four servers and that you have created an \`asana-report\` agent. Replace project names, workspace names and email addresses with your own values.

### Pull tasks from Asana

Use Q CLI with the trusted Asana tools to retrieve tasks updated in the last seven days. For example:

\`\`\`bash
q chat --agent asana-report \\
  "From Asana project 'Platform' in workspace 'Engineering', retrieve tasks updated in the last 7 days.  Summarise progress aligned to our goal of reducing infrastructure cost by 20 percent, including metrics such as deployment frequency, MTTR and customer NPS.  Save the full report to ~/Desktop/asana-weekly-summary.md."
\`\`\`

This command instructs Q to use the Asana tools (\`asana_list_workspaces\`, \`asana_search_tasks\`, \`asana_get_task\`) along with \`fs_write\` to save the report. Q will ask for confirmation before running each tool. When trusted, Q fetches your tasks, analyses them and writes a Markdown file containing the report.

### Draft the email

Next, ask Q to compose a polished email summarising the report:

\`\`\`bash
q chat --agent asana-report \\
  "Draft a professional weekly email using the Asana report you generated.  Highlight three wins, two risks and two opportunities.  Use a friendly yet concise tone and include a call to action for feedback.  Save the email body to ~/Desktop/asana-weekly-email.md."
\`\`\`

Q uses its language model to craft an email and writes it to the specified file. You can review and edit the file before sending.

### Send the report via Gmail

Finally, send the report as an attachment through the Gmail MCP server:

\`\`\`bash
q chat --agent asana-report \\
  "Send an email to manager@example.com with subject 'Weekly Asana Summary – Week of 2025‑09‑01', body from ~/Desktop/asana-weekly-email.md, and attach ~/Desktop/asana-weekly-summary.md."
\`\`\`

The Gmail server will prompt you to select your Google account and consent to send email on your behalf (depending on how the server handles authentication). After trusting the \`gmail_send\` tool, the email is sent. This completes the automated workflow.
    `
  },
  context: {
    title: "Managing context and tokens",
    content: `
Large context windows can lead to slower responses and increased costs. Q CLI provides built‑in \`/usage\` commands to monitor token usage. Additionally, a new experimental \`/knowledge\` feature allows you to index local directories and reference them without loading the full content into your session. To enable this feature, set:

\`\`\`bash
q settings app.beta true
q settings chat.enableKnowledge true
\`\`\`

After enabling, you can create knowledge bases by adding files or directories and use them in prompts. For example, \`q chat "Use the knowledge tool to reference docs in ~/docs/project when summarising tasks."\` The \`/knowledge\` tool stores semantically indexed content, which reduces the need to repeatedly attach large files and helps avoid context rot.
    `
  },
  security: {
    title: "Security considerations and best practices",
    content: `
### Treat MCP servers like third‑party dependencies

When you add a server to your configuration, you are downloading and executing external code. Only use trusted servers, keep them up to date and scrutinise the commands they run.

### Use environment variables for secrets

Avoid embedding API keys or tokens in your configuration; use \`\${VAR_NAME}\` placeholders instead. Provide a \`.env\` template and instruct users to edit it with their own keys.

### Limit the number of servers loaded

Each additional server increases startup time and memory consumption. Group servers by use case and create agents accordingly.

### Trust tools consciously

By default, all tools are untrusted; Q will prompt for confirmation before calling them. Use \`/tools trust\` to allow a tool only when you are confident it is safe.

### Monitor logs

If a server fails to initialise, check \`$TMPDIR/qlog\` for details and verify that dependencies such as \`npx\` or \`uvx\` are installed.
    `
  },
  learned: {
    title: "What you learned",
    content: `
### Key Takeaways

* How MCP extends Amazon Q Developer CLI by standardising connections to external tools.
* How to configure multiple MCP servers in a single \`mcp.json\` file and reference secrets via environment variables.
* How to create agents that scope the tools available in a chat session to keep Q fast and secure.
* How to build a weekly workflow that pulls tasks from Asana, summarises them, drafts an email and sends it via Gmail using Q CLI.
* Best practices for managing context, using knowledge bases and protecting secrets.

With this foundation you can extend Q CLI further by adding other MCP servers (e.g., GitHub, Slack or cost‑analysis servers) or by writing your own server. Because MCP standardises capability discovery and invocation, your integrations will remain future‑proof as APIs evolve. Happy automating!
    `
  }
}

export function TutorialPage({ training, onBack }: TutorialPageProps) {
  const [activeSection, setActiveSection] = useState('overview')
  const [completedSections, setCompletedSections] = useState<Set<string>>(new Set())

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset

      // Update active section based on scroll position
      const sections = tutorialSections.map(section => ({
        id: section.id,
        element: document.getElementById(section.id)
      })).filter(section => section.element)

      let currentSection = 'overview'
      for (const section of sections) {
        if (section.element && section.element.offsetTop <= scrollTop + 200) {
          currentSection = section.id
        }
      }
      setActiveSection(currentSection)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const markSectionComplete = (sectionId: string) => {
    setCompletedSections(prev => new Set([...prev, sectionId]))
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'course':
        return <BookOpen className="w-5 h-5" />
      case 'tutorial/guide':
        return <Monitor className="w-5 h-5" />
      case 'article/blog':
        return <FileText className="w-5 h-5" />
      default:
        return <BookOpen className="w-5 h-5" />
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

  // Render markdown-style content with proper formatting
  const renderContent = (content: string) => {
    const lines = content.trim().split('\n')
    const elements: React.ReactNode[] = []
    let currentIndex = 0

    while (currentIndex < lines.length) {
      const line = lines[currentIndex]
      
      // Skip empty lines
      if (!line.trim()) {
        currentIndex++
        continue
      }

      // Code blocks
      if (line.startsWith('```')) {
        const language = line.slice(3).trim()
        let codeContent = ''
        currentIndex++
        
        while (currentIndex < lines.length && !lines[currentIndex].startsWith('```')) {
          codeContent += lines[currentIndex] + '\n'
          currentIndex++
        }
        currentIndex++ // Skip closing ```

        elements.push(
          <Card key={currentIndex} className="my-6">
            <CardContent className="p-0">
              <div className="flex items-center justify-between bg-muted px-4 py-3 rounded-t-lg border-b">
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm font-medium text-muted-foreground">{language || 'Code'}</span>
                </div>
              </div>
              <pre className="p-4 overflow-x-auto bg-card">
                <code className="text-sm text-foreground font-mono">{codeContent.trim()}</code>
              </pre>
            </CardContent>
          </Card>
        )
        continue
      }

      // Headers
      if (line.startsWith('### ')) {
        elements.push(
          <h3 key={currentIndex} className="text-xl font-semibold mt-8 mb-4 text-foreground">
            {line.slice(4)}
          </h3>
        )
        currentIndex++
        continue
      }

      // Bullet lists
      if (line.startsWith('* ')) {
        const listItems = []
        while (currentIndex < lines.length && lines[currentIndex].startsWith('* ')) {
          const listLine = lines[currentIndex]
          listItems.push(
            <li key={currentIndex} className="text-foreground mb-2">
              {formatInlineText(listLine.slice(2))}
            </li>
          )
          currentIndex++
        }
        elements.push(
          <ul key={currentIndex} className="list-disc list-inside space-y-2 my-4 ml-4">
            {listItems}
          </ul>
        )
        continue
      }

      // Regular paragraphs
      elements.push(
        <p key={currentIndex} className="text-foreground leading-relaxed mb-4">
          {formatInlineText(line)}
        </p>
      )
      currentIndex++
    }

    return elements
  }

  // Format inline text with bold, code, etc.
  const formatInlineText = (text: string) => {
    return text.split('**').map((part, i) => {
      if (i % 2 === 1) {
        return <strong key={i}>{part}</strong>
      }
      return part.split('`').map((codePart, j) => {
        if (j % 2 === 1) {
          return <code key={j} className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono">{codePart}</code>
        }
        return codePart
      })
    })
  }

  // Only show the new tutorial content for the specific tutorial
  if (training.id !== 'amazon-q-mcp-asana') {
    return (
      <main className="pt-8">
        {/* Hero Section */}
        <section className="py-8 bg-gradient-to-br from-background to-accent/30 border-b">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Back button */}
              <Button 
                variant="ghost" 
                onClick={onBack}
                className="mb-6 -ml-3 hover:bg-muted"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to courses
              </Button>

              <div className="grid lg:grid-cols-3 gap-8 items-start">
                {/* Content Info */}
                <div className="lg:col-span-2">
                  <div className="flex items-center gap-3 mb-4">
                    <Badge className={`flex items-center gap-1.5 ${getTypeColor(training.type)}`}>
                      {getTypeIcon(training.type)}
                      {training.type === 'tutorial/guide' ? 'Tutorial' : 
                       training.type === 'article/blog' ? 'Article' : 'Course'}
                    </Badge>
                    <Badge variant="outline" className={getLevelColor(training.level)}>
                      {training.level}
                    </Badge>
                  </div>

                  <h1 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground">
                    {training.title}
                  </h1>
                  
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    {training.description}
                  </p>

                  <div className="flex items-center gap-6 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{training.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Zap className="w-4 h-4" />
                      <span>{training.domains.join(', ')}</span>
                    </div>
                  </div>
                </div>

                {/* Course Image */}
                <div className="lg:col-span-1">
                  <div className="relative rounded-xl overflow-hidden shadow-lg">
                    <ImageWithFallback
                      src={training.imageUrl}
                      alt={training.title}
                      width={400}
                      height={240}
                      className="w-full h-48 object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Content Coming Soon */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card className="overflow-hidden">
                <CardContent className="p-8">
                  <div className="text-center py-12">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-muted flex items-center justify-center">
                      <Info className="w-8 h-8 text-muted-foreground" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Tutorial Content Coming Soon</h3>
                    <p className="text-muted-foreground">
                      This tutorial is currently being developed. Check back soon for the complete content.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
    )
  }

  return (
    <main className="pt-8">
      {/* Hero Section */}
      <section className="py-8 bg-gradient-to-br from-background to-accent/30 border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Back button */}
            <Button 
              variant="ghost" 
              onClick={onBack}
              className="mb-6 -ml-3 hover:bg-muted"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to courses
            </Button>

            <div className="grid lg:grid-cols-3 gap-8 items-start">
              {/* Content Info */}
              <div className="lg:col-span-2">
                <div className="flex items-center gap-3 mb-4">
                  <Badge className={`flex items-center gap-1.5 ${getTypeColor(training.type)}`}>
                    {getTypeIcon(training.type)}
                    Tutorial
                  </Badge>
                  <Badge variant="outline" className={getLevelColor(training.level)}>
                    {training.level}
                  </Badge>
                </div>

                <h1 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground">
                  {training.title}
                </h1>
                
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  {training.description}
                </p>

                <div className="flex items-center gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{training.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Zap className="w-4 h-4" />
                    <span>{training.domains.join(', ')}</span>
                  </div>
                </div>
              </div>

              {/* Course Image */}
              <div className="lg:col-span-1">
                <div className="relative rounded-xl overflow-hidden shadow-lg">
                  <ImageWithFallback
                    src={training.imageUrl}
                    alt={training.title}
                    width={400}
                    height={240}
                    className="w-full h-48 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tutorial Content with Sidebar */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-4 gap-8">
              {/* Sidebar Navigation */}
              <div className="lg:col-span-1">
                <div className="sticky top-8">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2">
                        <ListChecks className="w-5 h-5" />
                        Contents
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      {tutorialSections.map((section) => {
                        const Icon = section.icon
                        const isActive = activeSection === section.id
                        const isCompleted = completedSections.has(section.id)
                        
                        return (
                          <button
                            key={section.id}
                            onClick={() => scrollToSection(section.id)}
                            className={`w-full text-left p-3 rounded-lg transition-colors flex items-start gap-3 text-sm ${
                              isActive 
                                ? 'bg-primary/10 text-primary border border-primary/20' 
                                : 'hover:bg-muted text-muted-foreground hover:text-foreground'
                            }`}
                          >
                            <div className="flex-shrink-0 mt-0.5">
                              {isCompleted ? (
                                <CheckCircle className="w-4 h-4 text-green-600" />
                              ) : (
                                <Icon className="w-4 h-4" />
                              )}
                            </div>
                            <span className="leading-tight">{section.title}</span>
                          </button>
                        )
                      })}
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Main Content */}
              <div className="lg:col-span-3">
                <div className="space-y-12">
                  {/* Tutorial Banner - only for Amazon Q MCP Asana tutorial */}
                  {training.id === 'amazon-q-mcp-asana' && (
                    <div className="mb-8">
                      <Card className="overflow-hidden">
                        <div className="relative">
                          <ImageWithFallback
                            src={training.imageUrl}
                            alt="Automate Weekly Reports with AI - Asana to Amazon Q CLI (MCP) to Gmail workflow"
                            width={1200}
                            height={400}
                            className="w-full h-48 lg:h-64 object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                        </div>
                      </Card>
                    </div>
                  )}
                  
                  {tutorialSections.map((section) => {
                    const content = tutorialContent[section.id as keyof typeof tutorialContent]
                    return (
                      <div key={section.id} id={section.id} className="scroll-mt-8">
                        <Card className="rounded-t-[29px] rounded-b-[12px]" className="rounded-tl-[14px] rounded-tr-[12px] rounded-bl-[12px] rounded-br-[12px]">
                          <CardHeader className="rounded-t-[29px] rounded-b-[0px] bg-[rgba(137,150,211,0.58)]">
                            <div className="flex items-center justify-between">
                              <CardTitle className="text-2xl flex items-center gap-3">
                                <section.icon className="w-6 h-6 text-primary" />
                                {content.title}
                              </CardTitle>
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => markSectionComplete(section.id)}
                                className={completedSections.has(section.id) ? 'text-green-600' : ''}
                              >
                                <CheckCircle className="w-4 h-4" />
                              </Button>
                            </div>
                          </CardHeader>
                          <CardContent>
                            <div className="prose prose-lg max-w-none">
                              {renderContent(content.content)}
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}