import React, { useState } from 'react';
import {
    Rocket,
    Lightbulb,
    Terminal,
    Layers,
    Cpu,
    Zap,
    ArrowRight,
    CheckCircle2,
    Github,
    Wand2,
    Loader2,
    Database,
    Layout as LayoutIcon
} from 'lucide-react';
import { generateDocumentation } from '../services/gemini';

const Launchpad: React.FC = () => {
    const [prompt, setPrompt] = useState('');
    const [response, setResponse] = useState('');
    const [isGenerating, setIsGenerating] = useState(false);

    const handleTestDrive = async () => {
        if (!prompt) return;
        setIsGenerating(true);
        setResponse('');
        try {
            // Re-using the generateDocumentation service but with a "Launchpad" persona
            await generateDocumentation(`Launchpad Experiment: ${prompt}`, ['Summary', 'Quick Implementation Guide'], (chunk) => {
                setResponse(chunk);
            });
        } catch (e) {
            console.error(e);
        } finally {
            setIsGenerating(false);
        }
    };

    return (
        <div className="space-y-12 pb-12">
            {/* HERO SECTION */}
            <section className="relative overflow-hidden bg-gov-navy rounded-3xl p-8 md:p-16 text-white shadow-2xl">
                <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-gov-teal opacity-20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-blue-600 opacity-10 rounded-full blur-3xl"></div>

                <div className="relative z-10 max-w-3xl">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full text-gov-teal text-sm font-bold mb-6 border border-white/10 backdrop-blur-md">
                        <Rocket size={16} /> Welcome to the AI Meetup Edition
                    </div>
                    <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
                        Build Your <span className="text-gov-teal">AI Portfolio</span> in 15 Minutes.
                    </h1>
                    <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                        Stop experimenting in silos. Start managing your AI initiatives as a strategic capability using the <span className="font-bold border-b-2 border-gov-teal">Three-Layer Architecture</span>.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <button className="px-8 py-4 bg-gov-teal hover:bg-gov-tealDark text-white rounded-xl font-bold transition-all flex items-center gap-2 shadow-lg shadow-gov-teal/20">
                            Get Started Now <ArrowRight size={20} />
                        </button>
                        <a href="https://github.com/maree217/strata-ai-builder" target="_blank" rel="noreferrer" className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-xl font-bold transition-all flex items-center gap-2 backdrop-blur-sm">
                            <Github size={20} /> Star on GitHub
                        </a>
                    </div>
                </div>
            </section>

            {/* THREE LAYERS SECTION */}
            <section>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16 text-left">
                    <div>
                        <h2 className="text-3xl font-bold text-gov-navy mb-6">The Philosophy: The Three Layers</h2>
                        <p className="text-gov-secondary text-lg mb-6 leading-relaxed">
                            Successful AI initiatives aren't built on luck—they're built on a solid foundation.
                            <strong> Strata</strong> enforces a structured approach that ensures every project is secure, smart, and user-ready.
                        </p>
                        <div className="space-y-4">
                            <p className="flex items-start gap-3 text-gov-navy">
                                <span className="font-bold text-gov-teal shrink-0">01. Infrastructure:</span> The foundation of secure cloud and data privacy.
                            </p>
                            <p className="flex items-start gap-3 text-gov-navy">
                                <span className="font-bold text-gov-teal shrink-0">02. Intelligence:</span> The brain of prompt logic and model selection.
                            </p>
                            <p className="flex items-start gap-3 text-gov-navy">
                                <span className="font-bold text-gov-teal shrink-0">03. Experience:</span> The delivery of premium, high-impact user interfaces.
                            </p>
                        </div>
                    </div>
                    <div className="bg-white p-4 rounded-3xl shadow-2xl border border-gray-100 group overflow-hidden">
                        <img
                            src="/assets/diagrams/strata-philosophy.png"
                            alt="Three Layer Philosophy"
                            className="w-full h-auto rounded-2xl transform group-hover:scale-105 transition-transform duration-700"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Layer 1 */}
                    <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all group">
                        <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                            <Database size={28} />
                        </div>
                        <h3 className="text-xl font-bold text-gov-navy mb-3">Layer 1: Infrastructure</h3>
                        <p className="text-gov-secondary leading-relaxed mb-6">
                            The foundation. API Keys, Cloud compute, and Data privacy. Without this, your AI is just a toy.
                        </p>
                        <div className="space-y-2">
                            <div className="flex items-center gap-2 text-sm text-gov-navy font-medium">
                                <CheckCircle2 size={16} className="text-gov-green" /> Google Cloud / Firebase
                            </div>
                            <div className="flex items-center gap-2 text-sm text-gov-navy font-medium">
                                <CheckCircle2 size={16} className="text-gov-green" /> Gemini API Infrastructure
                            </div>
                        </div>
                    </div>

                    {/* Layer 2 */}
                    <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all group">
                        <div className="w-14 h-14 bg-gov-teal/10 rounded-xl flex items-center justify-center text-gov-teal mb-6 group-hover:bg-gov-teal group-hover:text-white transition-colors">
                            <Cpu size={28} />
                        </div>
                        <h3 className="text-xl font-bold text-gov-navy mb-3">Layer 2: Intelligence</h3>
                        <p className="text-gov-secondary leading-relaxed mb-6">
                            The brain. Engineering prompts, fine-tuning models, and designing the logic that makes it "smart."
                        </p>
                        <div className="space-y-2">
                            <div className="flex items-center gap-2 text-sm text-gov-navy font-medium">
                                <CheckCircle2 size={16} className="text-gov-green" /> Prompt Engineering
                            </div>
                            <div className="flex items-center gap-2 text-sm text-gov-navy font-medium">
                                <CheckCircle2 size={16} className="text-gov-green" /> Multi-Agent Workflows
                            </div>
                        </div>
                    </div>

                    {/* Layer 3 */}
                    <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all group">
                        <div className="w-14 h-14 bg-gov-navy/5 rounded-xl flex items-center justify-center text-gov-navy mb-6 group-hover:bg-gov-navy group-hover:text-white transition-colors">
                            <LayoutIcon size={28} />
                        </div>
                        <h3 className="text-xl font-bold text-gov-navy mb-3">Layer 3: Experience</h3>
                        <p className="text-gov-secondary leading-relaxed mb-6">
                            The delivery. How users interact with the AI. Dashboards, voice interfaces, and seamless apps.
                        </p>
                        <div className="space-y-2">
                            <div className="flex items-center gap-2 text-sm text-gov-navy font-medium">
                                <CheckCircle2 size={16} className="text-gov-green" /> React Dashboards
                            </div>
                            <div className="flex items-center gap-2 text-sm text-gov-navy font-medium">
                                <CheckCircle2 size={16} className="text-gov-green" /> Human-in-the-loop UI
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* QUICK BUILD TEST DRIVE */}
            <section className="bg-gray-50 rounded-3xl p-8 border border-gray-200">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-bold text-gov-navy mb-4 flex items-center gap-3">
                            <Wand2 className="text-gov-teal" /> Test Drive Layer 2
                        </h2>
                        <p className="text-gov-secondary mb-8">
                            Want to see AI in action right now? Type an idea for an AI tool below, and we'll use <strong>Layer 2 (Gemini)</strong> to draft a project plan for you.
                        </p>

                        <div className="space-y-4">
                            <div className="relative">
                                <input
                                    type="text"
                                    value={prompt}
                                    onChange={(e) => setPrompt(e.target.value)}
                                    placeholder="e.g. A chatbot for my local bakery"
                                    className="w-full px-6 py-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-gov-teal focus:border-transparent outline-none transition-all shadow-sm"
                                />
                                <button
                                    onClick={handleTestDrive}
                                    disabled={isGenerating || !prompt}
                                    className="absolute right-2 top-2 px-6 py-2 bg-gov-navy text-white rounded-lg font-bold hover:bg-black transition-all disabled:opacity-50"
                                >
                                    {isGenerating ? <Loader2 className="animate-spin" size={20} /> : "Build"}
                                </button>
                            </div>
                            <p className="text-xs text-gray-500 italic">
                                Note: This requires a <code>VITE_GEMINI_API_KEY</code> in your .env file to work locally.
                            </p>
                        </div>
                    </div>

                    <div className="bg-white rounded-2xl p-6 shadow-inner border border-gray-100 h-[300px] overflow-y-auto font-mono text-sm relative">
                        {!response && !isGenerating && (
                            <div className="flex flex-col items-center justify-center h-full text-gray-400">
                                <Terminal size={32} className="mb-2" />
                                <p>Output will appear here...</p>
                            </div>
                        )}
                        {response && (
                            <div className="whitespace-pre-wrap text-gov-navy animate-in fade-in duration-500">
                                {response}
                            </div>
                        )}
                        {isGenerating && !response && (
                            <div className="flex items-center gap-3 text-gov-teal animate-pulse h-full justify-center">
                                <Zap size={20} /> Initialising Layer 2...
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* CALL TO ACTION */}
            <section className="text-center p-12 bg-white rounded-3xl border border-gov-teal/20 shadow-xl shadow-gov-teal/5">
                <h2 className="text-3xl font-bold text-gov-navy mb-4">Ready to go deeper?</h2>
                <p className="text-gov-secondary mb-8 max-w-xl mx-auto">
                    Explore the Dashboard to see how to manage multiple initiatives, or dive into the code to start building your own layers.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="p-6 bg-gray-50 rounded-2xl hover:bg-gov-teal hover:text-white transition-all cursor-pointer">
                        <Layers className="mx-auto mb-3" />
                        <span className="font-bold">Portfolio</span>
                    </div>
                    <div className="p-6 bg-gray-50 rounded-2xl hover:bg-gov-teal hover:text-white transition-all cursor-pointer">
                        <Zap className="mx-auto mb-3" />
                        <span className="font-bold">Pipeline</span>
                    </div>
                    <div className="p-6 bg-gray-50 rounded-2xl hover:bg-gov-teal hover:text-white transition-all cursor-pointer">
                        <Terminal className="mx-auto mb-3" />
                        <span className="font-bold">Code base</span>
                    </div>
                    <div className="p-6 bg-gray-50 rounded-2xl hover:bg-gov-teal hover:text-white transition-all cursor-pointer">
                        <Lightbulb className="mx-auto mb-3" />
                        <span className="font-bold">Workshops</span>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Launchpad;
