import { Button } from "@chakra-ui/react";
import React from "react";

export default function AddToCart({ varient, px, size, w }) {
  return (
    <Button px={px} colorScheme="blue" variant={varient} size={size} w={w}>
      Add To Cart
    </Button>
  );
}
