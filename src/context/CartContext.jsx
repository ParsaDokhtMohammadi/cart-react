import React from 'react'
import { useReducer } from 'react'
import { createContext } from 'react'

const CartContext = createContext()
const initialState = {}
const reducer = () => {}

const CartProvider = ({children}) => {
   const [state , dispatch] = useReducer(reducer,initialState)


    return (
        <CartContext.Provider value={state}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider
