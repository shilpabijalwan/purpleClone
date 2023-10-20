import { Box, Grid, Heading, Image } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DataFetched from "../FetchData/DataFetched";

export default function GreatDeal({ text, url }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    DataFetched(url).then((res) => {
      setData(res.data);
    });
  }, []);

  // console.log(data);

  return (
    <>
      <Heading
        mt={10}
        mb={5}
        textAlign={"center"}
        size={"md"}
        color={"gray.600"}>
        {text}
      </Heading>
      <Grid
        // border={"1px solid blue"}
        templateColumns={{ base: "repeat(3, 1fr)", md: "repeat(5, 1fr)" }}
        gap={5}
        m={"auto"}
        w={{ base: "90%", md: "80%" }}>
        {data.map((ele, i) => (
          <Link to={"#"}>
            <GreatDealGrid {...ele} />
          </Link>
        ))}
      </Grid>
    </>
  );
}

export function GreatDealGrid({ id, image }) {
  return (
    <Box key={id}>
      <Image src={image} m={"auto"} />
    </Box>
  );
}
