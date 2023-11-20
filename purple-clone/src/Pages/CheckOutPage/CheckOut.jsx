import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import Navbar from "../../Components/Navbar";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import InputField from "./InputField";

export default function CheckOut() {
  return (
    <>
      <Navbar />
      <Box
        // position={"sticky"}
        w={{ base: "95%", md: "77%", lg: "45%" }}
        m={"auto"}
        mt={10}
        boxShadow={"2xl"}
        height={"580px"}
        overflowY={"scroll"}>
        <Stack direction="row" gap={10} mb={10} pt={10} pl={5}>
          <Link to={"/cart"}>
            <Heading size={"lg"}>
              <ArrowBackIcon />
            </Heading>
          </Link>
          <Heading size={"lg"} color={"#3D4266"}>
            New Address
          </Heading>
        </Stack>
        <Divider border={"pink.100"} mb={5} />
        <Box px={5} fontWeight={"bold"} color={"gray.600"}>
          <Text>Deliver to</Text>
          <Text>Address info</Text>
        </Box>
        <Box fontWeight={"bold"} color={"gray.600"} mt={5}>
          <InputField />
        </Box>
        {/* <Box
          boxShadow={"lg"}
          display={"flex"}
          py={5}
          px={5}
          bg={"white"}
          w={{ base: "95%", sm: "95%", md: "77%", lg: "45%" }}
          //   border={"1px solid green"}
          position={"fixed"}
          bottom={0}
          zIndex={1}
          m={"auto"}>
          <Button colorScheme="purple" variant="solid" px={10} w={"100%"}>
            Save Address
          </Button>
        </Box> */}
      </Box>
    </>
  );
}
