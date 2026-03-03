import { FaSearch } from 'react-icons/fa'
import ProductCard from './ProductCard'

const ProductGrid = ({ products, loading = false }) => {
  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="surface-card overflow-hidden animate-pulse">
            <div className="h-72 bg-gray-100" />
            <div className="p-8 space-y-4">
              <div className="h-3 bg-gray-100 rounded w-1/3" />
              <div className="h-5 bg-gray-100 rounded w-full" />
              <div className="h-5 bg-gray-100 rounded w-2/3" />
              <div className="h-4 bg-gray-100 rounded w-1/4" />
              <div className="h-12 bg-gray-100 rounded-xl w-full mt-4" />
            </div>
          </div>
        ))}
      </div>
    )
  }

  if (products.length === 0) {
    return (
      <div className="surface-card text-center py-20 px-6">
        <span className="w-16 h-16 rounded-full bg-primary/[0.08] text-primary mx-auto mb-6 flex items-center justify-center">
          <FaSearch className="text-xl" />
        </span>
        <h3 className="text-xl font-heading font-bold text-dark mb-3">No products found</h3>
        <p className="text-gray-400">Try adjusting your filters or search criteria.</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}

export default ProductGrid
