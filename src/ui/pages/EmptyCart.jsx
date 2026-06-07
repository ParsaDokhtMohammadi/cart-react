import { Link } from "react-router"
import styles from "./EmptyCart.module.css"
import { TbShoppingCartOff } from 'react-icons/tb'

const EmptyCart = () => {
  return (
    <div className={styles.container}>
      <div className={styles.iconWrapper}>
        <TbShoppingCartOff size={36} />
      </div>
      <div className={styles.text}>
        <p className={styles.title}>Your cart is empty</p>
        <p className={styles.subtitle}>Looks like you haven't added anything yet.</p>
      </div>
      <Link to={"/"} className={styles.btn}>Browse products</Link>
    </div>
  )
}

export default EmptyCart