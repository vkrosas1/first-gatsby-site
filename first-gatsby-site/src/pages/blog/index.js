import * as React from "react";
import Seo from "../../components/seo";
import { Link, graphql } from "gatsby";
import CustomLayout from "../../components/layout";

const BlogPage = ({ data }) => {
  return (
    <CustomLayout pageTitle="My Blog Posts">
      <p>My cool posts will go in here</p>

      {data.allMdx.nodes.map((node) => (
        <article key={node.id}>
          <h2>
            <Link to={`/blog/${node.frontmatter.slug}`}>
              {node.frontmatter.title}
            </Link>
          </h2>
          <p>Posted at: {node.frontmatter.date}</p>
        </article>
      ))}
    </CustomLayout>
  );
};

export const blogQuery = graphql`
  query {
    allMdx(sort: { frontmatter: { date: DESC } }) {
      nodes {
        frontmatter {
          title
          date
          slug
        }
        id
        excerpt
      }
    }
  }
`;

export const Head = () => <Seo title="My Blog Posts" />;

export default BlogPage;
