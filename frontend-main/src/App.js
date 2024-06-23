import React, { useEffect } from "react";
import {
  Switch,
  Route,
} from "react-router-dom";
import {
  makeStyles,
} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import "bootstrap/dist/css/bootstrap.min.css";

import store from "./app/store";
import { Provider } from "react-redux";

import Header from "./components/Header";
// import Footer from "./components/Footer";

import routes from "./routes";
const useStyles = makeStyles((theme) => ({
  appRoot: {
      height:'100vh',
      display: "flex",
      flexDirection: "column",
  },
}));

function App() {
  const classes = useStyles();
  useEffect(() => {
    document.title = "Copify";
  }, []);

  return (
    <div className={classes.appRoot} >
      <Provider store={store}>
        <CssBaseline />
        <React.Fragment>
          <Header />
          <Switch>
            {routes.map((route, i) => (
                <Route key={i} {...route} />
            ))}
          </Switch>
          {/* <Footer /> */}
        </React.Fragment>
      </Provider>
    </div>
  );
}

export default App;
