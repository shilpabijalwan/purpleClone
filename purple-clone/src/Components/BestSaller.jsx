import React from "react";
import FeaturedProducts from "./FeaturedProducts";
import AddToCart from "./AddToCart";

export default function BestSaller() {
  const handleAdd = () => {};
  return (
    <>
      <FeaturedProducts
        url={"https://server-sepia-tau.vercel.app/best_sellers"}
        cart={<AddToCart px={16} handleAdd={handleAdd} pl={5} />}
      />
    </>
  );
}
