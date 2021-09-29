import React, { useState } from "react";
import "./style.scss";

interface IHeading {
  text: string;
}

const Heading = (props: IHeading) => {
  return (
    <div className="heading row text-center">
      <div className="col-lg-4">
        <hr />
      </div>
      <div id="heading-text" className="col-lg-4 font-size-6">
        <h2>{props.text}</h2>
      </div>
      <div className="col-lg-4">
        <hr />
      </div>
    </div>
  );
};

export default Heading;
