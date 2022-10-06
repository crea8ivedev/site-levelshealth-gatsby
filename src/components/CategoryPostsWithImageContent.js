import React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";


const CategoryPostsWithImageContent = ({ module }) => {

  const { categories1 } = useStaticQuery(graphql`
  query{
    categories1: allWpCategory(filter: {count: {gt: 30}}) {
      nodes {
        id
        name
        slug
        uri
      }
    }
  }
`);
  return (
    <>
      <div className='blog-category pt-[165px] lgscreen:pt-[75px]'>
        <div className='lg:w-10/12 m-auto'>
          <ul className='flex flex-wrap justify-center gap-x-4 desktop2:gap-x-0 gap-y-4 lgscreen:gap-y-2'>
            <li>
              <a href="#" className="">
                All
              </a>
            </li>
            {
              categories1.nodes.map((category) => (
                <li key={category.id}>
                  <a href={category.uri} className={category.slug === module.slug ? "active" : ""}>
                    {category.name}
                  </a>
                </li>
              ))
            }
          </ul>
        </div>
      </div>

      <section className="recent_posts_top">
        <div className='container-fluid'>
          <h1 className="recent_posts_title">{module?.name}</h1>
          <div className='recent_posts_grid'>
            {module?.posts?.nodes?.length > 0 && module.posts.nodes.slice(0, 5).map((item, index) =>
              <div className='recent_posts_item'>
                <div className='post_wrapper'>
                  <div className='post_table'>
                    <a href='javascript:void(0);' className='post_table-cell'>
                      <div className='post_thumbnail'>
                        <GatsbyImage
                          image={getImage(item.featuredImage?.node)}
                          alt={item.featuredImage?.node?.altText}
                        />
                      </div>
                    </a>
                    <div className='post_info'>
                      <div className='post_table'>
                        <div className='post_row'>
                          <div className='post_table_cell'>
                            <div className='post-intro'>
                              <p className='post_types'>
                                <a href="#" rel="tag">{item?.types?.nodes?.[0]?.name}</a>
                              </p>
                              <h4 className='post_title'>
                                {/* <a href="#" title="10 Healthy Nut Butters">10 Healthy Nut Butters</a> */}
                                <Link to={item?.uri}>{item?.title}</Link>
                              </h4>
                              <div className='excerpt'>
                                <p className='yoast_wpseo_metadesc'>{item?.seo?.metaDesc}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className='post_row'>
                          <div className='post_table_cell post_author_date_reviewer_read'>
                            <div className='author_date_reviewer_read'>
                              <div className='post_table gap-[10px]'>
                                <div className="table-row tr_author_date mb-[10px]">
                                  <div className="table-cell align-middle">
                                    <div className="table border-collapse table-fixed h-full">
                                      <div className="table-cell tc_avatar align-middle">
                                        <div className="photo-auhor-v">
                                          <a href="#" title="">
                                            <img alt="" src={item?.author?.node?.avatar?.url || "avatar"} className="avatar avatar-32 photo" height="32" width="32" />
                                          </a>
                                        </div>
                                      </div>
                                      <div className="table-cell align-middle">
                                        <p className="author-profle-v">
                                          <a href="#" title="">{item?.author?.node?.name}</a>
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="table-cell align-middle tc_post_date text-right">
                                    {index === 0 ?
                                      <p className="post_date">{item?.modified}</p>
                                      :
                                      <p className="post_date">{item?.seo?.readingTime} min read</p>
                                    }
                                  </div>
                                </div>
                                <div class="table-row tr_spacing"><div class="table-cell align-middle py-[5px]"></div><div class="table-cell align-middle py-[5px]"></div></div>
                                <div className="table-row tr_reviewer_read">
                                  <div className="table-cell align-middle">
                                    <div className="table border-collapse table-fixed h-full">
                                      <div className="table-cell tc_avatar align-middle">
                                        <div className="photo-auhor-v">
                                          <a href="#" title="">
                                          <img alt="" src={item?.author?.node?.avatar?.url || "avatar"} className="avatar avatar-32 photo" height="32" width="32" />
                                          </a>
                                        </div>
                                      </div>
                                      <div className="table-cell align-middle">
                                        <p className="author-profle-v">
                                          <a href="#" title="Zoë Atlas, MPH, RDN"> Zoë Atlas, MPH, RDN </a>
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                  {/* <div className="table-cell align-middle text-right tc_reading_time"><p className="reading_time">{item?.seo?.readingTime} min read</p></div> */}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

          </div>
        </div>
      </section>
    </>
  )
}

export default CategoryPostsWithImageContent;
export const CategoryPostsWithImageContentFragment = graphql`
  fragment CategoryPostsWithImageContentFragment on WpCategory {
    name
    slug
    uri
    posts {
      nodes {
        title
        uri
        seo {
          metaDesc
          readingTime
        }
        types {
          nodes {
            name
          }
        }
        featuredImage {
          node {
            altText
            gatsbyImage(formats: WEBP, placeholder: BLURRED, width: 1000)
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
        modified(formatString: "DD MMMM, YYYY")
      }
    }
  }
`;