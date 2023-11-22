import { Button } from "@chakra-ui/react";
import React from "react";


export default function AddToCart({ pl,varient, px, size, w, handleAdd }) {
  return (
    <Button
      px={px}
      ml={pl}
      // px={16}
      bgColor={"#D0D2F1"}
      color={"black"}
      variant={varient}
      size={size}
      w={w}
      onClick={handleAdd}
      borderRadius={4}>
      Add To Cart
    </Button>
  );
}
