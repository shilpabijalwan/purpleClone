import { ChevronRightIcon } from "@chakra-ui/icons";
import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { NavLink } from "react-router-dom";

export default function PageNavigation({ name }) {
  return (
    <Box display={"flex"} gap={5} fontSize={16} fontWeight={"bold"}>
      <Text _hover={{ color: "#5390d9" }}>
        <NavLink to={"/"}>Home</NavLink>
      </Text>
      <Text>
        <ChevronRightIcon />
      </Text>

      <Text>{name}</Text>
    </Box>
  );
}
