import React, { useEffect } from "react";
import { graphql } from "gatsby";
import MainLayout from "../components/Layout/MainLayout";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import parse from "html-react-parser";

const PostTemplate = (props) => {
  const post = props.data.post;

  return (
    <MainLayout>
      <section className='breadcrumb'>
        <div className='breadcrumb-bg'>
          <GatsbyImage
            image={getImage(post.featuredImage?.node)}
            alt={post.featuredImage?.node?.altText}
          />
        </div>
      </section>
      <section className='breadcrumb-details mb-[50px] lg:mb-[90px]'>
        <div className='container-fluid'>
          <div className='max-w-[1070px] w-full mx-auto'>
            <div className='title text-center mb-[36px] lg:mb-[40px]'>
              <span>
                {post?.categories?.nodes?.[1]?.name}
              </span>
              <h1>
                {post?.title}
              </h1>
            </div>
          </div>
          <div className='max-w-[787px] w-full mx-auto'>
            <div className='text-center'>
              <h5>
                {post?.seo?.metaDesc}
              </h5>
            </div>
          </div>
        </div>
      </section>
      <article>
        <div className='container-fluid'>
          <div className='max-w-[786px] w-full mx-auto'>
            <div className='author'>
              <div className='avatar-details'>
                <div className='avatar'>
                  <img src={post?.author?.node?.avatar?.url || "avatar"} alt='stangel-rapha-glasses-2020-8007_V2' />
                </div>
                <div className='avatar-name'>
                  <h6>
                    {post?.author?.node?.name}
                  </h6>
                  <div className='author-category'>
                    <ico>
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.4006 11.7744L9.58762 16.76C9.54377 16.8805 9.46389 16.9847 9.35881 17.0583C9.25372 17.1319 9.12854 17.1714 9.00024 17.1714C8.87195 17.1714 8.74676 17.1319 8.64168 17.0583C8.5366 16.9847 8.45672 16.8805 8.41287 16.76L6.59992 11.7744C6.56871 11.6885 6.51907 11.6106 6.45449 11.546C6.38991 11.4814 6.31197 11.4318 6.22614 11.4006L1.24051 9.58762C1.11994 9.54377 1.01579 9.46389 0.942185 9.35881C0.868583 9.25372 0.829102 9.12854 0.829102 9.00024C0.829102 8.87195 0.868583 8.74676 0.942185 8.64168C1.01579 8.5366 1.11994 8.45672 1.24051 8.41287L6.22614 6.59992C6.31197 6.56871 6.38991 6.51907 6.45449 6.45449C6.51907 6.38991 6.56871 6.31197 6.59992 6.22614L8.41287 1.24051C8.45672 1.11994 8.5366 1.01579 8.64168 0.942185C8.74676 0.868583 8.87195 0.829102 9.00024 0.829102C9.12854 0.829102 9.25372 0.868583 9.35881 0.942185C9.46389 1.01579 9.54377 1.11994 9.58762 1.24051L11.4006 6.22614C11.4318 6.31197 11.4814 6.38991 11.546 6.45449C11.6106 6.51907 11.6885 6.56871 11.7744 6.59992L16.76 8.41287C16.8805 8.45672 16.9847 8.5366 17.0583 8.64168C17.1319 8.74676 17.1714 8.87195 17.1714 9.00024C17.1714 9.12854 17.1319 9.25372 17.0583 9.35881C16.9847 9.46389 16.8805 9.54377 16.76 9.58762L11.7744 11.4006C11.6885 11.4318 11.6106 11.4814 11.546 11.546C11.4814 11.6106 11.4318 11.6885 11.4006 11.7744Z" stroke="#5D6465" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                    </ico>
                    <p>
                      {post?.author?.node?.roles?.nodes?.[0]?.name || "Author"}
                    </p>
                  </div>
                </div>
              </div>
              <div className='time'>
                <ico>
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 16.5C13.1421 16.5 16.5 13.1421 16.5 9C16.5 4.85786 13.1421 1.5 9 1.5C4.85786 1.5 1.5 4.85786 1.5 9C1.5 13.1421 4.85786 16.5 9 16.5Z" stroke="#5D6465" stroke-width="1.5" stroke-miterlimit="10" />
                    <path d="M9 4.625V9H13.375" stroke="#5D6465" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </ico>
                <p>
                  {post?.blogSingle?.readingTime}
                </p>
              </div>
            </div>
          </div>
        </div>
      </article>
      <section className="post-details">
        {/* <div>
          <GatsbyImage
            image={getImage(post.blogSingle?.heroImage)}
            alt={post.blogSingle?.heroImage?.altText}
          />
        </div> */}
        {/* <div>{post?.categories?.nodes?.[1]?.name}</div>
        <div>{post?.title}</div>
        <div>{post?.seo?.metaDesc}</div> */}
        {/* <div>{post?.blogSingle?.readingTime}</div> */}
        {post.blogSingle.contentOverview?.length > 0 &&
          <div className="container-fluid mb-[40px] md:mb-[50px] lg:mb-[70px]">
            <div className="max-w-[786px] w-full mx-auto">
              <div className="bg-gray-300 rounded-[8px] p-[15px] sm:p-[30px]">
                {/* <img src={post?.author?.node?.avatar?.url || "avatar"} alt="avatar" /> */}
                {/* <div>{post?.author?.node?.name}</div>
              <div>{post?.author?.node?.roles?.nodes?.[0]?.name || "Author"}</div> */}
                <h6 className="block text-black text-[10px] leading-[12px] md:text-12 md:leading-14 tracking-0.12 uppercase mb-[24px] sm:mb-[30px]">
                  Article highlights
                </h6>
                <ul className="global_list">

                  {post.blogSingle.contentOverview.map((item, index) =>
                    <li>{item.item}</li>

                  )}

                </ul>
              </div>
            </div>
          </div>
        }
        {post?.content &&
          <div className="container-fluid">
            <div className="max-w-[786px] w-full mx-auto">
              <div className="post-content">{parse(post?.content.replace(/&nbsp;/g, ''))} </div>
            </div>
          </div>
        }
      </section>
    </MainLayout >
  )
}

export default PostTemplate;
export const PostById = graphql`
  query postById ($id: String) {
    post: wpPost(id: { eq: $id }) {
      id
      uri
      link
      title
      seo {
        metaDesc
      }
      content
      categories {
        nodes {
          name
          slug
        }
      }
      author {
        node {
          name
          url
          avatar {
            url
          }
          roles {
            nodes {
              name
              displayName
            }
          }
        }
      }
      blogSingle {
        heroImage {
          altText
          mediaItemUrl
          gatsbyImage(formats: WEBP, placeholder: BLURRED, width: 2000)
        }
        readingTime
        contentOverview {
          item
        }
      }
      featuredImage {
        node {
          altText
          gatsbyImage(formats: WEBP, placeholder: BLURRED, width: 1000)
          mediaItemUrl
        }
      }
    }
  }
`;