import { makeStyles } from "@material-ui/core";
import background from "../../assets/background.jpeg";

export default makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    backgroundImage: `url(${background})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
  appBar: {
    background: "none",
  },
  wrapper: {
    width: "100%",
    margin: "0 auto",
  },
  grow: {
    flexGrow: 1,
  },
  logo: {
    flexGrow: 1,
    alignItems: "center",
    display: "flex",
  },
  image: {
    marginTop: "10px",
    marginRight: "50px",
  },
  icon: {
    color: "#fff",
    fontSize: "2rem",
  },
}));
