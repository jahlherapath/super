/** @jsx jsx */
import { jsx } from "theme-ui"

import { Fragment } from "react"

import Navigation from "../Navigation"
import GlobalStyles from "../GlobalStyles"

export default function Layout({ children }) {
  return (
    <Fragment>
      <GlobalStyles />
      <Navigation />
      <main
        sx={{
          minHeight: "100vh",
          m: "0 auto",
          py: 12,
          px: 5,
        }}
      >
        {children}
      </main>
    </Fragment>
  )
}
