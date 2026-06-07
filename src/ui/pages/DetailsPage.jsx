import React from 'react'
import { useParams } from 'react-router'
import { useProductDetails, useProducts } from '../../context/ProductsContext'
import ProductNotFound from './ProductNotFound'

const DetailsPage = () => {
  const {id} = useParams()
  const product = useProductDetails(id)
  if(!product) return <ProductNotFound/>
  return (
    <div>
      
    </div>
  )
}

export default DetailsPage
