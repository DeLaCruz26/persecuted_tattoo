import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    background: "#000",
  },
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: "10rem",
  },
  card: {
    width: 345,
    background: "#000",
    margin: "15px",
  },
  media: {
    height: 345,
  },
  artsistName: {
    color: "#fff",
    fontFamily: "Rye, cursive",
  },
  button: {
    color: "rgb(144, 101, 42)",
  },
}));
