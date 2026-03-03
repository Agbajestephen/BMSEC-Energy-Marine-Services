import { FaPhone, FaEnvelope, FaClock, FaCircle } from 'react-icons/fa'
import { BRAND } from '../../utils/constants'

const TopBar = () => {
  return (
    <div className="bg-gradient-to-r from-dark via-dark-light to-dark-medium text-white/65 text-xs py-2.5 border-b border-white/[0.06]">
      <div className="container-custom flex justify-between items-center">
        <div className="flex items-center gap-6 md:gap-8">
          <a
            href={`tel:${BRAND.phone}`}
            className="flex items-center gap-2 hover:text-white transition-colors duration-200 group"
          >
            <FaPhone className="text-[9px] text-primary-light group-hover:text-primary transition-colors" />
            <span>{BRAND.phone}</span>
          </a>
          <a
            href={`mailto:${BRAND.email}`}
            className="hidden sm:flex items-center gap-2 hover:text-white transition-colors duration-200 group"
          >
            <FaEnvelope className="text-[9px] text-primary-light group-hover:text-primary transition-colors" />
            <span>{BRAND.email}</span>
          </a>
        </div>

        <div className="flex items-center gap-4">
          {/* Live indicator */}
          <div className="hidden md:flex items-center gap-1.5">
            <FaCircle className="text-[6px] text-emerald-400 animate-pulse" />
            <span className="text-white/45 text-[10px] font-medium tracking-wide">24/7 Support Active</span>
          </div>
          <div className="h-3 w-px bg-white/10 hidden md:block" />
          <div className="flex items-center gap-1.5">
            <FaClock className="text-[9px] text-gold/70" />
            <span className="text-white/45">{BRAND.workingHours}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopBar
