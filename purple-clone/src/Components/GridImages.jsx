import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import { Grid, Image } from "@chakra-ui/react";
import DataFetched from "../FetchData/DataFetched";
import { brandimgs } from "./Urls/url";
import { useDispatch, useSelector } from "react-redux";
import { GET_Grid_DATA } from "../Redux/GridImgs/action";

export default function GridImages() {
  const dispatch = useDispatch();

  const store = useSelector((res) => {
    return res.GridReducer;
  });
  console.log(store);

  const data = store.gridImg;
  useEffect(() => {
    dispatch(GET_Grid_DATA);
  }, []);

  // console.log(data);

  return (
    <Grid
      // border={"1px solid blue"}
      templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(2, 1fr)" }}
      m={"auto"}
      w={{ base: "90%", md: "80%" }}>
      {data.map((ele, i) => (
        <Link
          to={`/brandDetail/${ele.id}/${ele.brand}`}
          key={Math.random().toString(22).substring(2, 23)}>
          <Image src={ele.image} w={"600px"} m={"auto"} key={Date.now()} />
        </Link>
      ))}
    </Grid>
  );
}
