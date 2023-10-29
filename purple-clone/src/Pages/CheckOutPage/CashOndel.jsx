import { InfoOutlineIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Divider,
  Flex,
  Spacer,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function CashOndel() {
  const Shipping = 50;
  const cod = 10;
  const [savemoney, setSavemoney] = useState(0);
  const [SubTotal, setSubTotal] = useState();
  const data = useSelector((res) => {
    return res.cartReduced;
  });
  // console.log(data);

  // _______________________________________
  const totalMRP = data.cart.reduce((previousValue, currentValue) => {
    return previousValue + currentValue.price;

    // * currentValue.quantity;
  }, 0);

  const discountPrice = () => {
    let SubTotal = 0;

    let ceilvalue = 0;
    for (const product of data.cart) {
      ceilvalue += Math.round((product.discount / 100) * product.price);

      setSavemoney(ceilvalue);

      SubTotal = Math.round(totalMRP - ceilvalue);

      setSubTotal(SubTotal);
    }
  };
  const ALLTOTAL = SubTotal <= 499 ? SubTotal + Shipping : SubTotal;
  //   console.log(SubTotal);
  useEffect(() => {
    discountPrice();
  }, []);
  return (
    <Box boxShadow={"md"}>
      <Flex mb={1} mt={2} px={5} py={1}>
        <b>Total</b>
        <Spacer />
        <b>₹ {SubTotal <= 499 ? SubTotal + Shipping : SubTotal}</b>
      </Flex>
      <Flex mb={1} mt={2} px={5} py={1}>
        <Text>Shipping Charges</Text>
        <Tooltip
          hasArrow
          label=" COD Charges
          RS 10 will be charged extra for Cash on Delivery orders"
          bg="#FEEBF4"
          color="gary">
          <InfoOutlineIcon mt={2} ml={1} fontSize={"sm"} />
        </Tooltip>
        <Spacer />
        <Text>₹ {cod}</Text>
        <br />
      </Flex>
      <Flex mb={1} mt={2} px={5} py={1}>
        <b>Amount Payable</b>
        <Spacer />
        <b>₹ {ALLTOTAL + cod}</b>
      </Flex>
      <Link to={"/absoluteGlam.com"}>
        <Flex mb={1} mt={2} px={5} py={1}>
          <Button
            colorScheme="purple"
            w={{ base: "100%", lg: "400px" }}
            m={"auto"}>
            Pay ₹{ALLTOTAL + cod} On Delivery
          </Button>
        </Flex>
      </Link>
    </Box>
  );
}
