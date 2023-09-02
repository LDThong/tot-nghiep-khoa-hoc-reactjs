import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./component/home/Home";
import Login from "./component/Login/Login";
import Register from "./component/Login/Register";
import Admin from "./component/Admin/Admin"
import AdminHome from "./component/Admin/adminHome";
import ListProduct from "./component/Admin/ListProduct";
import AddProduct from "./component/Admin/AddProduct";
import ProductDetail from "./component/home/ProductDetail";
import ShopMarvel from "./component/home/ShopMarvel";
import ShopNaruto from "./component/home/ShopNaruto";
import ShopGundam from "./component/home/ShopGundam";
import ShopDragonBall from "./component/home/ShopDragonBall";
import ShopTransformers from "./component/home/ShopTransformers";
import ShopOnePiece from "./component/home/ShopOnePiece";
import SearchResults from "./component/home/SearchResults";
import EditProduct from "./component/Admin/EditProduct";
import { ShopProvider } from "./context/ShopContext";
import { Provider } from "react-redux";
import { store } from "./store";
import ViewCart from "./component/home/ViewCart";

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
    path: '/admin/',
    element: <Admin />
  },
  {
    path: '/admin/home/',
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
    path: '/shopmarvel/',
    element: <ShopMarvel />
  },
  {
    path: '/shopnaruto/',
    element: <ShopNaruto />
  },
  {
    path: '/shopgundam',
    element: <ShopGundam />
  },
  {
    path: '/shopdragonball',
    element: <ShopDragonBall />
  },
  {
    path: '/shoptransformers',
    element: <ShopTransformers />
  },
  {
    path: '/shoponepiece',
    element: <ShopOnePiece />
  },
  {
    path: '/searchresult',
    element: <SearchResults />
  },
  {
    path: '/editproduct/:id',
    element: <EditProduct />
  },
  {
    path: '/viewcart/',
    element: <ViewCart />
  }
])

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  )
}

export default App;