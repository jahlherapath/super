/** @jsx jsx */
import { jsx } from "theme-ui"

import "normalize.css"

import Navigation from "../Navigation"
import GlobalStyles from "../GlobalStyles"

export default function Layout({ children, title, scrollText }) {
  return (
    <div>
      <GlobalStyles />
      <Navigation />
      <main
        sx={{
          pt: "114px",
          pb: 7,
          px: [5, 5, 11],
          m: "0 auto",
          minHeight: "100vh",
          backgroundColor: "white",
        }}
      >
        {children}
      </main>
    </div>
  )
}
