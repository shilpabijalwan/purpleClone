import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import { Grid, Image } from "@chakra-ui/react";
import DataFetched from "../FetchData/DataFetched";
import { brandimgs } from "./Urls/url";

export default function GridImages() {
  const [data, setData] = useState([]);

  useEffect(() => {
    DataFetched(brandimgs).then((res) => {
      setData(res.data);
    });
  }, []);

  // console.log(data);

  return (
    <Grid
      // border={"1px solid blue"}
      templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(2, 1fr)" }}
      m={"auto"}
      w={{ base: "90%", md: "80%" }}>
      {data.map((ele, i) => (
        <Link to={`/brandDetail/${ele.id}/${ele.brand}`}>
          <Image src={ele.image} w={"600px"} m={"auto"} key={i} />
        </Link>
      ))}
    </Grid>
  );
}
