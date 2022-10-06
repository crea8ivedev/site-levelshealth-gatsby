import React, { useEffect } from "react";
import { graphql, useStaticQuery } from "gatsby";
import MainLayout from "../components/Layout/MainLayout";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import parse from "html-react-parser";
import Category from "../modules/Category";
import Header from "../components/Header";

const CategoriesTemplate = (props) => {
  return (
    <MainLayout>
      <Category modules={props.data.category} />
    </MainLayout>
  )
}

export default CategoriesTemplate;
export const CategoryById = graphql`
  query categoryById ($id: String) {
    category: wpCategory(id: { eq: $id }) {
      id
      slug
      ...CategoryModulesFragment
    }
  }
`;