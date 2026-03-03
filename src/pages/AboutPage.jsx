import { Link } from 'react-router-dom'
import { FaArrowRight, FaCheck } from 'react-icons/fa'
import CategoryBanner from '../components/products/CategoryBanner'
import SectionTitle from '../components/common/SectionTitle'
import BackToTop from '../components/common/BackToTop'
import { team } from '../data/team'

const milestones = [
  {
    year: '1998',
    title: 'Founded',
    desc: 'BMSEC established in Houston, TX with a single fuel distribution center.',
  },
  {
    year: '2004',
    title: 'Marine Division',
    desc: 'Launched marine bunkering services across Gulf of Mexico ports.',
  },
  {
    year: '2010',
    title: 'Global Expansion',
    desc: 'Expanded operations to 15 countries with 500+ service stations.',
  },
  {
    year: '2016',
    title: 'Product Line',
    desc: 'Introduced proprietary lubricant and battery product lines.',
  },
  {
    year: '2020',
    title: 'Digital Transformation',
    desc: 'Launched e-commerce platform and fleet management dashboards.',
  },
  {
    year: '2024',
    title: '35+ Countries',
    desc: 'Now operating in 35+ countries with 2,500+ stations and 18,000 employees.',
  },
]

const values = [
  {
    title: 'Integrity',
    desc: 'We conduct business with honesty, transparency, and strong ethical standards.',
  },
  {
    title: 'Excellence',
    desc: 'We strive for excellence in every product, service, and customer interaction.',
  },
  {
    title: 'Innovation',
    desc: 'We continuously invest in research and technology to deliver better outcomes.',
  },
  {
    title: 'Sustainability',
    desc: 'We are committed to environmental responsibility and efficient operations.',
  },
]

const AboutPage = () => {
  return (
    <>
      <CategoryBanner
        title="About Us"
        subtitle="Our Story"
        description="Powering industries and communities across land and sea since 1998"
        image="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=1920&q=80"
        breadcrumbs={[{ name: 'About Us' }]}
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl shadow-black/[0.08]">
                <img
                  src="https://images.unsplash.com/photo-1504222490345-c075b6008014?w=900&q=80"
                  alt="BMSEC Operations"
                  className="w-full h-[500px] object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 surface-card bg-primary text-white p-8 hidden lg:block">
                <span className="text-4xl font-heading font-extrabold">25+</span>
                <p className="text-white/70 text-sm mt-1">Years of Excellence</p>
              </div>
            </div>

            <div>
              <div className="chip text-primary bg-primary/[0.05] mb-5">Who We Are</div>
              <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-dark leading-tight mb-8">
                A legacy of trust in energy and marine services.
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed mb-6">
                Founded in 1998, BMSEC Energy and Marine Services has grown from a single fuel
                distribution center in Houston to a global energy solutions provider operating
                across 35+ countries.
              </p>
              <p className="text-gray-500 leading-relaxed mb-10">
                We specialize in premium fuel supply, marine bunkering, lubricants, tires,
                batteries, and comprehensive fleet management solutions. Our commitment to quality,
                reliability, and customer service has earned the trust of millions of customers and
                thousands of businesses worldwide.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-10">
                {['Premium Products', 'Global Network', 'Expert Team', '24/7 Support'].map(
                  (item) => (
                    <div key={item} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <FaCheck className="text-primary text-[10px]" />
                      </div>
                      <span className="text-sm font-medium text-dark">{item}</span>
                    </div>
                  )
                )}
              </div>

              <Link to="/services" className="btn btn-primary">
                Our Services
                <FaArrowRight className="text-sm" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-light">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="surface-card p-10">
              <p className="chip text-primary bg-primary/[0.04] mb-4">Our Mission</p>
              <h3 className="text-2xl font-heading font-bold text-dark mb-6 leading-snug">
                To deliver world-class energy solutions that power progress.
              </h3>
              <p className="text-gray-500 leading-relaxed">
                We provide premium fuel, lubricants, and marine services with reliability and
                integrity. Every product we supply and every service we deliver is guided by our
                commitment to quality and customer satisfaction.
              </p>
            </div>

            <div className="surface-card p-10 bg-dark text-white border-dark/80">
              <p className="chip text-gold bg-white/5 border-white/15 mb-4">Our Vision</p>
              <h3 className="text-2xl font-heading font-bold text-white mb-6 leading-snug">
                To be the most trusted energy partner worldwide.
              </h3>
              <p className="text-white/65 leading-relaxed">
                We envision a future where BMSEC is the first choice for energy solutions across
                every industry and every ocean through innovation, sustainability, and operational
                excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle subtitle="Our Values" title="What Drives Us" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((val, i) => (
              <div key={val.title} className="surface-card p-8 text-center">
                <div className="w-16 h-16 rounded-2xl bg-primary/[0.06] flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-heading font-extrabold text-primary">
                    0{i + 1}
                  </span>
                </div>
                <h4 className="text-lg font-heading font-bold text-dark mb-3">{val.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-light">
        <div className="container-custom">
          <SectionTitle subtitle="Our Journey" title="Milestones That Define Us" />
          <div className="max-w-3xl mx-auto surface-panel p-8 sm:p-10">
            {milestones.map((item, i) => (
              <div key={item.year} className="flex gap-6 sm:gap-8 mb-10 last:mb-0">
                <div className="flex-shrink-0 w-20 text-right">
                  <span className="text-2xl font-heading font-extrabold text-primary">
                    {item.year}
                  </span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 rounded-full bg-primary flex-shrink-0" />
                  {i < milestones.length - 1 && <div className="w-[2px] flex-1 bg-gray-200 mt-1" />}
                </div>
                <div className="pb-7">
                  <h4 className="text-lg font-heading font-bold text-dark mb-2">{item.title}</h4>
                  <p className="text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle
            subtitle="Leadership"
            title="Meet Our Team"
            description="Experienced professionals driving innovation and excellence."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <div key={member.name} className="group surface-card p-5 text-center">
                <div className="rounded-2xl overflow-hidden mb-6 h-80">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <h4 className="text-lg font-heading font-bold text-dark">{member.name}</h4>
                <p className="text-primary text-sm font-medium mt-1 mb-3">{member.role}</p>
                <p className="text-gray-400 text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <BackToTop />
    </>
  )
}

export default AboutPage
