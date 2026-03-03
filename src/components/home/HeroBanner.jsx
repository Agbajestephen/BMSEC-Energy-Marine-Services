import { useState, useCallback, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaChevronLeft, FaChevronRight, FaPlay } from 'react-icons/fa'
import { MdElectricBolt } from 'react-icons/md'

// Use free hosted videos from Pexels CDN (no CORS issues)
const slides = [
  {
    video: 'https://videos.pexels.com/video-files/3045163/3045163-uhd_2560_1440_25fps.mp4',
    fallback: 'https://images.unsplash.com/photo-1545249390-6bdfa286032f?w=1920&q=80',
    tag: 'Since 1999 · Trusted Worldwide',
    title: 'Powering your\njourney forward.',
    description: 'Premium fuel, lubricants, and energy solutions trusted across 35+ countries worldwide.',
    cta: { text: 'Explore Products', link: '/products' },
  },
  {
    video: 'https://videos.pexels.com/video-files/3571264/3571264-uhd_2560_1440_25fps.mp4',
    fallback: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=1920&q=80',
    tag: 'Advanced Technology · Peak Performance',
    title: 'Engineered for\npeak performance.',
    description: 'Advanced synthetic oils and lubricants that maximize engine life and efficiency.',
    cta: { text: 'View Oil & Lubricants', link: '/products/oil-lubricants' },
  },
  {
    video: 'https://videos.pexels.com/video-files/2519660/2519660-uhd_2560_1440_24fps.mp4',
    fallback: 'https://images.unsplash.com/photo-1559825481-12a05cc00344?w=1920&q=80',
    tag: 'Land & Sea · Worldwide Coverage',
    title: 'Excellence across\nland and sea.',
    description: 'Comprehensive marine energy solutions and offshore support worldwide.',
    cta: { text: 'Our Services', link: '/services' },
  },
]

const HeroBanner = () => {
  const [current, setCurrent] = useState(0)
  const [animating, setAnimating] = useState(false)
  const [progressKey, setProgressKey] = useState(0)

  const goToSlide = useCallback((index) => {
    if (animating || index === current) return
    setAnimating(true)
    setCurrent(index)
    setProgressKey((k) => k + 1)
    setTimeout(() => setAnimating(false), 800)
  }, [animating, current])

  const nextSlide = useCallback(() => {
    goToSlide((current + 1) % slides.length)
  }, [current, goToSlide])

  const prevSlide = useCallback(() => {
    goToSlide((current - 1 + slides.length) % slides.length)
  }, [current, goToSlide])

  useEffect(() => {
    const timer = setInterval(nextSlide, 9000)
    return () => clearInterval(timer)
  }, [nextSlide])

  return (
    <section className="relative w-full overflow-hidden bg-dark" style={{ height: '100vh', minHeight: '700px' }}>

      {/* Video/image slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${index === current ? 'opacity-100' : 'opacity-0'}`}
          style={{ zIndex: index === current ? 1 : 0 }}
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            poster={slide.fallback}
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src={slide.video} type="video/mp4" />
          </video>

          {/* Dark overlay layers */}
          <div className="absolute inset-0 bg-gradient-to-r from-dark/90 via-dark/65 to-dark/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/20 to-transparent" />
        </div>
      ))}

      {/* Slide progress bar at top */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-white/10 z-20">
        <div
          key={progressKey}
          className="h-full bg-primary"
          style={{ animation: 'progress-bar 9s linear forwards' }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center" style={{ zIndex: 10 }}>
        <div className="container-custom w-full">
          <div className="max-w-3xl">

            {/* Tag line */}
            <div key={`tag-${current}`} className="fade-in mb-6 flex items-center gap-3">
              <div className="h-px w-12 bg-primary" />
              <div className="flex items-center gap-2">
                <MdElectricBolt className="text-gold text-sm" />
                <span className="text-white/65 text-xs font-semibold tracking-[0.15em] uppercase">
                  {slides[current].tag}
                </span>
              </div>
            </div>

            {/* Heading */}
            <h1
              key={`h-${current}`}
              className="fade-in-up text-5xl md:text-7xl font-heading font-black text-white leading-[1.02] whitespace-pre-line tracking-tight"
            >
              {slides[current].title}
            </h1>

            {/* Divider line */}
            <div className="mt-8 mb-6 h-px w-24 bg-primary" />

            {/* Description */}
            <p
              key={`d-${current}`}
              className="fade-in delay-200 text-lg md:text-xl text-white/60 leading-relaxed max-w-xl"
            >
              {slides[current].description}
            </p>

            {/* CTAs */}
            <div key={`c-${current}`} className="fade-in-up delay-300 mt-10 flex flex-wrap gap-4">
              <Link
                to={slides[current].cta.link}
                className="flex items-center gap-3 bg-primary text-white font-semibold text-sm px-8 py-4 hover:bg-primary-dark transition-colors duration-200 group"
              >
                {slides[current].cta.text}
                <span className="h-px w-6 bg-white group-hover:w-10 transition-all duration-300" />
              </Link>
              <Link
                to="/contact"
                className="flex items-center gap-2 border border-white/35 text-white font-semibold text-sm px-8 py-4 hover:bg-white hover:text-dark transition-all duration-200"
              >
                Get a Quote
              </Link>
            </div>

            {/* Stats */}
            <div key={`s-${current}`} className="fade-in delay-500 mt-16 flex gap-10 border-t border-white/10 pt-8">
              {[
                { val: '2,500+', label: 'Stations' },
                { val: '35+', label: 'Countries' },
                { val: '10M+', label: 'Customers' },
                { val: '25+', label: 'Years' },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <span className="text-xl font-heading font-black text-white">{stat.val}</span>
                  <span className="text-white/40 text-[10px] uppercase tracking-[0.14em] font-semibold mt-0.5">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Arrow navigation */}
      <button
        onClick={prevSlide}
        className="absolute left-6 md:left-10 top-1/2 -translate-y-1/2 z-20 w-11 h-11 border border-white/20 bg-black/30 text-white flex items-center justify-center hover:bg-white hover:text-dark transition-all duration-200"
        aria-label="Previous"
      >
        <FaChevronLeft className="text-xs" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-6 md:right-10 top-1/2 -translate-y-1/2 z-20 w-11 h-11 border border-white/20 bg-black/30 text-white flex items-center justify-center hover:bg-white hover:text-dark transition-all duration-200"
        aria-label="Next"
      >
        <FaChevronRight className="text-xs" />
      </button>

      {/* Slide dots */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goToSlide(i)}
            className={`transition-all duration-400 ${i === current ? 'w-8 h-[3px] bg-white' : 'w-[3px] h-[3px] bg-white/35 hover:bg-white/60'}`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Slide counter */}
      <div className="absolute bottom-10 right-10 z-20 hidden md:flex items-center gap-3 text-white/35 text-xs font-bold tracking-widest">
        <span className="text-white">{String(current + 1).padStart(2, '0')}</span>
        <div className="h-px w-6 bg-white/20" />
        <span>{String(slides.length).padStart(2, '0')}</span>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-10 z-20 hidden md:flex flex-col items-center gap-2">
        <span className="text-white/30 text-[9px] uppercase tracking-[0.2em] font-semibold" style={{ writingMode: 'vertical-rl' }}>Scroll</span>
        <div className="w-px h-12 bg-white/15 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full bg-white/60" style={{ height: '40%', animation: 'float 2s ease-in-out infinite' }} />
        </div>
      </div>
    </section>
  )
}

export default HeroBanner
