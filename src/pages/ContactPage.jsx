import { useState } from 'react'
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaPaperPlane,
  FaCheckCircle,
  FaLinkedinIn,
  FaTwitter,
  FaWhatsapp,
  FaArrowRight,
} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import BackToTop from '../components/common/BackToTop'
import { BRAND } from '../utils/constants'

const ContactPage = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [activeTab, setActiveTab] = useState('Sales & Quotes')

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
      setForm({ name: '', email: '', phone: '', subject: '', message: '' })
      setTimeout(() => setSubmitted(false), 6000)
    }, 1200)
  }

  const departments = [
    {
      name: 'Sales & Quotes',
      phone: '+1 (800) 555-0100',
      email: 'sales@bmsec-energy.com',
      desc: 'Bulk orders, pricing, and custom energy supply agreements.',
    },
    {
      name: 'Technical Support',
      phone: '+1 (800) 555-0199',
      email: 'support@bmsec-energy.com',
      desc: 'Product troubleshooting, maintenance guidance, and service calls.',
    },
    {
      name: 'General Enquiries',
      phone: BRAND.phone,
      email: BRAND.email,
      desc: 'Partnerships, media, and all other inquiries.',
    },
  ]

  const activeDept = departments.find((d) => d.name === activeTab)

  return (
    <>
      {/* ── HERO SECTION ── */}
      <section className="relative pt-36 pb-28 overflow-hidden bg-dark">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1504222490345-c075b6008014?w=1920&q=80"
            alt=""
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/90 to-dark/50" />
        </div>

        {/* Vertical accent line */}
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary hidden lg:block" />

        <div className="container-custom relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-primary" />
            <span className="text-primary text-xs font-bold uppercase tracking-[0.2em]">Contact Us</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-heading font-black text-white mb-6 leading-tight">
            Let's Talk<span className="text-primary">.</span>
          </h1>
          <p className="text-white/55 text-lg md:text-xl max-w-xl leading-relaxed mb-10">
            Whether it's a bulk fuel order, technical support, or a partnership — our team responds within 24 hours.
          </p>

          {/* Quick contact pills */}
          <div className="flex flex-wrap gap-4">
            <a href={`tel:${BRAND.phone}`} className="flex items-center gap-2.5 border border-white/15 bg-white/5 text-white/70 hover:text-white hover:border-white/30 px-5 py-2.5 text-sm font-medium transition-all duration-200">
              <FaPhone className="text-primary text-xs" />
              {BRAND.phone}
            </a>
            <a href={`mailto:${BRAND.email}`} className="flex items-center gap-2.5 border border-white/15 bg-white/5 text-white/70 hover:text-white hover:border-white/30 px-5 py-2.5 text-sm font-medium transition-all duration-200">
              <FaEnvelope className="text-primary text-xs" />
              {BRAND.email}
            </a>
          </div>
        </div>
      </section>

      {/* ── CONTACT INFO STRIP ── */}
      <section className="bg-primary">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/10">
            {[
              { icon: FaMapMarkerAlt, label: 'Head Office', value: '1200 Energy Blvd, Houston TX' },
              { icon: FaPhone, label: 'Hotline', value: BRAND.phone },
              { icon: FaEnvelope, label: 'Email', value: BRAND.email },
              { icon: FaClock, label: 'Hours', value: BRAND.workingHours },
            ].map((item) => {
              const Icon = item.icon
              return (
                <div key={item.label} className="flex items-center gap-4 px-6 py-5">
                  <Icon className="text-white/50 text-sm flex-shrink-0" />
                  <div>
                    <p className="text-white/50 text-[10px] uppercase tracking-wide font-semibold">{item.label}</p>
                    <p className="text-white text-sm font-medium mt-0.5">{item.value}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── DEPARTMENT TABS + FORM ── */}
      <section className="bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-5 min-h-[700px]">

            {/* LEFT — Department selector */}
            <div className="lg:col-span-2 bg-dark py-16 px-10 flex flex-col justify-between">
              <div>
                <h2 className="text-2xl font-heading font-black text-white mb-2">Talk to the Right Team</h2>
                <p className="text-white/40 text-sm mb-10">Select a department to get the right contact.</p>

                {/* Tabs */}
                <div className="space-y-1">
                  {departments.map((dept) => (
                    <button
                      key={dept.name}
                      onClick={() => setActiveTab(dept.name)}
                      className={`w-full text-left px-5 py-4 border-l-2 text-sm font-medium transition-all duration-200 ${activeTab === dept.name
                          ? 'border-primary bg-primary/10 text-white'
                          : 'border-transparent text-white/40 hover:text-white/70 hover:border-white/20 hover:bg-white/3'
                        }`}
                    >
                      {dept.name}
                    </button>
                  ))}
                </div>

                {/* Active dept details */}
                {activeDept && (
                  <div className="mt-10 border border-white/10 bg-white/4 p-6">
                    <p className="text-white/45 text-xs mb-5 leading-relaxed">{activeDept.desc}</p>
                    <div className="space-y-3">
                      <a href={`tel:${activeDept.phone}`} className="flex items-center gap-3 text-white/65 hover:text-white text-sm transition-colors">
                        <FaPhone className="text-primary text-xs" />
                        {activeDept.phone}
                      </a>
                      <a href={`mailto:${activeDept.email}`} className="flex items-center gap-3 text-white/65 hover:text-white text-sm transition-colors">
                        <FaEnvelope className="text-primary text-xs" />
                        {activeDept.email}
                      </a>
                    </div>
                  </div>
                )}
              </div>

              {/* Social links */}
              <div className="mt-10">
                <p className="text-white/30 text-xs uppercase tracking-widest mb-4">Also Reach Us</p>
                <div className="flex gap-3">
                  {[
                    { Icon: FaLinkedinIn, href: '#', label: 'LinkedIn' },
                    { Icon: FaTwitter, href: '#', label: 'Twitter' },
                    { Icon: FaWhatsapp, href: '#', label: 'WhatsApp' },
                  ].map(({ Icon, href, label }) => (
                    <a key={label} href={href} aria-label={label}
                      className="w-9 h-9 border border-white/15 text-white/35 hover:text-white hover:border-white/40 flex items-center justify-center transition-all duration-200">
                      <Icon className="text-xs" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT — Contact form */}
            <div className="lg:col-span-3 py-16 px-8 lg:px-14 border-l border-gray-100">
              <div className="flex items-center gap-3 mb-2">
                <div className="h-px w-6 bg-primary" />
                <span className="text-primary text-xs font-bold uppercase tracking-[0.15em]">Send a Message</span>
              </div>
              <h2 className="text-3xl font-heading font-black text-dark mb-2">How can we help?</h2>
              <p className="text-gray-400 text-sm mb-10">Our team replies within 24 hours on business days.</p>

              {/* Success */}
              {submitted && (
                <div className="mb-8 flex items-center gap-3 bg-emerald-50 border border-emerald-200 px-5 py-4 text-emerald-700 text-sm font-medium">
                  <FaCheckCircle className="flex-shrink-0" />
                  Message sent! We'll get back to you shortly.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-2">Full Name *</label>
                    <input type="text" name="name" required value={form.name} onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full border border-gray-200 bg-gray-50 text-dark text-sm px-4 py-3 focus:outline-none focus:border-primary focus:bg-white transition-all duration-200 placeholder:text-gray-400" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-2">Email Address *</label>
                    <input type="email" name="email" required value={form.email} onChange={handleChange}
                      placeholder="you@company.com"
                      className="w-full border border-gray-200 bg-gray-50 text-dark text-sm px-4 py-3 focus:outline-none focus:border-primary focus:bg-white transition-all duration-200 placeholder:text-gray-400" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-2">Phone</label>
                    <input type="tel" name="phone" value={form.phone} onChange={handleChange}
                      placeholder="+1 (555) 000-0000"
                      className="w-full border border-gray-200 bg-gray-50 text-dark text-sm px-4 py-3 focus:outline-none focus:border-primary focus:bg-white transition-all duration-200 placeholder:text-gray-400" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-2">Subject *</label>
                    <select name="subject" required value={form.subject} onChange={handleChange}
                      className="w-full border border-gray-200 bg-gray-50 text-dark text-sm px-4 py-3 focus:outline-none focus:border-primary focus:bg-white transition-all duration-200">
                      <option value="">Select subject...</option>
                      <option value="general">General Inquiry</option>
                      <option value="quote">Request a Quote</option>
                      <option value="support">Technical Support</option>
                      <option value="partnership">Partnership</option>
                      <option value="careers">Careers</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-2">Message *</label>
                  <textarea name="message" required rows={5} value={form.message} onChange={handleChange}
                    placeholder="Tell us about your needs..."
                    className="w-full border border-gray-200 bg-gray-50 text-dark text-sm px-4 py-3 focus:outline-none focus:border-primary focus:bg-white transition-all duration-200 placeholder:text-gray-400 resize-none" />
                </div>

                <div className="flex items-center justify-between pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className={`flex items-center gap-3 bg-primary text-white font-semibold text-sm px-10 py-4 hover:bg-primary-dark transition-colors duration-200 ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
                  >
                    {loading ? (
                      <>
                        <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <FaPaperPlane className="text-xs" />
                        Send Message
                      </>
                    )}
                  </button>
                  <p className="text-gray-400 text-xs">Response within 24 hours</p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ── MAP + FAQ ── */}
      <section className="bg-light border-t border-gray-200">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Map */}
            <div className="min-h-[400px] border-r border-gray-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3463.1!2d-95.36!3d29.76!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjnCsDQ1JzM2LjAiTiA5NcKwMjEnMzYuMCJX!5e0!3m2!1sen!2sus!4v1600000000000!5m2!1sen!2sus"
                width="100%" height="100%"
                style={{ border: 0, minHeight: '400px', display: 'block' }}
                allowFullScreen loading="lazy" title="BMSEC Location"
              />
            </div>

            {/* FAQ */}
            <div className="py-14 px-10 lg:px-14">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-6 bg-primary" />
                <span className="text-primary text-xs font-bold uppercase tracking-[0.15em]">FAQ</span>
              </div>
              <h3 className="text-2xl font-heading font-black text-dark mb-8">Quick Answers</h3>

              <div className="space-y-6">
                {[
                  {
                    q: 'How soon will I get a response?',
                    a: 'Most enquiries are answered within 24 business hours. Urgent requests are flagged for same-day handling.',
                  },
                  {
                    q: 'Do you provide custom enterprise quotes?',
                    a: 'Yes. Select "Request a Quote" in the subject field and a sales specialist will contact you with tailored pricing.',
                  },
                  {
                    q: 'Can I contact support outside business hours?',
                    a: 'Yes. Our standby support team handles critical requests 24/7 for operational emergencies.',
                  },
                  {
                    q: 'Do you ship internationally?',
                    a: 'Absolutely. We operate across 35+ countries with established regional delivery networks.',
                  },
                ].map((item, i) => (
                  <div key={i} className="border-b border-gray-100 pb-6 last:border-0 last:pb-0">
                    <p className="font-heading font-bold text-dark text-sm mb-2">{item.q}</p>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.a}</p>
                  </div>
                ))}
              </div>

              <Link to="/about" className="mt-10 inline-flex items-center gap-2 text-sm font-bold text-primary hover:gap-4 transition-all duration-200 uppercase tracking-wide">
                Learn More About Us <FaArrowRight className="text-xs" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <BackToTop />
    </>
  )
}

export default ContactPage
