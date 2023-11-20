import {
  Box,
  Grid,
  HStack,
  Heading,
  Image,
  Stack,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import DataFetched from "../FetchData/DataFetched";
import { Link } from "react-router-dom";

export default function CataStory() {
  const [data, setData] = useState([]);
  useEffect(() => {
    DataFetched("https://server-sepia-tau.vercel.app/CATEGORY_STORES").then(
      (res) => {
        setData(res.data);
      }
    );
  });
  //   console.log(data);
  return (
    <>
      <Heading textAlign={"center"} size={"md"} mt={10} color={"gray.600"}>
        CATEGORY STORES
      </Heading>

      <Grid
        templateColumns={{ base: "repeat(3, 1fr)", lg: "repeat(7, 1fr)" }}
        w={{ base: "90%", md: "85%" }}
        m={"auto"}
        gap={5}
        mt={2}
        mb={10}>
        {data.map((ele) => (
          <Link to={"#"}>
            <Box>
              <Image src={ele.image} />
            </Box>
          </Link>
        ))}
      </Grid>
    </>
  );
}
