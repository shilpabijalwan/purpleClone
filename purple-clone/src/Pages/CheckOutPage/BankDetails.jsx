import {
  Box,
  Button,
  Checkbox,
  Divider,
  Flex,
  Image,
  Radio,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import Navbar from "../../Components/Navbar";
import { Link } from "react-router-dom";
import CashOndel from "./CashOndel";
import SliderBar from "../TopSlider/SliderBar";

export default function BankDetails() {
  const [check, setCheck] = useState(false);

  const handleChange = (e) => {
    // console.log(e.target.checked);
    setCheck(e.target.checked);
  };
  console.log(check);
  const bankActive = true;
  return (
    <>
      <Navbar />
      <Box
        // border={"1px solid black"}
        w={"100%"}
        bg={"#EEF5FC"}>
        <Stack
          // border={"1px solid black"}

          w={{ base: "95%", md: "77%", lg: "55%" }}
          m={"auto"}
          pt={10}
          gap={5}
          boxShadow={"2xl"} >
          <SliderBar bankActive={bankActive} />
          <Text mt={5} px={5} fontWeight={500} fontSize={16}>
            UPI/BHIM
          </Text>
          <Box px={10} py={5} boxShadow={"2xl"} mb={5}>
            <Link to={"#"}>
              <b style={{ color: "#3B48F7" }}>ADD NEW UPI ID</b>
            </Link>
            <Text>You need to have a register upi id</Text>
          </Box>
          <Text mt={5} px={5} fontWeight={500} fontSize={16}>
            CREDIT & DEBIT CARD
          </Text>
          <Box px={10} py={5} boxShadow={"2xl"} mb={5}>
            <Link to={"#"}>
              <b style={{ color: "#3B48F7" }}>ADD NEW CARD </b>
            </Link>
            <Flex gap={3}>
              <Box w={"170px"} mt={5}>
                <Image
                  src="https://media6.ppl-media.com/mediafiles/ecomm/promo/1557729166_cards.png"
                  // w={"160px"}
                  m={"auto"}
                />
              </Box>
            </Flex>
          </Box>

          <Text mt={5} px={5} fontWeight={500} fontSize={16}>
            WALLETS
          </Text>
          <Box px={10} py={5} boxShadow={"2xl"} mb={5}>
            <Flex>
              <Box w={"50px"} border={"1px solid gray"} mt={5}>
                <Image src="https://media6.ppl-media.com/mediafiles/ecomm/promo/1554965307_paytm.png" />
              </Box>
              <Text mt={5} px={5} fontWeight={500} fontSize={14}>
                Paytm Wallet
              </Text>
              <Spacer />
              <Button color="#3B48F7">Link Account</Button>
            </Flex>
            <Divider py={4} />
            <Flex pb={5}>
              <Box w={"50px"} border={"1px solid gray"} mt={5}>
                <Image
                  src="https://media6.ppl-media.com/mediafiles/ecomm/promo/1554965307_mobikwik.png"
                  w={"30px"}
                  m={"auto"}
                />
              </Box>

              <Text mt={5} px={5} fontWeight={500} fontSize={14}>
                Mobikwik
              </Text>
              <Spacer />
              <Button color="#3B48F7">Link Account</Button>
            </Flex>
          </Box>

          {/* ___________________________________________________________ */}

          <Text mt={5} px={5} fontWeight={500} fontSize={16}>
            NET BANKING
          </Text>
          <Box px={10} py={5} boxShadow={"2xl"} mb={5}>
            <Flex gap={10}>
              <Box
                w={"50px"}
                // border={"1px solid black"}
              >
                <Image
                  m={"auto"}
                  src="https://media6.ppl-media.com/mediafiles/ecomm/promo/1554965308_sbi.png"
                  w={"70%"}
                />
                <Text
                  textAlign={"center"}
                  mt={2}
                  fontWeight={500}
                  fontSize={14}>
                  SBI
                </Text>
              </Box>

              <Box
                w={"50px"}
                // border={"1px solid black"}
              >
                <Image
                  m={"auto"}
                  src="https://media6.ppl-media.com/mediafiles/ecomm/promo/1554965305_hdfc.png"
                  w={"70%"}
                />
                <Text
                  textAlign={"center"}
                  mt={2}
                  fontWeight={500}
                  fontSize={14}>
                  HDFC
                </Text>
              </Box>
              <Box
                w={"50px"}
                // border={"1px solid black"}
              >
                <Image
                  m={"auto"}
                  src="https://media6.ppl-media.com/mediafiles/ecomm/promo/1554965305_icici.png"
                  w={"70%"}
                />
                <Text
                  textAlign={"center"}
                  mt={2}
                  fontWeight={500}
                  fontSize={14}>
                  ICICI
                </Text>
              </Box>
              <Box
                w={"50px"}
                // border={"1px solid black"}
              >
                <Image
                  m={"auto"}
                  src="https://media6.ppl-media.com/mediafiles/ecomm/misc/1516691298_axis-bank.jpg"
                  w={"70%"}
                  borderRadius={25}
                  //
                />

                <Text
                  textAlign={"center"}
                  mt={2}
                  fontWeight={500}
                  fontSize={14}>
                  AXIS
                </Text>
              </Box>
              <Box
                w={"50px"}
                // border={"1px solid black"}
              >
                <Image
                  m={"auto"}
                  src="https://media6.ppl-media.com/mediafiles/ecomm/promo/1560173529_kotak_logo.png"
                  w={"70%"}
                />
                <Text
                  textAlign={"center"}
                  mt={2}
                  fontWeight={500}
                  fontSize={14}>
                  KOTAK
                </Text>
              </Box>
            </Flex>
            <Divider />
            <Text
              mt={5}
              px={5}
              color={"#3B48F7"}
              fontWeight={500}
              fontSize={14}>
              More banks
            </Text>
          </Box>
          <Text mt={5} px={5} fontWeight={500} fontSize={16}>
            CASH ON DELIVERY
          </Text>
          <Box px={10} py={5} boxShadow={"2xl"}>
            <Flex mx={5}>
              <Box w={"30px"} mt={5}>
                <Image src="https://media4.ppl-media.com/mediafiles/ecomm/misc/1454330203_cod-logo.png" />
              </Box>
              <Text mt={5} px={5} fontWeight={500} fontSize={14}>
                Pay on delivery
              </Text>
              <Spacer />
              <Checkbox
                colorScheme="linkedin"
                onChange={(e) => handleChange(e)}></Checkbox>
            </Flex>
            {check ? <CashOndel /> : ""}
            <Flex mx={5}>
              <Box w={"30px"} mt={5}>
                <Image src="https://media6.ppl-media.com/mediafiles/ecomm/promo/1554881899_securityshield.png" />
              </Box>
              <Text mt={5} px={5} fontWeight={500} fontSize={14}>
                100% Safe Payments
                <br />
                Genuin Product | Easy Returns
              </Text>
            </Flex>
          </Box>
        </Stack>
      </Box>
    </>
  );
}
