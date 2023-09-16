import {
  AspectRatio,
  Box,
  Center,
  Divider,
  Grid,
  GridItem,
  Heading,
  Hide,
  Image,
  Link,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { footerimgs } from "../Images/FooterImages";
import { wrap } from "framer-motion";

export default function Footer() {
  return (
    <>
      <Hide below="sm">
        <Grid
          color={"#363945"}
          templateColumns={"repeat(3, 1fr)"}
          // gap={6}
          // border={"1px solid pink"}
          gap={{ base: 2, sm: "3", md: "4", lg: "6", xl: 6, "2xl": 6 }}
          w={{
            base: "100%",
            sm: "100%",
            md: "100%",
            lg: "85%",
            xl: "80%",
            "2xl": "80%",
          }}
          // border={"1px solid blue"}
          m={"auto"}
          textAlign={"center"}>
          {footerimgs.map((ele) => (
            <>
              <Box boxShadow={"md"} px={3} py={3}>
                <Image src={ele.img} m={"auto"} />
                <br />
                <Link
                  style={{ textDecoration: "none" }}
                  _hover={{ color: "#5E50F7" }}>
                  <Heading size={"xs"}>{ele.Heading}</Heading>
                  <br />
                  <Text>{ele.Text}</Text>
                </Link>
              </Box>
            </>
          ))}
        </Grid>
      </Hide>
      {/* ***************************************** */}
      <Stack
        gap={6}
        // border={"1px solid black"}
        bg={"#F4F6F5"}
        direction={"row"}
        m={"auto"}
        mt={5}
        p={{ base: 0, md: 4 }}
        justifyContent={"space-around"}
        pt={2}
        pb={3}
        flexWrap={"wrap"}
        width={"100%"}>
        <Box w={{ base: "400px", md: "400px" }}>
          <Text fontSize={25} pb={2}>
            Spotlight
          </Text>

          <iframe
            width={"400px"}
            height="200"
            src="https://www.youtube.com/embed/NrI9d0XiP7M"
            title="How to find perfect foundation for your skin tone Ft. Purplle"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen></iframe>
          {/* </AspectRatio> */}
        </Box>
        <Box>
          <Text pb={2} fontSize={25}>
            Shop on the go
          </Text>
          {/* <AspectRatio maxW="560px" ratio={1}> */}
          <iframe
            width="400px"
            height="200"
            src="https://www.youtube.com/embed/NrI9d0XiP7M"
            title="How to find perfect foundation for your skin tone Ft. Purplle"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen></iframe>
          {/* </AspectRatio> */}
        </Box>
      </Stack>
      {/* *********************************************** */}
      <Box
        w={"85%"}
        m={"auto"}
        // border={"1px solid blue"}
        fontSize={13}
        px={10}
        mt={20}
        py={5}
        bg={"#F4F6F5"}>
        <Stack direction={"row"} gap={7}>
          <Heading size={10}>Makeup:</Heading>
          <Text>
            Primer / Lipstick / Foundation / Eyeshadow / Eyeliner / Kajal /
            Concealer / Nail Polish / Compact / Mascara / Highlighters &
            Illuminators / Makeup Remover / BB & CC Cream / Lip Balm & Treatment
            / Eyebrow Enhancer / Loose Powder / Blush / Makeup Kits / Setting
            Sprays & Fixers / Gel Nail Polish
          </Text>
        </Stack>
        <br />
        <Stack direction={"row"} gap={7}>
          <Heading size={10}>Skin</Heading>{" "}
          <Text display={"flex"}>
            Face Pack Masks & Peels / Serum & Facial Oils / Face Wash / Facial
            Kits / Face Cream / Moisturizers / Toner / Essential & Carrier Oils
            / Sheet Masks / Scrubs & Exfoliators / Lip Balm & Care / Sunscreen /
            Body Lotions & Moisturizers / Night Cream / Body Wash & Shower Gels
            / Hand Sanitizer / Face Mist / Lip Scrub / Body Creams & Body
            Butters / Hand Cream
          </Text>
        </Stack>
        <br />
        <Stack direction={"row"} gap={7}>
          <Heading size={10}>Hair:</Heading>{" "}
          <Text>
            Shampoo / Conditioner / Hair Serum / Hair Oil / Hair Spa & Masque /
            Hair Treatment / Baby Shampoo / Dry Shampoo / Hair Spa Kits / Hair
            Nourishment Kit / Hair Color / Hair Fiber / Hair Spray & Leave-In
            Cream / Volumizing / Hair Extensions / Mousse Gels & Wax / Hair
            Styling Tool / Hair Accessories
          </Text>
        </Stack>
        <br />
        <Stack direction={"row"} gap={7}>
          <Heading size={10}>Fragrance: </Heading>{" "}
          <Text>
            {" "}
            Perfumes / Deodrants & Roll-Ons / Solid Perfumes / Aftershaves /
            Colognes / Gift & Value Sets For Men / Gift & Value Sets For Women
          </Text>
        </Stack>
        <br />
        <Stack direction={"row"} gap={7}>
          <Heading size={10}>Brands:</Heading>
          <Text>
            Biotique / Wow / Dermdoc / Himalaya / Darling Isabella / Maybelline
            / Loreal / Good Vibes / NY Bae / Stay Quirky / Aroma Magic / Alps
            Goodness / Lotus / Purplle / Sugar / Nivea / Lakme
          </Text>
        </Stack>
        <br />
        <Stack direction={"row"} gap={7}>
          <Heading size={10}>DISCOVER:</Heading>{" "}
          <Text>
            Nail Art / Eye Makeup / Bridal Makeup / How To Do Makeup / Pimples /
            Stretchmark Removal / Best Eye Creams / Hairstyles / Burgundy Hair
            Colors / Best Facewashes For Men / Best Perfumes For Men / Skincare
            Tips .
          </Text>
        </Stack>
        <br />
        <Stack direction={"row"} gap={7}>
          <Heading size={10}>SHOP MAKEUP:</Heading> :
          <Text>
            Lakme / Maybelline / Colorbar / L'oreal / Revlon / Avon / Elle18.
          </Text>{" "}
        </Stack>
        <br />
        <Stack direction={"row"} gap={7}>
          <Heading size={10}>SKIN CARE:</Heading>
          <Text>
            Bio Oil / Olay / Neutrogena / Lotus Herbals / VLCC / Kaya / Vichy /
            Nivea / Gillette / Park Avenue.
          </Text>
        </Stack>
        <br />
        <Stack direction={"row"} gap={7}>
          {" "}
          <Heading size={10}>HAIR PRODUCTS:</Heading>{" "}
          <Text>
            {" "}
            L'oreal Professionnel / Schwarzkopf / Matrix Biolage / Livon Hair
            Gain / Biotique / Roots.
          </Text>{" "}
        </Stack>
        <br />
        <Stack direction={"row"} gap={7}>
          <Heading size={10}>ELECTRONICS:</Heading>{" "}
          <Text>:Philips / Wahl / Braun / Remington.</Text>
        </Stack>
        <br />{" "}
        <Stack direction={"row"} gap={7}>
          <Heading size={10}>FRAGRANCE:</Heading>{" "}
          <Text>
            {" "}
            Davidoff / Hugo Boss / Calvin Klein / Elizabeth Arden / Jaguar /
            Victoria's Secret.
          </Text>
        </Stack>
        <br />
        <Stack direction={"row"} gap={7}>
          <Heading size={10}>Blogs:</Heading>
          <Text>
            Home Remedies For Dandruff / How To Apply Eyeliner / Tips For Lips
            Care / Home Remedies For Hair Fall / Best Sunscreen Lotions / Home
            Remedies For Acne And Pimples / Home Remedies For Whiteheads / Home
            Remedies For Suntan / Serum For Oily, Dry And Sensitive Skin /
            Choose The Right Serum For Your Skin / Body Lotion For Dry Skin /
            Home Remedies For Hyperpigmentation
          </Text>
        </Stack>
        <br />
        <Stack direction={"row"} gap={7}>
          <Heading size={10}>Wellness:</Heading>{" "}
          <Text>
            Health & Wellness Supplements / Vitamins & Supplements / Weight
            Management Products / Family Nutrition / Sports Supplements / Green
            Tea / Herbal Tea / Healthy Juices & Drinks
          </Text>
        </Stack>
      </Box>
      {/* ********************************************* */}
      <Grid
        w={"85%"}
        m={"auto"}
        gridTemplateColumns={"repeat(4,1fr)"}
        // border={"1px solid blue"}
        fontSize={13}
        px={10}
        mt={6}
        py={5}
        // bg={"#F4F6F5"}
      >
        <Box>
          <Heading size={13}>PURPLLE</Heading>

          <Link
            style={{ textDecoration: "none" }}
            _hover={{ color: "#5E50F7" }}>
            <Text>About us</Text>
          </Link>
          <Link
            style={{ textDecoration: "none" }}
            _hover={{ color: "#5E50F7" }}>
            <Text>Our Team</Text>
          </Link>
          <Link
            style={{ textDecoration: "none" }}
            _hover={{ color: "#5E50F7" }}>
            <Text>Careers</Text>
          </Link>
          <Link
            style={{ textDecoration: "none" }}
            _hover={{ color: "#5E50F7" }}>
            <Text>Press</Text>
          </Link>
          <Link
            style={{ textDecoration: "none" }}
            _hover={{ color: "#5E50F7" }}>
            <Text>Sitemap</Text>
          </Link>
          <Link
            style={{ textDecoration: "none" }}
            _hover={{ color: "#5E50F7" }}>
            <Text>Compliance</Text>
          </Link>
        </Box>
        <Box>
          <Heading size={13}>PURPLLE BUSINESS</Heading>

          <Link
            style={{ textDecoration: "none" }}
            _hover={{ color: "#5E50F7" }}>
            <Text>Sell on Purplle</Text>
          </Link>
        </Box>
        <Box>
          <Heading size={13}>POLICY INFO</Heading>

          <Link
            style={{ textDecoration: "none" }}
            _hover={{ color: "#5E50F7" }}>
            <Text>Privacy Policy</Text>
          </Link>
          <Link
            style={{ textDecoration: "none" }}
            _hover={{ color: "#5E50F7" }}>
            <Text>Terms Of Use</Text>
          </Link>
          <Link
            style={{ textDecoration: "none" }}
            _hover={{ color: "#5E50F7" }}>
            <Text>Return & Cancellation Policy</Text>
          </Link>
        </Box>
        <Box>
          <Heading size={13}>NEED HELP?</Heading>

          <Link
            style={{ textDecoration: "none" }}
            _hover={{ color: "#5E50F7" }}>
            <Text>FAQ's</Text>
          </Link>
          <Link
            style={{ textDecoration: "none" }}
            _hover={{ color: "#5E50F7" }}>
            <Text>Contact Us</Text>
          </Link>
        </Box>
      </Grid>

      <Stack
        direction={{ base: "column", md: "row" }}
        // border={"1px solid blue"}
        color={"gray.600"}
        w={"100%"}
        // m={"auto"}
        justifyContent={"space-evenly"}
        mt={10}
        mb={5}
        gap={6}>
        <Box
          w={{ base: "80%", md: "40%" }}
          m={"auto"}
          display={"flex"}
          // border={"1px solid black"}
          justifyContent={"space-evenly"}>
          <Heading fontSize={14} pt={2}>
            PAYMENT
          </Heading>

          <Image src="https://media6.ppl-media.com/mediafiles/ecomm/promo/1499177379_tt.jpg" />
        </Box>

        <Box
          w={{ base: "80%", md: "40%" }}
          m={"auto"}
          display={"flex"}
          justifyContent={"space-evenly"}
          // border={"1px solid black"}
        >
          <Heading fontSize={14} pt={2}>
            CONNECT
          </Heading>
          <Box display={"flex"}>
            <Image
              src="https://img.icons8.com/?size=1x&id=118497&format=png"
              w={"30px"}
              h={"30px"}
            />
            <Image
              src="https://img.icons8.com/?size=1x&id=13963&format=png"
              w={"30px"}
              h={"30px"}
            />
            <Image
              src="https://img.icons8.com/?size=1x&id=13930&format=png"
              w={"30px"}
              h={"30px"}
            />
            <Image
              src="https://img.icons8.com/?size=1x&id=63676&format=png"
              w={"30px"}
              h={"30px"}
            />
            <Image
              src="https://img.icons8.com/?size=1x&id=32323&format=png"
              w={"30px"}
              h={"30px"}
            />
            <Image
              src="https://img.icons8.com/?size=1x&id=19318&format=png"
              w={"30px"}
              h={"30px"}
            />
            <Image
              src="https://img.icons8.com/?size=1x&id=63779&format=png"
              w={"30px"}
              h={"30px"}
            />
          </Box>
        </Box>
      </Stack>
      <Box width={"70%"} m={"auto"} mb={2}>
        <Text>Copyright © 2020 Purplle. All Rights Reserved.</Text>
      </Box>
    </>
  );
}
