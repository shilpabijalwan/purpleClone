import { Box, Grid, Image, useToast } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import GenricCompo from "../Pages/BrandLandingPage/GenericComp";
import DataFetched from "../FetchData/DataFetched";
import AddToCart from "./AddToCart";
import { AddtoCart } from "../Redux/Cart/action";
import { Add_To_WishList } from "../Redux/Wishlist/action";
import { useDispatch } from "react-redux";

export default function ALLProductGrid() {
  const toast = useToast();
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const handleAdd = (data) => {
    dispatch(AddtoCart(data));
    Toast("Add to Wishlist");
  };
  function Toast(title) {
    return toast({
      title: title,
      description: "Product Added To Cart.",
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  }
  const handlewishlist = (data) => {
    dispatch(Add_To_WishList(data));
    Toast("Add to Cart");
  };
  useEffect(() => {
    DataFetched("https://server-sepia-tau.vercel.app/shopAllProduct").then(
      (res) => {
        setData(res.data);
      }
    );
    // console.log(data);
  });

  return (
    <Grid
      //   border={"1px solid blue"}
      templateColumns={{ base: "repeat(2, 1fr)", lg: "repeat(4, 1fr)" }}
      m={"auto"}
      gap={5}

      //   w={{ base: "90%", md: "80%" }}
    >
      {data?.map((ele) => (
        <Box boxShadow={"md"} pb={5} key={ele.id}>
          <GenricCompo
            data={ele}
            key={ele.id}
            handleAdd={handleAdd}
            handlewishlist={handlewishlist}
          />
        </Box>
      ))}
    </Grid>
  );
}
