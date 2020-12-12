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
          ".grid-talent": {
            display: "flex",
            marginLeft: "-32px",
            width: "auto",
          },
          ".grid-gallery": {
            display: "flex",
            marginLeft: "-32px",
            width: "auto",
          },
          ".column": {
            paddingLeft: "32px",
            backgroundClip: "padding-box",
          },
          ".active": {
            color: "inherit !important",
            width: "100% !important",
          },
          ".headroom": {
            zIndex: "999999 !important",
          },
          "@media (max-width: 56em)": {
            ".grid-talent": { marginLeft: "-16px !important" },
            ".grid-gallery": { marginLeft: "-16px !important" },
            ".column": { paddingLeft: "16px !important" },
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
