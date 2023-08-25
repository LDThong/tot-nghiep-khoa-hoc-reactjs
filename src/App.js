import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./component/home/Home";
import Login from "./component/Login/Login";
import Register from "./component/Login/Register";
import Admin from "./component/Admin/Admin"
import AdminHome from "./component/Admin/adminHome";
import ListProduct from "./component/Admin/ListProduct";
import AddProduct from "./component/Admin/AddProduct";
import ProductDetail from "./component/home/ProductDetail";
import ShopMavel from "./component/home/ShopMavel"

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/register',
    element: <Register />
  },
  {
    path: '/admin',
    element: <Admin />
  },
  {
    path: '/admin/home',
    element: <AdminHome />
  },
  {
    path: '/admin/home/listproduct',
    element: <ListProduct />
  },
  {
    path: '/admin/home/addproduct',
    element: <AddProduct />
  },
  {
    path: '/productdetail/:id',
    element: <ProductDetail />
  },
  {
    path: '/shopmavel/',
    element: <ShopMavel />
  }
])

function App() {
  return <RouterProvider router={router} />;
}

export default App;