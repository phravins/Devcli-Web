
import {
    FolderGit2,
    Container,
    Server,
    FileCode,
    Layers,
    Library,
    Bot,
    FolderOpen,
    RefreshCw,
    MoveLeft,
    Terminal,
    Play,
    Check,
    Zap,
    Box,
    Cpu
} from 'lucide-react';

const featureSections = [
    {
        title: 'Core Features',
        description: 'Essential tools for daily development workflow',
        items: [
            {
                id: 'project',
                icon: FolderGit2,
                name: 'Project Creation & Management',
                desc: 'Scaffolding tools that generate complete project structures from templates.',
                details: [
                    'Create projects from predefined templates (Go, Python, React, etc.)',
                    'Smart project naming with automatic incrementing',
                    'Customizable project location with path validation',
                    'Project history tracking and backup functionality',
                    'Automatic package installation (npm install, pip install)'
                ]
            },
            {
                id: 'venv',
                icon: Container,
                name: 'Virtual Environment Wizard',
                desc: 'Comprehensive tool for managing Python venvs and Node modules.',
                details: [
                    'Recursive workspace scanning for environments',
                    'Requirements synchronization (requirements.txt generation)',
                    'Clone entire virtual environment setups',
                    'Package inspection and conflict detection',
                    'Cleanup tools for stale environments'
                ]
            },
            {
                id: 'server',
                icon: Server,
                name: 'Dev Server Launcher',
                desc: 'Intelligent development server manager with log streaming.',
                details: [
                    'Auto-detects correct server command (npm, go run, python)',
                    'Live log streaming with color preservation',
                    'Full-text search and filtering for logs',
                    'Auto-scroll toggle',
                    'Clean server shutdown handling'
                ]
            }
        ]
    },
    {
        title: 'Acceleration',
        description: 'Tools to speed up your coding process',
        items: [
            {
                id: 'boilerplate',
                icon: Layers,
                name: 'Boilerplate Code Generator',
                desc: 'Instant access to common code patterns and architectures.',
                details: [
                    'Ready-to-use snippets for CRUD APIs, Auth, DB connections',
                    'Multi-language support (Go, Python, JS, Rust, C++)',
                    'Project architecture generation',
                    'Save existing projects as reusable templates',
                    'Syntax highlighting preview'
                ]
            },
            {
                id: 'ai',
                icon: Bot,
                name: 'AI Integration',
                desc: 'Built-in AI chat interface for coding assistance.',
                details: [
                    'Support for Ollama, OpenAI, Anthropic, Gemini',
                    'Context-aware code suggestions and explanations',
                    'Configurable system prompts',
                    'Offline mode with local models (Ollama)',
                    'Streaming responses'
                ]
            },
            {
                id: 'snippets',
                icon: Library,
                name: 'Snippet Library',
                desc: 'Personal code snippet storage with search.',
                details: [
                    'Metadata tracking (language, tags, dates)',
                    'Full-text search functionality',
                    'JSON-based storage',
                    'Includes default production-ready snippets'
                ]
            }
        ]
    },
    {
        title: 'Productivity Tools',
        description: 'Utilities to manage your workspace efficiently',
        items: [
            {
                id: 'dashboard',
                icon: Box,
                name: 'Project Dashboard',
                desc: 'Overview of all your projects and their status.',
                details: [
                    'Scans workspace for metadata',
                    'Auto-detects technology stack',
                    'Shows project status (Active, Broken, Archived)',
                    'Sortable by name, date, or status'
                ]
            },
            {
                id: 'task',
                icon: Play,
                name: 'Task Runner',
                desc: 'One-click execution of build and test commands.',
                details: [
                    'Auto-detects tasks from package.json, Makefile, etc.',
                    'Live output streaming',
                    'Support for npm, Go tools, Cargo, Make',
                    'Task categorization'
                ]
            },
            {
                id: 'filemanager',
                icon: FolderOpen,
                name: 'File Manager & Editor',
                desc: 'Keyboard-driven navigation and quick editing.',
                details: [
                    'Tree-style directory navigation with arrow keys',
                    'Fuzzy search for fast access',
                    'Standard file operations (copy, move, delete)',
                    'Built-in lightweight editor with syntax highlighting',
                    'Run Python scripts directly from editor'
                ]
            },
            {
                id: 'create',
                icon: FileCode,
                name: 'Smart File Creator',
                desc: 'Generates config files with best practices.',
                details: [
                    'Templates for .env, Dockerfile, Makefile, GitHub Actions',
                    'Language-specific .gitignore generation',
                    'File preview before saving',
                    'Docker multi-stage build templates'
                ]
            },
            {
                id: 'update',
                icon: RefreshCw,
                name: 'Auto-Update System',
                desc: 'Centralized update management.',
                details: [
                    'Version checking for Go, Python, Node, Rust, etc.',
                    'DevCLI self-update mechanism',
                    'AI provider API key management',
                    'Status display for installed tools'
                ]
            }
        ]
    }
];

export default function DetailedFeatures({ onBack }: { onBack: () => void }) {


    return (
        <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">

                {/* Navigation */}
                <div className="flex items-center justify-between mb-12">
                    <button
                        onClick={onBack}
                        className="group flex items-center gap-2 text-terminal-text-dim hover:text-terminal-green transition-colors"
                    >
                        <MoveLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                        <span>cd ..</span>
                    </button>
                    <div className="flex items-center gap-2 text-terminal-text-dim">
                        <Zap className="w-5 h-5" />
                        <span className="text-sm">features.md</span>
                    </div>
                </div>

                {/* Header */}
                <div className="text-center mb-16 animate-fade-in">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-terminal-green/10 text-terminal-green text-sm font-mono mb-6">
                        <Terminal className="w-4 h-4" />
                        <span>Feature Complete v1.0</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold text-terminal-text mb-6">
                        Everything you need.<br />
                        <span className="text-terminal-text-dim">In one terminal.</span>
                    </h1>
                    <p className="text-terminal-text-dim text-lg max-w-2xl mx-auto leading-relaxed">
                        DevCLI consolidates essential developer tools into a single keyboard-driven interface,
                        eliminating the need to juggle multiple windows and remember dozens of commands.
                    </p>
                </div>

                {/* Feature Sections */}
                <div className="space-y-24">
                    {featureSections.map((section, idx) => (
                        <div key={section.title} className="animate-fade-in" style={{ animationDelay: `${idx * 100}ms` }}>
                            <div className="flex items-baseline gap-4 mb-8 border-b border-terminal-border pb-4">
                                <h2 className="text-2xl font-bold text-terminal-text">{section.title}</h2>
                                <span className="text-terminal-text-dim text-sm hidden sm:inline-block">{section.description}</span>
                            </div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {section.items.map((item) => {
                                    const Icon = item.icon;
                                    return (
                                        <div key={item.id} className="bg-terminal-bg-light border border-terminal-border rounded-xl p-6 hover:border-terminal-green hover:shadow-terminal transition-all duration-300 group">
                                            <div className="w-12 h-12 bg-terminal-bg border border-terminal-border rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform group-hover:border-terminal-green/50">
                                                <Icon className="w-6 h-6 text-terminal-green" />
                                            </div>
                                            <h3 className="text-lg font-bold text-terminal-text mb-2 group-hover:text-terminal-green transition-colors">{item.name}</h3>
                                            <p className="text-terminal-text-dim text-sm mb-6 leading-relaxed">
                                                {item.desc}
                                            </p>
                                            <ul className="space-y-2">
                                                {item.details.map((detail, i) => (
                                                    <li key={i} className="flex items-start gap-2 text-xs text-terminal-text-dim/80">
                                                        <Check className="w-3 h-3 text-terminal-green/70 mt-0.5 flex-shrink-0" />
                                                        <span>{detail}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </div>

                {/* System Requirements */}
                <div className="mt-24 bg-terminal-bg-light border border-terminal-border rounded-xl p-8">
                    <h2 className="text-2xl font-bold text-terminal-text mb-6 flex items-center gap-3">
                        <Cpu className="w-6 h-6 text-terminal-blue" />
                        System Requirements
                    </h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div>
                            <strong className="text-terminal-text block mb-1">Go</strong>
                            <p className="text-terminal-text-dim text-sm">1.21 or higher (for source build)</p>
                        </div>
                        <div>
                            <strong className="text-terminal-text block mb-1">Python</strong>
                            <p className="text-terminal-text-dim text-sm">3.8 or newer (required)</p>
                        </div>
                        <div>
                            <strong className="text-terminal-text block mb-1">Node.js</strong>
                            <p className="text-terminal-text-dim text-sm">Optional (for JS templates)</p>
                        </div>
                        <div>
                            <strong className="text-terminal-text block mb-1">Terminal</strong>
                            <p className="text-terminal-text-dim text-sm">Unicode support required</p>
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <div className="mt-24 text-center">
                    <h3 className="text-2xl font-bold text-terminal-text mb-4">Ready to upgrade your workflow?</h3>
                    <div className="inline-flex items-center gap-2 bg-terminal-bg border border-terminal-border rounded-lg p-3">
                        <span className="text-terminal-green">$</span>
                        <code className="text-terminal-text">go install github.com/phravins/devcli@latest</code>
                    </div>
                </div>

            </div>
        </div>
    );
}
