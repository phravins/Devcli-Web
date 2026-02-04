import { MoveLeft, GitPullRequest, Bug, Lightbulb, GitMerge } from 'lucide-react';

export default function Contributing({ onBack }: { onBack: () => void }) {
    return (
        <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">

                {/* Navigation */}
                <div className="flex items-center justify-between mb-8">
                    <button
                        onClick={onBack}
                        className="group flex items-center gap-2 text-terminal-text-dim hover:text-terminal-green transition-colors"
                    >
                        <MoveLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                        <span>cd ..</span>
                    </button>
                    <div className="flex items-center gap-2 text-terminal-text-dim">
                        <GitPullRequest className="w-5 h-5" />
                        <span className="text-sm">CONTRIBUTING.md</span>
                    </div>
                </div>

                {/* Header */}
                <div className="text-center mb-12 animate-fade-in">
                    <h1 className="text-3xl md:text-5xl font-bold text-terminal-text mb-4">
                        Contributing to DevCLI
                    </h1>
                    <p className="text-terminal-text-dim max-w-2xl mx-auto">
                        First off, thanks for taking the time to contribute! We welcome contributions of all forms.
                    </p>
                </div>

                {/* Steps */}
                <div className="grid md:grid-cols-3 gap-6 mb-12 animate-fade-in">
                    <div className="bg-terminal-bg-light border border-terminal-border p-6 rounded-xl hover:border-terminal-green transition-colors">
                        <Bug className="w-8 h-8 text-terminal-red mb-4" />
                        <h3 className="text-lg font-bold text-terminal-text mb-2">Report Bugs</h3>
                        <p className="text-terminal-text-dim text-sm">
                            Found a bug? Open an issue on GitHub. Include your OS, DevCLI version, and reproduction steps.
                        </p>
                    </div>
                    <div className="bg-terminal-bg-light border border-terminal-border p-6 rounded-xl hover:border-terminal-blue transition-colors">
                        <Lightbulb className="w-8 h-8 text-terminal-blue mb-4" />
                        <h3 className="text-lg font-bold text-terminal-text mb-2">Suggest Features</h3>
                        <p className="text-terminal-text-dim text-sm">
                            Have an idea? We'd love to hear it. Submit a feature request to discuss your idea with the community.
                        </p>
                    </div>
                    <div className="bg-terminal-bg-light border border-terminal-border p-6 rounded-xl hover:border-terminal-green transition-colors">
                        <GitMerge className="w-8 h-8 text-terminal-green mb-4" />
                        <h3 className="text-lg font-bold text-terminal-text mb-2">Submit PRs</h3>
                        <p className="text-terminal-text-dim text-sm">
                            Ready to code? Fork the repo, create a branch, and submit a pull request. We review all PRs!
                        </p>
                    </div>
                </div>

                {/* Detailed Guide */}
                <div className="bg-terminal-bg-light border border-terminal-border rounded-xl p-8 animate-fade-in">
                    <h2 className="text-xl font-bold text-terminal-text mb-6">Development Workflow</h2>
                    <ol className="list-decimal pl-6 space-y-4 text-terminal-text-dim">
                        <li>
                            <strong className="text-terminal-text">Fork the repository</strong>
                            <br />
                            <code className="text-xs bg-terminal-bg px-2 py-1 rounded mt-1 inline-block">git clone https://github.com/phravins/devcli.git</code>
                        </li>
                        <li>
                            <strong className="text-terminal-text">Create a feature branch</strong>
                            <br />
                            <code className="text-xs bg-terminal-bg px-2 py-1 rounded mt-1 inline-block">git checkout -b feature/amazing-feature</code>
                        </li>
                        <li>
                            <strong className="text-terminal-text">Make your changes</strong>
                            <span className="block mt-1">Ensure code quality and run tests.</span>
                        </li>
                        <li>
                            <strong className="text-terminal-text">Commit your changes</strong>
                            <br />
                            <code className="text-xs bg-terminal-bg px-2 py-1 rounded mt-1 inline-block">git commit -m "feat: Add amazing feature"</code>
                        </li>
                        <li>
                            <strong className="text-terminal-text">Push to the branch</strong>
                            <br />
                            <code className="text-xs bg-terminal-bg px-2 py-1 rounded mt-1 inline-block">git push origin feature/amazing-feature</code>
                        </li>
                        <li>
                            <strong className="text-terminal-text">Open a Pull Request</strong>
                        </li>
                    </ol>
                </div>

            </div>
        </div>
    );
}
