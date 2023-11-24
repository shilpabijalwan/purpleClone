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
                <ListCom
                  {...ele}
                  key={Math.random().toString(24).substring(2, 19)}
                />
              ))}
            </Box>

            <Box>
              {TONER_FACEMISTS?.map((ele) => (
                <ListCom
                  {...ele}
                  key={Math.random().toString(26).substring(2, 22)}
                />
              ))}
            </Box>
            <Box>
              {MASKS?.map((ele) => (
                <ListCom
                  {...ele}
                  key={Math.random().toString(29).substring(2, 11)}
                />
              ))}
            </Box>
            <Box>
              {MOISTURIZERS?.map((ele) => (
                <ListCom
                  {...ele}
                  key={Math.random().toString(17).substring(2, 13)}
                />
              ))}
            </Box>
            <Box>
              {EYECARE?.map((ele) => (
                <ListCom
                  {...ele}
                  key={Math.random().toString(10).substring(2, 19)}
                />
              ))}
            </Box>
            <Box>
              {LIPCARE?.map((ele) => (
                <ListCom
                  {...ele}
                  key={Math.random().toString(20).substring(2, 9)}
                />
              ))}
            </Box>
            <Box>
              {BODYCARE?.map((ele) => (
                <ListCom
                  {...ele}
                  key={Math.random().toString(15).substring(2, 9)}
                />
              ))}
            </Box>
            <Box>
              {BATH_SHOWER?.map((ele) => (
                <ListCom
                  {...ele}
                  key={Math.random().toString(24).substring(2, 9)}
                />
              ))}
            </Box>
            <Box>
              {MASSAGERSANDFACETOOLS?.map((ele) => (
                <ListCom
                  {...ele}
                  key={Math.random().toString(23).substring(2, 9)}
                />
              ))}
            </Box>
            <Box>
              {HAND_FOOTCARE?.map((ele) => (
                <ListCom
                  {...ele}
                  key={Math.random().toString(23).substring(2, 13)}
                />
              ))}
            </Box>
          </Grid>
          <Grid templateColumns="repeat(3, 1fr)" gap={6}>
            {images?.map((ele) => (
              <Box
                border={"1px solid gray"}
                key={Math.random().toString(33).substring(2, 36)}>
                <Image src={ele.name} w={"100%"} />
              </Box>
            ))}
          </Grid>
        </PopoverContent>
      </Popover>
    </Box>
  );
}
