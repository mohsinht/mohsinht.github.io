import React from 'react';
import './style.scss';

const OnePage = ({ content }: { content: any }) => {
  return (
    <div className='one-page-resume'>
      <div className='row'>
        <div className='col-md-8'>
          <div className='name font-size-4'>Malik Mohsin Hayat</div>
          <div className='subtitle-1 font-size-6'>
            Full Stack engineer & designer
          </div>
          <div className='subtitle-2 font-size-8 d-flex mt-1'>
            <p>
              <span className='mr-2 fa-md'>
                <i className={`fa fa-map-marker reach-icon`}></i>
              </span>
              From Lahore, Pakistan
            </p>
            <p className='ml-3'>
              {' '}
              <span className='mr-2 fa-md'>
                <i className={`fa fa-envelope reach-icon`}></i>
              </span>
              mohsinhayat104@gmail.com
            </p>
            <p className='ml-3'>
              {' '}
              <span className='mr-2 fa-md'>
                <i className={`fa fa-phone reach-icon`}></i>
              </span>
              +923364256811
            </p>
          </div>
        </div>
        <div
          className='col-md-4 image'
          data-sal='zoom-in'
          data-sal-delay='300'
          data-sal-easing='ease'
        >
          <img
            className='img-responsive ml-auto d-block mydp rounded-circle'
            src={content.assets.displayPicture.url}
          />
        </div>
      </div>

      <div className='row mt-3'>
        <div className='col-md-7'>
          <h3 className='heading-type-3 border-top pt-2'>Experience</h3>
          {content.experience.map((entry, key) => {
            if (entry.hideInOnePage) {
              return null;
            }
            return (
              <div key={key}>
                <div className='font-size-6'>{entry.title}</div>
                <div className='d-flex'>
                  <div className='subtitle-1 font-size-8'>{entry.company}</div>
                  <div className='subtitle-2 font-size-8 border-left pl-2 ml-2'>
                    {entry.from} – {entry.to}
                  </div>
                  <div className='subtitle-2 font-size-8 border-left pl-2 ml-2'>
                    <span className='mr-2 fa-md'>
                      <i className={`fa fa-map-marker reach-icon`}></i>
                    </span>
                    {entry.location}
                  </div>
                </div>
                <ul className='job-description font-size-7 mt-2'>
                  {entry.bullets.map((point, index) => {
                    if (index > 1) return null;
                    return <li key={index}>{point}</li>;
                  })}
                </ul>
              </div>
            );
          })}

          <h3 className='heading-type-3 border-top pt-2'>Education</h3>
          {content.education.map((entry, key) => {
            if (key>1) {
              return null;
            }
            return (
              <div key={key} className="mt-2">
                <div className='font-size-6'>{entry.degree} <span>({entry.subject})</span></div>
                <div className='d-flex'>
                  <div className='subtitle-1 font-size-8'>{entry.schoolShort || entry.school}</div>
                  <div className='subtitle-2 font-size-8 border-left pl-2 ml-2'>
                    {entry.from} – {entry.to}
                  </div>
                  <div className='subtitle-2 font-size-8 border-left pl-2 ml-2'>
                    {entry.marks.unit} <span className="subtitle-1">{entry.marks.obtained}</span> / {entry.marks.total}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className='col-md-5'>
            <h3 className='heading-type-3 border-top pt-2'>Most Proud of</h3>
        </div>
      </div>
    </div>
  );
};

export default OnePage;
