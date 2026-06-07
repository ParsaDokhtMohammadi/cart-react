import { MdDeleteOutline } from "react-icons/md"
import { shortenText } from "../../helpers/helper"
import styles from "./CartCard.module.css"
const CartCard = ({product,clickHandler}) => {

    

  return (
    <div className={styles.card}>
        <img src={product.image} alt={product.title} />
        <p>{shortenText(product.title)}</p>
        <div className={styles.actions}>
            {product.quantity === 1 &&(
                <button onClick={()=>clickHandler("REMOVE_ITEM",product)}><MdDeleteOutline/></button>
            )}
            {product.quantity>1 && (
                <button onClick={()=>clickHandler("DECREASE",product)}>-</button>
            )}
            <span>{product.quantity}</span>
            <button onClick={()=>clickHandler("INCREASE",product)}>+</button>
        </div>
    </div>
  )
}

export default CartCard
