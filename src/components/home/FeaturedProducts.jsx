import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaShoppingCart, FaStar, FaArrowRight, FaHeart, FaEye, FaTag } from 'react-icons/fa'
import { useCart } from '../../context/CartContext'
import { formatPrice } from '../../utils/formatPrice'
import SectionTitle from '../common/SectionTitle'

const featuredProducts = [
  {
    id: 1,
    name: 'BMSEC Premium 5W-30 Synthetic Engine Oil',
    category: 'Oil & Lubricants',
    price: 49.99,
    oldPrice: 64.99,
    rating: 4.8,
    reviews: 234,
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=600&q=80',
    badge: { text: 'Best Seller', type: 'primary' },
  },
  {
    id: 7,
    name: 'All-Terrain SUV Tire 265/70R17',
    category: 'Tires',
    price: 189.99,
    oldPrice: 229.99,
    rating: 4.9,
    reviews: 187,
    image: 'https://images.unsplash.com/photo-1578844251758-2f71da64c96f?w=600&q=80',
    badge: { text: 'Hot Deal', type: 'sale' },
  },
  {
    id: 12,
    name: 'Heavy-Duty Marine Battery 12V 100Ah',
    category: 'Batteries',
    price: 129.99,
    oldPrice: 159.99,
    rating: 4.7,
    reviews: 156,
    image: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=600&q=80',
    badge: { text: 'New', type: 'new' },
  },
  {
    id: 17,
    name: 'BMSEC Premium 95 Octane Fuel',
    category: 'Petrol & Fuel',
    price: 3.99,
    oldPrice: null,
    rating: 4.9,
    reviews: 512,
    image: 'https://images.unsplash.com/photo-1545249390-6bdfa286032f?w=600&q=80',
    badge: { text: 'Top Rated', type: 'gold' },
  },
  {
    id: 6,
    name: 'BMSEC 10W-40 Semi-Synthetic Oil',
    category: 'Oil & Lubricants',
    price: 36.99,
    oldPrice: 45.99,
    rating: 4.7,
    reviews: 189,
    image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=600&q=80',
    badge: { text: 'Sale', type: 'sale' },
  },
  {
    id: 8,
    name: 'Performance Radial Tire 225/45R18',
    category: 'Tires',
    price: 159.99,
    oldPrice: 199.99,
    rating: 4.8,
    reviews: 203,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&q=80',
    badge: { text: 'Popular', type: 'primary' },
  },
]

const badgeStyles = {
  primary: 'bg-primary text-white',
  sale: 'bg-gradient-to-r from-red-500 to-red-600 text-white',
  new: 'bg-gradient-to-r from-emerald-500 to-emerald-600 text-white',
  gold: 'bg-gradient-to-r from-gold-dark to-gold-light text-dark',
}

const FeaturedProducts = () => {
  const { addToCart } = useCart()
  const [wishlist, setWishlist] = useState(new Set())
  const [addedId, setAddedId] = useState(null)

  const toggleWishlist = (id) => {
    setWishlist((prev) => {
      const next = new Set(prev)
      next.has(id) ? next.delete(id) : next.add(id)
      return next
    })
  }

  const handleAddToCart = (product) => {
    addToCart(product)
    setAddedId(product.id)
    setTimeout(() => setAddedId(null), 1500)
  }

  const discount = (original, current) => {
    if (!original) return null
    return Math.round(((original - current) / original) * 100)
  }

  return (
    <section className="section-padding bg-light">
      <div className="container-custom">
        <SectionTitle
          subtitle="Featured Products"
          title="Our Best Sellers"
          description="Handpicked selection of our most popular and highly-rated products"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {featuredProducts.map((product) => {
            const disc = discount(product.oldPrice, product.price)
            const isAdded = addedId === product.id
            const inWishlist = wishlist.has(product.id)

            return (
              <div
                key={product.id}
                className="product-card group"
              >
                {/* Image */}
                <div className="relative overflow-hidden h-64">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Top badges */}
                  <div className="absolute top-4 left-4 flex flex-col gap-2 z-10">
                    {product.badge && (
                      <span className={`text-[10px] font-bold uppercase tracking-[0.08em] px-2.5 py-1 rounded-full shadow-md ${badgeStyles[product.badge.type]}`}>
                        {product.badge.text}
                      </span>
                    )}
                    {disc && (
                      <span className="text-[10px] font-bold text-white bg-dark/80 backdrop-blur-sm px-2.5 py-1 rounded-full flex items-center gap-1">
                        <FaTag className="text-[8px]" />
                        -{disc}%
                      </span>
                    )}
                  </div>

                  {/* Action buttons overlay */}
                  <div className="absolute top-4 right-4 flex flex-col gap-2 z-10 translate-x-10 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
                    <button
                      onClick={() => toggleWishlist(product.id)}
                      className={`w-9 h-9 rounded-full flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-110 ${inWishlist ? 'bg-red-500 text-white' : 'bg-white text-gray-500 hover:text-red-500'
                        }`}
                      aria-label="Add to wishlist"
                    >
                      <FaHeart className="text-xs" />
                    </button>
                    <Link
                      to={`/products/${product.id}`}
                      className="w-9 h-9 rounded-full bg-white text-gray-500 hover:text-primary flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-110"
                      aria-label="Quick view"
                    >
                      <FaEye className="text-xs" />
                    </Link>
                  </div>

                  {/* Image gradient */}
                  <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-white to-transparent" />
                </div>

                {/* Content */}
                <div className="p-7">
                  <p className="text-[11px] font-bold text-primary uppercase tracking-[0.14em] mb-2">
                    {product.category}
                  </p>

                  <Link to={`/products/${product.id}`}>
                    <h3 className="text-[1rem] font-heading font-bold text-dark mb-3 line-clamp-2 group-hover:text-primary transition-colors leading-snug">
                      {product.name}
                    </h3>
                  </Link>

                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-5">
                    <div className="flex items-center gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <FaStar
                          key={i}
                          className={`text-xs ${i < Math.floor(product.rating) ? 'text-amber-400' : 'text-gray-200'
                            }`}
                        />
                      ))}
                    </div>
                    <span className="text-[13px] font-semibold text-dark">{product.rating}</span>
                    <span className="text-[12px] text-gray-400">({product.reviews})</span>
                  </div>

                  {/* Price + Cart */}
                  <div className="flex items-center justify-between pt-5 border-t border-gray-100">
                    <div className="flex items-end gap-2">
                      <span className="text-2xl font-heading font-black text-dark">
                        {formatPrice(product.price)}
                      </span>
                      {product.oldPrice && (
                        <span className="text-sm text-gray-400 line-through mb-0.5">
                          {formatPrice(product.oldPrice)}
                        </span>
                      )}
                    </div>
                    <button
                      onClick={() => handleAddToCart(product)}
                      className={`h-11 rounded-full font-semibold text-xs transition-all duration-300 flex items-center gap-2 px-4 ${isAdded
                          ? 'bg-emerald-500 text-white scale-95'
                          : 'bg-primary/[0.07] text-primary hover:bg-primary hover:text-white'
                        }`}
                    >
                      <FaShoppingCart className="text-sm" />
                      {isAdded ? 'Added!' : 'Add'}
                    </button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* View All */}
        <div className="text-center mt-16">
          <Link to="/products" className="btn btn-outline-dark btn-lg">
            View All Products
            <FaArrowRight className="text-sm" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default FeaturedProducts