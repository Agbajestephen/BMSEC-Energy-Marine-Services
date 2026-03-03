import { FaShieldAlt, FaGlobeAmericas, FaHeadset, FaArrowRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import SectionTitle from '../common/SectionTitle'

const features = [
  {
    icon: FaShieldAlt,
    title: 'Premium Quality',
    description:
      'Every product meets international quality standards with rigorous testing, certifications, and a commitment to excellence that spans over two decades.',
    gradient: 'from-blue-500 to-primary',
    glow: 'rgba(20, 83, 194, 0.3)',
    link: '/about',
  },
  {
    icon: FaGlobeAmericas,
    title: 'Global Reach',
    description:
      'With 2,500+ service stations across 35+ countries and 18,000 dedicated employees, we deliver energy solutions wherever you need them — on land and at sea.',
    gradient: 'from-gold-dark to-gold-light',
    glow: 'rgba(200, 169, 81, 0.35)',
    link: '/stations',
  },
  {
    icon: FaHeadset,
    title: '24/7 Support',
    description:
      'Our expert support team is always available. Whether you need technical guidance, delivery tracking, or product recommendations — we are here around the clock.',
    gradient: 'from-cyan-500 to-accent',
    glow: 'rgba(6, 182, 212, 0.3)',
    link: '/contact',
  },
]

const WhyChooseUs = () => {
  return (
    <section className="section-padding bg-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-mesh pointer-events-none" />
      <div className="absolute inset-0 bg-dots opacity-50 pointer-events-none" />

      <div className="container-custom relative z-10">
        <SectionTitle
          subtitle="Why Choose Us"
          title="Built on Trust & Excellence"
          description="We go beyond products — delivering reliability, expertise, and unmatched service at every touchpoint"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, i) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className="surface-elevated p-9 text-center group cursor-pointer transition-all duration-500 hover:-translate-y-2"
                style={{
                  '--glow': feature.glow,
                  transitionDelay: `${i * 0.05}s`,
                }}
              >
                {/* Animated icon container */}
                <div className="relative mx-auto mb-8 w-fit">
                  {/* Glow ring */}
                  <div
                    className="absolute inset-0 rounded-2xl blur-lg scale-125 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ background: feature.glow }}
                  />
                  {/* Icon box */}
                  <div
                    className={`relative w-20 h-20 bg-gradient-to-br ${feature.gradient} flex items-center justify-center text-white transition-all duration-500 group-hover:scale-110 group-hover:rotate-3`}
                  >
                    <Icon className="text-3xl" />
                  </div>
                </div>

                <h3 className="text-xl font-heading font-bold text-dark mb-4 group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </h3>

                <p className="text-gray-500 leading-relaxed text-[0.95rem] mb-6">
                  {feature.description}
                </p>

                <Link
                  to={feature.link}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300"
                >
                  Learn More <FaArrowRight className="text-xs" />
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs