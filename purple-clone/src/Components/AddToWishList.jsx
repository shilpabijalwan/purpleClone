import { Button, Text } from "@chakra-ui/react";
import React from "react";
import { BsHeart } from "react-icons/bs";
export default function AddToWishList({ varient, text, size, px }) {
  return (
    <Button
      px={px}
      variant={varient}
      size={size}
      // border={"1px solid pink"}
    >
      <Text display={"flex"} gap={5}>
        <BsHeart size={25} />
        {text}
      </Text>
    </Button>
  );
}
