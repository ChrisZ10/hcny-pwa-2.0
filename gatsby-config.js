module.exports = {
  siteMetadata: {
    title: `紐約豐收靈糧堂`,
    author: `Chris Zhao`
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src`
      },
    },
    {
      resolve: 'gatsby-source-mongodb',
      options: {
          dbName: 'hcnydb',
          collection: ['configurations', 'prayers', 'courses'],
          server: {
              address: 'hcnydb-shard-00-01-mndi3.mongodb.net',
              port: 27017
          },
          auth: {
              user: 'admin',
              password: 'SI2H90gF7YR8Q7M8'
          },
          extraParams: {
              replicaSet: 'hcnydb-shard-0',
              ssl: true,
              authSource: 'admin',
              retryWrites: true
          }
      }
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-playground`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-background-image`
  ],
}
