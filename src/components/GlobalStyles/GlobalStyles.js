import React from "react"
import { Global, css } from "@emotion/core"

import FoundersGroteskMono from "../../assets/fonts/FoundersGroteskMono.woff"
import FoundersGroteskRegular from "../../assets/fonts/FoundersGroteskText-Regular.woff"
import FoundersGroteskBold from "../../assets/fonts/FoundersGrotesk-Bold.woff"
import FoundersGroteskMedium from "../../assets/fonts/FoundersGroteskText-Medium.woff"

const GlobalStyles = () => {
  const styles = css`
    @font-face {
      font-family: "Founders Grotesk";
      src: url(${FoundersGroteskBold});
      font-weight: 700;
      font-style: normal;
    }
    @font-face {
      font-family: "Founders Grotesk";
      src: url(${FoundersGroteskMedium});
      font-weight: 600;
      font-style: normal;
    }
    @font-face {
      font-family: "Founders Grotesk";
      src: url(${FoundersGroteskRegular});
      font-weight: 400;
      font-style: normal;
    }
    @font-face {
      font-family: "Founders Grotesk";
      src: url(${FoundersGroteskMono});
      font-weight: 300;
      font-style: normal;
    }
  `

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
          },
          body: {
            color: "text",
            backgroundColor: "white",
            fontFamily: theme.fonts.body,
            fontWeight: theme.fontWeights.body,
          },
          a: {
            color: theme.colors.primary,
            textDecoration: "none",
          },
          img: {
            width: "100%",
          },
        })}
      />
      <Global styles={styles} />
    </div>
  )
}

export default GlobalStyles
