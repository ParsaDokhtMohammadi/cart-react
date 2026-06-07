import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { createContext } from 'react'
import { api } from '../services/api'
import { useContext } from 'react'

const ProductContext = createContext()

const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([])
  useEffect(() => {
    const getProducts = async () => {
      try {
        setProducts(await api.get("/products"))
      } catch (err) {
        console.log(err.message)
        alert(err.message)
      }
    }
    getProducts()
  }, [])
  return (
    <ProductContext.Provider value={products}>
      {children}
    </ProductContext.Provider>
  )
}

export const useProducts = ()=> {
  const products = useContext(ProductContext)
  return products
}

export const useProductDetails = (id) => {
  const products = useContext(ProductContext)
  const res = products.find(p=>p.id==id)
  return res
}

export default ProductsProvider
