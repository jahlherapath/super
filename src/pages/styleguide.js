/** @jsx jsx */
import { jsx } from "theme-ui"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Form from "../components/Form"

export default function Styleguide() {
  return (
    <Layout>
      <SEO title="Styleguide" />
      <div sx={{ width: "50%", margin: "0 auto" }}>
        <Display />
        <Mono />
        <IntroLarge />
        <Intro />
        <HTML />
        <CopyLight />
        <PostLink />
        <Form />
      </div>
    </Layout>
  )
}

const Container = ({ children }) => {
  return <div sx={{ my: 7 }}>{children}</div>
}

const Label = ({ children }) => {
  return (
    <p
      sx={{
        variant: "styles.mono",
        color: "white",
        backgroundColor: "black",
        px: 1,
        mb: 7,
      }}
    >
      styles.{children}
    </p>
  )
}

const Display = () => {
  return (
    <Container>
      <Label>display</Label>
      <h1 sx={{ variant: "styles.display" }}>Romeo Something</h1>
    </Container>
  )
}

const Mono = () => {
  return (
    <Container>
      <Label>mono</Label>
      <p sx={{ variant: "styles.mono" }}>Romeo - He/Him - Available</p>
    </Container>
  )
}

const IntroLarge = () => {
  return (
    <Container>
      <Label>introLarge</Label>
      <h2 sx={{ variant: "styles.introLarge" }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </h2>
    </Container>
  )
}

const Intro = () => {
  return (
    <Container>
      <Label>intro</Label>
      <h3 sx={{ variant: "styles.intro" }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </h3>
    </Container>
  )
}

const HTML = () => {
  return (
    <Container>
      <Label>HTML</Label>
      <p sx={{ variant: "styles.html" }}>
        Ultrices in iaculis nunc sed augue lacus viverra. Consectetur adipiscing
        elit pellentesque habitant. Viverra aliquet eget sit amet tellus cras
        adipiscing. Aliquam ultrices sagittis orci a scelerisque purus semper.
        Et tortor at risus viverra adipiscing at. Condimentum vitae sapien
        pellentesque habitant morbi. Velit ut tortor pretium viverra suspendisse
        potenti nullam. Eu facilisis sed odio morbi. Volutpat maecenas volutpat
        blandit aliquam etiam erat velit. Tortor condimentum lacinia quis vel.
        Quam quisque id diam.
      </p>
    </Container>
  )
}

const CopyLight = () => {
  return (
    <Container>
      <Label>copyLight</Label>
      <p sx={{ variant: "styles.copyLight" }}>
        Ultrices in iaculis nunc sed augue lacus viverra. Consectetur adipiscing
        elit pellentesque habitant. Viverra aliquet eget sit amet tellus cras
        adipiscing. Aliquam ultrices sagittis orci a scelerisque purus semper.
        Et tortor at risus viverra adipiscing at. Condimentum vitae sapien
        pellentesque habitant morbi. Velit ut tortor pretium viverra suspendisse
        potenti nullam. Eu facilisis sed odio morbi. Volutpat maecenas volutpat
        blandit aliquam etiam erat velit. Tortor condimentum lacinia quis vel.
        Quam quisque id diam.
      </p>
    </Container>
  )
}

const PostLink = () => {
  return (
    <Container>
      <Label>postLink</Label>
      <p
        sx={{
          variant: "styles.postLink",
        }}
      >
        Instagram @username
      </p>
    </Container>
  )
}
