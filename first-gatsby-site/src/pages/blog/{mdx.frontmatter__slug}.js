import * as React from "react";
import { graphql } from "gatsby";
import Seo from "../../components/seo";
import CustomLayout from "../../components/layout";

const BlogPost = ({ data, children }) => {
  console.log(children);
  return (
    <CustomLayout pageTitle={data.mdx.frontmatter.title}>
      <p>{data.mdx.frontmatter.title}</p>
      {children}
    </CustomLayout>
  );
};

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
      }
    }
  }
`;

export const Head = ({ data }) => <Seo title={data.mdx.frontmatter.title} />;

export default BlogPost;
