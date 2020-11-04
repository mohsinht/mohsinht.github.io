import React from "react"
import "./style.scss"

interface IntroContent {
    text: {
        firstName: string,
        lastName: string,
        tagline: string,
        social: {
            facebook: string,
            linkedin: string,
            github: string
        }
    }
}

interface DisplayPicture {
    dp: {
        url: string
    }
}

const Intro = (props: IntroContent & DisplayPicture) => {
    return (
        <>
            <div className="container intro-block">
                <div className="row">
                    <div className="col-md-7">
                        <br />
                        <h1 className="text-center name">{`${props.text.firstName} ${props.text.lastName}`}</h1>
                        <h2 className="text-center">{props.text.tagline}</h2>

                        <br />
                        <div className="text-center">
                            <a
                                className="facebook-link"
                                data-toggle="tooltip"
                                title="Facebook Profile"
                                href={props.text.social.facebook}
                                target="_blank"
                            ><span className="fa-stack fa-lg">
                                    <i className="fa fa-square-o fa-stack-2x"></i>
                                    <i className="fa fa-facebook fa-stack-1x"></i> </span
                                ></a>
                            <a
                                className="github-link"
                                data-toggle="tooltip"
                                title="Github Profile"
                                href={props.text.social.github}
                                target="_blank"
                            ><span className="fa-stack fa-lg">
                                    <i className="fa fa-square-o fa-stack-2x"></i>
                                    <i className="fa fa-github fa-stack-1x"></i> </span
                                ></a>
                            <a
                                className="linkedin-link"
                                data-toggle="tooltip"
                                title="LinkedIn Profile"
                                href={props.text.social.linkedin}
                                target="_blank"
                            ><span className="fa-stack fa-lg">
                                    <i className="fa fa-square-o fa-stack-2x"></i>
                                    <i className="fa fa-linkedin fa-stack-1x"></i> </span
                                ></a>
                        </div>

                        <br />
                    </div>
                    <div className="col-md-5 image">
                        <img
                            className="img-responsive mx-auto d-block mydp rounded-circle"
                            src={props.dp.url}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Intro;