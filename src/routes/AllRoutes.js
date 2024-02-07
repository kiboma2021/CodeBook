import { Routes, Route } from "react-router-dom"
import { Login,Register,SearchPage,Home,BookDetail,Dashboard,Cart,Ebook,PageNotFound,Payment } from "../pages"


export const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home title="Home|CodeBook" />}>  </Route>
        <Route path="book/:id" element={<BookDetail />}>  </Route>
        <Route path="login" element={<Login title="Login|CodeBook" />}>  </Route>
        <Route path="register" element={<Register title="Register|CodeBook" />}>  </Route>
        <Route path="dashboard" element={<Dashboard title="Dashboard|CodeBook" />}>  </Route>
        <Route path="cart" element={<Cart title="Cart|CodeBook" />}>  </Route>
        <Route path="ebooks" element={<Ebook title="Ebooks|CodeBook" />}>  </Route>
        <Route path="payment" element={<Payment title="Payment|CodeBook" />}>  </Route>
        <Route path="search" element={<SearchPage />}>  </Route>
        <Route path="*" element={<PageNotFound title="PageNotFound|CodeBook" />}>  </Route>

    </Routes>
  )
}

