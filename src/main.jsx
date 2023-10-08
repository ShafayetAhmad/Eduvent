import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import ErrorPage from "./Shared/ErrorPage/ErrorPage";
import Login from "./Layouts/UserManagment/Login";
import Register from "./Layouts/UserManagment/Register";
import AuthProvider from "./Providers/AuthProvider";
import Home from "./Layouts/Home/Home";
import PrivateRoute from "./PrivateRoute";
import ServiceDetail from "./Layouts/ServiceDetails/ServiceDetails";
import Services from "./Layouts/Home/Services/Services";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/services.json"),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/services/:id",
        element: (
          <PrivateRoute>
            <ServiceDetail></ServiceDetail>
          </PrivateRoute>
        ),
        loader: () => fetch("/services.json"),
      },
      {
        path: "/services",
        element: (
          <PrivateRoute>
            <Services></Services>
          </PrivateRoute>
        ),
        loader: () => fetch("/services.json"),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={routes} />
    </AuthProvider>
  </React.StrictMode>
);
