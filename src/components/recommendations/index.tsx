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
                  <p className='company font-size-6'>{rec.company}</p>{' '}
                  <p className='rec-details font-size-7'>{rec.details}</p>
                  <div>
                    <span className='rec-from font-size-8'>
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
