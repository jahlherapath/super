/** @jsx jsx */
import { jsx } from "theme-ui"

import { Fragment } from "react"

import Navigation from "../Navigation"
import GlobalStyles from "../GlobalStyles"

export default function Layout({ children, sideMenuText }) {
  return (
    <Fragment>
      <GlobalStyles />
      <Navigation />
      <main
        sx={{
          position: "relative",
          minHeight: "100vh",
          m: "0 auto",
        }}
      >
        <div sx={{ px: "40px" }}>{children}</div>
      </main>
    </Fragment>
  )
}
