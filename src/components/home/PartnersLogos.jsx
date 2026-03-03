const partners = [
  { name: 'Shell', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/e8/Shell_logo.svg/150px-Shell_logo.svg.png' },
  { name: 'ExxonMobil', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/ExxonMobil_Logo.svg/200px-ExxonMobil_Logo.svg.png' },
  { name: 'Castrol', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/b7/Castrol_logo.svg/200px-Castrol_logo.svg.png' },
  { name: 'Bosch', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Bosch-logo.svg/200px-Bosch-logo.svg.png' },
  { name: 'Michelin', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Michelin.svg/200px-Michelin.svg.png' },
  { name: 'TotalEnergies', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/c4/TotalEnergies_logo.svg/200px-TotalEnergies_logo.svg.png' },
  { name: 'Shell', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/e8/Shell_logo.svg/150px-Shell_logo.svg.png' },
  { name: 'ExxonMobil', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/ExxonMobil_Logo.svg/200px-ExxonMobil_Logo.svg.png' },
  { name: 'Castrol', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/b7/Castrol_logo.svg/200px-Castrol_logo.svg.png' },
  { name: 'Bosch', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Bosch-logo.svg/200px-Bosch-logo.svg.png' },
  { name: 'Michelin', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Michelin.svg/200px-Michelin.svg.png' },
  { name: 'TotalEnergies', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/c4/TotalEnergies_logo.svg/200px-TotalEnergies_logo.svg.png' },
]

const PartnersLogos = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Divider */}
      <div className="absolute top-0 left-0 right-0 h-px divider-gradient" />

      <div className="container-custom">
        {/* Header */}
        <div className="flex items-center gap-6 mb-16">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-gray-200" />
          <p className="text-xs font-bold text-gray-400 uppercase tracking-[0.3em] whitespace-nowrap px-2">
            Trusted by Industry Leaders
          </p>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-gray-200" />
        </div>

        {/* Marquee container */}
        <div className="relative overflow-hidden">
          {/* Fade masks */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          {/* Scrolling track */}
          <div className="flex gap-16 md:gap-24 marquee" style={{ width: 'max-content' }}>
            {partners.map((partner, i) => (
              <div
                key={`${partner.name}-${i}`}
                className="group flex items-center justify-center flex-shrink-0"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-8 md:h-10 object-contain grayscale opacity-25 group-hover:grayscale-0 group-hover:opacity-90 transition-all duration-500 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px divider-gradient" />
    </section>
  )
}

export default PartnersLogos