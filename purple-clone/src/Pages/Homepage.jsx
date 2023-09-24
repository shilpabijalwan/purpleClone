import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import AppNAtificationBar from "../Components/AppNAtificationBar";
import { Box, Image } from "@chakra-ui/react";
import SearchBar from "../Components/SearchBar";
import Carousel from "../Components/Carousel";
import axios from "axios";
import FeaturedProducts from "../Components/FeaturedProducts";
import Banners from "../Components/Banners";

export default function Homepage() {
  const [AppBar, SetAppBar] = useState(true);

  return (
    <>
      {AppBar ? <AppNAtificationBar appbar={SetAppBar} /> : ""}
      <Navbar appbar={AppBar} />
      <SearchBar />
      <Carousel />
      <Banners
        image={
          "https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1680602964_1280x272-web.jpg"
        }
      />
      <FeaturedProducts />
      <Footer />
    </>
  );
}
