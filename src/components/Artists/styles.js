import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  // card styling
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
    fontFamily: "Old Standard TT",
  },
  // modal syling
  modal: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100vh",
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    zIndex: 1,
  },
  innerModal: {
    position: "relative",
    padding: "300px",
    width: "100%",
    height: "100%",
    backgroundColor: "#000",
    opacity: 1,
  },
  closeModal: {
    position: "absolute",
    top: "16px",
    right: "16px",
    border: "none",
    color: "rgb(144, 101, 42)",
    zIndex: 1,
  },
  modalArtistName: {
    position: "absolute",
    top: "15px",
    left: "35px",
    display: "flex",
    justifyContent: "start",
    flexDirection: "column",
    width: "100%",
    fontSize: "50px",
    fontFamily: "Rye, cursive",
    color: "rgb(144, 101, 42)",
  },
  modalArtistDesc: {
    fontSize: "20px",
    fontFamily: "Old Standard TT",
    maxWidth: "650px",
    color: "rgb(144, 101, 42)",
  },
  modalArtistImage: {
    display: "flex",
    justifyContent: "right",
  },
}));
