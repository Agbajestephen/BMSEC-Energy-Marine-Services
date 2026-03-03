import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaChevronRight,
  FaPaperPlane,
  FaCheckCircle,
  FaArrowRight,
} from 'react-icons/fa'
import { MdElectricBolt } from 'react-icons/md'
import { BRAND } from '../../utils/constants'

const Footer = () => {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const currentYear = new Date().getFullYear()

  const productLinks = [
    { name: 'Oil & Lubricants', path: '/products/oil-lubricants' },
    { name: 'Tires', path: '/products/tires' },
    { name: 'Batteries', path: '/products/batteries' },
    { name: 'Petrol & Fuel', path: '/products/petrol-fuel' },
  ]

  const companyLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'Our Services', path: '/services' },
    { name: 'Careers', path: '/careers' },
    { name: 'News', path: '/news' },
    { name: 'Contact', path: '/contact' },
  ]

  const socialLinks = [
    { icon: FaFacebookF, link: BRAND.socialMedia.facebook, label: 'Facebook', color: '#1877f2' },
    { icon: FaTwitter, link: BRAND.socialMedia.twitter, label: 'Twitter', color: '#1da1f2' },
    { icon: FaInstagram, link: BRAND.socialMedia.instagram, label: 'Instagram', color: '#e4405f' },
    { icon: FaLinkedinIn, link: BRAND.socialMedia.linkedin, label: 'LinkedIn', color: '#0a66c2' },
    { icon: FaYoutube, link: BRAND.socialMedia.youtube, label: 'YouTube', color: '#ff0000' },
  ]

  const footerStats = [
    { label: 'Countries', value: BRAND.countries },
    { label: 'Service Stations', value: BRAND.stations },
    { label: 'Customers', value: BRAND.customers },
  ]

  const handleSubscribe = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setEmail('')
    setTimeout(() => setSubmitted(false), 4000)
  }

  return (
    <footer className="relative overflow-hidden bg-dark text-white mt-20">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-primary/15 rounded-full blur-[100px]" />
        <div className="absolute -bottom-32 -left-24 w-80 h-80 bg-accent/10 rounded-full blur-[80px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/[0.04] rounded-full blur-[80px]" />
        <div className="absolute inset-0 bg-dots-light opacity-10" />
      </div>

      {/* Newsletter section */}
      <div className="relative border-b border-white/[0.07]">
        <div className="container-custom py-16">
          <div
            className="rounded-3xl border border-white/[0.1] p-7 sm:p-9"
            style={{ background: 'linear-gradient(135deg, rgba(20,83,194,0.18), rgba(20,83,194,0.06) 50%, rgba(200,169,81,0.08))' }}
          >
            <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
              <div className="text-center lg:text-left">
                <div className="flex items-center gap-2 mb-3 justify-center lg:justify-start">
                  <MdElectricBolt className="text-gold text-lg" />
                  <span className="text-gold text-xs font-bold uppercase tracking-[0.15em]">Stay Updated</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-heading font-bold text-white mb-2">
                  Get Exclusive Offers
                </h3>
                <p className="text-white/45 text-sm leading-relaxed max-w-sm">
                  Subscribe for product releases, industry news, and special discount alerts.
                </p>
              </div>

              <div className="w-full lg:w-auto">
                {submitted ? (
                  <div className="flex items-center gap-3 px-7 py-4 rounded-2xl bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 font-semibold">
                    <FaCheckCircle />
                    Subscribed! Welcome aboard.
                  </div>
                ) : (
                  <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Your email address"
                      className="px-6 py-4 rounded-2xl w-full sm:w-80 bg-white/[0.07] border border-white/12 text-white placeholder:text-white/35 focus:outline-none focus:border-white/30 focus:bg-white/10 transition-all"
                    />
                    <button
                      type="submit"
                      className="btn btn-gold px-7 py-4 rounded-2xl flex-shrink-0"
                    >
                      <FaPaperPlane className="text-xs" />
                      Subscribe
                    </button>
                  </form>
                )}
                <p className="text-white/25 text-xs mt-3 text-center sm:text-left">
                  No spam ever · Unsubscribe anytime · GDPR compliant
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats row */}
      <div className="relative border-b border-white/[0.06]">
        <div className="container-custom py-10">
          <div className="grid grid-cols-3 gap-4">
            {footerStats.map((stat, i) => (
              <div
                key={stat.label}
                className="text-center py-4 rounded-2xl transition-all duration-300 hover:bg-white/[0.03]"
              >
                <p className="text-2xl md:text-3xl font-heading font-extrabold text-white">{stat.value}</p>
                <p className="text-[10px] uppercase tracking-[0.18em] text-white/35 mt-1 font-semibold">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main footer content */}
      <div className="relative container-custom py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <Link to="/" className="inline-block mb-6 group">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-primary flex items-center justify-center font-heading font-black text-sm text-white shadow-lg shadow-primary/30">
                  BM
                </div>
                <div>
                  <span className="text-xl font-heading font-extrabold text-white block leading-tight">BMSEC</span>
                  <p className="text-[9px] tracking-[0.16em] uppercase text-white/30 font-semibold">
                    Energy & Marine Services
                  </p>
                </div>
              </div>
            </Link>
            <p className="text-white/45 text-sm leading-relaxed mb-8">
              Your trusted partner for premium fuel, oil, tires, batteries, and marine energy
              solutions since 1999.
            </p>
            {/* Social icons */}
            <div className="flex gap-2.5">
              {socialLinks.map((social, i) => {
                const Icon = social.icon
                return (
                  <a
                    key={i}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-9 h-9 rounded-xl border border-white/12 flex items-center justify-center text-white/40 transition-all duration-300 group hover:scale-110"
                    style={{ '--social-color': social.color }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = `${social.color}22`
                      e.currentTarget.style.borderColor = `${social.color}44`
                      e.currentTarget.style.color = social.color
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = ''
                      e.currentTarget.style.borderColor = ''
                      e.currentTarget.style.color = ''
                    }}
                  >
                    <Icon className="text-xs" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-xs font-heading font-bold uppercase tracking-[0.18em] mb-7 text-white/80">
              Products
            </h4>
            <ul className="space-y-3.5">
              {productLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-white/50 hover:text-white transition-colors text-sm flex items-center gap-2.5 group"
                  >
                    <FaChevronRight className="text-[8px] text-primary/50 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all duration-200" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-heading font-bold uppercase tracking-[0.18em] mb-7 text-white/80">
              Company
            </h4>
            <ul className="space-y-3.5">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-white/50 hover:text-white transition-colors text-sm flex items-center gap-2.5 group"
                  >
                    <FaChevronRight className="text-[8px] text-primary/50 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all duration-200" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-heading font-bold uppercase tracking-[0.18em] mb-7 text-white/80">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 group">
                <div className="w-8 h-8 rounded-lg bg-white/[0.06] flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-primary/20 transition-colors">
                  <FaMapMarkerAlt className="text-white/30 text-xs group-hover:text-primary-light" />
                </div>
                <span className="text-white/50 text-sm leading-relaxed">{BRAND.address}</span>
              </li>
              <li className="flex items-center gap-3 group">
                <div className="w-8 h-8 rounded-lg bg-white/[0.06] flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <FaPhone className="text-white/30 text-xs group-hover:text-primary-light" />
                </div>
                <a
                  href={`tel:${BRAND.phone}`}
                  className="text-white/50 hover:text-white transition-colors text-sm"
                >
                  {BRAND.phone}
                </a>
              </li>
              <li className="flex items-center gap-3 group">
                <div className="w-8 h-8 rounded-lg bg-white/[0.06] flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <FaEnvelope className="text-white/30 text-xs group-hover:text-primary-light" />
                </div>
                <a
                  href={`mailto:${BRAND.email}`}
                  className="text-white/50 hover:text-white transition-colors text-sm"
                >
                  {BRAND.email}
                </a>
              </li>
              <li className="flex items-center gap-3 group">
                <div className="w-8 h-8 rounded-lg bg-white/[0.06] flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <FaClock className="text-white/30 text-xs group-hover:text-primary-light" />
                </div>
                <span className="text-white/50 text-sm">{BRAND.workingHours}</span>
              </li>
            </ul>

            {/* CTA */}
            <Link to="/contact" className="mt-7 btn btn-primary btn-sm w-full justify-center rounded-2xl">
              Get in Touch
              <FaArrowRight className="text-xs" />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative border-t border-white/[0.07]">
        <div className="container-custom py-7">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/30 text-sm">
              © {currentYear} BMSEC Energy & Marine Services. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm">
              {['Privacy', 'Terms', 'Sitemap'].map((item) => (
                <Link
                  key={item}
                  to={`/${item.toLowerCase()}`}
                  className="text-white/30 hover:text-white/65 transition-colors duration-200"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
