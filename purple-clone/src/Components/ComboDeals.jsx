import React from "react";
import FeaturedProducts from "./FeaturedProducts";
import AddToCart from "./AddToCart";
import { Heading } from "@chakra-ui/react";

export default function ComboDeals() {
  return (
    <>
      <Heading
        mt={10}
        mb={5}
        textAlign={"center"}
        size={"md"}
        color={"gray.600"}>
        Best Combo Deals
      </Heading>

      <FeaturedProducts
        url={"https://server-sepia-tau.vercel.app/BestcomboDeals"}
        cart={<AddToCart  />  }
      />
    </>
  );
}
