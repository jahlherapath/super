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
        <Header />
        <main sx={{ py: 5, px: 4, mt: 5, backgroundColor: "gray" }}>
          {children}
        </main>
        <Footer />
      </div>
    )
  }
}

export default Layout
