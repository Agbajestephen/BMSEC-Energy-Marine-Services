import { FaSearch, FaTh, FaList } from 'react-icons/fa'
import { HiAdjustments } from 'react-icons/hi'

const ProductSearch = ({
  searchQuery,
  onSearchChange,
  totalProducts,
  viewMode,
  onViewModeChange,
  onOpenMobileFilter,
}) => {
  return (
    <div className="surface-card p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
      <div className="relative w-full sm:w-80">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search products..."
          className="input-modern px-5 py-3 pl-11 text-sm"
        />
        <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
      </div>

      <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-end">
        <p className="text-sm text-gray-500">
          Showing <span className="font-semibold text-dark">{totalProducts}</span> products
        </p>

        <button
          onClick={onOpenMobileFilter}
          className="lg:hidden flex items-center gap-2 px-4 py-2.5 bg-primary text-white rounded-xl text-sm font-semibold shadow-md shadow-primary/20"
        >
          <HiAdjustments className="text-base" />
          Filters
        </button>

        <div className="hidden sm:flex items-center gap-1 bg-light rounded-lg p-1 border border-gray-200">
          <button
            onClick={() => onViewModeChange('grid')}
            className={`p-2 rounded-lg transition-all ${
              viewMode === 'grid'
                ? 'bg-white shadow-sm text-primary'
                : 'text-gray-400 hover:text-gray-600'
            }`}
          >
            <FaTh className="text-sm" />
          </button>
          <button
            onClick={() => onViewModeChange('list')}
            className={`p-2 rounded-lg transition-all ${
              viewMode === 'list'
                ? 'bg-white shadow-sm text-primary'
                : 'text-gray-400 hover:text-gray-600'
            }`}
          >
            <FaList className="text-sm" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductSearch
