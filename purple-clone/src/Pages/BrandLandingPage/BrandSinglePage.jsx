import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Box, Flex, Heading, Text } from "@chakra-ui/react";

import Navbar from "../../Components/Navbar";
import PageNavigation from "../../Components/PageNavigation";

import { ProductImages } from "../../Components/ProductImages";
import Stars from "../../Components/Stars";

import AddToCart from "../../Components/AddToCart";
import AddToWishList from "../../Components/AddToWishList";

import ZipCode from "../../Components/ZipCode";
import Footer from "../../Components/Footer";

import { useDispatch, useSelector } from "react-redux";

import Spiner from "../../Components/Spiner";

import { GET_Single_SWISS_DATA } from "../../Redux/SwissBeauty/action";

export default function BrandSinglePage() {
  const { id } = useParams();

  const dispatch = useDispatch();

  const store = useSelector((data) => {
    return data.SwissReducer.singleSwissProduct;
  });

  const store2 = useSelector((data) => {
    return data.SwissReducer;
  });

  const { isLoading, isError } = store2;

  // console.log(isLoading);

  useEffect(() => {
    dispatch(GET_Single_SWISS_DATA(id));
  }, []);

  const [savemoney, setSavemoney] = useState();
  const [actualdata, setActualdata] = useState();

  const { images } = store;
  // console.log(images);

  const discountPrice = (discountvalue, price) => {
    let data = (discountvalue / 100) * price;
    const ceilvalue = Math.ceil((discountvalue / 100) * price);
    let newdata = Math.ceil(price - data);
    setSavemoney(ceilvalue);
    setActualdata(newdata);
  };

  useEffect(() => {
    discountPrice(store.discount, store.price);
  }, [discountPrice]);

  return isLoading ? (
    <Spiner />
  ) : (
    <>
      <Box bg={"#F4F6F5"} pb={3}>
        <Navbar />

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
                {store.discription}
              </Heading>
            </Box>

            {store.stars ? (
              <Stars stars={store.stars} review={store?.review} />
            ) : (
              ""
            )}

            <Box display={"flex"} gap={5} mt={5}>
              {store.price ? <Heading size={"lg"}>₹ {actualdata}</Heading> : ""}

              {store.discount ? (
                <del color="gray">
                  <Text fontSize={15} mt={3}>
                    ₹{store.price}
                  </Text>
                </del>
              ) : (
                ""
              )}

              {store.discount ? (
                <Text fontSize={15} color={"green.600"} pl={3} mt={3}>
                  {store.discount}% off (saved ₹{savemoney})
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
              <AddToCart px={10} />
              <AddToWishList text={"WishList"} px={7} />
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
