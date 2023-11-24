import Slider from "react-slick";
import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Grid,
  Heading,
  Image,
  Spinner,
  Stack,
  Text,
  space,
} from "@chakra-ui/react";

import { SampleNextArrow, SamplePrevArrow } from "../../Components/Carousel";

import GenricCompo from "./GenericComp";

import { useDispatch, useSelector } from "react-redux";
import { GET_SWISS_DATA } from "../../Redux/SwissBeauty/action";
import SwissAllProduct from "./SwissAllProduct";
import { useSearchParams } from "react-router-dom";

export default function AllProducts() {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const store = useSelector((data) => {
    return data.SwissReducer;
  });

  // console.log(store);
  const { isLoading, isError } = store;
  const { swissproducts } = store;
  const obj = {
    params: {
      _sort: searchParams.get("order") && "price",
      _order: searchParams.get("order"),
    },
  };

  useEffect(() => {
    dispatch(GET_SWISS_DATA(obj));
  }, []);

  var settings = {
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,

    slidesToShow: 4,
    slidesToScroll: 4,

    responsive: [
      {
        breakpoint: 415,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },

      {
        breakpoint: 821,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
    ],
  };
  return (
    <Box
      mt={10}
      mb={30}
      w={"100%"}
      m={"auto"}
      // border={"1px solid blue"}
    >
      <Box
        // border={"1px solid pink"}
        width={"100%"}
        textAlign={"center"}
        mt={10}
        mb={10}>
        <Text fontWeight={"bold"} textColor={"blue.700"} fontSize={20}>
          Best Sellers
        </Text>
      </Box>

      <Box
        // border={"2px solid black"}
        w={"85%"}
        mb={10}
        m={"auto"}
        justifyContent={"space-around"}>
        <Slider {...settings}>
          {swissproducts.map((ele) =>
            ele.title == "Best Sellers" ? (
              <GenricCompo data={ele} key={ele.id} />
            ) : (
              ""
            )
          )}
        </Slider>
      </Box>
      <br />
      <Box
        // border={"1px solid pink"}
        width={"100%"}
        textAlign={"center"}
        mt={10}
        mb={10}>
        <Text fontWeight={"bold"} textColor={"blue.700"} fontSize={20}>
          Currently Trending
        </Text>
      </Box>
      <Box
        mt={"20px"}
        w={"85%"}
        // border={"2px solid green"}
        m={"auto"}
        justifyContent={"space-around"}>
        <Slider {...settings}>
          {swissproducts.map((ele) =>
            ele.title == "Currently Trending" ? (
              <GenricCompo data={ele} key={ele.id} />
            ) : (
              ""
            )
          )}
        </Slider>
      </Box>

      <br />
      <Box
        // border={"1px solid pink"}
        width={"100%"}
        textAlign={"center"}
        mt={10}
        mb={10}>
        <Text fontWeight={"bold"} textColor={"blue.700"} fontSize={20}>
          Featured
        </Text>
      </Box>
      <Box
        mt={"20px"}
        w={"85%"}
        // border={"2px solid green"}
        m={"auto"}
        justifyContent={"space-around"}>
        <Slider {...settings}>
          {swissproducts?.map((ele) =>
            ele.title === "Featured" ? (
              <GenricCompo data={ele} key={ele.id} />
            ) : (
              ""
            )
          )}
        </Slider>
      </Box>
      <Box
        // border={"1px solid pink"}
        width={"100%"}
        textAlign={"center"}
        mt={10}
        mb={10}>
        <Text fontWeight={"bold"} textColor={"blue.700"} fontSize={20}>
          SHOP ALL PRODUCTS
        </Text>
      </Box>
      <Box border={"1px sloid blue"}>
        <SwissAllProduct />
      </Box>
    </Box>
  );
}
