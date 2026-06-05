import React from 'react'
import { useProducts } from '../../context/ProductsContext'
import styles from "./ProductsPage.module.css"
import Card from '../components/Card'
import Loader from '../components/Loader'
import { ImSearch } from 'react-icons/im'
import { useState } from 'react'
const ProductsPage = () => {
  const [search , setSearch] = useState("")
  const products = useProducts()

  const searchHandler = () => {
    console.log(search)
  }

  return (
    <>
      <div>
        <input type="text" value={search} onChange={(e)=>setSearch(e.target.value.toLocaleLowerCase())}
        onClick={searchHandler}
        placeholder='search'/>
        <button><ImSearch/></button>
      </div>
      <div className={styles.container}>
        <div className={styles.products}>
          {products.length === 0 && <Loader />}
          {products?.map(product => (
            <Card key={product.id} product={product} />
          ))}
        </div>
        <aside>
          sidebar
        </aside>
      </div>
    </>
  )
}

export default ProductsPage
