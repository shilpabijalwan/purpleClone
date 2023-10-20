import Slider from "react-slick";
import React from "react";
import {
  Box,
  Button,
  Grid,
  Heading,
  Image,
  Stack,
  Text,
  space,
} from "@chakra-ui/react";
import { useEffect } from "react";
import DataFetched from "../FetchData/DataFetched";
import { useState } from "react";
import GenricComponent from "./GenricComponent";

import { SampleNextArrow, SamplePrevArrow } from "./Carousel";

export default function FeaturedProducts({ url, cart }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    DataFetched(url).then((res) => {
      // console.log(res.data);
      setData(res.data);
      // console.log(data);
    });
  }, []);

  var settings = {
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    // initialSlide: 0,
    // infinite: null,
    // speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,

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
        // border={"2px solid green"}
        w={"85%"}
        m={"auto"}
        justifyContent={"space-evenly"}>
        <Slider {...settings}>
          {data.map((ele) => (
            <GenricComponent {...ele} key={ele.id} cart={cart} />
          ))}
        </Slider>
      </Box>
    </Box>
  );
}
