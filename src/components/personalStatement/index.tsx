import React, { useState } from 'react';
import Heading from '../heading';
import './style.scss';

interface IPersonalStatement {
  text: {
    heading: string;
    background: string;
    objective: string;
  };
}

const PersonalStatement = (props: IPersonalStatement) => {
  return (
    <>
      <Heading text={props.text.heading} />
      <div className='container ps-block'>
        <div className='row'>
          <div
            className='col-md-7'
            data-sal='zoom-in'
            data-sal-delay={`${400}`}
            data-sal-easing='ease'
          >
            <h2>Background</h2>
            <p> {props.text.background}</p>
          </div>
          <div
            className='col-md-5 objective'
            data-sal='zoom-in'
            data-sal-delay={`${600}`}
            data-sal-easing='ease'
          >
            <h2>Objective</h2>
            <span className='quote-marks-open'>“</span>
            <p>{props.text.objective}</p>
            <span className='quote-marks-close'>”</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default PersonalStatement;
