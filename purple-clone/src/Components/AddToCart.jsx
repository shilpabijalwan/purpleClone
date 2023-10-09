import { Button } from "@chakra-ui/react";
import React from "react";

export default function AddToCart({ varient, px, size, w }) {
  return (
    <Button
      // px={px}
      px={16}
      bgColor={"#D0D2F1"}
      color={"black"}
      variant={varient}
      size={size}
      w={w}
      borderRadius={4}
      onClick={() => console.log("helo")}>
      Add To Cart
    </Button>
  );
}
