import React from "react";
import "./index.scss";

const Title = ({ title, align }) => {
  return <h1 className={`text-2xl font-bold  text-${align} my-2`}>{title}</h1>;
};

Title.defaultProps = {
  align: "center",
};
export default Title;
