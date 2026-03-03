import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'
import CategoryBanner from '../components/products/CategoryBanner'
import SectionTitle from '../components/common/SectionTitle'
import BackToTop from '../components/common/BackToTop'
import { newsArticles } from '../data/news'

const NewsPage = () => {
  return (
    <>
      <CategoryBanner
        title="News & Updates"
        subtitle="Stay Informed"
        description="The latest from BMSEC Energy and Marine Services"
        image="https://images.unsplash.com/photo-1504222490345-c075b6008014?w=1920&q=80"
        breadcrumbs={[{ name: 'News' }]}
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {newsArticles.map((article) => (
              <article key={article.id} className="group">
                {/* Image */}
                <div className="rounded-2xl overflow-hidden mb-6 h-64">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Meta */}
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                    {article.category}
                  </span>
                  <span className="text-xs text-gray-400">{article.date}</span>
                  <span className="text-xs text-gray-400">{article.readTime}</span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-heading font-bold text-dark mb-3 group-hover:text-primary transition-colors leading-snug">
                  {article.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-500 text-sm leading-relaxed mb-5 line-clamp-3">
                  {article.excerpt}
                </p>

                {/* Read More */}
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary group-hover:gap-3 transition-all">
                  Read More
                  <FaArrowRight className="text-xs" />
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <BackToTop />
    </>
  )
}

export default NewsPage