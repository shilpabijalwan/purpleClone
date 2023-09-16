import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import AppNAtificationBar from "../Components/AppNAtificationBar";
import { Box } from "@chakra-ui/react";
import SearchBar from "../Components/SearchBar";
export default function Homepage() {
  const [AppBar, SetAppBar] = useState(true);
  return (
    <>
      {AppBar ? <AppNAtificationBar appbar={SetAppBar} /> : ""}
      <Box></Box>
      <Navbar appbar={AppBar} />
      <SearchBar />
      <Footer />
    </>
  );
}
