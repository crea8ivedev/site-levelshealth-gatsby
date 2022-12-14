import React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import parse from "html-react-parser";
import MainLayout from "../components/Layout/MainLayout";

const Home = () => {
  const { categories, recentPosts, otherPost } = useStaticQuery(graphql`
    query {
      categories: allWpCategory(filter: {count: {gt: 30}}) {
        nodes {
          id
          name
          slug
          uri
        }
      }
      recentPosts: allWpPost(sort: {fields: date, order: DESC}, limit: 1) {
        nodes {
          id
          title
          uri
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
      otherPost: allWpPost(skip:1, sort: {fields: date, order: DESC}) {
        nodes {
          id
          title
          uri
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

  const featurePost = recentPosts.nodes.length > 0 ? recentPosts.nodes[0] : null;

  return (
    <MainLayout>
      <section className='banner-wrapper pt-[126px] lgscreen:pt-[75px] pb-50 bg-gradient'>
        <div className='blog-category lg:pt-30 pt-20'>
          <div className='lg:w-10/12 m-auto'>
            <ul className='flex flex-wrap justify-center gap-x-4 desktop2:gap-x-0 gap-y-4 lgscreen:gap-y-2'>
              <li>
                <a href="#" className="active">
                  All
                </a>
              </li>
              {
                categories.nodes.map((category) => (
                  <li key={category.id}>
                    <a href={category.uri}>
                      {category.name}
                    </a>
                  </li>
                ))
              }
            </ul>
          </div>
        </div>

        {
          featurePost && (
            <div className='banner-info lg:my-30 my-25 '>
              <div className='container-fluid'>
                <div className='border-1 border-black border-opacity-20 rounded-10 bg-black bg-opacity-[0.03] pl-60 xlscreen:pl-30 lgscreen:pl-0'>
                  <div className='flex flex-wrap items-center'>
                    <div className='lg:w-7/12 w-full'>
                      <div className='banner-blog-content lgscreen:py-30 lgscreen:px-30 smscreen2:px-15'>
                        <ul>
                          {
                            featurePost.categories.nodes.map((postCat) => (
                              <li key={postCat.id}>{postCat.name}</li>
                            ))
                          }
                        </ul>
                        <h1 className='lg:text-57 xlscreen:text-[47px] lgscreen:text-[30px] lgscreen:leading-[35px] text-black font-400 tracking-minus-0.3em max-w-[431px] leading-[57px] mt-30 smscreen2:mt-15'>
                          <Link to={featurePost?.uri}>{featurePost.title}</Link>
                        </h1>
                        <div className='btm-text mt-30 flex flex-col'>
                          <span className='text-14 font-700 text-black tracking-minus-0.1em'>{featurePost.author.name}</span>
                          <span className='text-12 tracking-minus-0.1em text-gray-100'>11 min read</span>
                        </div>
                      </div>
                    </div>
                    <div className='lg:w-5/12 w-full'>
                      {/* <div className='img gatsby-image-wrapper'>
                        <img src="../images/banner-img.jpg" alt="The ultimate guide to metabolic health" />
                      </div> */}
                      <Link to={featurePost?.uri}>
                        <GatsbyImage
                          image={getImage(featurePost.featuredImage.node)}
                          alt={featurePost.featuredImage.node.altText}
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        }

      </section>
      {
        otherPost.nodes.length > 0 && (
          <section className="other-post-list container mx-auto">
            <h3 className="my-15 px-20 text-57">Other Post</h3>
            <ul className="flex flex-row flex-wrap py-30">
              {
                otherPost.nodes.slice(0, 5).map((post) => (
                  <li className="w-3/12 p-20" key={post.id}>
                    <Link to={post.uri}>
                      <div>
                        <GatsbyImage
                          image={getImage(post.featuredImage.node)}
                          alt={post.featuredImage.node.altText}
                        />
                      </div>
                      <div>
                        <h4>
                          {post.title}
                        </h4>
                      </div>
                    </Link>
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
