import React from 'react'
import { useCart } from '../../context/CartContext'
import CartCard from '../components/CartCard'

const CheckoutPage = () => {

  const [state, dispatch] = useCart()
  const clickHandler = (type,data) =>dispatch({type,payload:data})

  return (
    <div>
      <div>
        {state.selectedItems.map(p=>(
          <CartCard key={p.id} product={p} clickHandler={clickHandler}/>
        ))}
      </div>
    </div>
  )
}

export default CheckoutPage
