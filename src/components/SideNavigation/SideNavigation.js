/** @jsx jsx */
import { jsx } from "theme-ui"

import { Link } from "gatsby"
import PageTransition from "gatsby-plugin-page-transitions"

function SideNavigation() {
  return (
    <div
      sx={{
        position: "fixed",
        top: "100%",
        left: 0,
        height: "40px",
        width: "100vh",
        zIndex: 30,
        display: "flex",
        alignItems: "center",
        transform: "rotate(-90deg)",
        transformOrigin: "top left",
        borderBottom: "1px solid black",
        a: {
          position: "relative",
          variant: "styles.mono",
          color: "black",
          lineHeight: 1,
          height: "40px",
          px: 4,
          display: "flex",
          alignItems: "center",
          borderRight: "1px solid black",
          borderBottom: "1px solid black",
        },
      }}
    >
      <Link to="/about" sx={{}}>
        About
      </Link>
      <Link to="/blog" sx={{}}>
        Journal
      </Link>
      <PageTransition
        defaultStyle={{
          transition: "all 600ms ease-in-out",
        }}
        transitionStyles={{
          entering: { flex: 1, backgroundColor: "transparent" },
          entered: { flex: 1, backgroundColor: "red" },
          exiting: { flex: 0, backgroundColor: "transparent" },
        }}
        transitionTime={600}
      >
        <Link to="/casting" sx={{}}>
          Casting
        </Link>
      </PageTransition>
      <Link to="/" sx={{ borderRight: "none !important" }}>
        Talent
      </Link>
    </div>
  )
}

export default SideNavigation
