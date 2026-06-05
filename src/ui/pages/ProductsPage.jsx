import React from 'react'
import { useProducts } from '../../context/ProductsContext'
import styles from "./ProductsPage.module.css"
const ProductsPage = () => {
  const products = useProducts()

  return (
    <div className={styles.container}>
      <div className={styles.products}>
        {products.length===0 && <p>loading</p>}
        {products?.map(product=>(
          <p>{product.title}</p>
        ))}
      </div>
      <aside>
        sidebar
      </aside>
    </div>
  )
}

export default ProductsPage
