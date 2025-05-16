"use client";

import Spinner from "@/components/Spinner";
import React from "react";
import ClipLoader from "react-spinners/ClipLoader";

const override = {
  display: "block",
  margin: "100px auto",
};

const LoadingPage = ({ loading }) => {
  return <Spinner loading={loading} />;
};

export default LoadingPage;
