import React from "react";
import { HeartIcon } from "@heroicons/react/24/outline";

const HeartHr = () => {
  return (
    <div
      style={{
        marginBottom: "-50px",
        padding: "40px 0px",
        backgroundColor: "white",
        color: "#718a8a",
      }}
      className="hr"
    >
      <div className="hr-block"></div>
      <HeartIcon className="heart" />
      <div className="hr-block"></div>
    </div>
  );
};

export default HeartHr;
