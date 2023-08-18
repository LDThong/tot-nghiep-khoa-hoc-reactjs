import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./component/home/Home";
import Login from "./component/Login/Login";
import Register from "./component/Login/Register";
import Admin from "./component/Admin/Admin"
import adminHome from "./component/Admin/adninHome"

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
    element: <adminHome />
  }
])

function App() {
  return <RouterProvider router={router} />;
}

export default App;