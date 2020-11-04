import React from "react"
import "./style.scss";

const Header = (props: any) => {
    return (
        <>
            <nav id="navbar" className="navbar navbar-light bg-light navbar-fixed-top mh-nav">
                <a className="navbar-brand" href="#"><b>Mohsin's Resumé</b></a>
                <a
                    className="download-phone"
                    href="/downloads/MohsinHayatResume.pdf"
                    data-toggle="tooltip"
                    title="Download resume file in PDF"
                    download
                >Download PDF version</a
                >
                <ul className="nav nav-pills">
                    <li className="nav-item" id="intro-link">
                        <a className="nav-link" href="#intro">Intro</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#education">Education</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#exp">Experience</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#contact">Contact</a>
                    </li>
                    <li className="nav-item download-button">
                        <a
                            className="nav-link download-button-text"
                            href="/downloads/MohsinHayatResume.pdf"
                            data-toggle="tooltip"
                            title="Download resume file in PDF"
                            download
                        >Download</a
                        >
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Header;