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
          left: [0, 0, 7],
          width: "100vh",
          height: "40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transformOrigin: "left top",
          transform: "rotate(-90deg) translateX(-100%)",
          textAlign: "center",
          backgroundColor: "red",
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
          right: [0, 0, 7],
          width: "100vh",
          height: "40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transformOrigin: "right top",
          transform: "rotate(90deg) translateX(100%)",
          textAlign: "center",
          backgroundColor: "red",
        }}
      >
        Page Title
      </div>
      <main
        sx={{
          py: 5,
          px: [3, 3, 11],
          m: "0 auto",
          minHeight: "100vh",
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
