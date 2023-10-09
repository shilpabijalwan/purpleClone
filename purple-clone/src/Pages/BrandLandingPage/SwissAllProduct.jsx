import GridImages from "../../Components/GridImages";
import React, { useEffect, useState } from "react";
import DataFetched from "../../FetchData/DataFetched";
import { Box } from "@chakra-ui/react";
import ALLProductGrid from "../../Components/ALLProductGrid";

export default function SwissAllProduct() {
  return (
    <Box w={"85%"} m={"auto"} mb={10}>
      <ALLProductGrid />
    </Box>
  );
}
