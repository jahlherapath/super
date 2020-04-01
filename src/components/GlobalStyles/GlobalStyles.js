import React from "react"
import { Global } from "@emotion/core"

import "../../assets/fonts.css"

const GlobalStyles = () => {
  return (
    <div>
      <Global
        styles={theme => ({
          html: {
            margin: 0,
            padding: 0,
            WebkitFontSmoothing: "antialiased",
            MozOsxFontSmoothing: "grayscale",
            textRendering: "optimizeLegibility",
            outline: "none",
          },
          body: {
            color: theme.colors.text,
          },
          a: {
            textDecoration: "none",
          },
          button: {},
          img: {
            display: "block",
            width: "100%",
          },
        })}
      />
    </div>
  )
}

export default GlobalStyles
