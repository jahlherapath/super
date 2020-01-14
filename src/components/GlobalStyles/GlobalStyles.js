import React from "react"
import { Global, css } from "@emotion/core"

import NBInternationalMono from "../../assets/fonts/NBInternationalMonoWebfont.woff"
import NBInternationalRegular from "../../assets/fonts/NBInternationalRegularWebfont.woff"
import NBInternationalBold from "../../assets/fonts/NBInternationalBoldWebfont.woff"

import MonumentGroteskMono from "../../assets/fonts/MonumentGrotesk-Mono.woff"
import MonumentGroteskSemiMono from "../../assets/fonts/MonumentGrotesk-SemiMono.woff"
import MonumentGroteskRegular from "../../assets/fonts/MonumentGrotesk-Regular.woff"
import MonumentGroteskMedium from "../../assets/fonts/MonumentGrotesk-Medium.woff"
import MonumentGroteskBold from "../../assets/fonts/MonumentGrotesk-Bold.woff"

const GlobalStyles = () => {
  const styles = css`
    @font-face {
      font-family: "NB International Mono";
      src: url(${NBInternationalMono});
      font-weight: normal;
      font-style: normal;
    }

    @font-face {
      font-family: "NB International";
      src: url(${NBInternationalRegular});
      font-weight: normal;
      font-style: normal;
    }

    @font-face {
      font-family: "NB International";
      src: url(${NBInternationalBold});
      font-weight: bold;
      font-style: normal;
    }

    @font-face {
      font-family: "Monument Grotesk Mono";
      src: url(${MonumentGroteskMono});
      font-weight: 300;
      font-style: normal;
    }

    @font-face {
      font-family: "Monument Grotesk SemiMono";
      src: url(${MonumentGroteskSemiMono});
      font-weight: 400;
      font-style: normal;
    }

    @font-face {
      font-family: "Monument Grotesk";
      src: url(${MonumentGroteskRegular});
      font-weight: 500;
      font-style: normal;
    }

    @font-face {
      font-family: "Monument Grotesk";
      src: url(${MonumentGroteskMedium});
      font-weight: 600;
      font-style: normal;
    }

    @font-face {
      font-family: "Monument Grotesk";
      src: url(${MonumentGroteskBold});
      font-weight: bold;
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
            color: theme.colors.text,
            backgroundColor: theme.colors.white,
            fontFamily: theme.fonts.body,
            fontWeight: theme.fontWeights.body,
          },
          a: {
            textDecoration: "none",
          },
          img: {
            width: "100%",
          },
          "h1, h2, h3, h4, h5, h6": {
            marginTop: theme.space[3],
            marginBottom: theme.space[3],
          },
          p: {
            marginTop: theme.space[3],
            marginBottom: theme.space[3],
          },
        })}
      />
      <Global styles={styles} />
    </div>
  )
}

export default GlobalStyles
