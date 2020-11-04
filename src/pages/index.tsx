import React from "react"
import { PageProps } from "gatsby"
import "../styles/global.scss";

// Components:
import Header from "../components/header";
import Intro from "../components/intro";

// Content: 
import HeaderContent from '../../content/header';
import IntroContent from '../../content/intro';

// Assets:
import downloads from '../../content/downloads';
import assets from '../../content/assets';

export default function IndexRoute(props: PageProps) {
  return (
    <>
      <Header text={HeaderContent} resume={downloads.resume} />
      <div className="container-fluid">
        <Intro text={IntroContent} dp={assets.displayPicture} />
      </div>
    </>
  )
}