import React from "react"
import { PageProps } from "gatsby"
import "../styles/global.scss";

// Components:
import Header from "../components/header";

// Content: 
import HeaderContent from '../../content/header';

// Assets:
import downloads from '../../content/downloads';

export default function IndexRoute(props: PageProps) {
  return (
    <>  
      <Header text={HeaderContent} resume={downloads.resume} />
    </>
  )
}