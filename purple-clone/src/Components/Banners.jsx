import { Box, Image } from "@chakra-ui/react";
import React from "react";

export default function Banners({ image }) {
  return (
    <Box border={"1px solid blue"} mt={10} m={"auto"} w={"80%"}>
      <Image src={image} />
    </Box>
  );
}
