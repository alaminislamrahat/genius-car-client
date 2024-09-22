import { createBrowserRouter } from "react-router-dom";
import Root from "./Layout/Root";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import CheakOut from "../Pages/CheakOut/CheakOut";
import BookService from "../Pages/BookService/BookService";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/signup',
        element: <SignUp />
      },
      
      {
        path: '/cheakout/:id',
        element: <PrivateRoute><CheakOut /></PrivateRoute>,
        loader: ({ params }) => fetch(`https://genius-car-server-sigma-khaki.vercel.app/services/${params.id}`)
      },
      {
        path : '/bookings',
        element : <PrivateRoute><BookService/></PrivateRoute>
      }
    ]
  },
]);

export default router;