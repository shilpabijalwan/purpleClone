import { Box, Image, Stack } from "@chakra-ui/react";
import React, { useState } from "react";
import Banners from "./Banners";
import { useEffect } from "react";
import DataFetched from "../FetchData/DataFetched";

export default function WhatareyouLookin() {
  const [data, setData] = useState([]);

  useEffect(() => {
    DataFetched("https://server-sepia-tau.vercel.app/whatareyoulookinfor").then(
      (res) => {
        setData(res.data);
      }
    );
  });

  return (
    <Box>
      <Banners
        image={
          "https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1695807643_what-are-you-looking-for_web.jpg"
        }
      />
      <Stack direction={"row"} w={{ base: "90%", md: "85%" }} m={"auto"}>
        {data.map((ele) => (
          <Box key={ele.id}>
            <Image src={ele.image} />
          </Box>
        ))}
      </Stack>
    </Box>
  );
}
