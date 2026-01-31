import { useState } from 'react';
import { 
  FolderGit2, 
  Play, 
  Container, 
  Server, 
  FileCode, 
  Layers, 
  Library, 
  Bot, 
  FolderOpen, 
  RefreshCw,
  ChevronRight,
  Check
} from 'lucide-react';

interface Feature {
  id: string;
  icon: React.ElementType;
  name: string;
  command: string;
  description: string;
  details: string[];
  example: string;
  color: string;
}

const features: Feature[] = [
  {
    id: 'project',
    icon: FolderGit2,
    name: 'Project Manager',
    command: 'devcli project',
    description: 'Scaffolding, templates, and history tracking',
    details: [
      'Create projects from 50+ templates',
      'Track recent projects with metadata',
      'One-command project switching',
      'Custom template repository support',
    ],
    example: `$ devcli project new my-app --template react-ts
✓ Created project from template
✓ Installed dependencies
✓ Git initialized

$ devcli project list
  1. my-app (react-ts) - 2 days ago
  2. api-server (go) - 1 week ago
  3. ml-pipeline (python) - 2 weeks ago`,
    color: 'text-terminal-blue',
  },
  {
    id: 'task',
    icon: Play,
    name: 'Task Runner',
    command: 'devcli run',
    description: 'One-click execution of build, test, and lint commands',
    details: [
      'Auto-detects project type and scripts',
      'Supports Go, Python, Node, Rust, C++',
      'Parallel task execution',
      'Custom task definitions in devcli.yaml',
    ],
    example: `$ devcli run
? Select task: (Use arrow keys)
❯ build    - Build the project
  test     - Run test suite
  lint     - Run linter
  dev      - Start development server

$ devcli run build
✓ Building... (3.2s)
✓ Build complete: ./dist/`,
    color: 'text-terminal-green',
  },
  {
    id: 'env',
    icon: Container,
    name: 'Virtual Environment Wizard',
    command: 'devcli env',
    description: 'Centralized management of Python venvs and Node modules',
    details: [
      'Create and manage Python virtualenvs',
      'Node.js version management with nvm',
      'Docker container orchestration',
      'Environment variable management',
    ],
    example: `$ devcli env list
  python    3.11.4    ✓ active
  node      20.5.0    ✓ active
  go        1.21.5    ✓ system

$ devcli env create python 3.12
✓ Creating virtual environment...
✓ Installing requirements...
✓ Activated: myproject-py3.12`,
    color: 'text-terminal-cyan',
  },
  {
    id: 'server',
    icon: Server,
    name: 'Dev Server',
    command: 'devcli serve',
    description: 'Auto-detecting live reload servers for web development',
    details: [
      'Auto-detects framework and config',
      'Live reload on file changes',
      'HTTPS support with local certs',
      'Proxy configuration for APIs',
    ],
    example: `$ devcli serve
✓ Detected: Vite + React + TypeScript
✓ Starting development server...

  ➜  Local:   https://localhost:5173/
  ➜  Network: https://192.168.1.42:5173/
  ➜  press h to show help

[HMR] connected
✓ Ready in 847ms`,
    color: 'text-terminal-yellow',
  },
  {
    id: 'file',
    icon: FileCode,
    name: 'Smart File Creator',
    command: 'devcli create',
    description: 'Instant generation of Dockerfiles, .env, Makefiles, and CI/CD configs',
    details: [
      '50+ file templates available',
      'Context-aware generation',
      'Interactive configuration wizard',
      'Custom template support',
    ],
    example: `$ devcli create
? What would you like to create?
  ❯ Dockerfile
    docker-compose.yml
    .env
    Makefile
    .github/workflows/ci.yml

$ devcli create dockerfile --lang go
✓ Generated Dockerfile (multi-stage build)
✓ Size optimized: 12MB → 4.2MB`,
    color: 'text-terminal-orange',
  },
  {
    id: 'boilerplate',
    icon: Layers,
    name: 'Boilerplate Generator',
    command: 'devcli gen',
    description: 'Instant code snippets and architectural patterns',
    details: [
      'Generate CRUD operations',
      'API endpoint scaffolding',
      'Database models and migrations',
      'Test file generation',
    ],
    example: `$ devcli gen api --resource user
✓ Generated:
  - handlers/user.go
  - models/user.go
  - routes/user.go
  - tests/user_test.go

$ devcli gen crud --orm gorm
? Resource name: Product
? Fields: name:string, price:float, stock:int
✓ CRUD generated with pagination & filtering`,
    color: 'text-terminal-purple',
  },
  {
    id: 'snippet',
    icon: Library,
    name: 'Snippet Library',
    command: 'devcli snippet',
    description: 'Your personal vault for reusable code blocks',
    details: [
      'Save and organize code snippets',
      'Full-text search across snippets',
      'Syntax highlighting for 50+ languages',
      'Sync across devices',
    ],
    example: `$ devcli snippet add
? Snippet name: JWT Auth Middleware
? Language: go
? Tags: auth, middleware, jwt
✓ Snippet saved

$ devcli snippet search "jwt"
  1. JWT Auth Middleware (go)
  2. JWT Refresh Token (typescript)
  3. JWT Claims Parser (python)`,
    color: 'text-terminal-pink',
  },
  {
    id: 'ai',
    icon: Bot,
    name: 'AI Assistant',
    command: 'devcli ai',
    description: 'Built-in chat for coding help, debugging, and explanations',
    details: [
      'Context-aware code suggestions',
      'Debug error messages',
      'Explain complex code',
      'Generate documentation',
    ],
    example: `$ devcli ai
> help me debug this error

Analyzing error: "cannot use db (type *sql.DB) as type Database"

The issue is that your function expects an interface type 
'Database', but you're passing a concrete type '*sql.DB'.

Fix: Ensure *sql.DB implements the Database interface:

var _ Database = (*sql.DB)(nil) // compile-time check`,
    color: 'text-terminal-green-bright',
  },
  {
    id: 'files',
    icon: FolderOpen,
    name: 'File Manager & Editor',
    command: 'devcli files',
    description: 'Keyboard-driven filesystem navigation and quick editing',
    details: [
      'Vim-like keybindings',
      'Fuzzy file finder',
      'Inline file preview',
      'Batch operations support',
    ],
    example: `$ devcli files
📁 ~/projects/my-app
├── 📁 src/
│   ├── 📄 main.tsx
│   ├── 📄 App.tsx
│   └── 📁 components/
├── 📄 package.json
├── 📄 tsconfig.json
└── 📄 README.md

[j] down  [k] up  [l] open  [h] back  [q] quit`,
    color: 'text-terminal-blue',
  },
  {
    id: 'update',
    icon: RefreshCw,
    name: 'Auto-Update System',
    command: 'devcli update',
    description: 'Keeps your languages and tools current',
    details: [
      'Check for tool updates',
      'One-command updates',
      'Rollback to previous versions',
      'Update notifications',
    ],
    example: `$ devcli update check
✓ devcli: v2.4.1 (latest)
⚠ go: v1.21.3 → v1.21.5 available
⚠ node: v18.16.0 → v20.5.0 available
✓ python: v3.11.4 (latest)

$ devcli update all
✓ Updated go to v1.21.5
✓ Updated node to v20.5.0
✓ All tools are up to date`,
    color: 'text-terminal-cyan',
  },
];

export default function Features() {
  const [activeFeature, setActiveFeature] = useState<Feature>(features[0]);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleFeatureClick = (feature: Feature) => {
    if (feature.id === activeFeature.id) return;
    setIsAnimating(true);
    setTimeout(() => {
      setActiveFeature(feature);
      setIsAnimating(false);
    }, 150);
  };

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-terminal-green">$</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-terminal-text">
              devcli --list-features
            </h2>
          </div>
          <p className="text-terminal-text-dim ml-6">
            A unified workspace containing a suite of powerful internal features
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Feature List */}
          <div className="lg:col-span-1 space-y-2">
            {features.map((feature) => {
              const Icon = feature.icon;
              const isActive = feature.id === activeFeature.id;
              
              return (
                <button
                  key={feature.id}
                  onClick={() => handleFeatureClick(feature)}
                  className={`w-full text-left p-4 rounded-lg border transition-all duration-200 group ${
                    isActive
                      ? 'bg-terminal-bg-light border-terminal-green shadow-terminal'
                      : 'bg-terminal-bg border-terminal-border hover:border-terminal-text-dim'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <Icon className={`w-5 h-5 mt-0.5 ${feature.color}`} />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className={`font-medium ${isActive ? 'text-terminal-text' : 'text-terminal-text-dim group-hover:text-terminal-text'}`}>
                          {feature.name}
                        </span>
                        {isActive && (
                          <ChevronRight className="w-4 h-4 text-terminal-green" />
                        )}
                      </div>
                      <p className="text-xs text-terminal-text-dim mt-1 truncate">
                        {feature.command}
                      </p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Feature Detail Terminal */}
          <div className="lg:col-span-2">
            <div className="terminal-window h-full terminal-glow-blue">
              {/* Terminal Header */}
              <div className="terminal-header">
                <div className="terminal-dot terminal-dot-red" />
                <div className="terminal-dot terminal-dot-yellow" />
                <div className="terminal-dot terminal-dot-green" />
                <span className="ml-4 text-terminal-text-dim text-sm">
                  {activeFeature.command} --help
                </span>
              </div>

              {/* Terminal Body */}
              <div className={`terminal-body space-y-6 transition-opacity duration-150 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
                {/* Feature Header */}
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <activeFeature.icon className={`w-6 h-6 ${activeFeature.color}`} />
                    <h3 className="text-xl font-bold text-terminal-text">
                      {activeFeature.name}
                    </h3>
                  </div>
                  <p className="text-terminal-text-dim">
                    {activeFeature.description}
                  </p>
                </div>

                {/* Features List */}
                <div>
                  <p className="text-terminal-text-dim text-sm mb-3"># Key capabilities</p>
                  <ul className="space-y-2">
                    {activeFeature.details.map((detail, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-terminal-green mt-0.5 flex-shrink-0" />
                        <span className="text-terminal-text">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Example Usage */}
                <div>
                  <p className="text-terminal-text-dim text-sm mb-3"># Example usage</p>
                  <pre className="bg-terminal-bg-light rounded-lg p-4 overflow-x-auto text-sm">
                    <code className="text-terminal-text whitespace-pre">
                      {activeFeature.example}
                    </code>
                  </pre>
                </div>

                {/* Quick Action */}
                <div className="flex items-center gap-4 pt-4 border-t border-terminal-border">
                  <span className="text-terminal-text-dim text-sm">Try it:</span>
                  <code className="bg-terminal-bg-light px-3 py-1.5 rounded text-terminal-green text-sm">
                    {activeFeature.command} --help
                  </code>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
