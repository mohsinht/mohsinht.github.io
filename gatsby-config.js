module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        includePaths: [require('path').resolve(__dirname, 'node_modules')],
      },
    },
    `gatsby-plugin-react-helmet`,
  ],
};
