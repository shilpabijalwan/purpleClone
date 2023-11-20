import React, { useState } from "react";
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  SliderMark,
  Box,
  Text,
} from "@chakra-ui/react";
import { AiOutlineCheck } from "react-icons/ai";
export default function SliderBar({ bankActive, paymentActive }) {
  const [sliderValue, setSliderValue] = useState(50);

  const isActive = false;
  const labelStyles = {
    mt: "3",
    ml: "-2.5",
    fontSize: "md",
  };
  return (
    <Box pt={6} pb={3} w={"85%"} m="auto">
      <Slider aria-label="slider-ex-6">
        <SliderMark value={1} {...labelStyles}>
          Login Details
        </SliderMark>

        <SliderMark value={45} {...labelStyles}>
          Delivery Address
        </SliderMark>
        <SliderMark value={90} {...labelStyles}>
          Payment Method
        </SliderMark>

        <SliderMark value={3} {...labelStyles}>
          <SliderMark
            value={sliderValue}
            textAlign="center"
            bg={"white"}
            borderRadius={"50%"}
            mt="-8"
            ml="1"
            w="7"
            h="7"
            border={"1px solid purple"}
            bgColor={"white"}>
            <Text mt={1} ml={1}>
              <AiOutlineCheck size={20} color="purple" />
            </Text>
          </SliderMark>
        </SliderMark>

        <SliderMark value={50} {...labelStyles}>
          <SliderMark
            value={sliderValue}
            textAlign="center"
            bg={"white"}
            borderRadius={"50%"}
            mt="-8"
            ml="1"
            w="7"
            h="7"
            border={"1px solid purple"}
            color={paymentActive ? "white" : ""}
            bgColor={paymentActive ? "cyan.700" : ""}>
            {!paymentActive ? (
              <Text mt={1} ml={1}>
                <AiOutlineCheck
                  size={20}
                  color={!paymentActive ? "purple" : ""}
                />
              </Text>
            ) : (
              "2"
            )}
          </SliderMark>
        </SliderMark>

        <SliderMark value={92} {...labelStyles}>
          <SliderMark
            value={sliderValue}
            textAlign="center"
            bg={"white"}
            borderRadius={"50%"}
            mt="-8"
            ml="1"
            w="7"
            h="7"
            border={"1px solid purple"}
            color={bankActive ? "white" : ""}
            bgColor={bankActive ? "cyan.700" : ""}>
            {bankActive ? "3" : "3"}
          </SliderMark>
        </SliderMark>
      </Slider>
    </Box>
  );
}
