export default {
  colors: {
    text: "#2b2b2b",
    primary: "#4834d4",
    black: "black",
    white: "white",
    gray: "#f1f1f1",
  },
  fonts: {
    body: "'Monument Grotesk', system-ui, sans-serif",
    heading: "'Monument Grotesk', system-ui, sans-serif",
    mono: "'Monument Grotesk Mono', system-ui, sans-serif",
    semiMono: "'Monument Grotesk SemiMono', system-ui, sans-serif",
  },
  fontWeights: {
    heading: "bold",
    medium: 600,
    body: 500,
    semiMono: 400,
    mono: 300,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  styles: {
    navLink: {
      color: "text",
      pr: 3,
      "&:visited": {
        color: "text",
      },
      "&:hover": {
        color: "primary",
      },
      "&:last-of-type": {
        pr: 0,
      },
    },
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
}
