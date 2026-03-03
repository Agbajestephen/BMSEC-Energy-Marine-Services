import { Link } from 'react-router-dom'
import { FaArrowRight, FaCheck } from 'react-icons/fa'
import CategoryBanner from '../components/products/CategoryBanner'
import SectionTitle from '../components/common/SectionTitle'
import BackToTop from '../components/common/BackToTop'
import { services } from '../data/services'

const ServicesPage = () => {
  return (
    <>
      <CategoryBanner
        title="Our Services"
        subtitle="What We Do"
        description="Comprehensive energy and marine solutions tailored to your needs"
        image="https://images.unsplash.com/photo-1504222490345-c075b6008014?w=1920&q=80"
        breadcrumbs={[{ name: 'Services' }]}
      />

      {/* ── SERVICES LIST ── */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle
            subtitle="Our Expertise"
            title="Services We Provide"
            description="From fuel supply to marine bunkering, we deliver end-to-end energy solutions with reliability and expertise"
          />

          <div className="space-y-28">
            {services.map((service, index) => (
              <div
                key={service.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${
                  index % 2 !== 0 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Image */}
                <div className={`${index % 2 !== 0 ? 'lg:order-2' : ''}`}>
                  <div className="rounded-2xl overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-[420px] object-cover"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className={`${index % 2 !== 0 ? 'lg:order-1' : ''}`}>
                  <p className="text-sm font-semibold text-primary uppercase tracking-[0.25em] mb-4">
                    Service 0{service.id}
                  </p>
                  <h3 className="text-3xl font-heading font-bold text-dark mb-6 leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-gray-500 text-lg leading-relaxed mb-8">
                    {service.longDescription}
                  </p>

                  {/* Features */}
                  <div className="space-y-3 mb-10">
                    {service.features.slice(0, 4).map((feat) => (
                      <div key={feat} className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <FaCheck className="text-primary text-[8px]" />
                        </div>
                        <span className="text-sm text-gray-600">{feat}</span>
                      </div>
                    ))}
                  </div>

                  <Link to="/contact" className="btn btn-outline-dark btn-sm">
                    Get a Quote
                    <FaArrowRight className="text-xs" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1559825481-12a05cc00344?w=1920&q=80"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-dark/80" />
        </div>
        <div className="container-custom relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-white leading-tight max-w-2xl mx-auto">
            Need a custom solution for your business?
          </h2>
          <p className="text-white/50 text-lg mt-6 max-w-lg mx-auto">
            Our team of experts will design a tailored energy solution that fits your operational requirements and budget.
          </p>
          <div className="mt-10">
            <Link to="/contact" className="btn btn-lg btn-gold">
              Contact Our Team
            </Link>
          </div>
        </div>
      </section>

      <BackToTop />
    </>
  )
}

export default ServicesPage