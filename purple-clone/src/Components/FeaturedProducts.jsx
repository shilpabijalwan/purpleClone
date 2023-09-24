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

export default function FeaturedProducts() {
  const [data, setData] = useState([]);

  useEffect(() => {
    DataFetched("https://tan-frail-hummingbird.cyclic.app/featured").then(
      (res) => {
        // console.log(res.data);
        setData(res.data);
      }
    );
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
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
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
      <Heading
        mb={1}
        fontSize={{ base: "md", lg: "2xl" }}
        color={"blackAlpha.700"}
        textAlign={"center"}>
        F E A T U R E D
      </Heading>
      <Box
        w={"90%"}
        m={"auto"}
        // border={"1px solid red"}
        textAlign={"center"}
        mb={3}>
        <Button variant={"glost"}>View All </Button>
      </Box>
      <Box
        // border={"2px solid green"}
        w={"80%"}
        m={"auto"}
        justifyContent={"space-around"}>
        <Slider {...settings}>
          {data.map((ele) => (
            <GenricComponent {...ele} key={ele.id} />
          ))}
        </Slider>
      </Box>
    </Box>
  );
}
