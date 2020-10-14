export default {
  colors: {
    text: "black",
    background: "white",
    black: "black",
    white: "white",
    gray: "#2d2d2d",
    offWhite: "#f4f4f4",
    orange: "#ff3600",
    hibiscusPink: "#ff0060",
    babyBlue: "#d6ecfc",
    royalBlue: "#000cff",
    lightGreen: "#d3f323",
    darkGreen: "#0c4004",
    brick: "#8e402a",
    darkBrown: "#4b1818",
    plum: "#4f1535",
  },
  fonts: {
    display: `"Suisse Int'l", sans-serif`,
    sans: `"Suisse Int'l", sans-serif`,
    body: `"Suisse Int'l", sans-serif`,
    serif: "'Suisse Works', serif",
  },
  fontWeights: {
    regular: "normal",
    medium: 500,
    light: 300,
  },
  lineHeights: {
    leadingNone: 1,
    leadingTight: 1.25,
    leadingSnug: 1.375,
    leadingNormal: 1.5,
    leadingRelaxed: 1.625,
    leadingLoose: 2,
  },
  text: {
    display: {
      color: "inherit",
      fontFamily: "display",
      lineHeight: "leadingTight",
      fontWeight: "regular",
      mt: 0,
      mb: 0,
      wordBreak: "break-all",
    },
    menu: {
      color: "inherit",
      fontFamily: "sans",
      lineHeight: "leadingNormal",
      fontWeight: "regular",
      mt: 0,
      mb: 0,
    },
    body: {
      color: "inherit",
      fontFamily: "body",
      lineHeight: "leadingNormal",
      fontWeight: "light",
      mt: 0,
      mb: 0,
    },
    serif: {
      color: "inherit",
      fontFamily: "serif",
      lineHeight: "leadingNormal",
      fontWeight: "regular",
      mt: 0,
      mb: 0,
    },
  },
  styles: {
    display: {
      variant: "text.display",
      fontSize: [8, 9, 10],
      mt: 0,
      mb: 3,
    },
    about: {
      variant: "text.body",
      p: {
        fontSize: [8, 9, 10],
        mt: 0,
        mb: 2,
      },
      strong: {
        fontFamily: "display",
        fontWeight: "regular",
      },
    },
    date: {
      variant: "text.body",
      fontWeight: "regular",
      fontSize: [2, 2, 3],
      mb: 2,
    },
    html: {
      variant: "text.body",
      fontSize: [1, 1, 2],
      mt: 0,
      mb: 2,
      p: {
        fontSize: [1, 1, 2],
        mt: 0,
        mb: 3,
      },
      strong: {
        fontWeight: "regular",
      },
      "h1, h2, h3, h4, h5, h6": {
        variant: "text.body",
        fontWeight: "regular",
      },
    },
    serif: {
      variant: "text.serif",
      fontSize: [0, 0, 1],
    },
    label: {
      variant: "text.body",
      p: 0,
      px: 3,
      pt: 3,
      borderColor: "black",
      border: "1px solid",
      borderBottom: "none",
      backgroundColor: "transparent",
      fontSize: [0, 0, 1],
      fontWeight: "normal",
      textTransform: "uppercase",
      borderRadius: 0,
      width: "100%",
    },
    input: {
      variant: "text.body",
      px: 3,
      pb: 3,
      mb: 2,
      borderColor: "black",
      border: "1px solid",
      borderTop: "none",
      backgroundColor: "transparent",
      fontSize: [3, 3, 5],
      borderRadius: 0,
      width: "100%",
    },
    button: {
      variant: "text.body",
      px: 5,
      height: ["30px", "30px", "40px"],
      borderRadius: ["15px", "15px", "20px"],
      borderColor: "black",
      border: "1px solid",
      backgroundColor: "transparent",
      fontSize: [3, 3, 4],
      textTransform: "uppercase",
      display: "inline-flex",
      justifyContent: "center",
      alignItems: "center",
      cursor: "pointer",
      transition: "200ms all ease",
      "&:hover": {
        backgroundColor: "black",
        color: "white",
        border: "1px solid black",
      },
    },
    category: {
      variant: "text.serif",
      color: "white",
      fontWeight: "medum",
      fontSize: [0, 0, 1],
      fontStyle: "italic",
      py: 1,
      px: 3,
      mr: 3,
      background: "linear-gradient(to left, black 50%, #d3f323 50%) right",
      backgroundSize: "200%",
      transition: "all 200ms ease-out",
      borderRadius: "2px",
      "&:hover": {
        color: "black",
        backgroundPosition: "left bottom",
      },
    },
    nav: {
      fontFamily: "body",
      fontSize: [1, 1, 2],
      height: "40px",
      px: 4,
      display: "flex",
      alignItems: "center",
      borderBottom: "1px solid black",
      transition: "all 200ms ease",
      justifyContent: "space-between",
      backgroundSize: "202%",
    },
    tagButton: {
      variant: "text.body",
      px: 4,
      m: "2px",
      height: "30px",
      borderRadius: "15px",
      borderColor: "black",
      border: "1px solid",
      backgroundColor: "white",
      fontSize: 3,
      textTransform: "uppercase",
      display: "inline-flex",
      justifyContent: "center",
      alignItems: "center",
      cursor: "pointer",
      transition: "200ms all ease",
      "&:hover": {
        backgroundColor: "black",
        color: "white",
        border: "1px solid black",
      },
    },
    carouselButton: {
      variant: "text.body",
      height: ["50px", "50px", "100px"],
      borderColor: "black",
      border: "1px solid",
      backgroundColor: "transparent",
      fontSize: [3, 3, 4],
      textTransform: "uppercase",
      display: "inline-flex",
      justifyContent: "center",
      alignItems: "center",
      cursor: "pointer",
      transition: "200ms all ease",
    },
    navigation: {
      variant: "text.menu",
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "space-between",
      backgroundColor: "white",
      borderColor: "black",
      borderBottom: "1px solid",
      py: [2, 2, 3],
      px: [4, 4, 6],
      sup: {
        display: "block",
        top: 0,
        pt: 1,
        fontSize: [0, 0, 2],
        lineHeight: "inherit",
        verticalAlign: "initial",
      },
      span: {
        display: "inline-flex",
        mt: "2px",
        fontSize: [4, 4, 6],
        width: "120px",
        textTransform: "uppercase",
      },
    },
  },
  fontSizes: [12, 14, 16, 18, 20, 22, 24, 26, 32, 38, 48, 56, 64, 96, 180],
  space: [0, 4, 8, 14, 16, 32, 48, 56, 64, 72, 84, 96, 128, 256, 512],
  breakpoints: ["40em", "56em", "64em"],
}
