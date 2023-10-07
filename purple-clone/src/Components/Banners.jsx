import { Box, Image } from "@chakra-ui/react";
import React from "react";

export default function Banners({ image }) {
  return (
    <Box m={"auto"} w={{ sm: "90%", lg: "80%" }} mb={20}>
      <Image src={image} m={"auto"} />
    </Box>
  );
}
