import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import DetalleProductoPage from "./pages/DetalleProductoPage";
import HomePage from "./pages/HomePage";
import reportWebVitals from "./reportWebVitals";
import ListaProductosPage from "./pages/ListaProductosPage";

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
    path: "/productos/:id",
    element: <DetalleProductoPage />,
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
