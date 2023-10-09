import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { useEffect, useState } from "react";
import {
  Box,
  Button,
  Divider,
  Flex,
  Text,
  Image,
  Heading,
} from "@chakra-ui/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import axios from "axios";
import DataFetched from "../FetchData/DataFetched";

export function SampleNextArrow(props) {
  const { className, onClick } = props;

  return (
    <Box
      className={className}
      bg={"pink.800"}
      display="block"
      borderRadius="50%"
      onClick={onClick}
      _hover={{ bg: "gray" }}
    />
  );
}

export function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <Box
      className={className}
      borderRadius="50%"
      bg={"pink.800"}
      display="block"
      onClick={onClick}
      _hover={{ bg: "gray" }}
    />
  );
}

export default function Carousel3() {
  const [data, setData] = useState([]);

  useEffect(() => {
    DataFetched(
      "https://tan-frail-hummingbird.cyclic.app/carouselImages3"
    ).then((data) => {
      setData(data.data);
    });
  }, []);
  const settings = {
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,

    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: true,

    autoplaySpeed: 3000,
    cssEase: "linear",
  };
  return (
    <>
      <Box
        w={{ base: "90%", md: "80%" }}
        m={"auto"}
        mb={10}
        mt={10}
        // border={"1px solid blue"}
      >
        <Slider {...settings}>
          {data.map((ele) => (
            <Box key={ele.id} w={"100%"}>
              <Image src={ele.image} />
            </Box>
          ))}
        </Slider>
      </Box>
    </>
  );
}
