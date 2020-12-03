import React, { useState } from "react"
import Heading from "../heading"
import "./style.scss"

interface IProps {
    text: {
        title: string,
        company: string | string[],
        url: string | string[],
        location: string,
        from: string | number,
        to: string | number,
        bullets: string[]
    }[]
}

const Experience = (props: IProps) => {
    return <>
        <Heading text="Experience" />

        <div className="container experience-block">
            {props.text.map((entry, key) => {
                return <React.Fragment key={key}>
                    <div className="row experience-row" data-sal="zoom-in"
                        data-sal-easing="ease">
                        <div className="col-md-12">
                            <h2 className="job-title">{entry.title}</h2>
                            {typeof (entry.company) === 'object' ? <p>{entry.company.map((comp, index) => { return <React.Fragment key={index}> <a href={entry.url[index].toString()} className="company-name">{comp}</a> {index === entry.company.length - 1 ? null : <span>& </span>}</React.Fragment> })}</p> : <a href={entry.url.toString()} className="company-name">{entry.company}</a>}
                            <p className="job-duration"><span className="fa-stack fa-sm">
                                <i className="fa fa-calendar fa-stack-1x"></i></span>{entry.from} – {entry.to} <span className="job-location"><span className="fa-stack fa-sm">
                                    <i className="fa fa-map-marker fa-stack-1x"></i></span>{entry.location}</span></p>

                            <ul className="job-description">
                                {entry.bullets.map((point, index) => {
                                    return <li key={index}>{point}</li>
                                })}
                            </ul>
                        </div>

                    </div>
                </React.Fragment>
            })}
        </div>
    </>;
}

export default Experience;