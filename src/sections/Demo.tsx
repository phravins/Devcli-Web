import { useState, useEffect, useRef } from 'react';
import { Play, Pause, RotateCcw, Terminal } from 'lucide-react';

interface DemoCommand {
  command: string;
  output: string[];
  delay: number;
}

const demoCommands: DemoCommand[] = [
  {
    command: 'devcli --version',
    output: [
      'DevCLI v2.4.1 (stable)',
      'Built with Go 1.21.5 + Bubble Tea',
      '',
    ],
    delay: 500,
  },
  {
    command: 'devcli project list',
    output: [
      'Recent Projects:',
      '  📁 api-gateway      go         ~/work/api      (2 days ago)',
      '  📁 dashboard        react-ts   ~/work/dash     (3 days ago)',
      '  📁 ml-pipeline      python     ~/work/ml       (1 week ago)',
      '  📁 cli-tool         rust       ~/work/cli      (2 weeks ago)',
      '',
      'Use "devcli project switch <name>" to open a project',
      '',
    ],
    delay: 800,
  },
  {
    command: 'devcli run',
    output: [
      '? Select task:',
      '  ❯ build    - Build the project',
      '    test     - Run test suite',
      '    lint     - Run linter',
      '    dev      - Start development server',
      '',
      'Running: build',
      '✓ Cleaning previous build...',
      '✓ Compiling TypeScript...',
      '✓ Bundling with Vite...',
      '✓ Build complete in 3.2s',
      '',
      '  dist/                     4.2 MB',
      '  ├── assets/               3.8 MB',
      '  ├── index.html            2.1 KB',
      '  └── manifest.json         456 B',
      '',
    ],
    delay: 1200,
  },
  {
    command: 'devcli env status',
    output: [
      'Environment Status:',
      '',
      '  🐍 Python    3.11.4    ✓ active    (myproject)',
      '  ⬢ Node.js   20.5.0    ✓ active    (via nvm)',
      '  🐹 Go        1.21.5    ✓ system',
      '  🦀 Rust      1.74.0    ✓ system',
      '',
      'All environments are properly configured.',
      '',
    ],
    delay: 600,
  },
  {
    command: 'devcli ai "explain this error"',
    output: [
      '🤖 AI Assistant',
      '',
      'I\'ll help you understand and fix this error.',
      '',
      'Error: "cannot find module \'@/components/ui\'"',
      '',
      'This is a path alias resolution issue. Here are the fixes:',
      '',
      '1. Check tsconfig.json paths configuration:',
      '   "paths": { "@/*": ["./src/*"] }',
      '',
      '2. Ensure your bundler (Vite/webpack) is configured',
      '   to resolve the alias.',
      '',
      '3. Restart your IDE after making changes.',
      '',
    ],
    delay: 1000,
  },
];

export default function Demo() {
  const [currentCommandIndex, setCurrentCommandIndex] = useState(0);
  const [currentOutput, setCurrentOutput] = useState<string[]>([]);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isTyping, setIsTyping] = useState(false);
  const [typedCommand, setTypedCommand] = useState('');
  const terminalRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [currentOutput]);

  // Demo playback
  useEffect(() => {
    if (!isPlaying) return;

    const currentCmd = demoCommands[currentCommandIndex];
    let timeout: ReturnType<typeof setTimeout>;

    // Type the command
    const typeCommand = async () => {
      setIsTyping(true);
      setTypedCommand('');
      
      for (let i = 0; i <= currentCmd.command.length; i++) {
        await new Promise(resolve => setTimeout(resolve, 50));
        setTypedCommand(currentCmd.command.slice(0, i));
      }
      
      setIsTyping(false);
      
      // Show output after typing
      timeout = setTimeout(() => {
        setCurrentOutput(prev => [
          ...prev,
          `$ ${currentCmd.command}`,
          ...currentCmd.output,
        ]);
        
        // Move to next command
        timeout = setTimeout(() => {
          setCurrentCommandIndex(prev => (prev + 1) % demoCommands.length);
        }, 2000);
      }, 300);
    };

    typeCommand();

    return () => clearTimeout(timeout);
  }, [currentCommandIndex, isPlaying]);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleReset = () => {
    setCurrentCommandIndex(0);
    setCurrentOutput([]);
    setTypedCommand('');
    setIsPlaying(true);
  };

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Terminal className="w-6 h-6 text-terminal-green" />
            <h2 className="text-2xl sm:text-3xl font-bold text-terminal-text">
              Interactive Demo
            </h2>
          </div>
          <p className="text-terminal-text-dim max-w-2xl mx-auto">
            See DevCLI in action. Watch how it streamlines your development workflow
            with intelligent automation and a unified interface.
          </p>
        </div>

        {/* Demo Terminal */}
        <div className="terminal-window terminal-glow">
          {/* Terminal Header */}
          <div className="terminal-header">
            <div className="flex items-center gap-2">
              <div className="terminal-dot terminal-dot-red" />
              <div className="terminal-dot terminal-dot-yellow" />
              <div className="terminal-dot terminal-dot-green" />
            </div>
            <span className="ml-4 text-terminal-text-dim text-sm flex-1">
              demo@devcli:~/workspace
            </span>
            
            {/* Playback Controls */}
            <div className="flex items-center gap-2">
              <button
                onClick={handlePlayPause}
                className="p-2 text-terminal-text-dim hover:text-terminal-green transition-colors"
                title={isPlaying ? 'Pause' : 'Play'}
              >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              </button>
              <button
                onClick={handleReset}
                className="p-2 text-terminal-text-dim hover:text-terminal-green transition-colors"
                title="Reset"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Terminal Body */}
          <div 
            ref={terminalRef}
            className="terminal-body h-[500px] overflow-y-auto font-mono text-sm"
          >
            {/* Welcome Message */}
            <div className="text-terminal-text-dim mb-4">
              <p>DevCLI Interactive Demo</p>
              <p>Type 'help' for available commands or watch the demo.</p>
            </div>

            {/* Previous Output */}
            {currentOutput.map((line, index) => (
              <div 
                key={index} 
                className={`${
                  line.startsWith('$') 
                    ? 'text-terminal-green' 
                    : line.startsWith('?') || line.startsWith('  ❯')
                    ? 'text-terminal-yellow'
                    : line.startsWith('✓')
                    ? 'text-terminal-green-bright'
                    : line.startsWith('🤖')
                    ? 'text-terminal-purple'
                    : line.startsWith('  🐍') || line.startsWith('  ⬢') || line.startsWith('  🐹') || line.startsWith('  🦀')
                    ? 'text-terminal-cyan'
                    : line.startsWith('  📁')
                    ? 'text-terminal-blue'
                    : 'text-terminal-text'
                }`}
              >
                {line}
              </div>
            ))}

            {/* Current Command */}
            {(isTyping || typedCommand) && (
              <div className="flex items-center gap-2">
                <span className="text-terminal-green">$</span>
                <span className="text-terminal-text">{typedCommand}</span>
                {isTyping && (
                  <span className="cursor-blink text-terminal-green">█</span>
                )}
              </div>
            )}

            {/* Ready Prompt */}
            {!isTyping && !typedCommand && (
              <div className="flex items-center gap-2">
                <span className="text-terminal-green">$</span>
                <span className="cursor-blink text-terminal-green">█</span>
              </div>
            )}
          </div>

          {/* Progress Bar */}
          <div className="px-4 pb-4">
            <div className="flex items-center justify-between text-xs text-terminal-text-dim mb-2">
              <span>Demo Progress</span>
              <span>{currentCommandIndex + 1} / {demoCommands.length}</span>
            </div>
            <div className="terminal-progress">
              <div 
                className="terminal-progress-bar"
                style={{ width: `${((currentCommandIndex + 1) / demoCommands.length) * 100}%` }}
              />
            </div>
          </div>
        </div>

        {/* Demo Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
          <div className="bg-terminal-bg-light border border-terminal-border rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-terminal-green">10+</div>
            <div className="text-xs text-terminal-text-dim mt-1">Built-in Tools</div>
          </div>
          <div className="bg-terminal-bg-light border border-terminal-border rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-terminal-blue">50+</div>
            <div className="text-xs text-terminal-text-dim mt-1">Project Templates</div>
          </div>
          <div className="bg-terminal-bg-light border border-terminal-border rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-terminal-cyan">5</div>
            <div className="text-xs text-terminal-text-dim mt-1">Languages Supported</div>
          </div>
          <div className="bg-terminal-bg-light border border-terminal-border rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-terminal-purple">0ms</div>
            <div className="text-xs text-terminal-text-dim mt-1">Startup Time</div>
          </div>
        </div>
      </div>
    </div>
  );
}
