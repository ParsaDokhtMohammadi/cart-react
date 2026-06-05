import React from 'react'
import { useProducts } from '../../context/ProductsContext'

const ProductsPage = () => {
  const products = useProducts()
  console.log(products)
  return (
    <div>
      
    </div>
  )
}

export default ProductsPage
