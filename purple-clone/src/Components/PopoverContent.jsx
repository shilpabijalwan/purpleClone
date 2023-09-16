import {
  Box,
  Grid,
  Image,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import ListCom from "./ListCom";

export default function PopOver({
  CLEANSERS,
  images,
  label2,
  href,
  TONER_FACEMISTS,
  MOISTURIZERS,
  MASKS,
  EYECARE,
  LIPCARE,
  BODYCARE,
  BATH_SHOWER,
  HAND_FOOTCARE,
  MASSAGERSANDFACETOOLS,
}) {
  return (
    <Box my={1} as="a" href={href}>
      <Popover trigger={"hover"} placement={"bottom-start"}>
        <PopoverTrigger>
          <Text>{label2}</Text>
        </PopoverTrigger>

        <PopoverContent
          overflowY={"scroll"}
          border={"1px solid green"}
          display={"flex"}
          boxShadow={"xl"}
          p={4}
          minW={"3xl"}>
          <Grid
            // overflowY={"scroll"}
            py={1}
            // border={"1px solid pink"}
            templateColumns="repeat(3, 1fr)"
            gap={5}>
            <Box>
              {CLEANSERS?.map((ele) => (
                <ListCom {...ele} />
              ))}
            </Box>

            <Box>
              {TONER_FACEMISTS?.map((ele) => (
                <ListCom {...ele} />
              ))}
            </Box>
            <Box>
              {MASKS?.map((ele) => (
                <ListCom {...ele} />
              ))}
            </Box>
            <Box>
              {MOISTURIZERS?.map((ele) => (
                <ListCom {...ele} />
              ))}
            </Box>
            <Box>
              {EYECARE?.map((ele) => (
                <ListCom {...ele} />
              ))}
            </Box>
            <Box>
              {LIPCARE?.map((ele) => (
                <ListCom {...ele} />
              ))}
            </Box>
            <Box>
              {BODYCARE?.map((ele) => (
                <ListCom {...ele} />
              ))}
            </Box>
            <Box>
              {BATH_SHOWER?.map((ele) => (
                <ListCom {...ele} />
              ))}
            </Box>
            <Box>
              {MASSAGERSANDFACETOOLS?.map((ele) => (
                <ListCom {...ele} />
              ))}
            </Box>
            <Box>
              {HAND_FOOTCARE?.map((ele) => (
                <ListCom {...ele} />
              ))}
            </Box>
          </Grid>
          <Grid templateColumns="repeat(3, 1fr)" gap={6}>
            {images?.map((ele) => (
              <Box border={"1px solid gray"}>
                <Image src={ele.name} w={"100%"} />
              </Box>
            ))}
          </Grid>
        </PopoverContent>
      </Popover>
    </Box>
  );
}
