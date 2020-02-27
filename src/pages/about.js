import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"

function About() {
  return (
    <Layout>
      <h1>About page</h1>
      <Link to="/">&larr; back to home</Link>
    </Layout>
  )
}

export default About
