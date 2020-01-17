/** @jsx jsx */
import { jsx } from "theme-ui"

// import { graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Form from "../components/Form"

function Info({ data: { info } }) {
  return (
    <Layout>
      <SEO title="Info" />
      <div>
        <h1>Info page</h1>
        {info.data.about.html && (
          <div dangerouslySetInnerHTML={{ __html: info.data.about.html }} />
        )}
        {info.data.address.html && (
          <div dangerouslySetInnerHTML={{ __html: info.data.address.html }} />
        )}
        {info.data.email.text && (
          <div sx={{ mb: 2 }}>
            <a href={"mailto:" + info.data.email.text}>
              {info.data.email.text}
            </a>
          </div>
        )}
        {info.data.instagram.url && (
          <div sx={{ mb: 2 }}>
            <a href={info.data.instagram.url}>Instagram</a>
          </div>
        )}
        {info.data.press_kit.url && (
          <div sx={{ mb: 2 }}>
            <a href={info.data.press_kit.url}>Press Kit</a>
          </div>
        )}
      </div>
      <Form />
    </Layout>
  )
}

export default Info

export const infoQuery = graphql`
  query InfoQuery {
    info: prismicInfo {
      data {
        about {
          html
        }
        address {
          html
        }
        email {
          text
        }
        instagram {
          url
        }
        press_kit {
          url
        }
      }
    }
  }
`
