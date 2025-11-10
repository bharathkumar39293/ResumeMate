import React from 'react'

const Features = () => {
  return (
    <section id='features' className="relative py-20 md:py-32 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 overflow-hidden scroll-mt-12">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-1.5 mb-4">
            <svg className="size-4 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
            </svg>
            <span className="text-sm font-medium text-blue-300">Powerful Features</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Everything you need to build
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"> the perfect resume</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Professional tools powered by AI to help you stand out and land your dream job
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Feature 1 - Large */}
          <div className="lg:col-span-2 group relative bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl p-8 overflow-hidden hover:shadow-2xl transition-all duration-500">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl transform translate-x-32 -translate-y-32"></div>
            <div className="relative z-10">
              <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">AI-Powered Enhancement</h3>
              <p className="text-blue-50 mb-6 max-w-lg">
                Transform your resume with AI. Automatically optimize your professional summary and job descriptions with action verbs and industry keywords that pass ATS systems.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm text-white">Smart Suggestions</span>
                <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm text-white">ATS Optimized</span>
                <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm text-white">Industry Keywords</span>
              </div>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="group relative bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 hover:border-purple-500/50 hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300">
            <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Professional Templates</h3>
            <p className="text-slate-400">
              Choose from modern, classic, and minimal designs. All templates are professionally crafted and recruiter-approved.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="group relative bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300">
            <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">PDF Import & Export</h3>
            <p className="text-slate-400">
              Upload your existing resume to extract information or export your new resume as a professional PDF with one click.
            </p>
          </div>

          {/* Feature 4 - Wide */}
          <div className="lg:col-span-2 group relative bg-slate-900 rounded-2xl p-8 overflow-hidden hover:shadow-2xl transition-all duration-500">
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-blue-500/20 to-transparent"></div>
            <div className="relative z-10">
              <div className="w-14 h-14 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">ATS-Friendly Formatting</h3>
              <p className="text-slate-300 mb-6">
                All templates are optimized for Applicant Tracking Systems. Your resume will be parsed correctly by any ATS software, ensuring it reaches human recruiters.
              </p>
              <div className="flex items-center gap-4 text-sm text-slate-400">
                <div className="flex items-center gap-2">
                  <svg className="size-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span>Compatible with all ATS</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="size-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span>98% parse success rate</span>
                </div>
              </div>
            </div>
          </div>

          {/* Feature 5 */}
          <div className="group relative bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl p-8 overflow-hidden hover:shadow-2xl transition-all duration-500">
            <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-white/10 rounded-full"></div>
            <div className="relative z-10">
              <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Real-Time Customization</h3>
              <p className="text-orange-50">
                See changes instantly as you edit. Customize colors, fonts, and spacing to match your personal brand.
              </p>
            </div>
          </div>

          {/* Feature 6 - Full Width */}
          <div className="lg:col-span-3 group relative bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border-2 border-dashed border-slate-700 hover:border-blue-500/50 transition-all duration-300">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                </div>
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-bold text-white mb-2">And so much more...</h3>
                <p className="text-slate-400 mb-4">
                  Multiple resume management, secure cloud storage, mobile-friendly editor, version history, and sharing capabilities.
                </p>
                <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                  <span className="px-3 py-1 bg-slate-700/50 border border-slate-600 rounded-full text-sm text-slate-300">📱 Mobile Responsive</span>
                  <span className="px-3 py-1 bg-slate-700/50 border border-slate-600 rounded-full text-sm text-slate-300">☁️ Cloud Saved</span>
                  <span className="px-3 py-1 bg-slate-700/50 border border-slate-600 rounded-full text-sm text-slate-300">🔄 Auto-Save</span>
                  <span className="px-3 py-1 bg-slate-700/50 border border-slate-600 rounded-full text-sm text-slate-300">🔐 Secure</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
