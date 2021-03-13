import React from 'react';
import { Helmet } from 'react-helmet';

const HtmlHead = () => {
  return (
    <Helmet>
      <meta charSet='utf-8' />
      <meta httpEquiv='x-ua-compatible' content='ie=edge' />
      <meta
        name='viewport'
        content='width=device-width, initial-scale=1, shrink-to-fit=no'
      />
      <meta name='note' content='environment=development' />
      <title>About Mohsin Hayat</title>
      <script src='https://use.fontawesome.com/d41a1a9d72.js'></script>
      <script
        src='https://code.jquery.com/jquery-3.2.1.slim.min.js'
        integrity='sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN'
        crossOrigin='anonymous'
      ></script>
      <meta property='og:site_name' content="Mohsin's Resume" />
      <meta property='og:title' content='About Mohsin Hayat' />
      <meta
        property='og:description'
        content='This web page is a Resume and contains all the experiences, education and achievements of Mohsin Hayat.'
      />
      <meta
        property='og:image'
        content='https://mohsinht.github.io/Mohsin_DP.jpg'
      />
      <meta property='og:url' content='https://mohsinht.github.io/' />
      <meta property='og:type' content='profile' />
      <meta property='profile:first_name' content='Mohsin' />
      <meta property='profile:last_name' content='Hayat' />
      <meta property='profile:gender' content='male' />
      <meta property='profile:username' content='mohsinhayat' />
      <meta property='og:image:width' content='255' />
      <meta property='og:image:height' content='255' />
      <link
        rel='icon'
        type='image/svg+xml'
        href='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22256%22 height=%22256%22 viewBox=%220 0 100 100%22><rect width=%22100%22 height=%22100%22 rx=%2220%22 fill=%22%2322313f%22></rect><path fill=%22%23fff%22 d=%22M50.20 67.85L40.92 67.85L40.82 48.93L31.64 64.33L27.15 64.33L18.02 49.44L18.02 67.85L8.69 67.85L8.69 32.15L17.00 32.15L29.55 52.75L41.79 32.15L50.10 32.15L50.20 67.85ZM81.21 32.15L91.31 32.15L91.31 67.85L81.21 67.85L81.21 53.93L67.44 53.93L67.44 67.85L57.34 67.85L57.34 32.15L67.44 32.15L67.44 45.56L81.21 45.56L81.21 32.15Z%22></path></svg>'
      />
    </Helmet>
  );
};

export default HtmlHead;
