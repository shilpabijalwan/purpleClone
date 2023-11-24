import React from "react";
import { useSelector } from "react-redux";
import { Link, Navigate, useNavigate } from "react-router-dom";
import MyModal from "../Components/Modal/Modal";
export function PrivateRouter({ children }) {
  // const navigate = useNavigate();
  const userdata = useSelector((store) => {
    return store.authReducer;
  });

  return userdata.istrue ? children : <Navigate to={"/login"} />;
}

export default PrivateRouter;
