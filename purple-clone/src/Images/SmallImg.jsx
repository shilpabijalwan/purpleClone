import { Box, Image } from "@chakra-ui/react";
import React from "react";
const img = [
  {
    img: "https://media6.ppl-media.com/tr:w-640,ar-32-5,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1695801405_199_locked_web.jpg",
  },
  {
    img: "https://media6.ppl-media.com/tr:w-640,ar-32-5,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1695801377_99_locked_web.jpg",
  },
];
export default function SmallImg() {
  return (
    <Box
      //   border={"1px solid blue"}
      display={"flex"}
      w={{ md: "85%" }}
      m={"auto"}
      mt={10}
      justifyContent={"space-around"}>
      {img.map((ele) => (
        <Box
          //   border={"1px solid black"}
          w={{
            base: "200px",
            sm: "220px",
            md: "350px",
            lg: "400px",
            "2xl": "600px",
          }}>
          <Image src={ele.img} w={"100%"} />
        </Box>
      ))}
    </Box>
  );
}
