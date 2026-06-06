import React from 'react'
import { useContext } from 'react'
import { useReducer } from 'react'
import { createContext } from 'react'

const CartContext = createContext()
const initialState = {}
const reducer = (state,action) => {
    console.log(action)
}




const CartProvider = ({children}) => {
   const [state , dispatch] = useReducer(reducer,initialState)


    return (
        <CartContext.Provider value={{state,dispatch}}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = ()=>{
   const {state,dispatch} = useContext(CartContext)
    return [state,dispatch]
}

export default CartProvider
