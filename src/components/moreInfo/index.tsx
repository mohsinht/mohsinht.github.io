import React, { useState } from "react";
import Heading from "../heading";
import "./style.scss";

interface IProps {
  text: {
    technologies: string[];
    certifications: {
      title: string;
      issuer: string;
      issuerLink: string;
      issueDate: string;
      credentialTitle: string;
      credentialLink: string;
    }[];
  };
}

const MoreInfo = (props: IProps) => {
  return (
    <>
      <Heading text="More" />

      <div className="container more-block">
        <div className="row more-row">
          <div className="col-md-6" data-sal="zoom-in" data-sal-easing="ease">
            <h2 className="more-heading font-size-5">Certifications</h2>
            <div className="certifications">
              {props.text.certifications.map((certificate, index) => {
                return (
                  <div className="certificate" key={index}>
                    <h2 className="title font-size-6">{certificate.title}</h2>
                    <div className="certificate-sub font-size-7">
                      <a href={certificate.issuerLink} className="issuer-link">
                        {certificate.issuer}
                      </a>{" "}
                      <span className="issue-date">
                        {certificate.issueDate}
                      </span>{" "}
                      <a
                        className="credential-link"
                        href={certificate.credentialLink}
                      >
                        {certificate.credentialTitle}
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div
            className="col-md-6 left-sep"
            data-sal="zoom-in"
            data-sal-easing="ease"
          >
            <h2 className="more-heading font-size-5">Technologies</h2>
            <div className="technologies">
              {props.text.technologies.map((tech, index) => {
                return (
                  <span className="badge tech-badge font-size-7" key={index}>
                    {tech}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MoreInfo;
