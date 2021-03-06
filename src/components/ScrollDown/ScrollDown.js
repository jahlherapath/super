/** @jsx jsx */
import { jsx } from "theme-ui"

import { animateScroll as scroll } from "react-scroll"

function ScrollDown() {
  return (
    <button
      sx={{
        background: "none",
        border: "none",
        cursor: "pointer",
        fontFamily: "body",
        fontSize: [1, 1, 2],
        p: 3,
        height: "40px",
        display: "inline-flex",
        alignItems: "center",
        textTransform: "uppercase",
      }}
      onClick={scroll.scrollToBottom}
      aria-label="Sroll Down"
    >
      Scroll Down
      <svg
        width="15"
        height="10"
        viewBox="0 0 15 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        sx={{ ml: 3 }}
      >
        <path
          d="M15.0005 5L0.000488393 9.33013L0.000488289 0.669873L15.0005 5Z"
          fill="black"
        />
      </svg>
    </button>
  )
}

export default ScrollDown
