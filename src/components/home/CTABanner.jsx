import { Link } from 'react-router-dom'
import { FaPhoneAlt, FaArrowRight, FaRocket, FaCheckCircle } from 'react-icons/fa'

const highlights = [
  'Free consultation & custom quote',
  'Trusted by 10M+ customers worldwide',
  'Next-day delivery available',
]

const CTABanner = () => {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1559825481-12a05cc00344?w=1920&q=80"
          alt="Marine and energy"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-dark/95 via-primary/85 to-dark/90" />
      </div>

      {/* Background pattern */}
      <div className="absolute inset-0 bg-dots-light opacity-15 pointer-events-none" />
      <div className="absolute inset-0 bg-mesh-dark pointer-events-none" />

      {/* Decorative glow blobs */}
      <div className="absolute -top-32 right-0 w-[500px] h-[500px] bg-gold/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute -bottom-32 left-0 w-[400px] h-[400px] bg-primary-light/15 rounded-full blur-[80px] pointer-events-none" />

      {/* Geometric decorators */}
      <div className="absolute top-10 left-10 w-24 h-24 border border-white/8 rounded-2xl rotate-12 pointer-events-none" />
      <div className="absolute bottom-10 right-20 w-16 h-16 border border-gold/15 rounded-xl -rotate-6 pointer-events-none" />
      <div className="absolute top-1/2 right-10 w-8 h-8 bg-gold/20 rounded-lg rotate-45 pointer-events-none" />

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-sm text-gold text-xs font-bold uppercase tracking-[0.2em] mb-8">
            <FaRocket className="text-gold animate-bounce-gentle" />
            Ready to Get Started?
          </div>

          {/* Title */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-white leading-tight mb-6">
            Power Your Business with{' '}
            <span
              className="text-transparent"
              style={{
                background: 'linear-gradient(135deg, #C8A951, #D4BC6A, #C8A951)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              BMSEC Energy
            </span>
          </h2>

          {/* Description */}
          <p className="text-white/65 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-8">
            From premium fuel to marine services, we deliver comprehensive energy
            solutions tailored to your needs. Contact us today for a custom quote.
          </p>

          {/* Highlight list */}
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 mb-12">
            {highlights.map((item) => (
              <div key={item} className="flex items-center gap-2">
                <FaCheckCircle className="text-gold text-sm flex-shrink-0" />
                <span className="text-white/70 text-sm font-medium">{item}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-5">
            <Link to="/contact" className="btn btn-gold btn-lg px-10 py-4">
              Get a Free Quote
              <FaArrowRight className="text-sm" />
            </Link>
            <a
              href="tel:+18005550199"
              className="btn btn-outline btn-lg px-10 py-4"
            >
              <FaPhoneAlt className="text-sm" />
              Call Us Now
            </a>
          </div>

          {/* Trust line */}
          <p className="mt-10 text-white/35 text-sm">
            No commitment required · Response within 24 hours · 35+ countries served
          </p>
        </div>
      </div>
    </section>
  )
}

export default CTABanner