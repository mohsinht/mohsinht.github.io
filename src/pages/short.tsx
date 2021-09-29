import { PageProps } from "gatsby";
// Scripts
import "popper.js/dist/popper.js";
import React from "react";
import "sal.js/dist/sal.css";
// Assets:
import downloads from "../../content/downloads";
import assets from "../../content/assets";

// Content:
import HeaderContent from "../../content/header";
import IntroContent from "../../content/intro";

// import 'bootstrap/dist/js/bootstrap.js';

// Components:
import Header from "../components/header";
import HtmlHead from "../components/htmlHead";
import OnePage from "../components/onepage";
import "../styles/global.scss";
import ExperienceContent from "../../content/experience";
import EducationContent from "../../content/education";

export default function IndexRoute(props: PageProps) {
    const content = {
        intro: IntroContent,
        assets: assets,
        experience: ExperienceContent,
        education: EducationContent,
    }
  return (
    <>
      <HtmlHead />
      <Header text={HeaderContent} resume={downloads.resume} />
      <div className="container-fluid container-custom-size">
          <OnePage content={content} />
      </div>
    </>
  );
}
