import React from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Divider,
  Button,
  Text,
} from "@chakra-ui/react";
import { BsEmojiSmile } from "react-icons/bs";
import MyModal from "../Components/Modal/Modal";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function MyMenuList() {
  const userdata = useSelector((store) => {
    return store.authReducer;
  });
  //   console.log(userdata);
  return (
    <Menu>
      <MenuButton>
        <Text
          //   display={{ md: "inline-flex" }}
          fontSize={{
            base: "23px", // 0px
            sm: "23px", // ~480px. em is a relative unit and is dependant on the font-size.
            md: "23px", // ~768px imp
            lg: "30px", // ~992px
            xl: "35px", // ~1280px
            "2xl": "35px",
          }}>
          <BsEmojiSmile />
        </Text>
      </MenuButton>
      <MenuList px={4} minWidth="280px">
        {/* <Button w={"90%"} ml={3} px={5} colorScheme="purple" mb={3}>
          Sign in
        </Button> */}
        {userdata.istrue ? "" : <MyModal />}

        {userdata.istrue ? "" : <MenuItem>New Customer?</MenuItem>}
        <Divider />
        <MenuItem>Your Order</MenuItem>
        <MenuItem>Your Account</MenuItem>
        <MenuItem>Elite Membership</MenuItem>

        <Link to={"/wishlist"}>
          <MenuItem>Your Wishlist</MenuItem>
        </Link>

        <MenuItem>Attend a Workshop</MenuItem>
        <MenuItem>Absolute Glam Creadit</MenuItem>
        <Divider />
        <MenuItem>Become a Seller?</MenuItem>
        <Text px={4} color={"red"}>
          Register Now.
        </Text>
      </MenuList>
    </Menu>
  );
}
