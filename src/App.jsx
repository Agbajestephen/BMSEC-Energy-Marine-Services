import { Routes, Route, useLocation } from 'react-router-dom'
// import ScrollToTop from './components/common/ScrollToTop'
import Navbar from './components/common/Navbar'
import Footer from './components/common/Footer'

import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ProductsPage from './pages/ProductsPage'
import ProductDetailPage from './pages/ProductDetailPage'
import OilLubricants from './pages/OilLubricants'
import TiresPage from './pages/TiresPage'
import BatteriesPage from './pages/BatteriesPage'
import PetrolFuelPage from './pages/PetrolFuelPage'
import ServicesPage from './pages/ServicesPage'
import StationLocator from './pages/StationLocator'
import ContactPage from './pages/ContactPage'
import CareersPage from './pages/CareersPage'
import NewsPage from './pages/NewsPage'
import CartPage from './pages/CartPage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import NotFoundPage from './pages/NotFoundPage'

function App() {
  const { pathname } = useLocation()
  const isAuthPage = pathname === '/login' || pathname === '/register'

  return (
    <>
      {/* <ScrollToTop /> */}
      {!isAuthPage && <Navbar />}
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:id" element={<ProductDetailPage />} />
          <Route path="/products/oil-lubricants" element={<OilLubricants />} />
          <Route path="/products/tires" element={<TiresPage />} />
          <Route path="/products/batteries" element={<BatteriesPage />} />
          <Route path="/products/petrol-fuel" element={<PetrolFuelPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/stations" element={<StationLocator />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      {!isAuthPage && <Footer />}
    </>
  )
}

export default App
