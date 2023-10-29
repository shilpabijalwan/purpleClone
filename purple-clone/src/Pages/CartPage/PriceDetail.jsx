import {
  Box,
  Divider,
  Flex,
  Icon,
  Spacer,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { HiOutlineInformationCircle } from "react-icons/hi";
import { BiRupee } from "react-icons/bi";
import { InfoOutlineIcon } from "@chakra-ui/icons";
import CartFooter from "./CartFooter";
import Fixedbox from "./Fixedbox";

export default function PriceDetail() {
  const Shipping = 50;
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

  // console.log(SubTotal);
  useEffect(() => {
    discountPrice();
  }, []);
  // _____________________________________

  return (
    <>
      <Box mt={6} px={5} py={5} mb={5}>
        <Text fontSize={20} fontWeight="bold" mb={3}>
          Price Details
        </Text>
        <Flex mb={3}>
          <Text>Total MRP</Text>
          <Spacer />
          <Flex>
            <Text mt={1}>
              <BiRupee />
            </Text>
            <Text>{totalMRP}</Text>
          </Flex>
        </Flex>

        <Flex mb={3}>
          <Text>Saving on MRP</Text>
          <Spacer />
          <Flex>
            <Text mt={1}>
              <BiRupee />
            </Text>
            <Text>{-savemoney}</Text>
          </Flex>
        </Flex>

        <Flex mb={3}>
          <Text>Sub Total</Text>
          <Spacer />
          <Text>₹ {SubTotal}</Text>
        </Flex>

        <Flex mb={3}>
          <Text>Shipping Charges</Text>
          <Tooltip
            hasArrow
            label="Free shipping on all order above Rs.499. for
          order below Rs.499 shipping charges of Rs.50 will be levied "
            bg="#FEEBF4"
            color="gary">
            <InfoOutlineIcon mt={2} ml={1} fontSize={"sm"} />
          </Tooltip>
          <Spacer />
          <Text>{SubTotal >= 499 ? "Free" : `₹ ${Shipping}`}</Text>
        </Flex>
        <Flex mb={3}>
          <Text>Coupon Discount</Text>
          <Spacer />
          <Text>Apply Coupon</Text>
        </Flex>
        <Divider border={"pink.100"} />
        <Flex mb={3} mt={2}>
          <b>Order Total</b>
          <Spacer />
          <b>₹ {SubTotal <= 499 ? SubTotal + Shipping : SubTotal}</b>
        </Flex>
        <Box mb={20}>
          <CartFooter />
        </Box>
      </Box>

      <Fixedbox
        total={SubTotal <= 499 ? SubTotal + Shipping : SubTotal}
        save={savemoney}
      />
    </>
  );
}
