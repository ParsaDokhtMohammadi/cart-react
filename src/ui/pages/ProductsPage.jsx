import React from 'react'
import { useProducts } from '../../context/ProductsContext'
import styles from "./ProductsPage.module.css"
import Card from '../components/Card'
import Loader from '../components/Loader'
import { ImSearch } from 'react-icons/im'
import { useState } from 'react'
import { FaListUl } from 'react-icons/fa'
import { useEffect } from 'react'
const ProductsPage = () => {
  const products = useProducts()
  const [search, setSearch] = useState("")
  const [displayedProducts , setDisplayedProducts] = useState([])  
  const [query,setQuery] = useState({})

  useEffect(()=>{
    setDisplayedProducts(products)
  },[products])

  useEffect(()=>{
    console.log(query)
  },[query])


  const searchHandler = () => {
    setQuery(query=>({...query,search}))

  }
  const categoryHandler = (e) => {
    const {tagName} = e.target
    const category = e.target.innerText.toLowerCase()
    if(tagName!=="LI") return
    setQuery(query=>({...query,category}))
  }

  return (
    <>
      <div>
        <input type="text" value={search} onChange={(e) => setSearch(e.target.value.toLocaleLowerCase())}
          onClick={searchHandler}
          placeholder='search' />
        <button><ImSearch /></button>
      </div>
      <div className={styles.container}>
        <div className={styles.products}>
          {displayedProducts.length === 0 && <Loader />}
          {displayedProducts?.map(product => (
            <Card key={product.id} product={product} />
          ))}
        </div>
        <aside>
          <div >
            <FaListUl />
            <p>Categories</p>
          </div>
          <ul onClick={categoryHandler}>
            <li>All</li>
            <li>Electronics</li>
            <li>Jwelery</li>
            <li>Men's Clothing</li>
            <li>Women's Clothing</li>
          </ul>
        </aside>
      </div>
    </>
  )
}

export default ProductsPage
