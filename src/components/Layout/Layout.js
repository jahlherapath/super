/** @jsx jsx */
import { jsx } from "theme-ui"

import { Fragment } from "react"

import Navigation from "../Navigation"
import GlobalStyles from "../GlobalStyles"

import PageTransition from "gatsby-plugin-page-transitions"

export default function Layout({ children, sideMenuText }) {
  return (
    <Fragment>
      <GlobalStyles />
      <Navigation />
      <PageTransition
        defaultStyle={{
          transition: "top 600ms ease-in-out",
          top: "100%",
          position: "absolute",
          width: "100%",
        }}
        transitionStyles={{
          entering: { top: "0%" },
          entered: { top: "0%" },
          exiting: { top: "100%" },
        }}
        transitionTime={600}
      >
        <main
          sx={{
            position: "relative",
            minHeight: "100vh",
            m: "0 auto",
            py: "60px",
            px: "40px",
          }}
        >
          <div sx={{ p: 5 }}>{children}</div>
        </main>
      </PageTransition>
    </Fragment>
  )
}
