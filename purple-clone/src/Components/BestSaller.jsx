import React from "react";
import FeaturedProducts from "./FeaturedProducts";
import AddToCart from "./AddToCart";

export default function BestSaller() {
  return (
    <>
      <FeaturedProducts
        url={"https://server-sepia-tau.vercel.app/best_sellers"}
        cart={<AddToCart px={16} pl={5} />}
      />
    </>
  );
}
