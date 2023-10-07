import {
  Box,
  Checkbox,
  Flex,
  Grid,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";

export default function Sortfilter({ brand }) {
  return (
    <Box
      border={"2px solid pink"}
      py={5}
      m={"auto"}
      mb={10}
      w={"85%"}
      justifyContent={"space-evenly"}
      //
      color={"blue.400"}>
      <Box mb={5} textAlign={"center"}>
        <Heading size={"lg"}>{brand} Favs</Heading>
      </Box>

      <Grid
        border={"1px solid blue"}
        // display={"Grid"}
        templateColumns="repeat(6, 1fr)">
        <Accordion allowMultiple>
          <AccordionItem border={"1px solid black"}>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left" w={"100px"}>
                Categories All
              </Box>
              <AccordionIcon />
            </AccordionButton>

            <AccordionPanel pb={4}>
              <Stack spacing={5}>
                <Checkbox colorScheme="green">Checkbox</Checkbox>
                <Checkbox colorScheme="green">Checkbox</Checkbox>
              </Stack>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>

        <Accordion allowMultiple>
          <AccordionItem border={"1px solid black"}>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left" w={"100px"}>
                Price Range All
              </Box>
              <AccordionIcon />
            </AccordionButton>

            <AccordionPanel pb={4}>
              <Stack spacing={5}>
                <Checkbox colorScheme="green">Checkbox</Checkbox>
                <Checkbox colorScheme="green">Checkbox</Checkbox>
              </Stack>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>

        <Accordion allowMultiple>
          <AccordionItem border={"1px solid black"}>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left" w={"100px"}>
                Benefits All
              </Box>
              <AccordionIcon />
            </AccordionButton>

            <AccordionPanel pb={4}>
              <Stack spacing={5}>
                <Checkbox colorScheme="green">Checkbox</Checkbox>
                <Checkbox colorScheme="green">Checkbox</Checkbox>
              </Stack>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
        <Accordion allowMultiple>
          <AccordionItem border={"1px solid black"}>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left" w={"100px"}>
                Product Type
              </Box>
              <AccordionIcon />
            </AccordionButton>

            <AccordionPanel pb={4}>
              <Stack spacing={5}>
                <Checkbox colorScheme="green">Checkbox</Checkbox>
                <Checkbox colorScheme="green">Checkbox</Checkbox>
              </Stack>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
        <Accordion allowMultiple>
          <AccordionItem border={"1px solid black"}>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left" w={"100px"}>
                Skin Concern All
              </Box>
              <AccordionIcon />
            </AccordionButton>

            <AccordionPanel pb={4}>
              <Stack spacing={5}>
                <Checkbox colorScheme="green">Checkbox</Checkbox>
                <Checkbox colorScheme="green">Checkbox</Checkbox>
              </Stack>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
        <Accordion allowMultiple>
          <AccordionItem border={"1px solid black"}>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left" w={"100px"}>
                Sort By Relevance
              </Box>
              <AccordionIcon />
            </AccordionButton>

            <AccordionPanel pb={4}>
              <Stack spacing={5}>
                <Checkbox colorScheme="green">Checkbox</Checkbox>
                <Checkbox colorScheme="green">Checkbox</Checkbox>
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
