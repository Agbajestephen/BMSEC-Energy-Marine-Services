import { Link } from 'react-router-dom'
import { FaArrowRight, FaOilCan, FaTruck, FaBolt, FaGasPump } from 'react-icons/fa'
import SectionTitle from '../common/SectionTitle'

const categories = [
  {
    name: 'Oil & Lubricants',
    description: 'Premium synthetic engine oils, transmission fluids, and industrial lubricants engineered for peak performance.',
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=900&q=80',
    link: '/products/oil-lubricants',
    icon: FaOilCan,
    badge: '50+ Products',
    color: '#1453c2',
  },
  {
    name: 'Tires',
    description: 'Top-brand tires for every vehicle and terrain. All-season, performance, and heavy-duty options available.',
    image: 'https://images.unsplash.com/photo-1578844251758-2f71da64c96f?w=900&q=80',
    link: '/products/tires',
    icon: FaTruck,
    badge: '100+ SKUs',
    color: '#C8A951',
  },
  {
    name: 'Batteries',
    description: 'Reliable, long-lasting batteries for vehicles, marine vessels, and industrial applications with full warranty.',
    image: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=900&q=80',
    link: '/products/batteries',
    icon: FaBolt,
    badge: 'Full Warranty',
    color: '#10b981',
  },
  {
    name: 'Petrol & Fuel',
    description: 'High-quality fuel grades including premium, diesel, marine gas oil, and racing fuel for optimal efficiency.',
    image: 'https://images.unsplash.com/photo-1545249390-6bdfa286032f?w=900&q=80',
    link: '/products/petrol-fuel',
    icon: FaGasPump,
    badge: 'Premium Grade',
    color: '#ef4444',
  },
]

const CategoryShowcase = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <SectionTitle
          subtitle="What We Offer"
          title="Our Product Categories"
          description="Explore our comprehensive range of premium energy and automotive products"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {categories.map((cat, i) => {
            const Icon = cat.icon
            return (
              <Link
                key={cat.name}
                to={cat.link}
                className="group relative overflow-hidden h-[420px] md:h-[460px] block"
                style={{ boxShadow: '0 20px 60px rgba(9,16,31,0.12)' }}
              >
                {/* Image */}
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-110"
                />

                {/* Gradient overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark/92 via-dark/40 to-dark/5 transition-opacity duration-500" />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                  style={{
                    background: `linear-gradient(to top, ${cat.color}cc, ${cat.color}33, transparent)`,
                  }}
                />

                {/* Top badges */}
                <div className="absolute top-5 left-5 right-5 flex items-start justify-between z-10">
                  {/* Icon */}
                  <div
                    className="w-11 h-11 flex items-center justify-center text-white transition-all duration-300 group-hover:scale-110"
                    style={{ background: `${cat.color}cc`, backdropFilter: 'blur(8px)' }}
                  >
                    <Icon className="text-base" />
                  </div>

                  {/* Badge */}
                  <div className="px-3 py-1.5 bg-white/15 backdrop-blur-md border border-white/20 text-white text-[10px] font-bold uppercase tracking-[0.1em]">
                    {cat.badge}
                  </div>
                </div>

                {/* Content at bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-8 z-10">
                  <h3 className="text-2xl md:text-3xl font-heading font-black text-white mb-3 group-hover:translate-x-0.5 transition-transform duration-300">
                    {cat.name}
                  </h3>
                  <p className="text-white/60 text-[0.93rem] leading-relaxed max-w-md mb-6 translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                    {cat.description}
                  </p>
                  <span
                    className="inline-flex items-center gap-2.5 text-white font-bold text-sm py-2 px-4 transition-all duration-500 border border-white/20"
                    style={{
                      background: 'rgba(255,255,255,0.1)',
                      backdropFilter: 'blur(8px)',
                    }}
                  >
                    Explore Products
                    <FaArrowRight className="text-xs group-hover:translate-x-1.5 transition-transform duration-300" />
                  </span>
                </div>

                {/* Bottom glow line */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: `linear-gradient(90deg, transparent, ${cat.color}, transparent)` }}
                />
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default CategoryShowcase