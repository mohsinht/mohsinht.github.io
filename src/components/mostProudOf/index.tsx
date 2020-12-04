import React, { useState } from "react"
import Heading from "../heading"
import "./style.scss"

interface IProps {
    text: {
        title: string,
        icon: string,
        description: string,
        link?: string,
        linkTitle?: string
    }[]
}

const MostProudOf = (props: IProps) => {
    return <>
        <Heading text="Most Proud Of" />

        <div className="container proud-block">
            {props.text.map((entry, key) => {
                return <React.Fragment key={key}>
                    <div className="row proud-row" data-sal="zoom-in"
                        data-sal-easing="ease">
                        <div className="col-md-12">
                            <h2 className="proud-title"><span className="fa-stack fa-sm">
                                <i className={`fa ${entry.icon} fa-stack-1x`}></i></span>{entry.title}
                            </h2>
                            <p className="proud-description">{entry.description}</p>
                            {entry.link ?<span>(<a href={entry.link} className="proud-link">
                                {entry.linkTitle}</a>)</span> : null}
                        </div>
                    </div>
                </React.Fragment>
            })}
        </div>
    </>;
}

export default MostProudOf;