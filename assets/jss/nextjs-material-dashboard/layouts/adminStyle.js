import {
  drawerWidth,
  transition,
  container,
} from "assets/jss/nextjs-material-dashboard.js";

const appStyle = (theme) => ({
  headBand: {
    margin : "0 ! important",
    top : "0",
    right : "0",
    left: "auto",
    height : "33px",
    background: "#3772FF",
    color : "white",
    textAlign:"center",
    float: "center",

  },
  wrapper: {
    position: "relative",
    top: "0",
    height: "100vh",
    background: "black",

  },

  mainPanel: {
    [theme.breakpoints.up("md")]: {
      width: "100%",
    },
    // overflow: "scroll",
    position: "flex",
    float: "left",
    ...transition,
    maxHeight: "100%",
    width: "100%",
    // overflowScrolling: "touch",
    background: "black",

  },
Panel : {
    top: "0 !important",
    bottom: "0",

    width: "100%",
    height : "100vh !important",
    backgroundColor: "black",
    borderLeft : "1.5px solid #2c2a2a",
    zIndex:"1500",
  },
  content: {
    marginTop: "70px",
    padding: "30px 15px",
    minHeight: "calc(100vh - 123px)",

  },
  container:{
    // marginLeft:"250px"
  },
  map: {
    marginTop: "70px",
  },
});

export default appStyle;
