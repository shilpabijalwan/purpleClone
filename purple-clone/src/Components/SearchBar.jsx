import { Search2Icon } from "@chakra-ui/icons";
import { Box, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import React from "react";

export default function SearchBar() {
  return (
    
    <InputGroup m={"auto"} my={5} width={"50%"}>
      <InputLeftElement pointerEvents="none">
        <Search2Icon color="gray.600" />
      </InputLeftElement>
      <Input
        type="text"
        placeholder="What are you looking for?...."
        w={300}
        width={"100%"}
        variant="flushed"
        focusBorderColor="#585FEE"
      />
    </InputGroup>
    // </Box>
  );
}
