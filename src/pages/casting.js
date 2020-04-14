/** @jsx jsx */
import { jsx } from "theme-ui"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Form from "../components/Form"

export default function Casting({ data: { casting } }) {
  return (
    <Layout>
      <SEO title="Casting" />
      <Container>
        <Left>
          <h1 sx={{ variant: "styles.display" }}>Casting</h1>
          {casting.data.casting.html && (
            <div
              sx={{
                variant: "styles.html",
              }}
              dangerouslySetInnerHTML={{ __html: casting.data.casting.html }}
            />
          )}
        </Left>
        <Right>
          <Form />
        </Right>
      </Container>
    </Layout>
  )
}

const Container = ({ children }) => {
  return (
    <div
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        pb: 5,
      }}
    >
      {children}
    </div>
  )
}

const Left = ({ children }) => {
  return (
    <div
      sx={{
        position: ["relative", "relative", "sticky"],
        bottom: [4, 4, 5],
        alignSelf: "flex-end",
        gridColumn: ["span 2", "span 2", "span 1"],
        pr: [0, 0, 7],
      }}
    >
      {children}
    </div>
  )
}

const Right = ({ children }) => {
  return (
    <div
      sx={{
        position: "relative",
        gridColumn: ["span 2", "span 2", "span 1"],
        form: {
          display: "flex",
          width: "100%",
          height: "100%",
        },
      }}
    >
      {children}
    </div>
  )
}

export const castingQuery = graphql`
  query CastingQuery {
    casting: prismicInfo {
      data {
        casting {
          html
        }
      }
    }
  }
`
