import React from "react";
import { Helmet } from "react-helmet";

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keyword' content={keywords} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: "Dny95 eCommerce",
  description: "MERN STACK application",
  keywords:
    "MERN, MONGODB, MONGOOSE, REACT, REACTJS, NODE, NODEJS, JAVASCRIPT,JS",
};

export default Meta;
