import React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import parse from "html-react-parser";
import MainLayout from "../components/Layout/MainLayout";

const Home = () => {
  const { categories, featurePost, otherPost } = useStaticQuery(graphql`
    query {
      categories: allWpCategory(filter: {count: {gt: 0}}) {
        nodes {
          id
          name
        }
      }
      featurePost: allWpPost(sort: {fields: date, order: DESC}, limit: 1) {
        nodes {
          id
          title
          featuredImage {
            node {
              id
              altText
              gatsbyImage(formats: WEBP, placeholder: BLURRED, width: 1000)
            }
          }
          categories {
            nodes {
              id
              name
            }
          }
          author {
            node {
              name
            }
          }
        }
      }
      otherPost: allWpPost(skip:1, sort: {fields: date, order: DESC}, limit: 10) {
        nodes {
          id
          title
          featuredImage {
            node {
              id
              altText
              gatsbyImage(formats: WEBP, placeholder: BLURRED, width: 1000)
            }
          }
        }
      }
    }
  `);

  return (
    <MainLayout>
      <section className="border-t border-b p-10">
        <div>
          <ul className="flex gap-2">
            <li>
              All
            </li>
            {
              categories.nodes.map((category) => (
                <li key={category.id}>{category.name}</li>
              ))
            }
          </ul>
        </div>

        {/* {
          featurePost.nodes.length > 0 && (
            <div>

            </div>
          )
        } */}
      </section>
      {
        otherPost.nodes.length > 0 && (
          <section className="other-post-list">
            <ul className="flex">
              {
                otherPost.nodes.map((post) => (
                  <li className="w-6/12" key={post.id}>
                    <div>
                      <GatsbyImage 
                        image={getImage(post.featuredImage.nodes)}
                        alt={post.featuredImage.node.altText}
                      />
                    </div>
                    <div>
                      <h4>
                        {post.title}
                      </h4>
                    </div>
                  </li>
                ))
              }
            </ul>
          </section>
        )
      }
    </MainLayout>
  )
}

export default Home;