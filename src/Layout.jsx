import { PiShoppingCartSimpleBold } from "react-icons/pi"
import { Link } from "react-router"
import { useCart } from "./context/CartContext"
import styles from "./Layout.module.css"
const Layout = ({ children }) => {
    const [state] = useCart()
    return (
        <>
            <header className={styles.header}>
                <Link to={"/"}>PDM Shop</Link>
                <div>
                    <Link to={"/checkout"}><PiShoppingCartSimpleBold /></Link>
                    {!!state.itemsCounter && (
                        <span>{state.itemsCounter}</span>
                    )}
                </div>
            </header>
            {children}
            <footer className={styles.footer}>
                <p>Developed by <a href="https://github.com/ParsaDokhtMohammadi">Parsa Dokht Mohammadi</a></p>
            </footer>
        </>
    )
}

export default Layout
