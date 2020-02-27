import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"

const IndexPage = () => (
  <Layout>
    <h1>Homepage</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>

    <Link to="/about/">Go to about</Link>
  </Layout>
)

export default IndexPage
