import React, { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import PageNavigation from "../../Components/PageNavigation";

import { useParams } from "react-router-dom";
import { Box, Heading, Image, Text } from "@chakra-ui/react";

import AllProducts from "./AllProducts";
import Sortfilter from "../../SortFilter/Sortfilter";

import DataFetched from "../../FetchData/DataFetched";

export default function Brands() {
  const [data, setData] = useState({});
  const { id } = useParams();

  useEffect(() => {
    DataFetched(
      `https://tan-frail-hummingbird.cyclic.app/grid_Brands/${id}`
    ).then((res) => {
      setData(res.data);
    });
  }, []);
  // console.log(data);

  return (
    <Box border={"2px solid red"}>
      <Navbar />
      <Box
        //   border={"1px solid blue"}

        w={{ base: "90%", md: "85%" }}
        m={"auto"}>
        <Box py={5} m={"auto"} w={"85%"}>
          <PageNavigation name={data.brand} />
        </Box>

        {data.Brandbanner?.map((ele) => {
          return (
            <Box w={"100%"} mb={10}>
              <Image src={ele.img} key={ele.id} m={"auto"} />
            </Box>
          );
        })}
      </Box>
      <Box border={"1px solid blue"}>
        <Sortfilter brand={data.brand} />
      </Box>
      {data.brand == "Swiss Beauty" && <AllProducts />}

      <Footer />
    </Box>
  );
}
