import { useState, useEffect } from 'react'
import { FaArrowUp, FaChevronUp } from 'react-icons/fa'

const BackToTop = () => {
  const [visible, setVisible] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const update = () => {
      const scrollY = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      setVisible(scrollY > 400)
      setProgress(docHeight > 0 ? (scrollY / docHeight) * 100 : 0)
    }
    window.addEventListener('scroll', update)
    return () => window.removeEventListener('scroll', update)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const circumference = 2 * Math.PI * 18 // radius 18
  const strokeDash = (progress / 100) * circumference

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 z-50 w-14 h-14 rounded-full flex items-center justify-center transition-all duration-500 group ${visible
          ? 'opacity-100 translate-y-0 pointer-events-auto'
          : 'opacity-0 translate-y-6 pointer-events-none'
        }`}
      aria-label="Back to top"
      style={{
        background: 'linear-gradient(135deg, #1453c2, #2f72e6)',
        boxShadow: visible ? '0 8px 30px rgba(20, 83, 194, 0.45), 0 0 0 0 rgba(20,83,194,0.2)' : 'none',
      }}
    >
      {/* Ring progress */}
      <svg
        className="absolute inset-0 w-full h-full -rotate-90"
        viewBox="0 0 44 44"
      >
        <circle cx="22" cy="22" r="18" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="2" />
        <circle
          cx="22"
          cy="22"
          r="18"
          fill="none"
          stroke="rgba(255,255,255,0.8)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray={`${strokeDash} ${circumference}`}
          style={{ transition: 'stroke-dasharray 0.3s ease' }}
        />
      </svg>

      <FaChevronUp className="text-white text-sm relative z-10 group-hover:-translate-y-0.5 transition-transform duration-200" />
    </button>
  )
}

export default BackToTop