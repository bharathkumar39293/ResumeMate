import React from 'react'

const footerLinks = {
    product: [
        { label: 'Features', href: '/#features' },
        { label: 'Templates', href: '/app' },
        { label: 'AI Enhancement', href: '/app' },
        { label: 'Pricing', href: '/app', badge: 'Free' }
    ],
    resources: [
        { label: 'Resume Tips', href: '/#features' },
        { label: 'Career Guides', href: '/#features' },
        { label: 'Help Center', href: '/#features' },
        { label: 'Blog', href: '/#features' }
    ],
    company: [
        { label: 'About', href: '/#features' },
        { label: 'Contact', href: '/#features' },
        { label: 'Privacy Policy', href: '/#features' },
        { label: 'Terms', href: '/#features' }
    ],
    platform: [
        { label: 'Security', href: '/#features' },
        { label: 'Status', href: '/#features' },
        { label: 'Changelog', href: '/#features' },
        { label: 'Roadmap', href: '/#features' }
    ]
};

const Footer = () => {
    const year = new Date().getFullYear();

    const LinkColumn = ({ title, items }) => (
        <div>
            <h3 className="text-white font-semibold mb-4 tracking-wide text-sm uppercase">{title}</h3>
            <ul className="space-y-3">
                {items.map((l) => (
                    <li key={l.label}>
                        <a href={l.href} className="group flex items-center gap-2 text-slate-400 hover:text-blue-400 transition-colors text-sm">
                            <span>{l.label}</span>
                            {l.badge && (
                                <span className="text-[10px] leading-none px-2 py-1 rounded-full bg-blue-600 text-white font-medium group-hover:bg-blue-500">
                                    {l.badge}
                                </span>
                            )}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );

    const social = [
        { name: 'X', href: 'https://x.com/', icon: (
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        )},
        { name: 'LinkedIn', href: 'https://www.linkedin.com/company/', icon: (
            <>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
                <circle cx="4" cy="4" r="2" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
            </>
        )},
        { name: 'GitHub', href: 'https://github.com/', icon: (
            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
        )},
        { name: 'YouTube', href: 'https://www.youtube.com/', icon: (
            <>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </>
        )}
    ];

    const trustBadges = [
        { label: 'SSL Secured', icon: <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd"/> },
        { label: 'GDPR Compliant', icon: <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/> },
        { label: 'ATS Verified', icon: <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/> }
    ];

    const handleSubscribe = (e) => {
        e.preventDefault();
        // TODO: Hook up to backend / newsletter service
    };

    return (
        <footer className="relative mt-32 bg-slate-950 text-slate-300 overflow-hidden">
            {/* Decorative background */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.12),transparent_60%),radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.12),transparent_55%)]" />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:46px_46px] opacity-40" />
            </div>

            {/* Pre-footer CTA strip */}
            <div className="relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="-mt-24 mb-16 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 rounded-3xl p-8 md:p-12 shadow-2xl ring-1 ring-blue-400/30 overflow-hidden">
                        <div className="absolute inset-0 opacity-20 mix-blend-overlay bg-[linear-gradient(120deg,rgba(255,255,255,0.2)_0%,transparent_35%,transparent_65%,rgba(255,255,255,0.15)_100%)]" />
                        <div className="relative flex flex-col lg:flex-row gap-10 items-start lg:items-center justify-between">
                            <div className="flex-1">
                                <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-1.5 mb-4">
                                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20"><path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"/></svg>
                                    <span className="text-xs font-medium text-white tracking-wide">AI BOOSTED</span>
                                </div>
                                <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 leading-snug">Supercharge your resume today</h2>
                                <p className="text-blue-50/90 max-w-xl text-sm md:text-base">Join thousands of professionals using AI-enhanced, ATS-optimized templates to increase interview callbacks and accelerate job offers.</p>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
                                <a href="/app" className="group flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-white text-blue-700 font-semibold shadow-lg shadow-black/10 hover:shadow-xl hover:bg-blue-50 transition-all duration-200">
                                    <span>Build Your Resume</span>
                                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6"/></svg>
                                </a>
                                <a href="/#features" className="px-7 py-4 rounded-xl font-semibold bg-white/10 border border-white/20 text-white backdrop-blur-sm hover:bg-white/15 transition-colors">Explore Features</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid gap-12 lg:gap-16 pb-16 pt-4 md:grid-cols-2 lg:grid-cols-12">
                    {/* Brand + newsletter */}
                        <div className="lg:col-span-4">
                            <a href="/" className="inline-flex items-center gap-2 mb-6">
                                <img src="/logo.svg" alt="ResumeMate" className="h-9 w-auto brightness-0 invert" />
                            </a>
                            <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-sm">ResumeMate helps you craft polished, keyword-rich resumes with AI assistance and recruiter-approved layouts.</p>

                            <form onSubmit={handleSubscribe} className="space-y-3">
                                <label className="block text-xs font-medium tracking-wide text-slate-400 uppercase">Get job search tips & updates</label>
                                <div className="flex items-stretch gap-2">
                                    <input type="email" required placeholder="you@example.com" className="w-full rounded-lg bg-slate-800/70 border border-slate-700 px-4 py-3 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-400" />
                                    <button type="submit" className="px-5 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold transition-colors">Subscribe</button>
                                </div>
                                <p className="text-[10px] text-slate-500">We respect your privacy. Unsubscribe anytime.</p>
                            </form>

                            {/* Social */}
                            <div className="flex items-center gap-2 mt-8">
                                {social.map(s => (
                                    <a key={s.name} href={s.href} target="_blank" rel="noreferrer" aria-label={s.name} className="group w-10 h-10 rounded-lg bg-slate-800/70 hover:bg-blue-600 flex items-center justify-center transition-all duration-200 border border-slate-700/60 hover:border-blue-500">
                                        <svg className="w-4 h-4 text-slate-300 group-hover:text-white transition-colors" fill={s.name === 'LinkedIn' || s.name === 'YouTube' ? 'none' : 'currentColor'} stroke={s.name === 'LinkedIn' || s.name === 'YouTube' ? 'currentColor' : 'none'} viewBox="0 0 24 24">{s.icon}</svg>
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Link columns */}
                        <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10">
                            <LinkColumn title="Product" items={footerLinks.product} />
                            <LinkColumn title="Resources" items={footerLinks.resources} />
                            <LinkColumn title="Company" items={footerLinks.company} />
                            <LinkColumn title="Platform" items={footerLinks.platform} />
                        </div>
                </div>

                {/* Divider */}
                <div className="border-t border-slate-800/60 pt-8 pb-12 flex flex-col md:flex-row gap-6 md:items-center md:justify-between text-xs text-slate-500">
                    <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
                        <span>© {year} ResumeMate. All rights reserved.</span>
                        <span className="hidden md:inline-block w-px h-3 bg-slate-700" />
                        <a href="/#features" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
                        <a href="/#features" className="hover:text-slate-300 transition-colors">Terms</a>
                        <a href="/#features" className="hover:text-slate-300 transition-colors">Cookies</a>
                    </div>
                    <div className="flex flex-wrap items-center gap-5">
                        {trustBadges.map(b => (
                            <span key={b.label} className="inline-flex items-center gap-1.5 text-[11px] font-medium text-slate-400">
                                <svg className="w-4 h-4 text-blue-400" viewBox="0 0 20 20" fill="currentColor">{b.icon}</svg>
                                {b.label}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
