import { ImSearch } from 'react-icons/im'
import { createQueryObject } from '../../helpers/helper'
import styles from "./SearchBox.module.css"
const SearchBox = ({search,setSearch,setQuery}) => {
    const searchHandler = () => {
        setQuery(query => createQueryObject(query, { ...query, search }))

    }

    return (
        <div className={styles.searchBox}>
            <input type="text" value={search} onChange={(e) => setSearch(e.target.value.toLocaleLowerCase())}

                placeholder='search' />
            <button onClick={searchHandler}><ImSearch /></button>
        </div>
    )
}

export default SearchBox
