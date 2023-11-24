import { Box, Button, Heading } from "@chakra-ui/react";
import React from "react";

export default function AllHeading({ text }) {
  return (
    <Box
     
      mb={5}
      p={5}>
      <Heading
        fontSize={{ base: "md", lg: "2xl" }}
        color={"blackAlpha.700"}
        textAlign={"center"}>
        {text}
      </Heading>
      <Box
        w={"90%"}
        m={"auto"}
        
        textAlign={"center"}
        mb={3}>
       
      </Box>
    </Box>
  );
}
