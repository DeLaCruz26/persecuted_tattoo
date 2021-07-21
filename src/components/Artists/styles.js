import { makeStyles } from "@material-ui/core";
import Color from "color";

const useGridStyles = makeStyles(({ breakpoints }) => ({
  root: {
    [breakpoints.up("md")]: {
      justifyContent: "center",
    },
    background: "#000",
  },
}));

export default useGridStyles;

export const useStyles = makeStyles(() => ({
  container: {
    height: "100vh",
    background: "#000",
  },
  actionArea: {
    borderRadius: 8,
    transition: "0.2s",
    "&:hover": {
      transform: "scale(1.1)",
    },
  },
  card: ({ color }) => ({
    minWidth: 56,
    borderRadius: 16,
    boxShadow: "none",
    "&:hover": {
      boxShadow: `0 6px 12px 0 ${Color(color)
        .rotate(-12)
        .darken(0.2)
        .fade(0.5)}`,
    },
  }),
  content: ({ color }) => {
    return {
      backgroundColor: color,
      padding: "1rem 1.5rem 1.5rem",
    };
  },
  name: {
    fontFamily: "",
    fontSize: "2rem",
    color: "#fff",
    textTransform: "uppercase",
  },
  description: {
    fontFamily: "",
    color: "#fff",
    opacity: 0.87,
    marginTop: "2rem",
    fontWeight: 500,
    fontSize: 14,
  },
}));
