import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    background: "#000",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
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
  icon: {
    color: "rgb(175, 128, 25)",
    fontSize: "2rem",
  },
  container: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: "18rem",
  },
  title: {
    color: "rgb(176, 125, 35)",
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
    color: "rgb(176, 125, 35)",
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
    color: "rgb(176, 125, 35)",
    fontSize: "3.5rem",
    position: "absolute",
    zIndex: 1,
    marginTop: "45rem",
  },
}));
