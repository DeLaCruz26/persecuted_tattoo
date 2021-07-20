import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    background: "#000",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    colors: {
      textPrimary: "#b6b6b6",
      textSecondary: "#ececec",
      bgPrimary: "#23232e",
      bgSecondary: "#141418",
    },
  },
  appBar: {
    background: "none",
  },
  wrapper: {
    width: "100%",
    margin: "0 auto",
    justifyContent: "flex-end",
  },
  grow: {
    flexGrow: 1,
  },
  logo: {
    flexGrow: 1,
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
  container: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: "18rem",
  },
  title: {
    color: "rgb(144, 101, 42)",
    fontFamily: "Rye, cursive",
    fontSize: "5rem",
    textAlign: "center",
    position: "absolute",
    zIndex: 1,
    paddingBottom: "4rem",
    animation: "$fadeIn 3.5s ease-in-out",
  },
  "@keyframes fadeIn": {
    "0%": {
      opacity: 0,
      transform: "translateY(-200)",
    },
    "100%": {
      opacity: 1,
      transform: "translateY(0)",
    },
  },
  subTitle: {
    color: "rgb(144, 101, 42)",
    fontFamily: "Old Standard TT, serif",
    fontSize: "2rem",
    position: "absolute",
    paddingTop: "4rem",
    zIndex: 1,
    animation: "$slowFade 6s ease-in-out",
  },
  "@keyframes slowFade": {
    "0%": {
      opacity: 0,
      transform: "translateY(-200)",
    },
    "100%": {
      opacity: 1,
      transform: "translateY(0)",
    },
  },
  image: {
    position: "absolute",
    zIndex: 0,
    marginTop: "10rem",
  },
  downArrow: {
    color: "rgb(144, 101, 42)",
    fontSize: "3.5rem",
    position: "absolute",
    zIndex: 1,
    marginTop: "45rem",
    animation: "$bounce 1s ease-in-out",
    animationIterationCount: "infinite",
  },
  "@keyframes bounce": {
    "0%": {
      transform: "translateY(0)",
    },
    "50%": {
      transform: "translateY(-8px)",
    },
  },
}));
