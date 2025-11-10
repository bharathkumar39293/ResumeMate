import React from 'react'

const Testimonial = () => {

    const testimonials = [
        {
            image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200',
            name: 'Sarah Chen',
            role: 'Software Engineer',
            company: 'Google',
            quote: 'The AI enhancement feature transformed my resume. Got interview calls from 3 FAANG companies within a week!',
            rating: 5
        },
        {
            image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200',
            name: 'Michael Rodriguez',
            role: 'Product Manager',
            company: 'Amazon',
            quote: 'ATS optimization made all the difference. My resume now passes every screening system effortlessly.',
            rating: 5
        },
        {
            image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=200',
            name: 'Emily Watson',
            role: 'Marketing Director',
            company: 'HubSpot',
            quote: 'The templates are gorgeous and professional. Landed my dream job thanks to the modern design!',
            rating: 5
        },
        {
            image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200',
            name: 'David Kim',
            role: 'Data Scientist',
            company: 'Microsoft',
            quote: 'PDF import saved me hours. Extracted all my info perfectly and enhanced it with AI. Pure magic!',
            rating: 5
        },
        {
            image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200',
            name: 'Jessica Taylor',
            role: 'UX Designer',
            company: 'Airbnb',
            quote: 'Real-time editing is incredibly smooth. Created multiple versions for different roles in minutes.',
            rating: 5
        },
        {
            image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200',
            name: 'James Anderson',
            role: 'Full Stack Developer',
            company: 'Netflix',
            quote: 'Best resume builder I\'ve used. The AI suggestions for action verbs really made my experience pop!',
            rating: 5
        }
    ];

  return (
    <section id='testimonials' className='relative py-20 md:py-32 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 scroll-mt-12'>
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-3xl"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-1.5 mb-4">
            <svg className="size-4 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z"/>
              <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z"/>
            </svg>
            <span className="text-sm font-medium text-blue-300">Success Stories</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Loved by professionals
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"> worldwide</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Join thousands of job seekers who landed their dream roles with ResumeMate
          </p>
        </div>

        {/* Stats Bar */}
        <div className="flex flex-wrap justify-center gap-8 mb-16 p-6 bg-slate-800/50 backdrop-blur-sm rounded-2xl shadow-lg border border-slate-700">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-400 mb-1">10,000+</div>
            <div className="text-sm text-slate-400">Resumes Created</div>
          </div>
          <div className="hidden sm:block w-px bg-slate-700"></div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-400 mb-1">98%</div>
            <div className="text-sm text-slate-400">Success Rate</div>
          </div>
          <div className="hidden sm:block w-px bg-slate-700"></div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-400 mb-1">4.9/5</div>
            <div className="text-sm text-slate-400">Average Rating</div>
          </div>
          <div className="hidden sm:block w-px bg-slate-700"></div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-400 mb-1">2.5x</div>
            <div className="text-sm text-slate-400">More Interviews</div>
          </div>
        </div>

        {/* Testimonial Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="group relative bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300"
            >
              {/* Quote icon */}
              <div className="absolute top-4 right-4 text-slate-700 group-hover:text-slate-600 transition-colors">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                </svg>
              </div>

              {/* Rating */}
              <div className="flex gap-0.5 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 fill-yellow-400" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="text-slate-300 mb-6 relative z-10 leading-relaxed">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-slate-700">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-blue-500/30"
                />
                <div>
                  <div className="font-semibold text-white flex items-center gap-1">
                    {testimonial.name}
                    <svg className="w-4 h-4 fill-blue-400" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <p className="text-sm text-slate-400">{testimonial.role} at {testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-slate-600 mb-4">Join them and create your winning resume today</p>
          <a 
            href="/app" 
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 shadow-lg shadow-blue-600/25"
          >
            Get Started Free
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Testimonial
