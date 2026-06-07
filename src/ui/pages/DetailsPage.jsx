import React from 'react'
import { Link, useParams } from 'react-router'
import { useProductDetails, useProducts } from '../../context/ProductsContext'
import ProductNotFound from './ProductNotFound'
import { SiOpenproject } from 'react-icons/si'
import { IoMdPricetag } from 'react-icons/io'
import { FaArrowLeft } from 'react-icons/fa'
import styles from "./DetailsPage.module.css"

const DetailsPage = () => {
  const { id } = useParams()
  const product = useProductDetails(id)
  console.log(product)
  if (!product) return <ProductNotFound />
  return (
    <div className={styles.container}>
      <img src={product.image} alt={product.title} />
      <div className={styles.information}>
        <h3 className={styles.title}>{product.title}</h3>
        <p className={styles.description}>{product.description}</p>
        <p className={styles.category}><SiOpenproject/> {product.category}</p>
      <div className={styles.price}>
        <span><IoMdPricetag/> {product.price} $</span>
        <Link to={"/"}>
          <FaArrowLeft/>
          <span> Back to Shop</span>
        </Link>

      </div>
      </div>
    </div>
  )
}

export default DetailsPage
