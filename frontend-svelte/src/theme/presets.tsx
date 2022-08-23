export const theme = {
  pallete: {
    //400
    primary: {
      main: "#30A193",
      light: "#E8FFFC",
    },

    //300
    secondary: {
      main: "#4ABAAD",
      contrastText: "#FFFFFF",
    },

    //200
    warning: {
      main: "#77EDDF",
    },

    info: {
      main: "#fff",
    },

    //nav item color #E8FFFC
    //600 #0B6D62
    //500 #1B877A
    p1: {
      main: "#22C870",
    },

    p2: {
      main: "#20BA68",
    },

    p3: {
      main: "#E9FAF1",
    },

    text1: {
      main: "#042330",
    },

    text2: {
      main: "#03314B",
    },
    text3: {
      main: "#6D787E",
    },
    text4: {
      main: "#747575",
    },
    background: {
      main: "#F1F6F4",
      paper: "#F1F6F4",
      default: "#FFFFFF",
    },
    black: {
      main: "#373C38",
    },
    white: {
      main: "#FFFFFF",
    },

    // grey: {
    //   50: "#94A196",
    //   100: "#6C787F",
    //   200: "#3A4649",
    //   300: "#042330",
    // },
    red: {
      main: "#FF725E",
    },
    alpha600: {
      main: "#0B6D62",
    },
    mainBackground: {
      main: "#F7F7F7",
    },
    alpha500: {
      main: "#1B877A",
    },
    alpha400: {
      main: "#30A193",
    },
    alpha300: {
      main: "#4ABAAD",
    },
    alpha200: {
      main: "#77EDDF",
    },
    alpha100: {
      main: "#B2FFF6",
    },
    betaHigh: {
      main: "#373C38",
    },
    betaMedium: {
      main: "#656E66",
    },
    betaLow: {
      main: "#94A196",
    },
    beta400: {
      main: "#D6D6D6",
    },
    beta200: {
      main: "#E9EBE9",
    },
    beta100: {
      main: "#F7F7F7",
    },
    gammaWhite: {
      main: "#FFFFFF",
    },
    gammaColor1: {
      main: "#E8FFFC",
    },
    gammaColor2: {
      main: "#E7FCE0",
    },
    gammaColor3: {
      main: "#F5FFF7",
    },
    gammaAccent1: {
      main: "#ED8F02",
    },
    gammaAccent2: {
      main: "#FF725E",
    },
    gammaAccent3: {
      main: "#EFFFFD",
    },
    boxShadow: {
      main: "#7d7d7d",
    },
  },

  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 1336,
      lg: 1440,
      xl: 1745,
    },
  },
};

export let cssVarStyles = Object.entries(theme.pallete)
  .map(([key, value]) => `--${key}:${value.main}`)
  .join(";");
