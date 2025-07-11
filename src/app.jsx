import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Header from "./components/Header";
import HomePageMaster from "./pageMaster/HomePageMaster";
import UserPageMaster from "./pageMaster/UserPageMaster";
import AdminPageMaster from "./pageMaster/AdminPageMaster";
import ShoePage from "./APIdemo/ShoePage";
import DemoFormWithFormik from "./DemoForm/DemoFormWithFormik";
import Dashboard from "./pages/Dashboard";
import UserManagement from "./pages/UserManagement";
import ProductManagement from "./pages/ProductManagement";
import Page404 from "./pages/Page404";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import ForgotPass from "./pages/ForgotPass";
import Details from "./pages/Details";
import Search from "./pages/Search";
import AddProduct from "./pages/AddProduct";
import EditProduct from "./pages/EditProduct";
import Product from "./pages/Product";
import AntDesignDemo from "./AntDesignDemo/AntDesignDemo";
const App = () => {
  return (
    <BrowserRouter>
      {/* <Header /> */}
      {/* <Routes>
        <Route index element={<HomePage />}></Route>
        <Route path="home" element={<HomePage />}></Route>
        <Route path="about" element={<About />}></Route>
      </Routes> */}
      <Routes>
        <Route path="" element={<HomePageMaster />}>
          <Route path="Home" element={<HomePage />}></Route>
          <Route path="About" element={<About />}></Route>
        </Route>

        <Route path="user" element={<UserPageMaster />}>
          <Route path="Home" element={<ShoePage />}></Route>
          <Route path="Login" element={<DemoFormWithFormik />}></Route>
          <Route path="*" element={<Navigate to="/user/home" />}></Route>
          <Route path="detail">
            <Route path=":prodID" element={<Details />}></Route>
          </Route>
          <Route path="search" element={<Search />}></Route>
          <Route path="antd" element={<AntDesignDemo />}></Route>
        </Route>

        <Route path="admin" element={<AdminPageMaster />}>
          <Route index element={<Dashboard />}></Route>
          <Route path="usermanagement" element={<UserManagement />}></Route>
          <Route
            path="productmanagement"
            element={<ProductManagement />}
          ></Route>
          <Route path="login" element={<Login />}></Route>
          <Route path="profile" element={<Profile />}></Route>
          <Route path="forgotpass" element={<ForgotPass />}></Route>
          <Route path="*" element={<Page404 />}></Route>
          <Route path="add-product" element={<AddProduct />}></Route>
          <Route path="edit-product">
            <Route path=":id" element={<EditProduct />}></Route>
          </Route>

          <Route path="product" element={<Product />}></Route>
          <Route path="product">
            <Route path=":id" element={<Product />}></Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
