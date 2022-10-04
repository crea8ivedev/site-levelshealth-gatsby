const path = require(`path`);

exports.createPages = async (gatsbyUtilities) => {
  const allData = await getPosts(gatsbyUtilities);

  if (!allData && !allData.pages.length) {
    return;
  }
  
  await makePages({ posts: allData.blogPosts, gatsbyUtilities }, "post");
};

/**
 * Create all the site's pages
 */
const makePages = async ({ posts, gatsbyUtilities }, template = "page") => {
  Promise.all(
    posts.map(({ post }) => {
      gatsbyUtilities.actions.createPage({
        path: post.uri,
        component: path.resolve(`./src/templates/${template}.js`),
        context: {
          id: post.id,
        },
      });
    })
  );
};

/**
 * Get the data via graphql (or throw error if error)
 */
async function getPosts({ graphql, reporter }) {
  const graphqlResult = await graphql(/* GraphQL */ `
    query WpPosts {
      blogPosts: allWpPost(sort: {fields: date, order: DESC}, limit: 11) {
        edges {
          post: node {
            id
            uri
          }
        }
      }
    }
  `);
  // error if there are errors
  if (graphqlResult.errors) {
    reporter.panicOnBuild(
      `There was an error loading your blog posts`,
      graphqlResult.errors
    );
    return;
  }

  // send the posts graphql found in wp
  return {
    blogPosts: graphqlResult.data.blogPosts.edges,
  };
}
