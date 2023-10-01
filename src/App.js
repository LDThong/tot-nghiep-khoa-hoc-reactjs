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
import { Provider } from "react-redux";
import { store } from "./store";
import ViewCart from "./component/home/ViewCart";
import UserInformation from "./component/home/UserInformation";
import OrderDetail from "./component/home/OrderDetail";
import OrderComplete from "./component/home/OrderComplete";
import YourOrder from "./component/home/YourOrder";
import PageUpdateInfo from "./component/home/PageUpdateInfo";
import PageEditInfo from "./component/home/PageEditInfo";
import UserManagement from "./component/Admin/UserManagement";
import ListOrder from "./component/Admin/ListOrder";
import ShopMobile from "./component/home/ShopMobile";
import EditUserInfo from "./component/Admin/EditUserInfo";
import EditPassword from "./component/Admin/editPassword";
import EditPasswordUser from "./component/home/EditPasswordUser";

const router = createBrowserRouter([
  // ------------ User -------------
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
    path: '/shops/',
    element: <ShopMobile />
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
  },
  {
    path: '/user/:id',
    element: <UserInformation />
  },
  {
    path: '/orderdetail/',
    element: <OrderDetail />
  },
  {
    path: '/ordercomplete/',
    element: <OrderComplete />
  },
  {
    path: '/user/:id/orders/',
    element: <YourOrder />
  },
  {
    path: '/user/:id/updateinfo/',
    element: <PageUpdateInfo />
  },
  {
    path: '/user/:id/editinfo/',
    element: <PageEditInfo />
  },
  {
    path: '/user/changepassword/:id',
    element: <EditPasswordUser />
  },
  // ------------- Admin -----------------
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
    path: '/admin/home/usermanagements/',
    element: <UserManagement />
  },
  {
    path: '/admin/home/listorder/',
    element: <ListOrder />
  },
  {
    path: '/admin/home/edituserinfo/:id',
    element: <EditUserInfo />
  },
  {
    path: '/admin/home/editpassword/:id',
    element: <EditPassword />
  }
])

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  )
}

export default App