import { Box, Button, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

export default function Fixedbox({ total, save, text }) {
  return (
    <Box
      boxShadow={"dark-lg"}
      display={"flex"}
      py={5}
      px={5}
      bg={"white"}
      justifyContent={"space-between"}
      w={{ base: "100%", sm: "100%", md: "77%", lg: "55%" }}
      //   border={"1px solid green"}
      position={"fixed"}
      bottom={0}
      zIndex={2}>
      <Flex gap={3} mt={2}>
        <b>₹{total}</b>
        <span style={{ color: "purple", fontSize: "14px" }}>
          {" "}
          you save ₹{save}
        </span>
      </Flex>
      <Link to={text ? "/checkout:2" : "/checkout"}>
        <Button colorScheme="purple" variant="solid" px={20}>
          {/* Proceed To Pay */}
          {text ? text : "Proceed To Pay"}
        </Button>
      </Link>
    </Box>
  );
}
