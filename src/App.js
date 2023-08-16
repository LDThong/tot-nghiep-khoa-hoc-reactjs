import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./component/home/Home";
import Login from "./component/Login/Login";
import Register from "./component/Login/Register";

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
  }
])

function App() {
  return <RouterProvider router={router} />;
}

export default App;