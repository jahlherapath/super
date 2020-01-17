/** @jsx jsx */
import { jsx } from "theme-ui"

// import { graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Form from "../components/Form"

function Info() {
  return (
    <Layout>
      <SEO title="Info" />
      <div>
        <h1>Info page</h1>
        <Form />
      </div>
    </Layout>
  )
}

export default Info
