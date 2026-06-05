import { Navigate, Route, Routes } from "react-router"
import ProductsPage from "./ui/pages/ProductsPage"
import DetailsPage from "./ui/pages/DetailsPage"
import CheckoutPage from "./ui/pages/CheckoutPage"
import NotFound from "./ui/pages/NotFound"


function App() {


  return (
    <Routes>
        <Route path="/" element={<Navigate to={"/products"} replace/>}></Route>
        <Route path="/products" element={<ProductsPage/>}/>
        <Route path="/products/:id" element={<DetailsPage/>}/>
        <Route path="/checkout" element={<CheckoutPage/>}/>
        <Route path="/*" element={<NotFound/>}/>

    </Routes>
  )
}

export default App
