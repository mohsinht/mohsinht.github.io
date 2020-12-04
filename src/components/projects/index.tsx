import React, { useState } from "react"
import Heading from "../heading"
import "./style.scss"

interface IProps {
    text: {
        main: {
            title: string,
            urlTitle: string | string[],
            url: string | string[],
            description: string,
            bullets?: string[]
        }[],
        personal: {
            title: string,
            github: string,
            website: string,
            detail: string,
        }[]
    }
}

const Projects = (props: IProps) => {
    return <>
        <Heading text="Projects" />

        <div className="container projects-block">
            {props.text.main.map((entry, key) => {
                return <React.Fragment key={key}>
                    <div className="row projects-row" data-sal="zoom-in"
                        data-sal-easing="ease">
                        <div className="col-md-12">
                            <h2 className="project-title">{entry.title}</h2>
                            {typeof (entry.urlTitle) === 'object' ? <p>{entry.urlTitle.map((comp, index) => { return <React.Fragment key={index}> <a href={entry.url[index].toString()} className="project-url">{comp}</a> {index === entry.urlTitle.length - 1 ? null : <span>& </span>}</React.Fragment> })}</p> : <a href={entry.url.toString()} className="project-url">{entry.urlTitle}</a>}
                            <div className="project-desription">
                                {entry.description}
                            </div>
                            {entry.bullets ? <ul className="project-bullets">
                                {entry.bullets.map((point, index) => {
                                    return <li key={index}>{point}</li>
                                })}
                            </ul> : null}
                        </div>
                    </div>


                </React.Fragment>


            })}
            <div className="row projects-row" data-sal="zoom-in"
                        data-sal-easing="ease">
                <div className="col-md-12">
                    <h2 className="project-title">Personal Projects</h2>
                    <p className="project-url"><span>Some projects that I did in my spare time</span></p>
                    <div className="project-desription">
                        <ul>
                            {props.text.personal.map((point, index) => {
                                return <li key={index}><span className="personal-title">{point.title} – </span> <span className="">{point.detail}</span> ({point.github !== '' && point.website !== ''?  <span><a href={point.github}>Github</a> | <a href={point.website}>Website</a></span> : point.github !== '' ? <a href={point.github}>Github</a> : point.website ? <a href={point.website}>Website</a> : null})</li>
                            })}
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    </>;
}

export default Projects;