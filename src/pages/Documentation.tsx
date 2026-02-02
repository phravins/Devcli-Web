import { Terminal, MoveLeft, BookOpen, Cpu, Globe, Keyboard, Server, Code, FileText } from 'lucide-react';

export default function Documentation({ onBack }: { onBack: () => void }) {
    return (
        <div className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
            {/* Header / Back Button */}
            <div className="flex items-center justify-between mb-12">
                <button
                    onClick={onBack}
                    className="group flex items-center gap-2 text-terminal-text-dim hover:text-terminal-green transition-colors"
                >
                    <MoveLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                    <span>cd ..</span>
                </button>
                <div className="flex items-center gap-2 text-terminal-text-dim">
                    <BookOpen className="w-5 h-5" />
                    <span className="text-sm">docs/README.md</span>
                </div>
            </div>

            <article className="prose prose-invert prose-terminal max-w-none space-y-12">

                {/* Title Section */}
                <section className="border-b border-terminal-border pb-8">
                    <h1 className="text-4xl md:text-5xl font-bold text-terminal-green mb-4 typing-cursor inline-block">
                        DevCLI - Developer Command Line Interface
                    </h1>
                    <p className="text-xl text-terminal-text-dim mt-4 leading-relaxed">
                        DevCLI is a terminal-based development workspace that consolidates essential developer tools into a single unified interface. It manages projects, files, virtual environments, and provides AI-powered assistance without requiring you to leave the command line.
                    </p>
                    <div className="mt-6 p-4 bg-terminal-bg-light border border-terminal-border rounded-lg">
                        <p className="text-terminal-blue">
                            The application is built using Go and the Bubble Tea framework, providing a fast and responsive terminal user interface that works across all major operating systems.
                        </p>
                    </div>
                </section>

                {/* What does devcli do? */}
                <section>
                    <h2 className="text-2xl font-bold text-terminal-blue mb-4 flex items-center gap-3">
                        <Terminal className="w-6 h-6" />
                        What does DevCLI do?
                    </h2>
                    <p className="text-terminal-text leading-relaxed mb-4">
                        DevCLI serves as a central hub for common development tasks. Instead of juggling multiple terminal windows and remembering dozens of commands, developers can access everything they need through an intuitive keyboard-driven interface.
                    </p>
                    <h3 className="text-lg font-semibold text-terminal-green mb-3">Key Use Cases:</h3>
                    <ul className="list-disc list-inside space-y-2 text-terminal-text-dim ml-4">
                        <li>Work with multiple programming languages and frameworks</li>
                        <li>Manage several projects simultaneously</li>
                        <li>Need quick access to project scaffolding and templates</li>
                        <li>Want to maintain consistent development environments</li>
                        <li>Prefer keyboard navigation over graphical tools</li>
                    </ul>
                </section>

                {/* System Requirements & Dependencies */}
                <div className="grid md:grid-cols-2 gap-8">
                    <section>
                        <h2 className="text-2xl font-bold text-terminal-blue mb-4 flex items-center gap-3">
                            <Cpu className="w-6 h-6" />
                            System Requirements
                        </h2>
                        <ul className="space-y-3 text-terminal-text bg-terminal-bg-light p-6 rounded-lg border border-terminal-border">
                            <li className="flex items-start gap-2">
                                <span className="text-terminal-green mt-1">✓</span>
                                <span>Go 1.21 or higher (for building from source)</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-terminal-green mt-1">✓</span>
                                <span>Python 3.8 or newer (required for virtual environment features)</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-terminal-green mt-1">✓</span>
                                <span>Node.js (optional, needed for JavaScript project templates)</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-terminal-green mt-1">✓</span>
                                <span>Terminal with Unicode support (for proper rendering)</span>
                            </li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-terminal-blue mb-4 flex items-center gap-3">
                            <Globe className="w-6 h-6" />
                            Core Dependencies
                        </h2>
                        <ul className="space-y-2 text-terminal-text-dim text-sm">
                            <li><strong className="text-terminal-text">Bubble Tea (v1.3.4)</strong> - Terminal User Interface framework</li>
                            <li><strong className="text-terminal-text">Bubbles (v0.21.0)</strong> - TUI components library</li>
                            <li><strong className="text-terminal-text">Lipgloss (v1.1.1)</strong> - Terminal styling library</li>
                            <li><strong className="text-terminal-text">Glamour (v0.10.0)</strong> - Markdown renderer</li>
                            <li><strong className="text-terminal-text">Cobra (v1.8.0)</strong> - CLI framework</li>
                            <li><strong className="text-terminal-text">Viper (v1.21.0)</strong> - Configuration management</li>
                        </ul>
                        <p className="mt-4 text-xs text-terminal-text-dim italic">
                            Note: Dependencies are automatically managed through Go modules.
                        </p>
                    </section>
                </div>

                {/* Installation */}
                <section>
                    <h2 className="text-2xl font-bold text-terminal-blue mb-6">Installation</h2>

                    <div className="grid gap-8">
                        <div className="bg-terminal-bg-light border border-terminal-border rounded-lg p-6">
                            <h3 className="text-lg font-semibold text-terminal-green mb-4">METHOD 1: Single Command (Recommended)</h3>
                            <p className="mb-4 text-terminal-text-dim">Install DevCLI directly using the go install command:</p>
                            <div className="bg-black/50 p-4 rounded font-mono text-terminal-text mb-4 border border-terminal-border/50">
                                $ go install github.com/phravins/devcli@latest
                            </div>
                            <p className="text-sm text-terminal-text-dim">
                                This will download, build, and install the DevCLI binary to your <code className="text-terminal-orange">$GOPATH/bin</code> directory. Ensure that is in your system PATH.
                            </p>
                        </div>

                        <div className="bg-terminal-bg-light border border-terminal-border rounded-lg p-6">
                            <h3 className="text-lg font-semibold text-terminal-green mb-4">METHOD 2: Building from Source</h3>
                            <div className="space-y-2 font-mono text-sm bg-black/50 p-4 rounded border border-terminal-border/50">
                                <div className="flex gap-2"><span className="text-terminal-text-dim">$</span> <span>git clone https://github.com/phravins/devcli.git</span></div>
                                <div className="flex gap-2"><span className="text-terminal-text-dim">$</span> <span>cd devcli</span></div>
                                <div className="flex gap-2"><span className="text-terminal-text-dim">$</span> <span>go build -o devcli.exe .</span></div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Core Features */}
                <section>
                    <h2 className="text-3xl font-bold text-terminal-green mb-8 text-center border-t border-terminal-border pt-8">Core Features</h2>

                    <div className="space-y-12">
                        {/* Feature 1 */}
                        <div>
                            <h3 className="text-xl font-bold text-terminal-blue mb-3">Project Creation and Management</h3>
                            <p className="text-terminal-text-dim mb-4">DevCLI provides project scaffolding tools that generate complete project structures from templates, eliminating manual setup.</p>
                            <ul className="list-disc list-inside space-y-1 text-terminal-text ml-4">
                                <li>Predefined templates for Go, Python, Node.js, React, etc.</li>
                                <li>Smart naming with auto-incrementing.</li>
                                <li>Automated package manager installation (npm install, pip install).</li>
                                <li>Project history tracking and backups.</li>
                            </ul>
                        </div>

                        {/* Feature 2 */}
                        <div>
                            <h3 className="text-xl font-bold text-terminal-blue mb-3">Virtual Environment Wizard</h3>
                            <p className="text-terminal-text-dim mb-4">Comprehensive tool for managing Python virtual environments and Node.js node_modules across your entire workspace.</p>
                            <ul className="list-disc list-inside space-y-1 text-terminal-text ml-4">
                                <li>Recursive scanning regardless of nesting depth.</li>
                                <li>Requirements synchronization (requirements.txt generation).</li>
                                <li>Environment cloning and cleanup.</li>
                                <li>Dependency conflict detection.</li>
                            </ul>
                        </div>

                        {/* Feature 3 */}
                        <div>
                            <h3 className="text-xl font-bold text-terminal-blue mb-3 flex items-center gap-2"><Server className="w-5 h-5" /> Dev Server Launcher</h3>
                            <p className="text-terminal-text-dim mb-4">Intelligent development server manager that detects the correct command and captures output.</p>
                            <ul className="list-disc list-inside space-y-1 text-terminal-text ml-4">
                                <li>Auto-detection (package.json, go.mod, etc.).</li>
                                <li>Live log streaming with color preservation.</li>
                                <li>Full text search and filtering in logs.</li>
                            </ul>
                        </div>

                        {/* Feature 4 */}
                        <div>
                            <h3 className="text-xl font-bold text-terminal-blue mb-3 flex items-center gap-2"><Code className="w-5 h-5" /> Boilerplate Code Generator</h3>
                            <ul className="list-disc list-inside space-y-1 text-terminal-text ml-4">
                                <li>Snippets for CRUD APIs, Auth, DB connections.</li>
                                <li>Multi-language support (Go, Python, JS, Rust, C++, etc.).</li>
                                <li>Template saving and architecture generation.</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Bonus Features & AI */}
                <section className="grid md:grid-cols-2 gap-8 pt-8">
                    <div>
                        <h2 className="text-2xl font-bold text-terminal-purple mb-4">Bonus Features</h2>
                        <ul className="space-y-4">
                            <li className="bg-terminal-bg-light p-4 rounded border border-terminal-border">
                                <strong className="text-terminal-green block mb-1">Project Dashboard</strong>
                                <span className="text-sm text-terminal-text-dim">Scans workspace, detects tech stack, shows status (Active/Broken/Archived).</span>
                            </li>
                            <li className="bg-terminal-bg-light p-4 rounded border border-terminal-border">
                                <strong className="text-terminal-green block mb-1">Task Runner</strong>
                                <span className="text-sm text-terminal-text-dim">Auto-detects npm scripts, makefiles, cargo commands. One-click execution.</span>
                            </li>
                            <li className="bg-terminal-bg-light p-4 rounded border border-terminal-border">
                                <strong className="text-terminal-green block mb-1">Smart File Creator</strong>
                                <span className="text-sm text-terminal-text-dim">Generates .env, Dockerfile, GitHub Actions with best practices.</span>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold text-terminal-purple mb-4">AI Integration</h2>
                        <div className="bg-terminal-bg-light p-6 rounded border border-terminal-border h-full">
                            <p className="text-terminal-text mb-4">Built-in AI chat interface supporting multiple backends for coding assistance without leaving the terminal.</p>
                            <ul className="list-disc list-inside space-y-2 text-terminal-text-dim text-sm">
                                <li>Ollama (local), Hugging Face, OpenAI, Anthropic, Gemini.</li>
                                <li>Context-aware code suggestions.</li>
                                <li>Works offline with local models.</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* File Manager & Editor */}
                <section className="grid md:grid-cols-2 gap-8">
                    <div>
                        <h3 className="text-xl font-bold text-terminal-blue mb-3 flex items-center gap-2"><FileText className="w-5 h-5" /> File Manager</h3>
                        <p className="text-sm text-terminal-text-dim mb-2">Keyboard-driven explorer.</p>
                        <ul className="list-disc list-inside text-sm text-terminal-text">
                            <li>Tree-style navigation</li>
                            <li>Fuzzy search</li>
                            <li>Standard file ops (copy, move, delete)</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-terminal-blue mb-3 flex items-center gap-2"><Code className="w-5 h-5" /> Built-in Editor</h3>
                        <p className="text-sm text-terminal-text-dim mb-2">Lightweight, for quick edits.</p>
                        <ul className="list-disc list-inside text-sm text-terminal-text">
                            <li>Syntax highlighting for Python</li>
                            <li>Direct code execution (Ctrl+R)</li>
                            <li>Multi-language support</li>
                        </ul>
                    </div>
                </section>

                {/* Shortcuts */}
                <section>
                    <h2 className="text-2xl font-bold text-terminal-blue mb-6 flex items-center gap-3">
                        <Keyboard className="w-6 h-6" /> Keyboard Shortcuts
                    </h2>
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                        <div className="p-4 border border-terminal-border rounded bg-terminal-bg-light">
                            <h4 className="text-terminal-green font-bold mb-2">Global</h4>
                            <div className="flex justify-between mb-1"><span className="text-terminal-text-dim">Nav</span> <kbd className="bg-terminal-border px-1 rounded">Arrows</kbd></div>
                            <div className="flex justify-between mb-1"><span className="text-terminal-text-dim">Select</span> <kbd className="bg-terminal-border px-1 rounded">Enter</kbd></div>
                            <div className="flex justify-between"><span className="text-terminal-text-dim">Back/Exit</span> <kbd className="bg-terminal-border px-1 rounded">Esc/Q</kbd></div>
                        </div>
                        <div className="p-4 border border-terminal-border rounded bg-terminal-bg-light">
                            <h4 className="text-terminal-green font-bold mb-2">Project Tools</h4>
                            <div className="flex justify-between mb-1"><span className="text-terminal-text-dim">Backup</span> <kbd className="bg-terminal-border px-1 rounded">B</kbd></div>
                            <div className="flex justify-between"><span className="text-terminal-text-dim">Delete History</span> <kbd className="bg-terminal-border px-1 rounded">D</kbd></div>
                        </div>
                        <div className="p-4 border border-terminal-border rounded bg-terminal-bg-light">
                            <h4 className="text-terminal-green font-bold mb-2">Dev Server</h4>
                            <div className="flex justify-between mb-1"><span className="text-terminal-text-dim">Start/Stop</span> <kbd className="bg-terminal-border px-1 rounded">S</kbd></div>
                            <div className="flex justify-between mb-1"><span className="text-terminal-text-dim">Filter</span> <kbd className="bg-terminal-border px-1 rounded">F</kbd></div>
                            <div className="flex justify-between"><span className="text-terminal-text-dim">Search</span> <kbd className="bg-terminal-border px-1 rounded">/</kbd></div>
                        </div>
                    </div>
                </section>

                {/* Configuration */}
                <section className="bg-terminal-bg-light border-l-4 border-terminal-purple p-6">
                    <h2 className="text-xl font-bold text-terminal-text mb-2">Configuration</h2>
                    <p className="text-terminal-text-dim mb-4">Stored in <code className="text-terminal-orange">~/.devcli/config.yaml</code></p>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                        <div><span className="text-terminal-blue">provider</span>: AI backend selection</div>
                        <div><span className="text-terminal-blue">api_key</span>: Cloud credentials</div>
                        <div><span className="text-terminal-blue">workspace</span>: Default project dir</div>
                        <div><span className="text-terminal-blue">ollama_url</span>: Local server address</div>
                    </div>
                </section>

            </article>

            {/* Footer Area */}
            <div className="mt-20 border-t border-terminal-border pt-8 text-center text-terminal-text-dim">
                <p className="mb-2">Contributions are welcome at <a href="https://github.com/phravins/devcli" className="text-terminal-green hover:underline">github.com/phravins/devcli</a></p>
                <p className="text-xs">Licensed under MIT License</p>
            </div>
        </div>
    );
}
