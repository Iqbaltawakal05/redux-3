import { ChevronDown, ChevronUp } from '../icons'
import { increase, decrease, remove } from '../features/cartSlice'
import { useDispatch} from 'react-redux'
import { useState } from 'react'
const CartItem = ({ id, img, title, price, amount }) => {

  const dispatch = useDispatch();
  const [itemAmount, setitemAmount] = useState(amount);
  const [isVisible, setIsVisible] = useState(true);

  const handleIncrement = () => {
    dispatch(increase({id}));
    setitemAmount(itemAmount + 1)
  };

  const handleDecrement = () => {
    if (itemAmount > 1) {
      dispatch(decrease({id}));
      setitemAmount(itemAmount - 1)
    } else {
      handleRemove();
      
    }
  };

  const handleRemove = () => {
    dispatch(remove({id}));
    setIsVisible(false);
  };
  
   if (!isVisible) {
    return null;
  }

  return (
    <article className="cart-item">
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className="item-price">${price}</h4>
        <button className="remove-btn" onClick={handleRemove}>remove</button>
      </div>
      <div>
        <button className="amount-btn" onClick={handleIncrement} >
          <ChevronUp />
        </button>
        <p className="amount">{itemAmount}</p>
        <button className="amount-btn" onClick={handleDecrement}>
          <ChevronDown />
        </button>
      </div>
    </article>
  )
}
export default CartItem