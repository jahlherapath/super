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
        cursor: "pointer",
        span: {
          variant: "styles.mono",
          display: "block",
          color: "black",
          lineHeight: 1,
          px: 4,
        },
      }}
    >
      <span>{children}</span>
    </div>
  )
}

export default SideNavigationRight
