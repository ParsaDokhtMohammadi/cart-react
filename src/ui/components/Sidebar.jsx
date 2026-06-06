import { FaListUl } from "react-icons/fa"
import { createQueryObject } from "../../helpers/helper"
import styles from "./Sidebar.module.css"
const Sidebar = ({setQuery}) => {

    const categoryHandler = (e) => {
        const { tagName } = e.target
        const category = e.target.innerText.toLowerCase()
        if (tagName !== "LI") return
        setQuery(query => createQueryObject(query, { ...query, category }))
    }
    return (
        <aside className={styles.sidebar}>
            <div >
                <FaListUl />
                <p>Categories</p>
            </div>
            <ul onClick={categoryHandler}>
                <li>All</li>
                <li>Electronics</li>
                <li>Jewelery</li>
                <li>Men's Clothing</li>
                <li>Women's Clothing</li>
            </ul>
        </aside>
    )
}

export default Sidebar
