import React from "react";
import { graphql } from "gatsby";
import CategoryPostsWithImageContent from "../components/CategoryPostsWithImageContent";

const ArticleType = ({ modules }) => {
  const components = {
    CategoryPostsWithImageContent
  }

  return (
    <>
      <CategoryPostsWithImageContent module={modules} />
    </>
  );
}

export default ArticleType;
export const ArticleTypeModulesFragment = graphql`
  fragment ArticleTypeModulesFragment on WpType {
    ...ArticleTypePostsWithImageContentFragment
  }
`;