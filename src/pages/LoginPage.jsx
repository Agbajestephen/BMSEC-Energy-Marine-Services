import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaEnvelope, FaLock, FaEye, FaEyeSlash, FaArrowRight, FaShieldAlt } from 'react-icons/fa'
import { MdElectricBolt } from 'react-icons/md'

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [form, setForm] = useState({ email: '', password: '' })
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      alert('Login functionality will be connected to the backend.')
    }, 1200)
  }

  return (
    <section className="min-h-screen flex bg-dark">
      {/* Left panel — hero image */}
      <div className="hidden lg:block lg:w-1/2 relative overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1545249390-6bdfa286032f?w=1200&q=80"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-dark/85 via-primary/50 to-dark/70" />
        <div className="absolute inset-0 bg-dots-light opacity-20" />

        {/* Logo */}
        <Link to="/" className="absolute top-10 left-10 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-white/15 backdrop-blur-sm border border-white/20 flex items-center justify-center font-heading font-black text-sm text-white">
            BM
          </div>
          <div>
            <span className="text-white font-heading font-bold text-lg block leading-none">BMSEC</span>
            <span className="text-white/40 text-[9px] uppercase tracking-[0.15em]">Energy & Marine</span>
          </div>
        </Link>

        {/* Center content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center px-16">
          <div className="text-center max-w-md">
            <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/15 flex items-center justify-center mx-auto mb-6">
              <MdElectricBolt className="text-3xl text-gold" />
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-black text-white mb-5 leading-tight">
              Welcome Back
            </h2>
            <p className="text-white/55 text-lg leading-relaxed">
              Sign in to manage your orders, track deliveries, and access your BMSEC dashboard.
            </p>

            {/* Feature pills */}
            <div className="flex flex-col gap-3 mt-10">
              {['Manage Orders & Deliveries', 'Access Exclusive Pricing', 'Track Service Requests'].map((feat) => (
                <div key={feat} className="flex items-center gap-3 px-5 py-3 rounded-xl bg-white/8 border border-white/10">
                  <FaShieldAlt className="text-gold text-sm flex-shrink-0" />
                  <span className="text-white/70 text-sm">{feat}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Right panel — form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 lg:p-16 relative">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-dark-light to-dark" />
        <div className="absolute inset-0 bg-mesh-dark opacity-60" />

        <div className="relative z-10 w-full max-w-md">
          {/* Mobile logo */}
          <Link to="/" className="inline-flex items-center gap-3 mb-10 lg:hidden">
            <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center font-heading font-black text-xs text-white">
              BM
            </div>
            <span className="text-white font-heading font-bold text-lg">BMSEC</span>
          </Link>

          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-heading font-black text-white mb-2">Sign In</h1>
            <p className="text-white/45">Enter your credentials to access your account.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email */}
            <div>
              <label className="block text-sm font-semibold text-white/70 mb-2">Email Address</label>
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@company.com"
                  className="w-full px-5 py-4 pl-12 rounded-2xl bg-white/[0.07] border border-white/12 text-white placeholder:text-white/30 focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-all text-sm"
                />
                <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30 text-sm" />
              </div>
            </div>

            {/* Password */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="block text-sm font-semibold text-white/70">Password</label>
                <a href="#" className="text-xs font-medium text-primary-light hover:text-white transition-colors">
                  Forgot password?
                </a>
              </div>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  required
                  value={form.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className="w-full px-5 py-4 pl-12 pr-12 rounded-2xl bg-white/[0.07] border border-white/12 text-white placeholder:text-white/30 focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-all text-sm"
                />
                <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30 text-sm" />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white/30 hover:text-white/70 transition-colors"
                  aria-label="Toggle password visibility"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>

            {/* Remember me */}
            <label className="flex items-center gap-3 cursor-pointer group">
              <div className="relative">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-5 h-5 border border-white/20 rounded-md bg-white/[0.06] peer-checked:bg-primary peer-checked:border-primary transition-all" />
              </div>
              <span className="text-sm text-white/50 group-hover:text-white/70 transition-colors">Remember me for 30 days</span>
            </label>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className={`btn btn-primary w-full btn-lg rounded-2xl mt-2 ${loading ? 'opacity-70' : ''}`}
            >
              {loading ? (
                <span className="flex items-center gap-2">
                  <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  Signing in...
                </span>
              ) : (
                <>Sign In <FaArrowRight className="text-sm" /></>
              )}
            </button>
          </form>

          <p className="text-center text-sm text-white/40 mt-8">
            Don't have an account?{' '}
            <Link to="/register" className="font-semibold text-primary-light hover:text-white transition-colors">
              Create one free
            </Link>
          </p>

          <p className="text-center text-xs text-white/20 mt-6">
            Protected by 256-bit SSL encryption
          </p>
        </div>
      </div>
    </section>
  )
}

export default LoginPage
