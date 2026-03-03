import { Link } from 'react-router-dom'
import { FaMapMarkerAlt, FaClock, FaArrowRight } from 'react-icons/fa'
import CategoryBanner from '../components/products/CategoryBanner'
import SectionTitle from '../components/common/SectionTitle'
import BackToTop from '../components/common/BackToTop'

const openings = [
  { title: 'Senior Marine Operations Manager', location: 'Houston, TX', type: 'Full-Time', dept: 'Marine Services' },
  { title: 'Fuel Supply Chain Analyst', location: 'Singapore', type: 'Full-Time', dept: 'Logistics' },
  { title: 'Lubricant Product Engineer', location: 'Dubai, UAE', type: 'Full-Time', dept: 'R&D' },
  { title: 'Fleet Account Manager', location: 'London, UK', type: 'Full-Time', dept: 'Sales' },
  { title: 'Digital Marketing Specialist', location: 'Remote', type: 'Full-Time', dept: 'Marketing' },
  { title: 'Station Operations Supervisor', location: 'Lagos, Nigeria', type: 'Full-Time', dept: 'Operations' },
]

const CareersPage = () => {
  return (
    <>
      <CategoryBanner
        title="Careers"
        subtitle="Join Our Team"
        description="Build your career with a global leader in energy and marine services"
        image="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=1920&q=80"
        breadcrumbs={[{ name: 'Careers' }]}
      />

      {/* ── WHY JOIN ── */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <p className="text-sm font-semibold text-primary uppercase tracking-[0.25em] mb-4">
                Why BMSEC?
              </p>
              <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-dark leading-tight mb-8">
                Shape the future of energy with us.
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed mb-6">
                At BMSEC, you'll work alongside industry leaders on projects that power communities and industries across the globe. We offer competitive compensation, world-class training, and the opportunity to make a real impact.
              </p>
              <p className="text-gray-500 leading-relaxed">
                With operations in 35+ countries and 18,000 employees, your career can take you anywhere — from offshore platforms to corporate headquarters, from port operations to cutting-edge R&D labs.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1504222490345-c075b6008014?w=900&q=80"
                alt="Careers at BMSEC"
                className="w-full h-[450px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── OPENINGS ── */}
      <section className="section-padding bg-light">
        <div className="container-custom">
          <SectionTitle
            subtitle="Open Positions"
            title="Current Opportunities"
            description="Find your next role at BMSEC Energy and Marine Services"
          />

          <div className="max-w-4xl mx-auto space-y-4">
            {openings.map((job, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 group hover-lift transition-all"
              >
                <div>
                  <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">
                    {job.dept}
                  </p>
                  <h3 className="text-lg font-heading font-bold text-dark group-hover:text-primary transition-colors">
                    {job.title}
                  </h3>
                  <div className="flex items-center gap-5 mt-3 text-sm text-gray-400">
                    <span className="flex items-center gap-1.5">
                      <FaMapMarkerAlt className="text-xs" />
                      {job.location}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <FaClock className="text-xs" />
                      {job.type}
                    </span>
                  </div>
                </div>
                <button className="btn btn-sm btn-outline-dark">
                  Apply Now
                  <FaArrowRight className="text-xs" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <BackToTop />
    </>
  )
}

export default CareersPage