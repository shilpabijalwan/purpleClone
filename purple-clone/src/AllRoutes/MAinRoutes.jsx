import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "../Pages/Homepage";
import MyWishList from "../Pages/MyWishList";
import SingleProductPage from "../Pages/SingleProductPage";

export default function MAinRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/wishlist" element={<MyWishList />} />
      <Route
        path="/productdetail/:id/:category"
        element={<SingleProductPage />}
      />
    </Routes>
  );
}
