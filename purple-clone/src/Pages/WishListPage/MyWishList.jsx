import {
  Box,
  Flex,
  Grid,
  Heading,
  Image,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";

import { ArrowBackIcon } from "@chakra-ui/icons";
import Details from "../CartPage/Details";
import EmpyCartMsg from "../CartPage/EmpyCartMsg";
import AddToCart from "../../Components/AddToCart";

export default function MyWishList() {
  const wishstore = useSelector((data) => {
    return data.wishReducer.wishlist;
  });
  // console.log(wishstore);
  return (
    <>
      <Navbar />
      {wishstore.length ? (
        <Box
          w={{ base: "95%", md: "77%", lg: "55%" }}
          m={"auto"}
          mt={10}
          boxShadow={"2xl"}>
          <Stack direction="row" gap={10} mb={10} pt={10} pl={5}>
            <Link to={"/"}>
              <Heading size={"lg"}>
                <ArrowBackIcon />
              </Heading>
            </Link>
            <Heading size={"lg"} color={"#3D4266"}>
              MY FAVOURTES
            </Heading>
          </Stack>

          <Box py={3} px={5}>
            {wishstore.map((ele) => (
              <>
                <Details {...ele} key={ele.id} text={<AddToCart px={10} />} />
              </>
            ))}
          </Box>
        </Box>
      ) : (
        <Box
          w={{ base: "95%", md: "77%", lg: "55%" }}
          m={"auto"}
          mt={10}
          boxShadow={"2xl"}>
          <b>uh-oh! No more products in your wishlist</b>
        </Box>
      )}
    </>
  );
}
