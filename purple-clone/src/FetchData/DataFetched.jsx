import axios from "axios";
import React, { useEffect, useState } from "react";

export default function DataFetched(url) {
  return axios.get(url);
}
