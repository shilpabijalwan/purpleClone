import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import AddToCart from "../../Components/AddToCart";
import WishList from "../../Components/AddToWishList";

const truncate = (input) =>
  input?.length > 5 ? `${input.substring(0, 60)}...` : input;

export default function GenricCompo({ data }) {
  // console.log(data);

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
    discountPrice(data.discount, data.price);
  }, [actualdata]);

  return (
    <>
      <Link to={`/brandsinglepage/${data.id}`} textDecoration={"none"}>
        <Box
          _hover={{ textDecoration: "none" }}
          key={data.id}
          justifyContent={"space-between"}
          //   border={"1px solid gray"}
          w={{ base: "95%", md: "90%" }}
          //   h={"360px"}
        >
          <Image src={data.image} alt="" w={"200px"} m={"auto"} />
          <br />

          <Box
            mt={2}
            //   border={"1px solid red"}
            mx={4}>
            <Text fontSize={15}>
              {showTruncate ? truncate(data.discription) : data.discription}
            </Text>
            <Box
              display={"flex"}
              mt={2}
              px={2}
              border={"1px solid #EBEBEB"}
              gap={4}
              //   justifyContent={"space-between"}
            >
              <b>₹ {actualdata}</b>

              {data.discount ? (
                <del color="gray">
                  <Text fontSize={12} mt={1}>
                    ₹{data.price}
                  </Text>
                </del>
              ) : (
                ""
              )}

              <Flex>
                {data.discount ? (
                  <Text fontSize={12} color={"green.300"} pl={3}>
                    {data.discount}% off
                  </Text>
                ) : (
                  ""
                )}
                {data.discount ? (
                  <Text fontSize={12} color={"blue.300"} pl={3}>
                    save {savemoney}
                  </Text>
                ) : (
                  ""
                )}
              </Flex>
            </Box>
          </Box>
        </Box>
      </Link>

      <Flex gap={5} w={"200px"} m={"auto"} mt={5}>
        <AddToCart varient={"outline"} px={3} size={"sm"} w={"100%"} />
        <WishList varient={"glost"} size={"sm"} />
      </Flex>
    </>
  );
}
