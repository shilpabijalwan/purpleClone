import { Button, Flex } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";

export default function Buttons() {
  const data = useSelector((res) => {
    return res.cartReduced;
  });
  // console.log(data);

  const handleRemove = (id) => {
    const newData = data.cart.filter((ele) => {
      return ele.id !== id;
    });
  };
  return (
    <Flex w={"250px"} gap={1} pb={1}>
      <Button onClick={() => handleRemove}>Remove</Button>
      <Button>Move To Wishlist</Button>
    </Flex>
  );
}
