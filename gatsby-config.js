require("dotenv").config({ path: `.env` });

module.exports = {
  siteMetadata: {
    title: `site-levels-gatsby`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [{
    resolve: 'gatsby-source-wordpress',
    options: {
      "url": process.env.GATSBY_WP_GRAPHQL_URL,
    }
  }, "gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-transformer-sharp", "gatsby-plugin-postcss", "gatsby-plugin-sitemap", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "/static/images/icon.png"
    }
  }, {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `assets`,
      path: `${__dirname}/static`,
    },
  },
]
};