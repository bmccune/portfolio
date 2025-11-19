module.exports = {
  siteMetadata: {
    title: `Brian McCune`,
    description: `Senior technology leader with 15+ years delivering multi-million-dollar programs, cross-functional initiatives, and enterprise software solutions. Program management, software development, and team leadership expertise.`,
    author: `Brian McCune`,
    siteUrl: `https://mccune.dev`,
    email: `brian.mccune@gmail.com`,
    linkedin: `https://www.linkedin.com/in/bmccune`,
    location: `Seattle, Washington`,
    jobTitle: `Senior Technology Leader`,
    sameAs: [
      `https://www.linkedin.com/in/bmccune`,
      `https://github.com/bmccune`,
      `https://mccune.dev`,
    ],
  },
  plugins: [
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
        background_color: `#000814`,
        theme_color: `#CCA000`,
        display: `minimal-ui`,
        icon: `src/images/icon.svg`, // Simple BM initials icon
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        excludes: [`/dev-404-page/`],
      },
    },
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        policy: [{ userAgent: `*`, allow: `/` }],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
