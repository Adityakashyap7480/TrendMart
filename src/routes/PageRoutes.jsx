import { Route, Routes } from "react-router-dom";
import route from "./route.json";
import Home from "../pages/Home";
import Collection from "../pages/Collection";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Product from "../pages/Product";
import Cart from "../pages/Cart";
import Login from "../pages/Login";
import PlaceOrder from "../pages/PlaceOrder";
import Orders from "../pages/Orders";
import MainLayout from "../layouts/MainLayout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ErrorPage from "../pages/ErrorPage";

const PageRoutes = () => {
  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      <ToastContainer />
      <Routes>
        <Route path={route.HOME} element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path={route.COLLECTION} element={<Collection />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path={route.ABOUT} element={<About />} />
          <Route path={route.CONTACT} element={<Contact />} />
          <Route path={route.CART} element={<Cart />} />
          <Route path={route.LOGIN} element={<Login />} />
          <Route path={route.PLACE_ORDER} element={<PlaceOrder />} />
          <Route path={route.ORDERS} element={<Orders />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
};

export default PageRoutes;
