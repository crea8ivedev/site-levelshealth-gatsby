import React, { useEffect } from "react";
import { graphql } from "gatsby";
import MainLayout from "../components/Layout/MainLayout";

const PostTemplate = (props) => {
  const post = props.data.post;

  return (
    <MainLayout>
      {post.id}
    </MainLayout>
  )
}

export default PostTemplate;
export const PostById = graphql`
  query postById ($id: String) {
    post: wpPost(id: { eq: $id }) {
      id
      uri
      link
    }
  }
`;