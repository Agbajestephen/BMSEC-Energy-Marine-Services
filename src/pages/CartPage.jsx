import { Link } from 'react-router-dom'
import { FaTrash, FaMinus, FaPlus, FaArrowLeft, FaShoppingCart } from 'react-icons/fa'
import { useCart } from '../context/CartContext'
import { formatPrice } from '../utils/formatPrice'
import CategoryBanner from '../components/products/CategoryBanner'

const CartPage = () => {
  const { cartItems, removeFromCart, updateQuantity, clearCart, cartTotal } = useCart()

  if (cartItems.length === 0) {
    return (
      <>
        <CategoryBanner
          title="Shopping Cart"
          subtitle="Your Cart"
          image="https://images.unsplash.com/photo-1504222490345-c075b6008014?w=1920&q=80"
          breadcrumbs={[{ name: 'Cart' }]}
        />
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="max-w-lg mx-auto surface-card text-center py-14 px-8">
              <span className="w-20 h-20 rounded-full bg-primary/[0.08] text-primary mx-auto mb-8 flex items-center justify-center">
                <FaShoppingCart className="text-3xl" />
              </span>
              <h2 className="text-2xl font-heading font-bold text-dark mb-4">Your cart is empty</h2>
              <p className="text-gray-500 mb-10 leading-relaxed">
                You have not added any products yet. Browse our catalog to find what you need.
              </p>
              <Link to="/products" className="btn btn-primary">
                <FaArrowLeft className="text-sm" />
                Browse Products
              </Link>
            </div>
          </div>
        </section>
      </>
    )
  }

  return (
    <>
      <CategoryBanner
        title="Shopping Cart"
        subtitle="Your Cart"
        image="https://images.unsplash.com/photo-1504222490345-c075b6008014?w=1920&q=80"
        breadcrumbs={[{ name: 'Cart' }]}
      />

      <section className="section-padding bg-light">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-heading font-bold text-dark">
                  {cartItems.length} {cartItems.length === 1 ? 'Item' : 'Items'}
                </h2>
                <button
                  onClick={clearCart}
                  className="text-sm text-gray-400 hover:text-secondary transition-colors"
                >
                  Clear Cart
                </button>
              </div>

              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="surface-card p-6 flex flex-col sm:flex-row items-start sm:items-center gap-6"
                  >
                    <Link to={`/products/${item.id}`} className="flex-shrink-0">
                      <div className="w-28 h-28 rounded-xl overflow-hidden bg-gray-50">
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                      </div>
                    </Link>

                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-1">
                        {item.category}
                      </p>
                      <Link to={`/products/${item.id}`}>
                        <h3 className="font-heading font-bold text-dark text-base hover:text-primary transition-colors line-clamp-2">
                          {item.name}
                        </h3>
                      </Link>
                      <p className="text-lg font-heading font-bold text-dark mt-2">
                        {formatPrice(item.price)}
                      </p>
                    </div>

                    <div className="flex items-center border border-gray-200 rounded-xl overflow-hidden bg-white">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="w-10 h-10 flex items-center justify-center text-gray-400 hover:bg-gray-50 transition-colors"
                      >
                        <FaMinus className="text-xs" />
                      </button>
                      <span className="w-12 h-10 flex items-center justify-center font-semibold text-dark text-sm border-x border-gray-200">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-10 h-10 flex items-center justify-center text-gray-400 hover:bg-gray-50 transition-colors"
                      >
                        <FaPlus className="text-xs" />
                      </button>
                    </div>

                    <div className="text-right min-w-[110px]">
                      <p className="text-lg font-heading font-bold text-dark">
                        {formatPrice(item.price * item.quantity)}
                      </p>
                    </div>

                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-red-50 hover:text-secondary transition-all"
                      aria-label={`Remove ${item.name}`}
                    >
                      <FaTrash className="text-sm" />
                    </button>
                  </div>
                ))}
              </div>

              <Link
                to="/products"
                className="inline-flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-primary mt-8 transition-colors"
              >
                <FaArrowLeft className="text-xs" />
                Continue Shopping
              </Link>
            </div>

            <div>
              <div className="surface-card p-8 sticky top-32">
                <h3 className="text-lg font-heading font-bold text-dark mb-8">Order Summary</h3>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Subtotal</span>
                    <span className="font-semibold text-dark">{formatPrice(cartTotal)}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Shipping</span>
                    <span className="font-semibold text-dark">
                      {cartTotal >= 100 ? 'Free' : formatPrice(12.99)}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Tax (estimated)</span>
                    <span className="font-semibold text-dark">{formatPrice(cartTotal * 0.08)}</span>
                  </div>
                </div>

                <div className="border-t border-gray-100 pt-6 mb-8">
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-heading font-bold text-dark">Total</span>
                    <span className="text-2xl font-heading font-extrabold text-dark">
                      {formatPrice(cartTotal + (cartTotal >= 100 ? 0 : 12.99) + cartTotal * 0.08)}
                    </span>
                  </div>
                  {cartTotal < 100 && (
                    <p className="text-xs text-gray-400 mt-2">
                      Add {formatPrice(100 - cartTotal)} more for free shipping
                    </p>
                  )}
                </div>

                <button className="btn btn-primary w-full btn-lg mb-4">Proceed to Checkout</button>
                <p className="text-xs text-gray-400 text-center">Secure checkout powered by Stripe</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default CartPage
