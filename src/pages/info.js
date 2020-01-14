/** @jsx jsx */
import { jsx } from "theme-ui"

import { graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/SEO"

function Info() {
  return (
    <Layout>
      <SEO title="Info" />
      <h1>Info page</h1>
    </Layout>
  )
}

export default Info
