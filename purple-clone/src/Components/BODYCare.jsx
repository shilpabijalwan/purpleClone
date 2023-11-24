import { Box, Grid, Heading, Image, Stack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

import DataFetched from "../FetchData/DataFetched";
import { Link } from "react-router-dom";

export default function BODYCare() {
  const [data, setData] = useState([]);

  useEffect(() => {
    DataFetched("https://server-sepia-tau.vercel.app/allbodycare").then(
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
        All BODY CARE
      </Heading>

      <Grid
        templateColumns={{ base: "repeat(3, 1fr)", lg: "repeat(6, 1fr)" }}
        w={{ base: "90%", md: "85%" }}
        m={"auto"}
        gap={5}
        mt={2}
        mb={10}>
        {data.map((ele) => (
          <Link to={"#"} key={Math.random().toString(32).substring(2, 9)}>
            <Box>
              <Image src={ele.image} />
            </Box>
          </Link>
        ))}
      </Grid>
    </>
  );
}
