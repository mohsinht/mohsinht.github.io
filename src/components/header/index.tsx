import React, { useState } from "react";
import "./style.scss";
import { Popover, PopoverHeader, PopoverBody } from "reactstrap";
import scrollTo from "gatsby-plugin-smoothscroll";

interface IHeaderContent {
  text: {
    title: string;
  };
}

interface IResumeFile {
  resume: {
    url: string;
    title: string;
  };
}

const Header = (props: IHeaderContent & IResumeFile) => {
  const [popoverOpen, setPopoverOpen] = useState(false);

  const onHover = () => setPopoverOpen(true);
  const onHoverLeave = () => setPopoverOpen(false);

  return (
    <>
      <nav
        id="navbar"
        className="navbar navbar-light bg-light navbar-fixed-top mh-nav font-size-6"
      >
        <a
          className="navbar-brand"
          href="#"
          data-sal="zoom-in"
          data-sal-easing="ease"
          data-sal-delay="300"
        >
          {props.text.title}
        </a>
        <a
          className="download-phone"
          href={props.resume.url}
          data-toggle="tooltip"
          title={props.resume.title}
          download
        >
          Download PDF version
        </a>
        <ul
          className="nav nav-pills"
          data-sal="zoom-in"
          data-sal-easing="ease"
          data-sal-delay="300"
        >
          <li className="nav-item" id="intro-link">
            <a className="nav-link" onClick={() => scrollTo("#intro")}>
              Intro
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" onClick={() => scrollTo("#education")}>
              Education
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" onClick={() => scrollTo("#experience")}>
              Experience
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" onClick={() => scrollTo("#contact")}>
              Contact
            </a>
          </li>
          <li
            className="nav-item download-button"
            data-sal="slide-left"
            data-sal-easing="ease"
          >
            <a
              className="nav-link download-button-text"
              href={props.resume.url}
              download
              id="resume_tooltip"
              onMouseEnter={onHover}
              onMouseLeave={onHoverLeave}
            >
              Download
            </a>
            <Popover
              placement="bottom"
              isOpen={popoverOpen}
              target="resume_tooltip"
            >
              <PopoverBody>{props.resume.title}</PopoverBody>
            </Popover>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
