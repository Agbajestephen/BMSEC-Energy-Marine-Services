import { Link } from 'react-router-dom'
import { FaHome, FaChevronRight } from 'react-icons/fa'

const CategoryBanner = ({ title, subtitle, description, image, breadcrumbs = [] }) => {
  return (
    <section className="relative h-[410px] md:h-[470px] overflow-hidden">
      <div className="absolute inset-0">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-dark/95 via-dark/70 to-dark/45" />
        <div className="absolute inset-0 bg-gradient-to-t from-dark/60 to-transparent" />
        <div className="absolute -bottom-24 -right-10 w-80 h-80 rounded-full bg-primary/25 blur-3xl" />
      </div>

      <div className="relative z-10 h-full flex items-center">
        <div className="container-custom w-full">
          <div className="flex items-center gap-2 text-sm text-white/65 mb-6">
            <Link to="/" className="hover:text-gold transition-colors flex items-center gap-1">
              <FaHome className="text-xs" />
              Home
            </Link>
            {breadcrumbs.map((crumb, i) => (
              <span key={i} className="flex items-center gap-2">
                <FaChevronRight className="text-[8px] text-white/35" />
                {crumb.link ? (
                  <Link to={crumb.link} className="hover:text-gold transition-colors">
                    {crumb.name}
                  </Link>
                ) : (
                  <span className="text-gold">{crumb.name}</span>
                )}
              </span>
            ))}
          </div>

          {subtitle && (
            <div className="chip bg-white/8 border-white/15 text-gold mb-5">
              <span className="w-1.5 h-1.5 bg-gold rounded-full" />
              {subtitle}
            </div>
          )}

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-white text-shadow max-w-4xl">
            {title}
          </h1>

          {description && (
            <p className="mt-5 text-lg text-white/75 max-w-2xl leading-relaxed">{description}</p>
          )}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-light to-transparent" />
    </section>
  )
}

export default CategoryBanner
