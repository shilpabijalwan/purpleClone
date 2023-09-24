import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Box, Flex, Heading, Text } from "@chakra-ui/react";

import Navbar from "../Components/Navbar";
import PageNavigation from "../Components/PageNavigation";

import { ProductImages } from "../Components/ProductImages";
import Stars from "../Components/Stars";

import AddToCart from "../Components/AddToCart";
import AddToWishList from "../Components/AddToWishList";

import ZipCode from "../Components/ZipCode";
import Footer from "../Components/Footer";

import { useDispatch, useSelector } from "react-redux";
import { Get_Product } from "../Redux/Products/action";

import Spiner from "../Components/Spiner";

export default function SingleProductPage() {
  const { id } = useParams();
  // console.log(id);
  const dispatch = useDispatch();

  const store = useSelector((data) => {
    return data.productReducer;
  });
  // console.log(store);

  const { isLoading, isError } = store;
  // console.log(isLoading);

  const [savemoney, setSavemoney] = useState();
  const [actualdata, setActualdata] = useState();

  const { images } = store.products;

  const discountPrice = (discountvalue, price) => {
    let data = (discountvalue / 100) * price;
    const ceilvalue = Math.ceil((discountvalue / 100) * price);
    let newdata = Math.ceil(price - data);
    setSavemoney(ceilvalue);
    setActualdata(newdata);
  };

  useEffect(() => {
    dispatch(Get_Product(id));
  }, []);

  useEffect(() => {
    discountPrice(store.products.discount, store.products.price);
  }, [discountPrice]);

  return isLoading ? (
    <Spiner />
  ) : (
    <>
      <Box bg={"#F4F6F5"} pb={3}>
        <Navbar />
        <Box py={5} m={"auto"} w={"85%"}>
          <PageNavigation name={store.products.category} />
        </Box>

        <Flex
          boxShadow={"lg"}
          color={"#484848"}
          p={2}
          gap={2}
          bg={"white"}
          // border={"2px solid black"}
          display={"flex"}
          width={{ base: "100%", lg: "85%" }}
          m={"auto"}
          justifyContent={"space-evenly"}
          flexWrap={"wrap"}
          mt={2}
          mb={"20px"}>
          <Box w={{ md: "100%", lg: "60%" }}>
            <ProductImages imgs={images} />
          </Box>

          <Box w={{ base: "100%", md: "100%", lg: "39%" }} px={2}>
            <Box>
              <Heading size={"sm"} p={2} lineHeight={6}>
                {store.products.discription}
              </Heading>
            </Box>

            {store.products.stars ? (
              <Stars
                stars={store.products.stars}
                review={store.products.review}
              />
            ) : (
              ""
            )}

            <Box display={"flex"} gap={5} mt={5}>
              {store.products.price ? (
                <Heading size={"lg"}>₹ {actualdata}</Heading>
              ) : (
                ""
              )}

              {store.products.discount ? (
                <del color="gray">
                  <Text fontSize={15} mt={3}>
                    ₹{store.products.price}
                  </Text>
                </del>
              ) : (
                ""
              )}

              {store.products.discount ? (
                <Text fontSize={15} color={"green.600"} pl={3} mt={3}>
                  {store.products.discount}% off (saved ₹{savemoney})
                </Text>
              ) : (
                ""
              )}
            </Box>
            <Box
              // border={"pink"}
              bg={"pink.100"}
              mt={5}
              p={3}
              display={"flex"}
              textAlign={"center"}
              gap={3}>
              <Box
                bg={"red"}
                borderRadius={30}
                w={40}
                justifyContent={"center"}>
                #Best Seller
              </Box>
              <Text> In Conditioner See Top 25</Text>
            </Box>
            <br />
            <Box
              display={"flex"}
              // border={"1px solid blue"}
              gap={10}
              justifyContent={"space-evenly"}>
              <AddToCart />
              <AddToWishList />
            </Box>
            <br />
            <ZipCode />
          </Box>
        </Flex>
      </Box>

      <Footer />
    </>
  );
}
