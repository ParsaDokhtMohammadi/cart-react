import { Link } from "react-router"
import { TbListDetails } from "react-icons/tb"
import { TbShoppingBagCheck } from "react-icons/tb"
import { productQuantity, shortenText } from "../../helpers/helper"
import styles from "./Card.module.css"
import { useCart } from "../../context/CartContext"
import { MdDeleteOutline } from "react-icons/md"

const Card = ({ product }) => {
    const { id, title, image, price } = product
    const shortenedTitle = shortenText(title)
    const [state, dispatch] = useCart()

    const quantity = productQuantity(state, id)

    const clickHandler = (type) => {
        dispatch({ type, payload: product })
    }

    return (
        <div className={styles.card}>
            <img src={image} alt={shortenedTitle} loading="lazy" />
            <h3>{shortenedTitle}</h3>
            <p>{price}$</p>
            <div className={styles.actions}>
                <Link to={`/products/${id}`}>
                    <TbListDetails />
                </Link>
                <div>
                    {quantity === 1 && (
                        <button onClick={() => clickHandler("REMOVE_ITEM")}>
                            <MdDeleteOutline />
                        </button>
                    )}
                    {quantity > 1 && (
                            <button onClick={() => clickHandler("DECREASE")}>
                                -
                            </button>
                    )}
                    {!!quantity && (
                        <span>{quantity}</span>
                    )}
                    {quantity === 0 ? (
                        <button onClick={() => clickHandler("ADD_ITEM")} >
                            <TbShoppingBagCheck />
                        </button>
                    ) : (
                        <button onClick={() => clickHandler("INCREASE")}>
                            +
                        </button>
                    )}




                </div>
            </div>
        </div>
    )
}

export default Card
