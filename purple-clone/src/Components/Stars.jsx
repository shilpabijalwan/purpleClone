import { Box, Text } from "@chakra-ui/react";
import React from "react";

import { BsStar, BsStarHalf, BsStarFill } from "react-icons/bs";

export default function Stars({ stars, review }) {
  const ratingstar = Array.from({ length: 5 }, (ele, i) => {
    let number = i + 0.5;
    return (
      <span>
        {stars >= i + 1 ? (
          <BsStarFill color="#094871" />
        ) : stars >= number ? (
          <BsStarHalf color="#094871" />
        ) : (
          <BsStar color="#094871" />
        )}
      </span>
    );
  });
  return (
    <>
      <Box
        mt={5}
        w={"100%"}
        key={Math.random(1234)}
        display={"flex"}
        gap={1}
        // border={"1px solid blue"}
      >
        <Text display={"flex"} pt={1}>
          {ratingstar}
        </Text>

        <Text pl={3}>({review} reviews)</Text>
      </Box>
    </>
  );
}
