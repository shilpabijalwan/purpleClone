import { Button } from "@chakra-ui/react";
import React from "react";
import axios from "axios";

export default function AddToCart({ varient, px, size, w, handleAdd }) {
  return (
    <Button
      px={px}
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
