import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Hero = () => {
    const { user } = useSelector(state => state.auth)
    return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
            {/* Top bar */}
            <nav className="z-10 flex items-center justify-between w-full py-4 px-6 md:px-12 lg:px-16 text-sm">
                <Link to={'/'} className="flex items-center gap-2">
                    <img src="/logo.svg" alt="ResumeMate logo" className="h-9 w-auto brightness-0 invert" />
                </Link>
                <div className="hidden md:flex items-center gap-2">
                    <Link to='/app?state=register' className="px-5 py-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 active:scale-95 transition-all rounded-full text-white shadow-lg shadow-blue-500/30" hidden={user}>
                        Get started
                    </Link>
                    <Link to='/app?state=login' className="px-5 py-2 border border-slate-700 active:scale-95 hover:bg-slate-800 transition-all rounded-full text-slate-300 hover:text-white" hidden={user}>
                        Login
                    </Link>
                    <Link to='/app' className='px-7 py-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 active:scale-95 transition-all rounded-full text-white shadow-lg shadow-blue-500/30' hidden={!user}>
                        Dashboard
                    </Link>
                </div>
            </nav>

            {/* New hero layout */}
            <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-12 md:py-20 grid gap-10 md:grid-cols-2 items-center">
                {/* Left: Heading */}
                <div>
                    <h1 className="text-4xl md:text-5xl font-semibold text-white leading-tight">
                        Build a standout resume in minutes
                    </h1>
                    <p className="mt-5 text-base text-slate-400 max-w-md">
                        Create, refine and export professional resumes with smart assistance and beautiful templates.
                    </p>
                    <div className="mt-7 flex items-center gap-3">
                        <Link to='/app' className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full px-8 h-11 ring-offset-2 ring-offset-slate-950 ring-1 ring-blue-400 flex items-center transition-all shadow-lg shadow-blue-500/30">
                            Get started
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right ml-1 size-4" aria-hidden="true"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                        </Link>
                        <a href="#features" className="px-8 h-11 rounded-full border border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white flex items-center transition-colors">
                            See features
                        </a>
                    </div>
                    <div className="mt-6 text-xs text-slate-500">No credit card required</div>
                </div>

                {/* Right: Mock resume preview */}
                <div className="relative">
                    <div className="absolute -top-8 -right-6 size-40 bg-blue-500/20 blur-3xl rounded-full" aria-hidden="true"></div>
                    <div className="relative bg-white rounded-xl border border-slate-700 shadow-2xl shadow-blue-500/10 p-6 md:p-8 w-full max-w-xl mx-auto transform hover:scale-[1.02] transition-transform duration-300">
                        {/* Header */}
                        <div className="border-b-2 border-blue-600 pb-4 mb-5">
                            <h2 className="text-2xl font-bold text-slate-900 mb-1">Alex Johnson</h2>
                            <p className="text-sm text-slate-600">Full Stack Developer</p>
                            <div className="flex flex-wrap gap-3 mt-3 text-xs text-slate-500">
                                <span className="flex items-center gap-1">
                                    <svg className="size-3.5" fill="currentColor" viewBox="0 0 20 20"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/></svg>
                                    alex@email.com
                                </span>
                                <span className="flex items-center gap-1">
                                    <svg className="size-3.5" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/></svg>
                                    (555) 123-4567
                                </span>
                            </div>
                        </div>

                        <div className="space-y-4">
                            {/* Professional Summary */}
                            <div>
                                <h3 className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-2">Professional Summary</h3>
                                <p className="text-xs text-slate-600 leading-relaxed">Experienced developer with 5+ years building scalable web applications using React and Node.js...</p>
                            </div>

                            {/* Experience */}
                            <div>
                                <h3 className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-2">Experience</h3>
                                <div className="space-y-3">
                                    <div>
                                        <p className="text-xs font-semibold text-slate-800">Senior Developer</p>
                                        <p className="text-xs text-slate-500">Tech Corp • 2021 - Present</p>
                                        <p className="text-xs text-slate-600 mt-1">Led team of 5 developers in building enterprise SaaS platform...</p>
                                    </div>
                                    <div>
                                        <p className="text-xs font-semibold text-slate-800">Full Stack Developer</p>
                                        <p className="text-xs text-slate-500">StartUp Inc • 2019 - 2021</p>
                                    </div>
                                </div>
                            </div>

                            {/* Skills */}
                            <div>
                                <h3 className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-2">Skills</h3>
                                <div className="flex flex-wrap gap-1.5">
                                    {['React', 'Node.js', 'TypeScript', 'MongoDB', 'AWS', 'Docker', 'Git'].map((skill, i) => (
                                        <span key={i} className="text-xs px-2 py-1 bg-blue-50 text-blue-700 rounded-full border border-blue-200">{skill}</span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* AI Badge */}
                        <div className="absolute top-3 right-3 flex items-center gap-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs px-2 py-1 rounded-full shadow-lg">
                            <svg className="size-3" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                            AI Enhanced
                        </div>
                    </div>
                </div>
                        </section>
        </div>
    )
}

export default Hero
