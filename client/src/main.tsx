import React from "react";
import ReactDOM from "react-dom/client";
const App = React.lazy(() => import("./pages/App.js"));
import "/src/css/index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Login } from "./pages/Login.js";
const Landing = React.lazy(() => import("./pages/Landing.js"));
import { CheckoutPage } from "./pages/CheckoutPage.js";
import { Provider } from "./Provider.js";

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
    <Provider>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
