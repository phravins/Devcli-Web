import { useState } from 'react';
import { Search, ChevronRight, Terminal, Copy, Check } from 'lucide-react';

interface Command {
  name: string;
  description: string;
  usage: string;
  examples: { cmd: string; desc: string }[];
  flags: { flag: string; desc: string }[];
  category: string;
}

const commands: Command[] = [
  // Project Commands
  {
    name: 'project',
    description: 'Manage projects with scaffolding, templates, and history tracking',
    usage: 'devcli project <subcommand> [options]',
    examples: [
      { cmd: 'devcli project new my-app --template react-ts', desc: 'Create a new project from template' },
      { cmd: 'devcli project list', desc: 'List recent projects' },
      { cmd: 'devcli project switch my-app', desc: 'Switch to a project' },
      { cmd: 'devcli project clone https://github.com/user/repo', desc: 'Clone and setup a project' },
    ],
    flags: [
      { flag: '--template, -t', desc: 'Specify project template' },
      { flag: '--path, -p', desc: 'Custom project path' },
      { flag: '--git', desc: 'Initialize git repository' },
    ],
    category: 'Project',
  },
  {
    name: 'run',
    description: 'Execute build, test, and lint commands with auto-detection',
    usage: 'devcli run [task] [options]',
    examples: [
      { cmd: 'devcli run', desc: 'Interactive task selector' },
      { cmd: 'devcli run build', desc: 'Run build task' },
      { cmd: 'devcli run test --watch', desc: 'Run tests in watch mode' },
      { cmd: 'devcli run lint --fix', desc: 'Run linter with auto-fix' },
    ],
    flags: [
      { flag: '--watch, -w', desc: 'Watch mode for supported tasks' },
      { flag: '--parallel', desc: 'Run tasks in parallel' },
      { flag: '--env', desc: 'Specify environment variables' },
    ],
    category: 'Task',
  },
  {
    name: 'env',
    description: 'Manage virtual environments for Python, Node.js, and more',
    usage: 'devcli env <subcommand> [options]',
    examples: [
      { cmd: 'devcli env list', desc: 'List all environments' },
      { cmd: 'devcli env create python 3.11', desc: 'Create Python virtualenv' },
      { cmd: 'devcli env activate myenv', desc: 'Activate an environment' },
      { cmd: 'devcli env status', desc: 'Show environment status' },
    ],
    flags: [
      { flag: '--name, -n', desc: 'Environment name' },
      { flag: '--version, -v', desc: 'Language version' },
      { flag: '--requirements', desc: 'Requirements file path' },
    ],
    category: 'Environment',
  },
  {
    name: 'serve',
    description: 'Start development server with auto-detection and live reload',
    usage: 'devcli serve [options]',
    examples: [
      { cmd: 'devcli serve', desc: 'Start dev server with auto-detection' },
      { cmd: 'devcli serve --port 3000', desc: 'Start on specific port' },
      { cmd: 'devcli serve --https', desc: 'Enable HTTPS' },
      { cmd: 'devcli serve --proxy /api:http://localhost:8080', desc: 'Configure proxy' },
    ],
    flags: [
      { flag: '--port, -p', desc: 'Server port (default: auto)' },
      { flag: '--host, -h', desc: 'Server host (default: localhost)' },
      { flag: '--https', desc: 'Enable HTTPS' },
      { flag: '--proxy', desc: 'Proxy configuration' },
    ],
    category: 'Server',
  },
  {
    name: 'create',
    description: 'Generate files from templates (Dockerfile, CI/CD, configs)',
    usage: 'devcli create <template> [options]',
    examples: [
      { cmd: 'devcli create', desc: 'Interactive file creator' },
      { cmd: 'devcli create dockerfile --lang go', desc: 'Generate Dockerfile' },
      { cmd: 'devcli create ci --provider github', desc: 'Generate CI/CD workflow' },
      { cmd: 'devcli create makefile --type node', desc: 'Generate Makefile' },
    ],
    flags: [
      { flag: '--lang, -l', desc: 'Programming language' },
      { flag: '--provider', desc: 'CI/CD provider (github, gitlab, etc.)' },
      { flag: '--output, -o', desc: 'Output file path' },
    ],
    category: 'File',
  },
  {
    name: 'gen',
    description: 'Generate code snippets and architectural patterns',
    usage: 'devcli gen <type> [options]',
    examples: [
      { cmd: 'devcli gen api --resource user', desc: 'Generate API endpoints' },
      { cmd: 'devcli gen crud --orm gorm', desc: 'Generate CRUD operations' },
      { cmd: 'devcli gen model --fields "name:string,age:int"', desc: 'Generate data models' },
      { cmd: 'devcli gen test --coverage', desc: 'Generate test files' },
    ],
    flags: [
      { flag: '--resource, -r', desc: 'Resource name' },
      { flag: '--orm', desc: 'ORM framework' },
      { flag: '--fields, -f', desc: 'Field definitions' },
      { flag: '--coverage', desc: 'Include coverage reports' },
    ],
    category: 'Generator',
  },
  {
    name: 'snippet',
    description: 'Manage your personal code snippet library',
    usage: 'devcli snippet <subcommand> [options]',
    examples: [
      { cmd: 'devcli snippet add', desc: 'Add a new snippet' },
      { cmd: 'devcli snippet list', desc: 'List all snippets' },
      { cmd: 'devcli snippet search "auth"', desc: 'Search snippets' },
      { cmd: 'devcli snippet get jwt-auth', desc: 'Get snippet content' },
    ],
    flags: [
      { flag: '--name, -n', desc: 'Snippet name' },
      { flag: '--lang, -l', desc: 'Programming language' },
      { flag: '--tags, -t', desc: 'Comma-separated tags' },
    ],
    category: 'Snippet',
  },
  {
    name: 'ai',
    description: 'AI-powered coding assistant for help and debugging',
    usage: 'devcli ai [query] [options]',
    examples: [
      { cmd: 'devcli ai', desc: 'Start interactive AI session' },
      { cmd: 'devcli ai "explain this error"', desc: 'Get help with an error' },
      { cmd: 'devcli ai --file main.go', desc: 'Analyze a file' },
      { cmd: 'devcli ai --context "I\'m building a REST API"', desc: 'Set context' },
    ],
    flags: [
      { flag: '--file, -f', desc: 'File to analyze' },
      { flag: '--context, -c', desc: 'Set conversation context' },
      { flag: '--model, -m', desc: 'AI model to use' },
    ],
    category: 'AI',
  },
  {
    name: 'files',
    description: 'Keyboard-driven file manager and quick editor',
    usage: 'devcli files [path] [options]',
    examples: [
      { cmd: 'devcli files', desc: 'Open file manager in current directory' },
      { cmd: 'devcli files ~/projects', desc: 'Open specific directory' },
      { cmd: 'devcli files --preview', desc: 'Enable file preview' },
      { cmd: 'devcli files --search', desc: 'Start in search mode' },
    ],
    flags: [
      { flag: '--preview, -p', desc: 'Enable file preview' },
      { flag: '--search, -s', desc: 'Start in search mode' },
      { flag: '--hidden, -a', desc: 'Show hidden files' },
    ],
    category: 'File Manager',
  },
  {
    name: 'update',
    description: 'Check and install updates for DevCLI and managed tools',
    usage: 'devcli update [subcommand] [options]',
    examples: [
      { cmd: 'devcli update check', desc: 'Check for available updates' },
      { cmd: 'devcli update', desc: 'Update DevCLI to latest version' },
      { cmd: 'devcli update all', desc: 'Update all managed tools' },
      { cmd: 'devcli update go node', desc: 'Update specific tools' },
    ],
    flags: [
      { flag: '--force, -f', desc: 'Force update without confirmation' },
      { flag: '--dry-run', desc: 'Show what would be updated' },
      { flag: '--rollback', desc: 'Rollback to previous version' },
    ],
    category: 'Update',
  },
];

const categories = ['All', ...Array.from(new Set(commands.map(c => c.category)))];

export default function Commands() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedCommand, setSelectedCommand] = useState<Command>(commands[0]);
  const [copied, setCopied] = useState<string | null>(null);

  const filteredCommands = commands.filter(cmd => {
    const matchesSearch = cmd.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         cmd.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || cmd.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const copyCommand = (cmd: string, id: string) => {
    navigator.clipboard.writeText(cmd);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-terminal-green">$</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-terminal-text">
              devcli --help
            </h2>
          </div>
          <p className="text-terminal-text-dim ml-6">
            Complete reference of all available commands and their options.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Command List */}
          <div className="lg:col-span-1 space-y-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-terminal-text-dim" />
              <input
                type="text"
                placeholder="Search commands..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-terminal-bg-light border border-terminal-border rounded-lg pl-10 pr-4 py-2 text-terminal-text placeholder:text-terminal-text-dim focus:border-terminal-green focus:outline-none transition-colors"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1 text-xs rounded-full border transition-all duration-200 ${
                    selectedCategory === cat
                      ? 'bg-terminal-green/20 border-terminal-green text-terminal-green'
                      : 'bg-terminal-bg border-terminal-border text-terminal-text-dim hover:border-terminal-text'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Command List */}
            <div className="space-y-1 max-h-[500px] overflow-y-auto">
              {filteredCommands.map((cmd) => (
                <button
                  key={cmd.name}
                  onClick={() => setSelectedCommand(cmd)}
                  className={`w-full text-left p-3 rounded-lg border transition-all duration-200 ${
                    selectedCommand.name === cmd.name
                      ? 'bg-terminal-green/10 border-terminal-green'
                      : 'bg-terminal-bg border-terminal-border hover:border-terminal-text-dim'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className={`font-mono font-medium ${
                      selectedCommand.name === cmd.name ? 'text-terminal-green' : 'text-terminal-text'
                    }`}>
                      {cmd.name}
                    </span>
                    <ChevronRight className={`w-4 h-4 ${
                      selectedCommand.name === cmd.name ? 'text-terminal-green' : 'text-terminal-text-dim'
                    }`} />
                  </div>
                  <p className="text-xs text-terminal-text-dim mt-1 truncate">
                    {cmd.description}
                  </p>
                </button>
              ))}
            </div>
          </div>

          {/* Command Details */}
          <div className="lg:col-span-2">
            <div className="terminal-window h-full">
              {/* Terminal Header */}
              <div className="terminal-header">
                <div className="terminal-dot terminal-dot-red" />
                <div className="terminal-dot terminal-dot-yellow" />
                <div className="terminal-dot terminal-dot-green" />
                <span className="ml-4 text-terminal-text-dim text-sm">
                  man {selectedCommand.name}
                </span>
              </div>

              {/* Terminal Body */}
              <div className="terminal-body space-y-6">
                {/* Command Header */}
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <Terminal className="w-5 h-5 text-terminal-green" />
                    <h3 className="text-xl font-bold text-terminal-text font-mono">
                      {selectedCommand.name}
                    </h3>
                    <span className="text-xs bg-terminal-blue/20 text-terminal-blue px-2 py-1 rounded">
                      {selectedCommand.category}
                    </span>
                  </div>
                  <p className="text-terminal-text-dim">
                    {selectedCommand.description}
                  </p>
                </div>

                {/* Usage */}
                <div>
                  <p className="text-terminal-text-dim text-sm mb-2"># Usage</p>
                  <div className="bg-terminal-bg-light rounded-lg p-3 border border-terminal-border">
                    <code className="text-terminal-green font-mono text-sm">
                      {selectedCommand.usage}
                    </code>
                  </div>
                </div>

                {/* Examples */}
                <div>
                  <p className="text-terminal-text-dim text-sm mb-3"># Examples</p>
                  <div className="space-y-2">
                    {selectedCommand.examples.map((example, index) => (
                      <div 
                        key={index}
                        className="bg-terminal-bg-light rounded-lg p-3 border border-terminal-border group hover:border-terminal-green transition-colors"
                      >
                        <div className="flex items-start gap-3">
                          <code className="text-terminal-text flex-1 font-mono text-sm">
                            {example.cmd}
                          </code>
                          <button
                            onClick={() => copyCommand(example.cmd, `example-${index}`)}
                            className="opacity-0 group-hover:opacity-100 p-1 text-terminal-text-dim hover:text-terminal-green transition-all"
                          >
                            {copied === `example-${index}` ? (
                              <Check className="w-4 h-4" />
                            ) : (
                              <Copy className="w-4 h-4" />
                            )}
                          </button>
                        </div>
                        <p className="text-terminal-text-dim text-xs mt-2">
                          {example.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Flags */}
                <div>
                  <p className="text-terminal-text-dim text-sm mb-3"># Flags</p>
                  <div className="space-y-2">
                    {selectedCommand.flags.map((flag, index) => (
                      <div 
                        key={index}
                        className="flex items-start gap-4 py-2 border-b border-terminal-border last:border-0"
                      >
                        <code className="text-terminal-yellow font-mono text-sm min-w-[150px]">
                          {flag.flag}
                        </code>
                        <span className="text-terminal-text text-sm">
                          {flag.desc}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* See Also */}
                <div className="pt-4 border-t border-terminal-border">
                  <p className="text-terminal-text-dim text-sm mb-2"># See also</p>
                  <div className="flex flex-wrap gap-2">
                    {commands
                      .filter(c => c.category === selectedCommand.category && c.name !== selectedCommand.name)
                      .slice(0, 3)
                      .map(cmd => (
                        <button
                          key={cmd.name}
                          onClick={() => setSelectedCommand(cmd)}
                          className="text-terminal-blue hover:text-terminal-green transition-colors text-sm"
                        >
                          {cmd.name}(1)
                        </button>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
