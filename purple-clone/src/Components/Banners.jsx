import { Box, Image } from "@chakra-ui/react";
import React from "react";

export default function Banners({ image }) {
  return (
    <Box
      m={"auto"}
      w={{ base: "90%", md: "80%" }}
      mb={5}
      // border={"1px solid blue"}
    >
      <Image src={image} m={"auto"} w={"100%"} />
    </Box>
  );
}
