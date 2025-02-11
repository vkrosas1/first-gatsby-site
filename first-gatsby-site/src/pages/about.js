import * as React from "react";
import CustomLayout from "../components/layout";
import Seo from "../components/seo";

const AboutMePage = () => {
  return (
    <CustomLayout pageTitle="About page">
      <h1>Hi my name is Vivi</h1>
      <p>this is my simple webpage</p>
    </CustomLayout>
  );
};

export const Head = () => <Seo title="About ME PAGE" />;

export default AboutMePage;
