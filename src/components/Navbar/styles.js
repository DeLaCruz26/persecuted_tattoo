import { makeStyles } from "@material-ui/core";

export default makeStyles(() => ({
  root: {
    background: "#000",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    zIndex: 999,
  },
  menuIcon: {
    color: "rgb(144, 101, 42)",
    fontSize: "3rem",
    animation: "$bounceLeft 1s ease-in-out",
    animationIterationCount: "infinite",
    transition: "all 0.8s ease",
    position: "sticky",
  },
  "@keyframes bounceLeft": {
    "0%": {
      transform: "translateX(0)",
    },
    "50%": {
      transform: "translateX(-8px)",
    },
  },
  menuIconActive: {
    transform: "translateX(-100%)",
    transition: "all 0.8s ease",
  },
  logoContainer: {
    right: "0px",
    transform: "translateX(100%)",
    transition: "all 0.8s ease",
  },
  logoContainerActive: {
    transform: "translateX(0%)",
    transition: "all 0.8s ease",
  },
  logo: {
    textDecoration: "none",
  },
  logoName: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "50px",
    width: "100%",
    fontSize: "16px",
    fontFamily: "Rye, cursive",
    color: "rgb(144, 101, 42)",
  },
  navBar: {
    position: "fixed",
    top: 0,
    right: 0,
    marginRight: "10px",
    height: "100%",
    width: "140px",
    background: "transparent",
    right: "0px",
    fontSize: "13px",
    zIndex: 1,
  },
  navbar: {
    marginTop: "8px",
    height: "50px",
    width: "100%",
    margin: "0, 5px",
    right: "0px",
    transform: "translateX(100%)",
    transition: "all 0.8s ease",
    marginLeft: 0,
  },
  navbarActive: {
    transform: "translateX(0%)",
    transition: "all 0.8s ease",
    marginLeft: 0,
  },
  navItem: {
    height: "50px",
    listStyle: "none",
    display: "flex",
    alignItems: "center",
    right: "0px",
  },
  navLink: {
    textDecoration: "none",
  },
  linkText: {
    color: "rgb(144, 101, 42)",
    fontFamily: "Old Standard TT, serif",
  },
}));
