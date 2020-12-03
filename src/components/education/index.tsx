import React, { useState } from "react"
import Heading from "../heading"
import "./style.scss"

interface IEntry {
    text: {
        degree: string,
        subject: string,
        school: string,
        marks: {
            unit: string,
            total: number,
            obtained: number
        },
        from: string | number,
        to: string | number,
    }[]
}

const Education = (props: IEntry) => {
    return <>
        <div id="education" />
        <Heading text="Education" />
        <div className="container education-block"
        >
            {props.text.map((entry, key) => {
                return <React.Fragment key={key}><div className="row education-row" data-sal="zoom-in"
                    data-sal-easing="ease"><div className="col-md-9 float-left">
                        <h2 className="degree-name">{entry.degree} ({entry.subject})</h2>
                        <p className="school-name">{entry.school}</p>
                        <p className="degree-duration"><span className="fa-stack fa-sm">
                            <i className="fa fa-calendar fa-stack-1x"></i></span>{entry.from} – {entry.to}</p>
                    </div>
                    <div className="col-md-3 marks float-right text-center">
                        <h2 className="unit">{entry.marks.unit}</h2>
                        <h2 className="numbers"><span className="obtained">{entry.marks.obtained}</span> <span className="total">/ {entry.marks.total}</span></h2>
                    </div>
                </div>
                </React.Fragment>
            })}
        </div>
    </>;
}

export default Education;