/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Pandas Eating Lots`,
    description: `A simple description about pandas eating lots...`,
    author: `gatsbyjs`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `The Panda Blog`,
        short_name: `Panda Blog`,
        start_url: `/`,
        background_color: `#6b37bf`,
        theme_color: `#fff`,
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: `standalone`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-transformer-remark`, //can be used to transform markdown files
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    `gatsby-plugin-offline`,
    //should be listed after the manifest plugin so that the offline plugin can cache the created manifest.webmanifest
    `gatsby-plugin-react-helmet`,
  ],
}

//Gatsby’s manifest plugin configures Gatsby to create a manifest.webmanifest file on every site build.
//Source plugins bring data into Gatsby’s data system and transformer plugins transform raw content brought by source plugins. This pattern can handle all data sourcing and data transformation you might need when building a Gatsby site.
// Gatsby’s offline plugin makes a Gatsby site work offline and more resistant to bad network conditions by creating a service worker for your site.
//Gatsby’s react helmet plugin provides drop-in support for server rendering data added with React Helmet. Using the plugin, attributes you add to React Helmet will be added to the static HTML pages that Gatsby builds.
