import React, { useState } from 'react';
import Heading from '../heading';
import './style.scss';

interface IProps {
  text: {
    company: string;
    details: string;
    from: string;
    fromDesignation: string;
    link: string;
  }[];
}

const Recommendations = (props: IProps) => {
  return (
    <>
      <Heading text='Recommendations' />

      <div className='container recommendations-block'>
        <div className='row'>
          {props.text.map((rec, index) => {
            return (
              <div
                key={index}
                className='col-md-6'
                data-sal='zoom-in'
                data-sal-easing='ease'
              >
                <div className='rec-box'>
                  {' '}
                  <p className='company'>{rec.company}</p>{' '}
                  <p className='rec-details'>{rec.details}</p>
                  <div>
                    <span className='rec-from'>
                      {rec.from} ({rec.fromDesignation})
                      <a className='letter-link' href={rec.link}>
                        View letter
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Recommendations;
