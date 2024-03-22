import { useEffect, useState } from 'react';
import CartItem from './CartItem'
import { useDispatch, useSelector } from 'react-redux';
import { clearCart, totalAmount } from '../features/cartSlice';
import Modal from './Modal';


const CartContainer = () => {

  const dispatch = useDispatch()
  const cartItems = useSelector(state => state.cart.cartItems);
  const total = useSelector(state => state.cart.total)

  useEffect(() => {
    dispatch(totalAmount())
  })

   const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClearCart = () => {
    setIsModalOpen(true);
  };

  const handleConfirmClearCart = () => {
    setIsModalOpen(false);
    dispatch(clearCart());
  };

  const handleCancelClearCart = () => {
    setIsModalOpen(false);
  };

  if (cartItems.length === 0) {
    return (
      <section className="cart">
        <header>
          <h2>your bag</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </section>
    )
  }

  return (
    <section className="cart">
      <header>
        <h2>your bag</h2>
      </header>
      <div>
        {cartItems.map((item) => {
          return <CartItem key={item.id} {...item} />
        })}
      </div>
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            total <span>${total}</span>
          </h4>
        </div>
        <button className="btn clear-btn" onClick={handleClearCart}>clear cart</button>
      </footer>
      {isModalOpen && ( // Render modal if isModalOpen is true
        <Modal
          onConfirm={handleConfirmClearCart}
          onCancel={handleCancelClearCart}
        />
      )}
    </section>
  )
}
export default CartContainer
