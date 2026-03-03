import { FaTimes, FaStar } from 'react-icons/fa'

const ProductFilter = ({
  categories = [],
  subcategories = [],
  brands = [],
  selectedCategory,
  selectedSubcategory,
  selectedBrand,
  priceRange,
  sortBy,
  onCategoryChange,
  onSubcategoryChange,
  onBrandChange,
  onPriceChange,
  onSortChange,
  onClearFilters,
  showMobileFilter,
  onCloseMobileFilter,
}) => {
  const hasFilters = selectedCategory || selectedSubcategory || selectedBrand

  const filterContent = (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h3 className="font-heading font-bold text-lg text-dark">Filters</h3>
        {hasFilters && (
          <button
            onClick={onClearFilters}
            className="text-xs font-semibold text-secondary hover:underline flex items-center gap-1"
          >
            <FaTimes className="text-[10px]" />
            Clear All
          </button>
        )}
      </div>

      <div>
        <h4 className="font-heading font-semibold text-sm text-dark mb-3">Sort By</h4>
        <select
          value={sortBy}
          onChange={(e) => onSortChange(e.target.value)}
          className="input-modern px-4 py-2.5 text-sm"
        >
          <option value="featured">Featured</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
          <option value="rating">Highest Rated</option>
          <option value="newest">Newest First</option>
          <option value="name-az">Name: A-Z</option>
        </select>
      </div>

      {categories.length > 0 && (
        <div>
          <h4 className="font-heading font-semibold text-sm text-dark mb-3">Category</h4>
          <div className="space-y-2">
            <button
              onClick={() => onCategoryChange('')}
              className={`block w-full text-left px-3 py-2 rounded-lg text-sm transition-all ${
                !selectedCategory
                  ? 'bg-primary/10 text-primary font-semibold'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              All Categories
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => onCategoryChange(cat)}
                className={`block w-full text-left px-3 py-2 rounded-lg text-sm transition-all ${
                  selectedCategory === cat
                    ? 'bg-primary/10 text-primary font-semibold'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      )}

      {subcategories.length > 0 && (
        <div>
          <h4 className="font-heading font-semibold text-sm text-dark mb-3">Type</h4>
          <div className="space-y-2">
            <button
              onClick={() => onSubcategoryChange('')}
              className={`block w-full text-left px-3 py-2 rounded-lg text-sm transition-all ${
                !selectedSubcategory
                  ? 'bg-primary/10 text-primary font-semibold'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              All Types
            </button>
            {subcategories.map((sub) => (
              <button
                key={sub}
                onClick={() => onSubcategoryChange(sub)}
                className={`block w-full text-left px-3 py-2 rounded-lg text-sm transition-all ${
                  selectedSubcategory === sub
                    ? 'bg-primary/10 text-primary font-semibold'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                {sub}
              </button>
            ))}
          </div>
        </div>
      )}

      {brands.length > 0 && (
        <div>
          <h4 className="font-heading font-semibold text-sm text-dark mb-3">Brand</h4>
          <div className="space-y-2">
            <button
              onClick={() => onBrandChange('')}
              className={`block w-full text-left px-3 py-2 rounded-lg text-sm transition-all ${
                !selectedBrand
                  ? 'bg-primary/10 text-primary font-semibold'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              All Brands
            </button>
            {brands.map((brand) => (
              <button
                key={brand}
                onClick={() => onBrandChange(brand)}
                className={`block w-full text-left px-3 py-2 rounded-lg text-sm transition-all ${
                  selectedBrand === brand
                    ? 'bg-primary/10 text-primary font-semibold'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                {brand}
              </button>
            ))}
          </div>
        </div>
      )}

      <div>
        <h4 className="font-heading font-semibold text-sm text-dark mb-3">Price Range</h4>
        <div className="flex items-center gap-3">
          <input
            type="number"
            placeholder="Min"
            value={priceRange[0] || ''}
            onChange={(e) => onPriceChange([Number(e.target.value), priceRange[1]])}
            className="input-modern px-3 py-2 text-sm"
          />
          <span className="text-gray-400">-</span>
          <input
            type="number"
            placeholder="Max"
            value={priceRange[1] || ''}
            onChange={(e) => onPriceChange([priceRange[0], Number(e.target.value)])}
            className="input-modern px-3 py-2 text-sm"
          />
        </div>
      </div>

      <div>
        <h4 className="font-heading font-semibold text-sm text-dark mb-3">Minimum Rating</h4>
        <div className="space-y-2">
          {[4, 3, 2].map((r) => (
            <button
              key={r}
              className="flex items-center gap-2 text-sm text-gray-600 hover:text-primary transition-colors w-full px-3 py-1.5 rounded-lg hover:bg-gray-50"
            >
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    className={`text-xs ${i < r ? 'text-amber-400' : 'text-gray-200'}`}
                  />
                ))}
              </div>
              <span>& Up</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  )

  return (
    <>
      <div className="hidden lg:block w-72 flex-shrink-0">
        <div className="surface-card p-6 sticky top-32">{filterContent}</div>
      </div>

      <div
        className={`lg:hidden fixed inset-0 bg-black/60 z-50 transition-opacity duration-300 ${
          showMobileFilter ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
        onClick={onCloseMobileFilter}
      />
      <div
        className={`lg:hidden fixed top-0 left-0 w-80 h-full bg-white z-[55] shadow-2xl transform transition-transform duration-500 overflow-y-auto ${
          showMobileFilter ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-6 bg-gradient-to-b from-light to-white min-h-full">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-heading font-bold text-lg">Filters</h3>
            <button
              onClick={onCloseMobileFilter}
              className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center"
              aria-label="Close filters"
            >
              <FaTimes className="text-gray-600" />
            </button>
          </div>
          {filterContent}
        </div>
      </div>
    </>
  )
}

export default ProductFilter
