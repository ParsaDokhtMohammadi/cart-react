import { Link } from "react-router"
import {TbListDetails} from "react-icons/tb"
import { TbShoppingBagCheck } from "react-icons/tb"
import { shortenText } from "../../helpers/helper"
import styles from "./Card.module.css"

const Card = ({ product }) => {
    const {id,title,image,price} = product
    const shortenedTitle = shortenText(title)
    return (
        <div className={styles.card}>
            <img src={image} alt={shortenedTitle} loading="lazy" />
            <h3>{shortenedTitle}</h3>
            <p>{price}$</p>
            <div className={styles.actions}>
                <Link to={`/products/${id}`}>
                    <TbListDetails/>
                </Link>
                <div>
                <button>
                    <TbShoppingBagCheck/>
                </button>
                </div>
            </div>
        </div>
    )
}

export default Card
