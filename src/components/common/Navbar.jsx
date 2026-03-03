import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import {
  FaBars,
  FaTimes,
  FaShoppingCart,
  FaUser,
  FaChevronDown,
  FaArrowRight,
} from 'react-icons/fa'
import { useCart } from '../../context/CartContext'
import { navLinks } from '../../data/navigation'
import TopBar from './TopBar'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const { cartCount } = useCart()
  const location = useLocation()

  const isHomePage = location.pathname === '/'
  const showTransparent = isHomePage && !scrolled

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
    setActiveDropdown(null)
  }, [location])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50">
        {/* TopBar */}
        <div className={`hidden lg:block transition-all duration-400 overflow-hidden ${scrolled ? 'max-h-0 opacity-0' : 'max-h-10 opacity-100'}`}>
          <TopBar />
        </div>

        {/* Main nav bar — flat, edge-to-edge */}
        <nav
          className={`w-full transition-all duration-400 ${scrolled
              ? 'bg-white border-b border-gray-200/80 shadow-sm'
              : isHomePage
                ? 'bg-transparent border-b border-white/10'
                : 'bg-white border-b border-gray-200 shadow-sm'
            }`}
        >
          <div className="container-custom">
            <div className="flex items-center justify-between h-16 lg:h-[68px]">

              {/* Logo */}
              <Link to="/" className="flex items-center gap-3 group flex-shrink-0">
                <div
                  className={`w-9 h-9 flex items-center justify-center font-heading font-black text-sm transition-all duration-300 ${showTransparent
                      ? 'bg-white text-primary'
                      : 'bg-primary text-white'
                    }`}
                  style={{ clipPath: 'polygon(10% 0%, 90% 0%, 100% 10%, 100% 90%, 90% 100%, 10% 100%, 0% 90%, 0% 10%)' }}
                >
                  BM
                </div>
                <div className="leading-tight">
                  <span className={`text-[17px] font-heading font-extrabold tracking-tight transition-colors ${showTransparent ? 'text-white' : 'text-dark'}`}>
                    BMSEC
                  </span>
                  <p className={`text-[7.5px] font-bold tracking-[0.2em] uppercase transition-colors ${showTransparent ? 'text-white/50' : 'text-gray-400'}`}>
                    Energy & Marine
                  </p>
                </div>
              </Link>

              {/* Desktop nav */}
              <div className="hidden lg:flex items-center h-full">
                {navLinks.map((link) => (
                  <div
                    key={link.name}
                    className="relative h-full flex items-center"
                    onMouseEnter={() => link.submenu && setActiveDropdown(link.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <NavLink
                      to={link.path}
                      className={({ isActive }) =>
                        `relative flex items-center gap-1.5 px-4 h-full text-[13.5px] font-medium transition-colors duration-200 border-b-2 ${isActive
                          ? showTransparent
                            ? 'text-white border-white'
                            : 'text-primary border-primary'
                          : showTransparent
                            ? 'text-white/75 hover:text-white border-transparent'
                            : 'text-gray-600 hover:text-dark border-transparent hover:border-gray-300'
                        }`
                      }
                    >
                      {link.name}
                      {link.submenu && (
                        <FaChevronDown className={`text-[8px] transition-transform duration-200 ${activeDropdown === link.name ? 'rotate-180' : ''}`} />
                      )}
                    </NavLink>

                    {/* Dropdown — sharp edges */}
                    {link.submenu && activeDropdown === link.name && (
                      <div className="absolute top-full left-0 pt-0 w-72 slide-down">
                        <div className="bg-white shadow-xl border border-gray-100 border-t-2 border-t-primary">
                          {link.submenu.map((sub) => (
                            <Link
                              key={sub.category}
                              to={sub.path}
                              className="flex items-center gap-3 px-5 py-3.5 text-sm text-gray-600 hover:text-primary hover:bg-gray-50 border-b border-gray-50 last:border-0 transition-colors duration-150 group"
                            >
                              <img
                                src={sub.image}
                                alt={sub.category}
                                className="w-10 h-10 object-cover border border-gray-100"
                              />
                              <span>
                                <span className="font-semibold text-dark group-hover:text-primary block transition-colors">{sub.category}</span>
                                <span className="text-[11px] text-gray-400">{sub.description.substring(0, 40)}...</span>
                              </span>
                            </Link>
                          ))}
                          <div className="px-5 py-3 bg-gray-50 border-t border-gray-100">
                            <Link to={link.path} className="flex items-center gap-1.5 text-xs font-bold text-primary uppercase tracking-wide hover:gap-2.5 transition-all duration-200">
                              View all <FaArrowRight className="text-[9px]" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Right actions */}
              <div className="flex items-center gap-3">
                {/* Cart */}
                <Link
                  to="/cart"
                  className={`relative p-2 transition-colors ${showTransparent ? 'text-white/75 hover:text-white' : 'text-gray-500 hover:text-dark'}`}
                >
                  <FaShoppingCart className="text-lg" />
                  {cartCount > 0 && (
                    <span className="absolute -top-1 -right-1 w-4.5 h-4.5 bg-red-500 text-white text-[9px] font-bold flex items-center justify-center leading-none"
                      style={{ minWidth: '18px', minHeight: '18px', borderRadius: 0 }}>
                      {cartCount}
                    </span>
                  )}
                </Link>

                {/* Sign In */}
                <Link
                  to="/login"
                  className={`hidden md:flex items-center gap-2 px-5 py-2 text-[13px] font-semibold transition-all duration-200 ${showTransparent
                      ? 'border border-white/40 text-white hover:bg-white hover:text-dark'
                      : 'bg-primary text-white hover:bg-primary-dark'
                    }`}
                >
                  <FaUser className="text-[10px]" />
                  Sign In
                </Link>

                {/* Hamburger */}
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className={`lg:hidden p-2 transition-colors ${showTransparent ? 'text-white' : 'text-gray-700'}`}
                  aria-label="Toggle menu"
                >
                  {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
                </button>
              </div>

            </div>
          </div>
        </nav>
      </header>

      {/* Mobile backdrop */}
      <div
        className={`lg:hidden fixed inset-0 bg-black/60 z-[55] transition-opacity duration-300 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile drawer — flush left edge */}
      <div className={`lg:hidden fixed top-0 left-0 w-[300px] h-full bg-dark z-[60] transform transition-transform duration-400 ease-in-out flex flex-col ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/[0.08]">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-primary flex items-center justify-center font-heading font-black text-xs text-white">
              BM
            </div>
            <div>
              <span className="text-white font-heading font-bold text-base block leading-none">BMSEC</span>
              <span className="text-white/30 text-[8px] uppercase tracking-[0.14em]">Energy & Marine</span>
            </div>
          </div>
          <button onClick={() => setIsOpen(false)} className="text-white/50 hover:text-white transition-colors p-1">
            <FaTimes size={18} />
          </button>
        </div>

        {/* Links */}
        <div className="flex-1 overflow-y-auto py-4">
          {navLinks.map((link) => (
            <div key={link.name}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `block px-6 py-3.5 text-sm font-medium border-l-2 transition-all duration-150 ${isActive ? 'border-primary text-primary bg-primary/8' : 'border-transparent text-white/60 hover:text-white hover:border-white/20'
                  }`
                }
              >
                {link.name}
              </NavLink>
              {link.submenu && (
                <div className="pl-10 border-l border-white/[0.06] ml-6">
                  {link.submenu.map((sub) => (
                    <NavLink
                      key={sub.category}
                      to={sub.path}
                      className={({ isActive }) =>
                        `block py-2.5 text-xs transition-colors ${isActive ? 'text-primary font-semibold' : 'text-white/30 hover:text-white/65'}`
                      }
                    >
                      {sub.category}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTAs */}
        <div className="p-5 border-t border-white/[0.07] space-y-2.5">
          <Link to="/cart" onClick={() => setIsOpen(false)}
            className="flex items-center justify-center gap-2 w-full py-3 border border-white/15 text-white/70 hover:text-white font-semibold text-sm transition-all">
            <FaShoppingCart className="text-sm" /> Cart ({cartCount})
          </Link>
          <Link to="/login" onClick={() => setIsOpen(false)}
            className="flex items-center justify-center gap-2 w-full py-3 bg-primary text-white font-semibold text-sm hover:bg-primary-dark transition-all">
            <FaUser className="text-xs" /> Sign In
          </Link>
        </div>
      </div>
    </>
  )
}

export default Navbar
