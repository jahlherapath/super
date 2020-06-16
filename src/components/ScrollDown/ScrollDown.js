/** @jsx jsx */
import { jsx } from "theme-ui"

import * as Scroll from "react-scroll"
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll"

function ScrollDown() {
  return (
    <a
      sx={{
        "&:hover > svg": {
          transform: "translateX(5px)",
          transition: "all 200ms ease",
        },
      }}
      onClick={scroll.scrollToBottom}
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
    </a>
  )
}

export default ScrollDown