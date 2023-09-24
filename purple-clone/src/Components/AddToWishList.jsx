import { Button, Text } from "@chakra-ui/react";
import React from "react";
import { BsHeart } from "react-icons/bs";
export default function AddToWishList() {
  return (
    <Button px={7}>
      <Text display={"flex"} gap={5}>
        <BsHeart size={20} />
        WishList
      </Text>
    </Button>
  );
}
