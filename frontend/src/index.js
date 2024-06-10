import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import DetalleProductoPage from "./pages/DetalleProductoPage";
import HomePage from "./pages/HomePage";
import reportWebVitals from "./reportWebVitals";
import ListaProductosPage from "./pages/ListaProductosPage";
import CarritoPage from "./pages/CarritoPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import LogoutPage from "./pages/LogoutPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/productos",
    element: <ListaProductosPage />,
  },
  {
    path: "/productos/:idProducto",
    element: <DetalleProductoPage />,
  },
  {
    path: "/carrito",
    element: <CarritoPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/logout",
    element: <LogoutPage />,
  },
  {
    path: "/registro",
    element: <RegisterPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
