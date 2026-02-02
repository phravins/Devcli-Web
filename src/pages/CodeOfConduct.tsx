import { MoveLeft, HeartHandshake } from 'lucide-react';

export default function CodeOfConduct({ onBack }: { onBack: () => void }) {
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
                        <HeartHandshake className="w-5 h-5" />
                        <span className="text-sm">CODE_OF_CONDUCT.md</span>
                    </div>
                </div>

                {/* Content Container */}
                <div className="bg-terminal-bg-light border border-terminal-border rounded-xl p-8 animate-fade-in">
                    <h1 className="text-3xl font-bold text-terminal-text mb-8">Contributor Covenant Code of Conduct</h1>

                    <div className="space-y-6 text-terminal-text-dim leading-relaxed">
                        <section>
                            <h2 className="text-xl font-bold text-terminal-text mb-3">Our Pledge</h2>
                            <p>
                                We as members, contributors, and leaders pledge to make participation in our
                                community a harassment-free experience for everyone, regardless of age, body
                                size, visible or invisible disability, ethnicity, sex characteristics, gender
                                identity and expression, level of experience, education, socio-economic status,
                                nationality, personal appearance, race, caste, color, religion, or sexual
                                identity and orientation.
                            </p>
                            <p className="mt-2">
                                We pledge to act and interact in ways that contribute to an open, welcoming,
                                diverse, inclusive, and healthy community.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-terminal-text mb-3">Our Standards</h2>
                            <p>
                                Examples of behavior that contributes to a positive environment for our
                                community include:
                            </p>
                            <ul className="list-disc pl-6 mt-2 space-y-1">
                                <li>Demonstrating empathy and kindness toward other people</li>
                                <li>Being respectful of differing opinions, viewpoints, and experiences</li>
                                <li>Giving and gracefully accepting constructive feedback</li>
                                <li>Accepting responsibility and apologizing to those affected by our mistakes, and learning from the experience</li>
                                <li>Focusing on what is best not just for us as individuals, but for the overall community</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-terminal-text mb-3">Enforcement</h2>
                            <p>
                                Instances of abusive, harassing, or otherwise unacceptable behavior may be
                                reported to the community leaders responsible for enforcement at
                                <strong className="text-terminal-text ml-1">security@devcli.sh</strong>.
                                All complaints will be reviewed and investigated promptly and fairly.

                                All community leaders are obligated to respect the privacy and security of the
                                reporter of any incident.
                            </p>
                        </section>
                    </div>
                </div>

            </div>
        </div>
    );
}
