import { useEffect, useState, useRef } from 'react';
import { ArrowDown, Copy, Check } from 'lucide-react';

const asciiLogo = `
██████╗ ███████╗██╗   ██╗ ██████╗██╗     ██╗
██╔══██╗██╔════╝██║   ██║██╔════╝██║     ██║
██║  ██║█████╗  ██║   ██║██║     ██║     ██║
██║  ██║██╔══╝  ╚██╗ ██╔╝██║     ██║     ██║
██████╔╝███████╗ ╚████╔╝ ╚██████╗███████╗██║
╚═════╝ ╚══════╝  ╚═══╝   ╚═════╝╚══════╝╚═╝
`;

const taglines = [
  'The terminal-based development workspace',
  'All your dev tools in one unified interface',
  'Built with Go + Bubble Tea framework',
  'Cross-platform. Fast. Keyboard-driven.',
];

export default function Hero() {
  const [currentTagline, setCurrentTagline] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [copied, setCopied] = useState(false);
  const terminalRef = useRef<HTMLDivElement>(null);

  // Typing effect for taglines
  useEffect(() => {
    const tagline = taglines[currentTagline];
    const typeSpeed = isDeleting ? 30 : 60;

    if (!isDeleting && displayText === tagline) {
      setTimeout(() => setIsDeleting(true), 2000);
      return;
    }

    if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setCurrentTagline((prev) => (prev + 1) % taglines.length);
      return;
    }

    const timeout = setTimeout(() => {
      setDisplayText((prev) => {
        if (isDeleting) {
          return prev.slice(0, -1);
        }
        return tagline.slice(0, prev.length + 1);
      });
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentTagline]);

  const copyInstallCommand = () => {
    navigator.clipboard.writeText('go install github.com/phravins/devcli@latest');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollToFeatures = () => {
    document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating code snippets */}
        <div className="absolute top-20 left-10 text-terminal-text-dim/20 text-xs font-mono animate-pulse">
          {'>'} devcli init my-project
        </div>
        <div className="absolute top-40 right-20 text-terminal-text-dim/20 text-xs font-mono animate-pulse" style={{ animationDelay: '0.5s' }}>
          {'>'} devcli run build
        </div>
        <div className="absolute bottom-40 left-20 text-terminal-text-dim/20 text-xs font-mono animate-pulse" style={{ animationDelay: '1s' }}>
          {'>'} devcli env create python
        </div>
        <div className="absolute bottom-20 right-10 text-terminal-text-dim/20 text-xs font-mono animate-pulse" style={{ animationDelay: '1.5s' }}>
          {'>'} devcli ai "help me debug"
        </div>
      </div>

      {/* Main Terminal Window */}
      <div
        ref={terminalRef}
        className="w-full max-w-6xl terminal-window terminal-glow animate-fade-in"
      >
        {/* Terminal Header */}
        <div className="terminal-header">
          <div className="terminal-dot terminal-dot-red" />
          <div className="terminal-dot terminal-dot-yellow" />
          <div className="terminal-dot terminal-dot-green" />
          <span className="ml-4 text-terminal-text-dim text-sm">devcli — bash — 80×24</span>
        </div>

        {/* Terminal Body */}
        <div className="terminal-body space-y-6 p-8">
          {/* Welcome Message */}
          <div className="text-terminal-text-dim text-base">
            <p>Last login: {new Date().toLocaleString()} from 192.168.1.42</p>
          </div>

          {/* ASCII Logo */}
          <pre className="ascii-art text-terminal-green animate-fade-in text-[10px] sm:text-sm md:text-base leading-none">
            {asciiLogo}
          </pre>

          {/* Version Info */}
          <div className="flex items-center gap-4 text-base">
            <span className="text-terminal-text-dim">version:</span>
            <span className="text-terminal-green">v1.0.0</span>
            <span className="text-terminal-text-dim">|</span>
            <span className="text-terminal-blue">stable</span>
            <span className="text-terminal-text-dim">|</span>
            <span className="text-terminal-cyan">go1.21.5</span>
          </div>

          {/* Divider */}
          <div className="border-t border-terminal-border my-6" />

          {/* Description with typing effect */}
          <div className="space-y-2">
            <div className="flex items-start gap-2 text-lg">
              <span className="prompt">
                <span className="prompt-user">user</span>
                <span className="prompt-symbol">@</span>
                <span className="prompt-path">devcli</span>
                <span className="text-terminal-text">:~$</span>
              </span>
              <span className="text-terminal-text typing-cursor">{displayText}</span>
            </div>
          </div>

          {/* Quick Install Command */}
          <div className="mt-8 space-y-2">
            <p className="text-terminal-text-dim text-base"># Quick install</p>
            <div className="flex items-center gap-2 bg-terminal-bg-light rounded-lg p-4 border border-terminal-border group hover:border-terminal-green transition-colors">
              <span className="text-terminal-green text-lg">$</span>
              <code className="text-terminal-text flex-1 text-base sm:text-lg">
                go install github.com/phravins/devcli@latest
              </code>
              <button
                onClick={copyInstallCommand}
                className="p-2 text-terminal-text-dim hover:text-terminal-green transition-colors"
                title="Copy to clipboard"
              >
                {copied ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mt-6">
            <button
              onClick={scrollToFeatures}
              className="terminal-btn flex items-center gap-2"
            >
              <span>./explore.sh</span>
              <ArrowDown className="w-4 h-4" />
            </button>
            <a
              href="https://github.com/devcli/devcli"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 border border-terminal-border text-terminal-text hover:border-terminal-blue hover:text-terminal-blue transition-all duration-200 flex items-center gap-2"
            >
              <span>View on GitHub</span>
              <span className="text-terminal-text-dim">→</span>
            </a>
          </div>

          {/* System Info */}
          <div className="mt-6 pt-4 border-t border-terminal-border">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
              <div>
                <span className="text-terminal-text-dim block">Platform</span>
                <span className="text-terminal-cyan">Linux/macOS/Windows</span>
              </div>
              <div>
                <span className="text-terminal-text-dim block">License</span>
                <span className="text-terminal-yellow">Apache-2.0 license</span>
              </div>
              <div>
                <span className="text-terminal-text-dim block">Stars</span>
                <span className="text-terminal-purple">★ 12</span>
              </div>
              <div>
                <span className="text-terminal-text-dim block">Downloads</span>
                <span className="text-terminal-green-bright">100+</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-5 h-5 text-terminal-text-dim" />
      </div>
    </div>
  );
}
