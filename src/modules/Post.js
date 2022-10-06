import React from "react";
import { graphql } from "gatsby";
import HeroSection from "../components/HeroSection";

const Post = ({ modules }) => {
  const components = {
    HeroSection
  }

  return (
    <>
      <HeroSection module={modules} />
    </>
  );
}

export default Post;
export const PostModulesFragment = graphql`
  fragment PostModulesFragment on WpPost {
   ...HeroSectionFragment
  }
`;