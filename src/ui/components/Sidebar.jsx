import { FaListUl } from "react-icons/fa"
import { createQueryObject } from "../../helpers/helper"
import styles from "./Sidebar.module.css"
import { categories } from "../../constants/Categories"
const Sidebar = ({ query, setQuery }) => {



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
                {categories.map(i => (
                    <li key={i.id} className={query.category===i.type.toLowerCase() ? styles.selected:null}>
                        {i.type}
                    </li>
                ))}
            </ul>
        </aside>
    )
}

export default Sidebar
