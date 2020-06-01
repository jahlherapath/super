/** @jsx jsx */
import { jsx } from "theme-ui"

import { Fragment } from "react"

import Navigation from "../Navigation"
import GlobalStyles from "../GlobalStyles"

import PageTransition from "gatsby-plugin-page-transitions"

export default function Layout({ children, graphicPosition }) {
  return (
    <Fragment>
      <GlobalStyles />
      <Navigation />
      <div
        sx={{
          position: "fixed",
          top: "100%",
          right: 0,
          height: "40px",
          width: "100vh",
          zIndex: 30,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transform: "rotate(90deg)",
          transformOrigin: "100% 0",
          borderBottom: "1px solid black",
          textAlign: "center",
          a: {
            variant: "styles.mono",
            color: "black",
            lineHeight: 1,
            px: 4,
          },
        }}
      >
        <a href="#">** Page Actions Should Go Here **</a>
      </div>
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
            px: "40px",
            mt: ["70px", "70px", "110px"],
          }}
        >
          <div sx={{ p: 5 }}>{children}</div>
        </main>
      </PageTransition>
    </Fragment>
  )
}
