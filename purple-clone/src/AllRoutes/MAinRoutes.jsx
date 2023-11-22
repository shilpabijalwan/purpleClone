import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "../Pages/HomePage/Homepage";
import MyWishList from "../Pages/WishListPage/MyWishList";
import SingleProductPage from "../Pages/SingleProductPage";
import Brands from "../Pages/BrandLandingPage/Brands";
import BrandSinglePage from "../Pages/BrandLandingPage/BrandSinglePage";
import CartPage from "../Pages/CartPage/CartPage";
import CheckOut from "../Pages/CheckOutPage/CheckOut";
import { useSelector } from "react-redux";
import FinalCheckout from "../Pages/CheckOutPage/FinalCheckout";
import { useNavigate } from "react-router-dom";
import BankDetails from "../Pages/CheckOutPage/BankDetails";
import End from "../Pages/EndPage/End";
import PrivateRouter from "../PriviteRouter/PrivateRouter";
import MyModal from "../Components/Modal/Modal";
export default function MAinRoutes() {
  const addresslength = useSelector((data) => {
    return data.addressReducer.adress;
  });
  console.log("addresslength", addresslength);

  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/login" element={<MyModal />} />

      <Route
        path="/wishlist"
        element={
          <PrivateRouter>
            <MyWishList />
          </PrivateRouter>
        }
      />

      <Route path="/cart" element={<CartPage />} />
      <Route
        path="/productdetail/:id/:category"
        element={<SingleProductPage />}
      />
      <Route path="/brandDetail/:id/:brand" element={<Brands />} />
      <Route path="/brandsinglepage/:id" element={<BrandSinglePage />} />
      {addresslength.length > 0 ? (
        <Route path="/checkout" element={<FinalCheckout />} />
      ) : (
        <Route path="/checkout" element={<CheckOut />} />
      )}
      <Route path="/checkout:2" element={<BankDetails />} />

      <Route path="/absoluteGlam.com" element={<End />} />
    </Routes>
  );
}
