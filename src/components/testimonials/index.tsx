import React, { useState } from 'react';
import Heading from '../heading';
import './style.scss';

interface IProps {
  text: {
    index?: number;
    title: string;
    content: string;
    from: string;
    fromCompany: string;
  }[];
}

const Testimonials = (props: IProps) => {
  const parsedText = (arr: IProps): IProps => {
    let newArr = [];
    for (let i in arr.text) {
      newArr.push({ ...arr.text[i], index: i });
    }
    console.log(newArr);
    return { text: newArr };
  };

  return (
    <>
      <Heading text="Clients' Testimonials" />

      <div className='container testimonial-block'>
        <div className='row'>
          {[1, 2, 3].map((colNum, key) => {
            return (
              <div key={key} className='col-md-4'>
                {parsedText(props).text.map((test, index) => {
                  return test.index % 3 === colNum - 1 ? (
                    <span key={index}>
                      <div
                        className='test-box'
                        data-sal='zoom-in'
                        data-sal-easing='ease'
                      >
                        {' '}
                        <p className='title'>{test.title}</p>{' '}
                        <p className='test-details'>{test.content}</p>
                        <div>
                          <span className='test-from'>
                            {test.from} ({test.fromCompany})
                          </span>
                        </div>
                      </div>
                    </span>
                  ) : null;
                })}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Testimonials;
