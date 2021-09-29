import React, { useState } from "react";
import "./style.scss";
import { Popover, PopoverBody } from "reactstrap";

interface IntroContent {
  text: {
    firstName: string;
    lastName: string;
    tagline: string;
    social: {
      facebook: string;
      linkedin: string;
      github: string;
    };
  };
}

interface DisplayPicture {
  dp: {
    url: string;
  };
}

const Intro = (props: IntroContent & DisplayPicture) => {
  const [popoverOpen, setPopoverOpen] = useState([false, false, false]);

  const onHover = (id) => {
    let arr = [...popoverOpen];
    arr = [false, false, false];
    arr[id] = true;
    setPopoverOpen(arr);
  };
  const onHoverLeave = (id) => {
    let arr = [...popoverOpen];
    arr[id] = false;
    setPopoverOpen(arr);
  };

  return (
    <div
      id="intro"
      className="container intro-block"
      data-sal="slide-up"
      data-sal-delay="200"
      data-sal-easing="ease"
    >
      <div className="row">
        <div className="col-md-7">
          <br />
          <h1 className="text-center name font-size-2">{`${props.text.firstName} ${props.text.lastName}`}</h1>
          <h2 className="text-center font-size-3">{props.text.tagline}</h2>

          <br />
          <div className="text-center">
            <a
              className="facebook-link"
              href={props.text.social.facebook}
              target="_blank"
              onMouseEnter={() => onHover(0)}
              onMouseLeave={() => onHoverLeave(0)}
              id="facebook-icon"
            >
              <span className="fa-stack fa-lg">
                <i className="fa fa-square-o fa-stack-2x"></i>
                <i className="fa fa-facebook fa-stack-1x"></i>{" "}
              </span>
              <Popover
                placement="top"
                isOpen={popoverOpen[0]}
                target="facebook-icon"
                className="icon-popover"
              >
                <PopoverBody>My Facebook Profile</PopoverBody>
              </Popover>
            </a>
            <a
              className="github-link"
              href={props.text.social.github}
              target="_blank"
              onMouseEnter={() => onHover(1)}
              onMouseLeave={() => onHoverLeave(1)}
              id="github-icon"
            >
              <span className="fa-stack fa-lg">
                <i className="fa fa-square-o fa-stack-2x"></i>
                <i className="fa fa-github fa-stack-1x"></i>{" "}
              </span>
              <Popover
                placement="top"
                isOpen={popoverOpen[1]}
                target="github-icon"
                className="icon-popover"
              >
                <PopoverBody>My Github Profile</PopoverBody>
              </Popover>
            </a>
            <a
              className="linkedin-link"
              href={props.text.social.linkedin}
              target="_blank"
              onMouseEnter={() => onHover(2)}
              onMouseLeave={() => onHoverLeave(2)}
              id="linkedin-icon"
            >
              <span className="fa-stack fa-lg">
                <i className="fa fa-square-o fa-stack-2x"></i>
                <i className="fa fa-linkedin fa-stack-1x"></i>{" "}
              </span>
              <Popover
                placement="top"
                isOpen={popoverOpen[2]}
                target="linkedin-icon"
                className="icon-popover"
              >
                <PopoverBody>My Linkedin Profile</PopoverBody>
              </Popover>
            </a>
          </div>

          <br />
        </div>
        <div
          className="col-md-5 image"
          data-sal="zoom-in"
          data-sal-delay="300"
          data-sal-easing="ease"
        >
          <img
            className="img-responsive mx-auto d-block mydp rounded-circle"
            src={props.dp.url}
          />
        </div>
      </div>
    </div>
  );
};

export default Intro;
