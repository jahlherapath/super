/** @jsx jsx */
import { jsx } from "theme-ui"

import PageTransition from "gatsby-plugin-page-transitions"

function SideNavigationLeft({ children }) {
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
        backgroundColor: "white",
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
      {children}
    </div>
  )
}

export default SideNavigationLeft
