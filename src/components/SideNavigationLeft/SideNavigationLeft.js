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
          variant: "styles.nav",
          "&:nth-of-type(1)": {
            color: "white",
            background:
              "linear-gradient(to left, #4f1535 50%, white 50%) right",
            backgroundSize: "203%",
          },
          "&:nth-of-type(2)": {
            color: "black",
            background:
              "linear-gradient(to left, #8e402a 50%, white 50%) right",
            backgroundSize: "203%",
          },
          "&:nth-of-type(3)": {
            color: "black",
            background:
              "linear-gradient(to left, #ff3600 50%, white 50%) right",
            backgroundSize: "203%",
          },
          "&:nth-of-type(4)": {
            color: "black",
            background:
              "linear-gradient(to left, #d3f323 50%, white 50%) right",
            backgroundSize: "203%",
          },
          "&:nth-of-type(5)": {
            color: "black",
            background:
              "linear-gradient(to left, #d6ecfc 50%, white 50%) right",
            backgroundSize: "203%",
          },
        },
      }}
    >
      {children}
    </div>
  )
}

export default SideNavigationLeft
