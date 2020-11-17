import React, { useState } from "react"
import "./style.scss"

interface IHeading {
    text: string
}

const Heading = (props: IHeading) => {
    return <div className="heading row text-center">
        <div className="col-md-4">
            <hr />
        </div>
        <div id="haeding-text" className="col-md-4">
            <h2>{props.text}</h2>
        </div>
        <div className="col-md-4">
            <hr />
        </div>
    </div>
}

export default Heading;