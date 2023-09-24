import { Box, Spinner } from "@chakra-ui/react";
import React from "react";

export default function Spiner() {
  return (
    <Box
      w={"100%"}
      // border={"1px solid blue"}
      textAlign={"center"}
      alignContent={"center"}
      mt={"300px"}>
      <Spinner
        m={"auto"}
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
      />
    </Box>
  );
}
