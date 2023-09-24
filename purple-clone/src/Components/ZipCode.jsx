import {
  Box,
  Button,
  Flex,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Show,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { TbTruckDelivery, TbCashBanknote } from "react-icons/tb";
import { MdOutlineSecurity } from "react-icons/md";
import { IoReturnUpBack } from "react-icons/io5";
import Discription, { DiscriptionForsmallScreen } from "./Discription";

export default function ZipCode() {
  const [pin, SetPin] = useState(false);

  return (
    <>
      <Box
        // border={"1px solid blue"}
        display={"flex"}
        gap={10}
        px={7}
        py={2}
        w={"100%"}
        m={"auto"}
        bg={"gray.100"}>
        <InputGroup pt={1}>
          <InputLeftElement pointerEvents="none">
            <TbTruckDelivery color="red" />
          </InputLeftElement>
          <Input
            isRequired
            type="text"
            placeholder="Enter pincode"
            focusBorderColor="pink.300"
            size={"sm"}
          />
        </InputGroup>

        <Button
          colorScheme={"blue"}
          variant={"ghost"}
          onClick={() => SetPin(true)}>
          Change
        </Button>
      </Box>
      {pin ? (
        <Text fontWeight={700} color={"pink.600"} m={"auto"} pl={5}>
          Get delivery in 2 days
        </Text>
      ) : (
        ""
      )}

      <Flex
        // gap={2}
        // border={"1px solid blue"}
        justifyContent={"space-between"}
        mt={6}>
        <Box
          //   border={"1px solid black"}
          color={"pink.400"}
          justifyContent={"center"}>
          <Box justifyContent={"center"} w={30} m={"auto"}>
            <MdOutlineSecurity size={20} />
          </Box>
          100% Genuine Products
        </Box>
        <Box
          //   border={"1px solid black"}
          color={"pink.400"}
          justifyContent={"center"}>
          <Box justifyContent={"center"} w={30} m={"auto"}>
            <IoReturnUpBack size={20} />
          </Box>
          Return in 15 Days
        </Box>
        <Box
          //   border={"1px solid black"}
          color={"pink.400"}
          justifyContent={"center"}>
          <Box justifyContent={"center"} w={30} m={"auto"}>
            <TbTruckDelivery size={20} />
          </Box>
          Free Delivery above ₹499
        </Box>
        <Box
          //   border={"1px solid black"}
          color={"pink.400"}
          justifyContent={"center"}>
          <Box justifyContent={"center"} w={30} m={"auto"}>
            <TbCashBanknote size={20} />
          </Box>
          Free COD above ₹500
        </Box>
      </Flex>
      <Box mt={5}>
        <Image src="https://media6.ppl-media.com/mediafiles/ecomm/misc/1680602964_1280x272-web.jpg" />
      </Box>
      <Show below="lg">
        <DiscriptionForsmallScreen />
      </Show>
    </>
  );
}
