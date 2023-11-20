import { Box, Flex, Square, Text } from "@chakra-ui/react";
import React from "react";
import { IoReturnUpBack } from "react-icons/io5";
import { TbCashBanknote, TbTruckDelivery } from "react-icons/tb";

import { MdOutlineSecurity } from "react-icons/md";

export default function CartFooter() {
  return (
    <Box m={"auto"} pt={5}>
      <Box w={"250px"} m={"auto"} mt={2}>
        <Text textAlign={"center"}>
          Delivery and payment options can be selected later
        </Text>
      </Box>

      <Flex
        pb={10}
        mt={6}
        w={"100%"}
        // border={"1px solid pink"}
        gap={10}
        pl={5}>
        <Box>
          <Box w={30} m={"auto"}>
            <MdOutlineSecurity size={20} />
          </Box>
          <Text>100% Genuine Products</Text>
        </Box>

        <Box>
          <Box w={30} m={"auto"}>
            <IoReturnUpBack size={20} />
          </Box>
          Return in 15 Days
        </Box>
        <Box>
          <Box w={30} m={"auto"}>
            <TbTruckDelivery size={20} />
          </Box>
          Qualifies for free delivery
        </Box>
        <Box>
          <Box w={30} m={"auto"}>
            <TbCashBanknote size={20} />
          </Box>
          Qualifies for free COD
        </Box>
      </Flex>
    </Box>
  );
}
