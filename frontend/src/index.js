import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Autenticado from "./components/Autenticado";
import "./index.css";
import AdminCrearProductoPage from "./pages/AdminCrearProductoPage";
import AdminDetalleProductoPage from "./pages/AdminDetalleProductoPage";
import AdminPage from "./pages/AdminPage";
import AdminProductoPage from "./pages/AdminProductoPage";
import CarritoPage from "./pages/CarritoPage";
import DetalleProductoPage from "./pages/DetalleProductoPage";
import HomePage from "./pages/HomePage";
import ListaProductosPage from "./pages/ListaProductosPage";
import LoginPage from "./pages/LoginPage";
import LogoutPage from "./pages/LogoutPage";
import RegisterPage from "./pages/RegisterPage";
import reportWebVitals from "./reportWebVitals";
import DeseadosPage from "./pages/DeseadosPage";
import FavoritosPage from "./pages/FavoritosPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Autenticado.Provider>
        <Outlet />
      </Autenticado.Provider>
    ),
    children: [
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
        path: "/deseados",
        element: <DeseadosPage />,
      },
      {
        path: "/favoritos",
        element: <FavoritosPage />,
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
        path: "/admin",
        element: <AdminPage />,
      },
      {
        path: "/admin/productos",
        element: <AdminProductoPage />,
      },
      {
        path: "/admin/productos/nuevo",
        element: <AdminCrearProductoPage />,
      },
      {
        path: "/admin/productos/:idProducto",
        element: <AdminDetalleProductoPage />,
      },
      {
        path: "/registro",
        element: <RegisterPage />,
      },
    ],
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
