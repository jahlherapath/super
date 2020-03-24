/** @jsx jsx */
import { jsx } from "theme-ui"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Form from "../components/Form"

export default function Casting({ data: { casting } }) {
  return (
    <Layout title="Casting">
      <SEO title="Casting" />
      <Container>
        <Left>
          <h1 sx={{ variant: "styles.display" }}>Casting</h1>
          {casting.data.casting.html && (
            <div
              sx={{
                variant: "styles.intro",
                p: {
                  mb: [2, 2, 3],
                },
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
        gridTemplateColumns: "repeat(6, 1fr)",
        gridRowGap: [5, 5, 0],
        pt: 11,
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
        gridColumn: ["span 6", "span 6", "span 3"],
        px: [0, 0, 11],
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
        gridColumn: ["span 6", "span 6", "span 3"],
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
