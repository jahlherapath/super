import React from "react"
import { Global, css } from "@emotion/core"

import HelveticaNowDisplayBold from "../../assets/fonts/HelveticaNowDisplay-Bold.woff"
import HelveticaNowDisplayMedium from "../../assets/fonts/HelveticaNowDisplay-Medium.woff"
import HelveticaNowDisplayRegular from "../../assets/fonts/HelveticaNowDisplay-Regular.woff"
import HelveticaNowDisplayExtraLight from "../../assets/fonts/HelveticaNowDisplay-ExtraLight.woff"

import HelveticaNowTextBold from "../../assets/fonts/HelveticaNowText-Bold.woff"
import HelveticaNowTextMedium from "../../assets/fonts/HelveticaNowText-Medium.woff"
import HelveticaNowTextRegular from "../../assets/fonts/HelveticaNowText-Regular.woff"

import TimesNow from "../../assets/fonts/TimesNow-SemiLight.woff"

import IBMPlexMono from "../../assets/fonts/IBMPlexMono.woff"

const GlobalStyles = () => {
  const styles = css`
    @font-face {
      font-family: "Helvetica Now Display";
      src: url(${HelveticaNowDisplayBold});
      font-weight: 700;
      font-style: normal;
    }
    @font-face {
      font-family: "Helvetica Now Display";
      src: url(${HelveticaNowDisplayMedium});
      font-weight: 600;
      font-style: normal;
    }
    @font-face {
      font-family: "Helvetica Now Display";
      src: url(${HelveticaNowDisplayRegular});
      font-weight: 500;
      font-style: normal;
    }
    @font-face {
      font-family: "Helvetica Now Display";
      src: url(${HelveticaNowDisplayExtraLight});
      font-weight: 300;
      font-style: normal;
    }

    @font-face {
      font-family: "Helvetica Now Text";
      src: url(${HelveticaNowTextBold});
      font-weight: 700;
      font-style: normal;
    }
    @font-face {
      font-family: "Helvetica Now Text";
      src: url(${HelveticaNowTextMedium});
      font-weight: 600;
      font-style: normal;
    }
    @font-face {
      font-family: "Helvetica Now Text";
      src: url(${HelveticaNowTextRegular});
      font-weight: 500;
      font-style: normal;
    }

    @font-face {
      font-family: "Times Now";
      src: url(${TimesNow});
      font-weight: 300;
      font-style: normal;
    }

    @font-face {
      font-family: "IBM Plex Mono";
      src: url(${IBMPlexMono});
      font-weight: normal;
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
            color: theme.colors.primary,
            textDecoration: "none",
            borderBottom: "1px solid",
            borderColor: theme.colors.primary,
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
