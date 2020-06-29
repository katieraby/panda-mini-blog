const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

//createfilepath gives you the slug/path i.e. /baby-pandas/
// Now you can add your new slugs directly onto the MarkdownRemark nodes. This is powerful, as any data you add to nodes is available to query later with GraphQL. So, it’ll be easy to get the slug when it comes time to create the pages.
// To do so, you’ll use a function passed to your API implementation called createNodeField. This function allows you to create additional fields on nodes created by other plugins. Only the original creator of a node can directly modify the node—all other plugins (including your gatsby-node.js) must use this function to create additional fields.

//once you have the slugs, you can then use it to dynamically create the pages

exports.createPages = async ({ graphql, actions }) => {
  // **Note:** The graphql function call returns a Promise
  // see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise for more info
  const { createPage } = actions
  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/blog-post.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.fields.slug,
      },
    })
  })
}
