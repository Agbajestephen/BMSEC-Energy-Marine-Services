import { useState, useEffect } from 'react'
import { FaStar, FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import SectionTitle from '../common/SectionTitle'

const testimonials = [
  {
    name: 'James Anderson',
    role: 'Fleet Manager',
    company: 'TransGlobal Logistics',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&q=80',
    rating: 5,
    text: 'BMSEC Energy has been our exclusive fuel partner for 8 years. Their premium fuel quality and reliable delivery have reduced our fleet maintenance costs by 30%. Exceptional service all around.',
    stat: '30% cost reduction',
  },
  {
    name: 'Sarah Mitchell',
    role: 'Operations Director',
    company: 'Pacific Marine Co.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&q=80',
    rating: 5,
    text: 'The marine services provided by BMSEC are world-class. From bunkering to lubricant supply, their team ensures our vessels operate at peak efficiency. Truly a trusted partner at sea.',
    stat: '100% uptime maintained',
  },
  {
    name: 'Michael Chen',
    role: 'CEO',
    company: 'AutoCare Centers',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80',
    rating: 5,
    text: "We switched to BMSEC oils and lubricants two years ago and the difference is remarkable. Our customers love the quality, and the competitive pricing has boosted our margins significantly.",
    stat: 'Margins up 18%',
  },
]

const Testimonials = () => {
  const [current, setCurrent] = useState(0)
  const [animating, setAnimating] = useState(false)

  const go = (index) => {
    if (animating) return
    setAnimating(true)
    setCurrent(index)
    setTimeout(() => setAnimating(false), 500)
  }
  const next = () => go((current + 1) % testimonials.length)
  const prev = () => go((current - 1 + testimonials.length) % testimonials.length)

  useEffect(() => {
    const t = setInterval(next, 6000)
    return () => clearInterval(t)
  }, [current])

  const t = testimonials[current]

  return (
    <section className="section-padding bg-light relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-mesh pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/[0.04] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gold/[0.05] rounded-full blur-3xl pointer-events-none" />

      <div className="container-custom relative z-10">
        <SectionTitle
          subtitle="Testimonials"
          title="What Our Clients Say"
          description="Trusted by industry leaders across land and sea"
        />

        {/* All 3 as cards — faded side cards */}
        <div className="relative max-w-5xl mx-auto">
          <div className="flex items-center justify-center gap-6">
            {testimonials.map((item, i) => {
              const isActive = i === current
              const offset = (i - current + testimonials.length) % testimonials.length
              const isNext = offset === 1
              const isPrev = offset === testimonials.length - 1

              return (
                <div
                  key={item.name}
                  onClick={() => !isActive && go(i)}
                  className={`transition-all duration-500 ${isActive
                    ? 'z-20 scale-100 opacity-100 cursor-default'
                    : 'z-10 scale-90 opacity-40 cursor-pointer hidden md:block'
                    }`}
                  style={{
                    flex: isActive ? '0 0 580px' : '0 0 260px',
                    maxWidth: isActive ? '580px' : '260px',
                  }}
                >
                  <div
                    className={`bg-white p-8 md:p-10 transition-all duration-500 ${isActive ? 'shadow-2xl border border-primary/10' : 'shadow-md border border-gray-100'
                      }`}
                  >
                    {/* Quote icon */}
                    <FaQuoteLeft
                      className={`mb-6 transition-all duration-300 ${isActive ? 'text-3xl text-primary/15' : 'text-2xl text-gray-200'
                        }`}
                    />

                    {/* Stars */}
                    {isActive && (
                      <div className="flex items-center gap-1 mb-5">
                        {[...Array(item.rating)].map((_, j) => (
                          <FaStar key={j} className="text-amber-400 text-base" />
                        ))}
                      </div>
                    )}

                    {/* Text */}
                    <p
                      key={`${i}-${current}`}
                      className={`leading-relaxed font-light italic transition-all duration-300 ${isActive ? 'text-xl text-gray-600 fade-in' : 'text-sm text-gray-400 line-clamp-3'
                        }`}
                    >
                      "{item.text}"
                    </p>

                    {/* Stat highlight */}
                    {isActive && (
                      <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/[0.06] border border-primary/15">
                        <span className="w-2 h-2 rounded-full bg-primary/70" />
                        <span className="text-primary text-xs font-bold uppercase tracking-[0.1em]">{item.stat}</span>
                      </div>
                    )}

                    {/* Author */}
                    <div className={`flex items-center gap-4 ${isActive ? 'mt-8 pt-7 border-t border-gray-100' : 'mt-5'}`}>
                      <div className="relative flex-shrink-0">
                        <img
                          src={item.image}
                          alt={item.name}
                          className={`rounded-full object-cover ring-2 ring-offset-2 ring-primary/20 transition-all ${isActive ? 'w-14 h-14' : 'w-10 h-10'
                            }`}
                        />
                        {isActive && (
                          <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-emerald-500 rounded-full border-2 border-white flex items-center justify-center">
                            <FaStar className="text-[6px] text-white" />
                          </div>
                        )}
                      </div>
                      <div>
                        <h4 className={`font-heading font-bold text-dark ${isActive ? 'text-base' : 'text-sm'}`}>
                          {item.name}
                        </h4>
                        <p className={`text-gray-400 ${isActive ? 'text-sm' : 'text-xs'}`}>
                          {item.role}, {item.company}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-6 mt-12">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full border-2 border-gray-200 flex items-center justify-center text-gray-400 hover:border-primary hover:text-primary hover:bg-primary/[0.04] transition-all duration-300 hover:scale-110"
            >
              <FaChevronLeft className="text-sm" />
            </button>
            <div className="flex items-center gap-2.5">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => go(i)}
                  className={`transition-all duration-400 rounded-full ${i === current ? 'w-8 h-2.5 bg-primary' : 'w-2.5 h-2.5 bg-gray-300 hover:bg-gray-400'
                    }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-12 h-12 rounded-full border-2 border-gray-200 flex items-center justify-center text-gray-400 hover:border-primary hover:text-primary hover:bg-primary/[0.04] transition-all duration-300 hover:scale-110"
            >
              <FaChevronRight className="text-sm" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials