import React from "react";
import { graphql } from "gatsby";
import CategoryPostsWithImageContent from "../components/CategoryPostsWithImageContent";

const Category = ({ modules }) => {
  const components = {
    CategoryPostsWithImageContent
  }

  return (
    <>
      <CategoryPostsWithImageContent module={modules} />
    </>
  );
}

export default Category;
export const CategoryModulesFragment = graphql`
  fragment CategoryModulesFragment on WpCategory {
    ...CategoryPostsWithImageContentFragment
  }
`;