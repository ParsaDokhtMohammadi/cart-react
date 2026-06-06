import { ImSearch } from 'react-icons/im'
import { createQueryObject } from '../../helpers/helper'

const SearchBox = ({search,setSearch,setQuery}) => {
    const searchHandler = () => {
        setQuery(query => createQueryObject(query, { ...query, search }))

    }

    return (
        <div>
            <input type="text" value={search} onChange={(e) => setSearch(e.target.value.toLocaleLowerCase())}

                placeholder='search' />
            <button onClick={searchHandler}><ImSearch /></button>
        </div>
    )
}

export default SearchBox
