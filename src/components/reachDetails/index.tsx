import React, { useState } from 'react';
import './style.scss';
import { Popover, PopoverBody } from 'reactstrap';
import { IReachItem } from './interface/IReachItem';
import ReachItem from './ReachItem';
interface IReachContent {
  items: IReachItem[];
}

const ReachDetails = (props: IReachContent) => {
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
    <>
      <div
        data-sal='flip-up'
        data-sal-delay='200'
        data-sal-easing='ease'
        className='container reach-block font-size-6'
      >
        <div className='row px-2'>
          {props.items.map((item, key) => {
            return (
              <div key={key} className='col-lg-4'>
                <ReachItem {...item} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ReachDetails;
