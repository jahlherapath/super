/** @jsx jsx */
import { jsx } from "theme-ui"

import PageTransition from "gatsby-plugin-page-transitions"

function SideNavigationRight({ children }) {
  return (
    <div
      sx={{
        position: "fixed",
        top: "100%",
        right: 0,
        height: "40px",
        width: "100vh",
        zIndex: 999999,
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        transform: "rotate(90deg)",
        transformOrigin: "100% 0",
        borderBottom: "1px solid black",
        textAlign: "center",
        span: {
          variant: "styles.mono",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "flex-end",
          color: "black",
          lineHeight: 1,
          height: "40px",
          width: "100%",
          textAlign: "right",
          px: 2,
          cursor: "pointer",
        },
      }}
    >
      <span>{children}</span>
    </div>
  )
}

export default SideNavigationRight
