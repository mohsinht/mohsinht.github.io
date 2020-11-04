import React from "react"
import { PageProps } from "gatsby"
import "../styles/global.scss";

// Components:
import Header from "../components/header";

export default function IndexRoute(props: PageProps) {
  return (
    <>  
      <Header />
    </>
  )
}