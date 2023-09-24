import { Box, Flex, Grid, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";

export default function Discription() {
  return (
    <Box mt={10} display={"flex"} gap={20} pl={3}>
      <Text fontWeight={"bold"} fontSize={19} _hover={{ color: "blue.400" }}>
        Details
      </Text>
      <Text fontWeight={"bold"} fontSize={19} _hover={{ color: "blue.400" }}>
        Reviews
      </Text>
      <Text fontWeight={"bold"} fontSize={19} _hover={{ color: "blue.400" }}>
        Related
      </Text>
    </Box>
  );
}
// *********************************************************************************************
export function DiscriptionForsmallScreen() {
  return (
    <Box mt={10} pl={2}>
      <Heading size={"lg"}>Description</Heading>
      <br />
      <b>Highlights</b>
      <Text mt={2}>
        Calm your frizz for hair that's oh-so-smooth with our Smooth and Serene
        Conditioner.
      </Text>
      <br />

      <b>Ideal For</b>

      <Grid
        justifyItems={"center"}
        templateColumns="repeat(4, 1fr)"
        gap={2}
        mt={2}
        // border={"1px solid green"}
      >
        <Box>
          <Image
            src="https://media6.ppl-media.com/mediafiles/ecomm/promo/1488462710_itchy-scalp-2.png"
            w={70}
          />

          <Text>Itchy Scalp</Text>
        </Box>
        <Box
        // border={"1px solid black"}
        >
          <Image
            m={"auto"}
            src="https://media6.ppl-media.com/static/img/cache/default/T.png"
            w={70}
          />
          <Text>Tangled Hair </Text>
        </Box>
        <Box
        //  border={"1px solid black"}
        >
          <Image
            src="https://media6.ppl-media.com/mediafiles/ecomm/promo/1488351916_dull-hair.png"
            w={70}
          />
          <Text>Dull Hair</Text>
        </Box>
        <Box
        // border={"1px solid black"}
        >
          <Image
            src="https://media6.ppl-media.com/mediafiles/ecomm/promo/1488352054_thin-hair.png"
            w={70}
          />
          <Text>Thin Hair</Text>
        </Box>
      </Grid>
      <br />
      <b>Benefits</b>
      <Grid
        justifyItems={"center"}
        templateColumns="repeat(3, 1fr)"
        gap={2}
        mt={2}
        // border={"1px solid green"}
      >
        <Box>
          <Image
            src="https://media6.ppl-media.com/mediafiles/ecomm/promo/1493041603_b_detangling.png"
            w={70}
            m={"auto"}
          />
          <Text>Detangling</Text>
        </Box>
        <Box>
          <Image
            src="https://media6.ppl-media.com/static/img/cache/default/H.png"
            w={70}
            m={"auto"}
          />
          <Text>Hair Smoothening</Text>
        </Box>
        <Box>
          <Image
            src="https://media6.ppl-media.com/mediafiles/ecomm/promo/1492791233_stopping-hairfall.png"
            w={70}
            m={"auto"}
          />
          <Text>Stops Hairfall</Text>
        </Box>
      </Grid>
      <Box w={"100%"} m={"auto"} mt={10} p={2}>
        <Heading>Description</Heading>
        <Text>
          -Calm your frizz for hair that's oh-so-smooth with our Smooth and
          Serene Conditioner.
        </Text>
        <Text>
          - Our anti-frizz conditioner is made with plant-based detanglers and
          infused with 100% organic coconut oil.
        </Text>
        <Text>
          - Our fast-rinse technology saves you from tangles and helps you save
          water.
        </Text>
        <Text>
          - Delicately surround your hair in a fragrant cloud of heirloom French
          lavender, sourced ethically from the Drome Provencale region of
          France.
        </Text>
        <Text>- How to use?</Text>
        <Text>
          -After shampooing, spread the conditioner through your gorgeous wet
          locks.
        </Text>
        <Text>- Avoid the roots and rinse.</Text>
        <Text>-Go easy on the tap!</Text>
        <Text>
          - For brilliantly beautiful hair, pair it with our Love Beauty and
          Planet Argan Oil and Lavender Smooth and Serene Shampoo.
        </Text>
        <Text>
          - Our goal is a carbon footprint so small, it's like we weren't even
          here.
        </Text>
        <Text>
          - We, at Love Beauty & Planet have started our journey by loading our
          products with natural goodness and packing it in bottles made from
          100% recycled plastic.
        </Text>
        <Text>
          - Our delicate scents are infused with natural and ethically sourced
          oils and extracts.
        </Text>
        <Text>
          - All our bottles are made up of 100% recycled plastic waste and are
          completely recyclable.
        </Text>
        <Text>
          - All our bottles are made up of 100% recycled plastic waste and are
          completely recyclable.
        </Text>
        <Text>
          - Our products are free from added harsh chemicals like parabens, dyes
          and phthalates.
        </Text>
        <Text>
          - Love Beauty & Planet is PETA Certified cruelty-free and vegan.
        </Text>
        <Text>- Globally, Love Beauty & Planet does not test on animals.</Text>
        <Text>
          -We are committed to acts of love that make our planet cleaner,
          greener and more beautiful.100% SMOOTHER, FRIZZ-FREE HAIR Love Beauty
          & Planet Argan Oil and Lavender conditioner leaves the hair feeling
          100% smoother and controls frizz for healthy, happy hair NATURAL
          INGREDIENTS Made with naturally derived ingredients like Argan Oil
          from Morocco that smoothens dry hair and the hand-picked French
          Lavender leaves a long-lasting calming fragrance 100% ORGANIC COCONUT
          OIL This paraben-free, pure Argan Oil & Lavender conditioner is also
          infused with 100% organic Coconut oil that is known to nourish hair
          deeply and add long-lasting moisture.
        </Text>
        <Text>
          - NO HARMFUL NASTIES This conditioner is free of phthalates, parabens,
          and dyes.
        </Text>
        <Text>
          - It's a vegan conditioner thats also suitable for color-treated hair
          ECO-FRIENDLY PACKAGING/YES, WE 3 OUR PLANET Our bottles are not only
          made up of 100% love but also 100% sustainable recycled plastic waste,
          and these bottles are recyclable!
        </Text>
        <Text>
          - FOR BEST RESULTS Use with the Love Beauty & Planet Argan Oil &
          Lavender Shampoo
        </Text>
      </Box>
    </Box>
  );
}
