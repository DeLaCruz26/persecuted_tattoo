import { makeStyles } from "@material-ui/core";

export default makeStyles(() => ({
  root: {
    background: "#000",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  menuIcon: {
    color: "rgb(144, 101, 42)",
    fontSize: "3rem",
    animation: "$bounceLeft 1s ease-in-out",
    animationIterationCount: "infinite",
  },
  "@keyframes bounceLeft": {
    "0%": {
      transform: "translateX(0)",
    },
    "50%": {
      transform: "translateX(-8px)",
    },
  },
}));
