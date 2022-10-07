import React, { useEffect } from "react";
import { graphql, useStaticQuery } from "gatsby";
import MainLayout from "../components/Layout/MainLayout";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import parse from "html-react-parser";
import ArticleType from "../modules/ArticleType";
import Header from "../components/Header";

const ArticleTypesTemplate = (props) => {
  return (
    <MainLayout>
      <ArticleType modules={props.data.article} />
    </MainLayout>
  )
}

export default ArticleTypesTemplate;
export const ArticleById = graphql`
  query articleById ($id: String) {
    article: wpType(id: { eq: $id }) {
      id
      slug
      ...ArticleTypeModulesFragment
    }
  }
`;