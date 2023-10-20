import {
  Box,
  Flex,
  Heading,
  Image,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Spiner from "../../Components/Spiner";
import Navbar from "../../Components/Navbar";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import QtyInput from "./QtyInput";
import Buttons from "./Buttons";
import PriceDetail from "./PriceDetail";
import Details from "./Details";
import EmpyCartMsg from "./EmpyCartMsg";

export default function CartPage() {
  const data = useSelector((data) => {
    return data.cartReduced;
  });

  const { isLoading } = data;

  const cartdata = data.cart;
  // console.log(cartdata);

  return isLoading ? (
    <Spiner />
  ) : (
    <>
      <Navbar />
      {cartdata.length ? (
        <Box w={{ base: "95%", md: "77%", lg: "55%" }} m={"auto"} mt={10}>
          <Stack direction="row" gap={10} mb={10}>
            <Link to={"/"}>
              <Heading size={"lg"}>
                <ArrowBackIcon />
              </Heading>
            </Link>
            <Heading size={"lg"} color={"#3D4266"}>
              My Cart
            </Heading>
          </Stack>

          <Box py={3} boxShadow={"2xl"} px={5}>
            {data.cart.map((ele) => (
              <Details {...ele} key={ele.id} />
            ))}
          </Box>
          <PriceDetail />
        </Box>
      ) : (
        <EmpyCartMsg />
      )}
    </>
  );
}
