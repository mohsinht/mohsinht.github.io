module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-sass`,
      
      options: {
        includePaths: [require('path').resolve(__dirname, 'node_modules')],
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-scroll-reveal`,
      options: {
        threshold: 1,
        once: true, // Defines if animation needs to be launched once
      }
    }
  ],
};
