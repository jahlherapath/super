/** @jsx jsx */
import { jsx } from "theme-ui"

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
          color: "white",
          lineHeight: 1,
          height: "40px",
          px: 4,
          display: "flex",
          alignItems: "center",
          borderBottom: "1px solid black",
          variant: "styles.serif",
          fontStyle: "italic",
          "&:nth-of-type(1)": { backgroundColor: "plum", color: "white" },
          "&:nth-of-type(2)": { backgroundColor: "brick" },
          "&:nth-of-type(3)": { backgroundColor: "orange" },
          "&:nth-of-type(4)": { backgroundColor: "lightGreen" },
          "&:nth-of-type(5)": { backgroundColor: "babyBlue" },
        },
      }}
    >
      {children}
    </div>
  )
}

export default SideNavigationLeft
