import { useState, useEffect, useRef } from 'react'
import { FaGasPump, FaUsers, FaGlobeAmericas, FaAward } from 'react-icons/fa'

const stats = [
  { end: 2500, suffix: '+', label: 'Service Stations', icon: FaGasPump, color: '#1453c2' },
  { end: 10, suffix: 'M+', label: 'Happy Customers', icon: FaUsers, color: '#C8A951' },
  { end: 35, suffix: '+', label: 'Countries', icon: FaGlobeAmericas, color: '#06b6d4' },
  { end: 25, suffix: '+', label: 'Years of Trust', icon: FaAward, color: '#10b981' },
]

const AnimatedNumber = ({ end, suffix, inView }) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) return
    let start = 0
    const duration = 2200
    const increment = end / (duration / 16)
    const timer = setInterval(() => {
      start += increment
      if (start >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)
    return () => clearInterval(timer)
  }, [end, inView])

  const format = (n) => {
    if (n >= 1000) return (n / 1000).toFixed(n % 1000 === 0 ? 0 : 1) + 'K'
    return n.toString()
  }

  return (
    <span className="text-5xl md:text-6xl lg:text-7xl font-heading font-black text-white tracking-tight">
      {format(count)}
      <span
        className="text-4xl md:text-5xl"
        style={{ background: 'linear-gradient(135deg, #C8A951, #D4BC6A)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}
      >
        {suffix}
      </span>
    </span>
  )
}

const StatsCounter = () => {
  const [inView, setInView] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} className="relative py-36 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1504222490345-c075b6008014?w=1920&q=80"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-dark/92" />
        <div className="absolute inset-0 bg-mesh-dark" />
        <div className="absolute inset-0 bg-dots-light opacity-20" />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-px divider-light" />
      <div className="absolute bottom-0 left-0 right-0 h-px divider-light" />

      <div className="container-custom relative z-10">
        {/* Section label */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/15 bg-white/5 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
            <span className="text-white/60 text-xs font-bold uppercase tracking-[0.15em]">Our Impact in Numbers</span>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.06] border border-white/[0.08]">
          {stats.map((stat, i) => {
            const Icon = stat.icon
            return (
              <div
                key={stat.label}
                className="relative text-center p-10 lg:p-14 bg-dark/60 backdrop-blur-sm group hover:bg-white/[0.04] transition-colors duration-300"
              >
                {/* Icon */}
                <div
                  className="w-12 h-12 mx-auto mb-6 flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                  style={{ background: `${stat.color}22`, border: `1px solid ${stat.color}33` }}
                >
                  <Icon className="text-lg" style={{ color: stat.color }} />
                </div>

                <AnimatedNumber end={stat.end} suffix={stat.suffix} inView={inView} />

                <p className="text-white/45 text-sm mt-3 font-semibold uppercase tracking-[0.14em]">
                  {stat.label}
                </p>

                {/* Bottom glow */}
                <div
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: stat.color }}
                />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default StatsCounter