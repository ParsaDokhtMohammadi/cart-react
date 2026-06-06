import React from 'react'
import { useProducts } from '../../context/ProductsContext'
import styles from "./ProductsPage.module.css"
import Card from '../components/Card'
import Loader from '../components/Loader'
import { useState } from 'react'
import { FaListUl } from 'react-icons/fa'
import { useEffect } from 'react'
import { createQueryObject, filterProducts, getInitialQuery, searchProducts } from '../../helpers/helper'
import { useSearchParams } from 'react-router'
import SearchBox from '../components/searchBox'
import Sidebar from '../components/Sidebar'
const ProductsPage = () => {
  const products = useProducts()
  const [search, setSearch] = useState("")
  const [displayedProducts, setDisplayedProducts] = useState([])
  const [query, setQuery] = useState({})
  const [searchParams, setSearchParams] = useSearchParams()

  useEffect(() => {
    setDisplayedProducts(products)
    const query=getInitialQuery(searchParams)
    setQuery(query)
    setSearch(query.search || "")
    
  }, [products])

  useEffect(() => {
    setSearchParams(query)
    let finalProducts = searchProducts(products, query.search)
    finalProducts = filterProducts(finalProducts, query.category)
    setDisplayedProducts(finalProducts)
  }, [query])





  return (
    <>
      <SearchBox search={search} setSearch={setSearch} setQuery={setQuery}/>
      <div className={styles.container}>
        <div className={styles.products}>
          {displayedProducts.length === 0 && <Loader />}
          {displayedProducts?.map(product => (
            <Card key={product.id} product={product} />
          ))}
        </div>
        <Sidebar query={query} setQuery={setQuery}/>
      </div>
    </>
  )
}

export default ProductsPage
