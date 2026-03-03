import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaUser, FaEnvelope, FaLock, FaEye, FaEyeSlash, FaPhone, FaArrowRight, FaCheckCircle } from 'react-icons/fa'
import { MdElectricBolt } from 'react-icons/md'

const RegisterPage = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (form.password !== form.confirmPassword) {
      alert('Passwords do not match')
      return
    }
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      alert('Registration functionality will be connected to the backend.')
    }, 1200)
  }

  const inputClass = "w-full px-5 py-4 pl-12 rounded-2xl bg-white/[0.07] border border-white/12 text-white placeholder:text-white/30 focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-all text-sm"

  return (
    <section className="min-h-screen flex bg-dark">
      {/* Left hero panel */}
      <div className="hidden lg:block lg:w-1/2 relative overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1559825481-12a05cc00344?w=1200&q=80"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-dark/88 via-accent/30 to-dark/70" />
        <div className="absolute inset-0 bg-dots-light opacity-20" />

        <Link to="/" className="absolute top-10 left-10 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-white/15 backdrop-blur-sm border border-white/20 flex items-center justify-center font-heading font-black text-sm text-white">
            BM
          </div>
          <div>
            <span className="text-white font-heading font-bold text-lg block leading-none">BMSEC</span>
            <span className="text-white/40 text-[9px] uppercase tracking-[0.15em]">Energy & Marine</span>
          </div>
        </Link>

        <div className="absolute inset-0 flex flex-col items-center justify-center px-16">
          <div className="text-center max-w-md">
            <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/15 flex items-center justify-center mx-auto mb-6">
              <MdElectricBolt className="text-3xl text-gold" />
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-black text-white mb-5 leading-tight">
              Join BMSEC
            </h2>
            <p className="text-white/55 text-lg leading-relaxed">
              Create your account to unlock exclusive pricing, track orders, and manage your energy needs.
            </p>

            <div className="flex flex-col gap-3 mt-10">
              {['Exclusive member discounts', 'Priority delivery scheduling', 'Dedicated account manager'].map((feat) => (
                <div key={feat} className="flex items-center gap-3 px-5 py-3 rounded-xl bg-white/8 border border-white/10">
                  <FaCheckCircle className="text-gold text-sm flex-shrink-0" />
                  <span className="text-white/70 text-sm">{feat}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Right form panel */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 lg:p-16 relative overflow-y-auto">
        <div className="absolute inset-0 bg-gradient-to-br from-dark-light to-dark" />
        <div className="absolute inset-0 bg-mesh-dark opacity-60" />

        <div className="relative z-10 w-full max-w-md py-10">
          <Link to="/" className="inline-flex items-center gap-3 mb-10 lg:hidden">
            <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center font-heading font-black text-xs text-white">
              BM
            </div>
            <span className="text-white font-heading font-bold text-lg">BMSEC</span>
          </Link>

          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-heading font-black text-white mb-2">Create Account</h1>
            <p className="text-white/45">Fill in your details to get started for free.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name */}
            <div>
              <label className="block text-sm font-semibold text-white/70 mb-2">Full Name</label>
              <div className="relative">
                <input type="text" name="name" required value={form.name} onChange={handleChange}
                  placeholder="John Doe" className={inputClass} />
                <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30 text-sm" />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-semibold text-white/70 mb-2">Email Address</label>
              <div className="relative">
                <input type="email" name="email" required value={form.email} onChange={handleChange}
                  placeholder="you@company.com" className={inputClass} />
                <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30 text-sm" />
              </div>
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-semibold text-white/70 mb-2">Phone Number</label>
              <div className="relative">
                <input type="tel" name="phone" value={form.phone} onChange={handleChange}
                  placeholder="+1 (555) 000-0000" className={inputClass} />
                <FaPhone className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30 text-sm" />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-semibold text-white/70 mb-2">Password</label>
              <div className="relative">
                <input type={showPassword ? 'text' : 'password'} name="password" required
                  value={form.password} onChange={handleChange} placeholder="Min. 8 characters"
                  className={`${inputClass} pr-12`} />
                <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30 text-sm" />
                <button type="button" onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white/30 hover:text-white/70 transition-colors" aria-label="Toggle password">
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-sm font-semibold text-white/70 mb-2">Confirm Password</label>
              <div className="relative">
                <input type="password" name="confirmPassword" required value={form.confirmPassword}
                  onChange={handleChange} placeholder="Re-enter password" className={inputClass} />
                <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30 text-sm" />
              </div>
            </div>

            {/* Terms */}
            <label className="flex items-start gap-3 cursor-pointer pt-1">
              <input type="checkbox" required className="mt-0.5 accent-primary" />
              <span className="text-sm text-white/45 leading-relaxed">
                I agree to the{' '}
                <a href="#" className="text-primary-light hover:text-white transition-colors">Terms of Service</a>
                {' '}and{' '}
                <a href="#" className="text-primary-light hover:text-white transition-colors">Privacy Policy</a>
              </span>
            </label>

            <button
              type="submit"
              disabled={loading}
              className={`btn btn-primary w-full btn-lg rounded-2xl mt-1 ${loading ? 'opacity-70' : ''}`}
            >
              {loading ? (
                <span className="flex items-center gap-2">
                  <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  Creating account...
                </span>
              ) : (
                <>Create Account <FaArrowRight className="text-sm" /></>
              )}
            </button>
          </form>

          <p className="text-center text-sm text-white/40 mt-8">
            Already have an account?{' '}
            <Link to="/login" className="font-semibold text-primary-light hover:text-white transition-colors">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </section>
  )
}

export default RegisterPage
