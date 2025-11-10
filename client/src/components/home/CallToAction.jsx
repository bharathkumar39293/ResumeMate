import React from 'react'

const CallToAction = () => {
  return (
    <section id='cta' className='relative py-20 md:py-24 overflow-hidden'>
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
      
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl overflow-hidden shadow-2xl">
          {/* Pattern overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:24px_24px]"></div>
          
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl transform translate-x-32 -translate-y-32"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-400/20 rounded-full blur-3xl transform -translate-x-32 translate-y-32"></div>
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 p-8 md:p-12 lg:p-16">
            {/* Left content */}
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-1.5 mb-4">
                <svg className="size-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"/>
                </svg>
                <span className="text-sm font-medium text-white">Limited Time Offer</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                Start Building Your Dream Resume Today
              </h2>
              <p className="text-lg text-blue-50 mb-6 max-w-2xl">
                Join 10,000+ professionals who landed their dream jobs. Get started in minutes with AI-powered tools and professional templates.
              </p>
              
              {/* Features list */}
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8">
                <div className="flex items-center gap-2 text-white">
                  <svg className="size-5 text-blue-200" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-sm">No credit card required</span>
                </div>
                <div className="flex items-center gap-2 text-white">
                  <svg className="size-5 text-blue-200" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-sm">Free forever plan</span>
                </div>
                <div className="flex items-center gap-2 text-white">
                  <svg className="size-5 text-blue-200" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-sm">Cancel anytime</span>
                </div>
              </div>
              
              {/* CTA buttons */}
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <a 
                  href="/app" 
                  className="group inline-flex items-center gap-2 bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105"
                >
                  <span>Create Your Resume</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                  </svg>
                </a>
                <a 
                  href="#features" 
                  className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 border-2 border-white/30 px-8 py-4 rounded-xl font-semibold transition-all duration-200"
                >
                  <span>Learn More</span>
                </a>
              </div>
            </div>

            {/* Right illustration */}
            <div className="hidden lg:block flex-shrink-0">
              <div className="relative w-64 h-64">
                {/* Floating resume cards */}
                <div className="absolute top-0 right-0 w-48 h-56 bg-white rounded-xl shadow-2xl transform rotate-6 hover:rotate-12 transition-transform duration-300">
                  <div className="p-4">
                    <div className="h-3 w-20 bg-blue-200 rounded mb-3"></div>
                    <div className="h-2 w-32 bg-slate-200 rounded mb-2"></div>
                    <div className="h-2 w-28 bg-slate-200 rounded mb-4"></div>
                    <div className="space-y-2">
                      <div className="h-2 w-full bg-slate-100 rounded"></div>
                      <div className="h-2 w-full bg-slate-100 rounded"></div>
                      <div className="h-2 w-3/4 bg-slate-100 rounded"></div>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 w-48 h-56 bg-white rounded-xl shadow-2xl transform -rotate-6 hover:-rotate-12 transition-transform duration-300">
                  <div className="p-4">
                    <div className="h-3 w-24 bg-blue-200 rounded mb-3"></div>
                    <div className="h-2 w-32 bg-slate-200 rounded mb-2"></div>
                    <div className="h-2 w-28 bg-slate-200 rounded mb-4"></div>
                    <div className="space-y-2">
                      <div className="h-2 w-full bg-slate-100 rounded"></div>
                      <div className="h-2 w-full bg-slate-100 rounded"></div>
                      <div className="h-2 w-3/4 bg-slate-100 rounded"></div>
                    </div>
                  </div>
                </div>
                {/* AI badge */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full shadow-xl text-sm font-bold">
                  ✨ AI Powered
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CallToAction
