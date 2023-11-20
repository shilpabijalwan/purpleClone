import React from "react";
import { Add_Adress } from "./actionTypes";

export const AddAdressfun = (data) => {
  return { type: Add_Adress, payload: data };
};
