import CategoryBanner from '../components/products/CategoryBanner'
import BackToTop from '../components/common/BackToTop'
import { FaMapMarkerAlt, FaPhone, FaClock, FaSearch } from 'react-icons/fa'

const stations = [
  { name: 'BMSEC Houston Main', address: '1200 Energy Blvd, Houston, TX', phone: '+1 (800) 555-0101', hours: '24/7' },
  { name: 'BMSEC Downtown Dallas', address: '450 Commerce St, Dallas, TX', phone: '+1 (800) 555-0102', hours: '6 AM – 11 PM' },
  { name: 'BMSEC Miami Port', address: '900 Port Blvd, Miami, FL', phone: '+1 (800) 555-0103', hours: '24/7' },
  { name: 'BMSEC Atlanta South', address: '2100 Peachtree Rd, Atlanta, GA', phone: '+1 (800) 555-0104', hours: '5 AM – 12 AM' },
  { name: 'BMSEC New York Harbor', address: '15 South Street, New York, NY', phone: '+1 (800) 555-0105', hours: '24/7' },
  { name: 'BMSEC Los Angeles', address: '800 W Olympic Blvd, LA, CA', phone: '+1 (800) 555-0106', hours: '6 AM – 10 PM' },
]

const StationLocator = () => {
  return (
    <>
      <CategoryBanner
        title="Station Locator"
        subtitle="Find Us"
        description="Locate your nearest BMSEC Energy station or marine terminal"
        image="https://images.unsplash.com/photo-1567581935884-3349723552ca?w=1920&q=80"
        breadcrumbs={[{ name: 'Stations' }]}
      />

      <section className="section-padding bg-light">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Sidebar — Station List */}
            <div>
              {/* Search */}
              <div className="relative mb-8">
                <input
                  type="text"
                  placeholder="Search by city or zip code..."
                  className="w-full px-5 py-3.5 pl-12 bg-white border border-gray-200 rounded-xl text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/10 transition-all"
                />
                <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
              </div>

              {/* Station Cards */}
              <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2">
                {stations.map((station, i) => (
                  <div
                    key={i}
                    className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-primary/20 transition-all cursor-pointer group"
                  >
                    <h4 className="font-heading font-bold text-dark group-hover:text-primary transition-colors mb-3">
                      {station.name}
                    </h4>
                    <div className="space-y-2 text-sm text-gray-500">
                      <p className="flex items-center gap-2">
                        <FaMapMarkerAlt className="text-primary/50 text-xs flex-shrink-0" />
                        {station.address}
                      </p>
                      <p className="flex items-center gap-2">
                        <FaPhone className="text-primary/50 text-xs flex-shrink-0" />
                        {station.phone}
                      </p>
                      <p className="flex items-center gap-2">
                        <FaClock className="text-primary/50 text-xs flex-shrink-0" />
                        {station.hours}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Map */}
            <div className="lg:col-span-2">
              <div className="rounded-2xl overflow-hidden h-full min-h-[600px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3463.1!2d-95.36!3d29.76!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjnCsDQ1JzM2LjAiTiA5NcKwMjEnMzYuMCJX!5e0!3m2!1sen!2sus!4v1600000000000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: '600px' }}
                  allowFullScreen=""
                  loading="lazy"
                  title="Station Map"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <BackToTop />
    </>
  )
}

export default StationLocator