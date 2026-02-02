import { useState } from 'react';
import { Copy, Check, Terminal, Download, Package, Apple, Monitor } from 'lucide-react';

interface InstallMethod {
  id: string;
  name: string;
  icon: React.ElementType;
  command: string;
  description: string;
}

const installMethods: InstallMethod[] = [
  {
    id: 'curl',
    name: 'curl (Linux/macOS)',
    icon: Terminal,
    command: 'curl -fsSL https://devcli.sh/install | bash',
    description: 'One-line installer for Unix-like systems',
  },
  {
    id: 'wget',
    name: 'wget (Linux)',
    icon: Terminal,
    command: 'wget -qO- https://devcli.sh/install | bash',
    description: 'Alternative one-line installer using wget',
  },
  {
    id: 'brew',
    name: 'Homebrew (macOS)',
    icon: Apple,
    command: 'brew install devcli',
    description: 'Install via Homebrew package manager',
  },
  {
    id: 'go',
    name: 'Go Install',
    icon: Package,
    command: 'go install github.com/devcli/devcli@latest',
    description: 'Install directly from source with Go',
  },
  {
    id: 'manual',
    name: 'Manual Download',
    icon: Download,
    command: '# Download from GitHub releases\n# https://github.com/devcli/devcli/releases',
    description: 'Download pre-built binaries for your platform',
  },
];

const platformSupport = [
  { name: 'Linux', archs: ['x86_64', 'ARM64', 'ARMv7'], status: 'supported' },
  { name: 'macOS', archs: ['Intel', 'Apple Silicon'], status: 'supported' },
  { name: 'Windows', archs: ['x86_64', 'ARM64'], status: 'supported' },
  { name: 'FreeBSD', archs: ['x86_64'], status: 'beta' },
];

const systemRequirements = [
  { label: 'Go version', value: '1.20 or later', required: true },
  { label: 'Memory', value: '64 MB RAM minimum', required: true },
  { label: 'Disk space', value: '50 MB for binary', required: true },
  { label: 'Terminal', value: 'Any modern terminal emulator', required: true },
];

interface InstallationProps {
  setCurrentView: (view: 'landing' | 'docs' | 'roadmap' | 'features' | 'license' | 'security' | 'code-of-conduct' | 'contributing') => void;
}

export default function Installation({ setCurrentView }: InstallationProps) {
  const [activeMethod, setActiveMethod] = useState<InstallMethod>(installMethods[0]);
  const [copied, setCopied] = useState<string | null>(null);

  const copyCommand = (command: string, id: string) => {
    navigator.clipboard.writeText(command);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-terminal-green">$</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-terminal-text">
              devcli install
            </h2>
          </div>
          <p className="text-terminal-text-dim ml-6">
            Get DevCLI up and running in seconds. Choose your preferred installation method.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Installation Methods */}
          <div className="lg:col-span-2 space-y-6">
            {/* Method Tabs */}
            <div className="flex flex-wrap gap-2">
              {installMethods.map((method) => {
                const Icon = method.icon;
                const isActive = method.id === activeMethod.id;

                return (
                  <button
                    key={method.id}
                    onClick={() => setActiveMethod(method)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg border text-sm transition-all duration-200 ${isActive
                      ? 'bg-terminal-green/10 border-terminal-green text-terminal-green'
                      : 'bg-terminal-bg border-terminal-border text-terminal-text-dim hover:border-terminal-text hover:text-terminal-text'
                      }`}
                  >
                    <Icon className="w-4 h-4" />
                    {method.name}
                  </button>
                );
              })}
            </div>

            {/* Command Display */}
            <div className="terminal-window">
              <div className="terminal-header">
                <div className="terminal-dot terminal-dot-red" />
                <div className="terminal-dot terminal-dot-yellow" />
                <div className="terminal-dot terminal-dot-green" />
                <span className="ml-4 text-terminal-text-dim text-sm">
                  {activeMethod.name}
                </span>
              </div>
              <div className="terminal-body">
                <p className="text-terminal-text-dim text-sm mb-4">
                  {activeMethod.description}
                </p>
                <div className="bg-terminal-bg-light rounded-lg p-4 border border-terminal-border">
                  <div className="flex items-start gap-3">
                    <code className="text-terminal-text flex-1 text-sm whitespace-pre-wrap">
                      {activeMethod.command}
                    </code>
                    <button
                      onClick={() => copyCommand(activeMethod.command, activeMethod.id)}
                      className="p-2 text-terminal-text-dim hover:text-terminal-green transition-colors flex-shrink-0"
                      title="Copy to clipboard"
                    >
                      {copied === activeMethod.id ? (
                        <Check className="w-4 h-4" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Installation Steps */}
            <div className="bg-terminal-bg-light border border-terminal-border rounded-lg p-6">
              <h3 className="text-lg font-semibold text-terminal-text mb-4">
                Post-Installation
              </h3>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-terminal-green/20 rounded-full flex items-center justify-center text-terminal-green font-mono text-sm">
                    1
                  </div>
                  <div>
                    <p className="text-terminal-text font-medium">Verify installation</p>
                    <code className="text-terminal-text-dim text-sm mt-1 block">
                      devcli --version
                    </code>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-terminal-green/20 rounded-full flex items-center justify-center text-terminal-green font-mono text-sm">
                    2
                  </div>
                  <div>
                    <p className="text-terminal-text font-medium">Run first-time setup</p>
                    <code className="text-terminal-text-dim text-sm mt-1 block">
                      devcli init
                    </code>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-terminal-green/20 rounded-full flex items-center justify-center text-terminal-green font-mono text-sm">
                    3
                  </div>
                  <div>
                    <p className="text-terminal-text font-medium">Explore available commands</p>
                    <code className="text-terminal-text-dim text-sm mt-1 block">
                      devcli --help
                    </code>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar Info */}
          <div className="space-y-6">
            {/* Platform Support */}
            <div className="bg-terminal-bg-light border border-terminal-border rounded-lg p-6">
              <h3 className="text-lg font-semibold text-terminal-text mb-4 flex items-center gap-2">
                <Monitor className="w-5 h-5 text-terminal-blue" />
                Platform Support
              </h3>
              <div className="space-y-3">
                {platformSupport.map((platform) => (
                  <div key={platform.name} className="flex items-center justify-between">
                    <div>
                      <span className="text-terminal-text">{platform.name}</span>
                      <span className="text-terminal-text-dim text-xs block">
                        {platform.archs.join(', ')}
                      </span>
                    </div>
                    <span className={`text-xs px-2 py-1 rounded ${platform.status === 'supported'
                      ? 'bg-terminal-green/20 text-terminal-green'
                      : 'bg-terminal-yellow/20 text-terminal-yellow'
                      }`}>
                      {platform.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* System Requirements */}
            <div className="bg-terminal-bg-light border border-terminal-border rounded-lg p-6">
              <h3 className="text-lg font-semibold text-terminal-text mb-4">
                System Requirements
              </h3>
              <div className="space-y-3">
                {systemRequirements.map((req) => (
                  <div key={req.label} className="flex items-center justify-between">
                    <span className="text-terminal-text-dim text-sm">{req.label}</span>
                    <span className="text-terminal-text text-sm">{req.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="bg-terminal-bg-light border border-terminal-border rounded-lg p-6">
              <h3 className="text-lg font-semibold text-terminal-text mb-4">
                Quick Links
              </h3>
              <div className="space-y-2">
                <a
                  href="https://github.com/devcli/devcli"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-terminal-text-dim hover:text-terminal-green transition-colors text-sm"
                >
                  <span>→</span>
                  GitHub Repository
                </a>
                <button
                  onClick={() => {
                    setCurrentView('docs');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="flex items-center gap-2 text-terminal-text-dim hover:text-terminal-green transition-colors text-sm w-full text-left"
                >
                  <span>→</span>
                  Documentation
                </button>
                <a
                  href="https://github.com/devcli/devcli/issues"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-terminal-text-dim hover:text-terminal-green transition-colors text-sm"
                >
                  <span>→</span>
                  Report an Issue
                </a>
                <a
                  href="https://github.com/devcli/devcli/discussions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-terminal-text-dim hover:text-terminal-green transition-colors text-sm"
                >
                  <span>→</span>
                  Community Discussions
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
