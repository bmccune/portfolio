module.exports = {
  siteMetadata: {
    title: `Brian McCune`,
    description: `Senior technology leader with 15+ years delivering multi-million-dollar programs, cross-functional initiatives, and enterprise software solutions. Program management, software development, and team leadership expertise.`,
    author: `Brian McCune`,
    siteUrl: `https://mccune.dev`,
    email: `brian.mccune@gmail.com`,
    phone: `(909) 702-2211`,
    linkedin: `https://www.linkedin.com/in/bmccune`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Brian McCune - Technology Leader`,
        short_name: `Brian McCune`,
        start_url: `/`,
        background_color: `#1a202c`,
        theme_color: `#2d3748`,
        display: `minimal-ui`,
        icon: `src/images/icon.svg`, // Simple BM initials icon
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
