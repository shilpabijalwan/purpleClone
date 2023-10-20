import { Box, Image, Show, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import Discription, { DiscriptionForsmallScreen } from "./Discription";

export const ProductImages = ({ imgs = [{ image: "" }] }) => {
  // console.log(imgs);

  const [main, setMain] = useState("");
  //   console.log(main);

  return (
    <>
      <Box
        display={"flex"}
        flexWrap={"wrap"}
        gap={7}
        // border={"5px solid pink"}
        justifyContent={"space-evenly"}>
        <Box
          // border={"3px solid green"}
          w={{ base: "300px", sm: "400px", md: "120px", lg: "150px" }}
          h={"100%"}
          display={{ base: "flex", md: "block", lg: "block" }}
          gap={3}
          m={"auto"}>
          {imgs?.map((ele, i) => (
            <Box
              // border={"2px solid black"}
              key={i}
              marginBlock={1}>
              <Image
                border={"1px solid gray"}
                src={ele.image}
                onClick={() => setMain(ele.image)}
                w={{ base: "100px", lg: "150px" }}
                h={{ md: "100px", lg: "120px" }}
              />
            </Box>
          ))}
        </Box>

        <Box
          // display={{ sm: "block" }}
          m={"auto"}
          w={{ base: "45%", sm: "50%", md: "45%", lg: "60%" }}
          // border={"1px solid brown"}
        >
          {main ? (
            <Image
              // border={"3px solid green"}
              src={main}
              alt="main"
              w={"100%"}
              _hover={{ transform: "scale(1.03)" }}
            />
          ) : (
            <Image
              // border={"3px solid green"}
              src={imgs[0]?.image}
              w={"100%"}
              _hover={{ transform: "scale(1.03)" }}
            />
          )}
        </Box>
      </Box>
      <Show above="lg">
        <Discription />
        <DiscriptionForsmallScreen />
      </Show>
    </>
  );
};
