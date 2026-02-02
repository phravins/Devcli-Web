import { useEffect, useState, useRef } from 'react';
import Hero from './sections/Hero';
import Features from './sections/Features';
import Demo from './sections/Demo';
import Installation from './sections/Installation';
import Commands from './sections/Commands';
import Footer from './sections/Footer';
import Navigation from './sections/Navigation';
import './App.css';

import Documentation from './pages/Documentation';
import Roadmap from './pages/Roadmap';
import DetailedFeatures from './pages/DetailedFeatures';
import License from './pages/License';
import Security from './pages/Security';
import CodeOfConduct from './pages/CodeOfConduct';
import Contributing from './pages/Contributing';

function App() {
  const [currentSection, setCurrentSection] = useState('home');
  const [currentView, setCurrentView] = useState<'landing' | 'docs' | 'roadmap' | 'features' | 'license' | 'security' | 'code-of-conduct' | 'contributing'>('landing');
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (currentView === 'docs') return;

    const handleScroll = () => {
      const sections = ['home', 'features', 'demo', 'install', 'commands'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setCurrentSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentView]);

  return (
    <div ref={mainRef} className="min-h-screen bg-terminal-bg font-mono noise-bg">
      {/* Background Grid */}
      <div className="fixed inset-0 grid-bg pointer-events-none z-0" />

      {/* Scanlines Overlay */}
      <div className="fixed inset-0 scanlines pointer-events-none z-50 opacity-30" />

      {/* Navigation */}
      <Navigation currentSection={currentView === 'docs' ? 'docs' : currentSection} setCurrentView={setCurrentView} />

      {/* Main Content */}
      <main className="relative z-10">
        {currentView === 'landing' ? (
          <>
            <section id="home">
              <Hero />
            </section>
            <section id="features">
              <Features />
            </section>
            <section id="demo">
              <Demo />
            </section>
            <section id="install">
              <Installation setCurrentView={setCurrentView} />
            </section>
            <section id="commands">
              <Commands />
            </section>
            <Footer setCurrentView={setCurrentView} />
          </>
        ) : currentView === 'docs' ? (
          <Documentation onBack={() => {
            setCurrentView('landing');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }} />
        ) : currentView === 'features' ? (
          <DetailedFeatures onBack={() => {
            setCurrentView('landing');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }} />
        ) : currentView === 'license' ? (
          <License onBack={() => {
            setCurrentView('landing');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }} />
        ) : currentView === 'security' ? (
          <Security onBack={() => {
            setCurrentView('landing');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }} />
        ) : currentView === 'code-of-conduct' ? (
          <CodeOfConduct onBack={() => {
            setCurrentView('landing');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }} />
        ) : currentView === 'contributing' ? (
          <Contributing onBack={() => {
            setCurrentView('landing');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }} />
        ) : (
          <Roadmap onBack={() => {
            setCurrentView('landing');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }} />
        )}
      </main>
    </div>
  );
}

export default App;
