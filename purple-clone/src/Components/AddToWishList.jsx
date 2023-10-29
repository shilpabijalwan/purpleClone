import { Button, Text } from "@chakra-ui/react";
import React from "react";
import { BsHeart } from "react-icons/bs";

export default function AddToWishList({
  varient,
  text,
  size,
  px,
  w,
  handlewishlist,
}) {
  return (
    <Button
      px={px}
      w={w}
      variant={varient}
      size={size}
      // border={"1px solid pink"}
      onClick={handlewishlist}>
      <Text display={"flex"} gap={3}>
        <BsHeart size={25} />
        {text}
      </Text>
    </Button>
  );
}
