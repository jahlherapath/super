/** @jsx jsx */
import { jsx } from "theme-ui"

import React from "react"

import "normalize.css"

import Header from "../Header/Header"
import Footer from "../Footer/Footer"

import GlobalStyles from "../GlobalStyles/GlobalStyles"

class Layout extends React.Component {
  render() {
    const { children } = this.props
    return (
      <div>
        <GlobalStyles />
        {/* <Header /> */}
        <div
          sx={{
            position: "fixed",
            top: 0,
            bottom: 0,
            left: 0,
            width: "100vh",
            height: "40px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transformOrigin: "left top",
            transform: "rotate(-90deg) translateX(-100%)",
            backgroundColor: "white",
            textAlign: "center",
          }}
        >
          Page Title
        </div>
        <div
          sx={{
            position: "fixed",
            top: 0,
            bottom: 0,
            right: 0,
            width: "100vh",
            height: "40px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transformOrigin: "right top",
            transform: "rotate(90deg) translateX(100%)",
            backgroundColor: "white",
            textAlign: "center",
          }}
        >
          Page Title
        </div>
        <main
          sx={{
            maxWidth: "1250px",
            py: 5,
            px: 5,
            m: "0 auto",
            backgroundColor: "gray",
          }}
        >
          {children}
        </main>
        {/* <Footer /> */}
      </div>
    )
  }
}

export default Layout
