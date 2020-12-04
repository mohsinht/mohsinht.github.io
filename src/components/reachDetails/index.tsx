import React, { useState } from "react"
import "./style.scss"
import { Popover, PopoverBody } from "reactstrap";

interface ReachContent {
    text: {
        email: {
            text: string,
            cta: string,
            url: string
        },
        phone: {
            text: string,
            cta: string,
            url: string
        },
        location: {
            text: string,
            cta: string,
            url: string
        },
    }
}

const ReachDetails = (props: ReachContent) => {

    const [popoverOpen, setPopoverOpen] = useState([false, false, false]);

    const onHover = (id) => {
        let arr = [...popoverOpen];
        arr = [false, false, false];
        arr[id] = true;
        setPopoverOpen(arr)
    };
    const onHoverLeave = (id) => {
        let arr = [...popoverOpen];
        arr[id] = false;
        setPopoverOpen(arr)
    };
    return (
        <>
            <div data-sal="flip-up"
                data-sal-delay="300"
                data-sal-easing="ease" className="container reach-block">
                <div className="row">
                    <div className="col-lg-4">
                        <a
                            onMouseEnter={() => onHover(0)}
                            onMouseLeave={() => onHoverLeave(0)}
                            id="user-email"
                            href={props.text.email.url}
                            className="contact-links row"
                        >
                            <div className="col-3 pl-0 pr-1">
                                <span className="fa-stack fa-lg">
                                    <i className="fa fa-envelope-square fa-stack-2x"></i
                                    ></span>
                            </div>
                            <div className="col-9 pl-0 reach-text">{props.text.email.text}</div>
                        </a>
                        <Popover
                            placement="top"
                            isOpen={popoverOpen[0]}
                            target="user-email"
                            className="icon-popover"
                        >
                            <PopoverBody>{props.text.email.cta}</PopoverBody>
                        </Popover>

                    </div>

                    <div className="col-lg-4 pl-lg-5">
                        <a
                            onMouseEnter={() => onHover(1)}
                            onMouseLeave={() => onHoverLeave(1)}
                            id="user-phone"
                            href={props.text.phone.url}
                            className="contact-links row"
                        >
                            <div className="col-3 pl-0 pr-1">
                                <span className="fa-stack fa-lg">
                                    <i className="fa fa-phone-square fa-stack-2x"></i
                                    ></span>
                            </div>
                            <div className="col-9 pl-0 reach-text">{props.text.phone.text}</div>
                        </a>
                        <Popover
                            placement="top"
                            isOpen={popoverOpen[1]}
                            target="user-phone"
                            className="icon-popover"
                        >
                            <PopoverBody>{props.text.phone.cta}</PopoverBody>
                        </Popover>

                    </div>

                    <div className="col-lg-4 pl-2">
                        <a
                            onMouseEnter={() => onHover(2)}
                            onMouseLeave={() => onHoverLeave(2)}
                            id="user-location"
                            href={props.text.location.url}
                            className="contact-links row"
                        >
                            <div className="col-3 pr-0 pl-1">
                                <span className="fa-stack fa-lg">
                                    <i className="fa fa-map-marker fa-stack-2x"></i
                                    ></span>
                            </div>
                            <div className="col-9 pl-0 reach-text">{props.text.location.text}</div>
                        </a>
                        <Popover
                            placement="top"
                            isOpen={popoverOpen[2]}
                            target="user-location"
                            className="icon-popover"
                        >
                            <PopoverBody>{props.text.location.cta}</PopoverBody>
                        </Popover>

                    </div>
                </div>
            </div>
        </>
    )
}

export default ReachDetails;