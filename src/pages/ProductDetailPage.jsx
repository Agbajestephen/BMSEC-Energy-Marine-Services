import { useParams } from 'react-router-dom'
const ProductDetailPage = () => {
  const { id } = useParams()
  return (
    <div className="min-h-screen bg-light flex items-center justify-center pt-28">
      <div className="text-center">
        <h1 className="text-5xl font-heading font-bold text-dark">Product #{id}</h1>
        <p className="text-gray-500 mt-3">Coming in Phase 3</p>
      </div>
    </div>
  )
}
export default ProductDetailPage