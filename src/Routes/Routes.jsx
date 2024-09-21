import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Login from "../Pages/Login";
import ErrorPage from "../Pages/ErrorPage";
import DashboardLayout from "../layouts/DashboardLayout";
import Dashboard from "../Pages/Dashboard";
import Registration from "../Pages/Registration";
import PrivateRoute from "./private/PrivateRoute";
import ProductDetails from "../Pages/ProductDetails";
import AllProducts from "../Pages/AllProducts";
import AddProducts from "../Pages/AddProducts";
import EditProducts from "../Pages/EditProducts";
import EditProfile from "../Pages/EditProfile";
import PaymentSuccess from "../Pages/PaymentSuccess";
import PaymentFail from "../Pages/PaymentFail";
import MerchantCorner from "../Pages/MerchantCorner";
import Complain from "../Pages/Complain";
import PurchaseDetails from "../Pages/PurchaseDetails";
// import Alumni from "../../public/services.json"


export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />,
           loader: () => fetch("https://task-server-fawn.vercel.app/courses"),
        },
        {
          path: "/products/:id",
          element: <ProductDetails />,
          loader: ({ params }) =>
            fetch(`https://task-server-fawn.vercel.app/courses/${params.id}`),
        },
        {
          path: "/product/:id",
          element: <PurchaseDetails />,
          loader: async ({ params }) => {
            const response = await fetch('/services.json');  // Fetch the entire file
            const data = await response.json();             // Parse the JSON file
            return data.find(service => service.id == params.id);  // Find the product with matching id
          }
        },
        {
          path: "/merchantcorner",
          element: <MerchantCorner />,
        },       
        {
          path: "/complain",
          element: <Complain/>,
        },       
         {
           path: "/payment/success/:tranId",
          element: <PaymentSuccess/>,
         },       
         {
           path: "/payment/fail/:tranId",
          element: <PaymentFail/>,
         },       
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/register",
          element: <Registration />,
        },
      ],
    },
    {
      path: "dashboard",
      element: <DashboardLayout/>,
      errorElement: <ErrorPage/>,
      children: [
        { path: "", element: (
        <PrivateRoute>
          <Dashboard />
        </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://task-server-fawn.vercel.app/courses`
          ),
         },
         {
          path: "profile/edit/:id",
          element: (
            <PrivateRoute>
              <EditProfile />
            </PrivateRoute>
          ),
          loader: ({ params }) =>
            fetch(
              `https://task-server-fawn.vercel.app/user/get/${params.id}`
            ),
        },
         {
          path: "all-products",
          element: (
            <PrivateRoute>
              <AllProducts />
            </PrivateRoute>
          ),
          
        },
        {
          path: "add-products",
          element: (
            <PrivateRoute>
              <AddProducts />
            </PrivateRoute>
          ),
        }, 
        {
          path: "all-products/edit/:id",
          element: (
            <PrivateRoute>
              <EditProducts />
            </PrivateRoute>
          ),
          loader: ({ params }) =>
            fetch(`https://task-server-fawn.vercel.app/courses/${params.id}`),
        },       
        ],
    },
  ]);