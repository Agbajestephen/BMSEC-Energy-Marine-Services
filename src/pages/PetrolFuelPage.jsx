import { useState, useMemo } from 'react'
import CategoryBanner from '../components/products/CategoryBanner'
import ProductFilter from '../components/products/ProductFilter'
import ProductGrid from '../components/products/ProductGrid'
import ProductSearch from '../components/products/ProductSearch'
import { getProductsByCategory, getSubcategories } from '../data/products'

const PetrolFuelPage = () => {
  const allProducts = getProductsByCategory('Petrol & Fuel')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedSubcategory, setSelectedSubcategory] = useState('')
  const [selectedBrand, setSelectedBrand] = useState('')
  const [priceRange, setPriceRange] = useState([0, 0])
  const [sortBy, setSortBy] = useState('featured')
  const [viewMode, setViewMode] = useState('grid')
  const [showMobileFilter, setShowMobileFilter] = useState(false)

  const subcategories = getSubcategories('Petrol & Fuel')
  const brands = [...new Set(allProducts.map((p) => p.brand))]

  const filteredProducts = useMemo(() => {
    let result = [...allProducts]
    if (searchQuery) {
      const q = searchQuery.toLowerCase()
      result = result.filter((p) => p.name.toLowerCase().includes(q) || p.brand.toLowerCase().includes(q))
    }
    if (selectedSubcategory) result = result.filter((p) => p.subcategory === selectedSubcategory)
    if (selectedBrand) result = result.filter((p) => p.brand === selectedBrand)
    if (priceRange[0] > 0) result = result.filter((p) => p.price >= priceRange[0])
    if (priceRange[1] > 0) result = result.filter((p) => p.price <= priceRange[1])
    switch (sortBy) {
      case 'price-low': result.sort((a, b) => a.price - b.price); break
      case 'price-high': result.sort((a, b) => b.price - a.price); break
      case 'rating': result.sort((a, b) => b.rating - a.rating); break
      case 'name-az': result.sort((a, b) => a.name.localeCompare(b.name)); break
      default: break
    }
    return result
  }, [searchQuery, selectedSubcategory, selectedBrand, priceRange, sortBy, allProducts])

  const clearFilters = () => {
    setSearchQuery(''); setSelectedSubcategory(''); setSelectedBrand(''); setPriceRange([0, 0]); setSortBy('featured')
  }

  return (
    <>
      <CategoryBanner
        title="Petrol & Fuel"
        subtitle="High Performance Fuel"
        description="Premium fuel grades, diesel, marine gas oil, racing fuel & fuel additives"
        image="https://images.unsplash.com/photo-1545249390-6bdfa286032f?w=1920&q=80"
        breadcrumbs={[{ name: 'Products', link: '/products' }, { name: 'Petrol & Fuel' }]}
      />
      <section className="section-padding bg-light">
        <div className="container-custom">
          <div className="flex gap-8">
            <ProductFilter categories={[]} subcategories={subcategories} brands={brands} selectedCategory="" selectedSubcategory={selectedSubcategory} selectedBrand={selectedBrand} priceRange={priceRange} sortBy={sortBy} onCategoryChange={() => {}} onSubcategoryChange={setSelectedSubcategory} onBrandChange={setSelectedBrand} onPriceChange={setPriceRange} onSortChange={setSortBy} onClearFilters={clearFilters} showMobileFilter={showMobileFilter} onCloseMobileFilter={() => setShowMobileFilter(false)} />
            <div className="flex-1 min-w-0">
              <ProductSearch searchQuery={searchQuery} onSearchChange={setSearchQuery} totalProducts={filteredProducts.length} viewMode={viewMode} onViewModeChange={setViewMode} onOpenMobileFilter={() => setShowMobileFilter(true)} />
              <ProductGrid products={filteredProducts} />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default PetrolFuelPage