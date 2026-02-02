import { useState } from 'react';
import { MoveLeft, Map, Flag, Terminal, Rocket, Code2, Bot, ChevronRight } from 'lucide-react';

const journeySteps = [
    {
        id: 'init',
        title: 'Initiation',
        icon: Terminal,
        desc: 'Setting up your workspace',
        content: (
            <div className="space-y-4 animate-fade-in">
                <h3 className="text-xl font-bold text-terminal-green">Step 1: The First Command</h3>
                <p className="text-terminal-text-dim">Your journey begins with a single command. Install DevCLI and initialize your global configuration.</p>

                <div className="bg-terminal-bg-light p-4 rounded-lg border border-terminal-border space-y-2 font-mono text-sm">
                    <div className="flex gap-2">
                        <span className="text-terminal-green">$</span>
                        <span className="text-terminal-text">devcli --version</span>
                    </div>
                    <div className="text-terminal-text-dim">v2.4.1</div>
                    <div className="flex gap-2 pt-2">
                        <span className="text-terminal-green">$</span>
                        <span className="text-terminal-text">devcli init</span>
                    </div>
                    <div className="text-terminal-blue">✓ created ~/.devcli/config.yaml</div>
                    <div className="text-terminal-blue">✓ scanned workspace</div>
                </div>

                <div className="p-3 bg-terminal-blue/10 border border-terminal-blue/20 rounded text-sm text-terminal-blue">
                    <strong>Pro Tip:</strong> Run <code className="bg-black/30 px-1 rounded">devcli env scan</code> right away to index existing virtual environments.
                </div>
            </div>
        )
    },
    {
        id: 'scaffold',
        title: 'Scaffolding',
        icon: Rocket,
        desc: 'Creating your first project',
        content: (
            <div className="space-y-4 animate-fade-in">
                <h3 className="text-xl font-bold text-terminal-purple">Step 2: Project Liftoff</h3>
                <p className="text-terminal-text-dim">The Project Wizard handles the boring stuff. Select a template, name it, and watch it fly.</p>

                <div className="grid gap-3">
                    <div className="border border-terminal-border rounded p-3 bg-terminal-bg hover:border-terminal-purple transition-colors cursor-default">
                        <div className="text-xs text-terminal-text-dim mb-1">Command</div>
                        <code className="text-terminal-text">devcli project new</code>
                    </div>
                    <div className="border border-terminal-border rounded p-3 bg-terminal-bg relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-1 h-full bg-terminal-purple"></div>
                        <div className="text-xs text-terminal-text-dim mb-2">Wizard Output</div>
                        <div className="font-mono text-xs space-y-1">
                            <div>? Select template: <span className="text-terminal-purple">React + Vite + TS</span></div>
                            <div>? Project name: <span className="text-terminal-green">my-awesome-app</span></div>
                            <div className="text-terminal-text-dim">... cloning template</div>
                            <div className="text-terminal-text-dim">... installing dependencies</div>
                            <div className="text-terminal-green">Done! Happy hacking.</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    },
    {
        id: 'workflow',
        title: 'Workflow',
        icon: Code2,
        desc: 'Daily development loop',
        content: (
            <div className="space-y-4 animate-fade-in">
                <h3 className="text-xl font-bold text-terminal-blue">Step 3: The Flow State</h3>
                <p className="text-terminal-text-dim">Stop context switching. Manage servers, files, and Git without Alt-Tab.</p>

                <ul className="space-y-3">
                    <li className="flex gap-3 items-start">
                        <div className="mt-1 bg-terminal-blue/20 p-1 rounded text-terminal-blue"><Terminal className="w-4 h-4" /></div>
                        <div>
                            <strong className="text-terminal-text block">Unified Dev Server</strong>
                            <p className="text-sm text-terminal-text-dim">Auto-detects npm/go/python servers. Logs stream to a searchable dashboard.</p>
                        </div>
                    </li>
                    <li className="flex gap-3 items-start">
                        <div className="mt-1 bg-terminal-green/20 p-1 rounded text-terminal-green"><Map className="w-4 h-4" /></div>
                        <div>
                            <strong className="text-terminal-text block">Keyboard Navigation</strong>
                            <p className="text-sm text-terminal-text-dim">Use VIM-style bindings or arrow keys for everything.</p>
                        </div>
                    </li>
                </ul>
            </div>
        )
    },
    {
        id: 'power',
        title: 'Mastery',
        icon: Bot,
        desc: 'AI & Advance usage',
        content: (
            <div className="space-y-4 animate-fade-in">
                <h3 className="text-xl font-bold text-terminal-yellow">Step 4: Power User</h3>
                <p className="text-terminal-text-dim">Unlock the full potential with AI agents and custom scripts.</p>

                <div className="bg-terminal-bg-light border border-terminal-border rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-3 border-b border-terminal-border pb-2">
                        <Bot className="w-4 h-4 text-terminal-yellow" />
                        <span className="text-sm font-semibold text-terminal-text">AI Assistant</span>
                    </div>
                    <div className="space-y-3 font-mono text-xs">
                        <div className="bg-terminal-bg p-2 rounded text-terminal-text-dim border border-terminal-border">
                            "Explain why this regex is failing..."
                        </div>
                        <div className="pl-2 border-l-2 border-terminal-yellow">
                            <span className="text-terminal-yellow">AI:</span> Looking at the pattern, it seems you're missing an escape character for the period...
                        </div>
                    </div>
                </div>
            </div>
        )
    }
];

const futureRoadmap = [
    { quarter: 'Q2 2026', title: 'Cloud Sync', desc: 'Sync workspace config across machines', status: 'In Progress' },
    { quarter: 'Q3 2026', title: 'Plugin System', desc: 'Write custom extensions in Lua', status: 'Planned' },
    { quarter: 'Q4 2026', title: 'Web Dashboard', desc: 'Manage local dev server via browser', status: 'Concept' },
];

export default function Roadmap({ onBack }: { onBack: () => void }) {
    const [activeStep, setActiveStep] = useState(0);

    return (
        <div className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">

            {/* Header */}
            <div className="flex items-center justify-between mb-8">
                <button
                    onClick={onBack}
                    className="group flex items-center gap-2 text-terminal-text-dim hover:text-terminal-green transition-colors"
                >
                    <MoveLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                    <span>cd ..</span>
                </button>
                <div className="flex items-center gap-2 text-terminal-text-dim">
                    <Map className="w-5 h-5" />
                    <span className="text-sm">roadmap.md</span>
                </div>
            </div>

            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold text-terminal-green mb-4">Developer Journey</h1>
                <p className="text-terminal-text-dim text-lg max-w-2xl mx-auto">
                    From installation to mastery. See how DevCLI fits into your daily workflow.
                </p>
            </div>

            {/* Interactive Timeline */}
            <div className="grid lg:grid-cols-12 gap-8 mb-20">
                {/* Left: Stepper */}
                <div className="lg:col-span-5 space-y-4">
                    {journeySteps.map((step, index) => {
                        const Icon = step.icon;
                        const isActive = activeStep === index;
                        return (
                            <button
                                key={step.id}
                                onClick={() => setActiveStep(index)}
                                className={`w-full text-left p-4 rounded-lg border transition-all duration-300 relative group ${isActive
                                    ? 'bg-terminal-bg-light border-terminal-green shadow-terminal ring-1 ring-terminal-green/50'
                                    : 'bg-terminal-bg border-terminal-border hover:border-terminal-text-dim hover:bg-terminal-bg-light/50'
                                    }`}
                            >
                                <div className="flex items-center gap-4">
                                    <div className={`p-2 rounded-md transition-colors ${isActive ? 'bg-terminal-green/20 text-terminal-green' : 'bg-terminal-border/30 text-terminal-text-dim'}`}>
                                        <Icon className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className={`font-bold transition-colors ${isActive ? 'text-terminal-text' : 'text-terminal-text-dim group-hover:text-terminal-text'}`}>{step.title}</h3>
                                        <p className="text-xs text-terminal-text-dim">{step.desc}</p>
                                    </div>
                                    {isActive && <ChevronRight className="w-5 h-5 text-terminal-green absolute right-4 animate-pulse" />}
                                </div>
                            </button>
                        );
                    })}
                </div>

                {/* Right: Content Display */}
                <div className="lg:col-span-7 bg-terminal-bg border border-terminal-border rounded-xl p-8 relative min-h-[400px] flex flex-col justify-center shadow-2xl">
                    {/* Decorative background elements */}
                    <div className="absolute top-0 right-0 p-4 opacity-10">
                        <IconDisplay icon={journeySteps[activeStep].icon} />
                    </div>

                    {journeySteps[activeStep].content}

                    <div className="mt-8 flex justify-between pt-8 border-t border-terminal-border/50">
                        <button
                            onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
                            disabled={activeStep === 0}
                            className="text-sm text-terminal-text-dim hover:text-terminal-text disabled:opacity-30 transition-colors"
                        >
                            ← Previous
                        </button>
                        <button
                            onClick={() => setActiveStep(Math.min(journeySteps.length - 1, activeStep + 1))}
                            disabled={activeStep === journeySteps.length - 1}
                            className="text-sm text-terminal-text-dim hover:text-terminal-text disabled:opacity-30 transition-colors"
                        >
                            Next →
                        </button>
                    </div>
                </div>
            </div>

            {/* Future Roadmap Section */}
            <div className="border-t border-terminal-border pt-16">
                <h2 className="text-2xl font-bold text-terminal-text mb-8 flex items-center gap-2">
                    <Flag className="w-6 h-6 text-terminal-red" />
                    Future Plans
                </h2>

                <div className="grid md:grid-cols-3 gap-6">
                    {futureRoadmap.map((item) => (
                        <div key={item.title} className="bg-terminal-bg-light border border-terminal-border p-6 rounded-lg hover:border-terminal-green transition-colors group">
                            <div className="flex justify-between items-start mb-4">
                                <span className="text-xs font-mono text-terminal-green bg-terminal-green/10 px-2 py-1 rounded">{item.quarter}</span>
                                {item.status === 'In Progress' && <span className="flex h-2 w-2 rounded-full bg-terminal-yellow animate-pulse" />}
                            </div>
                            <h3 className="text-lg font-bold text-terminal-text mb-2 group-hover:text-terminal-green transition-colors">{item.title}</h3>
                            <p className="text-sm text-terminal-text-dim">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

function IconDisplay({ icon: Icon }: { icon: any }) {
    return <Icon className="w-32 h-32" />
}
