import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "../Pages/Homepage";
import MyWishList from "../Pages/MyWishList";
import SingleProductPage from "../Pages/SingleProductPage";
import Brands from "../Pages/BrandLandingPage/Brands";
import BrandSinglePage from "../Pages/BrandLandingPage/BrandSinglePage";

export default function MAinRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/wishlist" element={<MyWishList />} />
      <Route
        path="/productdetail/:id/:category"
        element={<SingleProductPage />}
      />
      <Route path="/brandDetail/:id/:brand" element={<Brands />} />
      <Route path="/brandsinglepage/:id" element={<BrandSinglePage />} />
    </Routes>
  );
}
