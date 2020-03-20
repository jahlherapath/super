/** @jsx jsx */
import { jsx } from "theme-ui"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Form from "../components/Form"

function Styleguide() {
  return (
    <Layout>
      <SEO title="Styleguide" />
      <div sx={{ width: "50%" }}>
        <p sx={{ variant: "styles.super" }}>Super</p>
        <h1 sx={{ variant: "styles.display" }}>Romeo Something</h1>
        <p sx={{ variant: "styles.mono" }}>Romeo - He/Him - Available</p>
        <h2 sx={{ variant: "styles.introLarge" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </h2>
        <h3 sx={{ variant: "styles.intro" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </h3>
        <p sx={{ variant: "styles.copy" }}>
          Ultrices in iaculis nunc sed augue lacus viverra. Consectetur
          adipiscing elit pellentesque habitant. Viverra aliquet eget sit amet
          tellus cras adipiscing. Aliquam ultrices sagittis orci a scelerisque
          purus semper. Et tortor at risus viverra adipiscing at. Condimentum
          vitae sapien pellentesque habitant morbi. Velit ut tortor pretium
          viverra suspendisse potenti nullam. Eu facilisis sed odio morbi.
          Volutpat maecenas volutpat blandit aliquam etiam erat velit. Tortor
          condimentum lacinia quis vel. Quam quisque id diam.
        </p>
        <p
          sx={{
            variant: "styles.postLink",
            py: 3,
            px: 3,
            backgroundColor: "purple",
            color: "white",
          }}
        >
          Instagram @username
        </p>
        <p
          sx={{
            variant: "styles.postLink",
            py: 3,
            px: 3,
            backgroundColor: "purple",
            color: "white",
          }}
        >
          Instagram @username
        </p>
        <p
          sx={{
            variant: "styles.postLink",
            py: 3,
            px: 3,
            backgroundColor: "purple",
            color: "white",
          }}
        >
          Instagram @username
        </p>
        <Form />
      </div>
    </Layout>
  )
}

export default Styleguide
