import { Box, Button, Center, Image, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

export default function EmpyCartMsg() {
  return (
    <Box m={"auto"} textAlign={"center"} mt={50} boxShadow={"xl"} p={5} w={500}>
      <Image
        src="https://media6.ppl-media.com/mediafiles/ecomm/promo/1669805391_empty-pana-2.png"
        m={"auto"}
        alignItems={"center"}
      />

      <br />
      <br />
      <b>There are no items in this cart</b>
      <Text>Lets's add some items to the cart to shop</Text>
      <br />
      <br />

      <Link to={"/"}>
        <Button colorScheme="teal" variant="outline">
          CONTINUE SHOPPING
        </Button>
      </Link>
    </Box>
  );
}
