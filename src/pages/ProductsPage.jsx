import { useState, useMemo } from 'react'
import CategoryBanner from '../components/products/CategoryBanner'
import ProductFilter from '../components/products/ProductFilter'
import ProductGrid from '../components/products/ProductGrid'
import ProductSearch from '../components/products/ProductSearch'
import { products, getAllCategories, getAllBrands } from '../data/products'

const ProductsPage = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')
  const [selectedSubcategory, setSelectedSubcategory] = useState('')
  const [selectedBrand, setSelectedBrand] = useState('')
  const [priceRange, setPriceRange] = useState([0, 0])
  const [sortBy, setSortBy] = useState('featured')
  const [viewMode, setViewMode] = useState('grid')
  const [showMobileFilter, setShowMobileFilter] = useState(false)

  const categories = getAllCategories()
  const brands = getAllBrands()

  const subcategories = useMemo(() => {
    if (!selectedCategory) return [...new Set(products.map((p) => p.subcategory))]
    return [...new Set(products.filter((p) => p.category === selectedCategory).map((p) => p.subcategory))]
  }, [selectedCategory])

  const filteredProducts = useMemo(() => {
    let result = [...products]

    if (searchQuery) {
      const q = searchQuery.toLowerCase()
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.brand.toLowerCase().includes(q)
      )
    }

    if (selectedCategory) result = result.filter((p) => p.category === selectedCategory)
    if (selectedSubcategory) result = result.filter((p) => p.subcategory === selectedSubcategory)
    if (selectedBrand) result = result.filter((p) => p.brand === selectedBrand)

    if (priceRange[0] > 0) result = result.filter((p) => p.price >= priceRange[0])
    if (priceRange[1] > 0) result = result.filter((p) => p.price <= priceRange[1])

    switch (sortBy) {
      case 'price-low': result.sort((a, b) => a.price - b.price); break
      case 'price-high': result.sort((a, b) => b.price - a.price); break
      case 'rating': result.sort((a, b) => b.rating - a.rating); break
      case 'name-az': result.sort((a, b) => a.name.localeCompare(b.name)); break
      case 'newest': result.sort((a, b) => b.id - a.id); break
      default: result.sort((a, b) => (b.badge ? 1 : 0) - (a.badge ? 1 : 0))
    }

    return result
  }, [searchQuery, selectedCategory, selectedSubcategory, selectedBrand, priceRange, sortBy])

  const clearFilters = () => {
    setSearchQuery('')
    setSelectedCategory('')
    setSelectedSubcategory('')
    setSelectedBrand('')
    setPriceRange([0, 0])
    setSortBy('featured')
  }

  return (
    <>
      <CategoryBanner
        title="All Products"
        subtitle="Our Catalog"
        description="Browse our complete range of premium fuel, oil, tires, batteries, and energy products"
        image="https://images.unsplash.com/photo-1504222490345-c075b6008014?w=1920&q=80"
        breadcrumbs={[{ name: 'Products' }]}
      />

      <section className="section-padding bg-light">
        <div className="container-custom">
          <div className="flex gap-8">
            {/* Filter Sidebar */}
            <ProductFilter
              categories={categories}
              subcategories={subcategories}
              brands={brands}
              selectedCategory={selectedCategory}
              selectedSubcategory={selectedSubcategory}
              selectedBrand={selectedBrand}
              priceRange={priceRange}
              sortBy={sortBy}
              onCategoryChange={setSelectedCategory}
              onSubcategoryChange={setSelectedSubcategory}
              onBrandChange={setSelectedBrand}
              onPriceChange={setPriceRange}
              onSortChange={setSortBy}
              onClearFilters={clearFilters}
              showMobileFilter={showMobileFilter}
              onCloseMobileFilter={() => setShowMobileFilter(false)}
            />

            {/* Product Content */}
            <div className="flex-1 min-w-0">
              <ProductSearch
                searchQuery={searchQuery}
                onSearchChange={setSearchQuery}
                totalProducts={filteredProducts.length}
                viewMode={viewMode}
                onViewModeChange={setViewMode}
                onOpenMobileFilter={() => setShowMobileFilter(true)}
              />
              <ProductGrid products={filteredProducts} />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ProductsPage