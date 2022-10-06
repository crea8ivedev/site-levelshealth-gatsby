import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";


const HeroSection = ({ module }) => {  
  return (    
    <section className='breadcrumb'>
      <div className='breadcrumb-bg'>
        <GatsbyImage
          image={getImage(module.featuredImage?.node)}
          alt={module.featuredImage?.node?.altText}
        />
      </div>
    </section>
  )
}

export default HeroSection;
export const HeroSectionFragment = graphql`
  fragment HeroSectionFragment on WpPost {
    featuredImage {
      node {
        altText
        gatsbyImage(formats: WEBP, placeholder: BLURRED, width: 1000)
        mediaItemUrl
      }
    }
  }
`;