export const colors = {
  gatsbyPurple: "#754991",
  grayA: "#2E2E2E",
  grayB: "#4C4D4F",
  grayD: "#9B9B9B",
  grayE: "#C0C0C0",
  success: "#7AB800",
  warning: "#F0A800",
  error: "#BF4C4A",
  white: "#FFFFFF",
  black: "#000000"
};

export const typography = {
  h1: {
    fontFamily: "Roboto Slab",
    fontWeight: 300,
    fontSize: "48px",
    lineHeight: "64px",
    marginBottom: "20px"
  },
  h3: {
    fontFamily: "Roboto",
    fontWeight: 700,
    fontSize: "24px",
    lineHeight: "32px",
    marginBottom: "20px"
  },
  pDefault: {
    fontFamily: "Roboto",
    fontWeight: 300,
    fontSize: "18px",
    lineHeight: "28px",
    marginBottom: "16px"
  },
  pSmall: {
    fontFamily: "Roboto",
    fontWeight: 300,
    fontSize: "16px",
    lineHeight: "24px",
    marginBottom: "12px"
  },
  pXSmall: {
    fontFamily: "Roboto",
    fontWeight: 300,
    fontSize: "14px",
    lineHeight: "20px",
    marginBottom: "12px"
  }
};

export const theme = {
  colors: { ...colors },
  typography: { ...typography },
  container: {
    margin: "0 auto",
    maxWidth: "1280px",
    padding: "1.45rem 1.0875rem"
  },
  link: {
    color: colors.gatsbyPurple,
    textDecoration: "none"
  },
  shadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)"
};
