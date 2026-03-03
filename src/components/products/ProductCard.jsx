import { Link } from 'react-router-dom'
import { FaShoppingCart, FaStar } from 'react-icons/fa'
import { useCart } from '../../context/CartContext'
import { formatPrice } from '../../utils/formatPrice'

const ProductCard = ({ product }) => {
  const { addToCart } = useCart()

  return (
    <div className="group surface-card overflow-hidden hover-lift transition-all duration-500">
      <div className="relative overflow-hidden h-72">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {product.badge && (
          <span
            className={`absolute top-4 left-4 px-4 py-1.5 rounded-full text-xs font-semibold text-white ${product.badgeColor}`}
          >
            {product.badge}
          </span>
        )}
      </div>

      <div className="p-8">
        <p className="text-xs font-semibold text-primary uppercase tracking-[0.15em] mb-2">
          {product.category}
        </p>

        <Link to={`/products/${product.id}`}>
          <h3 className="text-lg font-heading font-bold text-dark mb-3 line-clamp-2 group-hover:text-primary transition-colors leading-snug">
            {product.name}
          </h3>
        </Link>

        <div className="flex items-center gap-2 mb-5">
          <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, i) => (
              <FaStar
                key={i}
                className={`text-sm ${
                  i < Math.floor(product.rating) ? 'text-amber-400' : 'text-gray-200'
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-gray-400">({product.reviews})</span>
        </div>

        <div className="flex items-center justify-between pt-5 border-t border-gray-100">
          <div className="flex items-end gap-2">
            <span className="text-2xl font-heading font-bold text-dark">
              {formatPrice(product.price)}
            </span>
            {product.oldPrice && (
              <span className="text-sm text-gray-400 line-through mb-0.5">
                {formatPrice(product.oldPrice)}
              </span>
            )}
          </div>
          <button
            onClick={() => addToCart(product)}
            className="w-12 h-12 bg-primary/[0.08] rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300 shadow-sm shadow-primary/10 hover:shadow-lg hover:shadow-primary/20"
          >
            <FaShoppingCart className="text-sm" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
