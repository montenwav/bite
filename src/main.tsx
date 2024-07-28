import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/App.js";
import "/src/css/index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Login } from "./pages/Login.js";
import { Landing } from "./pages/Landing.js";
import { CheckoutPage } from "./pages/CheckoutPage.js";

const router = createBrowserRouter([
  {
    path: "",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Landing />,
      },
      { path: "login", element: <Login /> },
    ],
  },
  { path: "checkout", element: <CheckoutPage /> },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
