import React from 'react'
import { useProducts } from '../../context/ProductsContext'
import styles from "./ProductsPage.module.css"
import Card from '../components/Card'
const ProductsPage = () => {
  const products = useProducts()

  return (
    <div className={styles.container}>
      <div className={styles.products}>
        {products.length===0 && <p>loading</p>}
        {products?.map(product=>(
          <Card key={product.id} product={product}/>
        ))}
      </div>
      <aside>
        sidebar
      </aside>
    </div>
  )
}

export default ProductsPage
