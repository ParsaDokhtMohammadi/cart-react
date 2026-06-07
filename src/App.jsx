import { Navigate, Route, Routes } from "react-router"
import ProductsPage from "./ui/pages/ProductsPage"
import DetailsPage from "./ui/pages/DetailsPage"
import CheckoutPage from "./ui/pages/CheckoutPage"
import NotFound from "./ui/pages/NotFound"
import ProductsProvider from "./context/ProductsContext"
import CartProvider from "./context/CartContext"
import Layout from "./Layout"


function App() {


  return (
    <CartProvider>
      <ProductsProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<ProductsPage />}></Route>
            <Route path="/products/:id" element={<DetailsPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </Layout>
      </ProductsProvider>
    </CartProvider>
  )
}

export default App
