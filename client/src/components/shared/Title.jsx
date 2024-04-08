import React from "react";
import { Helmet } from "react-helmet-async";

const Title = ({
  title = "Elite Chat",
  description = "This is Chat App called Elite Chat",
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Helmet>
  );
};

export default Title;
