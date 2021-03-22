import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import locations from '../locations.json';

import Layout from "../components/layout"
import SEO from "../components/seo"
import Card from "../components/card"

console.log(locations);

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Latest spots</h1>
    <div style={{ display: "flex", flexWrap: "wrap", margin: "auto -20px" }}>
      {locations.map(Card)}
    </div>
  </Layout>
)

export default IndexPage
