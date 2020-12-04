# Welcome to My Resume!

I created this resume using **GatsbyJs** for learning purposes but now as I have open-sourced it completely, I'm excited to share the code structure and implementation details. Feel free to fork this and change it the way you want.

## Folder Structure
    .
    ├── node_modules
    ├── src
    │   ├──── components
    │   └──── pages
    ├── content
    ├── static
    │   └──── downloads
    ├── .gitignore
    ├── .prettierrc
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── gatsby-ssr.js
    ├── LICENSE
    ├── package-lock.json
    ├── package.json
    └── README.md

## Updating Content

I have followed the idea of **Single change, update eveywhere**. You can modify all the content in the `/content/` folder. To add a new content section, simply add a new typescript file and import it in the `/src/pages/index.tsx/` file.

## Updating Downloads

To change downloadable files, add files in the `static/downloads/` folder.

## Deployment

To deploy your resume, use `gatsby build` command to make a build. Make sure to rename your `/public` folder to `/docs` if you want to upload on Github Pages. You can also setup a command following this [link](https://www.gatsbyjs.com/docs/how-gatsby-works-with-github-pages/).

## Design Changes

To change design of the resume, use `gatsby develop` and change/add a component in `src/components/` folder.
