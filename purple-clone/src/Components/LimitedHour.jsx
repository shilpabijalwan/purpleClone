import React, { useEffect, useState } from "react";
import DataFetched from "../FetchData/DataFetched";
import { Box, Heading, Image, Stack } from "@chakra-ui/react";
export default function LimitedHour() {
  const [data, setData] = useState([]);

  useEffect(() => {
    DataFetched("https://server-sepia-tau.vercel.app/Limited_Hours_Deal").then(
      (res) => {
        setData(res.data);
      }
    );
  });
  //   console.log(data);

  return (
    <Box
      textAlign={"center"}
      width={{ base: "90%", md: "85%" }}
      m={"auto"}
      mb={10}
      mt={10}
      //   border={"1px solid blue"}
    >
      <Heading fontSize={"xl"} color={"gray.600"} mb={5} mt={5}>
        Limited Hours Deal
      </Heading>
      <Stack
        // mt={10}

        direction={"row"}
        // border={"1px solid blue"}
      >
        {data.map((ele) => (
          <Box key={ele.id}>
            <Image src={ele.image} />
          </Box>
        ))}
      </Stack>
    </Box>
  );
}
