import {
  Box,
  Button,
  CloseButton,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";

export default function AppNAtificationBar({ appbar }) {
  const handleAppNoti = () => {
    appbar(false);
  };

  return (
    <Stack
      position={"sticky"}
      top={0}
      zIndex={4}
      paddingX={{ base: 2, sm: 2, md: 5, lg: 10, xl: 20, "2xl": 20 }}
      justifyContent={"space-between"}
      direction={["column", "row"]}
      width={"100%"}
      border={"1px solid gray"}
      py={1}
      bg={"#D7D4EC"}>
      <Image
        src={"Untitled design.png"}
        alt=""
        // h={50}
        h={{ base: 50, sm: 10, md: 20, lg: 50, xl: 50, "2xl": 50 }}
        w={{ base: 100 }}
      />
      <Flex gap={{ "2xl": 14 }} flexWrap={"wrap"}>
        <Text pt={{ "2xl": 3 }} px={{ "2xl": 2 }} border={"3px dotted red"}>
          Use Code :APPFIRST
        </Text>
        <Heading pt={{ "2xl": 3 }} size={"sm"}>
          <span>⭐️⭐️</span> FLAT Rs. 100 OFF on your first order!
          <span>⭐️⭐️</span>
        </Heading>
      </Flex>
      <Flex gap={{ sm: 2, md: 2, lg: 2, "2xl": 10 }} flexWrap={"wrap-reverse"}>
        <Button colorScheme="red">DOWNLOAD APP</Button>
        <Text pt={5} marginLeft={10}>
          <CloseButton size={5} onClick={handleAppNoti} />
        </Text>
      </Flex>
    </Stack>
  );
}
