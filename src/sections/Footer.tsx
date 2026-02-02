import { Github, Twitter, MessageCircle, Mail, Heart, Terminal, ExternalLink } from 'lucide-react';

const footerLinks = {
  product: [
    { label: 'Features', href: '#features' },
    { label: 'Demo', href: '#demo' },
    { label: 'Installation', href: '#install' },
    { label: 'Commands', href: '#commands' },
  ],
  resources: [
    { label: 'Documentation', href: 'https://docs.devcli.sh', external: true },
    { label: 'API Reference', href: 'https://docs.devcli.sh/api', external: true },
    { label: 'Changelog', href: 'https://github.com/devcli/devcli/blob/main/CHANGELOG.md', external: true },
    { label: 'Roadmap', href: 'https://github.com/devcli/devcli/projects', external: true },
  ],
  community: [
    { label: 'GitHub Discussions', href: 'https://github.com/devcli/devcli/discussions', external: true },
    { label: 'Discord Server', href: 'https://discord.gg/devcli', external: true },
    { label: 'Stack Overflow', href: 'https://stackoverflow.com/questions/tagged/devcli', external: true },
    { label: 'Twitter / X', href: 'https://twitter.com/devcli', external: true },
  ],
  legal: [
    { label: 'MIT License', href: 'https://github.com/devcli/devcli/blob/main/LICENSE', external: true },
    { label: 'Code of Conduct', href: 'https://github.com/devcli/devcli/blob/main/CODE_OF_CONDUCT.md', external: true },
    { label: 'Contributing', href: 'https://github.com/devcli/devcli/blob/main/CONTRIBUTING.md', external: true },
    { label: 'Security', href: 'https://github.com/devcli/devcli/security', external: true },
  ],
};

const socialLinks = [
  { icon: Github, href: 'https://github.com/devcli/devcli', label: 'GitHub' },
  { icon: Twitter, href: 'https://twitter.com/devcli', label: 'Twitter' },
  { icon: MessageCircle, href: 'https://discord.gg/devcli', label: 'Discord' },
  { icon: Mail, href: 'mailto:hello@devcli.sh', label: 'Email' },
];

interface FooterProps {
  setCurrentView: (view: 'landing' | 'docs' | 'roadmap') => void;
}

export default function Footer({ setCurrentView }: FooterProps) {
  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.getElementById(href.slice(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="border-t border-terminal-border bg-terminal-bg">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
          {/* Brand */}
          <div className="col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <Terminal className="w-6 h-6 text-terminal-green" />
              <span className="text-xl font-bold text-terminal-text">devcli</span>
            </div>
            <p className="text-terminal-text-dim text-sm mb-6 max-w-xs">
              The terminal-based development workspace that consolidates essential
              developer tools into a single unified interface.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-terminal-text-dim hover:text-terminal-green transition-colors"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="text-terminal-text font-semibold mb-4">Product</h4>
            <ul className="space-y-2">
              {footerLinks.product.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-terminal-text-dim hover:text-terminal-green transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="text-terminal-text font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  {link.label === 'Documentation' || link.label === 'Roadmap' ? (
                    <button
                      onClick={() => {
                        setCurrentView(link.label === 'Documentation' ? 'docs' : 'roadmap');
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="text-terminal-text-dim hover:text-terminal-green transition-colors text-sm inline-flex items-center gap-1"
                    >
                      {link.label}
                    </button>
                  ) : (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-terminal-text-dim hover:text-terminal-green transition-colors text-sm inline-flex items-center gap-1"
                    >
                      {link.label}
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Community Links */}
          <div>
            <h4 className="text-terminal-text font-semibold mb-4">Community</h4>
            <ul className="space-y-2">
              {footerLinks.community.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-terminal-text-dim hover:text-terminal-green transition-colors text-sm inline-flex items-center gap-1"
                  >
                    {link.label}
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-terminal-text font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-terminal-text-dim hover:text-terminal-green transition-colors text-sm inline-flex items-center gap-1"
                  >
                    {link.label}
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-terminal-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <div className="flex items-center gap-2 text-sm text-terminal-text-dim">
              <span>© {new Date().getFullYear()} DevCLI.</span>
              <span>Made with</span>
              <Heart className="w-4 h-4 text-terminal-red inline" />
              <span>by phravins, for developers.</span>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-terminal-text-dim">Latest:</span>
                <span className="text-terminal-green">v1.0.0</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-terminal-text-dim">License:</span>
                <a
                  href="https://github.com/devcli/devcli/blob/main/LICENSE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-terminal-yellow hover:text-terminal-green transition-colors"
                >
                  Apache-2.0 license
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Terminal Prompt */}
      <div className="border-t border-terminal-border bg-terminal-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-3 text-sm">
            <span className="text-terminal-green">visitor@devcli.sh</span>
            <span className="text-terminal-text">:~$</span>
            <span className="text-terminal-text-dim"># Thanks for visiting! Star us on GitHub ⭐</span>
            <span className="cursor-blink text-terminal-green">█</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
