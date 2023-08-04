import ReactDOM from "react-dom/client";
import ErrorPage from "./error-page";
import Filterthree from "./productPage/Filterthree";
import ProductListingPage from "./productPage/ProductListingPage";
import Modal from "./UI/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
  { path: "/", element: <App />, errorElement: <ErrorPage /> },
  {
    path: "orderOnline",
    element: <ProductListingPage />,
  },
  {
    path: "dinning",
    element: <ProductListingPage />,
  },
  {
    path: "nightlifeAndClubs",
    element: <ProductListingPage />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <RouterProvider router={router} />
  </>
);
