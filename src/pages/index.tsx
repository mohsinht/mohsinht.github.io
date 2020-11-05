import React from "react"
import { PageProps } from "gatsby"
import "../styles/global.scss";

// Scripts
import 'popper.js/dist/popper.js';
import 'bootstrap/dist/js/bootstrap.js';

// Components:
import Header from "../components/header";
import Intro from "../components/intro";
import ReachDetails from "../components/reachDetails";
import HtmlHead from "../components/htmlHead"

// Content: 
import HeaderContent from '../../content/header';
import IntroContent from '../../content/intro';
import ReachContent from '../../content/reach';

// Assets:
import downloads from '../../content/downloads';
import assets from '../../content/assets';

export default function IndexRoute(props: PageProps) {
  return (
    <>
     <HtmlHead /> 
      <Header text={HeaderContent} resume={downloads.resume} />
      <div className="container-fluid">
        <Intro text={IntroContent} dp={assets.displayPicture} />
        <ReachDetails text={ReachContent} />
      </div>
    </>
  )
}