import React from "react"
import "./style.scss"

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
    return (
        <>
            <div className="container contact-info">
                <div className="row">
                    <div className="col-md-4">
                        <a
                            data-toggle="tooltip"
                            title="Click to email me"
                            href="mailto:mohsinhayat104@gmail.com"
                            className="contact-links row"
                        >
                            <div className="col-4">
                                <span className="fa-stack fa-lg">
                                    <i className="fa fa-envelope-square fa-stack-2x"></i
                                    ></span>
                            </div>
                            <div className="col-8">mohsinhayat104@gmail.com</div>
                        </a>
                    </div>

                    <div className="col-md-4">
                        <a
                            data-toggle="tooltip"
                            title="Click to call me"
                            href="tel:+923364526811"
                            className="contact-links"
                        >
                            <span className="fa-stack fa-lg">
                                <i className="fa fa-phone-square fa-stack-2x"></i
                                ></span>
              &nbsp; (+92)-336-4256811
            </a>
                    </div>

                    <div className="col-md-4">
                        <a
                            data-toggle="tooltip"
                            title="View on Map"
                            href="https://goo.gl/maps/cTv2fUYvSSkDxjSh7"
                            className="contact-links"
                        >
                            <span className="fa-stack fa-lg">
                                <i className="fa fa-map-marker fa-stack-2x"></i
                                ></span>
              &nbsp; Lahore, Punjab, Pakistan
            </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ReachDetails;