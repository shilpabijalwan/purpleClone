import { Box, Flex, Select, Text } from "@chakra-ui/react";
import React from "react";
import Buttons from "./Buttons";

export default function QtyInput() {
  return (
    <Box>
      <Flex gap={2} w={"90px"}>
        <Text>Qty:</Text>
        <Select placeholder="1" w={"55px"} size="sm" variant={"Unstyled"}>
          <option value="option1">2</option>
          <option value="option2">3</option>
          <option value="option3">4</option>
          <option value="option3">5</option>
        </Select>
      </Flex>
      {/* <Box > 
        <Buttons />
      </Box> */}
    </Box>
  );
}
