/** @jsx jsx */
import { jsx } from "theme-ui"

import { Link } from "gatsby"

import { Fragment } from "react"

import GlobalStyles from "../components/GlobalStyles"
import SEO from "../components/SEO"

function Index() {
  return (
    <Fragment>
      <GlobalStyles />
      <SEO title="1000% Super Real" />
      <div
        sx={{
          position: "fixed",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 999999,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "rgba(0,12,255,0.95)",
          overflow: "hidden",
        }}
      >
        <div
          sx={{
            width: ["320px", "500px", "720px"],
            paddingTop: "56.25%",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <iframe
            title="Super Intro Video"
            frameBorder={0}
            allowFullScreen
            scrolling="no"
            allow="autoplay;fullscreen"
            src="https://onelineplayer.com/player.html?autoplay=true&autopause=false&muted=true&loop=false&url=https%3A%2F%2Fvimeo.com%2F490549070&poster=&time=false&progressBar=true&overlay=true&muteButton=true&fullscreenButton=true&style=light&quality=1080p&playButton=true"
            sx={{
              position: "absolute",
              height: "100%",
              width: "100%",
              left: "0px",
              top: "0px",
            }}
          />
        </div>
        <div
          sx={{
            position: "fixed",
            left: 0,
            right: 0,
            bottom: 10,
            textAlign: "center",
          }}
        >
          <Link
            to="/talent"
            sx={{
              variant: "styles.button",
            }}
          >
            Enter Super
          </Link>
        </div>
      </div>
    </Fragment>
  )
}

export default Index
