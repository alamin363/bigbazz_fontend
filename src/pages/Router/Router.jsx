import { createBrowserRouter } from "react-router-dom";
import { Main } from "../../Layout/Main";
import { Category } from "../Category/Category";
import { Home } from "../Home/Home";
import { Login } from "../Login/Login";
import { Register } from "../Login/Register";
import ProductDetails from "../ProductDetails/ProductDetails";
import { Products } from "../Products/Products";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
      { path: "/products", element: <Products /> },
      { path: "/Category", element: <Category /> },
      { path: "/product-details/:productId", element: <ProductDetails /> },
    ],
  },
]);
