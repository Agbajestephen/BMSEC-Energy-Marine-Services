const SectionTitle = ({
  subtitle,
  title,
  description,
  center = true,
  light = false,
  accentColor = 'primary', // 'primary' | 'gold'
}) => {
  const isGold = accentColor === 'gold'

  return (
    <div className={`mb-16 md:mb-20 ${center ? 'text-center' : ''}`}>
      {subtitle && (
        <div className={`mb-5 ${center ? 'justify-center' : 'justify-start'} flex`}>
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border text-[0.72rem] font-bold uppercase tracking-[0.12em] ${
              light
                ? isGold
                  ? 'border-gold/30 bg-gold/10 text-gold'
                  : 'border-white/20 bg-white/8 text-white/80'
                : isGold
                ? 'border-gold/25 bg-gold/[0.07] text-gold-dark'
                : 'border-primary/20 bg-primary/[0.06] text-primary'
            }`}
          >
            <span
              className={`w-1.5 h-1.5 rounded-full animate-pulse ${
                light
                  ? isGold ? 'bg-gold' : 'bg-white/70'
                  : isGold ? 'bg-gold' : 'bg-primary'
              }`}
            />
            {subtitle}
          </div>
        </div>
      )}

      <h2
        className={`text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold leading-[1.1] tracking-tight ${
          light ? 'text-white' : 'text-dark'
        }`}
      >
        {title}
      </h2>

      {/* Animated accent underline */}
      <div className={`${center ? 'mx-auto' : ''} mt-5 flex ${center ? 'justify-center' : 'justify-start'}`}>
        <div
          className={`h-1 rounded-full ${isGold ? 'section-separator-gold' : 'section-separator'}`}
          style={{ margin: 0, width: '56px' }}
        />
        <div
          className={`h-1 w-2 rounded-full ml-1.5 opacity-40 ${
            isGold ? 'bg-gold-light' : 'bg-primary-light'
          }`}
        />
      </div>

      {description && (
        <p
          className={`mt-7 text-lg leading-relaxed max-w-2xl ${
            center ? 'mx-auto' : ''
          } ${light ? 'text-white/60' : 'text-gray-500'}`}
        >
          {description}
        </p>
      )}
    </div>
  )
}

export default SectionTitle
