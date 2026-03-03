import HeroBanner from '../components/home/HeroBanner'
import CategoryShowcase from '../components/home/CategoryShowcase'
import WhyChooseUs from '../components/home/WhyChooseUs'
import StatsCounter from '../components/home/StatsCounter'
import FeaturedProducts from '../components/home/FeaturedProducts'
import Testimonials from '../components/home/Testimonials'
import PartnersLogos from '../components/home/PartnersLogos'
import CTABanner from '../components/home/CTABanner'
import BackToTop from '../components/common/BackToTop'

const HomePage = () => {
  return (
    <>
      <HeroBanner />
      <CategoryShowcase />
      <FeaturedProducts />
      <WhyChooseUs />
      <StatsCounter />
      <Testimonials />
      <CTABanner />
      <PartnersLogos />
      <BackToTop />
    </>
  )
}

export default HomePage