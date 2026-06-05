import { Navigate, Route, Routes } from "react-router"
import ProductsPage from "./ui/pages/ProductsPage"
import DetailsPage from "./ui/pages/DetailsPage"
import CheckoutPage from "./ui/pages/CheckoutPage"
import NotFound from "./ui/pages/NotFound"
import ProductsProvider from "./context/ProductsContext"


function App() {


  return (
    <ProductsProvider>
      <Routes>
        <Route path="/" element={<Navigate to={"/products"} replace />}></Route>
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:id" element={<DetailsPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </ProductsProvider>
  )
}

export default App
