
import { useDispatch, useSelector } from 'react-redux'
import { CartIcon } from '../icons'
import { useEffect } from 'react'
import { totalAmount } from '../features/cartSlice'


const Navbar = () => {

  const dispatch = useDispatch()
  const Amount = useSelector(state => state.cart.amount)

  useEffect(() => {
    dispatch(totalAmount())
  }, [dispatch])
  return (
    <>
      <nav>
        <div className="nav-center">
          <h3>Learning Redux</h3>
          <div className="nav-container">
            <CartIcon />
            <div className="amount-container">
              <p className="total-amount">{Amount}</p>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
export default Navbar
