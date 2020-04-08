/** @jsx jsx */
import { jsx } from "theme-ui"

import { Fragment } from "react"

import Navigation from "../Navigation"
import GlobalStyles from "../GlobalStyles"

import BGLeft from "../../assets/bg-left.png"
import BGRight from "../../assets/bg-right.png"

export default function Layout({ children, graphicPosition }) {
  return (
    <Fragment>
      <GlobalStyles />
      <Navigation />
      <div
        sx={{
          position: "fixed",
          top: 0,
          bottom: 0,
          left: 0,
          width: ["150%", "150%", "50%"],
          backgroundImage: `url(${BGLeft})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          zIndex: graphicPosition ? graphicPosition : -1,
        }}
      ></div>

      <div
        sx={{
          position: "fixed",
          top: 0,
          bottom: 0,
          right: 0,
          width: ["150%", "150%", "50%"],
          backgroundImage: `url(${BGRight})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          zIndex: graphicPosition ? graphicPosition : -1,
        }}
      ></div>
      <main
        sx={{
          minHeight: "100vh",
          m: "0 auto",
          pt: 12,
          pb: 5,
          px: [4, 4, 5],
          zIndex: 1,
        }}
      >
        {children}
      </main>
    </Fragment>
  )
}
