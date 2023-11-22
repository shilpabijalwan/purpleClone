import {
  Box,
  Checkbox,
  Flex,
  Grid,
  Heading,
  Radio,
  RadioGroup,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import { useSearchParams } from "react-router-dom";
export default function Sortfilter({ brand }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [value, setValue] = React.useState(null);
  const intialOrder = searchParams.get("order");
  const [order, setOrder] = useState(intialOrder || "");
  // const handleSort = (e) => {
  //   console.log(e.target.value);
  //   setOrder(e.target.value);
  // };
  useEffect(() => {
    const params = {
      // category,
      // sort,
    };
    order && (params.order = order);

    setSearchParams(params);
  }, [order]);
  console.log(order);
  return (
    <Box
      // border={"2px solid pink"}
      py={5}
      m={"auto"}
      mb={10}
      w={{ lg: "85%" }}
      justifyContent={"space-evenly"}
      //
      color={"blue.400"}>
      <Box mb={5} textAlign={"center"}>
        <Heading size={"lg"}>{brand} Favs</Heading>
      </Box>

      <Grid
        // border={"1px solid blue"}
        templateColumns="repeat(6, 1fr)"
        overflowY={"scroll"}>
        <Accordion allowMultiple>
          <AccordionItem
          // border={"1px solid black"}
          >
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left" w={"100px"}>
                Categories All
              </Box>
              <AccordionIcon />
            </AccordionButton>

            <AccordionPanel pb={4} overflowY={"scroll"} h={"150px"}>
              <Stack spacing={2}>
                <Checkbox colorScheme="green">
                  Face Moisturizers & Day Creams
                </Checkbox>
                <Checkbox colorScheme="green">Skin Care Kits </Checkbox>
                <Checkbox colorScheme="green">Serums & Essences</Checkbox>
                <Checkbox colorScheme="green">Toners</Checkbox>
                <Checkbox colorScheme="green">
                  Face Pack, Masks and Peels
                </Checkbox>
                <Checkbox colorScheme="green">Sheet Mask</Checkbox>
                <Checkbox colorScheme="green">Lipbalm</Checkbox>
                <Checkbox colorScheme="green">Lipstick</Checkbox>
              </Stack>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>

        <Accordion allowMultiple>
          <AccordionItem
          // border={"1px solid black"}
          >
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left" w={"100px"}>
                Price Range All
              </Box>
              <AccordionIcon />
            </AccordionButton>

            <AccordionPanel pb={4} overflowY={"scroll"} h={"150px"}>
              <Stack spacing={2}>
                <Checkbox colorScheme="green">Rs. 100 And Below </Checkbox>
                <Checkbox colorScheme="green">Rs. 100 - Rs. 200 </Checkbox>
                <Checkbox colorScheme="green">Rs. 100 - Rs. 200 </Checkbox>
                <Checkbox colorScheme="green">Rs. 500 - Rs. 1000 </Checkbox>
              </Stack>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>

        <Accordion allowMultiple>
          <AccordionItem>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left" w={"100px"}>
                Benefits All
              </Box>
              <AccordionIcon />
            </AccordionButton>

            <AccordionPanel pb={4} overflowY={"scroll"} h={"150px"}>
              <Stack spacing={2}>
                <Checkbox colorScheme="green">Hydrating </Checkbox>
                <Checkbox colorScheme="green">Moisturizing</Checkbox>
                <Checkbox colorScheme="green">Nourishing</Checkbox>
                <Checkbox colorScheme="green">Sun Protection </Checkbox>
                <Checkbox colorScheme="green">Non-Sticky </Checkbox>
                <Checkbox colorScheme="green">Lightened Lips</Checkbox>
                <Checkbox colorScheme="green">Smoothening</Checkbox>
                <Checkbox colorScheme="green">Stops Hairfall</Checkbox>
              </Stack>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
        <Accordion allowMultiple>
          <AccordionItem>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left" w={"100px"}>
                Product Type
              </Box>
              <AccordionIcon />
            </AccordionButton>

            <AccordionPanel pb={4} overflowY={"scroll"} h={"150px"}>
              <Stack spacing={2}>
                <Checkbox colorScheme="green">Checkbox</Checkbox>
                <Checkbox colorScheme="green">Checkbox</Checkbox>
              </Stack>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
        <Accordion allowMultiple>
          <AccordionItem>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left" w={"100px"}>
                Skin Concern All
              </Box>
              <AccordionIcon />
            </AccordionButton>

            <AccordionPanel pb={4} overflowY={"scroll"} h={"150px"}>
              <Stack spacing={2}>
                <Checkbox colorScheme="green">Signs Of Ageing</Checkbox>
                <Checkbox colorScheme="green">Blackheads</Checkbox>
                <Checkbox colorScheme="green">Dark Circles</Checkbox>
                <Checkbox colorScheme="green">blemishes</Checkbox>
                <Checkbox colorScheme="green">Pigmentation</Checkbox>
                <Checkbox colorScheme="green">Wrinkles</Checkbox>
                <Checkbox colorScheme="green">Clogged Pores </Checkbox>
                <Checkbox colorScheme="green">Inflamed Skin</Checkbox>
                <Checkbox colorScheme="green">Scars</Checkbox>
                <Checkbox colorScheme="green">Uneven Skin Tone</Checkbox>
                <Checkbox colorScheme="green">Dead Skin Cells </Checkbox>
                <Checkbox colorScheme="green">Free Radicals</Checkbox>
              </Stack>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
        <Accordion allowMultiple>
          <AccordionItem>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left" w={"100px"}>
                Sort By Relevance
              </Box>
              <AccordionIcon />
            </AccordionButton>

            <AccordionPanel pb={4} overflowY={"scroll"} h={"150px"}>
              <Stack spacing={2}>
                <RadioGroup onChange={setOrder} value={order}>
                  <Radio
                    name="order"
                    colorScheme="green"
                    value="asc"
                    defaultChecked={order === "asc"}>
                    Price:low to high
                  </Radio>
                  <Radio
                    name="order"
                    colorScheme="green"
                    value="desc"
                    defaultChecked={order === "desc"}>
                    Price: high to low
                  </Radio>
                </RadioGroup>
              </Stack>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Grid>
    </Box>
  );
}
// Sort By
// Relevance
