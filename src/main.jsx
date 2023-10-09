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
import Services from "./Layouts/Home/Services/Services";
import Events from "./Layouts/Home/Events/Events";
import ServiceDetail from "./Layouts/ServiceDetails/ServiceDetails";
import EventDetails from "./Layouts/Home/EventDetails/EventDetails";
import BlogDetails from "./Layouts/Home/BlogDetails/BlogDetails";
import Blogs from "./Layouts/Home/Blogs/Blogs";
import AboutUs from "./Layouts/Home/AboutUs/AboutUs";

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

      {
        path: "/events/:id",
        element: (
          <PrivateRoute>
            <EventDetails></EventDetails>
          </PrivateRoute>
        ),
        loader: () => fetch("/events.json"),
      },
      {
        path: "/events",
        element: (
          <PrivateRoute>
            <Events></Events>
          </PrivateRoute>
        ),
        loader: () => fetch("/events.json"),
      },
      {
        path: "/blogs/:id",
        element: (
          <PrivateRoute>
            <BlogDetails></BlogDetails>
          </PrivateRoute>
        ),
        loader: () => fetch("/blogs.json"),
      },
      {
        path: "/blogs",
        element: (
          <PrivateRoute>
            <Blogs></Blogs>
          </PrivateRoute>
        ),
        loader: () => fetch("/events.json"),
      },
      {
        path: "/about-us",
        element: (
          <AboutUs></AboutUs>
        ),
        loader: () => fetch("/events.json"),
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
