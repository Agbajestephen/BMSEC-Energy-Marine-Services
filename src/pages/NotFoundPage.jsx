import { Link } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa'

const NotFoundPage = () => {
  return (
    <section className="min-h-screen bg-white flex items-center justify-center">
      <div className="text-center container-custom">
        <h1 className="text-[10rem] font-heading font-black text-gray-100 leading-none">
          404
        </h1>
        <h2 className="text-3xl font-heading font-bold text-dark -mt-8 mb-4">
          Page Not Found
        </h2>
        <p className="text-gray-500 text-lg max-w-md mx-auto mb-10 leading-relaxed">
          The page you're looking for doesn't exist or has been moved. Let's get you back on track.
        </p>
        <Link to="/" className="btn btn-primary">
          <FaArrowLeft className="text-sm" />
          Back to Home
        </Link>
      </div>
    </section>
  )
}

export default NotFoundPage 