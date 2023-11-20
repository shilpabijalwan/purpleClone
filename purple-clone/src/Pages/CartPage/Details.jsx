import { Box, Flex, Heading, Image, Spacer, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import QtyInput from "./QtyInput";
import Buttons from "./Buttons";

export default function Details({ id, image, category, price, description, discount, text }) {
  const [savemoney, setSavemoney] = useState();
  const [actualdata, setActualdata] = useState();

  const discountPrice = (discountvalue, price) => {
    let data = (discountvalue / 100) * price;
    const ceilvalue = Math.round((discountvalue / 100) * price);
    let newdata = Math.round(price - data);
    setSavemoney(ceilvalue);
    setActualdata(newdata);
  };

  useEffect(() => {
    discountPrice(discount, price);
  }, [price]);

  return (
    <Box
      key={id}
      display={"flex"}
      mb={5}
      mt={5}
      boxShadow={"lg"}
      // border={"1px solid pink"}
    >
      <Box border={"1px solid gray"} w={"17%"}>
        <Image
          src={image}
          // width={{ base: "100px", md: "120px" }}
          alt=""
          m={"auto"}
        />
      </Box>

      <Box pt={1} pl={4} bg={"#F0F3FA"} width={"85%"}>
        <Text>{category}</Text>

        <Flex gap={7} mt={4} pr={2}>
          <Heading size={"md"}>₹{actualdata}</Heading>

          {discount ? (
            <del color="gray">
              <Text fontSize={15}>₹{price}</Text>
            </del>
          ) : (
            ""
          )}
          {discount ? (
            <span
              style={{ color: "green", fontSize: "14px", marginTop: "2px" }}>
              {discount}% off
            </span>
          ) : (
            ""
          )}
          <Spacer />
          <QtyInput />
        </Flex>

        <Flex mt={1}>
          <Spacer />
          <Buttons text={text} />
        </Flex>
      </Box>
    </Box>
  );
}
