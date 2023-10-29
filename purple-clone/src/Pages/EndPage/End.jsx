import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { AiOutlineCheck } from "react-icons/ai";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
export default function End() {
  return (
    <>
      <Navbar />
      <Stack
        w={"85%"}
        m="auto"
        // border={"1px solid blue"}
        gap={10}
        textAlign={"center"}
        mb={10}>
        <Text
          ml={1}
          border={"1px solid tomato"}
          w={8}
          h={8}
          borderRadius={30}
          bgColor={"tomato"}
          color={"white"}
          m={"auto"}
          mt={10}
          textAlign={"center"}>
          <AiOutlineCheck size={30} />
        </Text>
        <Heading color={"tomato"}>Congrats!</Heading>
        <Text fontSize={25}> Your order has been placed successfuly</Text>
        <Flex m={"auto"} gap={20}>
          <Button colorScheme="pink">TRACK ORDER</Button>
          <Button colorScheme="blue">NEED HELP</Button>
        </Flex>
        <Flex m={"auto"} gap={10}>
          <Text fontSize={18}>
            Don't miss out exciting offers and reward on your beauty spend
          </Text>
          <Button colorScheme="purple">JOIN ELITE</Button>
        </Flex>
        <Box m={"auto"} justifyContent={"center"} w={"500px"}>
          <b>Rate Your Shopping Experince</b>

          <Flex
            gap={5}
            display={"flex"}
            // justifyContent={"space-evenly"}
            w={"300px"}
            m={"auto"}
            mt={5}>
            <Image
              src="https://media6.ppl-media.com/mediafiles/ecomm/promo/1555924952_unhappy_n.png"
              w={"40px"}
              h={"40px"}
            />
            <Image
              src="https://media6.ppl-media.com/mediafiles/ecomm/promo/1555924950_disappointed_n.png"
              w={"40px"}
              h={"40px"}
            />
            <Image
              src="https://media6.ppl-media.com/mediafiles/ecomm/promo/1555924951_improve_n.png"
              w={"40px"}
              h={"40px"}
            />
            <Image
              src="https://media6.ppl-media.com/mediafiles/ecomm/promo/1555924951_happy_n.png"
              w={"40px"}
              h={"40px"}
            />
            <Image
              src="https://media6.ppl-media.com/mediafiles/ecomm/promo/1555924952_very-happy_n.png"
              w={"40px"}
              h={"40px"}
            />
          </Flex>
        </Box>
      </Stack>
      <Footer />
    </>
  );
}
