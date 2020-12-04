import React from "react"
import { PageProps } from "gatsby"
import "../styles/global.scss";

// Scripts
import 'popper.js/dist/popper.js';
import 'sal.js/dist/sal.css';
// import 'bootstrap/dist/js/bootstrap.js';

// Components:
import Header from "../components/header";
import Intro from "../components/intro";
import ReachDetails from "../components/reachDetails";
import HtmlHead from "../components/htmlHead"
import PersonalStatement from "../components/personalStatement";

// Content: 
import HeaderContent from '../../content/header';
import IntroContent from '../../content/intro';
import ReachContent from '../../content/reach';
import PersonalStatementContent from '../../content/personalStatement';
import EducationContent from '../../content/education';
import ExperienceContent from '../../content/experience';
import ProjectsContent from '../../content/projects';
import ProudContent from '../../content/mostProudOf';

// Assets:
import downloads from '../../content/downloads';
import assets from '../../content/assets';
import Education from "../components/education";
import Experience from "../components/experience";
import Projects from "../components/projects";
import MostProudOf from "../components/mostProudOf";
import MoreInfo from "../components/moreInfo";
import Recommendations from "../components/recommendations";
import Testimonials from "../components/testimonials";
import Contact from "../components/contact";

export default function IndexRoute(props: PageProps) {
  return (
    <>
     <HtmlHead /> 
      <Header text={HeaderContent} resume={downloads.resume} />
      <div className="container-fluid">
        <Intro text={IntroContent} dp={assets.displayPicture} />
        <ReachDetails text={ReachContent} />
        <PersonalStatement text={PersonalStatementContent}  />
        <Education text={EducationContent} />
        <Experience text={ExperienceContent} />
        <Projects text={ProjectsContent} />
        <MostProudOf text={ProudContent} />
        <MoreInfo />
        <Recommendations />
        <Testimonials />
        <Contact />
      </div>
    </>
  )
}