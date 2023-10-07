import { Box, Heading, Image, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const truncate = (input) =>
  input.length > 5 ? `${input.substring(0, 40)}...` : input;

export default function GenricComponent({
  id,
  image,
  price,
  discount,
  category,
  discription,
}) {
  const [showTruncate, setShowTruncate] = useState(true);
  const [actualdata, setActualdata] = useState();
  const [savemoney, setSavemoney] = useState();

  const discountPrice = (discountvalue, price) => {
    let data = (discountvalue / 100) * price;
    const ceilvalue = Math.ceil((discountvalue / 100) * price);
    let newdata = Math.ceil(price - data);
    setSavemoney(ceilvalue);
    setActualdata(newdata);
  };

  useEffect(() => {
    discountPrice(discount, price);
  }, []);

  return (
    <Link to={`/productdetail/${id}/${category}`} textDecoration={"none"}>
      <Box
        _hover={{ textDecoration: "none" }}
        key={id}
        justifyContent={"space-between"}
        // border={"1px solid gray"}
        w={{ base: "95%", md: "90%" }}
        h={"360px"}
        // onClick={() => setShowTruncate(!showTruncate)}
      >
        <Image src={image} alt="" w={"200px"} m={"auto"} />
        <br />
        <Box
          mt={2}
          // border={"1px solid red"}
          mx={4}
          h={"100%"}>
          <Text fontSize={15}>
            {showTruncate ? truncate(discription) : discription}
          </Text>
          <Box
            display={"flex"}
            mt={2}
            px={2}
            border={"1px solid #EBEBEB"}
            justifyContent={"space-around"}>
            <b>₹ {actualdata}</b>

            {discount ? (
              <del color="gray">
                <Text fontSize={12} mt={1}>
                  ₹{price}
                </Text>
              </del>
            ) : (
              ""
            )}
          </Box>

          {discount ? (
            <Text fontSize={12} color={"green.300"} pl={3}>
              {discount}% off
            </Text>
          ) : (
            ""
          )}
          {discount ? (
            <Text fontSize={12} color={"blue.300"} pl={3}>
              you saved Rs {savemoney}
            </Text>
          ) : (
            ""
          )}
        </Box>
      </Box>
    </Link>
  );
}
