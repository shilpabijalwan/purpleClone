import {
  Box,
  Divider,
  Flex,
  Heading,
  Image,
  Spacer,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Navbar from "../../Components/Navbar";
import PriceDetail from "../CartPage/PriceDetail";
import Fixedbox from "../CartPage/Fixedbox";
import { InfoOutlineIcon } from "@chakra-ui/icons";
import { scroll } from "framer-motion";
import SliderBar from "../TopSlider/SliderBar";

export default function FinalCheckout() {
  const addresslength = useSelector((data) => {
    return data.addressReducer.adress;
  });
  console.log("addresslength", addresslength[0]);
  const cart = useSelector((data) => {
    return data.cartReduced.cart;
  });
  // console.log(cart);

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
 const bankActive = false;
 const paymentActive=true
  return (
    <>
      <Navbar />
      <Box
        // border={"1px solid black"}
        position={"sticky"}
        height={"600px"}
        overflow={"scroll"}
        w={{ base: "95%", md: "77%", lg: "55%" }}
        m={"auto"}
        mt={10}
        boxShadow={"2xl"}>
        <SliderBar bankActive={bankActive} paymentActive={paymentActive} />
        <Box p={5} pl={5} mt={6}>
          <Heading>{addresslength[0].name}</Heading>
        </Box>
        <Box p={5} pl={5} mb={10}>
          <Text>
            {addresslength[0].address} , {addresslength[0].state} ,
            {addresslength[0].city} , {addresslength[0].pin}.
            {addresslength[0].landmark}
          </Text>
          <b>mob: {addresslength[0].phone}</b>
          <br />
          <b>items ({cart.length})</b>
        </Box>

        {cart.map((ele) => (
          <Flex gap={7} mb={5} px={5} py={5}>
            <Image src={ele.image} w={"100px"} />

            <Text px={5} py={5}>
              {ele.discription}
            </Text>
          </Flex>
        ))}

        <Divider />

        <Box mt={3} px={5} py={2}>
          <Text fontSize={20} fontWeight="bold" mb={3}>
            Price Details
          </Text>
        </Box>

        <Flex mb={3} mt={2} px={5}>
          <Text>Order Total</Text>
          <Spacer />
          <b>₹ {SubTotal}</b>
        </Flex>

        <Flex mb={3} px={5}>
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
        <Divider />
        <Flex mb={10} mt={2} px={5} py={5}>
          <b>Total</b>
          <Spacer />
          <b>₹ {SubTotal <= 499 ? SubTotal + Shipping : SubTotal}</b>
        </Flex>

        <Fixedbox
          text={"Ship to this Address"}
          total={SubTotal <= 499 ? SubTotal + Shipping : SubTotal}
        />
      </Box>
    </>
  );
}
