import React, { useEffect, useState } from "react";
import FeaturedProducts from "./FeaturedProducts";
import AddToCart from "./AddToCart";
import { Box, Grid, Heading, Image } from "@chakra-ui/react";
import GreatDeal from "./GreatDeal";
import DataFetched from "../FetchData/DataFetched";
import { Link } from "react-router-dom";

export default function Tranding() {
  const [data, setData] = useState([]);
  useEffect(() => {
    DataFetched("https://server-sepia-tau.vercel.app/trandingNow").then(
      (res) => {
        setData(res.data);
      }
    );
  });
  return (
    <>
      <Heading
        mt={10}
        mb={5}
        textAlign={"center"}
        size={"md"}
        color={"gray.600"}>
        TRANDING NOW
      </Heading>

      {/* <CataStory url={"https://server-sepia-tau.vercel.app/trandingNow"} /> */}
      <Grid
        templateColumns={{ base: "repeat(3, 1fr)", lg: "repeat(7, 1fr)" }}
        w={{ base: "90%", md: "85%" }}
        m={"auto"}
        gap={5}
        mt={2}
        mb={10}>
        {data.map((ele) => (
          <Link to={"#"} key={Math.random() * 380}>
            <Box>
              <Image src={ele.image} />
            </Box>
          </Link>
        ))}
      </Grid>
    </>
  );
}
