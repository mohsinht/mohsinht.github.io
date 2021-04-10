import React, { useState } from 'react';
import './style.scss';
import { Popover, PopoverBody } from 'reactstrap';
import { IReachItem } from './interface/IReachItem';

const ReachItem = (props: IReachItem) => {
  const [popoverOpen, setPopoverOpen] = useState(false);

  const onHover = () => {
    setPopoverOpen(true);
  };
  const onHoverLeave = () => {
    setPopoverOpen(false);
  };

  return (
    <>
      <div
        className='row reach-item'
        id={`user-${props.icon}`}
        onMouseEnter={() => onHover()}
        onMouseLeave={() => onHoverLeave()}
        onClick={() => {
          window.open(props.url, '_blank');
        }}
      >
        <div className='col-2 text-center'>
          <span className='fa-stack fa-lg'>
            <i className={`fa ${props.icon} fa-stack-2x reach-icon`}></i>
          </span>
        </div>
        <div className='col-10 pl-4 reach-text'>{props.text}</div>
      </div>
      <Popover
        placement='top'
        isOpen={popoverOpen}
        target={`user-${props.icon}`}
        className='icon-popover'
      >
        <PopoverBody>{props.cta}</PopoverBody>
      </Popover>
    </>
  );
};

export default ReachItem;
