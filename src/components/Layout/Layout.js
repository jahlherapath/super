/** @jsx jsx */
import { jsx } from "theme-ui"

import React from "react"

import "normalize.css"

import Header from "../Header/Header"
import Footer from "../Footer/Footer"

import GlobalStyles from "../GlobalStyles/GlobalStyles"

function Layout({ children, title }) {
  return (
    <div>
      <GlobalStyles />
      {/* <Header /> */}
      <div
        sx={{
          position: "fixed",
          top: 0,
          bottom: 0,
          left: 7,
          width: "100vh",
          height: "40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transformOrigin: "left top",
          transform: "rotate(-90deg) translateX(-100%)",
          textAlign: "center",
        }}
      >
        <p>
          <span sx={{ variant: "styles.super" }}>Super </span>
          <span sx={{ variant: "styles.body" }}>— {title}</span>
        </p>
      </div>
      <div
        sx={{
          position: "fixed",
          top: 0,
          bottom: 0,
          right: 7,
          width: "100vh",
          height: "40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transformOrigin: "right top",
          transform: "rotate(90deg) translateX(100%)",
          textAlign: "center",
        }}
      >
        Page Title
      </div>
      <main
        sx={{
          py: 5,
          px: 11,
          m: "0 auto",
          backgroundColor: "white",
        }}
      >
        {children}
      </main>
      {/* <Footer /> */}
    </div>
  )
}

export default Layout
