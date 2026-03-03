import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import {
  FaShoppingCart,
  FaStar,
  FaHeart,
  FaShareAlt,
  FaMinus,
  FaPlus,
  FaTruck,
  FaShieldAlt,
  FaUndo,
  FaCheck,
} from 'react-icons/fa'
import { useCart } from '../context/CartContext'
import { getProductById, getProductsByCategory } from '../data/products'
import { formatPrice, getDiscount } from '../utils/formatPrice'
import ProductCard from '../components/products/ProductCard'
import CategoryBanner from '../components/products/CategoryBanner'

const ProductDetailPage = () => {
  const { id } = useParams()
  const product = getProductById(id)
  const { addToCart } = useCart()
  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [activeTab, setActiveTab] = useState('description')

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-28">
        <div className="text-center">
          <h1 className="text-6xl font-heading font-black text-gray-200">404</h1>
          <p className="text-xl text-gray-500 mt-4">Product not found</p>
          <Link to="/products" className="btn btn-primary mt-6">
            Browse Products
          </Link>
        </div>
      </div>
    )
  }

  const related = getProductsByCategory(product.category)
    .filter((p) => p.id !== product.id)
    .slice(0, 4)

  const discount = getDiscount(product.oldPrice, product.price)

  const handleAddToCart = () => {
    addToCart(product, quantity)
  }

  return (
    <>
      <CategoryBanner
        title={product.category}
        subtitle={product.subcategory}
        image={product.image}
        breadcrumbs={[
          { name: 'Products', link: '/products' },
          { name: product.category, link: '/products' },
          { name: product.name },
        ]}
      />

      {/* Product Detail */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* ── LEFT: Images ── */}
            <div>
              {/* Main Image */}
              <div className="relative rounded-2xl overflow-hidden bg-gray-50 h-[450px] mb-4">
                <img
                  src={product.images[selectedImage]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                {product.badge && (
                  <span className={`absolute top-4 left-4 px-4 py-1.5 rounded-full text-sm font-bold text-white ${product.badgeColor}`}>
                    {product.badge}
                  </span>
                )}
                {discount > 0 && (
                  <span className="absolute top-4 right-4 px-3 py-1.5 rounded-full text-sm font-bold bg-secondary text-white">
                    -{discount}%
                  </span>
                )}
              </div>

              {/* Thumbnails */}
              {product.images.length > 1 && (
                <div className="flex gap-3">
                  {product.images.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setSelectedImage(i)}
                      className={`w-20 h-20 rounded-xl overflow-hidden border-2 transition-all ${
                        selectedImage === i
                          ? 'border-primary ring-2 ring-primary/20'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <img src={img} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* ── RIGHT: Info ── */}
            <div>
              {/* Category */}
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                {product.category} / {product.subcategory}
              </span>

              {/* Title */}
              <h1 className="text-3xl md:text-4xl font-heading font-bold text-dark mt-2 mb-4">
                {product.name}
              </h1>

              {/* Rating */}
              <div className="flex items-center gap-3 mb-6">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className={`${
                        i < Math.floor(product.rating) ? 'text-amber-400' : 'text-gray-200'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-500">
                  {product.rating} ({product.reviews} reviews)
                </span>
                <span className="text-sm text-gray-400">|</span>
                <span className="text-sm text-gray-500">SKU: {product.sku}</span>
              </div>

              {/* Price */}
              <div className="flex items-end gap-3 mb-6 pb-6 border-b border-gray-100">
                <span className="text-4xl font-heading font-black text-dark">
                  {formatPrice(product.price)}
                </span>
                {product.oldPrice && (
                  <>
                    <span className="text-xl text-gray-400 line-through mb-1">
                      {formatPrice(product.oldPrice)}
                    </span>
                    <span className="px-3 py-1 bg-secondary/10 text-secondary font-bold text-sm rounded-full mb-1">
                      Save {formatPrice(product.oldPrice - product.price)}
                    </span>
                  </>
                )}
              </div>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed mb-6">
                {product.description}
              </p>

              {/* Key Features */}
              <div className="mb-6">
                <h4 className="font-heading font-semibold text-dark mb-3">Key Features:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {product.features.slice(0, 6).map((feat) => (
                    <div key={feat} className="flex items-center gap-2 text-sm text-gray-600">
                      <FaCheck className="text-green-500 flex-shrink-0 text-xs" />
                      {feat}
                    </div>
                  ))}
                </div>
              </div>

              {/* Quantity + Add to Cart */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-6">
                {/* Quantity */}
                <div className="flex items-center border border-gray-200 rounded-xl overflow-hidden">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-12 h-12 flex items-center justify-center text-gray-500 hover:bg-gray-50 transition-colors"
                  >
                    <FaMinus className="text-xs" />
                  </button>
                  <span className="w-16 h-12 flex items-center justify-center font-semibold text-dark border-x border-gray-200">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-12 h-12 flex items-center justify-center text-gray-500 hover:bg-gray-50 transition-colors"
                  >
                    <FaPlus className="text-xs" />
                  </button>
                </div>

                {/* Add to Cart */}
                <button onClick={handleAddToCart} className="btn btn-primary flex-1">
                  <FaShoppingCart />
                  Add to Cart
                </button>

                {/* Wishlist */}
                <button className="w-12 h-12 border border-gray-200 rounded-xl flex items-center justify-center text-gray-400 hover:text-red-500 hover:border-red-200 transition-all">
                  <FaHeart />
                </button>

                {/* Share */}
                <button className="w-12 h-12 border border-gray-200 rounded-xl flex items-center justify-center text-gray-400 hover:text-primary hover:border-primary/30 transition-all">
                  <FaShareAlt />
                </button>
              </div>

              {/* Stock Status */}
              <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-8 ${
                product.stock > 50 ? 'bg-green-50 text-green-600' : 'bg-orange-50 text-orange-600'
              }`}>
                <span className={`w-2 h-2 rounded-full ${product.stock > 50 ? 'bg-green-500' : 'bg-orange-500'} animate-pulse`} />
                {product.stock > 50 ? 'In Stock' : `Only ${product.stock} left`}
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <FaTruck className="text-primary text-sm" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-dark">Free Shipping</p>
                    <p className="text-[10px] text-gray-400">Orders over $100</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center">
                    <FaShieldAlt className="text-green-600 text-sm" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-dark">Warranty</p>
                    <p className="text-[10px] text-gray-400">Manufacturer guarantee</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center">
                    <FaUndo className="text-amber-600 text-sm" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-dark">Easy Returns</p>
                    <p className="text-[10px] text-gray-400">30-day return policy</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── TABS: Description / Specs / Reviews ── */}
          <div className="mt-20">
            <div className="flex border-b border-gray-200 gap-8 mb-8">
              {['description', 'specifications', 'reviews'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`pb-4 text-sm font-semibold capitalize transition-all border-b-2 ${
                    activeTab === tab
                      ? 'text-primary border-primary'
                      : 'text-gray-400 border-transparent hover:text-gray-600'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {activeTab === 'description' && (
              <div className="prose max-w-none">
                <p className="text-gray-600 leading-relaxed mb-6">{product.description}</p>
                <h4 className="font-heading font-bold text-dark text-lg mb-4">Features</h4>
                <ul className="space-y-2">
                  {product.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-gray-600">
                      <FaCheck className="text-green-500 flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {activeTab === 'specifications' && (
              <div className="max-w-2xl">
                <table className="w-full">
                  <tbody>
                    {Object.entries(product.specifications).map(([key, val], i) => (
                      <tr key={key} className={i % 2 === 0 ? 'bg-gray-50' : ''}>
                        <td className="px-6 py-3 text-sm font-semibold text-dark w-1/3">{key}</td>
                        <td className="px-6 py-3 text-sm text-gray-600">{val}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {activeTab === 'reviews' && (
              <div className="text-center py-12">
                <p className="text-gray-500">
                  {product.reviews} reviews with an average rating of{' '}
                  <span className="font-bold text-dark">{product.rating}</span>/5
                </p>
                <p className="text-sm text-gray-400 mt-2">
                  Full review system coming with backend integration
                </p>
              </div>
            )}
          </div>

          {/* ── RELATED PRODUCTS ── */}
          {related.length > 0 && (
            <div className="mt-20">
              <h2 className="text-2xl font-heading font-bold text-dark mb-8">
                Related Products
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {related.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  )
}

export default ProductDetailPage