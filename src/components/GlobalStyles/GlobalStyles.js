import React from "react"
import { Global } from "@emotion/core"

import "../../assets/fonts.css"

const GlobalStyles = () => {
  return (
    <div>
      <Global
        styles={theme => ({
          "*": {
            outline: "none",
            boxSizing: "border-box",
          },
          html: {
            margin: 0,
            padding: 0,
            WebkitFontSmoothing: "antialiased",
            MozOsxFontSmoothing: "grayscale",
            textRendering: "optimizeLegibility",
            backgroundColor: theme.colors.background,
          },
          body: {
            margin: 0,
            padding: 0,
            color: theme.colors.text,
          },
          a: {
            color: "inherit",
            textDecoration: "none",
            fontWeight: "normal",
          },
          img: {
            display: "block",
            width: "100%",
          },
          ".grid": {
            display: "flex",
            marginLeft: "-32px",
            width: "auto",
          },
          ".column": {
            paddingLeft: "32px",
            backgroundClip: "padding-box",
          },
          "@keyframes spin": {
            "0%": {
              transform: "rotate(0deg)",
            },
            "100%": {
              transform: "rotate(360deg)",
            },
          },
        })}
      />
    </div>
  )
}

export default GlobalStyles
