import React from "react";
import FeaturedProducts from "./FeaturedProducts";
import AddToCart from "./AddToCart";

export default function BestSaller() {
  return (
    <>
      <FeaturedProducts
        url={"https://tan-frail-hummingbird.cyclic.app/best_sellers"}
        cart={<AddToCart />}
      />
    </>
  );
}
