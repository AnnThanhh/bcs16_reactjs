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
import AntDesignTable from "./AntDesignDemo/AntDesignTable";
import PMAntDesginTable from "./AntDesignDemo/PMAntDesginTable";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import ChangeNumberRedux from "./DemoRedux/changeNumberRedux";
import ChangeFontSizeRedux from "./DemoRedux/ChangeFontSizeRedux";
import CartRedux from "./DemoRedux/ShoeShop/CartRedux";
import HomePageRedux from "./DemoRedux/ShoeShop/HomePageRedux";
import Register from "./pages/Register";
import ShakeDiceGamePage from "./pages/ShakeDiceGamePage";
import ReactQueryPageMaster from "./pageMaster/ReactQueryPageMaster";
import ShoeShopRQ from "./pages/ReactQueryDemo/ShoeShopRQ";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
//cấu hình customBrowserHistory
import { unstable_HistoryRouter as HistoryRouter } from "react-router-dom";
import { navigateHistory } from "./utils/interceptor";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import UserManagementRQ from "./pages/ReactQueryDemo/UserManagementRQ";
const queryClient = new QueryClient();
const App = () => {
  return (
    <HistoryRouter history={navigateHistory}>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
          <Routes>
            <Route path="" element={<HomePageMaster />}>
              <Route path="Home" element={<HomePage />}></Route>
              <Route path="About" element={<About />}></Route>
              <Route
                path="redux-change-number"
                element={<ChangeNumberRedux />}
              ></Route>
              <Route
                path="redux-change-fsize"
                element={<ChangeFontSizeRedux />}
              ></Route>
              <Route path="redux-homepage" element={<HomePageRedux />}></Route>
              <Route path="redux-cart" element={<CartRedux />}></Route>
              <Route path="register" element={<Register />}></Route>
              <Route path="profile" element={<Profile />}></Route>
              <Route path="login" element={<Login />}></Route>
              <Route
                path="shake-dice-game"
                element={<ShakeDiceGamePage />}
              ></Route>
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
              <Route path="antd-table" element={<AntDesignTable />}></Route>
              <Route
                path="antd-table-pm"
                element={<PMAntDesginTable />}
              ></Route>
            </Route>

            <Route path="admin" element={<AdminPageMaster />}>
              <Route index element={<Dashboard />}></Route>
              <Route path="usermanagement" element={<UserManagement />}></Route>
              <Route
                path="productmanagement"
                element={<ProductManagement />}
              ></Route>

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

            <Route path="react-query" element={<ReactQueryPageMaster />}>
              <Route
                path="useMutation-demo"
                element={<UserManagementRQ />}
              ></Route>
              <Route path="useClient-demo" element={<ShoeShopRQ />}></Route>
            </Route>
          </Routes>
        </QueryClientProvider>
      </Provider>
    </HistoryRouter>
  );
};

export default App;
