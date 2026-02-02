import { useState, useEffect } from 'react';
import { Terminal, Menu, X } from 'lucide-react';

interface NavigationProps {
  currentSection: string;
  setCurrentView: (view: 'landing' | 'docs' | 'roadmap' | 'features' | 'license' | 'security' | 'code-of-conduct' | 'contributing') => void;
}

const navItems = [
  { id: 'home', label: '~', shortcut: '1' },
  { id: 'features', label: 'features', shortcut: '2' },
  { id: 'demo', label: 'demo', shortcut: '3' },
  { id: 'install', label: 'install', shortcut: '4' },
  { id: 'commands', label: 'commands', shortcut: '5' },
  { id: 'docs', label: 'docs', shortcut: '6' },
];

export default function Navigation({ currentSection, setCurrentView }: NavigationProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show nav after scrolling past hero
      if (currentScrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const handleNavClick = (id: string) => {
    if (id === 'docs') {
      setCurrentView('docs');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setCurrentView('landing');
      // Small timeout to allow render
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 50);
    }
    setIsMobileOpen(false);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isVisible
          ? 'translate-y-0 opacity-100'
          : '-translate-y-full opacity-0'
          }`}
      >
        <div className="bg-terminal-bg/95 backdrop-blur-sm border-b border-terminal-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-14">
              {/* Logo */}
              <div className="flex items-center gap-3">
                <Terminal className="w-5 h-5 text-terminal-green" />
                <span className="text-terminal-green font-semibold">devcli</span>
              </div>

              {/* Desktop Nav Items */}
              <div className="hidden md:flex items-center gap-1">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`px-4 py-2 text-sm rounded transition-all duration-200 ${currentSection === item.id
                      ? 'text-terminal-green bg-terminal-green/10'
                      : 'text-terminal-text-dim hover:text-terminal-text hover:bg-terminal-border/50'
                      }`}
                  >
                    <span className="text-terminal-text-dim mr-1">[{item.shortcut}]</span>
                    {item.label}
                  </button>
                ))}
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileOpen(!isMobileOpen)}
                className="md:hidden p-2 text-terminal-text hover:text-terminal-green transition-colors"
              >
                {isMobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileOpen && (
          <div className="md:hidden bg-terminal-bg border-b border-terminal-border">
            <div className="px-4 py-2 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full text-left px-4 py-3 text-sm rounded transition-all duration-200 ${currentSection === item.id
                    ? 'text-terminal-green bg-terminal-green/10'
                    : 'text-terminal-text-dim hover:text-terminal-text hover:bg-terminal-border/50'
                    }`}
                >
                  <span className="text-terminal-text-dim mr-2">[{item.shortcut}]</span>
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Floating Action Button (visible when nav is hidden) */}
      <button
        onClick={() => handleNavClick('home')}
        className={`fixed bottom-6 right-6 z-50 p-3 bg-terminal-bg border border-terminal-border rounded-lg shadow-terminal transition-all duration-300 hover:border-terminal-green hover:shadow-terminal ${isVisible ? 'opacity-0 pointer-events-none' : 'opacity-100'
          }`}
      >
        <Terminal className="w-5 h-5 text-terminal-green" />
      </button>
    </>
  );
}
