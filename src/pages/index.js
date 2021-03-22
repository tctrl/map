import * as React from "react"

import locations from "../locations.json"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Card from "../components/card"

console.log(locations)

const IndexPage = () => (
  <Layout>
    <SEO title="Latest car map uk spots" />
    <div style={{ display: "flex", flexWrap: "wrap", margin: "auto -20px" }}>
      {locations.map(Card)}
    </div>
  </Layout>
)

export default IndexPage
