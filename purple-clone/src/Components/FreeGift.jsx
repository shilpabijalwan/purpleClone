import React, { useEffect, useState } from "react";

import { Box, Grid, Heading, Image } from "@chakra-ui/react";

import DataFetched from "../FetchData/DataFetched";
import { Link } from "react-router-dom";

export default function FreeGift() {
  const [data, setData] = useState([]);
  useEffect(() => {
    DataFetched("https://server-sepia-tau.vercel.app/FREE_GIFT_OFFERS").then(
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
        FREE GIFT OFFERS
      </Heading>

      <Grid
        templateColumns={{ base: "repeat(3, 1fr)", lg: "repeat(7, 1fr)" }}
        w={{ base: "90%", md: "85%" }}
        m={"auto"}
        gap={5}
        mt={2}
        mb={10}>
        {data.map((ele) => (
          <Link to={"#"} key={Math.random().toString(16).substring(2, 9)}>
            <Box>
              <Image src={ele.image} borderRadius={"50"} />
            </Box>
          </Link>
        ))}
      </Grid>
    </>
  );
}
