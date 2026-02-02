import { MoveLeft, Shield, Check, X, AlertTriangle, Mail } from 'lucide-react';

const supportedVersions = [
    { version: '1.x', supported: true, endOfLife: 'TBD' },
    { version: '0.9.x', supported: false, endOfLife: '2025-12-31' },
];

export default function Security({ onBack }: { onBack: () => void }) {
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
                        <Shield className="w-5 h-5" />
                        <span className="text-sm">SECURITY.md</span>
                    </div>
                </div>

                {/* Content Container */}
                <div className="space-y-8 animate-fade-in">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <h1 className="text-3xl md:text-5xl font-bold text-terminal-text mb-4">
                            Security Policy
                        </h1>
                        <p className="text-terminal-text-dim max-w-2xl mx-auto">
                            We take the security of DevCLI seriously. This document outlines our security policy and how to report vulnerabilities.
                        </p>
                    </div>

                    {/* Supported Versions */}
                    <div className="bg-terminal-bg-light border border-terminal-border rounded-xl p-6 sm:p-8">
                        <h2 className="text-xl font-bold text-terminal-text mb-6 flex items-center gap-2">
                            <Check className="w-5 h-5 text-terminal-green" />
                            Supported Versions
                        </h2>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left text-sm">
                                <thead className="text-terminal-text-dim bg-terminal-bg border-b border-terminal-border">
                                    <tr>
                                        <th className="px-4 py-3 font-medium">Version</th>
                                        <th className="px-4 py-3 font-medium">Supported</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-terminal-border">
                                    {supportedVersions.map((v) => (
                                        <tr key={v.version} className="group hover:bg-terminal-bg/50 transition-colors">
                                            <td className="px-4 py-3 text-terminal-text">{v.version}</td>
                                            <td className="px-4 py-3">
                                                {v.supported ? (
                                                    <span className="inline-flex items-center gap-1.5 text-terminal-green font-medium">
                                                        <Check className="w-4 h-4" />
                                                        Yes
                                                    </span>
                                                ) : (
                                                    <span className="inline-flex items-center gap-1.5 text-terminal-red font-medium">
                                                        <X className="w-4 h-4" />
                                                        No
                                                    </span>
                                                )}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Reporting */}
                    <div className="bg-terminal-bg-light border border-terminal-border rounded-xl p-6 sm:p-8">
                        <h2 className="text-xl font-bold text-terminal-text mb-6 flex items-center gap-2">
                            <AlertTriangle className="w-5 h-5 text-terminal-yellow" />
                            Reporting a Vulnerability
                        </h2>
                        <div className="text-terminal-text-dim space-y-4 leading-relaxed">
                            <p>
                                If you discover a security vulnerability within DevCLI, please send an email to our security team via <strong className="text-terminal-text">security@devcli.sh</strong>.
                            </p>
                            <p>
                                We strongly encourage you to encrypt your message using our PGP key.
                            </p>
                            <p>
                                Please <strong>do not</strong> create public GitHub issues for security vulnerabilities.
                            </p>

                            <div className="pt-6">
                                <a
                                    href="mailto:security@devcli.sh"
                                    className="inline-flex items-center gap-2 px-6 py-3 bg-terminal-green text-terminal-bg font-bold rounded-lg hover:bg-terminal-green-bright transition-colors"
                                >
                                    <Mail className="w-4 h-4" />
                                    Email Support
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
