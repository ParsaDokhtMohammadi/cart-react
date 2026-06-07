import React from 'react'
import { useCart } from '../../context/CartContext'
import CartCard from '../components/CartCard'
import EmptyCart from './EmptyCart'
import CartSidebar from '../components/CartSidebar'
import { useNavigate } from 'react-router'
import styles from "./CheckoutPage.module.css"

const CheckoutPage = () => {

  const [state, dispatch] = useCart()
  const navigate = useNavigate()
  const clickHandler = (type,data) =>dispatch({type,payload:data})
  const checkoutHandler = (type) =>{
    dispatch({type})
    navigate("/")
    alert("purchase complete")
  }

  if(!state.itemsCounter) return( <EmptyCart/>)
  return (
    <div className={styles.container}>
      <CartSidebar state={state} clickHandler={checkoutHandler}/>
      <div className={styles.products}>
        {state.selectedItems.map(p=>(
          <CartCard key={p.id} product={p} clickHandler={clickHandler}/>
        ))}
      </div>
    </div>
  )
}

export default CheckoutPage
