import React from "react";
import { BsHeart, BsCart2 } from "react-icons/bs";
import {
  Box,
  Flex,
  Text,
  IconButton,
  Stack,
  Collapse,
  Icon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useDisclosure,
  Image,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";

import PopOver from "./PopoverContent";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import MyModal from "./Modal/Modal";

import MenuList from "../Menu/Menu";
import MyMenuList from "../Menu/Menu";

export default function Navbar({ appbar, display }) {
  const { isOpen, onToggle } = useDisclosure();

  const count = useSelector((data) => {
    return data.cartReduced.cart.length;
  });
  // console.log(count);

  return (
    <Box
      zIndex={4}
      position={"sticky"}
      w="100%"
      top={appbar ? "60px" : 0}
      m={"auto"}
      bg={"white"}
      border={{
        base: "2px solid red", // 0px
        sm: "2px solid gray", // ~480px. em is a relative unit and is dependant on the font-size.
        md: "2px solid green", // ~768px imp
        lg: "2px solid purple", // ~992px
        xl: "2px solid orange", // ~1280px
        "2xl": "2px solid cyan",
      }}
      width={"100%"}
      px={{
        base: 1, // 0px
        sm: 5, // ~480px. em is a relative unit and is dependant on the font-size.
        md: 5, // ~768px imp
        lg: 5, // ~992px
        xl: 20, // ~1280px
        "2xl": 20,
      }}>
      <Flex
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}>
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}>
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>

        <Flex
          flex={{ base: 1 }}
          justify={{ base: "center", md: "start" }}
          // border={"1px solid black"}
        >
          <Link to={"/"}>
            <Image
              src="https://document-export.canva.com/2akXM/DAFth62akXM/8/thumbnail/0001.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQYCGKMUHWDTJW6UD%2F20231027%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231027T214907Z&X-Amz-Expires=89283&X-Amz-Signature=db451b467a4a79e61357138fd31a956da2a2ae7df70bec217e4efa87c10d228f&X-Amz-SignedHeaders=host&response-expires=Sat%2C%2028%20Oct%202023%2022%3A37%3A10%20GMT"
              h={50}
              // border={"1px solid black"}
            />
          </Link>
          <Flex display={{ base: "none", md: "flex" }} m={"auto"}>
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack
          w={{
            base: "50px", // 0px
            sm: "100px", // ~480px. em is a relative unit and is dependant on the font-size.
            md: "300px", // ~768px imp
            lg: "500px", // ~992px
            xl: "900px", // ~1280px
            "2xl": "900px",
          }}
          // border={"1px solid blue"}
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={{ base: 10, md: 5 }}>
          <Link to={"/wishlist"}>
            <Text
              display={{ base: "none", md: "inline-flex" }}
              fontSize={{
                base: "0px", // 0px
                sm: "23px", // ~480px. em is a relative unit and is dependant on the font-size.
                md: "23px", // ~768px imp
                lg: "30px", // ~992px
                xl: "35px", // ~1280px
                "2xl": "35px",
              }}
              fontWeight={400}
              variant={"link"}>
              <BsHeart />
            </Text>
          </Link>
          <Link to={"/cart"}>
            <Text
              display={{ md: "inline-flex" }}
              fontSize={{
                base: "23px", // 0px
                sm: "23px", // ~480px. em is a relative unit and is dependant on the font-size.
                md: "23px", // ~768px imp
                lg: "30px", // ~992px
                xl: "35px", // ~1280px
                "2xl": "35px",
              }}>
              <BsCart2 />
              {count ? (
                <Box
                  ml={4}
                  w={6}
                  h={6}
                  position={"absolute"}
                  top={2}
                  fontSize={10}
                  bg={"#E2D3EE"}
                  textAlign={"center"}
                  pt={1}
                  borderRadius={"50px"}
                  display={display}>
                  <b>{count}</b>
                </Box>
              ) : (
                ""
              )}
            </Text>
          </Link>

          {/* <MyModal /> */}
          <MyMenuList />
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

// **********************************2nd***************************
const DesktopNav = () => {
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const popoverContentBgColor = useColorModeValue("#EFF0FA");

  return (
    <>
      <Stack
        justifyContent={"space-evenly"}
        w={{
          base: "0px", // 0px
          sm: "300px", // ~480px. em is a relative unit and is dependant on the font-size.
          md: "500px", // ~768px imp
          lg: "800px", // ~992px
          xl: "900", // ~1280px
          "2xl": "900px",
        }}
        direction={"row"}
        spacing={{ base: 3, sm: 3, md: 3, lg: 3, xl: 10, "2xl": 10 }}

        // border={"1px solid black"}
      >
        {NAV_ITEMS.map((navItem) => (
          <Box key={Math.random().toString(30).substring(2, 28)}>
            <Popover trigger={"hover"} placement={"bottom-start"}>
              <PopoverTrigger>
                <Box
                  key={Math.random() * 290 + 5478.096}
                  as="a"
                  href={navItem.href ?? "#"}
                  fontSize={{
                    base: 3,
                    sm: 3,
                    md: 13,
                    lg: 13,
                    xl: 17,
                    "2xl": 17,
                  }}
                  fontWeight={500}
                  color={linkColor}
                  _hover={{
                    textDecoration: "none",
                    color: "#585FEE",
                  }}>
                  {navItem.label}
                </Box>
              </PopoverTrigger>
              {/* ****************************************************** */}

              {navItem.children && (
                <PopoverContent
                  boxShadow={"xl"}
                  bg={popoverContentBgColor}
                  minW={"4xl"}
                  mt={3}>
                  <Stack
                    direction={"row"}
                    spacing={{
                      base: 3,
                      sm: 3,
                      md: 3,
                      lg: 3,
                      xl: 5,
                      "2xl": 5,
                    }}>
                    {navItem.children?.map((child) => (
                      <PopOver key={Math.random() * 1330 * 78.096} {...child} />
                    ))}
                  </Stack>
                </PopoverContent>
              )}
            </Popover>
          </Box>
        ))}
      </Stack>
    </>
  );
};

// *******_______**********small screen***********_______********************_____*********** //
const MobileNav = () => {
  return (
    <Stack
      border={"1px solid black"}
      bg={useColorModeValue("white", "gray.800")}
      p={1}
      display={{ md: "none" }}>
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};
// *******_______*********************_______********************_____*********** //
const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack
      spacing={4}
      onClick={children && onToggle}
      border={"1px solid green"}>
      <Box
        border={"1px solid blue"}
        py={2}
        as="a"
        href={href ?? "#"}
        justifyContent="space-between"
        alignItems="center"
        _hover={{
          textDecoration: "none",
        }}>
        <Text
          fontWeight={600}
          color={useColorModeValue("gray.600", "gray.200")}>
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Box>
      {/* __________________________________________________ */}
      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          border={"1px solid green"}
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}>
          {children &&
            children.map((child) => (
              <Box
                as="a"
                key={Math.random() * 20 + 54.786}
                py={2}
                href={child.href}
                // border={"1px solid blue"}
              >
                {child.label}
              </Box>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

const NAV_ITEMS = [
  {
    label: "SHOP CATEGORIES",

    children: [
      {
        label2: "MakeUp",

        href: "#",

        CLEANSERS: [
          { title: "FACE MAKEUP" },
          { name: "Primer" },
          { name: "Concealer" },
          { name: "BB & CC Creams" },
          { name: "Foundation" },
          { name: "Compact" },
          { name: "Loose Powder" },
          { name: "Blush" },
          { name: "Highlighters & Illuminators" },
          { name: " Setting Sprays & Fixers" },
          { name: " Sindoor" },
          { name: " Makeup Remover" },
        ],
        TONER_FACEMISTS: [
          { title: "EYE MAKEUP" },
          { name: "Eyeliner" },
          { name: "Under eye Concealers" },
          { name: "Kajal" },
          { name: "Mascara" },
          { name: "False Eyelashes" },
          { name: "Eyebrow Enhancer" },
        ],
        MOISTURIZERS: [
          { title: "LIP MAKEUP" },
          { name: "Lipstick" },
          { name: "Liquid Lipstick" },
          { name: "Lip Crayon" },
          { name: "Lip Liner" },
          { name: "Lip Gloss" },
          { name: "Lip Stains & Tints" },
          { name: "Lip Balms & Treatments" },
        ],
        MASKS: [
          { title: "NAILS" },
          { name: "Nail Polish" },
          { name: "Gel Nail Polish" },
          { name: "Matte Nail Polish" },
          { name: "Top And Base Coat" },
          { name: "Nail Polish Remover" },
          { name: "Manicure & Pedicure Kits" },
        ],
        EYECARE: [
          { title: " BRUSHES & TOOLS" },
          { name: "Face Brushes" },
          { name: "Eye Brushes" },
          { name: "Lip Brushes" },
          { name: "Brush Sets" },
          { name: "Tweezers" },
          { name: "Mirror" },
          { name: "Lip Brushes" },
          { name: "Makeup Pouches" },
          { name: "Makeup Brush Cleaner" },
          { name: "Sharpener" },
        ],
        LIPCARE: [
          { title: "BY SKIN TONE" },
          { name: "Fair" },
          { name: "Dusky" },
          { name: "Ivory" },
          { name: "Wheatish" },
          { name: "Dark" },
        ],
      },

      {
        label2: "Skin Care",
        href: "#",

        CLEANSERS: [
          { title: "CLEANSERS" },
          { name: "Cleanser" },
          { name: "Scrubs & Exfoliators" },
          { name: "Makeup Remover" },
          { name: "Facial Wipes" },
          { name: "Face Wash" },
        ],

        TONER_FACEMISTS: [
          { title: "TONER & FACE MISTS" },
          { name: "Toner" },
          { name: "Face Mists" },
        ],
        MOISTURIZERS: [
          { title: "MOISTURIZERS" },
          { name: "Face Moisturizers & Day Creams" },
          { name: "Night Cream" },
          { name: "Serums & Essences" },
          { name: "Facial Oils" },
          { name: "BB & CC Cream" },
        ],
        MASKS: [
          { title: "MASKS" },
          { name: "Sheet Mask" },
          { name: "Face Mask, Packs & Peels" },
          { name: "EYE CARE" },
          { name: "Eye Masks & Patches" },
          { name: "Eye Serum" },
          { name: "Manicure & Pedicure Kits" },
        ],

        EYECARE: [
          { title: "EYE CARE" },
          { name: "Eye Cream" },
          { name: "Face Mask, Packs & Peels" },
          { name: "EYE CARE" },
          { name: "Eye Masks & Patches" },
          { name: "Eye Serum" },
          { name: "Eye Makeup Remover" },
        ],
        LIPCARE: [
          { title: "LIP CARE" },
          { name: "Lip Balm" },
          { name: "Lip Scrub" },
        ],
        BODYCARE: [
          { title: "BODY CARE" },

          { name: "Body Lotions & Moisturizers" },
          { name: "Body Creams & Body Butters" },
          { name: "Talc" },
          { name: "Body & Massage Oils" },
        ],
        BATH_SHOWER: [
          { title: "BATH & SHOWER" },
          { name: "Body Scrub, Polish & Exfoliant" },
          { name: "Bath Salts & Bubble Bath" },
          { name: "Body Scrub, Polish & Exfoliant" },
          { name: "Soap" },
        ],

        HAND_FOOTCARE: [
          { title: "Hand Wash & Soaps" },
          { name: "Hand Sanitizer" },
          { name: "Hand Cream" },
          { name: "Foot Creams and Scrubs" },
        ],
        MASSAGERSANDFACETOOLS: [
          { title: "MASSAGERS AND FACE TOOLS" },
          { name: "Massagers" },
          { name: "AROMATHERAPY" },
          { name: "Essential Oil" },
        ],

        GIFT_VALUESETS: [{ title: "GIFT & VALUE SETS" }],
        BYCONCERN: [
          { title: "BY CONCERN" },
          { name: "Dark Spots & Pigmentation" },
          { name: "Stretchmarks & Cellulite" },
          { name: "Fine Lines & Wrinkles" },
        ],
      },

      {
        label2: "Hair Care",

        href: "#",
        CLEANSERS: [
          { title: "SHAMPOO & CONDITIONERS" },
          { name: "Shampoo" },
          { name: "Dry Shampoo" },
          { name: "Conditioner" },
          { name: "NOURISHMENT" },
          { name: "Hair Oil" },
          { name: "Hair Serum" },
        ],

        TONER_FACEMISTS: [
          { title: "Hair Spa & Mask" },
          { name: "HAIR STYLING & TOOLS" },
          { name: "Hair Color" },
          { name: "Hair Spray" },
        ],
        MOISTURIZERS: [
          { title: "Styling Cream, Gel & Waxes" },
          { name: "Hair Serum" },
          { name: "Hair Brushes and Combs" },
          { name: "Hair Dryer" },
          { name: "Hair Straighteners" },
          { name: "Hair Roller and Curlers" },
        ],
        MASKS: [
          { title: "HAIR ACCESSORIES" },
          { name: "Hair Clips, Bands & More" },
          { name: "Face Mask, Packs & Peels" },
        ],
      },
      {
        label2: "Appliances",
        subLabel: "Up-and-coming Designers",
        href: "#",
      },
      {
        label2: "Personal Care",
        subLabel: "Up-and-coming Designers",
        href: "#",
      },
      {
        label2: "Men",
        subLabel: "Up-and-coming Designers",
        href: "#",
      },
      {
        label2: "Fragrance",
        subLabel: "Up-and-coming Designers",
        href: "#",
      },
      {
        label2: "Health&Wellness",
        subLabel: "Up-and-coming Designers",
        href: "#",
      },
      {
        label2: "Mom&Baby",
        subLabel: "Up-and-coming Designers",
        href: "#",
      },
    ],
  },

  // *************************************
  {
    label: "BRAND",
    children: [
      {
        label2: "Top Brand",

        href: "#",
        CLEANSERS: [
          { title: "Top Brands" },
          { name: "Good Vibes" },
          { name: "Maybelline" },
          { name: "NY Bae" },
          { name: "Faces Canada" },
          { name: "Alps Goodness" },
          { name: "Purplle" },
          { name: "DermDoc" },
          { name: "Carmesi" },
          { name: "Mamaearth" },
          { name: "Lakme" },
        ],
      },
      {
        label2: "Featured",

        href: "#",
        images: [
          { title: "Top Brands" },

          {
            name: "https://media6.ppl-media.com/mediafiles/ecomm/misc/1481097651_stay-quirky.jpg",
          },
          {
            name: "https://media6.ppl-media.com/mediafiles/ecomm/misc/1600314560_1502367566_loreal-paris.jpg",
          },
          {
            name: "https://media6.ppl-media.com/mediafiles/ecomm/misc/1549261794_nybae.jpg",
          },
          {
            name: "https://media6.ppl-media.com/mediafiles/ecomm/misc/1549261786_sugar.jpg",
          },

          {
            name: "https://media6.ppl-media.com/mediafiles/ecomm/misc/1549261790_faces.jpg",
          },
          {
            name: "https://media6.ppl-media.com/mediafiles/ecomm/misc/1549261795_plum.jpg",
          },
          {
            name: "https://media6.ppl-media.com/mediafiles/ecomm/misc/1549261792_kama-ayurveda.jpg",
          },
          {
            name: "https://media6.ppl-media.com/mediafiles/ecomm/misc/1599639593_clinique-logo-120x55.jpg",
          },
          {
            name: "https://media6.ppl-media.com/mediafiles/ecomm/misc/1580226290_mur.jpg",
          },
          {
            name: "https://media6.ppl-media.com/mediafiles/ecomm/misc/1599639493_mac-logo-120x55.jpg",
          },
          {
            name: "https://media6.ppl-media.com/mediafiles/ecomm/misc/1580226395_mamaearth-2.jpg",
          },
          {
            name: "https://media6.ppl-media.com/mediafiles/ecomm/misc/1599725027_colorbar-logo.jpg",
          },
        ],
      },
    ],
  },
  {
    label: "OFFER",
    href: "#",
  },
  {
    label: "NEW",
    href: "#",
  },
  {
    label: "SPLURGE",
    href: "#",
  },
  {
    label: "MAGAZINE",
    href: "#",
  },
  {
    label: "ELITE OFFERS",
    href: "#",
  },
];
